import HomeContent from "./home-content";
import {
    getPageBySlug,
    getCaseStudies,
    getBrandLogos,
    getTeamMembers,
    getTestimonials,
    getFaqs,
    getSiteSettings,
} from "@/lib/cms";

export const revalidate = 60;

export async function generateMetadata() {
    const page = await getPageBySlug("");
    const settings = await getSiteSettings();

    return {
        title: page?.seoTitle || settings?.defaultSeoTitle || 'AI App Development Company USA Scalable Apps',
        description: page?.seoDescription || settings?.defaultSeoDesc || 'Need smart AI apps for your business? Get custom AI-powered app development with an expert team and proven results. Start your project today with Reinsoft.',
        keywords: page?.seoKeywords || settings?.defaultSeoKeywords || 'AI-powered app development company in USA',
        alternates: {
            canonical: page?.canonicalUrl || '/',
        },
        openGraph: {
            title: page?.seoTitle || settings?.defaultSeoTitle || 'AI App Development Company USA Scalable Apps | Reinsoft',
            description: page?.seoDescription || settings?.defaultSeoDesc || 'Need smart AI apps for your business? Get custom AI-powered app development with an expert team and proven results. Start your project today with Reinsoft.',
        },
    };
}

export default async function Page() {
    const [page, caseStudies, brandLogos, teamMembers, testimonials, faqs, siteSettings] = await Promise.all([
        getPageBySlug(""),
        getCaseStudies({ isFeatured: true, limit: 4 }),
        getBrandLogos(),
        getTeamMembers(),
        getTestimonials(),
        getFaqs("general"),
        getSiteSettings(),
    ]);

    const data = {
        sections: page?.sections || [],
        caseStudies,
        brandLogos,
        teamMembers,
        testimonials,
        faqs,
        siteSettings,
    };

    return <HomeContent data={data} />;
}
