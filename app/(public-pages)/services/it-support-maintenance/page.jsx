import ServiceDetailContent from "../_components/service-detail-content";
import { itSupportMaintenance } from "../_components/service-data";
import { getServiceBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata() {
    const service = await getServiceBySlug("it-support-maintenance", itSupportMaintenance);
    return {
        title: service?.seoTitle || service?.title || 'IT Support & Maintenance Services | REINSOFT',
        description: service?.seoDescription || service?.intro || 'Get ongoing IT support, bug fixes, updates, security maintenance, performance optimization, backups, and technical assistance from REINSOFT.',
        keywords: service?.seoKeywords || undefined,
        alternates: {
            canonical: service?.canonicalUrl || '/services/it-support-maintenance',
        },
    };
}

export default async function ItSupportMaintenancePage() {
    const service = await getServiceBySlug("it-support-maintenance", itSupportMaintenance);
    if (!service) {
        notFound();
    }
    return <ServiceDetailContent service={service} />;
}
