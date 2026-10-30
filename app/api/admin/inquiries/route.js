import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(request) {
    try {
        await requireAdmin();

        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const type = searchParams.get('type');
        const search = searchParams.get('search');

        const where = {};
        if (status && status !== 'ALL') where.status = status;
        if (type && type !== 'ALL') where.type = type;
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } },
                { companyName: { contains: search, mode: 'insensitive' } },
                { message: { contains: search, mode: 'insensitive' } },
            ];
        }

        const inquiries = await prisma.formSubmission.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json({ inquiries });
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch inquiries' },
            { status: error.status || 500 }
        );
    }
}

export async function POST(request) {
    try {
        await requireAdmin();
        const body = await request.json();

        const { name, email, phone, companyName, enquiryType, budget, message, type } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        const inquiry = await prisma.formSubmission.create({
            data: {
                name: name.trim(),
                email: email.trim(),
                phone: phone || null,
                companyName: companyName || null,
                enquiryType: enquiryType || 'General Consultation',
                budget: budget || null,
                message: message.trim(),
                type: type || 'GENERAL_CONTACT',
                status: 'NEW',
            },
        });

        return NextResponse.json({ inquiry }, { status: 201 });
    } catch (error) {
        console.error('Error creating inquiry:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create inquiry' },
            { status: error.status || 500 }
        );
    }
}
