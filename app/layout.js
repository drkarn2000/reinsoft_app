import { Poppins } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export const metadata = {
    metadataBase: new URL('https://reinsoft.tech'),
    title: {
        default: 'AI App Development & Custom Software Solutions | Reinsoft IT Solutions',
        template: '%s | Reinsoft IT Solutions'
    },
    description: 'Reinsoft IT Solutions provides premium custom software, AI-powered mobile apps, and scalable web development for startups and enterprises worldwide.',
    keywords: 'AI-powered app development, custom software development, Reinsoft IT Solutions, SaaS development, business websites, CRM development, mobile app development, Android app development, iOS app development, UK, USA, Australia',
    authors: [{ name: 'Reinsoft IT Solutions' }],
    verification: {
        google: 't1SU8KB5_y2PwBXx6oFYDV4IoIiJ55nlIEqPu5b_s5sM', // Verified ID from layout
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
        <html lang='en'>
            <head>
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCJ2MX8P');`
                    }}
                />
                {/* Google tag (gtag.js) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-DHTF1C42M2"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-DHTF1C42M2');
                    `}
                </Script>
            </head>
            <LenisScroll />
            <body className={poppins.variable}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-PCJ2MX8P"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        ></iframe>
                    </noscript>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
