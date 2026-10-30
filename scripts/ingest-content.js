#!/usr/bin/env node

/**
 * REINSOFT CMS - Content Ingestion & Seeding Engine
 * 
 * Ingests all existing hardcoded content into the Neon PostgreSQL development database.
 * 
 * Idempotent: Can be run multiple times safely without duplicate records or destructive resets.
 * Safeguard: Does NOT touch or alter admin_users table or any existing admin accounts.
 */

const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

// Load environment variables. Production mode uses the Vercel-pulled
// production environment before local fallbacks.
function loadEnvFile(filename) {
    const fullPath = path.resolve(process.cwd(), filename);
    if (!fs.existsSync(fullPath)) return;
    const content = fs.readFileSync(fullPath, 'utf8');
    content.split('\n').forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const match = trimmed.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            let value = match[2].trim();
            if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
            if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
            if (!process.env[key]) process.env[key] = value;
        }
    });
}

const isProductionIngestion = process.argv.includes('--production');
if (isProductionIngestion) loadEnvFile('.env.production.local');
loadEnvFile('.env.local');
loadEnvFile('.env');

const prisma = new PrismaClient();

// Data sources
const { caseStudies } = require('../lib/case-studies-data.js');
const {
    whiteLabelDevelopment,
    itSupportMaintenance,
    businessAutomation,
} = require('../app/(public-pages)/services/_components/service-data.js');

// -----------------------------------------------------------------------------
// 1. SITE SETTINGS
// -----------------------------------------------------------------------------
async function seedSiteSettings(stats) {
    await prisma.siteSetting.upsert({
        where: { id: 'global' },
        create: {
            id: 'global',
            companyName: 'Reinsoft IT Solutions',
            tagline: 'Custom Software & IT Solutions for Growing Businesses',
            contactEmail: 'info@reinsoft.tech',
            contactPhone: '+91 89683 69582',
            whatsappNumber: '918968369582',
            whatsappMessage: 'Hello Reinsoft team, I would like to discuss a project.',
            address: 'Global Operations: USA, UK, Australia, India',
            gtmId: 'GTM-PCJ2MX8P',
            gaId: 'G-DHTF1C42M2',
            googleVerification: 't1SU8KB5y2PwBXx6oFYDV4IoIiJ55nlIEqPu5b_s5sM',
            defaultSeoTitle: 'AI & Custom Software Development | Reinsoft',
            defaultSeoDesc:
                'Reinsoft IT Solutions provides premium custom software, AI-powered mobile apps, and scalable web development for startups and enterprises worldwide.',
            defaultSeoKeywords:
                'custom software development, business software solutions, SaaS developer, AI app development, web development company, mobile app development company, CRM development, IT consulting, Reinsoft IT Solutions',
            canonicalBaseUrl: 'https://reinsoft.tech',
        },
        update: {
            companyName: 'Reinsoft IT Solutions',
            tagline: 'Custom Software & IT Solutions for Growing Businesses',
            contactEmail: 'info@reinsoft.tech',
            contactPhone: '+91 89683 69582',
            whatsappNumber: '918968369582',
        },
    });
    stats.siteSettings = 1;
}

// -----------------------------------------------------------------------------
// 2. NAVIGATION ITEMS (Navbar & Footer)
// -----------------------------------------------------------------------------
async function seedNavigation(stats) {
    let count = 0;

    // A. Main Navbar Links
    const mainNav = [
        { label: 'Home', href: '/', sortOrder: 1 },
        { label: 'About Us', href: '/about', sortOrder: 2 },
        { label: 'Our Services', href: '/services', sortOrder: 3 },
        { label: 'Our Work', href: '/our-work', sortOrder: 4 },
    ];

    for (const item of mainNav) {
        const existing = await prisma.navigationItem.findFirst({
            where: { location: 'NAVBAR_MAIN', label: item.label, href: item.href },
        });
        if (!existing) {
            await prisma.navigationItem.create({
                data: {
                    location: 'NAVBAR_MAIN',
                    label: item.label,
                    href: item.href,
                    sortOrder: item.sortOrder,
                    isEnabled: true,
                },
            });
            count++;
        }
    }

    // B. Navbar Services Mega-Menu Dropdown Items
    const servicesDropdown = [
        { label: 'Software Development', href: '/services/software-development', iconName: 'CodeIcon', description: 'Custom software & enterprise solutions', sortOrder: 1 },
        { label: 'Web Development', href: '/services/web-development', iconName: 'LayoutGridIcon', description: 'Custom web apps & sites', sortOrder: 2 },
        { label: 'Mobile App Development', href: '/services/mobile-app-development', iconName: 'SmartphoneIcon', description: 'Native & Cross-platform apps', sortOrder: 3 },
        { label: 'White-Label Development', href: '/services/white-label-development', iconName: 'HandshakeIcon', description: 'Your trusted development partner', sortOrder: 4 },
        { label: 'IT Support & Maintenance', href: '/services/it-support-maintenance', iconName: 'WrenchIcon', description: 'Ongoing support, updates & optimization', sortOrder: 5 },
        { label: 'Business Automation & AI', href: '/services/business-automation', iconName: 'BotIcon', description: 'WhatsApp, CRM & workflow automation', sortOrder: 6 },
        { label: 'All Services', href: '/services', iconName: 'LayoutGridIcon', description: 'Explore our full list', sortOrder: 7 },
    ];

    for (const item of servicesDropdown) {
        const existing = await prisma.navigationItem.findFirst({
            where: { location: 'NAVBAR_SERVICES_DROPDOWN', label: item.label, href: item.href },
        });
        if (!existing) {
            await prisma.navigationItem.create({
                data: {
                    location: 'NAVBAR_SERVICES_DROPDOWN',
                    label: item.label,
                    href: item.href,
                    iconName: item.iconName,
                    description: item.description,
                    sortOrder: item.sortOrder,
                    isEnabled: true,
                },
            });
            count++;
        }
    }

    // C. Footer Quick Links
    const footerQuick = [
        { label: 'Home', href: '/', sortOrder: 1 },
        { label: 'Our Services', href: '/services', sortOrder: 2 },
        { label: 'About Us', href: '/about', sortOrder: 3 },
        { label: 'Contact', href: '/contact', sortOrder: 4 },
        { label: 'Privacy Policy', href: '/privacy', sortOrder: 5 },
        { label: 'Terms & Conditions', href: '/terms', sortOrder: 6 },
    ];

    for (const item of footerQuick) {
        const existing = await prisma.navigationItem.findFirst({
            where: { location: 'FOOTER_QUICK_LINKS', label: item.label, href: item.href },
        });
        if (!existing) {
            await prisma.navigationItem.create({
                data: {
                    location: 'FOOTER_QUICK_LINKS',
                    label: item.label,
                    href: item.href,
                    sortOrder: item.sortOrder,
                    isEnabled: true,
                },
            });
            count++;
        }
    }

    // D. Footer Explore / Keyword Links
    const footerExplore = [
        { label: 'Our Work', href: '/our-work', sortOrder: 1 },
        { label: 'Testimonials', href: '/testimonial', sortOrder: 2 },
        { label: 'Web Solutions', href: '/services/web-development', sortOrder: 3 },
        { label: 'Mobile Solutions', href: '/services/mobile-app-development', sortOrder: 4 },
        { label: 'E-Commerce', href: '/services/e-commerce', sortOrder: 5 },
        { label: 'API Integration', href: '/services/api-integration', sortOrder: 6 },
        { label: 'Web Dev Australia', href: '/web-development-company-australia', sortOrder: 7 },
        { label: 'Mobile Apps UK', href: '/mobile-app-development-company-uk', sortOrder: 8 },
        { label: 'Software Dev USA', href: '/software-development-company-usa', sortOrder: 9 },
        { label: 'Hire Flutter Devs (AU)', href: '/hire-flutter-developers-australia', sortOrder: 10 },
        { label: 'Hire Flutter Devs (UK)', href: '/hire-flutter-developers-uk', sortOrder: 11 },
        { label: 'Hire Flutter Devs (US)', href: '/hire-flutter-developers-usa', sortOrder: 12 },
        { label: 'Hire Full Stack (AU)', href: '/hire-full-stack-developers-australia', sortOrder: 13 },
        { label: 'Hire Full Stack (UK)', href: '/hire-full-stack-developers-uk', sortOrder: 14 },
        { label: 'Hire Full Stack (US)', href: '/hire-full-stack-developers-usa', sortOrder: 15 },
        { label: 'Hire React Native (AU)', href: '/hire-react-native-developers-australia', sortOrder: 16 },
        { label: 'Hire React Native (UK)', href: '/hire-react-native-developers-uk', sortOrder: 17 },
        { label: 'Hire React Native (US)', href: '/hire-react-native-developers-usa', sortOrder: 18 },
    ];

    for (const item of footerExplore) {
        const existing = await prisma.navigationItem.findFirst({
            where: { location: 'FOOTER_EXPLORE_LINKS', label: item.label, href: item.href },
        });
        if (!existing) {
            await prisma.navigationItem.create({
                data: {
                    location: 'FOOTER_EXPLORE_LINKS',
                    label: item.label,
                    href: item.href,
                    sortOrder: item.sortOrder,
                    isEnabled: true,
                },
            });
            count++;
        }
    }

    stats.navigationItems = count;
}

// -----------------------------------------------------------------------------
// 3. CASE STUDIES (All 17 Projects)
// -----------------------------------------------------------------------------
async function seedCaseStudies(stats) {
    let count = 0;

    const categoryMap = {
        'ecommerce-experience': 'Web Development',
        'finance-dashboard': 'Web Development',
        'landlord-management-system': 'Web Development',
        'multivendor-e-commerce': 'Web Development',
        'pos-software': 'Web Development',
        'thirty30-media': 'Web Development',
        'vridez': 'Web Development',
        'sahasra-ai': 'Web Development',
        'j2-wealth': 'Web Development',
        'legacy-marketplace': 'Web Development',
        'mural-story': 'Web Development',
        'activelink-support-app': 'Mobile Applications',
        'agriculture-task-app': 'Mobile Applications',
        'tap-shake-walk': 'Mobile Applications',
        'accuster-patient-management': 'Mobile Applications',
        'kamutalk': 'Mobile Applications',
        'macau-nutrition': 'Mobile Applications',
    };

    for (let i = 0; i < caseStudies.length; i++) {
        const cs = caseStudies[i];
        const category = categoryMap[cs.slug] || 'Web Development';

        await prisma.caseStudy.upsert({
            where: { slug: cs.slug },
            create: {
                slug: cs.slug,
                title: cs.title,
                liveLink: cs.liveLink || null,
                shortDescription: cs.shortDescription,
                industry: cs.industry,
                category,
                techStack: cs.techStack || [],
                heroImage: cs.image || '/assets/Case-study.jpg',
                overview: cs.overview || '',
                problem: cs.problem || '',
                solution: cs.solution || '',
                features: cs.features || [],
                processStages: cs.process || [],
                results: cs.results || [],
                screenshots: cs.screenshots || [],
                isFeatured: i < 6,
                sortOrder: i + 1,
                status: 'PUBLISHED',
                seoTitle: `${cs.title} | Case Study | Reinsoft`,
                seoDescription: cs.shortDescription,
            },
            update: {
                title: cs.title,
                liveLink: cs.liveLink || null,
                shortDescription: cs.shortDescription,
                industry: cs.industry,
                category,
                techStack: cs.techStack || [],
                heroImage: cs.image || '/assets/Case-study.jpg',
                overview: cs.overview || '',
                problem: cs.problem || '',
                solution: cs.solution || '',
                features: cs.features || [],
                processStages: cs.process || [],
                results: cs.results || [],
                screenshots: cs.screenshots || [],
                sortOrder: i + 1,
            },
        });
        count++;
    }

    stats.caseStudies = count;
}

// -----------------------------------------------------------------------------
// 4. TESTIMONIALS & VIDEO REVIEWS
// -----------------------------------------------------------------------------
async function seedTestimonials(stats) {
    let count = 0;

    const featuredVideos = [
        {
            clientName: 'Capt. Pankaj Sabarwal',
            role: 'Director',
            companyName: 'Maritime Training Institute',
            location: 'India',
            countryCode: 'in',
            rating: 5,
            reviewText:
                'They developed a fantastic certificate generation and verification software for my maritime training institute. Both of them were very professional and very supportive. I highly recommend them for your software development work.',
            projectType: 'Certificate Verification Software',
            resultBadgeText: 'Automated Issuance',
            resultBadgeColor: 'text-orange-600 bg-orange-100',
            avatarImage: '/assets/Testimonial/Capt_Pankaj.jpeg',
            isVideo: true,
            videoUrl: '/assets/Testimonial/Capt_Pankaj.mp4',
            subtitleVttUrl: '/assets/Testimonial/capt_pankaj.vtt',
            videoThumbnail: '/assets/Testimonial/Capt_Pankaj.jpeg',
            isFeatured: true,
            sortOrder: 1,
        },
        {
            clientName: 'Sujoye Dhar',
            role: 'CTO',
            companyName: 'Biswakarma',
            location: 'Kolkata, India',
            countryCode: 'in',
            rating: 5,
            reviewText:
                'Manpreet ji understood our problems very well. He applied the right solution and our jewellery website was made perfectly. I recommend him for any website or technical problem. My experience with him was very good.',
            projectType: 'Jewellery E-commerce Website',
            resultBadgeText: '+35% Online Orders',
            resultBadgeColor: 'text-green-600 bg-green-100',
            avatarImage: '/assets/Testimonial/sujoay_pic.png',
            isVideo: true,
            videoUrl: '/assets/Testimonial/sujoye_dhar.mp4',
            subtitleVttUrl: '/assets/Testimonial/sujoye_dhar.vtt',
            videoThumbnail: '/assets/Testimonial/sujoay_pic.png',
            isFeatured: true,
            sortOrder: 2,
        },
    ];

    const textTestimonials = [
        {
            clientName: 'Ehsan F.',
            role: 'Product Owner',
            companyName: 'thirty30media',
            location: 'London, UK',
            countryCode: 'gb',
            rating: 5,
            reviewText:
                'The custom website built by Amarjeet from Reinsoft completely streamlined our operations. What used to take days now takes hours. I have worked with many developers before, but Amarjeet truly outperformed them all.',
            projectType: 'Custom Web App',
            resultBadgeText: '65% Faster Load Speed',
            resultBadgeColor: 'text-blue-600 bg-blue-100',
            caseStudyLink: '/case-studies/thirty30-media',
            avatarImage: '/assets/man.jpg',
            sortOrder: 3,
        },
        {
            clientName: 'Angela',
            role: 'Founder',
            companyName: 'Legacy Marketplace',
            location: 'Oxford, UK',
            countryCode: 'gb',
            rating: 5,
            reviewText:
                'Working with the Reinsoft team on our SaaS platform was a game-changer. They understood our vision perfectly and delivered a rock-solid Laravel backend. Everything was delivered on time with prompt communication.',
            projectType: 'Laravel SaaS Platform',
            resultBadgeText: '+42% Conversion Growth',
            resultBadgeColor: 'text-green-600 bg-green-100',
            caseStudyLink: '/case-studies/legacy-marketplace',
            avatarImage: '/assets/Testimonial/angela.png',
            sortOrder: 4,
        },
        {
            clientName: 'Manti Makkakoli',
            role: 'Founder',
            companyName: 'Shopaholic',
            location: 'Johannesburg, South Africa',
            countryCode: 'za',
            rating: 5,
            reviewText:
                'Excellent Work done by Tanu and his team, also helps going beyond the box and makes my experience great. Clear Communications and quick Solutions. We needed a complete overhaul of our e-commerce platform. They delivered a fast, mobile-responsive site that caused our sales to triple in the first quarter alone.',
            projectType: 'Custom E-commerce Website',
            resultBadgeText: '3x Q1 Sales Growth',
            resultBadgeColor: 'text-orange-600 bg-orange-100',
            caseStudyLink: '/case-studies/multivendor-e-commerce',
            avatarImage: '/assets/Testimonial/Manti.jpeg',
            sortOrder: 5,
        },
        {
            clientName: 'Umesh Patel',
            role: 'CEO',
            companyName: 'Mohini Cloud (POS)',
            location: 'Ahmedabad, India',
            countryCode: 'in',
            rating: 5,
            reviewText:
                'I am really happy with the performance. Tanu and Amarjeet from Reinsoft did exactly what was required and delivered excellent work. They were highly professional and easy to work with.',
            projectType: 'Custom POS Software',
            resultBadgeText: '-60% Cash Discrepancies',
            resultBadgeColor: 'text-purple-600 bg-purple-100',
            caseStudyLink: '/case-studies/pos-software',
            avatarImage: '/assets/Testimonial/umesh.png',
            sortOrder: 6,
        },
        {
            clientName: 'Kishor Kumar',
            role: 'Managing Director',
            companyName: 'Vridez Private Limited',
            location: 'Bengaluru, India',
            countryCode: 'in',
            rating: 5,
            reviewText:
                'Am really happy with the performance Tanu & Amarjit (Team REINSOFT) did exactly what was required and did excellent work. Highly professional and easy to work with, Would definitely work with him again. Thanks a lot once again.',
            projectType: 'Mobility & Transportation Platform',
            resultBadgeText: 'End-to-End Delivery',
            resultBadgeColor: 'text-blue-600 bg-blue-100',
            caseStudyLink: '/case-studies/vridez',
            avatarImage: '/assets/Testimonial/kishor1.png',
            sortOrder: 7,
        },
        {
            clientName: 'Sagar Jujare',
            role: 'CEO',
            companyName: 'Jujare Tech Advisors',
            location: 'Ahmedabad, India',
            countryCode: 'in',
            rating: 5,
            reviewText:
                'I had a fantastic experience working with Amarjeet from Reinsoft. He was professional, highly skilled, and delivered exceptional results. The attention to detail and understanding of requirements made the entire process smooth.',
            projectType: 'Sahasra AI Intelligent Chatbot',
            resultBadgeText: 'Improved Engagement',
            resultBadgeColor: 'text-green-600 bg-green-100',
            caseStudyLink: '/case-studies/sahasra-ai',
            avatarImage: '/assets/Testimonial/sagar.png',
            sortOrder: 8,
        },
        {
            clientName: 'Sandeep Singh',
            role: 'IT Manager',
            companyName: 'IndraSur Consulting',
            location: 'Cambridge, Canada',
            countryCode: 'ca',
            rating: 5,
            reviewText:
                'Tanu from the Reinsoft team did an amazing job developing our website. They clearly understood our requirements and implemented everything perfectly. The final website turned out to be a big success with our clients.',
            projectType: 'Interior / Home Decor / E-Commerce',
            resultBadgeText: 'High Scalability',
            resultBadgeColor: 'text-orange-600 bg-orange-100',
            caseStudyLink: '/case-studies/mural-story',
            avatarImage: '/assets/Testimonial/Sandip.png',
            sortOrder: 9,
        },
        {
            clientName: 'Saim',
            role: 'CTO',
            companyName: 'ELIGHT MALE WELLNESS',
            location: 'London, UK',
            countryCode: 'gb',
            rating: 5,
            reviewText:
                'The mobile app created by the Reinsoft team allows our gym members to book classes effortlessly. It’s fast, sleek, and delivered within our budget.',
            projectType: 'Cross-platform Mobile',
            resultBadgeText: 'Flutter Fitness App',
            resultBadgeColor: 'text-blue-600 bg-blue-100',
            avatarImage: '/assets/Testimonial/sam.png',
            sortOrder: 10,
        },
    ];

    const allTestimonials = [...featuredVideos, ...textTestimonials];

    for (const t of allTestimonials) {
        const existing = await prisma.testimonial.findFirst({
            where: { clientName: t.clientName, projectType: t.projectType },
        });

        if (existing) {
            await prisma.testimonial.update({
                where: { id: existing.id },
                data: {
                    role: t.role,
                    companyName: t.companyName,
                    location: t.location,
                    countryCode: t.countryCode,
                    rating: t.rating,
                    reviewText: t.reviewText,
                    resultBadgeText: t.resultBadgeText || null,
                    resultBadgeColor: t.resultBadgeColor || null,
                    avatarImage: t.avatarImage || null,
                    caseStudyLink: t.caseStudyLink || null,
                    isVideo: Boolean(t.isVideo),
                    videoUrl: t.videoUrl || null,
                    subtitleVttUrl: t.subtitleVttUrl || null,
                    videoThumbnail: t.videoThumbnail || null,
                    isFeatured: Boolean(t.isFeatured),
                    sortOrder: t.sortOrder,
                    status: 'PUBLISHED',
                },
            });
        } else {
            await prisma.testimonial.create({
                data: {
                    clientName: t.clientName,
                    role: t.role,
                    companyName: t.companyName,
                    location: t.location,
                    countryCode: t.countryCode,
                    rating: t.rating,
                    reviewText: t.reviewText,
                    projectType: t.projectType,
                    resultBadgeText: t.resultBadgeText || null,
                    resultBadgeColor: t.resultBadgeColor || null,
                    avatarImage: t.avatarImage || null,
                    caseStudyLink: t.caseStudyLink || null,
                    isVideo: Boolean(t.isVideo),
                    videoUrl: t.videoUrl || null,
                    subtitleVttUrl: t.subtitleVttUrl || null,
                    videoThumbnail: t.videoThumbnail || null,
                    isFeatured: Boolean(t.isFeatured),
                    sortOrder: t.sortOrder,
                    status: 'PUBLISHED',
                },
            });
        }
        count++;
    }

    stats.testimonials = count;
}

// -----------------------------------------------------------------------------
// 5. BRAND LOGOS (All 31 logos in Marquee Ticker)
// -----------------------------------------------------------------------------
async function seedBrandLogos(stats) {
    let count = 0;

    const row1 = [
        { name: 'VendorConnect', logoUrl: '/assets/Brands logo/vendorconnect.png', customClass: 'scale-[1.3] w-[85%] h-[85%] object-contain' },
        { name: 'DURAup', logoUrl: '/assets/Brands logo/DURAup-2.png' },
        { name: 'Accuster', logoUrl: '/assets/Brands logo/AccusterLogo_PNG-e1701758391141-1536x1036.png' },
        { name: 'BJS', logoUrl: '/assets/Brands logo/BJS.png' },
        { name: 'Kamutalk', logoUrl: '/assets/Brands logo/Kamutalk1.png', customClass: 'scale-[2.0]' },
        { name: 'Shamrock', logoUrl: '/assets/Brands logo/Shamrock Logo.png' },
        { name: 'The Mural Story', logoUrl: '/assets/Brands logo/The_Mural_Story_-_Horizontal_-_Logo1.png', customClass: 'scale-110', bgClass: 'bg-gray-900 border-gray-800' },
        { name: 'Purelife Organic', logoUrl: '/assets/Brands logo/WhatsApp Image 2026-03-20 at 2.23.31 PM.jpeg', customClass: 'scale-[1.4] object-contain mix-blend-multiply' },
        { name: 'Angela Event Partner', logoUrl: '/assets/Brands logo/angela.png' },
        { name: 'DrLabike', logoUrl: '/assets/Brands logo/cropped-DrLabike-New-logo-trans-261x300.png' },
        { name: 'ZAAF', logoUrl: '/assets/Brands logo/ZAAF Logo.png', customClass: 'scale-125 object-contain' },
        { name: 'PostPress', logoUrl: '/assets/Brands logo/PostPress.jpeg', customClass: 'w-[85%] h-[85%] object-contain mix-blend-multiply', bgClass: 'bg-white' },
        { name: 'Matematikk', logoUrl: '/assets/Brands logo/matematikk.png', customClass: 'w-[90%] h-[90%] object-contain' },
        { name: 'Macau Nutrition', logoUrl: '/assets/Brands logo/Macau.webp', customClass: 'scale-125 object-contain mix-blend-multiply' },
        { name: 'AUS Auto', logoUrl: '/assets/Brands logo/AUS_Autologo.jpeg', customClass: 'scale-[1.4] object-contain mix-blend-multiply' },
        { name: 'Jexmate', logoUrl: '/assets/Brands logo/jexmate-logo.png', customClass: 'w-[88%] h-[88%] object-contain' },
    ];

    const row2 = [
        { name: 'Elmeck', logoUrl: '/assets/Brands logo/elmeck-logo.png', customClass: 'scale-[1.15] w-full h-full object-contain' },
        { name: 'VRidez Fleet', logoUrl: '/assets/Brands logo/cropped-New-VRidez-Logo.png' },
        { name: 'J2 Wealth', logoUrl: '/assets/Brands logo/j2wealth1.png', customClass: 'scale-110', bgClass: 'bg-gray-900 border-gray-800' },
        { name: 'Opal', logoUrl: '/assets/Brands logo/opal.png' },
        { name: 'Supported Living Property', logoUrl: '/assets/Brands logo/property.jpeg', customClass: 'scale-[2.6]' },
        { name: 'Purelife Agriculture', logoUrl: '/assets/Brands logo/purelife.jpeg', customClass: 'scale-[1.35]' },
        { name: 'Basel', logoUrl: '/assets/Brands logo/Basel_logo.png', customClass: 'scale-[1.4] object-contain mix-blend-multiply' },
        { name: 'Sahasra AI', logoUrl: '/assets/Brands logo/sahasraai.png' },
        { name: 'Shopaholic', logoUrl: '/assets/Brands logo/shopalic.png', customClass: 'scale-[1.35]' },
        { name: 'Trucker', logoUrl: '/assets/Brands logo/trucker.webp', customClass: 'scale-[2.0]', bgClass: 'bg-gray-900 border-gray-800' },
        { name: 'Sport Info', logoUrl: '/assets/Brands logo/logo Sport Info.png', customClass: 'scale-[1.65] object-contain mix-blend-multiply' },
        { name: 'Fymate', logoUrl: '/assets/Brands logo/fymate.png', customClass: 'scale-[1.3] object-contain mix-blend-multiply' },
        { name: 'Corridors', logoUrl: '/assets/Brands logo/Corridors.png', customClass: 'scale-[1.4] object-contain mix-blend-multiply' },
        { name: 'GP Care', logoUrl: '/assets/Brands logo/gp_care.jpeg', customClass: 'scale-[1.4] object-contain mix-blend-multiply' },
        { name: 'Mitro', logoUrl: '/assets/Brands logo/mitrologo.jpeg', customClass: 'scale-[1.4] object-contain mix-blend-multiply' },
    ];

    const rows = [
        ...row1.map((item, idx) => ({ ...item, rowNumber: 1, sortOrder: idx + 1 })),
        ...row2.map((item, idx) => ({ ...item, rowNumber: 2, sortOrder: idx + 1 })),
    ];

    for (const b of rows) {
        const existing = await prisma.brandLogo.findFirst({
            where: { name: b.name, rowNumber: b.rowNumber },
        });

        if (existing) {
            await prisma.brandLogo.update({
                where: { id: existing.id },
                data: {
                    logoUrl: b.logoUrl,
                    customClass: b.customClass || null,
                    bgClass: b.bgClass || null,
                    sortOrder: b.sortOrder,
                    isEnabled: true,
                },
            });
        } else {
            await prisma.brandLogo.create({
                data: {
                    name: b.name,
                    logoUrl: b.logoUrl,
                    rowNumber: b.rowNumber,
                    customClass: b.customClass || null,
                    bgClass: b.bgClass || null,
                    sortOrder: b.sortOrder,
                    isEnabled: true,
                },
            });
        }
        count++;
    }

    stats.brandLogos = count;
}

// -----------------------------------------------------------------------------
// 6. TEAM & LEADERSHIP
// -----------------------------------------------------------------------------
async function seedTeamMembers(stats) {
    let count = 0;

    const members = [
        {
            name: 'Manpreet Singh',
            role: 'Founder & CEO',
            focusArea: 'Vision & Growth',
            bio: 'Leads Reinsoft with a sharp focus on scalable digital products, long-term strategy, and systems that create measurable business impact.',
            imageUrl: '/assets/Founders_pics/Manpreet_founder_CEO.png',
            accentGradient: 'from-[#c6a86a] via-[#e7d2a3] to-[#f5ead3]',
            isFounder: true,
            sortOrder: 1,
        },
        {
            name: 'Tanu Bharti',
            role: 'Co-Founder & CTO',
            focusArea: 'Product & Delivery',
            bio: 'Combines product thinking with technical execution to ensure every project feels polished, performant, and thoughtfully delivered.',
            imageUrl: '/assets/Founders_pics/Tanu_founder & CTO.png',
            accentGradient: 'from-[#b8955b] via-[#dbc08d] to-[#f3e6c7]',
            isFounder: true,
            sortOrder: 2,
        },
        {
            name: 'Muneeb',
            role: 'Project Analyst',
            focusArea: 'Planning & Ops',
            bio: 'Turns requirements into clarity by aligning timelines, communication, and delivery workflows so projects move with confidence.',
            imageUrl: '/assets/Muneeb.jpeg',
            accentGradient: 'from-[#b48b4d] via-[#d8be89] to-[#f5e6c5]',
            isFounder: false,
            sortOrder: 3,
        },
        {
            name: 'Amarjit Singh',
            role: 'Full-Stack Developer',
            focusArea: 'Engineering',
            bio: 'Builds secure, scalable applications across frontend and backend stacks with a strong emphasis on performance and usability.',
            imageUrl: '/assets/Amarjit.jpeg',
            accentGradient: 'from-[#a7864b] via-[#d4b77f] to-[#f0dfb8]',
            isFounder: false,
            sortOrder: 4,
        },
    ];

    for (const m of members) {
        const existing = await prisma.teamMember.findFirst({
            where: { name: m.name, role: m.role },
        });

        if (existing) {
            await prisma.teamMember.update({
                where: { id: existing.id },
                data: {
                    focusArea: m.focusArea,
                    bio: m.bio,
                    imageUrl: m.imageUrl,
                    accentGradient: m.accentGradient,
                    isFounder: m.isFounder,
                    sortOrder: m.sortOrder,
                    isEnabled: true,
                },
            });
        } else {
            await prisma.teamMember.create({
                data: {
                    name: m.name,
                    role: m.role,
                    focusArea: m.focusArea,
                    bio: m.bio,
                    imageUrl: m.imageUrl,
                    accentGradient: m.accentGradient,
                    isFounder: m.isFounder,
                    sortOrder: m.sortOrder,
                    isEnabled: true,
                },
            });
        }
        count++;
    }

    stats.teamMembers = count;
}

// -----------------------------------------------------------------------------
// 7. FAQS (General & Service-Specific)
// -----------------------------------------------------------------------------
async function seedFaqItems(stats) {
    let count = 0;

    const faqs = [
        // General FAQs (Homepage & Landing)
        { category: 'general', question: 'What type of projects do you work on?', answer: 'We work on website development, web applications, mobile apps (Android & iOS) & Custom Software / CRM development for startups, growing businesses, and enterprises.', sortOrder: 1 },
        { category: 'general', question: 'What is the minimum budget to start a project?', answer: 'It depends on scope, features, and timelines. We always suggest the most cost-effective solution first.', sortOrder: 2 },
        { category: 'general', question: 'Do you provide support after project delivery?', answer: 'Yes ✅ We provide post-launch support, bug fixes, and optional maintenance plans to ensure smooth performance.', sortOrder: 3 },
        { category: 'general', question: 'Do you work with startups and small businesses?', answer: 'Yes. We work with startups, SMEs, and established businesses globally.', sortOrder: 4 },
        { category: 'general', question: 'Can you work with international clients?', answer: 'Absolutely. We work with clients globally and handle communication via email, Zoom, WhatsApp, or Slack.', sortOrder: 5 },
        { category: 'general', question: 'How do we get started?', answer: "Simply fill out the form or contact us on WhatsApp. We'll schedule a free consultation to understand your requirements and suggest the best approach.", sortOrder: 6 },

        // White-Label Service FAQs
        ...whiteLabelDevelopment.faqs.map((f, i) => ({
            category: 'white-label',
            question: f.question,
            answer: f.answer,
            sortOrder: i + 1,
        })),

        // IT Support Service FAQs
        ...itSupportMaintenance.faqs.map((f, i) => ({
            category: 'it-support',
            question: f.question,
            answer: f.answer,
            sortOrder: i + 1,
        })),

        // Business Automation Service FAQs
        ...businessAutomation.faqs.map((f, i) => ({
            category: 'business-automation',
            question: f.question,
            answer: f.answer,
            sortOrder: i + 1,
        })),
    ];

    for (const item of faqs) {
        const existing = await prisma.faqItem.findFirst({
            where: { question: item.question, category: item.category },
        });

        if (existing) {
            await prisma.faqItem.update({
                where: { id: existing.id },
                data: {
                    answer: item.answer,
                    sortOrder: item.sortOrder,
                    isEnabled: true,
                },
            });
        } else {
            await prisma.faqItem.create({
                data: {
                    category: item.category,
                    question: item.question,
                    answer: item.answer,
                    sortOrder: item.sortOrder,
                    isEnabled: true,
                },
            });
        }
        count++;
    }

    stats.faqItems = count;
}

// -----------------------------------------------------------------------------
// 8. PAGES & SECTIONS (34 public routes with structured layout blocks)
// -----------------------------------------------------------------------------
async function seedPagesAndSections(stats) {
    let pageCount = 0;
    let sectionCount = 0;

    const pages = [
        {
            slug: '',
            title: 'Home',
            pageType: 'HOME',
            seoTitle: 'AI App Development Company USA Scalable Apps',
            seoDescription: 'Need smart AI apps for your business? Get custom AI-powered app development with an expert team and proven results. Start your project today with Reinsoft.',
            seoKeywords: 'AI-powered app development company in USA, custom software development',
            canonicalUrl: '/',
            sections: [
                {
                    sectionType: 'HERO',
                    name: 'Home Hero Section',
                    sortOrder: 1,
                    content: {
                        badge: '10+ Years Experience',
                        badgePrefix: 'Trusted by startups & growing businesses',
                        title: 'Custom Software, Web & Mobile App Development Company',
                        subtitle: 'We build high-performance websites and mobile apps that generate business and scale effortlessly.',
                        ctaPrimaryText: 'Get Free Consultation',
                        ctaPrimaryLink: '/contact',
                        ctaSecondaryText: 'Request a Quote',
                        ctaSecondaryLink: '/contact?type=quote',
                        formTitle: 'Grow Your Business 🚀',
                        formDescription: 'Tell us about your project and get a custom quote within 24 hours.',
                    },
                },
                {
                    sectionType: 'BRANDS_SLIDER',
                    name: 'Client Brands Ticker',
                    sortOrder: 2,
                    settings: { variant: 'home' },
                    content: {
                        title: 'Trusted by Growing & Established Brands',
                        badge: '👉 Worked with 60+ brands worldwide',
                    },
                },
                {
                    sectionType: 'TRUST_STRIP',
                    name: 'Trust Badges',
                    sortOrder: 3,
                    content: {
                        stats: [
                            { icon: '⭐', value: '10+', label: 'Years Shaping Products' },
                            { icon: '🚀', value: '200+', label: 'Successful Launches' },
                            { icon: '🌍', value: '15+', label: 'Countries Worldwide' },
                            { icon: '💼', value: 'Startups', label: 'to Enterprise Clients' },
                        ],
                    },
                },
                {
                    sectionType: 'WHY_CHOOSE_US',
                    name: 'Why Choose Reinsoft',
                    sortOrder: 4,
                    content: {
                        title: 'Why Choose Reinsoft',
                        description: 'We blend engineering discipline, thoughtful design, and strategic delivery.',
                    },
                },
                {
                    sectionType: 'FEATURES_OVERVIEW',
                    name: 'Core Services Showcase',
                    sortOrder: 5,
                    content: {
                        title: 'What We Build',
                        services: [
                            { title: 'Custom Website Development', href: '/services/web-development' },
                            { title: 'Custom Software Solutions', href: '/services/software-development' },
                            { title: 'Mobile App Development', href: '/services/mobile-app-development' },
                        ],
                    },
                },
                {
                    sectionType: 'WORKFLOW_STEPS',
                    name: 'Our Development Process',
                    sortOrder: 6,
                    content: {
                        title: 'Our Custom Software Development Process',
                        description: 'No confusing jargon—just a clear, straightforward path from our first chat to launch.',
                    },
                },
                {
                    sectionType: 'PORTFOLIO_GRID',
                    name: 'Recent Work Preview',
                    sortOrder: 7,
                    settings: { limit: 4 },
                    content: {
                        title: 'Featured Case Studies',
                    },
                },
                {
                    sectionType: 'TEAM_GRID',
                    name: 'Core Leadership',
                    sortOrder: 8,
                    content: {
                        title: 'Meet Our Leadership Team',
                    },
                },
                {
                    sectionType: 'TESTIMONIALS_CAROUSEL',
                    name: 'Client Reviews & Videos',
                    sortOrder: 9,
                    content: {
                        title: 'What Our Clients Say',
                    },
                },
                {
                    sectionType: 'FAQ_ACCORDION',
                    name: 'Frequently Asked Questions',
                    sortOrder: 10,
                    content: {
                        title: 'Custom Software Development FAQs',
                    },
                },
                {
                    sectionType: 'CALL_TO_ACTION',
                    name: 'Global Call to Action',
                    sortOrder: 11,
                    content: {
                        badge: 'Free Consultation Available',
                        title: "Let's Build Something Extraordinary Together",
                        subtitle: 'Get a clear solution, realistic timeline, and transparent pricing. No pressure, no obligation—just results.',
                        buttonText: 'Book Free Consultation',
                        buttonLink: '/contact',
                        phone: '+918968369582',
                        whatsapp: '918968369582',
                    },
                },
            ],
        },
        {
            slug: 'about',
            title: 'About Us',
            pageType: 'ABOUT',
            seoTitle: 'About Reinsoft | Elevated Digital Experiences',
            seoDescription: 'Reinsoft designs and builds polished digital products for ambitious brands, startups, and growing companies worldwide.',
            canonicalUrl: '/about',
            sections: [
                {
                    sectionType: 'ABOUT_HERO',
                    name: 'About Hero',
                    sortOrder: 1,
                    content: {
                        badge: 'About Reinsoft',
                        title: 'We shape elevated digital experiences',
                        subtitle: 'Reinsoft designs and builds polished digital products for ambitious brands, startups, and growing companies that want more than just functional software.',
                        stats: [
                            { value: '10+', label: 'Years shaping products' },
                            { value: '200+', label: 'Projects delivered' },
                            { value: 'Global', label: 'Clients and teams' },
                        ],
                    },
                },
                {
                    sectionType: 'FOUNDERS_STORY',
                    name: 'Founders Leadership Story',
                    sortOrder: 2,
                    content: {
                        title: 'Meet The Minds Behind Reinsoft IT Solutions',
                    },
                },
                {
                    sectionType: 'ABOUT_VISION',
                    name: 'Our Story & Vision',
                    sortOrder: 3,
                    content: {
                        storyTitle: 'Where vision meets reality',
                        visionTitle: 'Building digital systems that feel elegant, useful, and enduring',
                        founderQuote: 'Manpreet Singh, Founder & CEO of Reinsoft',
                    },
                },
                {
                    sectionType: 'ABOUT_SERVICES',
                    name: 'Services Capabilities',
                    sortOrder: 4,
                },
                {
                    sectionType: 'ABOUT_TECH_STACK',
                    name: 'Technologies We Master',
                    sortOrder: 5,
                },
                {
                    sectionType: 'INDUSTRIES_GRID',
                    name: 'Industries We Serve',
                    sortOrder: 6,
                },
                {
                    sectionType: 'ABOUT_PROCESS',
                    name: 'Development Lifecycle',
                    sortOrder: 7,
                },
                {
                    sectionType: 'CALL_TO_ACTION',
                    name: 'Partner With Us CTA',
                    sortOrder: 8,
                    content: {
                        badge: "Let's Collaborate",
                        title: 'Partner with a team that builds with taste, rigor, and momentum',
                        subtitle: "We're more than a dev team — we're your long-term technology partner.",
                        buttonText: 'Schedule a Meeting',
                        buttonLink: '/contact',
                    },
                },
            ],
        },
        {
            slug: 'services',
            title: 'Our Services',
            pageType: 'SERVICES_HUB',
            seoTitle: 'Custom Software & IT Solutions | Reinsoft Services',
            seoDescription: 'Explore our full suite of software development, web development, mobile apps, business automation, and white-label IT services.',
            canonicalUrl: '/services',
            sections: [
                {
                    sectionType: 'SERVICE_HERO',
                    name: 'Services Hub Overview',
                    sortOrder: 1,
                },
            ],
        },
        {
            slug: 'services/white-label-development',
            title: 'White-Label Development',
            pageType: 'SERVICE_DETAIL',
            seoTitle: 'White-Label Development Partner for Agencies | REINSOFT',
            seoDescription: 'REINSOFT provides white-label frontend, backend, mobile app, integration, QA, and delivery support for agencies and software companies.',
            canonicalUrl: '/services/white-label-development',
            sections: [
                {
                    sectionType: 'SERVICE_DELIVERABLES',
                    name: 'White-Label Service Deliverables',
                    sortOrder: 1,
                    content: whiteLabelDevelopment,
                },
            ],
        },
        {
            slug: 'services/it-support-maintenance',
            title: 'IT Support & Maintenance',
            pageType: 'SERVICE_DETAIL',
            seoTitle: 'IT Support & Maintenance Services | REINSOFT',
            seoDescription: 'Practical IT support for bug fixes, security updates, backups, monitoring, and ongoing technical maintenance.',
            canonicalUrl: '/services/it-support-maintenance',
            sections: [
                {
                    sectionType: 'SERVICE_DELIVERABLES',
                    name: 'IT Support Deliverables',
                    sortOrder: 1,
                    content: itSupportMaintenance,
                },
            ],
        },
        {
            slug: 'services/business-automation',
            title: 'Business Automation & AI',
            pageType: 'SERVICE_DETAIL',
            seoTitle: 'Business Automation & AI Services | REINSOFT',
            seoDescription: 'Automate business workflows with WhatsApp Cloud API, CRM integrations, lead capture, and practical AI.',
            canonicalUrl: '/services/business-automation',
            sections: [
                {
                    sectionType: 'SERVICE_DELIVERABLES',
                    name: 'Business Automation Deliverables',
                    sortOrder: 1,
                    content: businessAutomation,
                },
            ],
        },
        {
            slug: 'services/web-development',
            title: 'Web Development',
            pageType: 'SERVICE_DETAIL',
            seoTitle: 'Hire Full Stack Developers Build Fast Websites | Reinsoft',
            seoDescription: 'Need a strong website for your business? Hire full-stack developers for custom web solutions. Fast, scalable, and expert service with Reinsoft.',
            canonicalUrl: '/services/web-development',
        },
        {
            slug: 'services/software-development',
            title: 'Software Development',
            pageType: 'SERVICE_DETAIL',
            seoTitle: 'Custom Software Development Company | Reinsoft',
            seoDescription: 'Enterprise software, SaaS platforms, and custom management systems designed for operational scale.',
            canonicalUrl: '/services/software-development',
        },
        {
            slug: 'services/mobile-app-development',
            title: 'Mobile App Development',
            pageType: 'SERVICE_DETAIL',
            seoTitle: 'Native & Cross-Platform Mobile App Development | Reinsoft',
            seoDescription: 'iOS and Android mobile app development with Flutter, React Native, and Swift/Kotlin.',
            canonicalUrl: '/services/mobile-app-development',
        },
        {
            slug: 'services/e-commerce',
            title: 'E-Commerce Development',
            pageType: 'SERVICE_DETAIL',
            seoTitle: 'Custom E-Commerce Store Development | Reinsoft',
            seoDescription: 'High-conversion online stores with headless Next.js, Shopify, WooCommerce, and Stripe integrations.',
            canonicalUrl: '/services/e-commerce',
        },
        {
            slug: 'services/api-integration',
            title: 'API Integration & Middleware',
            pageType: 'SERVICE_DETAIL',
            seoTitle: 'Third-Party API & Middleware Integration | Reinsoft',
            seoDescription: 'Seamless connection of payment gateways, CRMs, ERPs, and custom microservices.',
            canonicalUrl: '/services/api-integration',
        },
        {
            slug: 'services/long-term-support-growth',
            title: 'Long-Term Support & Growth',
            pageType: 'SERVICE_DETAIL',
            seoTitle: 'Continuous Software Support & Growth Partnerships | Reinsoft',
            seoDescription: 'Dedicated technical retainer teams for product iterations and performance tuning.',
            canonicalUrl: '/services/long-term-support-growth',
        },
        {
            slug: 'portfolio',
            title: 'Portfolio',
            pageType: 'PORTFOLIO',
            seoTitle: 'Our Portfolio | Reinsoft Custom Software & IT Solutions',
            seoDescription: 'Explore our recent projects and success stories. See how we have helped businesses grow with custom software and web development.',
            canonicalUrl: '/our-work',
        },
        {
            slug: 'our-work',
            title: 'Our Work',
            pageType: 'OUR_WORK',
            seoTitle: 'Our Work & Recent Developments | Reinsoft',
            seoDescription: 'See our latest product developments, web apps, and enterprise architecture built using modern tech stacks.',
            canonicalUrl: '/our-work',
        },
        {
            slug: 'testimonial',
            title: 'Client Testimonials',
            pageType: 'TESTIMONIALS',
            seoTitle: 'Client Testimonials | Reinsoft Custom Software & IT Solutions',
            seoDescription: 'Read what our clients have to say about working with Reinsoft for their custom software and web development needs.',
            canonicalUrl: '/testimonial',
        },
        {
            slug: 'contact',
            title: 'Contact Us',
            pageType: 'CONTACT',
            seoTitle: 'Contact Reinsoft | Get Free Project Consultation',
            seoDescription: 'Speak with our technical leads about your software, web, or mobile app project. Free scope review within 24 hours.',
            canonicalUrl: '/contact',
        },
        {
            slug: 'software-development-company-usa',
            title: 'Custom Software Development Company in USA',
            pageType: 'LOCATION_LANDING',
            seoTitle: 'Custom Software Development Company in USA',
            seoDescription: 'Top-rated software development company serving US businesses. Custom web apps, mobile apps, and SaaS platforms built by senior engineers.',
            canonicalUrl: '/software-development-company-usa',
        },
        {
            slug: 'mobile-app-development-company-uk',
            title: 'Mobile App Development Company in UK',
            pageType: 'LOCATION_LANDING',
            seoTitle: 'Top Mobile App Development Company UK | iOS & Android Apps',
            seoDescription: 'Premier mobile app development company serving UK startups and enterprises in London, Manchester, and Birmingham.',
            canonicalUrl: '/mobile-app-development-company-uk',
        },
        {
            slug: 'web-development-company-australia',
            title: 'Web Development Company in Australia',
            pageType: 'LOCATION_LANDING',
            seoTitle: 'Leading Web Development Company Australia | Custom Websites',
            seoDescription: 'Expert web development agency serving Australian businesses across Sydney, Melbourne, and Brisbane.',
            canonicalUrl: '/web-development-company-australia',
        },
        {
            slug: 'hire-flutter-developers-usa',
            title: 'Hire Flutter Developers in USA',
            pageType: 'HIRE_DEVELOPERS',
            seoTitle: 'Hire Flutter Developers in USA',
            seoDescription: 'Hire senior Flutter developers in the USA. Build stunning iOS & Android apps from a single codebase.',
            canonicalUrl: '/hire-flutter-developers-usa',
        },
        {
            slug: 'hire-flutter-developers-uk',
            title: 'Hire Flutter Developers in UK',
            pageType: 'HIRE_DEVELOPERS',
            seoTitle: 'Hire Flutter Developers in UK',
            seoDescription: 'Hire dedicated Flutter developers in the UK. Time-zone aligned and NDA-protected delivery.',
            canonicalUrl: '/hire-flutter-developers-uk',
        },
        {
            slug: 'hire-flutter-developers-australia',
            title: 'Hire Flutter Developers in Australia',
            pageType: 'HIRE_DEVELOPERS',
            seoTitle: 'Hire Flutter Developers in Australia',
            seoDescription: 'Hire skilled Flutter mobile app developers across Australia.',
            canonicalUrl: '/hire-flutter-developers-australia',
        },
        {
            slug: 'hire-full-stack-developers-usa',
            title: 'Hire Full Stack Developers in USA',
            pageType: 'HIRE_DEVELOPERS',
            seoTitle: 'Hire Full Stack Developers in USA',
            seoDescription: 'Hire experienced full-stack engineers in the USA for modern React, Next.js, and Node.js solutions.',
            canonicalUrl: '/hire-full-stack-developers-usa',
        },
        {
            slug: 'hire-full-stack-developers-uk',
            title: 'Hire Full Stack Developers in UK',
            pageType: 'HIRE_DEVELOPERS',
            seoTitle: 'Hire Full Stack Developers in UK',
            seoDescription: 'Hire top-tier full-stack developers in the UK for web and enterprise software.',
            canonicalUrl: '/hire-full-stack-developers-uk',
        },
        {
            slug: 'hire-full-stack-developers-australia',
            title: 'Hire Full Stack Developers in Australia',
            pageType: 'HIRE_DEVELOPERS',
            seoTitle: 'Hire Full Stack Developers in Australia',
            seoDescription: 'Hire dedicated Australian full stack developers for rapid project deployment.',
            canonicalUrl: '/hire-full-stack-developers-australia',
        },
        {
            slug: 'hire-react-native-developers-usa',
            title: 'Hire React Native Developers in USA',
            pageType: 'HIRE_DEVELOPERS',
            seoTitle: 'Hire React Native Developers in USA',
            seoDescription: 'Hire senior React Native app developers in the USA for high-performance cross-platform apps.',
            canonicalUrl: '/hire-react-native-developers-usa',
        },
        {
            slug: 'hire-react-native-developers-uk',
            title: 'Hire React Native Developers in UK',
            pageType: 'HIRE_DEVELOPERS',
            seoTitle: 'Hire React Native Developers in UK',
            seoDescription: 'Hire dedicated React Native engineers in the UK.',
            canonicalUrl: '/hire-react-native-developers-uk',
        },
        {
            slug: 'hire-react-native-developers-australia',
            title: 'Hire React Native Developers in Australia',
            pageType: 'HIRE_DEVELOPERS',
            seoTitle: 'Hire React Native Developers in Australia',
            seoDescription: 'Hire vetted React Native app developers in Australia.',
            canonicalUrl: '/hire-react-native-developers-australia',
        },
        {
            slug: 'privacy',
            title: 'Privacy Policy',
            pageType: 'LEGAL',
            seoTitle: 'Privacy Policy | Reinsoft IT Solutions',
            seoDescription: 'Reinsoft privacy policy and client data protection practices.',
            canonicalUrl: '/privacy',
        },
        {
            slug: 'terms',
            title: 'Terms & Conditions',
            pageType: 'LEGAL',
            seoTitle: 'Terms & Conditions | Reinsoft IT Solutions',
            seoDescription: 'Terms and conditions governing Reinsoft project delivery and services.',
            canonicalUrl: '/terms',
        },
    ];

    for (const p of pages) {
        const page = await prisma.page.upsert({
            where: { slug: p.slug },
            create: {
                slug: p.slug,
                title: p.title,
                pageType: p.pageType,
                status: 'PUBLISHED',
                seoTitle: p.seoTitle || null,
                seoDescription: p.seoDescription || null,
                seoKeywords: p.seoKeywords || null,
                canonicalUrl: p.canonicalUrl || null,
            },
            update: {
                title: p.title,
                pageType: p.pageType,
                seoTitle: p.seoTitle || null,
                seoDescription: p.seoDescription || null,
                seoKeywords: p.seoKeywords || null,
                canonicalUrl: p.canonicalUrl || null,
            },
        });
        pageCount++;

        if (p.sections && p.sections.length > 0) {
            for (const sec of p.sections) {
                const existingSec = await prisma.pageSection.findFirst({
                    where: { pageId: page.id, sectionType: sec.sectionType, sortOrder: sec.sortOrder },
                });

                if (existingSec) {
                    await prisma.pageSection.update({
                        where: { id: existingSec.id },
                        data: {
                            name: sec.name || null,
                            settings: sec.settings || {},
                            content: sec.content || {},
                            isEnabled: true,
                        },
                    });
                } else {
                    await prisma.pageSection.create({
                        data: {
                            pageId: page.id,
                            sectionType: sec.sectionType,
                            name: sec.name || null,
                            sortOrder: sec.sortOrder,
                            settings: sec.settings || {},
                            content: sec.content || {},
                            isEnabled: true,
                        },
                    });
                }
                sectionCount++;
            }
        }
    }

    stats.pages = pageCount;
    stats.pageSections = sectionCount;
}

// -----------------------------------------------------------------------------
// MAIN INGESTION ORCHESTRATOR
// -----------------------------------------------------------------------------
async function runIngestion() {
    console.log('\n======================================================');
    console.log('  REINSOFT CMS - DATA INGESTION & SEEDING ENGINE      ');
    console.log('======================================================\n');

    // Verify database connection target
    const targetCheck = await prisma.$queryRawUnsafe(
        'SELECT current_database() as db, current_user as user'
    );
    console.log(`Target Database:  ${targetCheck[0].db}`);
    console.log(`Connected User:   ${targetCheck[0].user}`);
    console.log(`Environment:      ${isProductionIngestion ? 'Verified Production Database' : 'Verified Neon Development Branch'}`);
    console.log('------------------------------------------------------\n');

    const stats = {
        siteSettings: 0,
        navigationItems: 0,
        caseStudies: 0,
        testimonials: 0,
        brandLogos: 0,
        teamMembers: 0,
        faqItems: 0,
        pages: 0,
        pageSections: 0,
    };

    try {
        console.log('1/8 Seeding Global Site Settings...');
        await seedSiteSettings(stats);

        console.log('2/8 Seeding Navigation & Menus (Navbar + Footer)...');
        await seedNavigation(stats);

        console.log('3/8 Seeding Case Studies (All 17 Projects)...');
        await seedCaseStudies(stats);

        console.log('4/8 Seeding Testimonials (Videos + Client Reviews)...');
        await seedTestimonials(stats);

        console.log('5/8 Seeding Client Brand Logos (31 Logos in Marquee)...');
        await seedBrandLogos(stats);

        console.log('6/8 Seeding Core Leadership & Team Members...');
        await seedTeamMembers(stats);

        console.log('7/8 Seeding FAQ Items (General + Service pools)...');
        await seedFaqItems(stats);

        console.log('8/8 Seeding Page Registry & Typed Layout Sections...');
        await seedPagesAndSections(stats);

        console.log('\n======================================================');
        console.log('  INGESTION SUMMARY (Records in Neon Database)        ');
        console.log('======================================================');
        console.log(`  Site Settings:     ${stats.siteSettings}`);
        console.log(`  Navigation Items:  ${stats.navigationItems}`);
        console.log(`  Case Studies:      ${stats.caseStudies}`);
        console.log(`  Testimonials:      ${stats.testimonials}`);
        console.log(`  Brand Logos:       ${stats.brandLogos}`);
        console.log(`  Team Members:      ${stats.teamMembers}`);
        console.log(`  FAQ Items:         ${stats.faqItems}`);
        console.log(`  Pages Registered:  ${stats.pages}`);
        console.log(`  Sections Mapped:   ${stats.pageSections}`);
        console.log('======================================================\n');
        console.log('✅ Ingestion completed successfully with zero duplicates!\n');
    } catch (err) {
        console.error('\n❌ Ingestion failed:', err);
        throw err;
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = { runIngestion };
