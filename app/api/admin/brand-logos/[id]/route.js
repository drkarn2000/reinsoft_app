import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function PUT(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;
        const body = await request.json();

        const updateData = {};
        if (body.name !== undefined) updateData.name = body.name.trim();
        if (body.logoUrl !== undefined) updateData.logoUrl = body.logoUrl.trim();
        if (body.rowNumber !== undefined) updateData.rowNumber = Number(body.rowNumber);
        if (body.customClass !== undefined) updateData.customClass = body.customClass;
        if (body.bgClass !== undefined) updateData.bgClass = body.bgClass;
        if (body.sortOrder !== undefined) updateData.sortOrder = Number(body.sortOrder);
        if (body.isEnabled !== undefined) updateData.isEnabled = Boolean(body.isEnabled);

        const updated = await prisma.brandLogo.update({
            where: { id },
            data: updateData,
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'UPDATE_BRAND_LOGO',
                targetId: id,
                details: { name: updated.name },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            revalidatePath('/about');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ logo: updated });
    } catch (error) {
        console.error('Error updating brand logo:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update brand logo' },
            { status: error.status || 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;

        const logo = await prisma.brandLogo.findUnique({ where: { id } });
        if (!logo) {
            return NextResponse.json({ error: 'Brand logo not found' }, { status: 404 });
        }

        await prisma.brandLogo.delete({ where: { id } });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'DELETE_BRAND_LOGO',
                targetId: id,
                details: { name: logo.name },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            revalidatePath('/about');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ success: true, message: 'Brand logo deleted successfully' });
    } catch (error) {
        console.error('Error deleting brand logo:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete brand logo' },
            { status: error.status || 500 }
        );
    }
}
