import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { getNavigationItems, getSiteSettings } from '@/lib/cms';

export const revalidate = 60;

export async function generateMetadata() {
    const settings = await getSiteSettings();

    return {
        title: {
            default: settings?.defaultSeoTitle || 'Custom Software & IT Solutions | Reinsoft',
            template: '%s | Reinsoft'
        },
        description: settings?.defaultSeoDesc || 'Expert custom software development, mobile apps, and business websites for startups and SMEs. Reinsoft IT Solutions delivers scalable AI-powered products and 24/7 technical support.',
        keywords: settings?.defaultSeoKeywords || 'custom software development, business software solutions, SaaS developer, AI app development, web development company, mobile app development company, CRM development, IT consulting, Reinsoft IT Solutions',
        authors: [{ name: settings?.companyName || 'Reinsoft IT Solutions' }],
        openGraph: {
            title: settings?.defaultSeoTitle || 'Reinsoft IT Solutions | Custom Software & AI Development',
            description: settings?.defaultSeoDesc || 'Scalable IT solutions: Websites, mobile apps, and custom software for growing businesses.',
            url: settings?.canonicalBaseUrl || 'https://reinsoft.tech',
            siteName: settings?.companyName || 'Reinsoft IT Solutions',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: settings?.defaultSeoTitle || 'Reinsoft IT Solutions | Custom Software & AI Development',
            description: settings?.defaultSeoDesc || 'Practical IT solutions for growing businesses.',
        },
        appleWebApp: {
            title: settings?.companyName || 'Reinsoft IT Solutions',
        },
    };
}

export default async function Layout({ children }) {
    const [navData, siteSettings] = await Promise.all([
        getNavigationItems(),
        getSiteSettings(),
    ]);

    return (
        <>
            <Navbar navData={navData} />
            {children}
            <Footer settings={siteSettings} navData={navData} />
        </>
    );
}
