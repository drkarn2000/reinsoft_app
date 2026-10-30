import { NextResponse } from 'next/server';
import { getAuthenticatedAdmin, SESSION_COOKIE_NAME } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function POST(request) {
    try {
        const user = await getAuthenticatedAdmin();

        if (user) {
            const clientIp = request.headers.get('x-forwarded-for') || 'local';
            const userAgent = request.headers.get('user-agent') || 'unknown';

            await prisma.auditLog.create({
                data: {
                    userId: user.id,
                    action: 'ADMIN_LOGOUT',
                    details: {
                        ip: clientIp,
                        userAgent: userAgent,
                    },
                },
            }).catch(() => { });
        }

        const response = NextResponse.json({ success: true, message: 'Logged out successfully.' });

        // Invalidate session cookie immediately
        response.cookies.set({
            name: SESSION_COOKIE_NAME,
            value: '',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 0,
            expires: new Date(0),
        });

        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json(
            { error: 'Failed to process logout.' },
            { status: 500 }
        );
    }
}
