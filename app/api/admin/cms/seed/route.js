import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST() {
    try {
        await requireAdmin('SUPER_ADMIN');
        const { runIngestion } = await import('@/scripts/ingest-content.js');
        await runIngestion();

        return NextResponse.json({
            success: true,
            message: 'CMS content was synchronized successfully.',
        });
    } catch (error) {
        console.error('CMS synchronization failed:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to synchronize CMS content.' },
            { status: error.status || 500 }
        );
    }
}
