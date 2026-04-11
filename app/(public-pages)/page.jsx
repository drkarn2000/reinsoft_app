import HomeContent from "./home-content";

export const metadata = {
    title: 'AI apps/services | Reinsoft',
    description: 'Need smart AI apps for your business? Get custom AI solutions to automate tasks and boost growth.',
    keywords: 'AI related, AI-powered app development, custom software, Reinsoft IT Solutions',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'AI apps/services | Reinsoft',
        description: 'Need smart AI apps for your business? Get custom AI solutions to automate tasks and boost growth.',
    },
};

export default function Page() {
    return <HomeContent />;
}
