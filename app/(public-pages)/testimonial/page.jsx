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
                <div className="max-w-4xl mx-auto text-center mb-[-60px] md:mb-[-80px] relative z-10">
                    <p className="text-lg text-gray-600 dark:text-gray-300 px-4 mt-6">
                        Reinsoft is proud to be a trusted IT partner for growing businesses globally. Read through our client testimonials, verified reviews, and video case studies to see how we repeatedly deliver exceptional custom software, mobile apps, and e-commerce solutions that drive real results.
                    </p>
                </div>
                <Testimonials asH1={true} />
            </main>
        </>
    );
}
