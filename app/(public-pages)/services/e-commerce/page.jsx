import ECommerceContent from "./content";
import { getPageBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata() {
    const page = await getPageBySlug("services/e-commerce");
    return {
        title: page?.seoTitle || page?.title || 'E-commerce Development | Custom Online Stores',
        description: page?.seoDescription || 'Build high-converting e-commerce stores and marketplaces. Expert Shopify, WooCommerce, and custom e-commerce development with secure payment integrations.',
        keywords: page?.seoKeywords || 'E-commerce development, Online store builder, Shopify experts, WooCommerce development, Custom e-commerce solutions, Reinsoft IT Solutions',
        alternates: {
            canonical: page?.canonicalUrl || '/services/e-commerce',
        },
    };
}

export default async function ECommercePage() {
    const page = await getPageBySlug("services/e-commerce");
    if (!page) {
        notFound();
    }
    return <ECommerceContent />;
}
