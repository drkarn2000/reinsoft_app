'use client';

import { motion } from "framer-motion";
import {
    CheckCircleIcon,
    ArrowRightIcon,
    ClockIcon,
    ShieldCheckIcon,
    StarIcon,
    UsersIcon,
    CodeIcon,
    ZapIcon,
    MessageSquareIcon,
    CalendarIcon,
    DollarSignIcon,
    HeadphonesIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/lead-form";
import TrustStrip from "@/sections/trust-strip";
import Testimonials from "@/sections/testimonials";
import FaqSection from "@/sections/faq-section";
import WorkflowSteps from "@/sections/workflow-steps";
import BrandSection from "@/components/brand-section";

const locationData = {
    usa: {
        label: "USA",
        flag: "🇺🇸",
        currency: "USD",
        timezone: "EST / PST",
        tagline: "Serving clients across New York, San Francisco, Austin & beyond",
        color: "from-blue-600 to-cyan-500",
        glow: "rgba(59,130,246,0.4)",
        accent: "text-blue-400",
        accentBg: "bg-blue-500",
        accentBorder: "border-blue-500/30",
        stats: [
            { label: "US Clients Served", value: "50+" },
            { label: "Average Response", value: "< 1 hrs" },
            { label: "Satisfaction Rate", value: "99%" },
            { label: "Years in Business", value: "10+" },
        ],
        ctaLabel: "Get a Free USA Consultation",
        whatsappNote: "Mon–Fri, 9am–6pm EST",
        brandTitle: "Trusted by global start-ups and enterprises",
        brandBadge: "🌍 Global Tech Partner",
    },
    uk: {
        label: "UK",
        flag: "🇬🇧",
        currency: "GBP",
        timezone: "GMT / BST",
        tagline: "Serving clients across London, Manchester, Birmingham & beyond",
        color: "from-indigo-600 to-purple-500",
        glow: "rgba(99,102,241,0.4)",
        accent: "text-indigo-400",
        accentBg: "bg-indigo-500",
        accentBorder: "border-indigo-500/30",
        stats: [
            { label: "UK Clients Served", value: "30+" },
            { label: "Average Response", value: "< 1 hrs" },
            { label: "Satisfaction Rate", value: "99%" },
            { label: "Years in Business", value: "10+" },
        ],
        ctaLabel: "Get a Free UK Consultation",
        whatsappNote: "Mon–Fri, 9am–6pm GMT",
        brandTitle: "Powering leading businesses worldwide",
        brandBadge: "🌍 Trusted Globally",
    },
    australia: {
        label: "Australia",
        flag: "🇦🇺",
        currency: "AUD",
        timezone: "AEST / AEDT",
        tagline: "Serving clients across Sydney, Melbourne, Brisbane & beyond",
        color: "from-emerald-500 to-teal-400",
        glow: "rgba(16,185,129,0.4)",
        accent: "text-emerald-400",
        accentBg: "bg-emerald-500",
        accentBorder: "border-emerald-500/30",
        stats: [
            { label: "AU Clients Served", value: "50+" },
            { label: "Average Response", value: "< 1 hrs" },
            { label: "Satisfaction Rate", value: "99%" },
            { label: "Years in Business", value: "10+" },
        ],
        ctaLabel: "Get a Free Australia Consultation",
        whatsappNote: "Mon–Fri, 9am–6pm AEST",
        brandTitle: "Loved by global enterprises",
        brandBadge: "🌍 Worldwide Partner",
    },
};

const techData = {
    flutter: {
        label: "Flutter",
        badge: "Cross-Platform Mobile Experts",
        badgeColor: "text-sky-400",
        brandStyle: "glass",
        heroTitle: (loc) => `Hire Flutter Developers in ${loc}`,
        heroDesc: (loc) =>
            `Work with battle-tested Flutter engineers based out of ${loc} time zones. We build stunning, natively compiled iOS & Android apps from a single Dart codebase faster and more cost-effectively than native alternatives.`,
        keywords: [
            "Flutter App Development",
            "Dart Programming",
            "Cross-Platform iOS & Android",
            "Flutter UI/UX Design",
            "Firebase Integration",
            "Flutter BLoC / Riverpod",
            "Widget Development",
            "App Store Deployment",
        ],
        skills: [
            { icon: <CodeIcon className="size-5" />, title: "Expert Dart & Flutter", desc: "Deep Dart language proficiency with idiomatic Flutter architecture patterns." },
            { icon: <ZapIcon className="size-5" />, title: "60 FPS Performance", desc: "Smooth animations and buttery-fluid UX optimised for both iOS and Android." },
            { icon: <ShieldCheckIcon className="size-5" />, title: "Production-Ready Code", desc: "Unit-tested, peer-reviewed Flutter code that scales and stays maintainable." },
            { icon: <UsersIcon className="size-5" />, title: "Agile & Transparent", desc: "Daily standups, sprint reviews, and full visibility into your project roadmap." },
        ],
        faqs: [
            { q: "How quickly can a Flutter developer start?", a: "Our Flutter developers are available to onboard within 48–72 hours of agreement. We have a pre-vetted talent bench ready to go." },
            { q: "Can you build for both iOS and Android?", a: "Yes. Flutter's single codebase compiles to native iOS and Android, so you get two apps for the cost of one." },
            { q: "Do you offer fixed-cost or dedicated engagements?", a: "Both. We offer fixed-price projects, dedicated developer contracts, and hourly engagements depending on your needs." },
        ],
        accent2: "bg-sky-500",
    },
    "react-native": {
        label: "React Native",
        badge: "JavaScript Mobile Specialists",
        badgeColor: "text-cyan-400",
        brandStyle: "minimal",
        heroTitle: (loc) => `Hire React Native Developers in ${loc}`,
        heroDesc: (loc) =>
            `Find experienced React Native engineers aligned to ${loc} time zones. We leverage the JavaScript ecosystem to build high-performance, cross-platform mobile apps that feel truly native backed by an active, mature community.`,
        keywords: [
            "React Native Development",
            "JavaScript / TypeScript",
            "Expo & Bare Workflow",
            "Redux / Zustand State Management",
            "React Navigation",
            "Native Modules",
            "Push Notifications",
            "CI/CD for Mobile",
        ],
        skills: [
            { icon: <CodeIcon className="size-5" />, title: "JS/TS Experts", desc: "Strong TypeScript foundation ensuring type-safe, maintainable React Native codebases." },
            { icon: <ZapIcon className="size-5" />, title: "Near-Native Performance", desc: "Leveraging the new architecture (Fabric + JSI) for 60 FPS native feel." },
            { icon: <ShieldCheckIcon className="size-5" />, title: "Battle-Tested Libraries", desc: "Expert integration of the React Native ecosystem: Expo, Reanimated, MMKV, and more." },
            { icon: <UsersIcon className="size-5" />, title: "Agile & Transparent", desc: "Daily standups, sprint reviews, and full visibility into your project roadmap." },
        ],
        faqs: [
            { q: "Which is better: Expo or bare React Native?", a: "It depends on your project. We assess your needs and recommend the right workflow Expo is faster to ship, bare gives more native control." },
            { q: "Can you upgrade an old React Native project?", a: "Absolutely. We specialise in migration to the new React Native architecture and upgrading legacy projects to the latest versions." },
            { q: "What engagement models do you offer?", a: "Fixed-price, dedicated developer, and hourly. We'll recommend the best fit after a free consultation." },
        ],
        accent2: "bg-cyan-500",
    },
    "full-stack": {
        label: "Full Stack",
        badge: "End-to-End Product Engineers",
        badgeColor: "text-violet-400",
        brandStyle: "classic",
        heroTitle: (loc) => `Hire Full Stack Developers in ${loc}`,
        heroDesc: (loc) =>
            `Hire senior full-stack engineers aligned to ${loc} time zones who own your product end-to-end from React front-ends to Node.js / Python APIs and cloud infrastructure. One team, complete delivery.`,
        keywords: [
            "React / Next.js Frontend",
            "Node.js / Python Backend",
            "REST & GraphQL APIs",
            "PostgreSQL / MongoDB",
            "AWS / GCP Cloud",
            "Docker & Kubernetes",
            "CI/CD Pipelines",
            "TypeScript",
        ],
        skills: [
            { icon: <CodeIcon className="size-5" />, title: "Frontend Excellence", desc: "React, Next.js, and TypeScript experts who build pixel-perfect, performant UIs." },
            { icon: <ZapIcon className="size-5" />, title: "Scalable Backends", desc: "Node.js / Python APIs built to scale from MVP to millions of users." },
            { icon: <ShieldCheckIcon className="size-5" />, title: "Cloud & DevOps", desc: "AWS/GCP deployment, Docker containers, and automated CI/CD pipelines." },
            { icon: <UsersIcon className="size-5" />, title: "Product Mindset", desc: "Engineers who think beyond tickets they consider UX, business impact, and scalability." },
        ],
        faqs: [
            { q: "Can a full-stack developer replace a whole team?", a: "For early-stage products, yes. Our senior full-stack engineers can handle everything from UI to DB schema. For larger products, we recommend a small dedicated team." },
            { q: "Which tech stacks do your full-stack developers know?", a: "React/Next.js on the frontend, Node.js or Python on the backend, PostgreSQL/MongoDB, and AWS/GCP for cloud. We tailor to your existing stack." },
            { q: "How do you ensure code quality?", a: "Through mandatory code reviews, automated testing pipelines, ESLint/Prettier standards, and weekly architecture reviews." },
        ],
        accent2: "bg-violet-500",
    },
};

const engagementModels = [
    {
        icon: <CalendarIcon className="size-6" />,
        title: "Dedicated Developer",
        desc: "A full-time engineer embedded in your team, working exclusively on your product.",
        tag: "Most Popular",
        tagColor: "bg-emerald-500",
        gradient: "from-emerald-500/10 to-teal-500/10",
        border: "border-emerald-500/20",
    },
    {
        icon: <DollarSignIcon className="size-6" />,
        title: "Fixed-Price Project",
        desc: "Defined scope, timeline, and cost. Perfect for well-scoped products.",
        tag: "Best Value",
        tagColor: "bg-blue-500",
        gradient: "from-blue-500/10 to-cyan-500/10",
        border: "border-blue-500/20",
    },
    {
        icon: <ClockIcon className="size-6" />,
        title: "Hourly / Part-Time",
        desc: "Pay only for hours worked. Ideal for ongoing support or small tasks.",
        tag: "Flexible",
        tagColor: "bg-purple-500",
        gradient: "from-purple-500/10 to-pink-500/10",
        border: "border-purple-500/20",
    },
];

export default function HireDeveloperContent({ tech, location }) {
    const loc = locationData[location];
    const t = techData[tech];
    if (!loc || !t) return null;

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
            <section className="relative pt-32 pb-10 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                    >
                        <span className={`px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-semibold ${t.badgeColor} mb-6 inline-block`}>
                            {loc.flag}&nbsp;&nbsp;{t.badge} — {loc.label}
                        </span>

                        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                            {t.heroTitle(loc.label)}
                        </h1>

                        <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
                            {t.heroDesc(loc.label)}
                        </p>
                        <p className={`text-sm font-medium ${loc.accent} mb-10`}>{loc.tagline}</p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="#hire-form"
                                className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${loc.color} text-white font-bold text-lg shadow-[0_0_30px_${loc.glow}] hover:shadow-[0_0_45px_${loc.glow}] hover:scale-105 transition-all duration-300`}
                            >
                                {loc.ctaLabel}
                                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/15 font-semibold text-lg hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                Schedule a Call
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <TrustStrip />

            {/* ── Stats ── */}
            <section className="py-14 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    {loc.stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border ${loc.accentBorder} backdrop-blur-sm text-center`}
                        >
                            <span className={`text-3xl font-black ${loc.accent} mb-1`}>{s.value}</span>
                            <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">{s.label}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Lead Form ── */}
            <section id="hire-form" className="py-20 px-4 bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-slate-900/50 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to <span className={loc.accent}>Hire a {t.label} Developer</span> today?
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                            Fill in the form and one of our senior engineers will reach out within 1-2 business hours. No spam, no commitment required.
                        </p>

                        {/* Why hire points */}
                        <ul className="flex flex-col gap-4">
                            {[
                                "Thoroughly vetted, senior-level developers",
                                "Aligned to your timezone for seamless collaboration",
                                "Flexible engagement: dedicated, fixed, or hourly",
                                "NDA-protected and IP-secure from day one",
                                "Risk-free 2-week trial period",
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircleIcon className={`size-5 shrink-0 mt-0.5 ${loc.accent}`} />
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <HeadphonesIcon className="size-4 shrink-0" />
                            <span>Available {loc.whatsappNote}</span>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className={`absolute -inset-4 bg-gradient-to-r ${loc.color} opacity-5 blur-2xl rounded-3xl pointer-events-none`} />
                        <LeadForm
                            title={`Hire a ${t.label} Developer ${loc.label}`}
                            description={`Tell us about your project. We'll match you with the right ${t.label} engineer.`}
                        />
                    </div>
                </div>
            </section>

            {/* ── Skills / Why Us ── */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Why Hire {t.label} Developers <span className={loc.accent}>from Reinsoft?</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Our engineers don't just write code they own outcomes. Here's what sets our {t.label} team apart.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.skills.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-6 rounded-2xl bg-white/5 border ${loc.accentBorder} backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group`}
                            >
                                <div className={`size-11 rounded-xl ${loc.accentBg} bg-opacity-20 flex items-center justify-center mb-4 ${loc.accent} group-hover:scale-110 transition-transform`}>
                                    {s.icon}
                                </div>
                                <h3 className={`text-lg font-bold mb-2 ${loc.accent}`}>{s.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Keywords / Skills Tags ── */}
            <section className="py-14 px-4 bg-white/5 dark:bg-black/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Our {t.label} <span className={loc.accent}>Technology Expertise</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">Skills our developers bring to every engagement</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {t.keywords.map((kw, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`px-4 py-2 rounded-full text-sm font-semibold bg-white/5 border ${loc.accentBorder} ${loc.accent} hover:bg-white/10 transition-all`}
                            >
                                {kw}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Engagement Models ── */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Flexible <span className={loc.accent}>Engagement Models</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                            Whether you need a full-time engineer or occasional support, we have a model that fits your budget and timeline.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {engagementModels.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-6 rounded-2xl bg-gradient-to-br ${m.gradient} border ${m.border} backdrop-blur-sm flex flex-col gap-4`}
                            >
                                <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white ${m.tagColor}`}>
                                    {m.tag}
                                </span>
                                <div className={`size-11 rounded-xl bg-white/10 flex items-center justify-center ${loc.accent}`}>
                                    {m.icon}
                                </div>
                                <h3 className="text-lg font-bold">{m.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                                <a
                                    href="#hire-form"
                                    className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold ${loc.accent} hover:underline`}
                                >
                                    Get started <ArrowRightIcon className="size-4" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <WorkflowSteps />

            {/* Dynamic Brands Slider based on location/tech */}
            <div className="pt-10">
                <BrandSection 
                    variant={(() => {
                        const id = `${tech}-${location}`;
                        if (id === 'flutter-uk') return 'grid';
                        if (id === 'react-native-australia') return 'marquee';
                        if (id === 'full-stack-usa') return 'cards';
                        return ["grid", "slider", "marquee", "cards"][(tech.length + location.length) % 4];
                    })()}
                    title={loc.brandTitle} 
                    badge={loc.brandBadge} 
                />
            </div>

            <Testimonials />

            {/* ── Inline FAQ ── */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Common Questions About Hiring <span className={loc.accent}>{t.label} Developers</span>
                    </h2>
                    <div className="flex flex-col gap-5">
                        {t.faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-6 rounded-2xl bg-white/5 border ${loc.accentBorder} backdrop-blur-sm`}
                            >
                                <h3 className="font-bold text-base mb-2 flex items-start gap-2">
                                    <span className={`${loc.accent} shrink-0`}>Q.</span> {faq.q}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-5">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA Banner ── */}
            <section className="relative mt-4 mb-12 px-4">
                <motion.div
                    className={`relative max-w-4xl mx-auto overflow-hidden rounded-2xl bg-gradient-to-r ${loc.color} p-[1px]`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-black/80 backdrop-blur-xl rounded-2xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                                Start building with a <span className={loc.accent}>{t.label} expert</span> today
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base">
                                Get matched with a vetted developer within 48 hours. No commitments, no risk.
                            </p>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <a
                                href="#hire-form"
                                className={`group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${loc.color} text-white text-sm font-bold hover:scale-105 transition-all`}
                            >
                                Hire Now
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
