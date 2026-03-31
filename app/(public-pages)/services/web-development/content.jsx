'use client';

import { motion } from "framer-motion";
import {
    CodeIcon,
    GlobeIcon,
    LayersIcon,
    ShieldCheckIcon,
    ZapIcon,
    BarChart3Icon,
    SearchIcon,
    RocketIcon,
    ArrowRightIcon,
    SmartphoneIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "@/components/gradient-button";
import LeadForm from "@/components/lead-form";
import Testimonials from "@/sections/testimonials";
import WorkflowSteps from "@/sections/workflow-steps";
import FaqSection from "@/sections/faq-section";
import TrustStrip from "@/sections/trust-strip";

const webFeatureColors = [
    { bar: "bg-[#2db1c4]", text: "text-[#2db1c4]", hex: "#2db1c4" },
    { bar: "bg-[#eb6361]", text: "text-[#eb6361]", hex: "#eb6361" },
    { bar: "bg-[#8cb342]", text: "text-[#8cb342]", hex: "#8cb342" },
    { bar: "bg-[#f39221]", text: "text-[#f39221]", hex: "#f39221" },
];

const webFeatures = [
    {
        title: "Custom Web Applications",
        description: "Scaleable, robust and tailor-made web applications designed to solve complex business problems.",
        icon: <CodeIcon className="size-6" />
    },
    {
        title: "E-Commerce Solutions",
        description: "Seamless online shopping experiences with secure payment gateways and inventory management.",
        icon: <GlobeIcon className="size-4" />
    },
    {
        title: "API Development & Integration",
        description: "Connecting your systems together with high-performance APIs and third-party services.",
        icon: <LayersIcon className="size-6" />
    },
    {
        title: "Full-Stack Security",
        description: "Enterprise-grade security protocols ensuring your and your customers data remains safe.",
        icon: <ShieldCheckIcon className="size-6" />
    }
];

export default function WebDevelopmentContent() {
    return (
        <main className="min-h-screen selection:bg-orange-500/30">
            {/* Background elements - Harmonized with Home/Services */}
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
            <section className="relative pt-12 lg:pt-20 pb-16 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="text-center lg:text-left z-10"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-blue-500 dark:text-blue-400 mb-6 inline-block shadow-sm">
                            Enterprise Web Solutions
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
                            Custom Web Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Experts</span>
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            We build fast, secure, and highly scalable web applications that drive growth. From startup MVPs to enterprise-level systems, we deliver digital excellence.
                        </p>

                        {/* Highlights Row */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1.5 text-blue-500 dark:text-blue-400"><CodeIcon className="size-4" /> Next.js & React</span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 text-purple-500 dark:text-purple-400"><LayersIcon className="size-4" /> Node & Python</span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 text-rose-500 dark:text-rose-400"><GlobeIcon className="size-4" /> Scalable MVP</span>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Link href="/contact"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_45px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Start Your Project
                                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="#features"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/15 font-semibold text-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                Explore Services
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-[80px] rounded-full" />

                        {/* Main Image Container */}
                        <div className="relative w-full flex items-center justify-center group z-10">
                            {/* User will add their own image here */}
                            <Image
                                src="/assets/webbb.png"
                                alt="Premium Web Development"
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
                                <div className="size-10 lg:size-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <CodeIcon className="size-5 lg:size-6 text-blue-500" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[10px] lg:text-xs text-black dark:text-gray-300 font-bold uppercase tracking-wider">Frontend</p>
                                    <p className="text-sm lg:text-base font-black text-black dark:text-white">React & Next.js</p>
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
                                    <ShieldCheckIcon className="size-5 lg:size-6 text-purple-500" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[10px] lg:text-xs text-black dark:text-gray-300 font-bold uppercase tracking-wider">Architecture</p>
                                    <p className="text-sm lg:text-base font-black text-black dark:text-white">Secure & Scalable</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <TrustStrip />

            {/* Lead Form Section - Moved to top for visibility */}
            <section id="quote" className="py-24 px-4 bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-slate-900/50 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build Your <br /><span className="text-orange-500">Web Presence?</span></h2>
                        <p className="text-gray-700 dark:text-gray-400 text-lg mb-12">
                            Fill out the form to get a detailed estimate for your project. Our experts will get back to you within 24 hours.
                        </p>
                        <div className="flex flex-col gap-6 w-full max-w-2xl mt-8">
                            {[
                                {
                                    number: "1",
                                    title: "Technical Expertise",
                                    desc: "Verified seniors working on your code.",
                                    color: "bg-[#e11d48]",
                                    darkColor: "bg-[#9f1239]",
                                    textColor: "text-rose-600 dark:text-[#fb7185]",
                                    icon: <CodeIcon className="size-12 md:size-14" />,
                                },
                                {
                                    number: "2",
                                    title: "Global Standards",
                                    desc: "Delivering world-class quality for every pixel.",
                                    color: "bg-[#4f46e5]",
                                    darkColor: "bg-[#312e81]",
                                    textColor: "text-indigo-600 dark:text-[#818cf8]",
                                    icon: <GlobeIcon className="size-12 md:size-14" />,
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
                                        <h4 className={`text-lg font-bold ${item.textColor} tracking-widest mb-1.5 uppercase`}>{item.title}</h4>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed">{item.desc}</p>
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
                        <div className="absolute -inset-4 bg-orange-500/5 blur-2xl rounded-3xl pointer-events-none" />
                        <LeadForm
                            title="Request a Detailed Quote"
                            description="Tell us about your web project goals."
                        />
                    </div>
                </div>
            </section>

            {/* Deep Dive Features */}
            <section id="features" className="py-24 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6">Our Web Development <span className="text-blue-500">Expertise</span></h2>
                        <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">Specialized solutions tailored to your specific industry needs, using the latest tech stack to ensure performance and longevity.</p>
                    </div>

                    {/* Two-column layout: image left, features right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left: Side Image */}
                        <motion.div
                            className="relative w-full flex items-center justify-center"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />

                            <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group z-10">
                                <Image
                                    src="/assets/Web Development Expertise2.png"
                                    alt="Our Web Development Expertise"
                                    width={700}
                                    height={600}
                                    quality={100}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </motion.div>

                        {/* Right: Feature Cards */}
                        <div className="flex flex-col gap-5 ml-6">
                            {webFeatures.map((feature, idx) => {
                                const colors = webFeatureColors[idx % webFeatureColors.length];
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

            {/* Content & Tech Stack Section */}
            <section className="py-24 px-4 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold mb-8">Modern Tech Stack for <span className="text-blue-400">Superior Results</span></h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            At Reinsoft, we don't just write code; we architect solutions. We leverage the most advanced technologies to ensure your web application is built for the future.
                        </p>
                        <div className="flex flex-col gap-5 mb-8">
                            {[
                                {
                                    icon: <ZapIcon className="size-8 text-gray-400 stroke-1" />,
                                    text: "Performance-first approach with Next.js and React",
                                    gradient: "from-[#a855f7] to-[#d946ef]"
                                },
                                {
                                    icon: <BarChart3Icon className="size-8 text-gray-400 stroke-1" />,
                                    text: "Scalable backend systems with Node.js and Python",
                                    gradient: "from-[#0ea5e9] to-[#14b8a6]"
                                },
                                {
                                    icon: <SearchIcon className="size-8 text-gray-400 stroke-1" />,
                                    text: "Advanced SEO optimization out of the box",
                                    gradient: "from-[#f97316] to-[#eab308]"
                                },
                                {
                                    icon: <RocketIcon className="size-8 text-gray-400 stroke-1" />,
                                    text: "Automated deployment and continuous integration",
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
                        <GradientButton href="/contact">Get a Tech Consultation</GradientButton>
                    </motion.div>

                    <motion.div
                        className="relative w-full flex items-center justify-center lg:h-[600px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Glow Behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />

                        {/* Main Image Container */}
                        <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group z-10 bg-white/5 backdrop-blur-sm">
                            <Image
                                src="/assets/webb.jpeg"
                                alt="Modern Tech Stack"
                                width={1200}
                                height={900}
                                quality={100}
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl p-4"
                                priority
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <WorkflowSteps />

            <Testimonials />

            {/* Compact Web Development CTA */}
            <section className="relative mt-16 mb-10 px-4">
                <motion.div
                    className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 rounded-2xl" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

                    <div className="relative z-10 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">scale your web</span> presence
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                                From SaaS platforms to high-performance apps — we build what matters.
                            </p>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <Link
                                href="/contact"
                                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:scale-105 transition-all"
                            >
                                Start Project
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

            {/* Hire Web Developer CTA Strip */}
            <section className="py-16 px-4 bg-white/5 dark:bg-black/20">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Need to <span className="text-blue-400">Hire a Dedicated Web Developer?</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
                        Looking for a full-stack engineer to join your team? We have pre-vetted developers ready to onboard in 48 hours.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { label: "Hire Full Stack Developer (USA)", href: "/hire-full-stack-developers-usa" },
                            { label: "Hire Full Stack Developer (UK)", href: "/hire-full-stack-developers-uk" },
                            { label: "Hire Full Stack Developer (Australia)", href: "/hire-full-stack-developers-australia" },
                        ].map((cta, i) => (
                            <Link
                                key={i}
                                href={cta.href}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-blue-500/30 text-blue-400 bg-white/5 hover:bg-white/10 transition-all"
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
