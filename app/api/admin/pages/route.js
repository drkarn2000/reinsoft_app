import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(request) {
    try {
        await requireAdmin();

        const { searchParams } = new URL(request.url);
        const pageType = searchParams.get('pageType');
        const search = searchParams.get('search');

        const where = {};
        if (pageType && pageType !== 'ALL') {
            where.pageType = pageType;
        }
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { slug: { contains: search, mode: 'insensitive' } },
            ];
        }

        const pages = await prisma.page.findMany({
            where,
            include: {
                _count: {
                    select: { sections: true },
                },
            },
            orderBy: [{ pageType: 'asc' }, { slug: 'asc' }],
        });

        return NextResponse.json({ pages });
    } catch (error) {
        console.error('Error fetching pages:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch pages' },
            { status: error.status || 500 }
        );
    }
}

export async function POST(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();

        const { title, slug, pageType, status, seoTitle, seoDescription, seoKeywords, canonicalUrl } = body;

        if (!title || title.trim() === '') {
            return NextResponse.json({ error: 'Page title is required' }, { status: 400 });
        }

        // Clean slug (allow empty string for Home page)
        const cleanSlug = slug === undefined || slug === null ? '' : slug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');

        // Check for existing slug
        const existing = await prisma.page.findUnique({
            where: { slug: cleanSlug },
        });

        if (existing) {
            return NextResponse.json(
                { error: `A page with slug "/${cleanSlug}" already exists.` },
                { status: 409 }
            );
        }

        const page = await prisma.page.create({
            data: {
                title: title.trim(),
                slug: cleanSlug,
                pageType: pageType || 'CUSTOM',
                status: status || 'PUBLISHED',
                seoTitle: seoTitle || null,
                seoDescription: seoDescription || null,
                seoKeywords: seoKeywords || null,
                canonicalUrl: canonicalUrl || (cleanSlug ? `https://reinsoft.tech/${cleanSlug}` : 'https://reinsoft.tech'),
            },
        });

        // Audit log
        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'CREATE_PAGE',
                targetId: page.id,
                details: { slug: page.slug, title: page.title },
            },
        });

        return NextResponse.json({ page }, { status: 201 });
    } catch (error) {
        console.error('Error creating page:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create page' },
            { status: error.status || 500 }
        );
    }
}
