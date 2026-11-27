import prisma from '@/lib/prisma';
import NavigationManagerClient from './_components/navigation-manager';

export const metadata = {
    title: 'Navigation & Menus | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default async function NavigationAdminPage() {
    const items = await prisma.navigationItem.findMany({
        orderBy: [{ location: 'asc' }, { sortOrder: 'asc' }],
    });

    return <NavigationManagerClient initialItems={items} />;
}
