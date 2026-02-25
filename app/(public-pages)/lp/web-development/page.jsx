'use client';

import CallToAction from '@/sections/call-to-action';
import FaqSection from '@/sections/faq-section';
import TrustStrip from '@/sections/trust-strip';
import WorkflowSteps from '@/sections/workflow-steps';
import Testimonials from '@/sections/testimonials';
import WhyChooseUs from '@/sections/why-choose-us';
import CaseStudiesSection from '@/sections/case-studies-section';
import LeadForm from '@/components/lead-form';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { PhoneIcon, MessageCircleIcon, CodeIcon, ServerIcon, ShoppingCartIcon, LayoutIcon, WrenchIcon, MonitorIcon } from "lucide-react";

export default function WebDevelopmentLandingPage() {
    return (
        <>
            <Head>
                <title>Custom Web Development Services - Reinsoft</title>
                <meta name="description" content="Expert web development services. High-performance, scalable, and secure web applications that drive engagement and business growth." />
            </Head>

            <main className='px-4 overflow-hidden'>
                {/* Background variables */}
                <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                    initial={{ opacity: 0.4 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#16A34A] blur-[100px]" />
                    <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#0284C7] blur-[100px]" />
                    <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F59E0B] blur-[100px]" />
                </motion.div>

                {/* 1. Hero Section with Lead Form */}
                <section className="max-w-7xl mx-auto py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="flex flex-col items-start space-y-8"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 60 }}
                        >
                            <div className="flex items-center gap-3">
                                <span className="btn glass py-1 px-3 text-sm border-emerald-500/50 text-emerald-400">
                                    Top Rated Web Developers
                                </span>
                            </div>
                            <h1 className="text-4xl/tight md:text-6xl/tight font-bold tracking-tight text-white">
                                Ready to build your <span className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">custom web application?</span>
                            </h1>
                            <p className="text-gray-200 text-lg/relaxed max-w-xl">
                                We develop fast, scalable, and intuitive web experiences. Partner with us to turn your vision into a high-converting, robust digital platform.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <a href="#contact-quote" className="btn glass py-4 px-8 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 transition text-white text-base font-bold shadow-lg shadow-blue-500/25">
                                    Get a Quote Now
                                </a>
                                <a href="https://wa.me/918968369582" target="_blank" rel="noopener noreferrer" className="btn glass flex items-center justify-center gap-2 py-4 px-8 bg-green-500/20 hover:bg-green-500/40 border border-green-500/50 transition text-white text-base font-medium">
                                    <MessageCircleIcon className="size-5" />
                                    Book a free consultation
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex justify-center lg:justify-end" id="contact-quote"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 60 }}
                        >
                            <LeadForm />
                        </motion.div>
                    </div>
                </section>

                {/* 2. Clear and Benefit-Focused Content */}
                <motion.section
                    className="max-w-4xl mx-auto py-16 text-center"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-semibold mb-6">Custom Web Development <span className="text-green-400">🌐</span></h2>
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Reinsoft is your trusted web development partner, helping clients achieve long-term success with robust web architectures. We empower businesses with modern frameworks like React, Next.js, and Node.js for unparalleled performance. Our team works collaboratively with startups, rising companies, and enterprise brands, delivering successful digital solutions.
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed">
                        We deliver pioneering web applications with a focus on SEO, speed, and efficiency, ensuring your platform is easy to navigate, manage, and scale post-launch. With steadfast dedication, we ensure that every project is deeply tailored to the client's goals, fostering success and conversions.
                    </p>
                </motion.section>

                {/* 3. Application Development Services */}
                <section className="max-w-7xl mx-auto py-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Our <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">Web Services</span></h2>
                        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">End-to-end web development, from architectural design and frontend rendering to backend APIs and deployment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Frontend */}
                        <motion.div className="glass global-orange-glow bg-white/5 p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        >
                            <div className="size-16 rounded-xl bg-blue-900/30 border border-blue-500/30 flex items-center justify-center mb-6">
                                <MonitorIcon className="size-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Frontend Development</h3>
                            <p className="text-sm text-gray-300 mb-6">Engaging, blazing-fast interfaces that users love. We specialize in React.js, Next.js, and Vue.js to build dynamic, responsive UI/UX experiences that work flawlessly across all devices.</p>
                            <Link href="#contact-quote" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">Know More <span className="text-xs">&rarr;</span></Link>
                        </motion.div>

                        {/* Backend */}
                        <motion.div className="glass global-orange-glow bg-white/5 p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        >
                            <div className="size-16 rounded-xl bg-slate-800 border border-gray-600/50 flex items-center justify-center mb-6">
                                <ServerIcon className="size-8 text-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Backend & APIs</h3>
                            <p className="text-sm text-gray-300 mb-6">The robust engine powering your business. We design secure, scalable server architectures using Node.js, Python, or PHP, and construct well-documented REST & GraphQL APIs.</p>
                            <Link href="#contact-quote" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">Know More <span className="text-xs">&rarr;</span></Link>
                        </motion.div>

                        {/* E-Commerce */}
                        <motion.div className="glass global-orange-glow bg-white/5 p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                        >
                            <div className="size-16 rounded-xl bg-yellow-900/30 border border-yellow-500/30 flex items-center justify-center mb-6">
                                <ShoppingCartIcon className="size-8 text-yellow-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">E-Commerce Solutions</h3>
                            <p className="text-sm text-gray-300 mb-6">Turn visitors into loyal customers. We build high-converting custom e-commerce platforms and optimize existing Shopify/WooCommerce stores for maximum sales.</p>
                            <Link href="#contact-quote" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">Know More <span className="text-xs">&rarr;</span></Link>
                        </motion.div>

                        {/* CMS */}
                        <motion.div className="glass global-orange-glow bg-white/5 p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                        >
                            <div className="size-16 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center mb-6">
                                <LayoutIcon className="size-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Custom CMS Development</h3>
                            <p className="text-sm text-gray-300 mb-6">Take full control of your content. We build tailored Content Management Systems or implement headless solutions like Sanity and Strapi to give your marketing team ultimate flexibility.</p>
                            <Link href="#contact-quote" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">Know More <span className="text-xs">&rarr;</span></Link>
                        </motion.div>

                        {/* SEO */}
                        <motion.div className="glass global-orange-glow bg-white/5 p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                        >
                            <div className="size-16 rounded-xl bg-red-900/30 border border-red-500/30 flex items-center justify-center mb-6">
                                <CodeIcon className="size-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Technical SEO & Web Perf</h3>
                            <p className="text-sm text-gray-300 mb-6">Rank higher and load instantly. We optimize Core Web Vitals, implement semantic HTML, and employ advanced caching strategies so Google and your users love your site.</p>
                            <Link href="#contact-quote" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">Know More <span className="text-xs">&rarr;</span></Link>
                        </motion.div>

                        {/* Web Maintenance */}
                        <motion.div className="glass global-orange-glow bg-white/5 p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                        >
                            <div className="size-16 rounded-xl bg-teal-900/30 border border-teal-500/30 flex items-center justify-center mb-6">
                                <WrenchIcon className="size-8 text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Web Maintenance & Security</h3>
                            <p className="text-sm text-gray-300 mb-6">Keep your digital assets protected. We provide continuous monitoring, regular vulnerability patching, backups, and proactive optimizations to ensure uncompromising uptime.</p>
                            <Link href="#contact-quote" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">Know More <span className="text-xs">&rarr;</span></Link>
                        </motion.div>
                    </div>
                </section>

                <TrustStrip />

                {/* 4. Case Study Section */}
                <div className="mt-8 mb-24">
                    <CaseStudiesSection />
                </div>

                {/* 5. Testimonials and Trust Signals placed higher up */}
                <div className="mt-8">
                    <Testimonials
                        title="What Our Clients Say 🌐"
                        description="Hear directly from the brands who trusted us to engineer their digital growth."
                    />
                </div>

                {/* 6. Why Choose Us */}
                <WhyChooseUs
                    title="Why Partner With Us?"
                    description="We don't just write code; we solve business problems. Here is why industry leaders select us for their most critical web projects."
                />

                {/* 7. Development Process */}
                <WorkflowSteps
                    title="Our Web Engineering Process"
                    description="A structured, transparent methodology ensuring high-quality deployments from day one."
                />

                {/* 8. FAQ Section */}
                <div className="mb-24">
                    <FaqSection
                        title="Common Web Questions"
                        description="Everything you need to know about partnering with us for web development."
                    />
                </div>
            </main>
        </>
    );
}
