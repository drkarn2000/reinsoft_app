import prisma from '@/lib/prisma';
import BrandLogosManagerClient from './_components/brand-logos-manager';

export const metadata = {
    title: 'Brand Logos | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default async function BrandLogosAdminPage() {
    const logos = await prisma.brandLogo.findMany({
        orderBy: [{ rowNumber: 'asc' }, { sortOrder: 'asc' }],
    });

    return <BrandLogosManagerClient initialLogos={logos} />;
}
