import prisma from '@/lib/prisma';
import ServicesManagerClient from './_components/services-manager';

export const metadata = {
    title: 'Services Engine | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default async function ServicesAdminPage() {
    const servicePages = await prisma.page.findMany({
        where: {
            OR: [
                { pageType: 'SERVICE_DETAIL' },
                { pageType: 'SERVICES_HUB' },
                { slug: { startsWith: 'services' } },
            ],
        },
        include: {
            sections: {
                orderBy: { sortOrder: 'asc' },
            },
        },
        orderBy: { slug: 'asc' },
    });

    return <ServicesManagerClient initialServices={servicePages} />;
}
