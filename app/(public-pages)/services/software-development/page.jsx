import SoftwareDevelopmentContent from './content';
import { getPageBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata() {
    const page = await getPageBySlug("services/software-development");
    return {
        title: page?.seoTitle || page?.title || 'Custom Software Development USA Scalable Apps',
        description: page?.seoDescription || 'Need custom software for your business? Get MVP, CRM & bespoke solutions with expert developers. Build fast, scalable apps today with Reinsoft.',
        keywords: page?.seoKeywords || 'MVP development company in USA, Custom software development company in USA, Custom software developers for startups in USA, CRM development company in UK, Bespoke software development company in UK, Custom software & IT solutions in Australia, CRM software development for small businesses',
        alternates: {
            canonical: page?.canonicalUrl || '/services/software-development',
        },
    };
}

export default async function SoftwareDevelopmentPage() {
    const page = await getPageBySlug("services/software-development");
    if (!page) {
        notFound();
    }
    return <SoftwareDevelopmentContent />;
}
