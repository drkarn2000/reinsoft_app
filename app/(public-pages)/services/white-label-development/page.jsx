import ServiceDetailContent from "../_components/service-detail-content";
import { whiteLabelDevelopment } from "../_components/service-data";
import { getServiceBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata() {
    const service = await getServiceBySlug("white-label-development", whiteLabelDevelopment);
    return {
        title: service?.seoTitle || service?.title || 'White-Label Development Partner for Agencies | REINSOFT',
        description: service?.seoDescription || service?.intro || 'REINSOFT provides white-label frontend, backend, mobile app, integration, QA, and delivery support for agencies and software companies.',
        keywords: service?.seoKeywords || undefined,
        alternates: {
            canonical: service?.canonicalUrl || '/services/white-label-development',
        },
    };
}

export default async function WhiteLabelDevelopmentPage() {
    const service = await getServiceBySlug("white-label-development", whiteLabelDevelopment);
    if (!service) {
        notFound();
    }
    return <ServiceDetailContent service={service} />;
}
