import prisma from '@/lib/prisma';
import InquiriesManagerClient from './_components/inquiries-manager';

export const metadata = {
    title: 'Inquiries Inbox | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default async function InquiriesAdminPage() {
    const inquiries = await prisma.formSubmission.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return <InquiriesManagerClient initialInquiries={inquiries} />;
}
