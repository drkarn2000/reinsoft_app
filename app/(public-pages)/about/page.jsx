'use client';

import { motion } from "framer-motion";
import { ArrowRightIcon, HandshakeIcon, UsersIcon } from "lucide-react";
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
        <main className="relative isolate min-h-screen overflow-hidden bg-[#f6f2ea] selection:bg-[#c6a86a]/30 dark:bg-[rgba(5,5,5,0.8)]">
            {/* Background elements */}
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                initial={{ opacity: 0.12 }}
                whileInView={{ opacity: 0.22 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#f1e4ca] blur-[120px] dark:bg-[#b99659]/10" />
                <div className="absolute left-[14%] top-[28rem] h-[28rem] w-[28rem] rounded-full bg-[#dfc799]/35 blur-[120px] dark:bg-[#8f7040]/10" />
                <div className="absolute right-[8%] top-[24rem] h-[30rem] w-[30rem] rounded-full bg-[#efe3cb]/55 blur-[130px] dark:bg-[#d8be89]/8" />
            </motion.div>

            {/* Full-page background image */}
            <div className="fixed inset-0 -z-30 pointer-events-none">
                <Image
                    src="/assets/Services.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-30 dark:opacity-50 brightness-75 contrast-105"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,242,234,0.28),rgba(246,242,234,0.1),rgba(246,242,234,0.24))] dark:bg-[linear-gradient(180deg,rgba(5,5,5,0.2),rgba(5,5,5,0.1),rgba(5,5,5,0.22))]" />
            </div>

            <section className="relative px-4 pb-18 pt-32 md:pb-24">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-[#e6d7ba] bg-[linear-gradient(135deg,rgba(255,253,248,0.92),rgba(247,241,229,0.88))] shadow-[0_40px_100px_-46px_rgba(31,24,10,0.45)] backdrop-blur-xl dark:border-[#c6a86a]/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-16 top-16 h-64 w-64 rounded-full bg-[#f0dfba]/70 blur-[100px] dark:bg-[#c6a86a]/10" />
                        <div className="absolute right-[-4rem] top-[-2rem] h-72 w-72 rounded-full bg-[#ead5a8]/55 blur-[120px] dark:bg-[#e4d0a3]/8" />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#caa96b]/55 to-transparent" />
                        <div className="absolute inset-y-0 right-[34%] hidden w-px bg-gradient-to-b from-transparent via-[#dbc28d]/35 to-transparent lg:block" />
                    </div>

                    <div className="relative grid grid-cols-1 gap-14 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:py-14">
                        <motion.div
                            className="flex flex-col items-center text-center lg:items-start lg:text-left"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 60 }}
                        >
                            <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d8c299]/50 bg-[#fffaf1] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#9b7a42] shadow-[0_12px_30px_-24px_rgba(155,122,66,0.7)] dark:border-[#c6a86a]/20 dark:bg-white/[0.04] dark:text-[#e4d0a3]">
                                <span className="h-2 w-2 rounded-full bg-[#c6a86a]" />
                                About Reinsoft
                            </span>
                            <h1 className="max-w-4xl text-4xl font-black tracking-[-0.07em] text-[#171614] dark:text-white sm:text-5xl md:text-6xl lg:text-[5.25rem] lg:leading-[0.95]">
                                We shape
                                <span className="bg-gradient-to-r from-[#9b7a42] via-[#c6a86a] to-[#ead9b0] bg-clip-text text-transparent">
                                    {" "}elevated digital experiences
                                </span>
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f493f] dark:text-[#d0c7bb] md:text-xl">
                                Reinsoft designs and builds polished digital products for ambitious brands, startups, and growing companies that want more than just functional software.
                            </p>
                            <p className="mt-4 max-w-xl text-base leading-8 text-[#6a6255] dark:text-[#a9a193] md:text-lg">
                                We blend engineering discipline, thoughtful design, and strategic delivery to create products that feel refined at launch and resilient as they grow.
                            </p>
                            <div className="mt-8 h-px w-full max-w-xl bg-gradient-to-r from-[#ceb17a] via-[#e9dbbe] to-transparent dark:from-[#c6a86a]/50 dark:via-white/10" />
                            <div className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row lg:items-start">
                                <Link
                                    href="/contact"
                                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1c1914] px-7 py-4 text-sm font-bold tracking-[0.12em] text-[#f7f0e3] shadow-[0_18px_40px_-22px_rgba(28,25,20,0.8)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2b261f] sm:w-auto"
                                >
                                    Start a Project
                                    <svg className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                                </Link>
                                <Link
                                    href="/our-work"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#ccb07a]/50 bg-white/70 px-7 py-4 text-sm font-semibold tracking-[0.12em] text-[#534b3f] transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a86a] hover:bg-[#fffaf1] dark:border-[#c6a86a]/20 dark:bg-white/[0.03] dark:text-[#e8dcc0] sm:w-auto"
                                >
                                    View Our Work
                                </Link>
                            </div>

                            <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                                {[
                                    { value: "10+", label: "Years shaping products" },
                                    { value: "200+", label: "Projects delivered" },
                                    { value: "Global", label: "Clients and teams" },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-[1.35rem] border border-[#e2d2b0] bg-white/55 px-5 py-4 text-left shadow-[0_18px_40px_-32px_rgba(31,24,10,0.35)] dark:border-[#c6a86a]/10 dark:bg-white/[0.03]"
                                    >
                                        <div className="text-2xl font-black tracking-[-0.05em] text-[#171614] dark:text-[#f5ead3]">
                                            {item.value}
                                        </div>
                                        <p className="mt-1 text-sm leading-6 text-[#6a6255] dark:text-[#b8b0a1]">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 60 }}
                        >
                            <div className="relative mx-auto max-w-[34rem]">
                                <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-[#ead5a8]/45 blur-[80px] dark:bg-[#c6a86a]/10" />
                                <div className="relative overflow-hidden rounded-[2rem] border border-[#e4d3af] bg-[linear-gradient(180deg,#fffdfa_0%,#f7f1e7_100%)] p-4 shadow-[0_34px_80px_-40px_rgba(31,24,10,0.45)] dark:border-[#c6a86a]/10 dark:bg-[linear-gradient(180deg,#161616_0%,#0c0c0c_100%)]">
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8a86a]/70 to-transparent" />
                                    <div className="relative overflow-hidden rounded-[1.55rem]">
                                        <Image
                                            src="/assets/Services.jpg"
                                            alt="Reinsoft about hero"
                                            width={900}
                                            height={1000}
                                            className="h-[27rem] w-full object-cover md:h-[34rem]"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,15,10,0.08),rgba(18,15,10,0.42))]" />

                                        <div className="absolute left-4 top-4 rounded-full border border-[#8db8ff]/40 bg-[#2563eb]/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md shadow-[0_10px_24px_-14px_rgba(37,99,235,0.8)] md:left-6 md:top-6">
                                            Premium Product Studio
                                        </div>

                                        <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-[#8db8ff]/18 bg-[#181510]/80 p-5 pr-20 text-left backdrop-blur-xl md:bottom-6 md:left-6 md:right-6 md:p-6">
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8db8ff]">
                                                Reinsoft Approach
                                            </p>
                                            <h3 className="mt-3 text-2xl font-black tracking-[-0.05em] text-white">
                                                Design depth. Engineering precision. Delivery with taste.
                                            </h3>
                                            <p className="mt-3 max-w-md text-sm leading-7 text-[#ded4c3]">
                                                A focused team building experiences that feel calm, premium, and built to last.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-6 -left-4 rounded-[1.5rem] border border-[#e3d3b1] bg-white/88 px-5 py-4 shadow-[0_22px_50px_-30px_rgba(31,24,10,0.38)] backdrop-blur-xl dark:border-[#c6a86a]/10 dark:bg-[#121212]/90 md:-left-8">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9b7a42] dark:text-[#d9bf88]">
                                        Trusted Build Partner
                                    </p>
                                    <div className="mt-2 text-2xl font-black tracking-[-0.05em] text-[#171614] dark:text-[#f5ead3]">
                                        200+
                                    </div>
                                    <p className="text-sm text-[#6a6255] dark:text-[#b8b0a1]">
                                        launches, rebuilds, and scale-ups
                                    </p>
                                </div>
                            </div>
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

            <section className="relative overflow-hidden bg-[rgba(248,244,236,0.78)] px-4 py-24 backdrop-blur-[2px] dark:bg-[rgba(7,7,7,0.45)] md:py-40">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[10%] top-24 h-72 w-72 rounded-full bg-[#ecdec0]/70 blur-[120px] dark:bg-[#c6a86a]/8" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-center">

                        {/* Left Side: Modern Asymmetrical Image Layout */}
                        <motion.div
                            className="w-full lg:w-1/2 relative mb-16 lg:mb-0"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative w-[85%] aspect-[4/5] rounded-[2rem] rounded-tr-[4rem] overflow-hidden shadow-[0_26px_70px_-34px_rgba(31,23,11,0.4)] group border border-[#e7d9bf] dark:border-white/5">
                                <Image
                                    src="/assets/Services.jpg"
                                    alt="Background Architecture"
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(18,15,10,0.18))] pointer-events-none" />
                                <div className="absolute left-5 top-5 rounded-full border border-[#ffb57a]/40 bg-[#ff7a18]/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md shadow-[0_10px_24px_-14px_rgba(255,122,24,0.8)]">
                                    Since 2018
                                </div>
                            </div>

                            <div className="absolute top-[15%] -right-[2%] sm:-right-[5%] lg:-right-[8%] w-[70%] sm:w-[65%] aspect-[3/4] rounded-[1.5rem] overflow-hidden border-[8px] md:border-[12px] xl:border-[16px] border-[#fff9ef] dark:border-[#050505] shadow-[0_24px_60px_rgba(0,0,0,0.22)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 group">
                                <Image
                                    src="/assets/What_we_do.jpeg"
                                    alt="Foreground Architecture"
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] border border-[#ffb57a]/20 bg-[#181510]/75 p-4 pr-16 text-white backdrop-blur-lg">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffb57a]">
                                        Our Story
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-[#efe4d0]">
                                        From a small founding team to a trusted digital product partner.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="w-full lg:w-1/2 mt-24 sm:mt-32 lg:mt-0"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="mb-6 flex items-center">
                                <span className="text-[#9b7a42] dark:text-[#d9bf88] text-sm font-bold tracking-[0.22em] uppercase border-b border-[#d7bc89]/50 dark:border-[#d7bc89]/20 pb-1">
                                    Our Story
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#181713] dark:text-white mb-10 leading-[1.08] tracking-tight">
                                Where vision meets reality
                            </h2>

                            <div className="space-y-6 text-[#625b4f] dark:text-[#beb5a9] text-lg leading-relaxed max-w-xl">
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

                            <div className="mt-12 flex items-center gap-4 max-w-xl rounded-[1.5rem] border border-[#eadfc8] bg-white/70 dark:bg-white/[0.03] dark:border-white/8 px-5 py-4 shadow-[0_18px_45px_-32px_rgba(31,24,10,0.4)]">
                                <div className="size-16 rounded-full overflow-hidden relative shadow-md bg-gray-200 dark:bg-gray-800 border-2 border-[#fff7e9] dark:border-gray-800 shrink-0">
                                    <Image
                                        src="/assets/Founders_pics/Tanu_founder & CTO.png"
                                        alt="Founder Profile"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#181713] dark:text-white font-serif">Leadership Team</h4>
                                    <p className="text-[#9b7a42] dark:text-[#d9bf88] text-sm font-semibold tracking-wide mt-1">Founder & CTO</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[rgba(244,239,230,0.78)] px-4 py-24 backdrop-blur-[2px] dark:bg-[rgba(2,2,2,0.45)] md:py-40">
                <div className="absolute top-1/2 left-[55%] w-[600px] h-[600px] bg-[#ebe0c8]/45 dark:bg-white/5 rounded-full border border-[#d9c6a0]/25 dark:border-white/5 pointer-events-none -translate-y-1/2 hidden lg:block" />

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
                            <div className="mb-8 relative inline-block">
                                <span className="text-[#9b7a42] dark:text-[#d9bf88] text-lg font-bold tracking-[0.25em] uppercase">
                                    Our Vision
                                </span>
                                <div className="h-px w-full bg-gradient-to-r from-[#c6a86a] to-transparent mt-2 rounded-full opacity-80" />
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.05em] text-[#191713] dark:text-white mb-10 leading-[1.08]">
                                Building digital systems that feel elegant, useful, and enduring
                            </h2>

                            <div className="space-y-6 text-[#625b4f] dark:text-[#beb5a9] text-lg leading-relaxed mb-12 max-w-2xl">
                                <p>
                                    We believe the best digital products combine quiet confidence with operational strength. Every interface, workflow, and technical decision should feel considered, human, and built to support growth without friction.
                                </p>
                                <p>
                                    Our vision is to help ambitious businesses move with more clarity by creating systems that are visually refined, technically robust, and ready to evolve with the pace of their market.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-8 w-full lg:w-auto">
                                <Link
                                    href="/contact"
                                    className="px-10 py-4 bg-[#1c1914] text-[#f6eddc] font-bold text-sm tracking-[0.14em] rounded-full hover:bg-[#2a251d] transition-all duration-300 shadow-[0_18px_40px_-22px_rgba(28,25,20,0.8)] flex items-center justify-center min-w-[200px] hover:-translate-y-1"
                                >
                                    CONTACT US
                                </Link>

                                <div className="flex items-center gap-4 group cursor-default">
                                    <div className="flex flex-col items-start">
                                        <span className="font-['Dancing_Script',cursive] text-3xl text-[#b7ab98] dark:text-gray-600 mb-1 leading-none select-none opacity-70 group-hover:opacity-100 transition-opacity">
                                            Manpreet Singh
                                        </span>
                                        <p className="text-sm">
                                            <span className="font-bold text-[#191713] dark:text-white">Manpreet Singh,</span>
                                            <span className="text-[#9b7a42] dark:text-[#d9bf88] ml-1">Founder & CEO of Reinsoft</span>
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
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[120%] bg-[#ece2cf]/45 dark:bg-white/5 rounded-full border border-[#ddccaa]/20 dark:border-white/5 pointer-events-none -z-10" />

                            {/* Container for relative positioning */}
                            <div className="relative isolate w-full aspect-square sm:aspect-[1.2/1] lg:aspect-[1.1/1]">

                                <div className="absolute top-0 left-0 z-20 w-[75%] aspect-square rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-[#fff8ec] dark:border-[#111] group">
                                    <Image
                                        src="/assets/vision-primary-v2.png"
                                        alt="Our Vision Primary"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    
                                <div className="absolute bottom-6 right-6 z-30">
                                        <div className="size-16 bg-[#c6a86a] rounded-xl flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="absolute left-6 top-6 rounded-full border border-[#8db8ff]/40 bg-[#2563eb]/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md shadow-[0_10px_24px_-14px_rgba(37,99,235,0.8)]">
                                        Vision in Action
                                    </div>
                                </div>

                                <div className="absolute bottom-0 right-0 z-10 w-[75%] aspect-square rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-[#fff8ec] dark:border-[#111] group">
                                    <Image
                                        src="/assets/vision-secondary-v2.png"
                                        alt="Our Vision Secondary"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 80vw, 40vw"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] border border-[#8db8ff]/18 bg-[#181510]/76 p-4 pr-16 text-white backdrop-blur-lg">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8db8ff]">
                                            What We Build
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-[#efe4d0]">
                                            Elegant systems that balance usability, performance, and business growth.
                                        </p>
                                    </div>
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
                    className="relative max-w-6xl mx-auto overflow-hidden rounded-[2rem] border border-[#e2d3b4] bg-[linear-gradient(135deg,#1d1a15_0%,#2b261f_50%,#453722_100%)] shadow-[0_34px_90px_-44px_rgba(18,14,8,0.9)]"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,225,194,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(198,168,106,0.18),transparent_30%)]" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEuMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNhKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-40" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e5d3ad]/55 to-transparent" />

                    <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24 text-center">
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e6d5b1]/25 bg-white/8 text-[#f1e5cb] text-sm font-medium mb-8"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <HandshakeIcon className="size-4" />
                            Let&apos;s Collaborate
                        </motion.div>

                        <motion.h2
                            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[-0.05em] text-white leading-[1.06] mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Partner with a team that builds
                            <span className="block mt-2 text-[#e9d8b1]">with taste, rigor, and momentum</span>
                        </motion.h2>

                        <motion.p
                            className="text-[#ddd1bb] text-lg leading-relaxed max-w-2xl mx-auto mb-10"
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
                                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#f6eddc] text-[#2b241b] font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                <UsersIcon className="size-5" />
                                Schedule a Meeting
                                <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="https://api.whatsapp.com/send?phone=918968369582" target="_blank"
                                className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#e6d5b1]/30 text-[#f3eadb] font-semibold text-base hover:bg-white/10 transition-all duration-300"
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
