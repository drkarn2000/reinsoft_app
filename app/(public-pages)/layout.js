import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: {
        default: 'Custom Software & IT Solutions | Reinsoft',
        template: '%s | Reinsoft'
    },
    description: 'Expert custom software development, mobile apps, and business websites for startups and SMEs. Reinsoft IT Solutions delivers scalable AI-powered products and 24/7 technical support.',
    keywords: 'custom software development, business software solutions, SaaS developer, AI app development, web development company, mobile app development company, CRM development, IT consulting, Reinsoft IT Solutions',
    authors: [{ name: 'Reinsoft IT Solutions' }],
    openGraph: {
        title: 'Reinsoft IT Solutions | Custom Software & AI Development',
        description: 'Scalable IT solutions: Websites, mobile apps, and custom software for growing businesses.',
        url: 'https://reinsoft.tech',
        siteName: 'Reinsoft IT Solutions',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Reinsoft IT Solutions | Custom Software & AI Development',
        description: 'Practical IT solutions for growing businesses.',
    },
    appleWebApp: {
        title: 'Reinsoft IT Solutions',
    },
};

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
