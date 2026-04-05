import HomeContent from "./home-content";

export const metadata = {
    title: 'AI App Development Company | Custom Software & SaaS Solutions USA UK Australia',
    description: 'Reinsoft IT Solutions is a premier AI-powered app development company. We build high-performance custom software, mobile apps, and scalable web solutions for startups and enterprises worldwide. Based in USA, UK & Australia.',
    keywords: 'AI app development company, custom software development USA, hire SaaS developers UK, mobile app development Australia, full stack developers, Reinsoft IT Solutions',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Reinsoft IT Solutions | Custom Software & AI development',
        description: 'Premium AI-powered apps, custom software, and scalable IT solutions for growing businesses.',
    },
};

export default function Page() {
    return <HomeContent />;
}
