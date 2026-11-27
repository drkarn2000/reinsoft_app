import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(request) {
    try {
        await requireAdmin();

        const { searchParams } = new URL(request.url);
        const location = searchParams.get('location');

        const where = {};
        if (location && location !== 'ALL') where.location = location;

        const items = await prisma.navigationItem.findMany({
            where,
            orderBy: [{ location: 'asc' }, { sortOrder: 'asc' }],
        });

        return NextResponse.json({ items });
    } catch (error) {
        console.error('Error fetching navigation items:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch navigation items' },
            { status: error.status || 500 }
        );
    }
}

export async function POST(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();

        const { location, label, href, iconName, description, sortOrder, isEnabled, openInNewTab } = body;

        if (!location || !label || !href) {
            return NextResponse.json(
                { error: 'Location, label, and URL href are required' },
                { status: 400 }
            );
        }

        let targetSortOrder = sortOrder;
        if (targetSortOrder === undefined || targetSortOrder === null) {
            const last = await prisma.navigationItem.findFirst({
                where: { location },
                orderBy: { sortOrder: 'desc' },
            });
            targetSortOrder = last ? last.sortOrder + 1 : 1;
        }

        const item = await prisma.navigationItem.create({
            data: {
                location,
                label: label.trim(),
                href: href.trim(),
                iconName: iconName || null,
                description: description || null,
                sortOrder: Number(targetSortOrder),
                isEnabled: isEnabled !== undefined ? Boolean(isEnabled) : true,
                openInNewTab: Boolean(openInNewTab),
            },
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'CREATE_NAV_ITEM',
                targetId: item.id,
                details: { label: item.label, location: item.location },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/', 'layout');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ item }, { status: 201 });
    } catch (error) {
        console.error('Error creating navigation item:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create navigation item' },
            { status: error.status || 500 }
        );
    }
}
