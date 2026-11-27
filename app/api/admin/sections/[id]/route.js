import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function PUT(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;
        const body = await request.json();

        const { name, isEnabled, sortOrder, content, settings, sectionType } = body;

        const updateData = {};
        if (name !== undefined) updateData.name = name;
        if (isEnabled !== undefined) updateData.isEnabled = Boolean(isEnabled);
        if (sortOrder !== undefined) updateData.sortOrder = Number(sortOrder);
        if (content !== undefined) updateData.content = content;
        if (settings !== undefined) updateData.settings = settings;
        if (sectionType !== undefined) updateData.sectionType = sectionType;

        const updatedSection = await prisma.pageSection.update({
            where: { id },
            data: updateData,
            include: { page: true },
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'UPDATE_SECTION',
                targetId: id,
                details: { name: updatedSection.name, isEnabled: updatedSection.isEnabled },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            revalidatePath('/about');
            revalidatePath('/services');
            if (updatedSection.page?.slug) {
                revalidatePath(`/${updatedSection.page.slug}`);
            }
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ section: updatedSection });
    } catch (error) {
        console.error('Error updating section:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update section' },
            { status: error.status || 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;

        const section = await prisma.pageSection.findUnique({
            where: { id },
            include: { page: true },
        });
        if (!section) {
            return NextResponse.json({ error: 'Section not found' }, { status: 404 });
        }

        await prisma.pageSection.delete({ where: { id } });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'DELETE_SECTION',
                targetId: id,
                details: { name: section.name, pageId: section.pageId },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            revalidatePath('/about');
            revalidatePath('/services');
            if (section.page?.slug) {
                revalidatePath(`/${section.page.slug}`);
            }
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ success: true, message: 'Section deleted successfully' });
    } catch (error) {
        console.error('Error deleting section:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete section' },
            { status: error.status || 500 }
        );
    }
}
