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
                    alt="Background"
                    fill
                    className="object-cover opacity-90 grayscale brightness-50"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-6 pb-6 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-purple-400 mb-6 inline-block">
                            Premium Mobile Engineering
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
                            Crafting Experiences for the Palm of Your Hand
                        </h1>
                        <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                            We build native and cross-platform mobile applications that users love. From sleek startups to global brands, we deliver mobile-first digital transformation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-lg shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Start Your App
                                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="#capabilities"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/15 font-semibold text-lg hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                View Capabilities
                            </Link>
                        </div>
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
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mobile <span className="text-blue-400">Stack & Expertise</span></h2>
                        <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">Leveraging modern frameworks to build secure, offline-first, and highly responsive mobile applications.</p>
                    </div>

                    <div className="flex flex-col gap-5 max-w-3xl mx-auto">
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
                                        <h3 className={`text-base font-bold mb-1 ${colors.text}`}>{feature.title}</h3>
                                        <p className="text-gray-700 dark:text-gray-400 text-xs leading-relaxed">{feature.description}</p>
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
            </section>

            {/* Tech & Features Section */}
            <section className="py-24 px-4 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-square order-2 lg:order-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/assets/man.jpg"
                            alt="Mobile Development"
                            fill
                            className="object-cover opacity-90 brightness-75 transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10 p-6 glass rounded-2xl border border-white/20">
                            <p className="text-xl font-bold italic">"Mobile is no longer the second screen; it's the primary experience."</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-3xl font-semibold mb-8">Building for the <span className="text-purple-400">Modern User</span></h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            A great app is more than just a screen; it's a seamless part of your user's life. We focus on performance, accessibility, and delight.
                        </p>
                        <div className="flex flex-col gap-5 mb-8">
                            {[
                                {
                                    icon: <FingerprintIcon className="size-8 text-gray-400 stroke-1" />,
                                    text: "Biometric security and data encryption",
                                    gradient: "from-[#a855f7] to-[#d946ef]"
                                },
                                {
                                    icon: <CpuIcon className="size-8 text-gray-400 stroke-1" />,
                                    text: "Highly optimized native performance",
                                    gradient: "from-[#0ea5e9] to-[#14b8a6]"
                                },
                                {
                                    icon: <CloudIcon className="size-8 text-gray-400 stroke-1" />,
                                    text: "Offline-first sync and cloud backup",
                                    gradient: "from-[#f97316] to-[#eab308]"
                                },
                                {
                                    icon: <PlayIcon className="size-8 text-gray-400 stroke-1" />,
                                    text: "Continuous OTA updates and deployment",
                                    gradient: "from-[#dc2626] to-[#991b1b]"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[1.5rem] py-4 px-6 flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/10 transition-all duration-300 relative group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {/* Left side: Number */}
                                    <div className="flex items-center justify-center w-16 shrink-0">
                                        <span className="text-gray-400 text-4xl font-light leading-none group-hover:text-black dark:text-white transition-colors">0{i + 1}</span>
                                    </div>

                                    {/* Vertical Bar */}
                                    <div className={`w-2.5 h-16 rounded-full bg-gradient-to-b ${item.gradient} shrink-0 mx-6 shadow-md`} />

                                    {/* Icon */}
                                    <div className="shrink-0 mr-6">
                                        {item.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="text-gray-800 dark:text-gray-300 group-hover:text-black dark:text-white transition-colors text-sm font-medium leading-relaxed max-w-[200px] md:max-w-xs">
                                        {item.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <GradientButton href="/contact">Book a Mobile Strategy Call</GradientButton>
                    </motion.div>
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
