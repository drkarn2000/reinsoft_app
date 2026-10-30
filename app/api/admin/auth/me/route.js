import { NextResponse } from 'next/server';
import { getAuthenticatedAdmin } from '@/lib/auth';

export async function GET() {
    try {
        const user = await getAuthenticatedAdmin();

        if (!user) {
            return NextResponse.json(
                { error: 'Unauthorized: No active admin session.' },
                { status: 401 }
            );
        }

        return NextResponse.json({
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                lastLoginAt: user.lastLoginAt,
            },
        });
    } catch (error) {
        console.error('Session retrieval error:', error);
        return NextResponse.json(
            { error: 'Failed to verify session.' },
            { status: 500 }
        );
    }
}
