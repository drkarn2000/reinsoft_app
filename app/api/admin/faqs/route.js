import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(request) {
    try {
        await requireAdmin();

        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const search = searchParams.get('search');

        const where = {};
        if (category && category !== 'ALL') where.category = category;
        if (search) {
            where.OR = [
                { question: { contains: search, mode: 'insensitive' } },
                { answer: { contains: search, mode: 'insensitive' } },
            ];
        }

        const faqs = await prisma.faqItem.findMany({
            where,
            orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
        });

        return NextResponse.json({ faqs });
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch FAQs' },
            { status: error.status || 500 }
        );
    }
}

export async function POST(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();

        const { category, question, answer, sortOrder, isEnabled } = body;

        if (!question || !answer) {
            return NextResponse.json(
                { error: 'Question and answer are required' },
                { status: 400 }
            );
        }

        let targetSortOrder = sortOrder;
        if (targetSortOrder === undefined || targetSortOrder === null) {
            const last = await prisma.faqItem.findFirst({
                where: { category: category || 'general' },
                orderBy: { sortOrder: 'desc' },
            });
            targetSortOrder = last ? last.sortOrder + 1 : 1;
        }

        const faq = await prisma.faqItem.create({
            data: {
                category: category ? category.toLowerCase().trim() : 'general',
                question: question.trim(),
                answer: answer.trim(),
                sortOrder: Number(targetSortOrder),
                isEnabled: isEnabled !== undefined ? Boolean(isEnabled) : true,
            },
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'CREATE_FAQ',
                targetId: faq.id,
                details: { question: faq.question },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            revalidatePath('/services', 'layout');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ faq }, { status: 201 });
    } catch (error) {
        console.error('Error creating FAQ:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create FAQ' },
            { status: error.status || 500 }
        );
    }
}
