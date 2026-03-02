'use client';

import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Portfolio({ limit }) {
    const allPortfolioItems = [
        {
            slug: "ecommerce-experience",
            title: "E-Commerce Experience",
            category: "Custom E-Commerce Jewellery Store",
            image: "/assets/Biswakarama.png",
            description: "A high-conversion online store built with Next.js, featuring seamless checkout and dynamic product filtering.",
            link: "/case-studies/ecommerce-experience"
        },
        {
            slug: "finance-dashboard",
            title: "Finance Managment System",
            category: "Custom Software",
            image: "/assets/Finance.jpg",
            description: "Modern analytics dashboard tailored for enterprise data, highlighting key metrics with intuitive visualizations.",
            link: "/case-studies/finance-dashboard"
        },
        {
            slug: "multivendor-e-commerce",
            title: "Multivendor E-Commerce Website",
            category: "Laravel E-Commerce Website",
            image: "/assets/shopaholic.png",
            description: "Shopaholic is a modern e-commerce platform designed to provide a seamless online shopping experience for fashion and lifestyle products. The platform focuses on performance optimization, secure payments, and an intuitive user interface to maximize conversions and customer retention.",
            link: "/case-studies/multivendor-e-commerce"
        },
        {
            slug: "pos-software",
            title: "POS Custom Software",
            category: "POS Custom Software",
            image: "/assets/mohini_pos.png",
            description: "A centralized Retail Point-of-Sale (POS) and Safe Drop Management System designed to streamline daily sales tracking, secure cash handling, supplier management, and administrative reporting.",
            link: "/case-studies/pos-software"
        },
        {
            slug: "vridez",
            title: "Managed Mobility & Transportation Fleet Services Digital Platform",
            category: "Web App for Transportation",
            image: "/assets/VRIDEZ.png",
            description: "Vridez is a comprehensive mobility and managed transportation service provider offering a wide range of fleet rental and commuting solutions..",
            link: "/case-studies/vridez"
        },
        {
            slug: "thirty30-media",
            title: "Thirty30 Media (UK Agency Website)",
            category: "Custom Wordpress Website",
            image: "/assets/Thirty30.png",
            description: "Thirty30 Media is a UK-based creative and digital marketing agency focused on brand storytelling, content production, and performance marketing.",
            link: "/case-studies/thirty30-media"
        },
        {
            title: "Legacy Marketplace Sustainable Event Sourcing Platform",
            category: "Sustainable Events / Marketplace / B2B Platform",
            tags: ["PHP", "CodeIgniter", "Bootstrap", "MySQL"],
            image: "/assets/b2b.png",
            description: "Legacy Marketplace revolutionised sustainable event sourcing by combining speed, automation and verified eco-conscious suppliers into one seamless digital platform.",
            slug: "legacy-marketplace",
            link: "/case-studies/legacy-marketplace"
        },
        {
            title: "The Mural Story™ Custom Wall Mural E-Commerce Platform",
            category: "Interior Design / Home Decor / E-Commerce",
            tags: ["Shopify", "HTML5", "CSS3", "JavaScript"],
            image: "/assets/TMS.png",
            description: "The Mural Story™ A premium custom wall-mural e-commerce platform delivering personalized luxury design through a seamless dimension-based ordering experience.",
            slug: "mural-story",
            link: "/case-studies/mural-story"
        },
        {
            title: "Sahasra AI Intelligent Chatbot & Conversational AI Platform",
            category: "Enterprise Software",
            image: "/assets/Sahasra.png",
            description: "Sahasra AI Powered Conversational Platform delivering intelligent chatbot solutions designed to enhance digital engagement and automate human-computer interactions.",
            link: "/case-studies/sahasra-ai"
        },
        {
            title: "J2 Wealth Financial Growth & Wealth Management Platform",
            category: "Wealth Management & Financial Services",
            tags: ["React.js", "Tailwind CSS", "WordPress", "SEO", "Vercel"],
            image: "/assets/J2wealth.png",
            description: "A growing wealth management and financial services firm dedicated to helping individuals, families, and businesses achieve long-term financial growth.",
            slug: "j2-wealth",
            link: "/case-studies/j2-wealth"
        }
    ];

    const itemsToDisplay = limit ? allPortfolioItems.slice(0, limit) : allPortfolioItems;

    return (
        <section id="portfolio" className="py-16 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 w-full h-full overflow-hidden -z-10 flex justify-center items-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-gradient-to-tr from-[#ff7a18]/10 to-[#3b82f6]/10 rounded-full blur-[100px] opacity-40" />
            </div>

            <SectionTitle
                title="Our Recent Work"
                description="Explore some of our proudest projects. We blend beautiful design with powerful engineering to deliver exceptional digital experiences."
                gradient={true}
            />

            <div className="max-w-7xl mx-auto px-6 mt-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {itemsToDisplay.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden bg-slate-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                />
                            </div>

                            {/* Content Details */}
                            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between relative z-20 bg-gradient-to-b from-slate-900/80 to-slate-900 backdrop-blur-sm -mt-8 mx-4 mb-4 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors shadow-lg">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-[#ff7a18] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="mt-auto flex items-center justify-between gap-4">
                                    <Link href={item.link} className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#ff7a18] transition-colors group/link">
                                        <span className="border-b border-transparent group-hover/link:border-[#ff7a18] transition-colors pb-0.5">View Project details</span>
                                        <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </Link>

                                    {/* Relocated Category Badge */}
                                    <span className="px-3 py-1 text-[10px] font-bold tracking-wide text-white bg-white/5 backdrop-blur-md rounded-full border border-white/10 uppercase shrink-0 group-hover:border-[#ff7a18]/30 transition-colors">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

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
            </div>
        </section>
    );
}
