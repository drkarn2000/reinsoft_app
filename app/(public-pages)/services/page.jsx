'use client';

import { motion } from "framer-motion";
import {
    GlobeIcon,
    SmartphoneIcon,
    HeadphonesIcon,
    CheckIcon,
    TabletSmartphoneIcon,
    PhoneIcon,
    MessageCircleIcon,
    ArrowRightIcon,
    CodeIcon,
    SparklesIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        id: 'websites',
        icon: GlobeIcon,
        title: 'Business Websites & Lead Systems',
        description: 'Modern, fast and mobile-friendly websites designed to convert visitors into enquiries and sales.',
        features: [
            'Mobile-responsive design',
            'SEO-optimized structure',
            'WhatsApp & call integration',
            'Lead capture forms',
            'Fast loading performance',
            'Easy content updates',
        ],
        color: '#3b82f6',
    },
    {
        id: 'software',
        icon: CodeIcon,
        title: 'Custom Software / CRM Development',
        description: 'Tailor-made systems to automate operations, manage customers and improve efficiency.',
        features: [
            'Customer management systems',
            'Workflow automation',
            'Custom dashboards & reports',
            'Third-party integrations',
            'Scalable architecture',
            'Training & documentation',
        ],
        color: '#a855f7',
    },
    {
        id: 'mobile',
        icon: TabletSmartphoneIcon,
        title: 'Mobile App Development (Android & iOS)',
        description: 'We build high-performance mobile apps using both Native and Cross-Platform technologies.',
        features: [
            'Native Android (Java & Kotlin)',
            'Native iOS development',
            'Cross-Platform with Flutter',
            'Cross-Platform with React Native',
            'App Store optimization',
            'Ongoing maintenance & updates',
        ],
        color: '#10b981',
    },
    {
        id: 'support',
        icon: HeadphonesIcon,
        title: 'Long-Term Support & Growth',
        description: 'Reliable ongoing support so your systems stay secure, updated and running smoothly.',
        features: [
            'Regular security updates',
            'Bug fixes & improvements',
            'Performance optimization',
            'Backup & recovery',
            'Priority support',
            'Long-term partnership',
        ],
        color: '#f59e0b',
    },
];

function ServiceBlock({ service, index }) {
    const isEven = index % 2 === 0;
    const num = String(index + 1).padStart(2, '0');

    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Connector line between cards */}
            {index < services.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-px h-12 z-0 overflow-hidden">
                    <motion.div
                        className="w-full h-full"
                        style={{ background: `linear-gradient(to bottom, ${service.color}60, transparent)` }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    />
                </div>
            )}

            <div className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-0 rounded-3xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl transition-all duration-500`}
                style={{
                    '--card-color': service.color,
                    boxShadow: `0 8px 40px ${service.color}40, 0 2px 8px rgba(0,0,0,0.08)`,
                }}
            >
                {/* Persistent strong glow + even stronger hover glow */}
                <div
                    className="absolute -inset-[2px] rounded-3xl transition-opacity duration-700 pointer-events-none -z-10 opacity-60 group-hover:opacity-100"
                    style={{ boxShadow: `0 0 40px ${service.color}60, 0 0 80px ${service.color}40, 0 0 120px ${service.color}20` }}
                />
                {/* Colored border glow on hover */}
                <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 2px ${service.color}50` }}
                />
                {/* Bottom glow accent bar */}
                <div
                    className="absolute bottom-0 left-[10%] right-[10%] h-[3px] rounded-full opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:left-[5%] group-hover:right-[5%]"
                    style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                />

                {/* Left/Right — Colored accent panel with number and icon */}
                <div
                    className="relative w-full lg:w-[280px] shrink-0 flex flex-col items-center justify-center py-10 lg:py-16 px-6 overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}08 100%)`,
                    }}
                >
                    {/* Shimmer sweep on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                    {/* Giant background number */}
                    <motion.span
                        className="absolute text-[10rem] font-black leading-none select-none pointer-events-none"
                        style={{ color: service.color, opacity: 0.04 }}
                        whileInView={{ opacity: 0.06, scale: [0.95, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {num}
                    </motion.span>

                    {/* Decorative rings with rotation on hover */}
                    <motion.div
                        className="absolute rounded-full opacity-10 group-hover:opacity-25 transition-opacity duration-700"
                        style={{
                            width: 200, height: 200,
                            border: `2px solid ${service.color}`,
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 8, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-700"
                        style={{
                            width: 280, height: 280,
                            border: `1px solid ${service.color}`,
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                    {/* Third decorative ring */}
                    <div
                        className="absolute rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700"
                        style={{
                            width: 340, height: 340,
                            border: `1px dashed ${service.color}`,
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />

                    {/* Icon */}
                    <div className="relative z-10 mb-4">
                        <div
                            className="absolute inset-0 blur-2xl rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-500"
                            style={{ background: service.color }}
                        />
                        <motion.div
                            className="relative size-16 rounded-2xl flex items-center justify-center border shadow-lg transition-all duration-500"
                            style={{
                                background: `${service.color}18`,
                                borderColor: `${service.color}30`,
                            }}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <service.icon
                                className="size-7 transition-colors duration-300"
                                style={{ color: service.color }}
                                strokeWidth={1.5}
                            />
                        </motion.div>
                    </div>

                    {/* Step number with pulsing dot */}
                    <span
                        className="relative z-10 text-sm font-black tracking-[0.2em] uppercase flex items-center gap-2"
                        style={{ color: service.color }}
                    >
                        <span
                            className="size-2 rounded-full animate-pulse"
                            style={{ background: service.color }}
                        />
                        Step {num}
                    </span>
                </div>

                {/* Divider line */}
                <div
                    className="hidden lg:block w-px self-stretch"
                    style={{ background: `linear-gradient(to bottom, transparent, ${service.color}40, transparent)` }}
                />
                <div
                    className="lg:hidden h-px w-full"
                    style={{ background: `linear-gradient(to right, transparent, ${service.color}40, transparent)` }}
                />

                {/* Right/Left — Content panel */}
                <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                    {/* Subtle gradient accent in the corner */}
                    <div
                        className="absolute -top-20 -right-20 size-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                        style={{ background: service.color }}
                    />

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-3 leading-tight">
                        {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
                        {service.description}
                    </p>

                    {/* What's Included */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-[0.15em] mb-4">
                            What's Included
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                                <motion.li
                                    key={idx}
                                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                >
                                    <div
                                        className="shrink-0 size-5 rounded-full flex items-center justify-center"
                                        style={{ background: `${service.color}15` }}
                                    >
                                        <CheckIcon
                                            className="size-3"
                                            style={{ color: service.color }}
                                            strokeWidth={3}
                                        />
                                    </div>
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA link */}
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="group/link inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-3"
                            style={{ color: service.color }}
                        >
                            <span>Get Started</span>
                            <ArrowRightIcon className="size-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ServicesPage() {
    return (
        <main className="px-4">
            {/* Background gradient blobs — dark mode only */}
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none hidden dark:block"
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </motion.div>

            {/* Background Image — dark mode only */}
            <div className="fixed inset-0 -z-30 pointer-events-none hidden dark:block">
                <Image
                    src="/assets/Services.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/80 dark:from-black/70 dark:via-black/40 dark:to-black/70 z-10" />
            </div>

            {/* ═══════════════ HERO ═══════════════ */}
            <section className="relative z-10 flex flex-col items-center pt-28 pb-16 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Pill badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 dark:bg-orange-500/10 text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-8 backdrop-blur-sm">
                        <SparklesIcon className="size-3.5" />
                        What We Build
                    </span>
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="text-gray-900 dark:text-white">Our </span>
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Core Services
                    </span>
                </motion.h1>

                <motion.p
                    className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Practical IT solutions that help your business grow. Custom development for startups and growing businesses.
                </motion.p>

                {/* Stat counters */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 max-w-3xl w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                >
                    {[
                        { emoji: '🏆', label: 'Trusted by 200+ Businesses' },
                        { emoji: '🌍', label: 'Clients Across Multiple Countries' },
                        { emoji: '✅', label: 'On-Time Project Delivery' },
                        { emoji: '🤝', label: 'Long-Term Client Partnerships' },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/[0.06] transition-colors duration-300"
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="text-2xl">{stat.emoji}</span>
                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ═══════════════ SERVICE BLOCKS ═══════════════ */}
            <section className="mt-16 max-w-5xl mx-auto relative z-10">
                <div className="flex flex-col gap-16">
                    {services.map((service, index) => (
                        <ServiceBlock key={service.id} service={service} index={index} />
                    ))}
                </div>
            </section>

            {/* ═══════════════ CTA SECTION ═══════════════ */}
            <section className="mt-20 mb-24 max-w-5xl mx-auto px-4 relative z-10">
                <motion.div
                    className="relative rounded-3xl overflow-hidden bg-white/50 dark:bg-black/40 border border-black/10 dark:border-white/10 p-8 md:p-14 lg:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background glow effects inside the CTA */}
                    <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-orange-500/20 via-pink-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full -z-10 pointer-events-none" />

                    <div className="lg:max-w-xl">
                        <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-xs font-bold text-orange-400 uppercase tracking-widest inline-flex items-center gap-2 mb-6 shadow-[0_0_15px_rgba(255,122,24,0.15)]">
                            <span className="relative flex size-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
                            </span>
                            Start Your Project
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
                            Ready to build something <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">extraordinary?</span>
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                            Get a free technical consultation and a detailed project roadmap. We'll help you figure out the best technology, timeline, and budget.
                        </p>
                    </div>

                    <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
                        <Link
                            href="/contact?type=quote"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full font-bold text-white shadow-[0_8px_30px_rgba(255,122,24,0.3)] hover:shadow-[0_8px_40px_rgba(255,122,24,0.5)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 flex items-center gap-2">
                                Get Your Free Quote
                                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a
                                href="tel:+918968369582"
                                className="flex-1 flex justify-center items-center gap-3 px-6 py-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-400/50 rounded-full font-bold text-blue-700 dark:text-white transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] whitespace-nowrap group"
                            >
                                <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-1.5 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                                    <PhoneIcon className="size-4" fill="currentColor" />
                                </div>
                                Call Expert
                            </a>
                            <a
                                href="https://wa.me/918968369582"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex justify-center items-center gap-3 px-6 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400/50 rounded-full font-bold text-emerald-700 dark:text-white transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] whitespace-nowrap group"
                            >
                                <div className="bg-gradient-to-br from-emerald-400 to-green-600 text-white p-1.5 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                                    <MessageCircleIcon className="size-4" fill="currentColor" />
                                </div>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
