import prisma from './prisma.js';
import { caseStudies as fallbackCaseStudies } from './case-studies-data.js';
import {
    fallbackBrandLogosRow1,
    fallbackBrandLogosRow2,
    fallbackTeamMembers,
    fallbackFeaturedVideos,
    fallbackWrittenTestimonials,
    fallbackFaqs,
    fallbackSiteSettings,
    fallbackNavMain,
    fallbackFooterQuickLinks,
} from './cms-fallbacks.js';

function resolveFilterCategory(cs) {
    if (!cs) return 'Web Development';
    const cat = (cs.category || '').trim();
    const filterCat = (cs.filterCategory || '').trim();
    const slug = (cs.slug || '').trim();

    if (
        filterCat === 'UI/UX' ||
        filterCat === 'UI/UX Design' ||
        cat === 'UI/UX' ||
        cat === 'UI/UX Design' ||
        slug === 'mural-story' ||
        slug === 'sahasra-ai'
    ) {
        return 'UI/UX';
    }

    if (
        filterCat === 'Software' ||
        filterCat === 'Custom Software' ||
        cat === 'Software' ||
        cat === 'Custom Software' ||
        slug === 'pos-software' ||
        slug === 'finance-dashboard' ||
        slug === 'landlord-management-system'
    ) {
        return 'Software';
    }

    if (
        filterCat === 'Mobile Applications' ||
        cat === 'Mobile Applications' ||
        cat.toLowerCase().includes('mobile')
    ) {
        return 'Mobile Applications';
    }

    return 'Web Development';
}

function resolveCaseStudyImage(cs) {
    const configuredImage = cs.heroImage || cs.image;
    const localCaseStudy = fallbackCaseStudies.find((item) => item.slug === cs.slug);
    const caseStudyIdentifier = `${cs.slug || ''} ${cs.title || ''}`.toLowerCase();
    const localImage = localCaseStudy?.image
        || (caseStudyIdentifier.includes('jexmate')
            ? '/assets/Portfolio pics/jexmate_healthcare.jpeg'
            : null);
    if (caseStudyIdentifier.includes('jexmate') && localImage) {
        return localImage;
    }

    const configuredFilename = configuredImage?.split('/').pop();
    const localFilename = localImage?.split('/').pop();
    const isPlaceholder = !configuredImage
        || configuredImage === '/assets/Case-study.jpg'
        || configuredImage === '/assets/Portfolio1.jpg';
    const isLegacyLocalImage = configuredImage?.startsWith('/assets/')
        && configuredFilename
        && configuredFilename === localFilename
        && configuredImage !== localImage;

    return isPlaceholder || isLegacyLocalImage
        ? (localImage || configuredImage || '/assets/Case-study.jpg')
        : configuredImage;
}

/**
 * Normalizes a Case Study record from the database to ensure full compatibility
 * with both the Prisma schema and the frontend component expectations.
 */
function normalizeCaseStudy(cs) {
    if (!cs) return null;

    const overviewText = typeof cs.overview === 'string' && cs.overview.trim().length > 0
        ? cs.overview.trim()
        : '';

    return {
        id: cs.id || `local-${cs.slug}`,
        slug: cs.slug,
        title: cs.title,
        clientName: cs.clientName || null,
        liveLink: cs.liveLink || null,
        shortDescription: cs.shortDescription || '',
        description: overviewText,
        industry: cs.industry || 'Technology',
        category: cs.category || 'Web Development',
        filterCategory: resolveFilterCategory(cs),
        techStack: Array.isArray(cs.techStack) ? cs.techStack : [],
        heroImage: resolveCaseStudyImage(cs),
        image: resolveCaseStudyImage(cs),
        overviewHeading: cs.overviewHeading || 'Project Overview',
        overview: overviewText,
        problemHeading: cs.problemHeading || 'The Problem',
        problem: cs.problem || '',
        solutionHeading: cs.solutionHeading || 'The Solution',
        solution: cs.solution || '',
        features: Array.isArray(cs.features) ? cs.features : [],
        processStages: Array.isArray(cs.processStages)
            ? cs.processStages
            : Array.isArray(cs.process)
            ? cs.process
            : [],
        process: Array.isArray(cs.process)
            ? cs.process
            : Array.isArray(cs.processStages)
            ? cs.processStages
            : [],
        results: Array.isArray(cs.results) ? cs.results : [],
        screenshots: Array.isArray(cs.screenshots) ? cs.screenshots : [],
        ctaTitle: cs.ctaTitle || 'Ready to achieve similar results?',
        ctaDescription: cs.ctaDescription || "Let's discuss how we can bring your vision to life with a high-performance digital solution.",
        ctaButtonText: cs.ctaButtonText || 'Start Your Project',
        ctaButtonUrl: cs.ctaButtonUrl || '/#contact',
        isFeatured: Boolean(cs.isFeatured),
        sortOrder: typeof cs.sortOrder === 'number' ? cs.sortOrder : 0,
        status: cs.status || 'PUBLISHED',
        seoTitle: cs.seoTitle || cs.title,
        seoDescription: cs.seoDescription || cs.shortDescription,
        link: `/case-studies/${cs.slug}`,
    };
}

/**
 * Fetch all published case studies for listings and portfolio showcases.
 * Safe fallback to local data if database query fails or returns empty.
 */
export async function getCaseStudies({
    status = 'PUBLISHED',
    isFeatured = null,
    limit = null,
    preview = false,
} = {}) {
    try {
        const where = {};
        if (!preview && status) {
            where.status = status;
        }
        if (isFeatured !== null) {
            where.isFeatured = isFeatured;
        }

        const query = {
            where,
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
        };
        if (limit) {
            query.take = limit;
        }

        const dbStudies = await prisma.caseStudy.findMany(query);

        if (dbStudies && dbStudies.length > 0) {
            return dbStudies.map(normalizeCaseStudy);
        }

        // If DB returned 0 records, fallback to local data
        let local = fallbackCaseStudies.map(normalizeCaseStudy);
        if (isFeatured !== null) {
            local = local.filter((item) => (isFeatured ? item.isFeatured : true));
        }
        if (limit) {
            local = local.slice(0, limit);
        }
        return local;
    } catch (error) {
        console.error('getCaseStudies error, falling back to local dataset:', error);
        let local = fallbackCaseStudies.map(normalizeCaseStudy);
        if (limit) {
            local = local.slice(0, limit);
        }
        return local;
    }
}

/**
 * Fetch a single case study by slug.
 * Excludes drafts/archived items unless preview is explicitly true.
 * Safe fallback to local data if database is unreachable.
 */
export async function getCaseStudyBySlug(slug, { preview = false } = {}) {
    if (!slug) return null;

    try {
        const cs = await prisma.caseStudy.findUnique({
            where: { slug },
        });

        if (cs) {
            if (!preview && cs.status !== 'PUBLISHED') {
                return null;
            }
            return normalizeCaseStudy(cs);
        }

        const local = fallbackCaseStudies.find((item) => item.slug === slug);
        if (local) {
            return normalizeCaseStudy(local);
        }

        return null;
    } catch (error) {
        console.error(`getCaseStudyBySlug('${slug}') DB error, trying local fallback:`, error);
        const local = fallbackCaseStudies.find((item) => item.slug === slug);
        return local ? normalizeCaseStudy(local) : null;
    }
}

/**
 * Fetch slugs for Next.js generateStaticParams for case studies
 */
export async function getPublishedCaseStudySlugs() {
    try {
        const items = await prisma.caseStudy.findMany({
            where: { status: 'PUBLISHED' },
            select: { slug: true },
        });

        if (items && items.length > 0) {
            return items.map((i) => ({ slug: i.slug }));
        }

        return fallbackCaseStudies.map((i) => ({ slug: i.slug }));
    } catch (error) {
        console.error('getPublishedCaseStudySlugs DB error, using local data:', error);
        return fallbackCaseStudies.map((i) => ({ slug: i.slug }));
    }
}

/**
 * Fetch a service by its slug, merging any CMS Page / PageSection deliverables
 * with the local fallback dataset.
 */
export async function getServiceBySlug(slug, fallbackData = null, { preview = false } = {}) {
    if (!slug) return fallbackData;

    const fullSlug = slug.startsWith('services/') ? slug : `services/${slug}`;

    try {
        const page = await prisma.page.findUnique({
            where: { slug: fullSlug },
            include: {
                sections: {
                    orderBy: { sortOrder: 'asc' },
                },
            },
        });

        if (page) {
            // Guard: Drafts & Archived services remain hidden from public visitors
            if (!preview && page.status !== 'PUBLISHED') {
                return null;
            }

            const deliverablesSection = page.sections.find(
                (s) => s.sectionType === 'SERVICE_DELIVERABLES' && s.isEnabled
            );

            const content = (deliverablesSection && typeof deliverablesSection.content === 'object')
                ? deliverablesSection.content
                : {};

            // Merge CMS content onto fallback data to maintain 100% field integrity
            return {
                ...(fallbackData || {}),
                title: page.title || fallbackData?.title,
                seoTitle: page.seoTitle || page.title || fallbackData?.title,
                seoDescription: page.seoDescription || fallbackData?.intro,
                seoKeywords: page.seoKeywords || '',
                canonicalUrl: page.canonicalUrl || `/${fullSlug}`,
                ...content,
            };
        }

        return fallbackData;
    } catch (error) {
        console.error(`getServiceBySlug('${slug}') DB error, returning local fallback:`, error);
        return fallbackData;
    }
}

/**
 * Fetch a Page with all its enabled sections ordered by sortOrder.
 * Guarantees that draft or archived pages return null unless preview=true.
 */
export async function getPageBySlug(slug, { preview = false } = {}) {
    const cleanSlug = slug === undefined || slug === null ? '' : String(slug).trim().toLowerCase().replace(/^\/+|\/+$/g, '');

    try {
        const page = await prisma.page.findUnique({
            where: { slug: cleanSlug },
            include: {
                sections: {
                    orderBy: { sortOrder: 'asc' },
                },
            },
        });

        if (!page) return null;

        // Draft/Archived guard
        if (!preview && page.status !== 'PUBLISHED') {
            return null;
        }

        return {
            ...page,
            sections: page.sections.filter((s) => s.isEnabled),
        };
    } catch (error) {
        console.error(`getPageBySlug('${cleanSlug}') DB error:`, error);
        return null;
    }
}

/**
 * Convenience helper to get ordered enabled sections for a page.
 */
export async function getPageSections(slug, { preview = false } = {}) {
    const page = await getPageBySlug(slug, { preview });
    return page?.sections || [];
}

/**
 * Fetch Testimonials from Neon DB with safe fallbacks for both video and written reviews.
 */
export async function getTestimonials({ preview = false } = {}) {
    try {
        const where = preview ? {} : { status: 'PUBLISHED' };
        const dbItems = await prisma.testimonial.findMany({
            where,
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
        });

        if (dbItems && dbItems.length > 0) {
            const featuredVideos = dbItems
                .filter((t) => t.isVideo)
                .map((t) => ({
                    id: t.id,
                    name: t.clientName,
                    role: t.role,
                    location: t.location,
                    flag: t.countryCode || 'in',
                    image: t.videoThumbnail || t.avatarImage || '/assets/Testimonial/Capt_Pankaj.jpeg',
                    review: t.reviewText,
                    projectType: t.projectType,
                    localVideo: t.videoUrl || '',
                    subtitleSrc: t.subtitleVttUrl || '',
                }));

            const writtenTestimonials = dbItems
                .filter((t) => !t.isVideo)
                .map((t) => ({
                    id: t.id,
                    name: t.clientName,
                    role: t.role,
                    companyLogo: t.companyName || '',
                    location: t.location,
                    flag: t.countryCode || 'in',
                    rating: t.rating || 5,
                    review: t.reviewText,
                    image: t.avatarImage || '/assets/man.jpg',
                    projectType: t.projectType,
                    resultBadgeText: t.resultBadgeText || '',
                    resultBadgeColor: t.resultBadgeColor || 'text-blue-600 bg-blue-100',
                    link: t.caseStudyLink || '',
                    highlight: Boolean(t.isFeatured),
                }));

            return {
                featuredVideos: featuredVideos.length > 0 ? featuredVideos : fallbackFeaturedVideos,
                writtenTestimonials: writtenTestimonials.length > 0 ? writtenTestimonials : fallbackWrittenTestimonials,
            };
        }

        return {
            featuredVideos: fallbackFeaturedVideos,
            writtenTestimonials: fallbackWrittenTestimonials,
        };
    } catch (error) {
        console.error('getTestimonials DB error, using local fallback:', error);
        return {
            featuredVideos: fallbackFeaturedVideos,
            writtenTestimonials: fallbackWrittenTestimonials,
        };
    }
}

/**
 * Fetch enabled Brand Logos from Neon DB partitioned into row 1 and row 2.
 */
export async function getBrandLogos() {
    try {
        const dbLogos = await prisma.brandLogo.findMany({
            where: { isEnabled: true },
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
        });

        if (dbLogos && dbLogos.length > 0) {
            const row1 = dbLogos
                .filter((l) => l.rowNumber === 1)
                .map((l) => ({
                    src: l.logoUrl,
                    className: l.customClass || '',
                    bgClass: l.bgClass || '',
                    name: l.name,
                }));

            const row2 = dbLogos
                .filter((l) => l.rowNumber === 2)
                .map((l) => ({
                    src: l.logoUrl,
                    className: l.customClass || '',
                    bgClass: l.bgClass || '',
                    name: l.name,
                }));

            const mergeWithFallback = (logos, fallback) => {
                const existingSources = new Set(logos.map((logo) => logo.src));
                return [
                    ...logos,
                    ...fallback.filter((logo) => !existingSources.has(logo.src)),
                ];
            };

            return {
                row1: mergeWithFallback(row1, fallbackBrandLogosRow1),
                row2: mergeWithFallback(row2, fallbackBrandLogosRow2),
            };
        }

        return {
            row1: fallbackBrandLogosRow1,
            row2: fallbackBrandLogosRow2,
        };
    } catch (error) {
        console.error('getBrandLogos DB error, using local fallback:', error);
        return {
            row1: fallbackBrandLogosRow1,
            row2: fallbackBrandLogosRow2,
        };
    }
}

/**
 * Fetch enabled Team Members from Neon DB with safe fallback.
 */
export async function getTeamMembers() {
    try {
        const dbMembers = await prisma.teamMember.findMany({
            where: { isEnabled: true },
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
        });

        if (dbMembers && dbMembers.length > 0) {
            return dbMembers.map((m) => ({
                id: m.id,
                name: m.name,
                role: m.role,
                focus: m.focusArea || '',
                bio: m.bio,
                imageUrl: m.imageUrl,
                accent: m.accentGradient || 'from-[#c6a86a] via-[#e7d2a3] to-[#f5ead3]',
                isFounder: Boolean(m.isFounder),
                linkedinUrl: m.linkedinUrl || '',
            }));
        }

        return fallbackTeamMembers;
    } catch (error) {
        console.error('getTeamMembers DB error, using local fallback:', error);
        return fallbackTeamMembers;
    }
}

/**
 * Fetch enabled FAQs from Neon DB with safe fallback.
 */
export async function getFaqs(category = null) {
    try {
        const where = { isEnabled: true };
        if (category) {
            where.category = category;
        }

        const dbFaqs = await prisma.faqItem.findMany({
            where,
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
        });

        if (dbFaqs && dbFaqs.length > 0) {
            return dbFaqs.map((f) => ({
                id: f.id,
                question: f.question,
                answer: f.answer,
                category: f.category,
            }));
        }

        return fallbackFaqs;
    } catch (error) {
        console.error('getFaqs DB error, using local fallback:', error);
        return fallbackFaqs;
    }
}

/**
 * Fetch Global Site Settings from Neon DB with safe fallback.
 */
export async function getSiteSettings() {
    try {
        const settings = await prisma.siteSetting.findUnique({
            where: { id: 'global' },
        });

        if (settings) {
            return {
                ...fallbackSiteSettings,
                ...settings,
            };
        }

        return fallbackSiteSettings;
    } catch (error) {
        console.error('getSiteSettings DB error, using local fallback:', error);
        return fallbackSiteSettings;
    }
}

/**
 * Fetch Navigation items from Neon DB grouped by location with safe fallbacks.
 */
export async function getNavigationItems() {
    try {
        const dbItems = await prisma.navigationItem.findMany({
            where: { isEnabled: true },
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
        });

        if (dbItems && dbItems.length > 0) {
            const mainItems = dbItems.filter((i) => i.location === 'NAVBAR_MAIN');
            const serviceDropdownItems = dbItems.filter((i) => i.location === 'NAVBAR_SERVICES_DROPDOWN');
            const quickLinks = dbItems.filter((i) => i.location === 'FOOTER_QUICK_LINKS');
            const exploreLinks = dbItems.filter((i) => i.location === 'FOOTER_EXPLORE_LINKS');

            return {
                mainNav: mainItems.length > 0 ? mainItems : fallbackNavMain,
                servicesDropdown: serviceDropdownItems,
                footerQuickLinks: quickLinks.length > 0 ? quickLinks : fallbackFooterQuickLinks,
                footerExploreLinks: exploreLinks,
            };
        }

        return {
            mainNav: fallbackNavMain,
            servicesDropdown: [],
            footerQuickLinks: fallbackFooterQuickLinks,
            footerExploreLinks: [],
        };
    } catch (error) {
        console.error('getNavigationItems DB error, using local fallback:', error);
        return {
            mainNav: fallbackNavMain,
            servicesDropdown: [],
            footerQuickLinks: fallbackFooterQuickLinks,
            footerExploreLinks: [],
        };
    }
}
