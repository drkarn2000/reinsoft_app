'use client';

import CallToAction from '@/sections/call-to-action';
import FaqSection from '@/sections/faq-section';
import TrustStrip from '@/sections/trust-strip';
import WorkflowSteps from '@/sections/workflow-steps';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { PhoneIcon, MessageCircleIcon, SmartphoneIcon, GlobeIcon, ZapIcon, LockIcon } from "lucide-react";
import GradientButton from '@/components/gradient-button';

export default function MobileAppLandingPage() {
    return (
        <>
            <Head>
                <title>Custom Mobile App Development Services - Reinsoft</title>
                <meta name="description" content="Expert mobile app development for iOS and Android. High-performance native and cross-platform apps that drive engagement and business growth." />
            </Head>

            {/* Simplified Navbar - Logo + CTA only */}
            <motion.nav
                className="sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 bg-black/30 backdrop-blur-sm"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link href='/'>
                    <Image
                        src='/assets/logo.png'
                        alt='Reinsoft Logo'
                        className='h-14 w-auto'
                        width={180}
                        height={56}
                    />
                </Link>
                <Link href="#contact-form" className='btn glass bg-white/20 py-3 text-sm md:text-base'>
                    Get Free App Estimate
                </Link>
            </motion.nav>

            <main className='px-4'>
                {/* Background variables */}
                <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                    initial={{ opacity: 0.4 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                    <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                    <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
                </motion.div>

                {/* Hero Section */}
                <motion.section className="flex flex-col items-center">
                    <motion.div className="flex items-center gap-3 mt-32"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <p className="text-sm md:text-base">iOS & Android App Specialists</p>
                        <span className="btn glass py-1 px-3 text-xs">
                            Top Rated Agency
                        </span>
                    </motion.div>
                    <motion.h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-4xl"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        We Build <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">High-Performance Custom Mobile Apps</span>
                    </motion.h1>
                    <motion.p className="text-center text-gray-100 text-base/7 max-w-2xl mt-6"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Turn your idea into a fast, scalable, and intuitive mobile experience. We build responsive native and cross-platform apps designed to engage users and maximize App Store performance.
                    </motion.p>

                    <motion.div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-8"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <Link href="#contact-form" className="btn max-md:w-full glass py-3.5 px-8 bg-white/20 hover:bg-white/30 transition text-base font-medium">
                            Get Free App Consultation
                        </Link>
                        <a href="https://wa.me/918968369582" target="_blank" rel="noopener noreferrer" className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3.5 px-8 bg-green-600/20 hover:bg-green-600/40 transition text-base font-medium">
                            <MessageCircleIcon className="size-5" />
                            Discuss on WhatsApp
                        </a>
                    </motion.div>
                </motion.section>

                {/* Trust Strip */}
                <TrustStrip />

                {/* Mobile App Specific Features */}
                <section className="mt-20 max-w-6xl mx-auto py-12" id="solutions">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Our <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">App Development Services</span></h2>
                        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">From concept to launch, we cover the full app lifecycle for both startups and enterprise businesses.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                            className="glass global-orange-glow p-8 rounded-xl flex flex-col items-center text-center"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="size-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30">
                                <SmartphoneIcon className="size-7 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Native Development</h3>
                            <p className="text-sm text-gray-300">High-performance iOS (Swift) and Android (Kotlin/Java) apps explicitly tailored to their platforms.</p>
                        </motion.div>

                        <motion.div
                            className="glass global-orange-glow p-8 rounded-xl flex flex-col items-center text-center"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="size-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30">
                                <GlobeIcon className="size-7 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Cross-Platform Apps</h3>
                            <p className="text-sm text-gray-300">Cost-effective React Native & Flutter solutions that work seamlessly on both mobile platforms.</p>
                        </motion.div>

                        <motion.div
                            className="glass global-orange-glow p-8 rounded-xl flex flex-col items-center text-center"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="size-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 border border-orange-500/30">
                                <ZapIcon className="size-7 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">UX/UI Design</h3>
                            <p className="text-sm text-gray-300">Stunning, intuitive mobile interfaces that engage users and drive higher retention rates.</p>
                        </motion.div>

                        <motion.div
                            className="glass global-orange-glow p-8 rounded-xl flex flex-col items-center text-center"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="size-14 rounded-full bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/30">
                                <LockIcon className="size-7 text-green-400" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">SaaS & Enterprise</h3>
                            <p className="text-sm text-gray-300">Secure, scalable, and connected app architectures built to handle enterprise-grade data.</p>
                        </motion.div>
                    </div>
                </section>

                {/* Workflow */}
                <WorkflowSteps />

                {/* FAQ */}
                <FaqSection />

                {/* CTA with Contact Form anchor */}
                <div id="contact-form">
                    <CallToAction />
                </div>
            </main>
        </>
    );
}
