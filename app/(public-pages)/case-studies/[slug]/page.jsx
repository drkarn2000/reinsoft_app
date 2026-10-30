import { Suspense } from 'react';
import { getCaseStudyBySlug, getPublishedCaseStudySlugs } from '@/lib/cms';
import CaseStudyClient from './case-study-client';
import { notFound } from 'next/navigation';

export const revalidate = 60; // Incremental Static Regeneration

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = await getCaseStudyBySlug(slug);

    if (!project) return {};

    return {
        title: project.seoTitle || project.title || 'Case Study | Reinsoft',
        description: project.seoDescription || project.shortDescription || 'Case study details',
        alternates: {
            canonical: `/case-studies/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return await getPublishedCaseStudySlugs();
}

export default async function CaseStudyPage({ params }) {
    const { slug } = await params;
    const project = await getCaseStudyBySlug(slug);

    if (!project) {
        notFound();
    }

    const title = project.title || "Reinsoft Project Case Study";

    return (
        <>
            {/* Server-side rendered H1 for SEO audit resolution */}
            <header className="absolute top-[120px] left-0 w-full z-10 pointer-events-none">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-transparent select-none">
                        {title}
                    </h1>
                </div>
            </header>

            <Suspense fallback={<div className="min-h-screen bg-white dark:bg-black flex items-center justify-center text-black dark:text-white font-bold">Loading Case Study...</div>}>
                <CaseStudyClient initialProject={project} />
            </Suspense>
        </>
    );
}
