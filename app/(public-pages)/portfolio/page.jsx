import Portfolio from '@/sections/portfolio';
import Head from 'next/head';

export default function PortfolioPage() {
    return (
        <>
            <Head>
                <title>Our Portfolio | Reinsoft Custom Software & IT Solutions</title>
                <meta name="description" content="Explore our recent projects and success stories. See how we've helped businesses grow with custom software and web development." />
            </Head>
            <main className='px-4 pt-20'>
                <Portfolio />
            </main>
        </>
    );
}
