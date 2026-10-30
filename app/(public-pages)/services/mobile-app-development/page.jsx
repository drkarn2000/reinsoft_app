import MobileAppDevelopmentContent from "./content";
import { getPageBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata() {
    const page = await getPageBySlug("services/mobile-app-development");
    return {
        title: page?.seoTitle || page?.title || 'Hire App Developers Build Fast Apps',
        description: page?.seoDescription || 'Struggling to build mobile apps? Hire Android & iOS developers for startups and SaaS solutions. Get expert service and fast results with Reinsoft.',
        keywords: page?.seoKeywords || 'Hire Android app developers in USA, Hire iOS app developers for startups, SaaS application development company in UK, Android app development company for startups',
        alternates: {
            canonical: page?.canonicalUrl || '/services/mobile-app-development',
        },
    };
}

export default async function MobileAppDevelopmentPage() {
    const page = await getPageBySlug("services/mobile-app-development");
    if (!page) {
        notFound();
    }
    return <MobileAppDevelopmentContent />;
}
