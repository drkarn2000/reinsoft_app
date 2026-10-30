import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(request, { params }) {
    try {
        await requireAdmin();
        const { id } = await params;

        const caseStudy = await prisma.caseStudy.findUnique({
            where: { id },
        });

        if (!caseStudy) {
            return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
        }

        return NextResponse.json({ caseStudy });
    } catch (error) {
        console.error('Error fetching case study:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch case study' },
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

        const generatedSlug = (slug || title)
            ?.toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');

        // Check if slug taken by another item
        if (generatedSlug) {
            const existing = await prisma.caseStudy.findUnique({
                where: { slug: generatedSlug },
            });
            if (existing && existing.id !== id) {
                return NextResponse.json(
                    { error: `Slug "${generatedSlug}" is in use by another case study.` },
                    { status: 409 }
                );
            }
        }

        const updateData = {};
        if (title !== undefined) updateData.title = title.trim();
        if (generatedSlug) updateData.slug = generatedSlug;
        if (clientName !== undefined) updateData.clientName = clientName;
        if (liveLink !== undefined) updateData.liveLink = liveLink;
        if (shortDescription !== undefined) updateData.shortDescription = shortDescription.trim();
        if (industry !== undefined) updateData.industry = industry;
        if (category !== undefined) updateData.category = category;
        if (techStack !== undefined) updateData.techStack = Array.isArray(techStack) ? techStack : [];
        if (heroImage !== undefined) updateData.heroImage = heroImage;
        if (overviewHeading !== undefined) updateData.overviewHeading = overviewHeading;
        if (overview !== undefined) updateData.overview = overview;
        if (problemHeading !== undefined) updateData.problemHeading = problemHeading;
        if (problem !== undefined) updateData.problem = problem;
        if (solutionHeading !== undefined) updateData.solutionHeading = solutionHeading;
        if (solution !== undefined) updateData.solution = solution;
        if (features !== undefined) updateData.features = features;
        if (processStages !== undefined) updateData.processStages = processStages;
        if (results !== undefined) updateData.results = results;
        if (screenshots !== undefined) updateData.screenshots = screenshots;
        if (ctaTitle !== undefined) updateData.ctaTitle = ctaTitle;
        if (ctaDescription !== undefined) updateData.ctaDescription = ctaDescription;
        if (ctaButtonText !== undefined) updateData.ctaButtonText = ctaButtonText;
        if (ctaButtonUrl !== undefined) updateData.ctaButtonUrl = ctaButtonUrl;
        if (isFeatured !== undefined) updateData.isFeatured = Boolean(isFeatured);
        if (sortOrder !== undefined) updateData.sortOrder = Number(sortOrder);
        if (status !== undefined) updateData.status = status;
        if (seoTitle !== undefined) updateData.seoTitle = seoTitle;
        if (seoDescription !== undefined) updateData.seoDescription = seoDescription;

        const updated = await prisma.caseStudy.update({
            where: { id },
            data: updateData,
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'UPDATE_CASE_STUDY',
                targetId: id,
                details: { title: updated.title, slug: updated.slug },
            },
        });

        // Trigger on-demand cache revalidation for public pages
        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath(`/case-studies/${updated.slug}`);
            revalidatePath('/portfolio');
            revalidatePath('/our-work');
            revalidatePath('/');
        } catch (revalErr) {
            console.warn('Revalidation warning:', revalErr);
        }

        return NextResponse.json({ caseStudy: updated });
    } catch (error) {
        console.error('Error updating case study:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update case study' },
            { status: error.status || 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;

        const caseStudy = await prisma.caseStudy.findUnique({ where: { id } });
        if (!caseStudy) {
            return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
        }

        await prisma.caseStudy.delete({ where: { id } });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'DELETE_CASE_STUDY',
                targetId: id,
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

        return NextResponse.json({ success: true, message: 'Case study deleted successfully' });
    } catch (error) {
        console.error('Error deleting case study:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete case study' },
            { status: error.status || 500 }
        );
    }
}
