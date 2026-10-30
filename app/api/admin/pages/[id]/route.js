import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(request, { params }) {
    try {
        await requireAdmin();
        const { id } = await params;

        const page = await prisma.page.findUnique({
            where: { id },
            include: {
                sections: {
                    orderBy: { sortOrder: 'asc' },
                },
            },
        });

        if (!page) {
            return NextResponse.json({ error: 'Page not found' }, { status: 404 });
        }

        return NextResponse.json({ page });
    } catch (error) {
        console.error('Error fetching page:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch page' },
            { status: error.status || 500 }
        );
    }
}

export async function PUT(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;
        const body = await request.json();

        const {
            title,
            slug,
            pageType,
            status,
            seoTitle,
            seoDescription,
            seoKeywords,
            canonicalUrl,
            ogImageUrl,
            noIndex,
        } = body;

        const cleanSlug = slug === undefined || slug === null ? '' : slug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');

        // Check if slug taken by another page
        const existingWithSlug = await prisma.page.findUnique({
            where: { slug: cleanSlug },
        });

        if (existingWithSlug && existingWithSlug.id !== id) {
            return NextResponse.json(
                { error: `Slug "/${cleanSlug}" is already in use by another page.` },
                { status: 409 }
            );
        }

        const updatedPage = await prisma.page.update({
            where: { id },
            data: {
                title: title?.trim(),
                slug: cleanSlug,
                pageType,
                status,
                seoTitle: seoTitle || null,
                seoDescription: seoDescription || null,
                seoKeywords: seoKeywords || null,
                canonicalUrl: canonicalUrl || null,
                ogImageUrl: ogImageUrl || null,
                noIndex: Boolean(noIndex),
            },
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'UPDATE_PAGE',
                targetId: id,
                details: { title: updatedPage.title, slug: updatedPage.slug },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            revalidatePath('/about');
            revalidatePath('/services');
            if (updatedPage.slug) {
                revalidatePath(`/${updatedPage.slug}`);
            }
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ page: updatedPage });
    } catch (error) {
        console.error('Error updating page:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update page' },
            { status: error.status || 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const user = await requireAdmin('SUPER_ADMIN'); // Super admin guard for deleting pages
        const { id } = await params;

        const page = await prisma.page.findUnique({ where: { id } });
        if (!page) {
            return NextResponse.json({ error: 'Page not found' }, { status: 404 });
        }

        // Prevent deleting Home page
        if (page.slug === '') {
            return NextResponse.json(
                { error: 'Cannot delete the primary Homepage.' },
                { status: 400 }
            );
        }

        await prisma.page.delete({ where: { id } });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'DELETE_PAGE',
                targetId: id,
                details: { slug: page.slug, title: page.title },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            if (page.slug) {
                revalidatePath(`/${page.slug}`);
            }
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ success: true, message: 'Page deleted successfully' });
    } catch (error) {
        console.error('Error deleting page:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete page' },
            { status: error.status || 500 }
        );
    }
}
