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
import { PhoneIcon, MessageCircleIcon, SmartphoneIcon, GlobeIcon, ZapIcon, LockIcon, PenToolIcon } from "lucide-react";

export default function MobileAppLandingPage() {
    return (
        <>
            <Head>
                <title>Custom Mobile App Development Services - Reinsoft</title>
                <meta name="description" content="Expert mobile app development for iOS and Android. High-performance native and cross-platform apps that drive engagement and business growth." />
            </Head>


            <main className='px-4 overflow-hidden'>
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
                                <span className="btn glass py-1 px-3 text-sm border-orange-500/50 text-orange-400">
                                    Top Rated Mobile App Developers
                                </span>
                            </div>
                            <h1 className="text-4xl/tight md:text-6xl/tight font-bold tracking-tight text-white">
                                Ready to build your <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">custom mobile app?</span>
                            </h1>
                            <p className="text-gray-200 text-lg/relaxed max-w-xl">
                                We develop fast, scalable, and intuitive mobile experiences. Partner with us to turn your vision into an award-winning iOS and Android application.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <a href="#contact-quote" className="btn glass py-4 px-8 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transition text-white text-base font-bold shadow-lg shadow-pink-500/25">
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
                    <h2 className="text-3xl font-semibold mb-6">Custom Mobile App Development <span className="text-green-400">🍃</span></h2>
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Reinsoft is your trusted mobile app development company, helping clients achieve key objectives with bespoke iOS and Android apps. We empower businesses with React Native-based hybrid apps for greater client reach. Our team works collaboratively with startups, rising companies, and enterprise brands, delivering successful, innovative digital solutions.
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed">
                        We deliver pioneering mobile apps with a focus on performance and efficiency, ensuring your application is easy to navigate, manage, and update post-launch. With steadfast dedication, we ensure that every project is deeply tailored to the client's goals, fostering success and surpassing expectations.
                    </p>
                </motion.section>

                {/* 3. Application Development Services */}
                <section className="max-w-7xl mx-auto py-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Our <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">Mobile App Services</span></h2>
                        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">End-to-end app development, from design and prototyping through to deployment and maintenance.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* iOS */}
                        <motion.div className="glass global-orange-glow bg-white/5 p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        >
                            <div className="size-16 rounded-xl border border-white/10 flex items-center justify-center mb-6 bg-white/5">
                                <Image src="/assets/apple-icon.png" alt="iOS" width={48} height={48} className="size-12 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">iOS App Development</h3>
                            <p className="text-sm text-gray-300 mb-6">Create seamless experiences for the world's most premium user base. We build native iOS apps in Swift and Objective-C tailored for maximum performance on iPhone and iPad.</p>
                            <Link href="#contact-quote" className="text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1">Know More <span className="text-xs">&rarr;</span></Link>
                        </motion.div>

                        {/* Android */}
                        <motion.div className="glass global-orange-glow bg-white/5 p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        >
                            <div className="size-16 rounded-xl bg-green-900/30 border border-green-500/30 flex items-center justify-center mb-6">
                                <SmartphoneIcon className="size-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Android App Development</h3>
                            <p className="text-sm text-gray-300 mb-6">Reach the largest mobile audience globally. We utilize the latest Google-powered frameworks (Kotlin/Java) to build robust, scalable apps working flawlessly across all Android devices.</p>
                            <Link href="#contact-quote" className="text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1">Know More <span className="text-xs">&rarr;</span></Link>
                        </motion.div>

                        {/* Cross Platform */}
                        <motion.div className="glass global-orange-glow bg-white/5 p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                        >
                            <div className="size-16 rounded-xl bg-blue-900/30 border border-blue-500/30 flex items-center justify-center mb-6">
                                <GlobeIcon className="size-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">React Native App Development</h3>
                            <p className="text-sm text-gray-300 mb-6">Prefer one app that covers all devices? We use React Native to create cross-platform hybrid apps that look, feel, and perform like native apps while reducing development time and costs.</p>
                            <Link href="#contact-quote" className="text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1">Know More <span className="text-xs">&rarr;</span></Link>
                        </motion.div>

                        {/* UI/UX Design */}
                        <motion.div className="glass global-orange-glow bg-white/5 p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                        >
                            <div className="size-16 rounded-xl bg-pink-900/30 border border-pink-500/30 flex items-center justify-center mb-6">
                                <PenToolIcon className="size-8 text-pink-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">UI/UX App Design</h3>
                            <p className="text-sm text-gray-300 mb-6">Stunning, user-centric mobile interfaces that engage users and drive higher retention rates. We focus on modern design principles and intuitive navigation.</p>
                            <Link href="#contact-quote" className="text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1">Know More <span className="text-xs">&rarr;</span></Link>
                        </motion.div>

                        {/* App Maintenance */}
                        <motion.div className="glass global-orange-glow bg-white/5 p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                        >
                            <div className="size-16 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center mb-6">
                                <ZapIcon className="size-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">App Maintenance & Support</h3>
                            <p className="text-sm text-gray-300 mb-6">We don't abandon ship after launch. We provide ongoing support, bug tracking, OS updates, and new feature integrations to keep your app running smoothly.</p>
                            <Link href="#contact-quote" className="text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1">Know More <span className="text-xs">&rarr;</span></Link>
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
                        title="What Our Clients Say 🍃"
                        description="Don't just take our word for it. Here's what business leaders say about our mobile app development services."
                    />
                </div>

                {/* 6. Why Choose Us */}
                <WhyChooseUs
                    title="Why Choose Reinsoft"
                    description="We are committed to delivering excellence. Here is why businesses trust us with their digital transformation and app development."
                />

                {/* 7. Development Process */}
                <WorkflowSteps />

                {/* 8. FAQ Section */}
                <div className="mb-24">
                    <FaqSection />
                </div>
            </main>
        </>
    );
}
