'use client';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import HeroSection from '@/sections/hero-section';
import TrustStrip from '@/sections/trust-strip';

const WhyChooseUs = dynamic(() => import('@/sections/why-choose-us'), { ssr: true });
const Features = dynamic(() => import('@/sections/features'), { ssr: true });
const WorkflowSteps = dynamic(() => import('@/sections/workflow-steps'), { ssr: true });
const Team = dynamic(() => import('@/sections/team'), { ssr: true });
const FaqSection = dynamic(() => import('@/sections/faq-section'), { ssr: true });
const CallToAction = dynamic(() => import('@/sections/call-to-action'), { ssr: true });

export default function Page() {
    return (
        <>
            <Head>
                <title>Reinsoft - Custom Software & IT Solutions for Growing Businesses</title>
                <meta name="description" content="Practical IT solutions for small & medium businesses. We build websites, custom software & CRM systems that help you get more leads and work smarter." />
            </Head>
            <main className='px-4'>
                <HeroSection />
                <TrustStrip />
                {/* <TrustedCompanies /> */}
                <WhyChooseUs />
                <Features />
                <WorkflowSteps />
                <Team />
                {/* <Testimonials /> */}
                <FaqSection />
                {/* <PricingPlans /> */}
                <CallToAction />
            </main>
        </>
    );
}
