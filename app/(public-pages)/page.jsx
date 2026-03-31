'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/sections/hero-section';
import BrandsSlider from '@/sections/brands-slider';
import TrustStrip from '@/sections/trust-strip';
import WhyChooseUs from '@/sections/why-choose-us';
import Features from '@/sections/features';
import WorkflowSteps from '@/sections/workflow-steps';

// Below-the-fold heavy sections: lazily loaded to reduce initial bundle
const Portfolio = dynamic(() => import('@/sections/portfolio'));
const Team = dynamic(() => import('@/sections/team'));
const Testimonials = dynamic(() => import('@/sections/testimonials'));
const FaqSection = dynamic(() => import('@/sections/faq-section'));
const CallToAction = dynamic(() => import('@/sections/call-to-action'));

export default function Page() {
    return (
        <>
            <main className='px-4'>
                <HeroSection />
                <BrandsSlider variant="home" />
                <TrustStrip />
                <WhyChooseUs />
                <Features />
                <WorkflowSteps />
                <Portfolio limit={4} />
                <Team />
                <Testimonials limit={3} />
                <FaqSection />
                <CallToAction />
            </main>
        </>
    );
}
