import Script from 'next/script';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import GtmPageView from '@/components/gtm-page-view';
import { GTM_ID } from '@/lib/analytics';
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
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`
                }}
            />
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
            <GtmPageView />
            <Navbar navData={navData} />
            {children}
            <Footer settings={siteSettings} navData={navData} />
        </>
    );
}
