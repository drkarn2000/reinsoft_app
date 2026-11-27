import LongTermSupportContent from "./content";
import { getPageBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata() {
    const page = await getPageBySlug("services/long-term-support-growth");
    return {
        title: page?.seoTitle || page?.title || 'Long-Term IT Support & Maintenance Services',
        description: page?.seoDescription || 'Reliable ongoing support, security updates, and performance optimization. We ensure your business-critical applications stay secure, updated, and running smoothly.',
        keywords: page?.seoKeywords || 'Software maintenance, IT support services, Ongoing web support, Security updates, Reinsoft IT Solutions, Application management',
        alternates: {
            canonical: page?.canonicalUrl || '/services/long-term-support-growth',
        },
    };
}

export default async function LongTermSupportPage() {
    const page = await getPageBySlug("services/long-term-support-growth");
    if (!page) {
        notFound();
    }
    return <LongTermSupportContent />;
}
