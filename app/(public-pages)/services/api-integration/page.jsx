import ApiIntegrationContent from "./content";
import { getPageBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata() {
    const page = await getPageBySlug("services/api-integration");
    return {
        title: page?.seoTitle || page?.title || 'API Development & Integration | REST & GraphQL',
        description: page?.seoDescription || 'Expert API development and third-party integration services. Build robust REST and GraphQL APIs, connect payment gateways, CRMs, and ERPs with scalable architecture.',
        keywords: page?.seoKeywords || 'API development, API integration services, REST API, GraphQL, CRM integration, Reinsoft IT Solutions, Microservices',
        alternates: {
            canonical: page?.canonicalUrl || '/services/api-integration',
        },
    };
}

export default async function ApiIntegrationPage() {
    const page = await getPageBySlug("services/api-integration");
    if (!page) {
        notFound();
    }
    return <ApiIntegrationContent />;
}
