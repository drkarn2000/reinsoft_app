import { Poppins } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '500', '600', '700'],
});

export const metadata = {
    title: 'Reinsoft - Custom Software & IT Solutions for Growing Businesses',
    description: 'Practical IT solutions for small & medium businesses. We build websites, custom software & CRM systems that help you get more leads and work smarter.',
    keywords: 'custom software development, business websites, CRM development, IT solutions, web development company, mobile app development, Android app, iOS app',
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
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <link rel="canonical" href="https://reinsoft.site" />
            </head>
            <LenisScroll />
            <body className={poppins.variable}>{children}</body>
        </html>
    );
}
