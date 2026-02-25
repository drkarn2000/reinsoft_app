'use client';

import CallToAction from '@/sections/call-to-action';
import FaqSection from '@/sections/faq-section';
import Features from '@/sections/features';
import TrustStrip from '@/sections/trust-strip';
import WorkflowSteps from '@/sections/workflow-steps';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { PhoneIcon, MessageCircleIcon, StarIcon } from "lucide-react";

export default function LandingPage() {
    return (
        <>
            <Head>
                <title>Reinsoft - Custom Software & IT Solutions for Growing Businesses</title>
                <meta name="description" content="Practical IT solutions for startups and growing businesses. Get a free consultation today." />
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
                <Link href="#contact-form" className='btn glass bg-white/20 py-3'>
                    Get Free Consultation
                </Link>
            </motion.nav>

            <main className='px-4'>
                {/* Background gradient blobs */}
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
                        <p>Trusted by startups & growing businesses</p>
                        <span className="btn glass py-1 px-3 text-xs">
                            10+ Years Experience
                        </span>
                    </motion.div>
                    <motion.h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-4xl"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        We Build <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">High-Performance Websites & Mobile Apps</span> That Generate Business
                    </motion.h1>
                    <motion.p className="text-center text-gray-100 text-base/7 max-w-md mt-6"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Practical IT solutions for startups and growing businesses focused on leads, speed, and scalability.
                    </motion.p>

                    <motion.div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <Link href="#contact-form" className="btn max-md:w-full glass py-3 bg-white/20">
                            Get Free Consultation
                        </Link>
                        <a href="https://wa.me/918968369582" target="_blank" rel="noopener noreferrer" className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3">
                            <MessageCircleIcon className="size-4.5" />
                            WhatsApp Us Now
                        </a>
                    </motion.div>
                </motion.section>

                {/* Trust Strip */}
                <TrustStrip />

                {/* Features */}
                <Features />

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
