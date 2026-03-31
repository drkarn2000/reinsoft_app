'use client';

import { motion } from "framer-motion";
import {
    ServerIcon,
    LinkIcon,
    DatabaseIcon,
    ShieldCheckIcon,
    ZapIcon,
    CloudIcon,
    ArrowRightIcon,
    CodeIcon,
    PlugIcon,
    RefreshCwIcon,
    LayersIcon,
    NetworkIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "@/components/gradient-button";
import LeadForm from "@/components/lead-form";
import Testimonials from "@/sections/testimonials";
import WorkflowSteps from "@/sections/workflow-steps";
import FaqSection from "@/sections/faq-section";
import TrustStrip from "@/sections/trust-strip";

const apiFeatureColors = [
    { bar: "bg-[#f43f5e]", text: "text-[#f43f5e]", hex: "#f43f5e" },
    { bar: "bg-[#0ea5e9]", text: "text-[#0ea5e9]", hex: "#0ea5e9" },
    { bar: "bg-[#f59e0b]", text: "text-[#f59e0b]", hex: "#f59e0b" },
    { bar: "bg-[#8b5cf6]", text: "text-[#8b5cf6]", hex: "#8b5cf6" },
];

const apiFeatures = [
    {
        title: "REST & GraphQL APIs",
        description: "High-performance, well-documented APIs built with scalability and developer experience in mind.",
        icon: <CodeIcon className="size-6" />,
    },
    {
        title: "Third-Party Integrations",
        description: "Seamless connection with payment gateways, CRMs, ERPs, email services, and cloud platforms.",
        icon: <PlugIcon className="size-6" />,
    },
    {
        title: "Microservices Architecture",
        description: "Decompose monoliths into scalable, independently deployable microservices for maximum flexibility.",
        icon: <LayersIcon className="size-6" />,
    },
    {
        title: "Real-Time Data Sync",
        description: "WebSocket and event-driven architectures for live dashboards, notifications, and real-time updates.",
        icon: <RefreshCwIcon className="size-6" />,
    },
];

export default function ApiIntegrationContent() {
    return (
        <main className="min-h-screen selection:bg-rose-500/30">
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
                    alt="Background"
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
                        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-rose-500 dark:text-rose-400 mb-6 inline-block shadow-sm">
                            API & Integration Experts
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
                            API Development &{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-500">
                                Integration
                            </span>
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            We architect robust APIs and seamless integrations that connect your systems, automate workflows, and power your digital ecosystem. From REST to GraphQL, we speak every protocol.
                        </p>

                        {/* Highlights Row */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1.5 text-rose-500 dark:text-rose-400">
                                <CodeIcon className="size-4" /> REST & GraphQL
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 text-sky-500 dark:text-sky-400">
                                <CloudIcon className="size-4" /> Cloud Native
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 text-purple-500 dark:text-purple-400">
                                <LayersIcon className="size-4" /> Microservices
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(244,63,94,0.35)] hover:shadow-[0_0_45px_rgba(244,63,94,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Build Your API
                                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#capabilities"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/15 font-semibold text-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                Our Capabilities
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right — Visual */}
                    <motion.div
                        className="relative z-10 w-full lg:h-[560px] flex items-center justify-center mt-10 lg:mt-0"
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-red-500/20 blur-[80px] rounded-full" />

                        {/* API connection visual */}
                        <div className="relative z-10 flex flex-col items-center justify-center gap-5 w-full max-w-md">
                            {/* Top row */}
                            <div className="flex gap-5 justify-center">
                                {[
                                    { icon: <ServerIcon className="size-7 text-rose-400" />, label: "REST API", color: "#f43f5e" },
                                    { icon: <NetworkIcon className="size-7 text-sky-400" />, label: "GraphQL", color: "#0ea5e9" },
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

                            {/* Center node */}
                            <motion.div
                                className="bg-gradient-to-br from-rose-500/20 to-red-500/10 backdrop-blur-md border border-rose-400/30 rounded-3xl p-8 flex flex-col items-center gap-3 w-56 shadow-2xl"
                                animate={{ scale: [1, 1.04, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="size-16 rounded-full bg-rose-500/20 flex items-center justify-center shadow-inner">
                                    <LinkIcon className="size-8 text-rose-400" />
                                </div>
                                <p className="text-sm font-black text-gray-900 dark:text-white text-center">Connected Systems</p>
                                <div className="flex items-center gap-1.5">
                                    <span className="size-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-xs text-green-400 font-semibold">All Synced</span>
                                </div>
                            </motion.div>

                            {/* Bottom row */}
                            <div className="flex gap-5 justify-center">
                                {[
                                    { icon: <CloudIcon className="size-7 text-purple-400" />, label: "Cloud", color: "#8b5cf6" },
                                    { icon: <DatabaseIcon className="size-7 text-amber-400" />, label: "Database", color: "#f59e0b" },
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

                        {/* Floating badges */}
                        <motion.div
                            className="absolute -right-2 md:-right-10 top-[10%] glass p-3 lg:p-4 rounded-2xl border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md z-20 hidden md:block"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="size-10 lg:size-12 rounded-full bg-rose-500/20 flex items-center justify-center">
                                    <ZapIcon className="size-5 lg:size-6 text-rose-500" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[10px] lg:text-xs text-black dark:text-gray-300 font-bold uppercase tracking-wider">Latency</p>
                                    <p className="text-sm lg:text-base font-black text-black dark:text-white">&lt;50ms Avg</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute -left-2 md:-left-10 bottom-[10%] glass p-3 lg:p-4 rounded-2xl border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md z-20 hidden md:block"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="size-10 lg:size-12 rounded-full bg-sky-500/20 flex items-center justify-center">
                                    <ShieldCheckIcon className="size-5 lg:size-6 text-sky-500" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[10px] lg:text-xs text-black dark:text-gray-300 font-bold uppercase tracking-wider">Auth</p>
                                    <p className="text-sm lg:text-base font-black text-black dark:text-white">OAuth 2.0</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <TrustStrip />

            {/* ── Lead Form Section ── */}
            <section id="quote" className="py-24 px-4 bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-slate-900/50 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            Connect Your <br />
                            <span className="text-rose-500">Digital Ecosystem</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 text-lg mb-12">
                            Tell us what systems you need connected and we&apos;ll architect the perfect integration strategy — from simple webhooks to complex microservices.
                        </p>
                        <div className="flex flex-col gap-6 w-full max-w-2xl mt-8">
                            {[
                                {
                                    number: "1",
                                    title: "Zero Downtime",
                                    desc: "Seamless deployments with zero service interruption.",
                                    color: "bg-[#f43f5e]",
                                    darkColor: "bg-[#9f1239]",
                                    textColor: "text-rose-600 dark:text-[#fb7185]",
                                    icon: <ZapIcon className="size-12 md:size-14" />,
                                },
                                {
                                    number: "2",
                                    title: "Auto-Scaling",
                                    desc: "APIs that scale automatically with your traffic.",
                                    color: "bg-[#0ea5e9]",
                                    darkColor: "bg-[#0369a1]",
                                    textColor: "text-sky-600 dark:text-[#38bdf8]",
                                    icon: <CloudIcon className="size-12 md:size-14" />,
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
                                    <div className={`absolute left-6 md:left-8 top-3 -bottom-5 w-[54px] ${item.color} shadow-2xl flex flex-col items-center pt-[5px] z-20`} style={{ borderRadius: '9999px 9999px 0 12px' }}>
                                        <div className="size-[44px] bg-white rounded-full flex items-center justify-center shadow-md">
                                            <span className="text-xl md:text-2xl font-black text-black">{item.number}</span>
                                        </div>
                                        <div className={`absolute bottom-0 left-full w-[10px] h-[18px] ${item.darkColor}`} style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }} />
                                    </div>
                                    <div className="pl-28 md:pl-32 pr-20 py-6 flex-1 flex flex-col justify-center h-full z-10 relative">
                                        <h4 className={`text-lg font-bold ${item.textColor} tracking-widest mb-1.5 uppercase`}>{item.title}</h4>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className={`absolute right-6 md:right-8 top-1/2 -translate-y-1/2 ${item.textColor} opacity-60 z-10`}>
                                        {item.icon}
                                    </div>
                                    <div className={`absolute right-4 w-24 h-24 ${item.color} rounded-full blur-[40px] opacity-10 pointer-events-none`} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-rose-500/5 blur-2xl rounded-3xl pointer-events-none" />
                        <LeadForm
                            title="Request API Consultation"
                            description="Describe your integration requirements."
                        />
                    </div>
                </div>
            </section>

            {/* ── Capabilities Section ── */}
            <section id="capabilities" className="py-24 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                            Integration <span className="text-rose-500">Capabilities</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                            From simple webhook handlers to complex distributed systems — we connect everything.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left: Visual grid */}
                        <motion.div
                            className="relative w-full flex items-center justify-center"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-red-500/20 blur-[80px] rounded-full pointer-events-none" />
                            <div className="relative w-full max-w-lg grid grid-cols-2 gap-4 z-10">
                                {[
                                    { icon: <ServerIcon className="size-8 text-rose-400" />, title: "RESTful APIs", desc: "Industry-standard HTTP APIs with OpenAPI specs", color: "#f43f5e" },
                                    { icon: <NetworkIcon className="size-8 text-sky-400" />, title: "GraphQL", desc: "Flexible queries with type-safe schemas", color: "#0ea5e9" },
                                    { icon: <PlugIcon className="size-8 text-amber-400" />, title: "Webhooks", desc: "Event-driven notifications and callbacks", color: "#f59e0b" },
                                    { icon: <RefreshCwIcon className="size-8 text-purple-400" />, title: "WebSockets", desc: "Real-time bidirectional communication", color: "#8b5cf6" },
                                    { icon: <ShieldCheckIcon className="size-8 text-green-400" />, title: "OAuth & JWT", desc: "Secure authentication and authorization", color: "#10b981" },
                                    { icon: <CloudIcon className="size-8 text-orange-400" />, title: "Cloud Services", desc: "AWS, GCP & Azure integration expertise", color: "#f97316" },
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
                            {apiFeatures.map((feature, idx) => {
                                const colors = apiFeatureColors[idx % apiFeatureColors.length];
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        className="relative flex flex-row items-center bg-white/5 border border-white/10 rounded-2xl overflow-visible group hover:bg-white/[0.08] transition-all duration-500"
                                    >
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors.bar} rounded-l-2xl`} />
                                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10" style={{ width: '48px', height: '48px' }}>
                                            <div style={{ position: 'absolute', left: '-12px', top: '-12px', width: '72px', height: '72px', borderRadius: '50%', border: `3px solid ${colors.hex}`, opacity: 0.7, boxShadow: `0 0 10px 2px ${colors.hex}80`, clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
                                            <div style={{ position: 'absolute', left: '-6px', top: '-6px', width: '60px', height: '60px', borderRadius: '50%', border: `3px solid ${colors.hex}`, opacity: 0.9, boxShadow: `0 0 8px 2px ${colors.hex}60`, clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
                                            <div className={`size-12 rounded-full ${colors.bar} flex items-center justify-center text-lg font-black text-black dark:text-white shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                                                {idx + 1}
                                            </div>
                                        </div>
                                        <div className="flex-grow py-4 pl-10 pr-2 text-left">
                                            <h3 className={`text-xl font-bold mb-1 ${colors.text}`}>{feature.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-400 text-sm font-semibold leading-relaxed">{feature.description}</p>
                                        </div>
                                        <div className="pr-5 shrink-0 flex items-center justify-center">
                                            <div className={`size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${colors.text} opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}>
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <div className={`absolute right-0 top-0 bottom-0 w-1 ${colors.bar} opacity-0 group-hover:opacity-100 transition-opacity rounded-r-2xl`} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── What We Integrate Section ── */}
            <section className="py-24 px-4 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold mb-8">
                            Systems We <span className="text-rose-400">Integrate</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            No matter how complex your stack, we can connect it. Our team has deep experience integrating with hundreds of platforms and services.
                        </p>
                        <div className="flex flex-col gap-5 mb-8">
                            {[
                                { icon: <PlugIcon className="size-8 text-gray-400 stroke-1" />, text: "Payment gateways: Stripe, Razorpay, PayPal & more", gradient: "from-[#f43f5e] to-[#e11d48]" },
                                { icon: <DatabaseIcon className="size-8 text-gray-400 stroke-1" />, text: "CRM & ERP: Salesforce, HubSpot, Zoho, SAP", gradient: "from-[#0ea5e9] to-[#0284c7]" },
                                { icon: <CloudIcon className="size-8 text-gray-400 stroke-1" />, text: "Cloud: AWS Lambda, GCP Functions, Azure Apps", gradient: "from-[#f59e0b] to-[#d97706]" },
                                { icon: <ServerIcon className="size-8 text-gray-400 stroke-1" />, text: "Messaging: Twilio, SendGrid, Firebase, OneSignal", gradient: "from-[#8b5cf6] to-[#7c3aed]" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[1.5rem] py-4 px-6 flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/10 transition-all duration-300 relative group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="flex items-center justify-center w-16 shrink-0">
                                        <span className="text-gray-400 text-4xl font-light leading-none group-hover:text-black dark:text-white transition-colors">0{i + 1}</span>
                                    </div>
                                    <div className={`w-2.5 h-16 rounded-full bg-gradient-to-b ${item.gradient} shrink-0 mx-6 shadow-md`} />
                                    <div className="shrink-0 mr-6">{item.icon}</div>
                                    <div className="text-gray-800 dark:text-gray-300 group-hover:text-black dark:text-white transition-colors text-sm font-medium leading-relaxed max-w-[200px] md:max-w-xs">
                                        {item.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <GradientButton href="/contact">Discuss Your Integration</GradientButton>
                    </motion.div>

                    {/* Right: API stats */}
                    <motion.div
                        className="relative w-full flex flex-col gap-5"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {[
                            { stat: "500+", label: "API Endpoints Deployed", color: "#f43f5e", icon: "🔗" },
                            { stat: "99.99%", label: "API Uptime Guaranteed", color: "#0ea5e9", icon: "⚡" },
                            { stat: "50+", label: "Third-Party Integrations", color: "#f59e0b", icon: "🔌" },
                            { stat: "<50ms", label: "Average Response Time", color: "#8b5cf6", icon: "🚀" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300 flex items-center gap-6"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ boxShadow: `0 4px 20px ${item.color}18` }}
                            >
                                <span className="text-3xl">{item.icon}</span>
                                <div>
                                    <p className="text-3xl font-black" style={{ color: item.color }}>{item.stat}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{item.label}</p>
                                </div>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-red-500/5 rounded-2xl" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-400/30 to-transparent" />

                    <div className="relative z-10 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-500">connect everything</span>?
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                                Let us architect the integration layer that powers your business.
                            </p>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <Link
                                href="/contact"
                                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-red-500 text-white text-sm font-bold shadow-[0_0_20px_rgba(244,63,94,0.25)] hover:scale-105 transition-all"
                            >
                                Get Started
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
