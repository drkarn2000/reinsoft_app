'use client';

import { motion } from "framer-motion";
import {
    ShieldCheckIcon,
    HeadphonesIcon,
    TrendingUpIcon,
    RefreshCwIcon,
    ZapIcon,
    DatabaseIcon,
    ClockIcon,
    UsersIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    ServerIcon,
    LockIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "@/components/gradient-button";
import LeadForm from "@/components/lead-form";
import Testimonials from "@/sections/testimonials";
import WorkflowSteps from "@/sections/workflow-steps";
import FaqSection from "@/sections/faq-section";
import TrustStrip from "@/sections/trust-strip";

const supportFeatureColors = [
    { bar: "bg-[#f59e0b]", text: "text-[#f59e0b]", hex: "#f59e0b" },
    { bar: "bg-[#2db1c4]", text: "text-[#2db1c4]", hex: "#2db1c4" },
    { bar: "bg-[#8cb342]", text: "text-[#8cb342]", hex: "#8cb342" },
    { bar: "bg-[#eb6361]", text: "text-[#eb6361]", hex: "#eb6361" },
];

const supportFeatures = [
    {
        title: "Security Updates & Patching",
        description: "Proactive security patches and vulnerability monitoring to keep your systems protected from emerging threats.",
        icon: <ShieldCheckIcon className="size-6" />,
    },
    {
        title: "Bug Fixes & Improvements",
        description: "Rapid identification and resolution of bugs with continuous feature improvements to keep your app evolving.",
        icon: <RefreshCwIcon className="size-6" />,
    },
    {
        title: "Performance Optimization",
        description: "Regular audits and tuning to ensure your application runs at peak speed and efficiency at all times.",
        icon: <ZapIcon className="size-6" />,
    },
    {
        title: "Backup & Disaster Recovery",
        description: "Automated daily backups and a tested disaster recovery plan so your business data is never at risk.",
        icon: <DatabaseIcon className="size-6" />,
    },
];

const supportPillars = [
    {
        icon: <ClockIcon className="size-6 text-amber-400 stroke-1" />,
        text: "Priority response times — we're here when it matters",
        gradient: "from-[#f59e0b] to-[#d97706]",
    },
    {
        icon: <ShieldCheckIcon className="size-6 text-cyan-400 stroke-1" />,
        text: "Proactive monitoring before issues impact your users",
        gradient: "from-[#0ea5e9] to-[#14b8a6]",
    },
    {
        icon: <TrendingUpIcon className="size-6 text-green-400 stroke-1" />,
        text: "Quarterly growth reviews to align tech with business goals",
        gradient: "from-[#10b981] to-[#059669]",
    },
    {
        icon: <UsersIcon className="size-6 text-rose-400 stroke-1" />,
        text: "A dedicated team that knows your project inside out",
        gradient: "from-[#f43f5e] to-[#e11d48]",
    },
];

export default function LongTermSupportContent() {
    return (
        <main className="min-h-screen selection:bg-amber-500/30">
            {/* Background elements */}
            <motion.div
                className="fixed inset-0 overflow-hidden -z-20 pointer-events-none hidden dark:block"
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </motion.div>

            {/* Background Image */}
            <div className="fixed inset-0 -z-30 pointer-events-none hidden dark:block">
                <Image
                    src="/assets/Services.jpg"
                    alt="Reinsoft IT Solutions - Long-Term Support & Maintenance Services Background"
                    fill
                    className="object-cover opacity-90 grayscale brightness-50"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
            </div>

            {/* ── Hero Section ── */}
            <section className="relative pt-12 lg:pt-20 pb-16 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="text-center lg:text-left z-10"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-amber-500 dark:text-amber-400 mb-6 inline-block shadow-sm">
                            Dedicated Long-Term Partnership
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
                            Long-Term Support &{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">
                                Growth
                            </span>
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Your product doesn&apos;t stop growing after launch — and neither do we. We provide ongoing support, maintenance, and strategic growth consulting to keep your systems secure, fast, and future-proof.
                        </p>

                        {/* Highlights Row */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1.5 text-amber-500 dark:text-amber-400">
                                <ShieldCheckIcon className="size-4" /> Security
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 text-cyan-500 dark:text-cyan-400">
                                <ServerIcon className="size-4" /> Uptime
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 text-green-500 dark:text-green-400">
                                <TrendingUpIcon className="size-4" /> Growth
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 text-black font-bold text-lg shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:shadow-[0_0_45px_rgba(245,158,11,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Get Support Plan
                                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#what-we-cover"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/15 font-semibold text-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                What We Cover
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right — Floating Cards Visual */}
                    <motion.div
                        className="relative z-10 w-full lg:h-[560px] flex items-center justify-center mt-10 lg:mt-0"
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Glow Behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 blur-[80px] rounded-full" />

                        {/* Central icon ring */}
                        <div className="relative z-10 flex flex-col items-center justify-center gap-6 w-full max-w-md">
                            {/* Top Row */}
                            <div className="flex gap-6 justify-center">
                                {[
                                    { icon: <ShieldCheckIcon className="size-7 text-amber-400" />, label: "Security", color: "#f59e0b" },
                                    { icon: <ZapIcon className="size-7 text-cyan-400" />, label: "Performance", color: "#06b6d4" },
                                ].map((card, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col items-center gap-2 w-36 shadow-xl"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                                        style={{ boxShadow: `0 0 20px ${card.color}30` }}
                                    >
                                        <div className="size-12 rounded-full flex items-center justify-center" style={{ background: `${card.color}18` }}>
                                            {card.icon}
                                        </div>
                                        <p className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">{card.label}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Center Card */}
                            <motion.div
                                className="bg-gradient-to-br from-amber-500/20 to-orange-400/10 backdrop-blur-md border border-amber-400/30 rounded-3xl p-8 flex flex-col items-center gap-3 w-52 shadow-2xl"
                                animate={{ scale: [1, 1.04, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="size-16 rounded-full bg-amber-500/20 flex items-center justify-center shadow-inner">
                                    <HeadphonesIcon className="size-8 text-amber-400" />
                                </div>
                                <p className="text-sm font-black text-gray-900 dark:text-white text-center">Always-On Support</p>
                                <div className="flex items-center gap-1.5">
                                    <span className="size-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-xs text-green-400 font-semibold">Live & Active</span>
                                </div>
                            </motion.div>

                            {/* Bottom Row */}
                            <div className="flex gap-6 justify-center">
                                {[
                                    { icon: <DatabaseIcon className="size-7 text-green-400" />, label: "Backups", color: "#10b981" },
                                    { icon: <TrendingUpIcon className="size-7 text-rose-400" />, label: "Growth", color: "#f43f5e" },
                                ].map((card, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col items-center gap-2 w-36 shadow-xl"
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 3.5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
                                        style={{ boxShadow: `0 0 20px ${card.color}30` }}
                                    >
                                        <div className="size-12 rounded-full flex items-center justify-center" style={{ background: `${card.color}18` }}>
                                            {card.icon}
                                        </div>
                                        <p className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">{card.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            className="absolute -right-2 md:-right-10 top-[10%] glass p-3 lg:p-4 rounded-2xl border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md z-20 hidden md:block"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="size-10 lg:size-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                                    <ClockIcon className="size-5 lg:size-6 text-amber-500" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[10px] lg:text-xs text-black dark:text-gray-300 font-bold uppercase tracking-wider">Response</p>
                                    <p className="text-sm lg:text-base font-black text-black dark:text-white">&lt; 4 Hours</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute -left-2 md:-left-10 bottom-[10%] glass p-3 lg:p-4 rounded-2xl border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md z-20 hidden md:block"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="size-10 lg:size-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <LockIcon className="size-5 lg:size-6 text-green-500" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[10px] lg:text-xs text-black dark:text-gray-300 font-bold uppercase tracking-wider">Uptime</p>
                                    <p className="text-sm lg:text-base font-black text-black dark:text-white">99.9% SLA</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <TrustStrip />

            {/* ── Lead Form Section ── */}
            <section id="quote" className="py-24 px-4 bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-slate-900/50 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            Keep Your Systems <br />
                            <span className="text-amber-500">Secure & Growing</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 text-lg mb-12">
                            Tell us about your project and we&apos;ll design a tailored support plan that keeps you covered — from day one to year five.
                        </p>
                        <div className="flex flex-col gap-6 w-full max-w-2xl mt-8">
                            {[
                                {
                                    number: "1",
                                    title: "Proactive Care",
                                    desc: "We fix issues before they become problems.",
                                    color: "bg-[#f59e0b]",
                                    darkColor: "bg-[#b45309]",
                                    textColor: "text-amber-600 dark:text-[#fbbf24]",
                                    icon: <ShieldCheckIcon className="size-12 md:size-14" />,
                                },
                                {
                                    number: "2",
                                    title: "Real Partnerships",
                                    desc: "A dedicated team invested in your long-term success.",
                                    color: "bg-[#10b981]",
                                    darkColor: "bg-[#065f46]",
                                    textColor: "text-emerald-600 dark:text-[#34d399]",
                                    icon: <UsersIcon className="size-12 md:size-14" />,
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center shadow-lg h-[110px] mb-8"
                                >
                                    {/* Ribbon */}
                                    <div className={`absolute left-6 md:left-8 top-3 -bottom-5 w-[54px] ${item.color} shadow-2xl flex flex-col items-center pt-[5px] z-20`} style={{ borderRadius: '9999px 9999px 0 12px' }}>
                                        <div className="size-[44px] bg-white rounded-full flex items-center justify-center shadow-md">
                                            <span className="text-xl md:text-2xl font-black text-black">{item.number}</span>
                                        </div>
                                        <div className={`absolute bottom-0 left-full w-[10px] h-[18px] ${item.darkColor}`} style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }} />
                                    </div>
                                    {/* Content */}
                                    <div className="pl-28 md:pl-32 pr-20 py-6 flex-1 flex flex-col justify-center h-full z-10 relative">
                                        <h4 className={`text-lg font-bold ${item.textColor} tracking-widest mb-1.5 uppercase`}>{item.title}</h4>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                    {/* Original Icon */}
                                    <div className={`absolute right-6 md:right-8 top-1/2 -translate-y-1/2 ${item.textColor} opacity-60 z-10`}>
                                        {item.icon}
                                    </div>
                                    {/* Glow accent */}
                                    <div className={`absolute right-4 w-24 h-24 ${item.color} rounded-full blur-[40px] opacity-10 pointer-events-none`} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-amber-500/5 blur-2xl rounded-3xl pointer-events-none" />
                        <LeadForm
                            title="Request a Support Plan"
                            description="Tell us about your systems and support needs."
                        />
                    </div>
                </div>
            </section>

            {/* ── What We Cover ── */}
            <section id="what-we-cover" className="py-24 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-sm font-bold text-amber-500 mb-4 inline-block shadow-sm">
                            Coverage & Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                            What Our Support <span className="text-amber-500">Covers</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                            From security patches to performance audits — we handle everything so you can focus on growing your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left: Visual */}
                        <motion.div
                            className="relative w-full flex items-center justify-center"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-400/20 blur-[80px] rounded-full pointer-events-none" />
                            <div className="relative w-full max-w-lg grid grid-cols-2 gap-4 z-10">
                                {[
                                    { icon: <ShieldCheckIcon className="size-8 text-amber-400" />, title: "Security Patches", desc: "Zero-day protection and regular vulnerability scans", color: "#f59e0b" },
                                    { icon: <ZapIcon className="size-8 text-cyan-400" />, title: "Performance Audits", desc: "Monthly speed & efficiency optimization", color: "#06b6d4" },
                                    { icon: <DatabaseIcon className="size-8 text-green-400" />, title: "Daily Backups", desc: "Automated cloud backups with fast recovery", color: "#10b981" },
                                    { icon: <RefreshCwIcon className="size-8 text-rose-400" />, title: "Continuous Updates", desc: "Feature enhancements and dependency updates", color: "#f43f5e" },
                                    { icon: <HeadphonesIcon className="size-8 text-purple-400" />, title: "Priority Support", desc: "Dedicated Slack channel and ticketing system", color: "#a855f7" },
                                    { icon: <TrendingUpIcon className="size-8 text-orange-400" />, title: "Growth Planning", desc: "Quarterly roadmap reviews aligned to your goals", color: "#f97316" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-white/5 dark:bg-white/[0.04] border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/10 transition-all duration-300 group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        style={{ boxShadow: `0 4px 20px ${item.color}18` }}
                                    >
                                        <div className="size-12 rounded-xl flex items-center justify-center" style={{ background: `${item.color}15` }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Feature Cards */}
                        <div className="flex flex-col gap-5 ml-6">
                            {supportFeatures.map((feature, idx) => {
                                const colors = supportFeatureColors[idx % supportFeatureColors.length];
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        className="relative flex flex-row items-center bg-white/5 border border-white/10 rounded-2xl overflow-visible group hover:bg-white/[0.08] transition-all duration-500"
                                    >
                                        {/* Left accent bar */}
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors.bar} rounded-l-2xl`} />

                                        {/* Number badge with half-rings */}
                                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10" style={{ width: '48px', height: '48px' }}>
                                            <div style={{ position: 'absolute', left: '-12px', top: '-12px', width: '72px', height: '72px', borderRadius: '50%', border: `3px solid ${colors.hex}`, opacity: 0.7, boxShadow: `0 0 10px 2px ${colors.hex}80`, clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
                                            <div style={{ position: 'absolute', left: '-6px', top: '-6px', width: '60px', height: '60px', borderRadius: '50%', border: `3px solid ${colors.hex}`, opacity: 0.9, boxShadow: `0 0 8px 2px ${colors.hex}60`, clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
                                            <div className={`size-12 rounded-full ${colors.bar} flex items-center justify-center text-lg font-black text-black dark:text-white shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                                                {idx + 1}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow py-4 pl-10 pr-2 text-left">
                                            <h3 className={`text-xl font-bold mb-1 ${colors.text}`}>{feature.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-400 text-sm font-semibold leading-relaxed">{feature.description}</p>
                                        </div>

                                        {/* Right icon */}
                                        <div className="pr-5 shrink-0 flex items-center justify-center">
                                            <div className={`size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${colors.text} opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}>
                                                {feature.icon}
                                            </div>
                                        </div>

                                        {/* Right accent bar on hover */}
                                        <div className={`absolute right-0 top-0 bottom-0 w-1 ${colors.bar} opacity-0 group-hover:opacity-100 transition-opacity rounded-r-2xl`} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why Choose Our Support ── */}
            <section className="py-24 px-4 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold mb-8">
                            A Support Partner That <span className="text-amber-400">Actually Delivers</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Most agencies vanish after launch. At Reinsoft, we treat post-launch as the beginning of the journey. Our long-term plans are designed to grow with you — not to lock you in.
                        </p>
                        <div className="flex flex-col gap-5 mb-8">
                            {supportPillars.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[1.5rem] py-4 px-6 flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/10 transition-all duration-300 relative group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {/* Left: Number */}
                                    <div className="flex items-center justify-center w-16 shrink-0">
                                        <span className="text-gray-400 text-4xl font-light leading-none group-hover:text-black dark:text-white transition-colors">0{i + 1}</span>
                                    </div>

                                    {/* Vertical Bar */}
                                    <div className={`w-2.5 h-16 rounded-full bg-gradient-to-b ${item.gradient} shrink-0 mx-6 shadow-md`} />

                                    {/* Icon */}
                                    <div className="shrink-0 mr-6">{item.icon}</div>

                                    {/* Text */}
                                    <div className="text-gray-800 dark:text-gray-300 group-hover:text-black dark:text-white transition-colors text-sm font-medium leading-relaxed max-w-[200px] md:max-w-xs">
                                        {item.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <GradientButton href="/contact">Discuss Your Support Needs</GradientButton>
                    </motion.div>

                    {/* Right: Plans overview */}
                    <motion.div
                        className="relative w-full flex flex-col gap-5"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {[
                            {
                                name: "Starter Care",
                                emoji: "🛡️",
                                color: "#06b6d4",
                                features: ["Monthly security patches", "Bug fix resolution", "Email support", "Monthly report"],
                            },
                            {
                                name: "Growth Plan",
                                emoji: "🚀",
                                color: "#f59e0b",
                                features: ["Weekly updates & monitoring", "Performance audits", "Priority Slack support", "Dedicated account manager", "Quarterly roadmap review"],
                                recommended: true,
                            },
                            {
                                name: "Enterprise Shield",
                                emoji: "🏆",
                                color: "#a855f7",
                                features: ["24/7 monitoring & alerts", "Custom SLA agreements", "Dedicated engineering team", "Infrastructure management", "Strategic growth consulting"],
                            },
                        ].map((plan, i) => (
                            <motion.div
                                key={i}
                                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ boxShadow: `0 4px 20px ${plan.color}18` }}
                            >
                                {plan.recommended && (
                                    <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-black">
                                        Most Popular
                                    </span>
                                )}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{plan.emoji}</span>
                                    <h3 className="text-lg font-black text-gray-900 dark:text-white">{plan.name}</h3>
                                </div>
                                <ul className="flex flex-col gap-2">
                                    {plan.features.map((f, fi) => (
                                        <li key={fi} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                            <CheckCircleIcon className="size-4 shrink-0" style={{ color: plan.color }} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold transition-all hover:gap-2.5"
                                    style={{ color: plan.color }}
                                >
                                    Get This Plan <ArrowRightIcon className="size-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <WorkflowSteps />

            <Testimonials />

            {/* ── Final CTA ── */}
            <section className="relative mt-16 mb-10 px-4">
                <motion.div
                    className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5 rounded-2xl" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

                    <div className="relative z-10 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                                Ready to never worry about <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">downtime</span> again?
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                                Let's build a support partnership that keeps your business running — and growing.
                            </p>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <Link
                                href="/contact"
                                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 text-black text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:scale-105 transition-all"
                            >
                                Get Your Plan
                                <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="https://wa.me/918968369582"
                                target="_blank"
                                className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-semibold hover:bg-black/10 dark:hover:bg-white/10 transition-all"
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
