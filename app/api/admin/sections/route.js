import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function POST(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();

        const { pageId, sectionType, name, sortOrder, isEnabled, content, settings } = body;

        if (!pageId || !sectionType) {
            return NextResponse.json(
                { error: 'pageId and sectionType are required' },
                { status: 400 }
            );
        }

        // Determine sort order if not provided
        let targetSortOrder = sortOrder;
        if (targetSortOrder === undefined || targetSortOrder === null) {
            const lastSection = await prisma.pageSection.findFirst({
                where: { pageId },
                orderBy: { sortOrder: 'desc' },
            });
            targetSortOrder = lastSection ? lastSection.sortOrder + 1 : 1;
        }

        const section = await prisma.pageSection.create({
            data: {
                pageId,
                sectionType,
                name: name || `${sectionType.replace(/_/g, ' ')}`,
                sortOrder: targetSortOrder,
                isEnabled: isEnabled !== undefined ? Boolean(isEnabled) : true,
                content: content || {},
                settings: settings || {},
            },
            include: { page: true },
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'CREATE_SECTION',
                targetId: section.id,
                details: { pageId, sectionType, name: section.name },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            revalidatePath('/about');
            revalidatePath('/services');
            if (section.page?.slug) {
                revalidatePath(`/${section.page.slug}`);
            }
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ section }, { status: 201 });
    } catch (error) {
        console.error('Error creating section:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create section' },
            { status: error.status || 500 }
        );
    }
}

// Bulk reorder sections for a page
export async function PUT(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();
        const { orderedIds } = body;

        if (!Array.isArray(orderedIds) || orderedIds.length === 0) {
            return NextResponse.json(
                { error: 'orderedIds array is required' },
                { status: 400 }
            );
        }

        // Update sort order for each section
        await Promise.all(
            orderedIds.map((id, index) =>
                prisma.pageSection.update({
                    where: { id },
                    data: { sortOrder: index + 1 },
                })
            )
        );

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'REORDER_SECTIONS',
                details: { orderedIds },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            revalidatePath('/about');
            revalidatePath('/services');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ success: true, message: 'Sections reordered successfully' });
    } catch (error) {
        console.error('Error reordering sections:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to reorder sections' },
            { status: error.status || 500 }
        );
    }
}
