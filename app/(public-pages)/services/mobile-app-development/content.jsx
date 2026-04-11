'use client';

import { motion } from "framer-motion";
import { SmartphoneIcon, AppleIcon, PlayIcon, LayoutIcon, Share2Icon, FingerprintIcon, CpuIcon, CloudIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "@/components/gradient-button";
import LeadForm from "@/components/lead-form";
import Testimonials from "@/sections/testimonials";
import WorkflowSteps from "@/sections/workflow-steps";
import FaqSection from "@/sections/faq-section";
import TrustStrip from "@/sections/trust-strip";

const mobileFeatureColors = [
    { bar: "bg-[#2db1c4]", text: "text-[#2db1c4]", hex: "#2db1c4" },
    { bar: "bg-[#b677e1]", text: "text-[#b677e1]", hex: "#b677e1" },
    { bar: "bg-[#f39221]", text: "text-[#f39221]", hex: "#f39221" },
    { bar: "bg-[#8cb342]", text: "text-[#8cb342]", hex: "#8cb342" },
];

const mobileFeatures = [
    {
        title: "Native iOS Development",
        description: "High-performance applications built specifically for the Apple ecosystem using Swift and SwiftUI.",
        icon: <SmartphoneIcon className="size-6" />
    },
    {
        title: "Android Excellence",
        description: "Scalable and responsive Android apps built with Kotlin to reach millions of users globally.",
        icon: <PlayIcon className="size-4" />
    },
    {
        title: "Cross-Platform with Flutter",
        description: "Beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
        icon: <LayoutIcon className="size-5" />
    },
    {
        title: "App Store Optimization",
        description: "End-to-end support for publishing and optimizing your app for maximum visibility and downloads.",
        icon: <Share2Icon className="size-6" />
    }
];

export default function MobileAppDevelopmentContent() {
    return (
        <main className="min-h-screen selection:bg-purple-500/30">
            {/* Background elements - Harmonized */}
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

            {/* Background Image - Harmonized */}
            <div className="fixed inset-0 -z-30 pointer-events-none hidden dark:block">
                <Image
                    src="/assets/Services.jpg"
                    alt="Reinsoft IT Solutions - Mobile App Development Services Background"
                    fill
                    className="object-cover opacity-90 grayscale brightness-50"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
            </div>

            {/* Hero Section */}
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
                            Premium Mobile Engineering
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
                            Mobile App Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Experts</span>
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            We build native and cross-platform mobile applications that users love. From sleek startups to global brands, we deliver mobile-first digital transformation.
                        </p>

                        {/* Highlights Row */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1.5 text-blue-500 dark:text-blue-400"><SmartphoneIcon className="size-4" /> Flutter</span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 text-purple-500 dark:text-purple-400"><CpuIcon className="size-4" /> React Native</span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 text-rose-500 dark:text-rose-400"><PlayIcon className="size-4" /> iOS & Android</span>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Link href="/contact"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-lg shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Start Your App
                                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="#capabilities"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/15 font-semibold text-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                View Capabilities
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="relative z-10 w-full lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0"
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Glow Behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-[80px] rounded-full" />

                        {/* Main Image Container */}
                        <div className="relative w-full flex items-center justify-center group z-10">
                            <Image
                                src="/assets/app_hero.png"
                                alt="Premium iOS & Android App Development by Reinsoft IT Solutions"
                                width={1200}
                                height={900}
                                quality={100}
                                className="w-full max-w-[600px] xl:max-w-[700px] h-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                                priority
                            />
                        </div>

                        {/* Floating elements for modern look */}
                        <motion.div
                            className="absolute -right-2 md:-right-12 xl:-right-16 top-[15%] lg:top-1/4 glass p-3 lg:p-4 rounded-2xl border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md z-20 hidden md:block"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="size-10 lg:size-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <SmartphoneIcon className="size-5 lg:size-6 text-emerald-500" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[10px] lg:text-xs text-black dark:text-gray-300 font-bold uppercase tracking-wider">Platform</p>
                                    <p className="text-sm lg:text-base font-black text-black dark:text-white">iOS & Android</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute -left-2 md:-left-10 xl:-left-12 bottom-[15%] lg:bottom-1/4 glass p-3 lg:p-4 rounded-2xl border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md z-20 hidden md:block"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="size-10 lg:size-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <CpuIcon className="size-5 lg:size-6 text-purple-500" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[10px] lg:text-xs text-black dark:text-gray-300 font-bold uppercase tracking-wider">Performance</p>
                                    <p className="text-sm lg:text-base font-black text-black dark:text-white">Native Speed</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <TrustStrip />

            {/* Lead Form Section - Moved to top for visibility */}
            <section id="quote" className="py-24 px-4 bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-slate-900/50 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build Your <br /><span className="text-blue-400">Mobile Empire?</span></h2>
                        <p className="text-gray-700 dark:text-gray-400 text-lg mb-12">
                            Our team is ready to guide you from wireframe to launch. Let's create something extraordinary together.
                        </p>
                        <div className="flex flex-col gap-6 w-full max-w-2xl mt-8">
                            {[
                                {
                                    number: "1",
                                    title: "Device Agnostic",
                                    desc: "Perfect performance on iOS and Android.",
                                    color: "bg-[#0ea5e9]",
                                    darkColor: "bg-[#0369a1]",
                                    textColor: "text-sky-600 dark:text-[#38bdf8]",
                                    icon: <SmartphoneIcon className="size-12 md:size-14" />,
                                },
                                {
                                    number: "2",
                                    title: "Next-Gen Tech",
                                    desc: "Using Flutter and React Native for split-second speed.",
                                    color: "bg-[#8b5cf6]",
                                    darkColor: "bg-[#5b21b6]",
                                    textColor: "text-purple-600 dark:text-[#a78bfa]",
                                    icon: <CpuIcon className="size-12 md:size-14" />,
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center shadow-lg h-[110px] mb-8`}
                                >
                                    {/* Ribbon */}
                                    <div className={`absolute left-6 md:left-8 top-3 -bottom-5 w-[54px] ${item.color} shadow-2xl flex flex-col items-center pt-[5px] z-20`} style={{ borderRadius: '9999px 9999px 0 12px' }}>
                                        <div className="size-[44px] bg-white rounded-full flex items-center justify-center shadow-md">
                                            <span className={`text-xl md:text-2xl font-black text-black`}>{item.number}</span>
                                        </div>
                                        {/* Fold Triangle */}
                                        <div className={`absolute bottom-0 left-full w-[10px] h-[18px] ${item.darkColor}`} style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }} />
                                    </div>

                                    {/* Content */}
                                    <div className="pl-28 md:pl-32 pr-20 py-6 flex-1 flex flex-col justify-center h-full z-10 relative">
                                        <h4 className={`text-2xl font-bold ${item.textColor} tracking-widest mb-1.5 uppercase`}>{item.title}</h4>
                                        <p className="text-gray-700 dark:text-gray-300 text-base font-medium leading-relaxed">{item.desc}</p>
                                    </div>

                                    {/* Original Icon */}
                                    <div className={`absolute right-6 md:right-8 top-1/2 -translate-y-1/2 ${item.textColor} opacity-60 z-10`}>
                                        {item.icon}
                                    </div>

                                    {/* Subtle glowing accent behind icon */}
                                    <div className={`absolute right-4 w-24 h-24 ${item.color} rounded-full blur-[40px] opacity-10 pointer-events-none`} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-blue-500/5 blur-2xl rounded-3xl pointer-events-none" />
                        <LeadForm
                            title="Request a Mobile Quote"
                            description="Share your app vision with us."
                        />
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section id="capabilities" className="py-24 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 lg:mb-20">
                        <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-bold text-blue-500 mb-4 inline-block shadow-sm">
                            Core Technologies
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">Our Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Stack & Expertise</span></h2>
                        <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Leveraging modern frameworks to build secure, offline-first, and highly responsive mobile applications.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image Container */}
                        <motion.div
                            className="relative w-full group flex items-center justify-center order-2 lg:order-1"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image
                                src="/assets/stack_image.png"
                                alt="Mobile Development Tech Stack - Flutter, React Native, iOS & Android - Reinsoft IT Solutions"
                                width={1200}
                                height={1200}
                                quality={100}
                                unoptimized
                                className="w-full max-w-[500px] xl:max-w-[700px] h-auto object-contain transition-transform duration-700 group-hover:scale-105 z-10 drop-shadow-[0_30px_50px_rgba(0,0,0,0.3)]"
                            />
                        </motion.div>

                        {/* List */}
                        <div className="flex flex-col gap-5 w-full order-1 lg:order-2">
                            {mobileFeatures.map((feature, idx) => {
                                const colors = mobileFeatureColors[idx % mobileFeatureColors.length];
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        className="relative flex flex-row items-center bg-white/5 border border-white/10 rounded-2xl overflow-visible group hover:bg-white/[0.08] transition-all duration-500 ml-6"
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

            {/* Tech & Features Section - Premium Redesign */}
            <section className="py-32 px-4 relative overflow-hidden bg-[#0A0A0A] border-y border-white/5 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
                {/* Premium Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15),transparent_50%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 items-center relative z-10">

                    {/* Left App Images */}
                    <div className="lg:col-span-1 hidden lg:flex flex-col gap-12">
                        <motion.div
                            className="relative w-full group"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 to-transparent blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />
                                <Image
                                    src="/assets/app1.png"
                                    alt="Modern Mobile App User Interface Design"
                                    width={1000}
                                    height={2000}
                                    quality={100}
                                    className="w-full h-auto object-contain rounded-[2rem] transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative w-full group"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="absolute -inset-6 bg-gradient-to-r from-sky-500/20 to-transparent blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />
                                <Image
                                    src="/assets/app3.png"
                                    alt="Premium Dark Mode UI"
                                    width={1000}
                                    height={2000}
                                    quality={100}
                                    className="w-full h-auto object-contain rounded-[2rem] transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Center Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 flex flex-col items-center justify-center text-center"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-purple-300">Modern Era</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white leading-[1.15]">
                            Building for the<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-sky-300">Modern User</span>
                        </h2>
                        
                        <p className="text-gray-400 mb-12 leading-relaxed max-w-xl mx-auto text-lg font-medium">
                            A great app is more than just a screen; it's a seamless part of your user's life. We focus on absolute performance, flawless accessibility, and visceral delight.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-12">
                            {[
                                {
                                    icon: <FingerprintIcon className="size-6 text-purple-300 stroke-1" />,
                                    title: "Military-Grade Security",
                                    text: "Biometric auth & end-to-end encryption",
                                    gradient: "group-hover:from-purple-500/20 group-hover:to-fuchsia-500/20"
                                },
                                {
                                    icon: <CpuIcon className="size-6 text-sky-300 stroke-1" />,
                                    title: "Native Fluidity",
                                    text: "Highly optimized 120fps native performance",
                                    gradient: "group-hover:from-sky-500/20 group-hover:to-teal-500/20"
                                },
                                {
                                    icon: <CloudIcon className="size-6 text-orange-300 stroke-1" />,
                                    title: "Always Synced",
                                    text: "Offline-first architecture with cloud backup",
                                    gradient: "group-hover:from-orange-500/20 group-hover:to-amber-500/20"
                                },
                                {
                                    icon: <PlayIcon className="size-6 text-rose-300 stroke-1" />,
                                    title: "Zero Downtime",
                                    text: "Continuous OTA updates and deployment",
                                    gradient: "group-hover:from-rose-500/20 group-hover:to-red-500/20"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-left transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(168,85,247,0.3)]"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {/* Hover glow effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 ${item.gradient} blur-2xl`} />
                                    
                                    <div className="relative z-10">
                                        <div className="size-12 rounded-2xl mb-4 flex items-center justify-center bg-white/10 shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/20">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className="relative inline-block group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-sky-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
                            <Link href="/contact" className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A0A0A] border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-all">
                                Book a Mobile Strategy Call
                                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right App Images */}
                    <div className="lg:col-span-1 flex flex-row lg:flex-col gap-6 md:gap-12 mt-10 lg:mt-0">
                        <motion.div
                            className="relative w-full group"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="absolute -inset-6 bg-gradient-to-l from-fuchsia-500/20 to-transparent blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />
                                <Image
                                    src="/assets/app2.png"
                                    alt="Sleek Dark Mode Mobile App UI Design"
                                    width={1000}
                                    height={2000}
                                    quality={100}
                                    className="w-full h-auto object-contain rounded-[2rem] transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative w-full group"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="absolute -inset-6 bg-gradient-to-l from-sky-500/20 to-transparent blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />
                                <Image
                                    src="/assets/app4.png"
                                    alt="Premium Dark Mode Mobile App Dashboard UI"
                                    width={1000}
                                    height={2000}
                                    quality={100}
                                    className="w-full h-auto object-contain rounded-[2rem] transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            <WorkflowSteps />

            <Testimonials />

            {/* Compact Mobile Development CTA */}
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
                                Your next <span className="text-emerald-500 dark:text-emerald-400">mobile app</span> starts here
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                                Let's create an app your users will love — and your competitors will envy.
                            </p>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <Link
                                href="/contact"
                                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-black text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:scale-105 transition-all"
                            >
                                Get Estimate
                                <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="https://api.whatsapp.com/send?phone=918968369582"
                                target="_blank"
                                className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-semibold hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                            >
                                WhatsApp
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Hire Mobile Developer CTA Strip */}
            <section className="py-16 px-4 bg-white/5 dark:bg-black/20">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Looking to <span className="text-purple-400">Hire a Mobile Developer?</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
                        Hire pre-vetted Flutter and React Native developers who can onboard within 48 hours.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { label: "Hire Flutter Developer (USA)", href: "/hire-flutter-developers-usa" },
                            { label: "Hire Flutter Developer (UK)", href: "/hire-flutter-developers-uk" },
                            { label: "Hire Flutter Developer (Australia)", href: "/hire-flutter-developers-australia" },
                            { label: "Hire React Native Developer (USA)", href: "/hire-react-native-developers-usa" },
                            { label: "Hire React Native Developer (UK)", href: "/hire-react-native-developers-uk" },
                            { label: "Hire React Native Developer (Australia)", href: "/hire-react-native-developers-australia" },
                        ].map((cta, i) => (
                            <Link
                                key={i}
                                href={cta.href}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-purple-500/30 text-purple-400 bg-white/5 hover:bg-white/10 transition-all"
                            >
                                {cta.label} <ArrowRightIcon className="size-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection />
        </main>
    );
}
