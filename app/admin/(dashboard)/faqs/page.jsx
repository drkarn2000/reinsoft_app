import prisma from '@/lib/prisma';
import FaqsManagerClient from './_components/faqs-manager';

export const metadata = {
    title: 'FAQs Pool | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default async function FaqsAdminPage() {
    const faqs = await prisma.faqItem.findMany({
        orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
    });

    return <FaqsManagerClient initialFaqs={faqs} />;
}
