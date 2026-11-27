import WebDevelopmentContent from "./content";
import { getPageBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata() {
    const page = await getPageBySlug("services/web-development");
    return {
        title: page?.seoTitle || page?.title || 'Hire Full Stack Developers Build Fast Websites',
        description: page?.seoDescription || 'Need a strong website for your business? Hire full-stack developers for custom web solutions. Fast, scalable, and expert service with Reinsoft.',
        keywords: page?.seoKeywords || 'Hire full-stack developers in USA, Custom web development services in UK, Web development services for businesses in Australia',
        alternates: {
            canonical: page?.canonicalUrl || '/services/web-development',
        },
    };
}

export default async function WebDevelopmentPage() {
    const page = await getPageBySlug("services/web-development");
    if (!page) {
        notFound();
    }
    return <WebDevelopmentContent />;
}
