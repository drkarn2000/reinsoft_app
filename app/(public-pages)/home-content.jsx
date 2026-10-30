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

export default function HomeContent({ data = {} }) {
    const {
        sections = [],
        caseStudies = [],
        brandLogos = null,
        teamMembers = [],
        testimonials = null,
        faqs = [],
        siteSettings = null,
    } = data;

    // Helper to find a section by type
    const getSec = (type) => sections.find((s) => s.sectionType === type && s.isEnabled);

    // Section enabled guard: if sections were loaded, respect isEnabled status
    const isSecEnabled = (type) => {
        if (!sections || sections.length === 0) return true;
        return sections.some((s) => s.sectionType === type && s.isEnabled);
    };

    const heroSec = getSec('HERO');
    const brandsSec = getSec('BRANDS_SLIDER');
    const teamSec = getSec('TEAM_GRID');
    const testimonialsSec = getSec('TESTIMONIALS_CAROUSEL');
    const faqSec = getSec('FAQ_ACCORDION');
    const ctaSec = getSec('CALL_TO_ACTION');

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
                {isSecEnabled('HERO') && <HeroSection content={heroSec?.content} />}
                {isSecEnabled('BRANDS_SLIDER') && (
                    <BrandsSlider
                        variant="home"
                        title={brandsSec?.content?.title}
                        badge={brandsSec?.content?.badge}
                        customRow1={brandLogos?.row1}
                        customRow2={brandLogos?.row2}
                    />
                )}
                {isSecEnabled('TRUST_STRIP') && <TrustStrip />}
                {isSecEnabled('WHY_CHOOSE_US') && <WhyChooseUs />}
                {isSecEnabled('FEATURES_OVERVIEW') && <Features />}
                {isSecEnabled('WORKFLOW_STEPS') && <WorkflowSteps />}
                {isSecEnabled('PORTFOLIO_GRID') && <Portfolio limit={4} items={caseStudies} />}
                {isSecEnabled('TEAM_GRID') && <Team members={teamMembers} title={teamSec?.content?.title} />}
                {isSecEnabled('TESTIMONIALS_CAROUSEL') && (
                    <Testimonials
                        customVideos={testimonials?.featuredVideos}
                        customTestimonials={testimonials?.writtenTestimonials}
                        title={testimonialsSec?.content?.title}
                    />
                )}
                {isSecEnabled('FAQ_ACCORDION') && <FaqSection faqs={faqs} title={faqSec?.content?.title} />}
                {isSecEnabled('CALL_TO_ACTION') && (
                    <CallToAction
                        content={ctaSec?.content}
                        phone={siteSettings?.contactPhone}
                        whatsapp={siteSettings?.whatsappNumber}
                    />
                )}
            </main>
        </>
    );
}
