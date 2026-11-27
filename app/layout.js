import { Poppins } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';
import { ThemeProvider } from '@/components/theme-provider';
import SiteMotionLayer from '@/components/site-motion-layer';

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export const metadata = {
    metadataBase: new URL('https://reinsoft.tech'),
    title: {
        default: 'AI & Custom Software Development | Reinsoft',
        template: '%s | Reinsoft'
    },
    description: 'Reinsoft IT Solutions provides premium custom software, AI-powered mobile apps, and scalable web development for startups and enterprises worldwide.',
    keywords: 'AI-powered app development, custom software development, Reinsoft IT Solutions, SaaS development, business websites, CRM development, mobile app development, Android app development, iOS app development, UK, USA, Australia',
    authors: [{ name: 'Reinsoft IT Solutions' }],
    verification: {
        google: 't1SU8KB5y2PwBXx6oFYDV4IoIiJ55nlIEqPu5b_s5sM', // Verified ID from layout
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Reinsoft IT Solutions | Custom Software & AI Development',
        description: 'Premium AI-powered apps, custom software, and scalable IT solutions for growing businesses.',
        url: 'https://reinsoft.tech',
        siteName: 'Reinsoft IT Solutions',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Reinsoft IT Solutions | Custom Software & AI Development',
        description: 'Premium AI-powered apps and custom software solutions for growing businesses.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <LenisScroll />
            <body className={poppins.variable}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                    <SiteMotionLayer />
                    <div className="relative z-10">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
