import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function POST(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();
        const orderedIds = body?.orderedIds;

        if (
            !Array.isArray(orderedIds) ||
            orderedIds.length === 0 ||
            orderedIds.some((id) => typeof id !== 'string') ||
            new Set(orderedIds).size !== orderedIds.length
        ) {
            return NextResponse.json({ error: 'A unique orderedIds array is required.' }, { status: 400 });
        }

        const existing = await prisma.caseStudy.findMany({
            where: { id: { in: orderedIds } },
            select: { id: true },
        });

        if (existing.length !== orderedIds.length) {
            return NextResponse.json({ error: 'One or more case studies could not be found.' }, { status: 400 });
        }

        await prisma.$transaction(
            orderedIds.map((id, index) =>
                prisma.caseStudy.update({
                    where: { id },
                    data: { sortOrder: index + 1 },
                })
            )
        );

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'REORDER_CASE_STUDIES',
                details: { orderedIds },
            },
        });

        const { revalidatePath } = await import('next/cache');
        revalidatePath('/portfolio');
        revalidatePath('/our-work');
        revalidatePath('/');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error reordering case studies:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to reorder case studies' },
            { status: error.status || 500 }
        );
    }
}
