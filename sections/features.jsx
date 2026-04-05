'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, Code2Icon, SmartphoneIcon, GlobeIcon, CheckCircle2Icon } from "lucide-react";

const servicesData = [
    {
        title: "Custom Website Development",
        description: "We design and develop high-performing, conversion-focused websites tailored to your business goals. From landing pages to full-scale platforms, every build is fast, responsive and optimized for growth.",
        highlights: ["Pixel-Perfect Responsive Design", "SEO-Optimized Architecture", "Lightning-Fast Performance"],
        cta: { label: "View Web Solutions", href: "/services/web-development" },
        image: "/assets/webbb.png",
        imageAlt: "Custom Website Development Solutions by Reinsoft IT Solutions",
        icon: <GlobeIcon className="size-6" />,
        accentColor: "#3b82f6",
        gradient: "from-blue-500 to-indigo-600",
        glowColor: "rgba(59, 130, 246, 0.15)",
    },
    {
        title: "Custom Software Solutions",
        description: "Streamline your operations with tailored software built specifically for your workflows. We create scalable, secure, and efficient systems that eliminate manual work and improve productivity.",
        highlights: ["Fully Tailored to Your Business", "Scalable Architecture", "Automation & Integrations"],
        cta: { label: "Explore Software Solutions", href: "/services/software-development" },
        image: "/assets/mohini_pos1.png",
        imageAlt: "Custom Software Engineering & MVP Solutions by Reinsoft IT Solutions",
        icon: <Code2Icon className="size-6" />,
        accentColor: "#8b5cf6",
        gradient: "from-purple-500 to-violet-600",
        glowColor: "rgba(139, 92, 246, 0.15)",
    },
    {
        title: "Mobile App Development",
        description: "Build powerful Android and iOS apps that deliver seamless user experiences. We focus on performance, usability, and scalability to help your product succeed in a competitive market.",
        highlights: ["Cross-Platform Excellence", "Native-Level Performance", "Intuitive UX Design"],
        cta: { label: "Discover Mobile Apps", href: "/services/mobile-app-development" },
        image: "/assets/mobile-app-illustration.png",
        imageAlt: "Premium iOS & Android App Development - Reinsoft IT Solutions",
        icon: <SmartphoneIcon className="size-6" />,
        accentColor: "#f97316",
        gradient: "from-orange-500 to-amber-500",
        glowColor: "rgba(249, 115, 22, 0.15)",
    },
];

export default function Features() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-[#050505]">
            {/* Subtle ambient background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-500/[0.04] to-transparent dark:from-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-orange-500/[0.04] to-transparent dark:from-orange-500/[0.06] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-20 md:mb-28"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                        </span>
                        <span className="text-gray-800 dark:text-gray-200 text-sm font-bold tracking-[0.2em] uppercase">
                            Our Core Services
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                        <span className="text-gray-900 dark:text-white">Solutions That </span>
                        <span className="relative inline-block">
                            <span className="absolute -inset-2 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-orange-500/15 blur-2xl rounded-full" />
                            <span className="relative bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                                Drive Growth
                            </span>
                        </span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
                        Three core services. No fluff. Just practical solutions that help your business grow.
                    </p>
                </motion.div>

                {/* Services — Alternating Rows */}
                <div className="flex flex-col gap-20 md:gap-32">
                    {servicesData.map((service, i) => {
                        const isReversed = i % 2 === 1;
                        return (
                            <motion.div
                                key={i}
                                className="relative"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                {/* Ambient glow behind the card */}
                                <div
                                    className="absolute inset-0 -inset-x-8 rounded-[3rem] pointer-events-none blur-[80px] opacity-40 dark:opacity-60"
                                    style={{ background: `radial-gradient(ellipse at ${isReversed ? '30%' : '70%'} 50%, ${service.glowColor}, transparent 70%)` }}
                                />

                                <div className={`relative flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 bg-[#fafbfd]/80 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/60 dark:border-white/[0.08] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_8px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden group hover:border-gray-300/80 dark:hover:border-white/15 transition-all duration-500`}>

                                    {/* Decorative top-left corner accent */}
                                    <div
                                        className={`absolute top-0 ${isReversed ? 'right-0 rounded-bl-[3rem]' : 'left-0 rounded-br-[3rem]'} w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-[0.07] dark:opacity-[0.12]`}
                                    />

                                    {/* Text Content */}
                                    <div className="flex-1 z-10">
                                        {/* Icon + Number Badge */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}
                                                style={{ boxShadow: `0 8px 24px ${service.accentColor}40` }}
                                            >
                                                {service.icon}
                                            </div>
                                            <span className="text-xs font-black tracking-[0.3em] uppercase text-gray-400 dark:text-gray-500">
                                                0{i + 1} / 03
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5 leading-tight tracking-tight">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-500 dark:text-gray-400 text-[15px] md:text-base leading-[1.8] mb-8 max-w-xl">
                                            {service.description}
                                        </p>

                                        {/* Highlights */}
                                        <ul className="flex flex-col gap-3 mb-10">
                                            {service.highlights.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                    <CheckCircle2Icon className="size-5 flex-shrink-0" style={{ color: service.accentColor }} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <Link
                                            href={service.cta.href}
                                            className="group/btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                            style={{
                                                background: `linear-gradient(135deg, ${service.accentColor}, ${service.accentColor}cc)`,
                                                boxShadow: `0 4px 20px ${service.accentColor}35`,
                                            }}
                                        >
                                            {service.cta.label}
                                            <ArrowRightIcon className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Image Area */}
                                    <div className="flex-1 w-full lg:max-w-[480px] z-10">
                                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                                            {/* Soft gradient overlay behind image */}
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-30"
                                                style={{ background: `radial-gradient(circle at center, ${service.accentColor}15, transparent)` }}
                                            />
                                            <Image
                                                src={service.image}
                                                alt={service.imageAlt}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, 480px"
                                                priority={i === 0}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Services Link */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link
                        href="/services"
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        View All Services
                        <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
