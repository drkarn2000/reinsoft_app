import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import prisma from './prisma';

export const SESSION_COOKIE_NAME = 'reinsoft_admin_session';
const SESSION_EXPIRY = '8h';
const SESSION_MAX_AGE_SECONDS = 8 * 60 * 60; // 8 hours

function getJwtSecretKey() {
    const secret = process.env.ADMIN_JWT_SECRET;
    if (!secret || secret.length < 32) {
        throw new Error(
            'ADMIN_JWT_SECRET environment variable is missing or shorter than 32 characters.'
        );
    }
    return new TextEncoder().encode(secret);
}

// -----------------------------------------------------------------------------
// PASSWORD HASHING (bcrypt - cost factor 12)
// -----------------------------------------------------------------------------
export async function hashPassword(plainPassword) {
    if (!plainPassword || plainPassword.length < 8) {
        throw new Error('Password must be at least 8 characters long.');
    }
    return bcrypt.hash(plainPassword, 12);
}

export async function comparePassword(plainPassword, hashedPassword) {
    if (!plainPassword || !hashedPassword) return false;
    return bcrypt.compare(plainPassword, hashedPassword);
}

// -----------------------------------------------------------------------------
// JWT TOKEN MANAGEMENT (jose - HS256)
// -----------------------------------------------------------------------------
export async function signAdminToken(payload) {
    const key = getJwtSecretKey();
    return new SignJWT({
        sub: payload.id,
        email: payload.email,
        name: payload.name,
        role: payload.role,
    })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(SESSION_EXPIRY)
        .sign(key);
}

export async function verifyAdminToken(token) {
    if (!token) return null;
    try {
        const key = getJwtSecretKey();
        const { payload } = await jwtVerify(token, key, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch {
        return null;
    }
}

// -----------------------------------------------------------------------------
// COOKIE CONFIGURATION (HttpOnly, Secure, SameSite=Lax)
// -----------------------------------------------------------------------------
export function getSessionCookieOptions() {
    const isProduction = process.env.NODE_ENV === 'production';
    return {
        name: SESSION_COOKIE_NAME,
        httpOnly: true,
        secure: isProduction,
        sameSite: 'lax',
        path: '/',
        maxAge: SESSION_MAX_AGE_SECONDS,
    };
}

// -----------------------------------------------------------------------------
// SERVER-SIDE SESSION VERIFICATION
// -----------------------------------------------------------------------------
export async function getAuthenticatedAdmin() {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
        if (!sessionCookie?.value) return null;

        const payload = await verifyAdminToken(sessionCookie.value);
        if (!payload?.sub) return null;

        // Verify that the user still exists and is active in the database
        const user = await prisma.adminUser.findUnique({
            where: { id: payload.sub },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                isActive: true,
                lastLoginAt: true,
                createdAt: true,
            },
        });

        if (!user || !user.isActive) {
            return null;
        }

        return user;
    } catch (err) {
        console.error('Error verifying admin session:', err);
        return null;
    }
}

// -----------------------------------------------------------------------------
// SERVER-SIDE AUTHORIZATION GUARD FOR API ROUTES & ACTIONS
// -----------------------------------------------------------------------------
export async function requireAdmin(requiredRole = null) {
    const user = await getAuthenticatedAdmin();

    if (!user) {
        const error = new Error('Unauthorized');
        error.status = 401;
        throw error;
    }

    if (requiredRole && requiredRole === 'SUPER_ADMIN' && user.role !== 'SUPER_ADMIN') {
        const error = new Error('Forbidden: Super Admin privilege required');
        error.status = 403;
        throw error;
    }

    return user;
}
