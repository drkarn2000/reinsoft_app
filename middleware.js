import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SESSION_COOKIE_NAME = 'reinsoft_admin_session';

async function verifyToken(token, secret) {
    if (!token || !secret) return null;
    try {
        const key = new TextEncoder().encode(secret);
        const { payload } = await jwtVerify(token, key, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch {
        return null;
    }
}

export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    const jwtSecret = process.env.ADMIN_JWT_SECRET;

    const isApiAdmin = pathname.startsWith('/api/admin');
    const isAdminRoute = pathname.startsWith('/admin');

    // Public auth endpoints
    const isLoginPage = pathname === '/admin/login';
    const isLoginApi = pathname === '/api/admin/auth/login';

    if (isLoginApi) {
        return NextResponse.next();
    }

    const payload = await verifyToken(sessionToken, jwtSecret);
    const isAuthenticated = Boolean(payload?.sub);

    // If already logged in and visiting /admin/login, redirect to /admin dashboard
    if (isLoginPage) {
        if (isAuthenticated) {
            const dashboardUrl = new URL('/admin', request.url);
            return NextResponse.redirect(dashboardUrl);
        }
        return NextResponse.next();
    }

    // Protect all other /admin routes
    if (isAdminRoute) {
        if (!isAuthenticated) {
            const loginUrl = new URL('/admin/login', request.url);
            // Preserve return destination
            if (pathname !== '/admin') {
                loginUrl.searchParams.set('redirect', pathname);
            }
            return NextResponse.redirect(loginUrl);
        }
        return NextResponse.next();
    }

    // Protect all other /api/admin routes
    if (isApiAdmin) {
        if (!isAuthenticated) {
            return NextResponse.json(
                { error: 'Unauthorized: Authentication required' },
                { status: 401 }
            );
        }
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*'],
};
