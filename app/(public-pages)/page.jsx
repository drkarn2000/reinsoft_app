'use client';

import CallToAction from '@/sections/call-to-action';
import FaqSection from '@/sections/faq-section';
import Features from '@/sections/features';
import HeroSection from '@/sections/hero-section';
// import PricingPlans from '@/sections/pricing-plans';  // Commented out - not in sales website
import Testimonials from '@/sections/testimonials';
// import TrustedCompanies from '@/sections/trusted-companies';  // Commented out - not in sales website
import TrustStrip from '@/sections/trust-strip';
import WhyChooseUs from '@/sections/why-choose-us';
import Team from '@/sections/team';
import WorkflowSteps from '@/sections/workflow-steps';
import Head from 'next/head';

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
                <Testimonials />
                <FaqSection />
                {/* <PricingPlans /> */}
                <CallToAction />
            </main>
        </>
    );
}
