import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(request) {
    try {
        await requireAdmin();

        const { searchParams } = new URL(request.url);
        const folder = searchParams.get('folder');
        const search = searchParams.get('search');

        // Query database media assets
        const dbAssets = await prisma.mediaAsset.findMany({
            orderBy: { createdAt: 'desc' },
        });

        // Also scan /public/assets for disk files that exist
        const publicAssetsDir = path.join(process.cwd(), 'public', 'assets');
        let diskFiles = [];
        if (fs.existsSync(publicAssetsDir)) {
            const files = fs.readdirSync(publicAssetsDir);
            diskFiles = files
                .filter((file) => /\.(jpg|jpeg|png|webp|svg|gif|mp4|webm)$/i.test(file))
                .map((file) => {
                    const stats = fs.statSync(path.join(publicAssetsDir, file));
                    return {
                        id: `disk-${file}`,
                        filename: file,
                        originalName: file,
                        url: `/assets/${file}`,
                        mimeType: file.endsWith('.mp4') ? 'video/mp4' : 'image/jpeg',
                        sizeBytes: stats.size,
                        altText: file.replace(/[._-]/g, ' '),
                        folder: 'general',
                        isDiskOnly: true,
                        createdAt: stats.birthtime,
                    };
                });
        }

        // Merge, avoiding duplicates where db asset matches url
        const dbUrls = new Set(dbAssets.map((a) => a.url));
        const combined = [
            ...dbAssets,
            ...diskFiles.filter((df) => !dbUrls.has(df.url)),
        ];

        // Apply filters
        const filtered = combined.filter((item) => {
            if (folder && folder !== 'ALL' && item.folder !== folder) return false;
            if (search && !item.filename.toLowerCase().includes(search.toLowerCase())) return false;
            return true;
        });

        return NextResponse.json({ assets: filtered });
    } catch (error) {
        console.error('Error fetching media assets:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch media assets' },
            { status: error.status || 500 }
        );
    }
}

export async function POST(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();

        const { url, filename, altText, folder, sizeBytes, mimeType } = body;

        if (!url || !filename) {
            return NextResponse.json(
                { error: 'Asset URL and filename are required' },
                { status: 400 }
            );
        }

        const asset = await prisma.mediaAsset.create({
            data: {
                filename: filename.trim(),
                originalName: filename.trim(),
                url: url.trim(),
                altText: altText || null,
                folder: folder || 'general',
                sizeBytes: Number(sizeBytes) || 0,
                mimeType: mimeType || (url.endsWith('.mp4') ? 'video/mp4' : 'image/jpeg'),
            },
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'CREATE_MEDIA_ASSET',
                targetId: asset.id,
                details: { filename: asset.filename, url: asset.url },
            },
        });

        return NextResponse.json({ asset }, { status: 201 });
    } catch (error) {
        console.error('Error creating media asset:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to register media asset' },
            { status: error.status || 500 }
        );
    }
}
