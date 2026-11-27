import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(request) {
    try {
        await requireAdmin();

        const { searchParams } = new URL(request.url);
        const search = searchParams.get('search');
        const category = searchParams.get('category');
        const status = searchParams.get('status');

        const where = {};
        if (category && category !== 'ALL') {
            where.category = category;
        }
        if (status && status !== 'ALL') {
            where.status = status;
        }
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { slug: { contains: search, mode: 'insensitive' } },
                { industry: { contains: search, mode: 'insensitive' } },
                { clientName: { contains: search, mode: 'insensitive' } },
            ];
        }

        const caseStudies = await prisma.caseStudy.findMany({
            where,
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
        });

        return NextResponse.json({ caseStudies });
    } catch (error) {
        console.error('Error fetching case studies:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch case studies' },
            { status: error.status || 500 }
        );
    }
}

export async function POST(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();

        const {
            title,
            slug,
            clientName,
            liveLink,
            shortDescription,
            industry,
            category,
            techStack,
            heroImage,
            overviewHeading,
            overview,
            problemHeading,
            problem,
            solutionHeading,
            solution,
            features,
            processStages,
            results,
            screenshots,
            ctaTitle,
            ctaDescription,
            ctaButtonText,
            ctaButtonUrl,
            isFeatured,
            sortOrder,
            status,
            seoTitle,
            seoDescription,
        } = body;

        if (!title || !shortDescription) {
            return NextResponse.json(
                { error: 'Title and short description are required.' },
                { status: 400 }
            );
        }

        const generatedSlug = (slug || title)
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');

        const existing = await prisma.caseStudy.findUnique({
            where: { slug: generatedSlug },
        });

        if (existing) {
            return NextResponse.json(
                { error: `Case study with slug "${generatedSlug}" already exists.` },
                { status: 409 }
            );
        }

        // Determine default sort order
        let targetSortOrder = sortOrder;
        if (targetSortOrder === undefined || targetSortOrder === null) {
            const last = await prisma.caseStudy.findFirst({
                orderBy: { sortOrder: 'desc' },
            });
            targetSortOrder = last ? last.sortOrder + 1 : 1;
        }

        const caseStudy = await prisma.caseStudy.create({
            data: {
                title: title.trim(),
                slug: generatedSlug,
                clientName: clientName || null,
                liveLink: liveLink || null,
                shortDescription: shortDescription.trim(),
                industry: industry || 'Technology',
                category: category || 'Web Development',
                techStack: Array.isArray(techStack) ? techStack : [],
                heroImage: heroImage || '/assets/Portfolio1.jpg',
                overviewHeading: overviewHeading || 'Project Overview',
                overview: overview || shortDescription,
                problemHeading: problemHeading || 'The Problem',
                problem: problem || 'Business operational challenges and legacy architecture.',
                solutionHeading: solutionHeading || 'The Solution',
                solution: solution || 'Custom software architecture and modern UI implementation.',
                features: features || [],
                processStages: processStages || [],
                results: results || [],
                screenshots: screenshots || [],
                ctaTitle: ctaTitle || 'Ready to achieve similar results?',
                ctaDescription: ctaDescription || "Let's discuss how we can bring your vision to life with a high-performance digital solution.",
                ctaButtonText: ctaButtonText || 'Start Your Project',
                ctaButtonUrl: ctaButtonUrl || '/#contact',
                isFeatured: Boolean(isFeatured),
                sortOrder: Number(targetSortOrder),
                status: status || 'PUBLISHED',
                seoTitle: seoTitle || title,
                seoDescription: seoDescription || shortDescription,
            },
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'CREATE_CASE_STUDY',
                targetId: caseStudy.id,
                details: { title: caseStudy.title, slug: caseStudy.slug },
            },
        });

        // Trigger on-demand cache revalidation for public pages
        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath(`/case-studies/${caseStudy.slug}`);
            revalidatePath('/portfolio');
            revalidatePath('/our-work');
            revalidatePath('/');
        } catch (revalErr) {
            console.warn('Revalidation warning:', revalErr);
        }

        return NextResponse.json({ caseStudy }, { status: 201 });
    } catch (error) {
        console.error('Error creating case study:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create case study' },
            { status: error.status || 500 }
        );
    }
}
