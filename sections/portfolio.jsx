'use client';

import SectionTitle from "@/components/section-title";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Portfolio({ items: propItems, limit, asH1 = false }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        "All",
        "Web Development",
        "Mobile Applications",
        "Software",
        "UI/UX"
    ];

    const defaultPortfolioItems = [
        {
            slug: "ecommerce-experience",
            title: "E-Commerce Experience",
            category: "Custom E-Commerce Jewellery Store",
            filterCategory: "Web Development",
            image: "/assets/Portfolio pics/Biswakarama.png",
            overview: "Our client, a rapidly growing retail brand, needed a scalable e-commerce platform that could handle high traffic during seasonal sales while providing a frictionless shopping experience. We delivered a custom solution that prioritized speed, mobile responsiveness, and conversion optimization.",
            description: "Our client, a rapidly growing retail brand, needed a scalable e-commerce platform that could handle high traffic during seasonal sales while providing a frictionless shopping experience. We delivered a custom solution that prioritized speed, mobile responsiveness, and conversion optimization.",
            link: "/case-studies/ecommerce-experience"
        },
        {
            slug: "finance-dashboard",
            title: "Finance Managment System",
            category: "Custom Software",
            filterCategory: "Software",
            image: "/assets/Portfolio pics/Finance.jpg",
            overview: "This project involved creating a high-performance financial analytics dashboard for an investment firm. The goal was to visualize complex market data in real-time, allowing analysts to make data-driven decisions quickly.",
            description: "This project involved creating a high-performance financial analytics dashboard for an investment firm. The goal was to visualize complex market data in real-time, allowing analysts to make data-driven decisions quickly.",
            link: "/case-studies/finance-dashboard"
        },
        {
            slug: "landlord-management-system",
            title: "Landlord Management System",
            category: "Property Management Platform",
            filterCategory: "Software",
            image: "/assets/Portfolio pics/supported_living.png",
            overview: "The Landlord Management System is a web-based platform developed for Supported Living Property, a UK-based organization managing supported accommodation and landlord services. The platform helps landlords and property managers efficiently manage property records, tenant information, documentation, and operational workflows.",
            description: "The Landlord Management System is a web-based platform developed for Supported Living Property, a UK-based organization managing supported accommodation and landlord services. The platform helps landlords and property managers efficiently manage property records, tenant information, documentation, and operational workflows.",
            link: "/case-studies/landlord-management-system"
        },
        {
            slug: "pos-software",
            title: "POS Custom Software",
            category: "POS Custom Software",
            filterCategory: "Software",
            image: "/assets/Portfolio pics/mohini_pos.png",
            overview: "A centralized Retail Point-of-Sale (POS) and Safe Drop Management System designed to streamline daily sales tracking, secure cash handling, supplier management, and administrative reporting.",
            description: "A centralized Retail Point-of-Sale (POS) and Safe Drop Management System designed to streamline daily sales tracking, secure cash handling, supplier management, and administrative reporting.",
            link: "/case-studies/pos-software"
        },
        {
            slug: "multivendor-e-commerce",
            title: "Multivendor E-Commerce Website",
            category: "Laravel E-Commerce Website",
            filterCategory: "Web Development",
            image: "/assets/shopaholic.png",
            overview: "Shopaholic is a next-generation multivendor marketplace that empowers vendors to sell their products while providing customers with a high-performance, secure shopping environment. The solution includes robust seller dashboards, real-time analytics, and a lightning-fast frontend.",
            description: "Shopaholic is a next-generation multivendor marketplace that empowers vendors to sell their products while providing customers with a high-performance, secure shopping environment. The solution includes robust seller dashboards, real-time analytics, and a lightning-fast frontend.",
            link: "/case-studies/multivendor-e-commerce"
        },
        {
            slug: "vridez",
            title: "Managed Mobility & Transportation Fleet Services Digital Platform",
            category: "Web App for Transportation",
            filterCategory: "Web Development",
            image: "/assets/Portfolio pics/VRIDEZ.png",
            overview: "Vridez is a comprehensive mobility and managed transportation service provider offering a wide range of fleet rental and commuting solutions.",
            description: "Vridez is a comprehensive mobility and managed transportation service provider offering a wide range of fleet rental and commuting solutions.",
            link: "/case-studies/vridez"
        },
        {
            slug: "thirty30-media",
            title: "Thirty30 Media (UK Agency Website)",
            category: "Custom Wordpress Website",
            filterCategory: "Web Development",
            image: "/assets/Portfolio pics/Thirty30.png",
            overview: "Thirty30 Media is a UK-based creative and digital marketing agency focused on brand storytelling, content production, and performance marketing.",
            description: "Thirty30 Media is a UK-based creative and digital marketing agency focused on brand storytelling, content production, and performance marketing.",
            link: "/case-studies/thirty30-media"
        },
        {
            title: "Legacy Marketplace Sustainable Event Sourcing Platform",
            category: "Events/Marketplace/B2B Platform",
            filterCategory: "Web Development",
            tags: ["PHP", "CodeIgniter", "Bootstrap", "MySQL"],
            image: "/assets/Portfolio pics/b2b.png",
            overview: "Legacy Marketplace revolutionised sustainable event sourcing by combining speed, automation and verified eco-conscious suppliers into one seamless digital platform.",
            description: "Legacy Marketplace revolutionised sustainable event sourcing by combining speed, automation and verified eco-conscious suppliers into one seamless digital platform.",
            slug: "legacy-marketplace",
            link: "/case-studies/legacy-marketplace"
        },
        {
            title: "The Mural Story™ Custom Wall Mural E-Commerce Platform",
            category: "Home Decor/E-Commerce",
            filterCategory: "UI/UX",
            tags: ["Shopify", "HTML5", "CSS3", "JavaScript"],
            image: "/assets/Portfolio pics/TMS.png",
            overview: "The Mural Story™ is a premium homegrown wall-mural brand with a global outlook, focused on delivering luxury-quality custom wallpapers with accessible pricing.",
            description: "The Mural Story™ is a premium homegrown wall-mural brand with a global outlook, focused on delivering luxury-quality custom wallpapers with accessible pricing.",
            slug: "mural-story",
            link: "/case-studies/mural-story"
        },
        {
            title: "Sahasra AI Intelligent Chatbot & Conversational AI Platform",
            category: "Enterprise Software",
            filterCategory: "UI/UX",
            image: "/assets/Portfolio pics/Sahasra.png",
            overview: "Sahasra AI is a next-generation AI-powered chatbot platform designed to enhance digital conversations and transform how users interact, learn, and engage with businesses.",
            description: "Sahasra AI is a next-generation AI-powered chatbot platform designed to enhance digital conversations and transform how users interact, learn, and engage with businesses.",
            slug: "sahasra-ai",
            link: "/case-studies/sahasra-ai"
        },
        {
            title: "J2 Wealth Financial Growth & Wealth Management Platform",
            category: "Wealth & Financial Services",
            filterCategory: "Web Development",
            tags: ["React.js", "Tailwind CSS", "WordPress", "SEO", "Vercel"],
            image: "/assets/J2wealth.png",
            overview: "J2 Wealth needed a professional digital platform to establish trust and authority in the wealth management sector. We built a high-performance, SEO-optimized website that communicates their expertise in financial growth and simplifies lead generation for high-net-worth clients.",
            description: "J2 Wealth needed a professional digital platform to establish trust and authority in the wealth management sector. We built a high-performance, SEO-optimized website that communicates their expertise in financial growth and simplifies lead generation for high-net-worth clients.",
            slug: "j2-wealth",
            link: "/case-studies/j2-wealth"
        },
        {
            slug: "tap-shake-walk",
            title: "🏃 TapShakeWalk Fitness with Real Rewards Mobile App (React Native)",
            category: "Fitness & Healthcare",
            filterCategory: "Mobile Applications",
            image: "/assets/Portfolio pics/Healthcare.jpeg",
            overview: "TapShakeWalk is a modern move-to-earn fitness application built using React Native (Expo), allowing users to earn coins through walking, shaking, and completing fitness challenges.",
            description: "TapShakeWalk is a modern move-to-earn fitness application built using React Native (Expo), allowing users to earn coins through walking, shaking, and completing fitness challenges.",
            link: "/case-studies/tap-shake-walk"
        },
        {
            slug: "activelink-support-app",
            title: "Workforce & Shift Management Mobile App (Flutter)",
            category: "Community & Workforce Management",
            filterCategory: "Mobile Applications",
            image: "/assets/Portfolio pics/activelink.png",
            overview: "Activlink Support App is a robust workforce management solution designed specifically for the NDIS and community care industry to automate rostering, shift scheduling, and team coordination.",
            description: "Activlink Support App is a robust workforce management solution designed specifically for the NDIS and community care industry to automate rostering, shift scheduling, and team coordination.",
            link: "/case-studies/activelink-support-app"
        },
        {
            slug: "agriculture-task-app",
            title: "Task Assignment Agriculture Mobile App (Flutter)",
            category: "Agriculture & Task Management",
            filterCategory: "Mobile Applications",
            image: "/assets/Portfolio pics/Purelife.jpeg",
            overview: "Purelife is a Flutter-based mobile application developed to support farmers with real-time data, crop guidance, efficient task assignment, and workforce coordination.",
            description: "Purelife is a Flutter-based mobile application developed to support farmers with real-time data, crop guidance, efficient task assignment, and workforce coordination.",
            link: "/case-studies/agriculture-task-app"
        },
        {
            slug: "accuster-patient-management",
            title: "Accuster Technologies Patient Management App",
            category: "Healthcare & Patient Record App",
            filterCategory: "Mobile Applications",
            image: "/assets/Portfolio pics/Accuster.jpeg",
            overview: "Accuster Technologies' mobile application is a comprehensive solution designed to streamline patient registration, test screening, instant report generation, and medical data management.",
            description: "Accuster Technologies' mobile application is a comprehensive solution designed to streamline patient registration, test screening, instant report generation, and medical data management.",
            link: "/case-studies/accuster-patient-management"
        },
        {
            slug: "kamutalk",
            title: "Kamutalk Real-Time Social & Dating Platform ( React Native )",
            category: "Dating App With Real-Time Chat",
            filterCategory: "Mobile Applications",
            image: "/assets/Kamutalk1.png",
            overview: "Kamutalk is a modern dating and social networking application powered by Agora real-time communication and Node.js backend, delivering live audio and video interactions.",
            description: "Kamutalk is a modern dating and social networking application powered by Agora real-time communication and Node.js backend, delivering live audio and video interactions.",
            link: "/case-studies/kamutalk"
        },
        {
            slug: "macau-nutrition",
            title: "Macau Nutrition Mobile Commerce & Rewards App",
            category: "Nutrition - E-Commerce Mobile app",
            filterCategory: "Mobile Applications",
            image: "/assets/Portfolio pics/macauntrition.jpg",
            overview: "Macau Nutrition is a cross-platform mobile commerce application with secure MPay integration, OTP authentication, and a loyalty rewards system for nutrition and wellness products.",
            description: "Macau Nutrition is a cross-platform mobile commerce application with secure MPay integration, OTP authentication, and a loyalty rewards system for nutrition and wellness products.",
            link: "/case-studies/macau-nutrition"
        }
    ];

    const allPortfolioItems = (propItems && propItems.length > 0)
        ? propItems.map(item => {
            const overviewText = (typeof item.overview === 'string' && item.overview.trim().length > 0)
                ? item.overview.trim()
                : (typeof item.description === 'string' && item.description.trim().length > 0
                    ? item.description.trim()
                    : "");

            const rawCat = (item.category || '').trim();
            const rawFilter = (item.filterCategory || '').trim();
            const rawSlug = (item.slug || '').trim();

            let filterCategory = "Web Development";
            if (rawFilter === "UI/UX" || rawFilter === "UI/UX Design" || rawCat === "UI/UX" || rawCat === "UI/UX Design" || rawSlug === "mural-story" || rawSlug === "sahasra-ai") {
                filterCategory = "UI/UX";
            } else if (rawFilter === "Software" || rawFilter === "Custom Software" || rawCat === "Software" || rawCat === "Custom Software" || rawSlug === "pos-software" || rawSlug === "finance-dashboard" || rawSlug === "landlord-management-system") {
                filterCategory = "Software";
            } else if (rawFilter === "Mobile Applications" || rawCat === "Mobile Applications" || rawCat.toLowerCase().includes("mobile")) {
                filterCategory = "Mobile Applications";
            }

            return {
                ...item,
                description: overviewText,
                overview: overviewText,
                image: item.heroImage || item.image || "/assets/Portfolio1.jpg",
                filterCategory,
                link: item.link || `/case-studies/${item.slug}`,
            };
          })
        : defaultPortfolioItems;

    const filteredItems = activeCategory === "All"
        ? allPortfolioItems
        : allPortfolioItems.filter(item => item.filterCategory === activeCategory);

    const itemsToDisplay = limit ? filteredItems.slice(0, limit) : filteredItems;

    return (
        <section id="portfolio" className="py-16 relative overflow-hidden">
            {/* Background elements */}
            <div className="fixed inset-0 -z-30 pointer-events-none">
                <Image
                    src="/assets/Services.jpg"
                    alt="Portfolio Background"
                    title="Portfolio Background"
                    fill
                    className="object-cover opacity-30 dark:opacity-50 brightness-75 contrast-105"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,242,234,0.28),rgba(246,242,234,0.1),rgba(246,242,234,0.24))] dark:bg-[linear-gradient(180deg,rgba(5,5,5,0.2),rgba(5,5,5,0.1),rgba(5,5,5,0.22))]" />
            </div>

            <SectionTitle
                title="Our Web & Mobile App Development Portfolio"
                description="Explore real-world examples of how we've helped businesses like yours transform their digital presence and operations."
                gradient={true}
                asH1={asH1}
            />

            <div className="max-w-7xl mx-auto px-6 mt-14">
                {!limit && (
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === category
                                    ? "bg-gradient-to-r from-[#ff7a18] to-[#ea4c89] text-white border-transparent shadow-[0_0_20px_rgba(255,122,24,0.3)]"
                                    : "bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:text-black dark:hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    <AnimatePresence mode="popLayout">
                        {itemsToDisplay.map((item, index) => (
                            <motion.div
                                layout
                                key={item.slug || index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative rounded-3xl overflow-hidden bg-white/50 dark:bg-slate-900/50 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <Image
                                        src={item.image}
                                        alt={`${item.title} - ${item.category} Project by Reinsoft`}
                                        title={`Reinsoft Portfolio: ${item.title}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                    />
                                </div>

                                {/* Content Details */}
                                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between relative z-20 bg-gradient-to-b from-white/80 to-white dark:from-slate-900/80 dark:to-slate-900 backdrop-blur-sm -mt-8 mx-4 mb-4 rounded-2xl border border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors shadow-lg">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-3 group-hover:text-[#ff7a18] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                            {item.description || item.overview || "Detailed project overview coming soon."}
                                        </p>
                                    </div>

                                    <div className="mt-auto flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <Link href={item.link} className="inline-flex items-center gap-2 text-sm font-semibold text-black dark:text-white hover:text-[#ff7a18] dark:hover:text-[#ff7a18] transition-colors group/link">
                                            <span className="border-b border-transparent group-hover/link:border-[#ff7a18] transition-colors pb-0.5">View Case Study</span>
                                            <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </Link>

                                        {/* Relocated Category Badge */}
                                        <span className="px-3 py-1.5 text-[11px] sm:text-sm leading-tight font-medium text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-black/10 dark:border-white/10 group-hover:border-[#ff7a18]/30 group-hover:text-black dark:group-hover:text-white transition-colors inline-block max-w-full text-center sm:text-left">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {limit && (
                    <div className="mt-16 flex justify-center">
                        <Link
                            href="/our-work"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[#ff7a18] to-[#ea4c89] hover:shadow-[0_0_25px_rgba(255,122,24,0.5)] transition-all duration-300 transform"
                        >
                            Load More
                        </Link>
                    </div>
                )}

                {!limit && (
                    <div className="mt-16 flex justify-center">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[#ff7a18] to-[#ea4c89] hover:shadow-[0_0_25px_rgba(255,122,24,0.5)] transition-all duration-300 transform"
                        >
                            Start Your Project With Us
                        </motion.a>
                    </div>
                )}
            </div>
        </section>
    );
}
