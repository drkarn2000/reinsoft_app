'use client';

import { motion } from "framer-motion";
import {
    CheckCircleIcon,
    ArrowRightIcon,
    MapPinIcon,
    ClockIcon,
    PhoneIcon,
    StarIcon,
    UsersIcon,
    TrendingUpIcon,
    ShieldCheckIcon,
    GlobeIcon,
    CodeIcon,
    SmartphoneIcon,
    ZapIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/lead-form";
import TrustStrip from "@/sections/trust-strip";
import Testimonials from "@/sections/testimonials";
import FaqSection from "@/sections/faq-section";
import WorkflowSteps from "@/sections/workflow-steps";
import BrandSection from "@/components/brand-section";

const locationConfig = {
    usa: {
        label: "USA",
        flag: "🇺🇸",
        fullName: "United States",
        timezone: "EST / CST / PST",
        currency: "USD",
        targetCity: "New York, San Francisco & Austin",
        gradient: "from-blue-600 to-cyan-500",
        glow: "rgba(59,130,246,0.4)",
        accent: "text-blue-400",
        accentBg: "bg-blue-600",
        accentBorder: "border-blue-500/30",
        badgeColor: "text-cyan-400",
        heroTitle: "Top Software Development Company in the USA",
        heroSubtitle: "Custom Software Engineering for US Startups & Enterprises",
        heroDesc:
            "Reinsoft delivers world-class software development services to clients across the United States — from early-stage startups in San Francisco to enterprise teams in New York. Our senior engineers build software that scales.",
        metricTitle: "Trusted by 50+ US Clients",
        stats: [
            { label: "US Projects Delivered", value: "70+" },
            { label: "Avg. Response Time", value: "< 4 hrs" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "US Time Zone", value: "EST–PST" },
        ],
        services: [
            {
                icon: <CodeIcon className="size-6" />,
                title: "Custom Software Development",
                desc: "Tailored web & enterprise software built to solve complex US market challenges — from fintech to healthtech.",
                link: "/services/web-development",
            },
            {
                icon: <SmartphoneIcon className="size-6" />,
                title: "Mobile App Development",
                desc: "Native iOS & Android and cross-platform Flutter apps for the US consumer and enterprise market.",
                link: "/services/mobile-app-development",
            },
            {
                icon: <GlobeIcon className="size-6" />,
                title: "SaaS & Cloud Solutions",
                desc: "Scalable SaaS platforms built on AWS — designed to handle US-scale traffic and compliance needs.",
                link: "/contact",
            },
            {
                icon: <ZapIcon className="size-6" />,
                title: "Dedicated Development Teams",
                desc: "Hire dedicated full-stack, Flutter, or React Native engineers who work exclusively with your US-based product team.",
                link: "/hire-full-stack-developers-usa",
            },
        ],
        whyPoints: [
            "US time-zone aligned standups (EST/PST)",
            "Fluent English communication — zero language barrier",
            "Experience with US compliance standards (HIPAA, SOC 2)",
            "Proven record with US VCs and funded startups",
            "IP protection with US-enforceable NDAs",
        ],
        hireCTAs: [
            { label: "Hire Flutter Developers (USA)", href: "/hire-flutter-developers-usa" },
            { label: "Hire React Native Developers (USA)", href: "/hire-react-native-developers-usa" },
            { label: "Hire Full Stack Developers (USA)", href: "/hire-full-stack-developers-usa" },
        ],
        bottomCTATitle: "Ready to build your next US product?",
        bottomCTADesc: "Join 50+ US companies who trust Reinsoft to engineer their vision.",
        brandTitle: "Trusted by 50+ innovative global companies",
        brandBadge: "🌍 Worldwide Partner",
        brandStyle: "classic",
    },
    uk: {
        label: "UK",
        flag: "🇬🇧",
        fullName: "United Kingdom",
        timezone: "GMT / BST",
        currency: "GBP",
        targetCity: "London, Manchester & Birmingham",
        gradient: "from-indigo-600 to-purple-500",
        glow: "rgba(99,102,241,0.4)",
        accent: "text-indigo-400",
        accentBg: "bg-indigo-600",
        accentBorder: "border-indigo-500/30",
        badgeColor: "text-purple-400",
        heroTitle: "Mobile App Development Company in the UK",
        heroSubtitle: "Bespoke Mobile & Software Solutions for UK Businesses",
        heroDesc:
            "Reinsoft is a trusted mobile app development partner for UK businesses — from London fintech startups to Manchester e-commerce brands. We build iOS, Android, and cross-platform apps that delight UK users.",
        metricTitle: "Trusted by 30+ UK Clients",
        stats: [
            { label: "UK Projects Delivered", value: "40+" },
            { label: "Avg. Response Time", value: "< 4 hrs" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "UK Time Zone", value: "GMT/BST" },
        ],
        services: [
            {
                icon: <SmartphoneIcon className="size-6" />,
                title: "iOS & Android App Development",
                desc: "Native Swift and Kotlin apps tailored for UK consumer habits and GDPR compliance.",
                link: "/services/mobile-app-development",
            },
            {
                icon: <CodeIcon className="size-6" />,
                title: "Flutter & React Native Apps",
                desc: "Cost-effective cross-platform apps for UK startups wanting to launch fast on both platforms.",
                link: "/hire-flutter-developers-uk",
            },
            {
                icon: <GlobeIcon className="size-6" />,
                title: "Web Application Development",
                desc: "Bespoke web platforms for UK businesses — from CRMs to customer portals to SaaS products.",
                link: "/services/web-development",
            },
            {
                icon: <ZapIcon className="size-6" />,
                title: "Dedicated Mobile Dev Teams",
                desc: "Scale your UK product team with dedicated Flutter and React Native engineers — ready in 48 hrs.",
                link: "/hire-react-native-developers-uk",
            },
        ],
        whyPoints: [
            "UK time-zone aligned standups (GMT/BST)",
            "Fluent English, professional UK business etiquette",
            "GDPR-compliant development practices",
            "Experience with UK fintech, healthtech & e-commerce",
            "UK-enforceable NDAs and IP agreements",
        ],
        hireCTAs: [
            { label: "Hire Flutter Developers (UK)", href: "/hire-flutter-developers-uk" },
            { label: "Hire React Native Developers (UK)", href: "/hire-react-native-developers-uk" },
            { label: "Hire Full Stack Developers (UK)", href: "/hire-full-stack-developers-uk" },
        ],
        bottomCTATitle: "Build your next UK mobile product with us",
        bottomCTADesc: "Join 30+ UK companies who trust Reinsoft for mobile-first development.",
        brandTitle: "Powering leading brands globally",
        brandBadge: "🌍 Global Digital Experts",
        brandStyle: "minimal",
    },
    australia: {
        label: "Australia",
        flag: "🇦🇺",
        fullName: "Australia",
        timezone: "AEST / AEDT",
        currency: "AUD",
        targetCity: "Sydney, Melbourne & Brisbane",
        gradient: "from-emerald-500 to-teal-400",
        glow: "rgba(16,185,129,0.4)",
        accent: "text-emerald-400",
        accentBg: "bg-emerald-600",
        accentBorder: "border-emerald-500/30",
        badgeColor: "text-teal-400",
        heroTitle: "Web Development Company in Australia",
        heroSubtitle: "Premium Web Solutions for Australian Businesses & Startups",
        heroDesc:
            "Reinsoft provides end-to-end web development services to Australian companies — from Sydney-based scale-ups to Melbourne SMEs. We build fast, SEO-optimised, and conversion-focused web applications.",
        metricTitle: "Trusted by 20+ Australian Clients",
        stats: [
            { label: "AU Projects Delivered", value: "25+" },
            { label: "Avg. Response Time", value: "< 4 hrs" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "AU Time Zone", value: "AEST" },
        ],
        services: [
            {
                icon: <GlobeIcon className="size-6" />,
                title: "Custom Web Development",
                desc: "Fast, SEO-ready web applications built to serve Australian consumers. Next.js, React, and beyond.",
                link: "/services/web-development",
            },
            {
                icon: <SmartphoneIcon className="size-6" />,
                title: "Mobile App Development",
                desc: "Flutter and React Native apps for the Australian Apple App Store and Google Play market.",
                link: "/services/mobile-app-development",
            },
            {
                icon: <CodeIcon className="size-6" />,
                title: "E-Commerce Solutions",
                desc: "Custom e-commerce platforms with AUD payment gateways, local shipping integrations, and compliance.",
                link: "/contact",
            },
            {
                icon: <ZapIcon className="size-6" />,
                title: "Dedicated Web Dev Teams",
                desc: "Hire dedicated full-stack engineers working AEST hours alongside your Australian product team.",
                link: "/hire-full-stack-developers-australia",
            },
        ],
        whyPoints: [
            "AEST/AEDT-aligned standups for seamless collaboration",
            "Fluent English, professional AU business culture",
            "Experience with Australian payment gateways (PayWay, Afterpay)",
            "Privacy Act compliant development practices",
            "AU-enforceable NDAs and IP protection",
        ],
        hireCTAs: [
            { label: "Hire Flutter Developers (AU)", href: "/hire-flutter-developers-australia" },
            { label: "Hire React Native Developers (AU)", href: "/hire-react-native-developers-australia" },
            { label: "Hire Full Stack Developers (AU)", href: "/hire-full-stack-developers-australia" },
        ],
        bottomCTATitle: "Start your Australian web project today",
        bottomCTADesc: "Join 20+ Australian businesses building with Reinsoft.",
        brandTitle: "Loved by global enterprises",
        brandBadge: "🌍 Worldwide Tech Partner",
        brandStyle: "outline",
    },
};

export default function LocationLandingContent({ location }) {
    const cfg = locationConfig[location];
    if (!cfg) return null;

    return (
        <main className="min-h-screen selection:bg-purple-500/30">
            {/* Ambient background */}
            <motion.div
                className="fixed inset-0 overflow-hidden -z-20 pointer-events-none hidden dark:block"
                initial={{ opacity: 0.1 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[120px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[120px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[120px]" />
            </motion.div>
            <div className="fixed inset-0 -z-30 pointer-events-none hidden dark:block">
                <Image
                    src="/assets/Services.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-90 grayscale brightness-50"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
            </div>

            {/* ── Hero ── */}
            <section className="relative pt-32 pb-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                    >
                        <span className={`px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-semibold ${cfg.badgeColor} mb-6 inline-block`}>
                            {cfg.flag}&nbsp;&nbsp;{cfg.metricTitle}
                        </span>

                        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
                            {cfg.heroTitle}
                        </h1>
                        <h2 className={`text-xl md:text-2xl font-semibold ${cfg.accent} mb-6`}>
                            {cfg.heroSubtitle}
                        </h2>

                        <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
                            {cfg.heroDesc}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 flex items-center justify-center gap-2">
                            <MapPinIcon className={`size-4 shrink-0 ${cfg.accent}`} />
                            Serving clients in {cfg.targetCity}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="#contact-form"
                                className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${cfg.gradient} text-white font-bold text-lg hover:scale-105 transition-all duration-300`}
                            >
                                Get a Free Consultation
                                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/15 font-semibold text-lg hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <TrustStrip />

            {/* ── Stats ── */}
            <section className="py-14 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cfg.stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border ${cfg.accentBorder} backdrop-blur-sm text-center`}
                        >
                            <span className={`text-3xl font-black ${cfg.accent} mb-1`}>{s.value}</span>
                            <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">{s.label}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Services ── */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Our Services in <span className={cfg.accent}>{cfg.fullName}</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Tailored digital solutions built to meet the specific demands of the {cfg.fullName} market.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cfg.services.map((svc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group p-6 rounded-2xl bg-white/5 border ${cfg.accentBorder} hover:bg-white/10 transition-all duration-300 flex flex-col gap-4`}
                            >
                                <div className={`size-11 rounded-xl bg-white/10 flex items-center justify-center ${cfg.accent} group-hover:scale-110 transition-transform`}>
                                    {svc.icon}
                                </div>
                                <h3 className={`text-lg font-bold ${cfg.accent}`}>{svc.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">{svc.desc}</p>
                                <Link
                                    href={svc.link}
                                    className={`inline-flex items-center gap-2 text-sm font-semibold ${cfg.accent} hover:underline`}
                                >
                                    Learn more <ArrowRightIcon className="size-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Lead Form ── */}
            <section id="contact-form" className="py-20 px-4 bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-slate-900/50 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Let's build something great <span className={cfg.accent}>in {cfg.fullName}</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                            Tell us about your project and we'll respond within 4 business hours. Our {cfg.fullName} clients love our fast turnaround and transparent process.
                        </p>

                        <ul className="flex flex-col gap-4 mb-8">
                            {cfg.whyPoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircleIcon className={`size-5 shrink-0 mt-0.5 ${cfg.accent}`} />
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Timezone badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${cfg.accentBorder} bg-white/5 text-sm font-medium ${cfg.accent}`}>
                            <ClockIcon className="size-4" />
                            Supporting {cfg.timezone} — {cfg.fullName}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className={`absolute -inset-4 bg-gradient-to-r ${cfg.gradient} opacity-5 blur-2xl rounded-3xl pointer-events-none`} />
                        <LeadForm
                            title={`Contact Us — ${cfg.fullName}`}
                            description={`We work with ${cfg.fullName} clients. Tell us about your project.`}
                        />
                    </div>
                </div>
            </section>

            {/* ── Hire Developer Quick Links ── */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Looking to <span className={cfg.accent}>Hire a Developer</span> in {cfg.fullName}?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
                        Check out our dedicated hiring pages tailored for {cfg.fullName}-based teams.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {cfg.hireCTAs.map((cta, i) => (
                            <Link
                                key={i}
                                href={cta.href}
                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border ${cfg.accentBorder} ${cfg.accent} bg-white/5 hover:bg-white/10 transition-all`}
                            >
                                {cta.label} <ArrowRightIcon className="size-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <WorkflowSteps />

            {/* Dynamic Brands Slider based on location */}
            <div className="pt-10">
                <BrandSection 
                    variant={location === 'australia' ? 'grid' : ["grid", "slider", "marquee", "cards"][location.length % 4]}
                    title={cfg.brandTitle} 
                    badge={cfg.brandBadge} 
                />
            </div>

            <Testimonials />

            {/* ── Bottom CTA ── */}
            <section className="relative mt-4 mb-12 px-4">
                <motion.div
                    className={`relative max-w-4xl mx-auto overflow-hidden rounded-2xl bg-gradient-to-r ${cfg.gradient} p-[1px]`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-black/80 backdrop-blur-xl rounded-2xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                                {cfg.bottomCTATitle}
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base">{cfg.bottomCTADesc}</p>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <a
                                href="#contact-form"
                                className={`group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${cfg.gradient} text-white text-sm font-bold hover:scale-105 transition-all`}
                            >
                                Get Started
                                <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                href="https://wa.me/918968369582"
                                target="_blank"
                                className="px-6 py-3 rounded-full bg-white/10 border border-white/15 text-sm font-semibold hover:bg-white/20 transition-all"
                            >
                                WhatsApp
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            <FaqSection />
        </main>
    );
}
