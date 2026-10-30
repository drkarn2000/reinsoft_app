import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
    try {
        await requireAdmin();

        let settings = await prisma.siteSetting.findUnique({
            where: { id: 'global' },
        });

        if (!settings) {
            settings = await prisma.siteSetting.create({
                data: { id: 'global' },
            });
        }

        return NextResponse.json({ settings });
    } catch (error) {
        console.error('Error fetching site settings:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch settings' },
            { status: error.status || 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();

        const {
            companyName,
            tagline,
            contactEmail,
            contactPhone,
            whatsappNumber,
            whatsappMessage,
            address,
            gtmId,
            gaId,
            googleVerification,
            defaultSeoTitle,
            defaultSeoDesc,
            defaultSeoKeywords,
            canonicalBaseUrl,
        } = body;

        const updated = await prisma.siteSetting.upsert({
            where: { id: 'global' },
            create: {
                id: 'global',
                companyName: companyName || 'Reinsoft IT Solutions',
                tagline: tagline || '',
                contactEmail: contactEmail || 'info@reinsoft.tech',
                contactPhone: contactPhone || '+91 89683 69582',
                whatsappNumber: whatsappNumber || '918968369582',
                whatsappMessage: whatsappMessage || '',
                address: address || '',
                gtmId: gtmId || '',
                gaId: gaId || '',
                googleVerification: googleVerification || '',
                defaultSeoTitle: defaultSeoTitle || '',
                defaultSeoDesc: defaultSeoDesc || '',
                defaultSeoKeywords: defaultSeoKeywords || '',
                canonicalBaseUrl: canonicalBaseUrl || 'https://reinsoft.tech',
            },
            update: {
                companyName,
                tagline,
                contactEmail,
                contactPhone,
                whatsappNumber,
                whatsappMessage,
                address,
                gtmId,
                gaId,
                googleVerification,
                defaultSeoTitle,
                defaultSeoDesc,
                defaultSeoKeywords,
                canonicalBaseUrl,
            },
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'UPDATE_SITE_SETTINGS',
                targetId: 'global',
                details: { companyName: updated.companyName },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/', 'layout');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ settings: updated });
    } catch (error) {
        console.error('Error updating site settings:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update settings' },
            { status: error.status || 500 }
        );
    }
}
