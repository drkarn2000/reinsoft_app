'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/sections/hero-section';
import BrandsSlider from '@/sections/brands-slider';
import TrustStrip from '@/sections/trust-strip';
import WhyChooseUs from '@/sections/why-choose-us';
import Features from '@/sections/features';
import WorkflowSteps from '@/sections/workflow-steps';
import Image from 'next/image';

// Below-the-fold heavy sections: lazily loaded to reduce initial bundle
const Portfolio = dynamic(() => import('@/sections/portfolio'));
const Team = dynamic(() => import('@/sections/team'));
const Testimonials = dynamic(() => import('@/sections/testimonials'));
const FaqSection = dynamic(() => import('@/sections/faq-section'));
const CallToAction = dynamic(() => import('@/sections/call-to-action'));

export default function Page() {
    return (
        <>
            <div className="fixed inset-0 -z-30 pointer-events-none hidden dark:block">
                <Image
                    src="/assets/hero-bg.jpg"
                    alt="Reinsoft IT Solutions background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/34 via-black/28 to-black/48" />
            </div>
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
