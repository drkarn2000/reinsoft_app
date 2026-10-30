import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function PUT(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;
        const body = await request.json();

        const updateData = {};
        if (body.status !== undefined) updateData.status = body.status;
        if (body.notes !== undefined) updateData.notes = body.notes;

        const updated = await prisma.formSubmission.update({
            where: { id },
            data: updateData,
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'UPDATE_INQUIRY_STATUS',
                targetId: id,
                details: { status: updated.status },
            },
        });

        return NextResponse.json({ inquiry: updated });
    } catch (error) {
        console.error('Error updating inquiry:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update inquiry' },
            { status: error.status || 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const user = await requireAdmin('SUPER_ADMIN'); // Super admin guard for deleting lead submissions
        const { id } = await params;

        const inquiry = await prisma.formSubmission.findUnique({ where: { id } });
        if (!inquiry) {
            return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
        }

        await prisma.formSubmission.delete({ where: { id } });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'DELETE_INQUIRY',
                targetId: id,
                details: { email: inquiry.email },
            },
        });

        return NextResponse.json({ success: true, message: 'Inquiry deleted successfully' });
    } catch (error) {
        console.error('Error deleting inquiry:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete inquiry' },
            { status: error.status || 500 }
        );
    }
}
