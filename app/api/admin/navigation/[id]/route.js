import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function PUT(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;
        const body = await request.json();

        const updateData = {};
        if (body.location !== undefined) updateData.location = body.location;
        if (body.label !== undefined) updateData.label = body.label.trim();
        if (body.href !== undefined) updateData.href = body.href.trim();
        if (body.iconName !== undefined) updateData.iconName = body.iconName;
        if (body.description !== undefined) updateData.description = body.description;
        if (body.sortOrder !== undefined) updateData.sortOrder = Number(body.sortOrder);
        if (body.isEnabled !== undefined) updateData.isEnabled = Boolean(body.isEnabled);
        if (body.openInNewTab !== undefined) updateData.openInNewTab = Boolean(body.openInNewTab);

        const updated = await prisma.navigationItem.update({
            where: { id },
            data: updateData,
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'UPDATE_NAV_ITEM',
                targetId: id,
                details: { label: updated.label },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/', 'layout');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ item: updated });
    } catch (error) {
        console.error('Error updating navigation item:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update navigation item' },
            { status: error.status || 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;

        const item = await prisma.navigationItem.findUnique({ where: { id } });
        if (!item) {
            return NextResponse.json({ error: 'Navigation item not found' }, { status: 404 });
        }

        await prisma.navigationItem.delete({ where: { id } });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'DELETE_NAV_ITEM',
                targetId: id,
                details: { label: item.label, location: item.location },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/', 'layout');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ success: true, message: 'Navigation item deleted successfully' });
    } catch (error) {
        console.error('Error deleting navigation item:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete navigation item' },
            { status: error.status || 500 }
        );
    }
}
