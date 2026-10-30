import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function PUT(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;
        const body = await request.json();

        const updateData = {};
        if (body.category !== undefined) updateData.category = body.category.toLowerCase().trim();
        if (body.question !== undefined) updateData.question = body.question.trim();
        if (body.answer !== undefined) updateData.answer = body.answer.trim();
        if (body.sortOrder !== undefined) updateData.sortOrder = Number(body.sortOrder);
        if (body.isEnabled !== undefined) updateData.isEnabled = Boolean(body.isEnabled);

        const updated = await prisma.faqItem.update({
            where: { id },
            data: updateData,
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'UPDATE_FAQ',
                targetId: id,
                details: { question: updated.question },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ faq: updated });
    } catch (error) {
        console.error('Error updating FAQ:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update FAQ' },
            { status: error.status || 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;

        const faq = await prisma.faqItem.findUnique({ where: { id } });
        if (!faq) {
            return NextResponse.json({ error: 'FAQ not found' }, { status: 404 });
        }

        await prisma.faqItem.delete({ where: { id } });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'DELETE_FAQ',
                targetId: id,
                details: { question: faq.question },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ success: true, message: 'FAQ deleted successfully' });
    } catch (error) {
        console.error('Error deleting FAQ:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete FAQ' },
            { status: error.status || 500 }
        );
    }
}
