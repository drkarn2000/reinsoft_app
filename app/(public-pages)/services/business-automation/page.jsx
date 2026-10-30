import ServiceDetailContent from "../_components/service-detail-content";
import { businessAutomation } from "../_components/service-data";
import { getServiceBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata() {
    const service = await getServiceBySlug("business-automation", businessAutomation);
    return {
        title: service?.seoTitle || service?.title || 'Business Automation & AI Services | REINSOFT',
        description: service?.seoDescription || service?.intro || 'Automate business workflows with WhatsApp Cloud API, CRM integrations, lead capture, follow-ups, reminders, reporting, and practical AI.',
        keywords: service?.seoKeywords || undefined,
        alternates: {
            canonical: service?.canonicalUrl || '/services/business-automation',
        },
    };
}

export default async function BusinessAutomationPage() {
    const service = await getServiceBySlug("business-automation", businessAutomation);
    if (!service) {
        notFound();
    }
    return <ServiceDetailContent service={{ ...service, heroImage: businessAutomation.heroImage }} />;
}
