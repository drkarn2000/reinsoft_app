import prisma from '@/lib/prisma';
import SettingsManagerClient from './_components/settings-manager';

export const metadata = {
    title: 'Global Settings & SEO | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default async function SettingsAdminPage() {
    let settings = await prisma.siteSetting.findUnique({
        where: { id: 'global' },
    });

    if (!settings) {
        settings = await prisma.siteSetting.create({
            data: { id: 'global' },
        });
    }

    return <SettingsManagerClient initialSettings={settings} />;
}
