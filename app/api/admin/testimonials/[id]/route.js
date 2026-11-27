import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function PUT(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;
        const body = await request.json();

        const updateData = {};
        if (body.clientName !== undefined) updateData.clientName = body.clientName.trim();
        if (body.role !== undefined) updateData.role = body.role.trim();
        if (body.companyName !== undefined) updateData.companyName = body.companyName;
        if (body.location !== undefined) updateData.location = body.location;
        if (body.countryCode !== undefined) updateData.countryCode = body.countryCode.toLowerCase();
        if (body.rating !== undefined) updateData.rating = Number(body.rating);
        if (body.reviewText !== undefined) updateData.reviewText = body.reviewText.trim();
        if (body.projectType !== undefined) updateData.projectType = body.projectType;
        if (body.resultBadgeText !== undefined) updateData.resultBadgeText = body.resultBadgeText;
        if (body.resultBadgeColor !== undefined) updateData.resultBadgeColor = body.resultBadgeColor;
        if (body.avatarImage !== undefined) updateData.avatarImage = body.avatarImage;
        if (body.caseStudyLink !== undefined) updateData.caseStudyLink = body.caseStudyLink;
        if (body.isVideo !== undefined) updateData.isVideo = Boolean(body.isVideo);
        if (body.videoUrl !== undefined) updateData.videoUrl = body.videoUrl;
        if (body.subtitleVttUrl !== undefined) updateData.subtitleVttUrl = body.subtitleVttUrl;
        if (body.videoThumbnail !== undefined) updateData.videoThumbnail = body.videoThumbnail;
        if (body.isFeatured !== undefined) updateData.isFeatured = Boolean(body.isFeatured);
        if (body.sortOrder !== undefined) updateData.sortOrder = Number(body.sortOrder);
        if (body.status !== undefined) updateData.status = body.status;

        const updated = await prisma.testimonial.update({
            where: { id },
            data: updateData,
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'UPDATE_TESTIMONIAL',
                targetId: id,
                details: { clientName: updated.clientName },
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

        return NextResponse.json({ testimonial: updated });
    } catch (error) {
        console.error('Error updating testimonial:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update testimonial' },
            { status: error.status || 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;

        const testimonial = await prisma.testimonial.findUnique({ where: { id } });
        if (!testimonial) {
            return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
        }

        await prisma.testimonial.delete({ where: { id } });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'DELETE_TESTIMONIAL',
                targetId: id,
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

        return NextResponse.json({ success: true, message: 'Testimonial deleted successfully' });
    } catch (error) {
        console.error('Error deleting testimonial:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete testimonial' },
            { status: error.status || 500 }
        );
    }
}
