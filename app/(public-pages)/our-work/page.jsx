import Portfolio from '@/sections/portfolio';
import { getCaseStudies } from '@/lib/cms';
import OurWorkCta from './_components/our-work-cta';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Our Work | Software & Mobile App Case Studies | Reinsoft',
    description: 'Explore our latest product developments, web apps, and enterprise architecture built using modern tech stacks.',
    alternates: {
        canonical: '/our-work',
    },
};

export default async function OurWorkPage() {
    const caseStudies = await getCaseStudies();

    return (
        <main className="px-4 pt-20">
            <div className="max-w-4xl mx-auto text-center mb-[-60px] md:mb-[-80px] relative z-10">
                <p className="text-lg text-gray-600 dark:text-gray-300 px-4 mt-6">
                    See our latest product developments, web apps, and enterprise architecture built using modern tech stacks. We help brands worldwide achieve digital transformation. Review our portfolio to see real examples of our technical expertise.
                </p>
            </div>
            <Portfolio items={caseStudies} asH1={true} />
            <OurWorkCta />
        </main>
    );
}
