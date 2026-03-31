'use client';

import { motion } from "framer-motion";
import {
    ShoppingCartIcon,
    CreditCardIcon,
    PackageIcon,
    TruckIcon,
    BarChart3Icon,
    SearchIcon,
    ShieldCheckIcon,
    ZapIcon,
    ArrowRightIcon,
    TagIcon,
    UsersIcon,
    GlobeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "@/components/gradient-button";
import LeadForm from "@/components/lead-form";
import Testimonials from "@/sections/testimonials";
import WorkflowSteps from "@/sections/workflow-steps";
import FaqSection from "@/sections/faq-section";
import TrustStrip from "@/sections/trust-strip";

const ecomFeatureColors = [
    { bar: "bg-[#10b981]", text: "text-[#10b981]", hex: "#10b981" },
    { bar: "bg-[#f59e0b]", text: "text-[#f59e0b]", hex: "#f59e0b" },
    { bar: "bg-[#8b5cf6]", text: "text-[#8b5cf6]", hex: "#8b5cf6" },
    { bar: "bg-[#ef4444]", text: "text-[#ef4444]", hex: "#ef4444" },
];

const ecomFeatures = [
    {
        title: "Custom Storefront Design",
        description: "Stunning, conversion-optimized storefronts that reflect your brand identity and drive sales.",
        icon: <ShoppingCartIcon className="size-6" />,
    },
    {
        title: "Secure Payment Integration",
        description: "Multi-gateway payment processing with PCI-compliant security for Stripe, Razorpay, PayPal and more.",
        icon: <CreditCardIcon className="size-6" />,
    },
    {
        title: "Inventory & Order Management",
        description: "Real-time inventory tracking, automated order workflows, and smart stock alerts to keep operations smooth.",
        icon: <PackageIcon className="size-6" />,
    },
    {
        title: "Shipping & Logistics",
        description: "Integrated shipping calculators, multi-carrier support, and real-time tracking for seamless delivery.",
        icon: <TruckIcon className="size-6" />,
    },
];

export default function ECommerceContent() {
    return (
        <main className="min-h-screen selection:bg-emerald-500/30">
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
                        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-emerald-500 dark:text-emerald-400 mb-6 inline-block shadow-sm">
                            E-Commerce Solutions
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
                            E-Commerce That{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                                Converts
                            </span>
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            We build high-performance online stores that turn visitors into customers. From product catalogs to checkout flows, every pixel is designed for maximum conversion and seamless user experience.
                        </p>

                        {/* Highlights Row */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400">
                                <ShoppingCartIcon className="size-4" /> Shopify
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 text-purple-500 dark:text-purple-400">
                                <PackageIcon className="size-4" /> WooCommerce
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 text-orange-500 dark:text-orange-400">
                                <GlobeIcon className="size-4" /> Custom Builds
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-lg shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Launch Your Store
                                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#features"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/15 font-semibold text-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                View Features
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-[80px] rounded-full" />

                        {/* Floating e-commerce elements */}
                        <div className="relative z-10 flex flex-col items-center justify-center gap-6 w-full max-w-md">
                            <div className="flex gap-6 justify-center">
                                {[
                                    { icon: <ShoppingCartIcon className="size-7 text-emerald-400" />, label: "Storefront", color: "#10b981" },
                                    { icon: <CreditCardIcon className="size-7 text-purple-400" />, label: "Payments", color: "#8b5cf6" },
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
                                className="bg-gradient-to-br from-emerald-500/20 to-teal-400/10 backdrop-blur-md border border-emerald-400/30 rounded-3xl p-8 flex flex-col items-center gap-3 w-56 shadow-2xl"
                                animate={{ scale: [1, 1.04, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="size-16 rounded-full bg-emerald-500/20 flex items-center justify-center shadow-inner">
                                    <TagIcon className="size-8 text-emerald-400" />
                                </div>
                                <p className="text-sm font-black text-gray-900 dark:text-white text-center">Sell Everywhere</p>
                                <div className="flex items-center gap-1.5">
                                    <span className="size-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-xs text-green-400 font-semibold">Multi-Channel</span>
                                </div>
                            </motion.div>

                            <div className="flex gap-6 justify-center">
                                {[
                                    { icon: <TruckIcon className="size-7 text-amber-400" />, label: "Shipping", color: "#f59e0b" },
                                    { icon: <BarChart3Icon className="size-7 text-rose-400" />, label: "Analytics", color: "#f43f5e" },
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
                                <div className="size-10 lg:size-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <BarChart3Icon className="size-5 lg:size-6 text-emerald-500" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[10px] lg:text-xs text-black dark:text-gray-300 font-bold uppercase tracking-wider">Conversion</p>
                                    <p className="text-sm lg:text-base font-black text-black dark:text-white">+340% Avg</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute -left-2 md:-left-10 bottom-[10%] glass p-3 lg:p-4 rounded-2xl border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md z-20 hidden md:block"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="size-10 lg:size-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <ShieldCheckIcon className="size-5 lg:size-6 text-purple-500" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[10px] lg:text-xs text-black dark:text-gray-300 font-bold uppercase tracking-wider">Security</p>
                                    <p className="text-sm lg:text-base font-black text-black dark:text-white">PCI Compliant</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <TrustStrip />

            {/* ── Lead Form Section ── */}
            <section id="quote" className="py-24 px-4 bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-slate-900/50 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            Ready to Sell <br />
                            <span className="text-emerald-500">Online?</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 text-lg mb-12">
                            Whether you&apos;re launching your first store or scaling to millions in revenue, we&apos;ll build the e-commerce engine behind your growth.
                        </p>
                        <div className="flex flex-col gap-6 w-full max-w-2xl mt-8">
                            {[
                                {
                                    number: "1",
                                    title: "Conversion Focused",
                                    desc: "Every element designed to maximize sales.",
                                    color: "bg-[#10b981]",
                                    darkColor: "bg-[#065f46]",
                                    textColor: "text-emerald-600 dark:text-[#34d399]",
                                    icon: <BarChart3Icon className="size-12 md:size-14" />,
                                },
                                {
                                    number: "2",
                                    title: "Secure Checkout",
                                    desc: "Bank-grade security for every transaction.",
                                    color: "bg-[#8b5cf6]",
                                    darkColor: "bg-[#5b21b6]",
                                    textColor: "text-purple-600 dark:text-[#a78bfa]",
                                    icon: <CreditCardIcon className="size-12 md:size-14" />,
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
                        <div className="absolute -inset-4 bg-emerald-500/5 blur-2xl rounded-3xl pointer-events-none" />
                        <LeadForm
                            title="Get Your Store Quote"
                            description="Tell us about your e-commerce vision."
                        />
                    </div>
                </div>
            </section>

            {/* ── Features Section ── */}
            <section id="features" className="py-24 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                            E-Commerce <span className="text-emerald-500">Capabilities</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                            From product listing to post-purchase experience — we build every piece of your online selling machine.
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-400/20 blur-[80px] rounded-full pointer-events-none" />
                            <div className="relative w-full max-w-lg grid grid-cols-2 gap-4 z-10">
                                {[
                                    { icon: <ShoppingCartIcon className="size-8 text-emerald-400" />, title: "Product Catalog", desc: "Unlimited products with variants, filters & search", color: "#10b981" },
                                    { icon: <CreditCardIcon className="size-8 text-purple-400" />, title: "Multi-Gateway", desc: "Stripe, Razorpay, PayPal & 50+ gateways", color: "#8b5cf6" },
                                    { icon: <UsersIcon className="size-8 text-amber-400" />, title: "Customer Portal", desc: "Order history, wishlists & account management", color: "#f59e0b" },
                                    { icon: <TruckIcon className="size-8 text-rose-400" />, title: "Shipping API", desc: "Real-time rates, tracking & label generation", color: "#f43f5e" },
                                    { icon: <SearchIcon className="size-8 text-cyan-400" />, title: "E-Commerce SEO", desc: "Product schema, sitemaps & optimized URLs", color: "#06b6d4" },
                                    { icon: <BarChart3Icon className="size-8 text-orange-400" />, title: "Sales Dashboard", desc: "Revenue analytics, funnel tracking & reports", color: "#f97316" },
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
                            {ecomFeatures.map((feature, idx) => {
                                const colors = ecomFeatureColors[idx % ecomFeatureColors.length];
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

            {/* ── Tech & Platform Section ── */}
            <section className="py-24 px-4 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold mb-8">
                            Platforms We <span className="text-emerald-400">Excel In</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Whether you need a Shopify store up in days or a fully custom marketplace — we&apos;ve got the expertise to deliver at scale.
                        </p>
                        <div className="flex flex-col gap-5 mb-8">
                            {[
                                { icon: <ZapIcon className="size-8 text-gray-400 stroke-1" />, text: "Shopify & Shopify Plus for fast, reliable storefronts", gradient: "from-[#10b981] to-[#059669]" },
                                { icon: <PackageIcon className="size-8 text-gray-400 stroke-1" />, text: "WooCommerce for WordPress-powered flexibility", gradient: "from-[#8b5cf6] to-[#7c3aed]" },
                                { icon: <GlobeIcon className="size-8 text-gray-400 stroke-1" />, text: "Custom headless e-commerce with Next.js & Medusa", gradient: "from-[#f97316] to-[#ea580c]" },
                                { icon: <SearchIcon className="size-8 text-gray-400 stroke-1" />, text: "Marketplace solutions with multi-vendor support", gradient: "from-[#ef4444] to-[#dc2626]" },
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
                        <GradientButton href="/contact">Start Your E-Commerce Project</GradientButton>
                    </motion.div>

                    {/* Right: Stats */}
                    <motion.div
                        className="relative w-full flex flex-col gap-5"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {[
                            { stat: "200+", label: "Online Stores Launched", color: "#10b981", icon: "🛒" },
                            { stat: "₹50Cr+", label: "Revenue Generated for Clients", color: "#f59e0b", icon: "💰" },
                            { stat: "99.9%", label: "Uptime on All Stores", color: "#8b5cf6", icon: "⚡" },
                            { stat: "<2s", label: "Average Page Load Time", color: "#ef4444", icon: "🚀" },
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
                                    <p className="text-3xl font-black text-gray-900 dark:text-white" style={{ color: item.color }}>{item.stat}</p>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5 rounded-2xl" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

                    <div className="relative z-10 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">online store</span> is waiting
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                                From first product to first million — we build stores that scale.
                            </p>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <Link
                                href="/contact"
                                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-black text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:scale-105 transition-all"
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
