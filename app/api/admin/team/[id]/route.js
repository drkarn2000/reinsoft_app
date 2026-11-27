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
        if (body.role !== undefined) updateData.role = body.role.trim();
        if (body.focusArea !== undefined) updateData.focusArea = body.focusArea;
        if (body.bio !== undefined) updateData.bio = body.bio.trim();
        if (body.imageUrl !== undefined) updateData.imageUrl = body.imageUrl;
        if (body.accentGradient !== undefined) updateData.accentGradient = body.accentGradient;
        if (body.linkedinUrl !== undefined) updateData.linkedinUrl = body.linkedinUrl;
        if (body.isFounder !== undefined) updateData.isFounder = Boolean(body.isFounder);
        if (body.sortOrder !== undefined) updateData.sortOrder = Number(body.sortOrder);
        if (body.isEnabled !== undefined) updateData.isEnabled = Boolean(body.isEnabled);

        const updated = await prisma.teamMember.update({
            where: { id },
            data: updateData,
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'UPDATE_TEAM_MEMBER',
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

        return NextResponse.json({ member: updated });
    } catch (error) {
        console.error('Error updating team member:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update team member' },
            { status: error.status || 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;

        const member = await prisma.teamMember.findUnique({ where: { id } });
        if (!member) {
            return NextResponse.json({ error: 'Team member not found' }, { status: 404 });
        }

        await prisma.teamMember.delete({ where: { id } });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'DELETE_TEAM_MEMBER',
                targetId: id,
                details: { name: member.name },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            revalidatePath('/about');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ success: true, message: 'Team member deleted successfully' });
    } catch (error) {
        console.error('Error deleting team member:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete team member' },
            { status: error.status || 500 }
        );
    }
}
