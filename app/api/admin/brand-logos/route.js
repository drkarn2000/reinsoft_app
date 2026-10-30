import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(request) {
    try {
        await requireAdmin();

        const { searchParams } = new URL(request.url);
        const row = searchParams.get('row');
        const enabledOnly = searchParams.get('enabled') === 'true';

        const where = {};
        if (row) where.rowNumber = Number(row);
        if (enabledOnly) where.isEnabled = true;

        const logos = await prisma.brandLogo.findMany({
            where,
            orderBy: [{ rowNumber: 'asc' }, { sortOrder: 'asc' }],
        });

        return NextResponse.json({ logos });
    } catch (error) {
        console.error('Error fetching brand logos:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch brand logos' },
            { status: error.status || 500 }
        );
    }
}

export async function POST(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();

        const { name, logoUrl, rowNumber, customClass, bgClass, sortOrder, isEnabled } = body;

        if (!name || !logoUrl) {
            return NextResponse.json(
                { error: 'Name and logo URL are required' },
                { status: 400 }
            );
        }

        let targetSortOrder = sortOrder;
        if (targetSortOrder === undefined || targetSortOrder === null) {
            const last = await prisma.brandLogo.findFirst({
                where: { rowNumber: Number(rowNumber) || 1 },
                orderBy: { sortOrder: 'desc' },
            });
            targetSortOrder = last ? last.sortOrder + 1 : 1;
        }

        const logo = await prisma.brandLogo.create({
            data: {
                name: name.trim(),
                logoUrl: logoUrl.trim(),
                rowNumber: Number(rowNumber) || 1,
                customClass: customClass || null,
                bgClass: bgClass || null,
                sortOrder: Number(targetSortOrder),
                isEnabled: isEnabled !== undefined ? Boolean(isEnabled) : true,
            },
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'CREATE_BRAND_LOGO',
                targetId: logo.id,
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

        return NextResponse.json({ logo }, { status: 201 });
    } catch (error) {
        console.error('Error creating brand logo:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create brand logo' },
            { status: error.status || 500 }
        );
    }
}
