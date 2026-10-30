import prisma from '@/lib/prisma';
import TeamManagerClient from './_components/team-manager';

export const metadata = {
    title: 'Team & Leadership | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default async function TeamAdminPage() {
    const members = await prisma.teamMember.findMany({
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });

    return <TeamManagerClient initialMembers={members} />;
}
