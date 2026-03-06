import Testimonials from '@/sections/testimonials';
import Head from 'next/head';

export default function TestimonialPage() {
    return (
        <>
            <Head>
                <title>Client Testimonials | Reinsoft Custom Software & IT Solutions</title>
                <meta name="description" content="Read what our clients have to say about working with Reinsoft for their custom software and web development needs." />
            </Head>
            <main className='px-4 pt-20'>
                <Testimonials />
            </main>
        </>
    );
}
