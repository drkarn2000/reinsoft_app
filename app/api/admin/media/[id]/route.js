import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function PUT(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;
        const body = await request.json();

        // If it's a disk file not yet in db, create it
        if (id.startsWith('disk-')) {
            const asset = await prisma.mediaAsset.create({
                data: {
                    filename: body.filename || id.replace('disk-', ''),
                    originalName: body.filename || id.replace('disk-', ''),
                    url: body.url || `/assets/${id.replace('disk-', '')}`,
                    altText: body.altText || null,
                    folder: body.folder || 'general',
                    sizeBytes: Number(body.sizeBytes) || 0,
                    mimeType: body.mimeType || 'image/jpeg',
                },
            });
            return NextResponse.json({ asset });
        }

        const updateData = {};
        if (body.altText !== undefined) updateData.altText = body.altText;
        if (body.folder !== undefined) updateData.folder = body.folder;

        const updated = await prisma.mediaAsset.update({
            where: { id },
            data: updateData,
        });

        return NextResponse.json({ asset: updated });
    } catch (error) {
        console.error('Error updating media asset:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update media asset' },
            { status: error.status || 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const user = await requireAdmin();
        const { id } = await params;

        if (id.startsWith('disk-')) {
            return NextResponse.json(
                { error: 'Cannot delete physical static assets from /public/assets via API.' },
                { status: 400 }
            );
        }

        await prisma.mediaAsset.delete({ where: { id } });

        return NextResponse.json({ success: true, message: 'Media record removed' });
    } catch (error) {
        console.error('Error deleting media asset:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete media asset' },
            { status: error.status || 500 }
        );
    }
}
