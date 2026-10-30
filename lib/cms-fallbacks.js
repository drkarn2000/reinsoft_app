/**
 * Fallback datasets for the REINSOFT website.
 * Guaranteed safe fallbacks used if the Neon PostgreSQL database is unreachable
 * or during build time when offline, ensuring 100% route and visual continuity.
 */

export const fallbackBrandLogosRow1 = [
    { src: "/assets/Brands logo/vendorconnect.png", className: "scale-[1.3] w-[85%] h-[85%] object-contain" },
    { src: "/assets/Brands logo/DURAup-2.png", className: "" },
    { src: "/assets/Brands logo/AccusterLogo_PNG-e1701758391141-1536x1036.png", className: "" },
    { src: "/assets/Brands logo/BJS.png", className: "" },
    { src: "/assets/Brands logo/Kamutalk1.png", className: "scale-[2.0]" },
    { src: "/assets/Brands logo/Shamrock Logo.png", className: "" },
    { src: "/assets/Brands logo/The_Mural_Story_-_Horizontal_-_Logo1.png", className: "scale-110", bgClass: "bg-gray-900 border-gray-800" },
    { src: "/assets/Brands logo/WhatsApp Image 2026-03-20 at 2.23.31 PM.jpeg", className: "scale-[1.4] object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/angela.png", className: "" },
    { src: "/assets/Brands logo/cropped-DrLabike-New-logo-trans-261x300.png", className: "" },
    { src: "/assets/Brands logo/ZAAF Logo.png", className: "scale-125 object-contain" },
    { src: "/assets/Brands logo/PostPress.jpeg", className: "w-[85%] h-[85%] object-contain mix-blend-multiply", bgClass: "bg-white" },
    { src: "/assets/Brands logo/matematikk.png", className: "w-[90%] h-[90%] object-contain" },
    { src: "/assets/Brands logo/Macau.webp", className: "scale-125 object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/AUS_Autologo.jpeg", className: "scale-[1.4] object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/jexmate-logo.png", className: "w-[88%] h-[88%] object-contain" },
    { src: "/assets/Brands logo/EMW Session Tracker.png", className: "object-contain" },
    { src: "/assets/Brands logo/Styleora.logo.jpeg", className: "object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/VEYORA logo.png", className: "object-contain" }
];

export const fallbackBrandLogosRow2 = [
    { src: "/assets/Brands logo/elmeck-logo.png", className: "scale-[1.15] w-full h-full object-contain" },
    { src: "/assets/Brands logo/cropped-New-VRidez-Logo.png", className: "" },
    { src: "/assets/Brands logo/j2wealth1.png", className: "scale-110", bgClass: "bg-gray-900 border-gray-800" },
    { src: "/assets/Brands logo/opal.png", className: "" },
    { src: "/assets/Brands logo/property.jpeg", className: "scale-[2.6]" },
    { src: "/assets/Brands logo/purelife.jpeg", className: "scale-[1.35]" },
    { src: "/assets/Brands logo/Basel_logo.png", className: "scale-[1.4] object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/sahasraai.png", className: "" },
    { src: "/assets/Brands logo/shopalic.png", className: "scale-[1.35]" },
    { src: "/assets/Brands logo/trucker.webp", className: "scale-[2.0]", bgClass: "bg-gray-900 border-gray-800" },
    { src: "/assets/Brands logo/logo Sport Info.png", className: "scale-[1.65] object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/fymate.png", className: "scale-[1.3] object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/Corridors.png", className: "scale-[1.4] object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/gp_care.jpeg", className: "scale-[1.4] object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/mitrologo.jpeg", className: "scale-[1.4] object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/VaxAid_logo.png", className: "object-contain" },
    { src: "/assets/Brands logo/Vijay [Green].png", className: "object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/amar_Logo.png", className: "object-contain" },
    { src: "/assets/Brands logo/wayvia.logo.png", className: "object-contain" }
];

export const fallbackTeamMembers = [
    {
        name: "Manpreet Singh",
        role: "Founder & CEO",
        focus: "Vision & Growth",
        bio: "Leads Reinsoft with a sharp focus on scalable digital products, long-term strategy, and systems that create measurable business impact.",
        imageUrl: "/assets/Founders_pics/Manpreet_founder_CEO.png",
        accent: "from-[#c6a86a] via-[#e7d2a3] to-[#f5ead3]",
        isFounder: true,
    },
    {
        name: "Tanu Bharti",
        role: "Co-Founder & CTO",
        focus: "Product & Delivery",
        bio: "Combines product thinking with technical execution to ensure every project feels polished, performant, and thoughtfully delivered.",
        imageUrl: "/assets/Founders_pics/Tanu_founder & CTO.png",
        accent: "from-[#b8955b] via-[#dbc08d] to-[#f3e6c7]",
        isFounder: true,
    },
    {
        name: "Muneeb",
        role: "Project Analyst",
        focus: "Planning & Ops",
        bio: "Turns requirements into clarity by aligning timelines, communication, and delivery workflows so projects move with confidence.",
        imageUrl: "/assets/Muneeb.jpeg",
        accent: "from-[#b48b4d] via-[#d8be89] to-[#f5e6c5]",
        isFounder: false,
    },
    {
        name: "Amarjit Singh",
        role: "Full-Stack Developer",
        focus: "Engineering",
        bio: "Builds secure, scalable applications across frontend and backend stacks with a strong emphasis on performance and usability.",
        imageUrl: "/assets/Amarjit.jpeg",
        accent: "from-[#a7864b] via-[#d4b77f] to-[#f0dfb8]",
        isFounder: false,
    },
];

export const fallbackFeaturedVideos = [
    {
        name: "Capt. Pankaj Sabarwal",
        role: "Director, Maritime Training Institute",
        location: "India",
        flag: "in",
        image: "/assets/Testimonial/Capt_Pankaj.jpeg",
        review: "They developed a fantastic certificate generation and verification software for my maritime training institute. Both of them were very professional and very supportive. I highly recommend them for your software development work.",
        projectType: "Certificate Verification Software",
        localVideo: "/assets/Testimonial/Capt_Pankaj.mp4",
        subtitleSrc: "/assets/Testimonial/capt_pankaj.vtt",
    },
    {
        name: "Sujoye Dhar",
        role: "CTO, Biswakarma",
        location: "Kolkata, India",
        flag: "in",
        image: "/assets/Testimonial/sujoay_pic.png",
        review: "Manpreet ji understood our problems very well. He applied the right solution and our jewellery website was made perfectly. I recommend him for any website or technical problem. My experience with him was very good.",
        projectType: "Jewellery E-commerce Website",
        localVideo: "/assets/Testimonial/sujoye_dhar.mp4",
        subtitleSrc: "/assets/Testimonial/sujoye_dhar.vtt",
    },
];

export const fallbackWrittenTestimonials = [
    {
        id: "2",
        review: "The custom website built by Amarjeet from Reinsoft completely streamlined our operations. What used to take days now takes hours. I have worked with many developers before, but Amarjeet truly outperformed them all.",
        name: "Ehsan F.",
        role: "Product Owner",
        companyLogo: "thirty30media",
        location: "London, UK",
        flag: "gb",
        rating: 5,
        image: "/assets/man.jpg",
        projectType: "Custom Web App",
        resultBadgeText: "65% Faster Load Speed",
        resultBadgeColor: "text-blue-600 bg-blue-100",
        link: "/case-studies/thirty30-media"
    },
    {
        id: "3",
        review: "Working with the Reinsoft team on our SaaS platform was a game-changer. They understood our vision perfectly and delivered a rock-solid Laravel backend. Everything was delivered on time with prompt communication..",
        name: "Angela",
        role: "Founder",
        companyLogo: "Legacy Marketplace",
        location: "Oxford, UK",
        flag: "gb",
        rating: 5,
        image: "/assets/Testimonial/angela.png",
        projectType: "Laravel SaaS Platform",
        resultBadgeText: "+42% Conversion Growth",
        resultBadgeColor: "text-green-600 bg-green-100",
        link: "/case-studies/legacy-marketplace"
    },
    {
        id: "4",
        review: "Excellent Work done by Tanu and his team, also helps going beyond the box and makes my experience great. Clear Communications and quick Solutions. We needed a complete overhaul of our e-commerce platform. They delivered a fast, mobile-responsive site that caused our sales to triple in the first quarter alone.",
        name: "Manti Makkakoli",
        role: "Founder",
        companyLogo: "Shopaholic",
        location: "Johannesburg, South Africa",
        flag: "za",
        rating: 5,
        image: "/assets/Testimonial/Manti.jpeg",
        projectType: "Custom E-commerce Website",
        resultBadgeText: "3x Q1 Sales Growth",
        resultBadgeColor: "text-orange-600 bg-orange-100",
        highlight: false,
        link: "/case-studies/multivendor-e-commerce"
    },
    {
        id: "5",
        review: "I am really happy with the performance. Tanu and Amarjeet from Reinsoft did exactly what was required and delivered excellent work. They were highly professional and easy to work with..",
        name: "Umesh Patel",
        role: "CEO",
        companyLogo: "Mohini Cloud (POS)",
        location: "Ahmedabad, India",
        flag: "in",
        rating: 5,
        image: "/assets/Testimonial/umesh.png",
        projectType: "Custom POS Software",
        resultBadgeText: "-60% Cash Discrepancies",
        resultBadgeColor: "text-purple-600 bg-purple-100",
        highlight: false,
        link: "/case-studies/pos-software"
    },
    {
        id: "6",
        review: "Am really happy with the performance Tanu & Amarjit (Team REINSOFT) did exactly what was required and did excellent work. Highly professional and easy to work with, Would definitely work with him again. Thanks a lot once again.",
        name: "Kishor Kumar",
        role: "Managing Director",
        companyLogo: "Vridez Private Limited",
        location: "Bengaluru, India",
        flag: "in",
        rating: 5,
        image: "/assets/Testimonial/kishor1.png",
        projectType: "Mobility & Transportation Platform",
        resultBadgeText: "End-to-End Delivery",
        resultBadgeColor: "text-blue-600 bg-blue-100",
        highlight: false,
        link: "/case-studies/vridez"
    },
    {
        id: "7",
        review: "I had a fantastic experience working with Amarjeet from Reinsoft. He was professional, highly skilled, and delivered exceptional results. The attention to detail and understanding of requirements made the entire process smooth.",
        name: "Sagar Jujare",
        role: "CEO",
        companyLogo: "Jujare Tech Advisors",
        location: "Ahmedabad, India",
        flag: "in",
        rating: 5,
        image: "/assets/Testimonial/sagar.png",
        projectType: "Sahasra AI Intelligent Chatbot",
        resultBadgeText: "Improved Engagement",
        resultBadgeColor: "text-green-600 bg-green-100",
        highlight: false,
        link: "/case-studies/sahasra-ai"
    },
    {
        id: "8",
        review: "Tanu from the Reinsoft team did an amazing job developing our website. They clearly understood our requirements and implemented everything perfectly. The final website turned out to be a big success with our clients.",
        name: "Sandeep Singh",
        role: "IT Manager",
        companyLogo: "IndraSur Consulting",
        location: "Cambridge, Canada",
        flag: "ca",
        rating: 5,
        image: "/assets/Testimonial/Sandip.png",
        projectType: "Interior/ Home Decor/ E-Commerce",
        resultBadgeText: "High Scalability",
        resultBadgeColor: "text-orange-600 bg-orange-100",
        highlight: false,
        link: "/case-studies/mural-story"
    },
    {
        id: "9",
        review: "The mobile app created by the Reinsoft team allows our gym members to book classes effortlessly. It’s fast, sleek, and delivered within our budget",
        name: "Saim",
        role: "CTO",
        companyLogo: "ELIGHT MALE WELLNESS",
        location: "London, UK",
        flag: "gb",
        rating: 5,
        image: "/assets/Testimonial/sam.png",
        projectType: "Cross-platform Mobile",
        resultBadgeText: "Flutter Fitness App",
        resultBadgeColor: "text-teal-600 bg-teal-100",
        highlight: false
    }
];

export const fallbackFaqs = [
    {
        question: 'What type of projects do you work on?',
        answer: 'We work on website development, web applications, mobile apps (Android & iOS) & Custom Software / CRM development for startups, growing businesses, and enterprises.',
    },
    {
        question: 'What is the minimum budget to start a project?',
        answer: "It depends on scope, features, and timelines. We always suggest the most cost-effective solution first.",
    },
    {
        question: 'Do you provide support after project delivery?',
        answer: 'Yes ✅ We provide post-launch support, bug fixes, and optional maintenance plans to ensure smooth performance.',
    },
    {
        question: 'Do you work with startups and small businesses?',
        answer: 'Yes. We work with startups, SMEs, and established businesses globally.',
    },
    {
        question: 'Can you work with international clients?',
        answer: 'Absolutely. We work with clients globally and handle communication via email, Zoom, WhatsApp, or Slack.',
    },
    {
        question: 'How do we get started?',
        answer: "Simply fill out the form or contact us on WhatsApp. We'll schedule a free consultation to understand your requirements and suggest the best approach.",
    },
];

export const fallbackSiteSettings = {
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
    defaultSeoDesc: 'Reinsoft IT Solutions provides premium custom software, AI-powered mobile apps, and scalable web development for startups and enterprises worldwide.',
    defaultSeoKeywords: 'custom software development, business software solutions, SaaS developer, AI app development, web development company, mobile app development company, CRM development, IT consulting, Reinsoft IT Solutions',
    canonicalBaseUrl: 'https://reinsoft.tech',
};

export const fallbackNavMain = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
        name: 'Our Services',
        href: '/services',
        dropdown: [
            { name: 'Software Development', href: '/services/software-development', icon: 'CodeIcon', description: 'Custom software & enterprise solutions' },
            { name: 'Web Development', href: '/services/web-development', icon: 'LayoutGridIcon', description: 'Custom web apps & sites' },
            { name: 'Mobile App Development', href: '/services/mobile-app-development', icon: 'SmartphoneIcon', description: 'Native & Cross-platform apps' },
            { name: 'White-Label Development', href: '/services/white-label-development', icon: 'HandshakeIcon', description: 'Your trusted development partner' },
            { name: 'IT Support & Maintenance', href: '/services/it-support-maintenance', icon: 'WrenchIcon', description: 'Ongoing support, updates & optimization' },
            { name: 'Business Automation & AI', href: '/services/business-automation', icon: 'BotIcon', description: 'WhatsApp, CRM & workflow automation' },
            { name: 'All Services', href: '/services', icon: 'LayoutGridIcon', description: 'Explore our full list' },
        ]
    },
    { name: 'Our Work', href: '/our-work' },
];

export const fallbackFooterQuickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
];
