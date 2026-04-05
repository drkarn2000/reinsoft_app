'use client';

import SectionTitle from "@/components/section-title";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Portfolio({ limit, asH1 = false }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        "All",
        "Web Development",
        "Mobile Applications"
    ];

    const allPortfolioItems = [
        {
            slug: "ecommerce-experience",
            title: "E-Commerce Experience",
            category: "Custom E-Commerce Jewellery Store",
            filterCategory: "Web Development",
            image: "/assets/Biswakarama.png",
            description: "A high-conversion online store built with Next.js, featuring seamless checkout and dynamic product filtering.",
            link: "/case-studies/ecommerce-experience"
        },
        {
            slug: "finance-dashboard",
            title: "Finance Managment System",
            category: "Custom Software",
            filterCategory: "Web Development",
            image: "/assets/Finance.jpg",
            description: "Modern analytics dashboard tailored for enterprise data, highlighting key metrics with intuitive visualizations.",
            link: "/case-studies/finance-dashboard"
        },
        {
            slug: "landlord-management-system",
            title: "Landlord Management System",
            category: "Property Management Platform",
            filterCategory: "Web Development",
            image: "/assets/supported_living.png",
            description: "A Laravel-based property management platform developed for a UK client, integrating Zoho CRM to streamline landlord, tenant, and property management workflows.",
            link: "/case-studies/landlord-management-system"
        },
        {
            slug: "pos-software",
            title: "POS Custom Software",
            category: "POS Custom Software",
            filterCategory: "Web Development",
            image: "/assets/mohini_pos.png",
            description: "A centralized Retail Point-of-Sale (POS) and Safe Drop Management System designed to streamline daily sales tracking, secure cash handling, supplier management, and administrative reporting.",
            link: "/case-studies/pos-software"
        },
        {
            slug: "multivendor-e-commerce",
            title: "Multivendor E-Commerce Website",
            category: "Laravel E-Commerce Website",
            filterCategory: "Web Development",
            image: "/assets/shopaholic.png",
            description: "Shopaholic is a modern e-commerce platform designed to provide a seamless online shopping experience for fashion and lifestyle products. The platform focuses on performance optimization, secure payments, and an intuitive user interface to maximize conversions and customer retention.",
            link: "/case-studies/multivendor-e-commerce"
        },

        {
            slug: "vridez",
            title: "Managed Mobility & Transportation Fleet Services Digital Platform",
            category: "Web App for Transportation",
            filterCategory: "Web Development",
            image: "/assets/VRIDEZ.png",
            description: "Vridez is a comprehensive mobility and managed transportation service provider offering a wide range of fleet rental and commuting solutions..",
            link: "/case-studies/vridez"
        },
        {
            slug: "thirty30-media",
            title: "Thirty30 Media (UK Agency Website)",
            category: "Custom Wordpress Website",
            filterCategory: "Web Development",
            image: "/assets/Thirty30.png",
            description: "Thirty30 Media is a UK-based creative and digital marketing agency focused on brand storytelling, content production, and performance marketing.",
            link: "/case-studies/thirty30-media"
        },
        {
            title: "Legacy Marketplace Sustainable Event Sourcing Platform",
            category: "Events/Marketplace/B2B Platform",
            filterCategory: "Web Development",
            tags: ["PHP", "CodeIgniter", "Bootstrap", "MySQL"],
            image: "/assets/b2b.png",
            description: "Legacy Marketplace revolutionised sustainable event sourcing by combining speed, automation and verified eco-conscious suppliers into one seamless digital platform.",
            slug: "legacy-marketplace",
            link: "/case-studies/legacy-marketplace"
        },
        {
            title: "The Mural Story™ Custom Wall Mural E-Commerce Platform",
            category: "Home Decor/E-Commerce",
            filterCategory: "UI/UX Design",
            tags: ["Shopify", "HTML5", "CSS3", "JavaScript"],
            image: "/assets/TMS.png",
            description: "The Mural Story™ A premium custom wall-mural e-commerce platform delivering personalized luxury design through a seamless dimension-based ordering experience.",
            slug: "mural-story",
            link: "/case-studies/mural-story"
        },
        {
            title: "Sahasra AI Intelligent Chatbot & Conversational AI Platform",
            category: "Enterprise Software",
            filterCategory: "UI/UX Design",
            image: "/assets/Sahasra.png",
            description: "Sahasra AI Powered Conversational Platform delivering intelligent chatbot solutions designed to enhance digital engagement and automate human-computer interactions.",
            link: "/case-studies/sahasra-ai"
        },
        {
            title: "J2 Wealth Financial Growth & Wealth Management Platform",
            category: "Wealth & Financial Services",
            filterCategory: "Web Development",
            tags: ["React.js", "Tailwind CSS", "WordPress", "SEO", "Vercel"],
            image: "/assets/J2wealth.png",
            description: "A growing wealth management and financial services firm dedicated to helping individuals, families, and businesses achieve long-term financial growth.",
            slug: "j2-wealth",
            link: "/case-studies/j2-wealth"
        },
        {
            slug: "tap-shake-walk",
            title: "🏃 TapShakeWalk Fitness with Real Rewards Mobile App (React Native)",
            category: "Fitness & Healthcare",
            filterCategory: "Mobile Applications",
            image: "/assets/Healthcare.jpeg",
            description: "TapShakeWalk A gamified move-to-earn fitness app built with React Native (Expo), enabling users to track activity, earn coins, level up, and redeem real-world rewards..",
            link: "/case-studies/tap-shake-walk"
        },
        {
            slug: "activelink-support-app",
            title: "Workforce & Shift Management Mobile App (Flutter)",
            category: "Community & Workforce Management",
            filterCategory: "Mobile Applications",
            image: "/assets/activelink.png",
            description: "A Flutter-powered workforce management mobile app designed to automate rostering, shift scheduling, and team coordination for NDIS and community care organizations.",
            link: "/case-studies/activelink-support-app"
        },
        {
            slug: "agriculture-task-app",
            title: "Task Assignment Agriculture Mobile App (Flutter)",
            category: "Agriculture & Task Management",
            filterCategory: "Mobile Applications",
            image: "/assets/Purelife.jpeg",
            description: "A smart agriculture solution built with Flutter for efficient task assignment, crop monitoring, and workforce coordination in farm management.",
            link: "/case-studies/agriculture-task-app"
        },
        {
            slug: "accuster-patient-management",
            title: "Accuster Technologies Patient Management App",
            category: "Healthcare & Patient Record App",
            filterCategory: "Mobile Applications",
            image: "/assets/Accuster.jpeg",
            description: "Accuster A robust Android application built with Kotlin and Node.js to streamline patient registration, screening workflows, and instant report generation for biomedical data management.",
            link: "/case-studies/accuster-patient-management"
        },
        {
            slug: "kamutalk",
            title: "Kamutalk Real-Time Social & Dating Platform ( React Native )",
            category: "Dating App With Real-Time Chat",
            filterCategory: "Mobile Applications",
            image: "/assets/Kamutalk1.png",
            description: "A React Native dating application powered by Agora real-time communication and Node.js backend, delivering live audio/video interactions and scalable user engagement features..",
            link: "/case-studies/kamutalk"
        },
        {
            slug: "macau-nutrition",
            title: "Macau Nutrition Mobile Commerce & Rewards App",
            category: "Nutrition - E-Commerce Mobile app",
            filterCategory: "Mobile Applications",
            image: "/assets/macauntrition.jpg",
            description: "Macau Nutrition A React Native-powered mobile commerce application with secure MPay integration, OTP authentication, and a loyalty rewards system designed to enhance customer engagement and drive repeat purchases.",
            link: "/case-studies/macau-nutrition"
        }
    ];

    const filteredItems = activeCategory === "All"
        ? allPortfolioItems
        : allPortfolioItems.filter(item => item.filterCategory === activeCategory);

    const itemsToDisplay = limit ? filteredItems.slice(0, limit) : filteredItems;

    return (
        <section id="portfolio" className="py-16 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 w-full h-full overflow-hidden -z-10 hidden dark:flex justify-center items-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-gradient-to-tr from-[#ff7a18]/10 to-[#3b82f6]/10 rounded-full blur-[100px] opacity-40" />
            </div>

            <SectionTitle
                title="Our Web & Mobile App Development Portfolio"
                description="Explore real-world examples of how we've helped businesses like yours transform their digital presence and operations."
                gradient={true}
                asH1={asH1}
            />

            <div className="max-w-7xl mx-auto px-6 mt-14">
                {/* Category Filter Buttons */}
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
                                            {item.description}
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
