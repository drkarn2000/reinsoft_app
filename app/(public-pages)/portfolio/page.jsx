import Portfolio from '@/sections/portfolio';
import { getCaseStudies } from '@/lib/cms';

export const revalidate = 60;

export const metadata = {
    title: 'Our Portfolio | Reinsoft Custom Software & IT Solutions',
    description: "Explore our recent projects and success stories. See how we've helped businesses grow with custom software and web development.",
    alternates: {
        canonical: '/portfolio',
    },
};

export default async function PortfolioPage() {
    const caseStudies = await getCaseStudies();

    return (
        <main className="px-4 pt-20">
            <div className="max-w-4xl mx-auto text-center mb-[-60px] md:mb-[-80px] relative z-10">
                <p className="text-lg text-gray-600 dark:text-gray-300 px-4 mt-6">
                    Reinsoft is a premium software development agency. Our portfolio includes custom e-commerce stores, finance management systems, landlord management tools, POS software, multivendor websites, legacy enterprise solutions, wellness platforms and dating apps. Browse our case studies to see how we deliver scalable web applications and successful mobile apps for global clients.
                </p>
            </div>
            <Portfolio items={caseStudies} asH1={true} />
        </main>
    );
}
