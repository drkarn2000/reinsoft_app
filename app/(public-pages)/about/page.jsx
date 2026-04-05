'use client';

import { motion } from "framer-motion";
import { TargetIcon, HeartIcon, SparklesIcon, RocketIcon, ArrowRightIcon, UsersIcon, HandshakeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/sections/why-choose-us";
import AboutTechnologies from "@/sections/about-technologies";
import AboutServices from "@/sections/about-services";
import AboutProcess from "@/sections/about-process";
import IndustriesServe from "@/sections/industries-serve";
import Founders from "@/sections/founders";
import Team from "@/sections/team";
import BrandsSlider from "@/sections/brands-slider";

export default function AboutPage() {
    return (
        <main className="min-h-screen selection:bg-orange-500/30">
            {/* Background elements */}
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/80 dark:from-black/80 dark:via-black/40 dark:to-black/80 z-10" />
            </div>

            {/* Agency Intro Hero */}
            <section className="relative pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Centered Heading */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-blue-400 mb-6 inline-block">
                            About Reinsoft
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            We Build Digital Products That Matter
                        </h1>
                    </motion.div>

                    {/* Two-column: Description + Stats */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <motion.div
                            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 60 }}
                        >
                            <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed">
                                Reinsoft is a global software development agency dedicated to crafting innovative, high-performance digital solutions. We partner with businesses to turn bold ideas into reality.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
                                With 10+ years of experience and a passion for clean code, we combine technical expertise with creative design to deliver products that delight users and drive growth.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
                                {/* Primary CTA */}
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                                    style={{
                                        background: 'linear-gradient(135deg, #ff7a18 0%, #e8530a 100%)',
                                        boxShadow: '0 4px 20px rgba(255,122,24,0.4)'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 40px rgba(255,122,24,0.7), 0 0 60px rgba(255,122,24,0.25)'}
                                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,122,24,0.4)'}
                                >
                                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                    <span className="relative">Get in Touch</span>
                                    <svg className="relative size-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                                </Link>
                                {/* Secondary CTA */}
                                <Link
                                    href="/our-work"
                                    className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                                    style={{
                                        background: 'linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)',
                                        boxShadow: '0 4px 18px rgba(30,30,46,0.45)'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 40px rgba(30,30,46,0.7), 0 0 50px rgba(100,100,200,0.15)'}
                                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 18px rgba(30,30,46,0.45)'}
                                >
                                    <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                    <span className="relative">View Our Work</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right: Stats Grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-5"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 60 }}
                        >
                            {[
                                { value: "10+", label: "Years of Experience", color: "from-blue-500 to-cyan-400", iconBg: "bg-blue-500/15", border: "border-blue-500/20", glow: "0, 150, 255" },
                                { value: "200+", label: "Projects Delivered", color: "from-orange-500 to-amber-400", iconBg: "bg-orange-500/15", border: "border-orange-500/20", glow: "255, 122, 24" },
                                { value: "100%", label: "Client Satisfaction", color: "from-emerald-500 to-green-400", iconBg: "bg-emerald-500/15", border: "border-emerald-500/20", glow: "16, 185, 129" },
                                { value: "24/7", label: "Dedicated Support", color: "from-purple-500 to-pink-400", iconBg: "bg-purple-500/15", border: "border-purple-500/20", glow: "168, 85, 247" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                                    className={`relative group bg-white/5 backdrop-blur-xl border ${stat.border} rounded-2xl p-6 md:p-8 text-center hover:bg-white/[0.08] hover:scale-[1.04] transition-all duration-500 overflow-hidden`}
                                    style={{
                                        animation: `stat-glow-${i} 3s ease-in-out infinite`,
                                        animationDelay: `${i * 0.5}s`,
                                    }}
                                >
                                    {/* Animated glow keyframes */}
                                    <style>{`
                                        @keyframes stat-glow-${i} {
                                            0%, 100% { box-shadow: 0 0 15px rgba(${stat.glow}, 0.15), 0 0 30px rgba(${stat.glow}, 0.05); }
                                            50% { box-shadow: 0 0 25px rgba(${stat.glow}, 0.4), 0 0 50px rgba(${stat.glow}, 0.15); }
                                        }
                                    `}</style>
                                    {/* Gradient glow */}
                                    <div className={`absolute -top-12 -right-12 size-28 bg-gradient-to-br ${stat.color} rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                                    {/* Top accent line */}
                                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${stat.color} opacity-60`} />
                                    <span className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                        {stat.value}
                                    </span>
                                    <p className="text-black dark:text-gray-300 text-sm md:text-base font-medium mt-3 leading-tight">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founders / Team Story */}
            <Founders />

            {/* Leadership Team Redesign */}
            <Team />

            {/* Brands we have worked with */}
            <BrandsSlider variant="about" />

            {/* Our Mission Section - Two Column Image Layout */}
            <section className="py-24 md:py-40 px-4 relative overflow-hidden bg-[#fafafa] dark:bg-[#050505]">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-center">

                        {/* Left Side: Modern Asymmetrical Image Layout */}
                        <motion.div
                            className="w-full lg:w-1/2 relative mb-16 lg:mb-0"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Main Background Image */}
                            <div className="relative w-[85%] aspect-[4/5] rounded-[2rem] rounded-tr-[4rem] overflow-hidden shadow-xl group border border-gray-100 dark:border-white/5">
                                <Image
                                    src="/assets/Services.jpg"
                                    alt="Background Architecture"
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
                                />
                                {/* Optional subtle overlay for depth */}
                                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                            </div>

                            {/* Floating Foreground Image */}
                            <div className="absolute top-[15%] -right-[2%] sm:-right-[5%] lg:-right-[8%] w-[70%] sm:w-[65%] aspect-[3/4] rounded-[1.5rem] overflow-hidden border-[8px] md:border-[12px] xl:border-[16px] border-white dark:border-[#050505] shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 group">
                                <Image
                                    src="/assets/What_we_do.jpeg"
                                    alt="Foreground Architecture"
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                            </div>
                        </motion.div>

                        {/* Right Side: Editorial Text Content */}
                        <motion.div
                            className="w-full lg:w-1/2 mt-24 sm:mt-32 lg:mt-0"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Subtitle */}
                            <div className="mb-6 flex items-center">
                                <span className="text-[#fc5a32] text-sm font-bold tracking-[0.15em] uppercase border-b border-orange-200/50 dark:border-orange-900/50 pb-1">
                                    Our Story
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 dark:text-white mb-10 leading-[1.1] tracking-tight">
                                Where Vision Meets Reality
                            </h2>

                            {/* Content Paragraphs - Match reference length roughly */}
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
                                <p>
                                    Founded in 2018, Reinsoft IT Solutions began with a simple yet powerful vision: to create digital solutions that don't just work flawlessly, but feel incredibly intuitive to use. What started as a small team with big dreams has grown into an award-winning agency trusted by hundreds of clients across the country.
                                </p>
                                <p>
                                    Our approach combines robust engineering principles with contemporary aesthetics, always putting your business needs and users at the forefront. We believe that great software isn't about following trends it's about creating platforms that genuinely resonate with who you are and how you operate.
                                </p>
                                <p>
                                    Every project we undertake is a collaboration, a journey where your industry expertise meets our technical craftsmanship. From the initial concept to the final deployment, we're dedicated to exceeding expectations and bringing products to life that inspire for years to come.
                                </p>
                            </div>

                            {/* Founder Profile - Editorial Touch */}
                            <div className="mt-12 flex items-center gap-4 max-w-xl">
                                <div className="size-16 rounded-full overflow-hidden relative shadow-md bg-gray-200 dark:bg-gray-800 border-2 border-white dark:border-gray-800 shrink-0">
                                    <Image
                                        src="/assets/Founders_pics/Tanu_founder & CTO.png" // Placeholder for an avatar
                                        alt="Founder Profile"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white font-serif">Leadership Team</h4>
                                    <p className="text-[#fc5a32] text-sm font-semibold tracking-wide mt-1">Founder & CTO</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Our Vision Section - Home-5 Editorial Redesign */}
            <section className="py-24 md:py-40 px-4 relative overflow-hidden bg-[#f8f9fa] dark:bg-[#020202]">
                {/* Decorative Background Shape */}
                <div className="absolute top-1/2 left-[55%] w-[600px] h-[600px] bg-gray-200/40 dark:bg-white/5 rounded-full border border-gray-300/20 dark:border-white/5 pointer-events-none -translate-y-1/2 hidden lg:block" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Left Side: Content & CTAs */}
                        <motion.div
                            className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Subtitle with Teal Bottom Bar */}
                            <div className="mb-8 relative inline-block">
                                <span className="text-[#0b8278] text-lg font-bold tracking-widest uppercase">
                                    Our Vision
                                </span>
                                <div className="h-1.5 w-full bg-[#0b8278] mt-1 rounded-full opacity-80" />
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-10 leading-[1.1]">
                                Empowering Businesses with Digital Solutions
                            </h2>

                            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl">
                                <p>
                                    Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure. We aim to bridge the gap between ideas and execution by delivering solutions that are not only visually appealing but also performance driven.
                                </p>
                                <p>
                                    The great explorer of the truth, the master-builder of human happiness no one rejects dislikes avoids pleasure itself because it is pleasure but because know who do not those how to pursue pleasures rationally encounter consequences.
                                </p>
                            </div>

                            {/* CTA Row: Button + Signature */}
                            <div className="flex flex-col sm:flex-row items-center gap-8 w-full lg:w-auto">
                                <Link
                                    href="/contact"
                                    className="px-10 py-4 bg-[#0b8278] text-white font-bold text-sm rounded-full hover:bg-[#08665e] transition-all duration-300 shadow-xl shadow-[#0b8278]/20 flex items-center justify-center min-w-[200px]"
                                >
                                    CONTACT US
                                </Link>

                                {/* Signature Block */}
                                <div className="flex items-center gap-4 group cursor-default">
                                    <div className="flex flex-col items-start">
                                        <span className="font-['Dancing_Script',cursive] text-3xl text-gray-400 dark:text-gray-600 mb-1 leading-none select-none opacity-60 group-hover:opacity-100 transition-opacity">
                                            Manpreet Singh
                                        </span>
                                        <p className="text-sm">
                                            <span className="font-bold text-gray-900 dark:text-white">Manpreet Singh,</span>
                                            <span className="text-[#0b8278] ml-1">Founder & CEO of Reinsoft</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Overlapping Image Cluster - Precisely matched to screenshot */}
                        <motion.div
                            className="w-full lg:w-[50%] relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Decorative Background Shape behind images */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[120%] bg-gray-200/30 dark:bg-white/5 rounded-full border border-gray-300/10 dark:border-white/5 pointer-events-none -z-10" />

                            {/* Container for relative positioning */}
                            <div className="relative isolate w-full aspect-square sm:aspect-[1.2/1] lg:aspect-[1.1/1]">

                                {/* 1. Primary Top Image (TV/Dashboard) */}
                                <div className="absolute top-0 left-0 z-20 w-[75%] aspect-square rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-[#111] group">
                                    <Image
                                        src="/assets/vision-primary-v2.png"
                                        alt="Our Vision Primary"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    
                                    {/* Teal Play Toggle Icon */}
                                    <div className="absolute bottom-6 right-6 z-30">
                                        <div className="size-16 bg-[#0b8278] rounded-xl flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Secondary Bottom Image (Green Chairs) - Equal Size, Half-Overlap */}
                                <div className="absolute bottom-0 right-0 z-10 w-[75%] aspect-square rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white dark:border-[#111] group">
                                    <Image
                                        src="/assets/vision-secondary-v2.png"
                                        alt="Our Vision Secondary"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 80vw, 40vw"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Our Services */}
            <AboutServices />

            {/* Our Technologies */}
            <AboutTechnologies />

            {/* Industries We Serve */}
            <IndustriesServe />

            {/* Our Process */}
            <AboutProcess />

            {/* Why Choose Reinsoft */}
            <div className="py-10">
                <WhyChooseUs />
            </div>

            {/* Partner With Us CTA - Unique design for About page */}
            <section className="relative mb-10 px-4">
                <motion.div
                    className="relative max-w-6xl mx-auto overflow-hidden"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2EpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />

                    {/* Decorative circles */}
                    <div className="absolute -top-16 -right-16 size-64 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-16 -left-16 size-64 bg-white/10 rounded-full blur-2xl" />

                    {/* Content */}
                    <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24 text-center">
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/15 text-white text-sm font-medium mb-8"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <HandshakeIcon className="size-4" />
                            Let's Collaborate
                        </motion.div>

                        <motion.h2
                            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Partner With Us to Create
                            <span className="block mt-2 text-white/90">Your Next Big Thing</span>
                        </motion.h2>

                        <motion.p
                            className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            We're more than a dev team — we're your long-term technology partner. Let's discuss your vision and make it a reality.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link href="/contact"
                                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-700 font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                <UsersIcon className="size-5" />
                                Schedule a Meeting
                                <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="https://wa.me/918968369582" target="_blank"
                                className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/15 transition-all duration-300"
                            >
                                Chat on WhatsApp
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
