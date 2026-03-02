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
import Portfolio from '@/sections/portfolio';
import WorkflowSteps from '@/sections/workflow-steps';
export default function Page() {
    return (
        <>
            <main className='px-4'>
                <HeroSection />
                <TrustStrip />
                {/* <TrustedCompanies /> */}
                <WhyChooseUs />
                <Features />
                <WorkflowSteps />
                <Portfolio limit={4} />
                <Team />
                <Testimonials limit={3} />
                <FaqSection />
                {/* <PricingPlans /> */}
                <CallToAction />
            </main>
        </>
    );
}
