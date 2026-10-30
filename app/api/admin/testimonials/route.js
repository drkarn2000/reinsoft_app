import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(request) {
    try {
        await requireAdmin();

        const { searchParams } = new URL(request.url);
        const search = searchParams.get('search');
        const isVideo = searchParams.get('isVideo');

        const where = {};
        if (isVideo === 'true') where.isVideo = true;
        if (isVideo === 'false') where.isVideo = false;
        if (search) {
            where.OR = [
                { clientName: { contains: search, mode: 'insensitive' } },
                { companyName: { contains: search, mode: 'insensitive' } },
                { reviewText: { contains: search, mode: 'insensitive' } },
            ];
        }

        const testimonials = await prisma.testimonial.findMany({
            where,
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
        });

        return NextResponse.json({ testimonials });
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch testimonials' },
            { status: error.status || 500 }
        );
    }
}

export async function POST(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();

        const {
            clientName,
            role,
            companyName,
            location,
            countryCode,
            rating,
            reviewText,
            projectType,
            resultBadgeText,
            resultBadgeColor,
            avatarImage,
            caseStudyLink,
            isVideo,
            videoUrl,
            subtitleVttUrl,
            videoThumbnail,
            isFeatured,
            sortOrder,
            status,
        } = body;

        if (!clientName || !reviewText) {
            return NextResponse.json(
                { error: 'Client name and review text are required.' },
                { status: 400 }
            );
        }

        let targetSortOrder = sortOrder;
        if (targetSortOrder === undefined || targetSortOrder === null) {
            const last = await prisma.testimonial.findFirst({
                orderBy: { sortOrder: 'desc' },
            });
            targetSortOrder = last ? last.sortOrder + 1 : 1;
        }

        const testimonial = await prisma.testimonial.create({
            data: {
                clientName: clientName.trim(),
                role: role || 'Founder & CEO',
                companyName: companyName || null,
                location: location || 'United States',
                countryCode: countryCode ? countryCode.toLowerCase() : 'us',
                rating: rating ? Number(rating) : 5,
                reviewText: reviewText.trim(),
                projectType: projectType || 'Custom Software Development',
                resultBadgeText: resultBadgeText || null,
                resultBadgeColor: resultBadgeColor || 'text-green-600 bg-green-100',
                avatarImage: avatarImage || null,
                caseStudyLink: caseStudyLink || null,
                isVideo: Boolean(isVideo),
                videoUrl: videoUrl || null,
                subtitleVttUrl: subtitleVttUrl || null,
                videoThumbnail: videoThumbnail || null,
                isFeatured: Boolean(isFeatured),
                sortOrder: Number(targetSortOrder),
                status: status || 'PUBLISHED',
            },
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'CREATE_TESTIMONIAL',
                targetId: testimonial.id,
                details: { clientName: testimonial.clientName },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            revalidatePath('/testimonial');
            revalidatePath('/about');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ testimonial }, { status: 201 });
    } catch (error) {
        console.error('Error creating testimonial:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create testimonial' },
            { status: error.status || 500 }
        );
    }
}
