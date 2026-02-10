import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'Reinsoft - Custom Software & IT Solutions for Growing Businesses',
    description: 'Practical IT solutions for small & medium businesses. We build websites, custom software & CRM systems that help you get more leads and work smarter.',
    keywords: 'custom software development, business websites, CRM development, IT solutions, web development, mobile app development',
    authors: [{ name: 'Reinsoft' }],
    openGraph: {
        title: 'Reinsoft - Custom Software & IT Solutions',
        description: 'Practical IT solutions: Websites, mobile apps, custom software, and reliable technical support for growing businesses.',
        url: 'https://reinsoft.site',
        siteName: 'Reinsoft',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Reinsoft - Custom Software & IT Solutions',
        description: 'Practical IT solutions for growing businesses.',
    },
    appleWebApp: {
        title: 'Reinsoft',
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
