import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import {
    comparePassword,
    signAdminToken,
    getSessionCookieOptions,
    SESSION_COOKIE_NAME,
} from '@/lib/auth';

export async function POST(request) {
    try {
        const body = await request.json().catch(() => ({}));
        const { email, password } = body;

        // Basic validation
        if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
            return NextResponse.json(
                { error: 'Email and password are required.' },
                { status: 400 }
            );
        }

        const normalizedEmail = email.trim().toLowerCase();

        // Query active user
        const user = await prisma.adminUser.findUnique({
            where: { email: normalizedEmail },
        });

        // Constant time check against invalid user to prevent timing attack enumeration
        const isPasswordValid = user
            ? await comparePassword(password, user.passwordHash)
            : await comparePassword(password, '$2b$12$MTjxyDKQWrZ6KbJQDjCJXuQNm8yQpMPZiZjRC/bX6XfTAxzw0nThe');

        if (!user || !user.isActive || !isPasswordValid) {
            return NextResponse.json(
                { error: 'Invalid email or password.' },
                { status: 401 }
            );
        }

        // Generate JWT token
        const token = await signAdminToken({
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        });

        // Update last login timestamp and write audit log
        const clientIp = request.headers.get('x-forwarded-for') || 'local';
        const userAgent = request.headers.get('user-agent') || 'unknown';

        await prisma.$transaction([
            prisma.adminUser.update({
                where: { id: user.id },
                data: { lastLoginAt: new Date() },
            }),
            prisma.auditLog.create({
                data: {
                    userId: user.id,
                    action: 'ADMIN_LOGIN',
                    details: {
                        ip: clientIp,
                        userAgent: userAgent,
                    },
                },
            }),
        ]);

        const response = NextResponse.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
        });

        const cookieOptions = getSessionCookieOptions();
        response.cookies.set({
            name: SESSION_COOKIE_NAME,
            value: token,
            ...cookieOptions,
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'An unexpected authentication error occurred.' },
            { status: 500 }
        );
    }
}
