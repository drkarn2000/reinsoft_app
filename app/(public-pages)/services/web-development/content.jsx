'use client';

import { motion } from "framer-motion";
import { CodeIcon, GlobeIcon, LayersIcon, ShieldCheckIcon, ZapIcon, BarChart3Icon, SearchIcon, RocketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "@/components/gradient-button";
import LeadForm from "@/components/lead-form";
import Testimonials from "@/sections/testimonials";
import WorkflowSteps from "@/sections/workflow-steps";
import FaqSection from "@/sections/faq-section";
import TrustStrip from "@/sections/trust-strip";

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

            {/* Background Image - Harmonized */}
            <div className="fixed inset-0 -z-30 pointer-events-none">
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
            <section className="relative pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-blue-400 mb-6 inline-block">
                            Enterprise Web Solutions
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
                            Transforming Ideas into <br />
                            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]">Powerful Web Realities</span>
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                            We build fast, secure, and highly scalable web applications that drive growth. From startup MVPs to enterprise-level systems, we deliver digital excellence.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <GradientButton href="/contact">
                                Start Your Project
                            </GradientButton>
                            <GradientButton href="#features" contentClassName="bg-white/5 border border-white/10" loop={false}>
                                Explore Services
                            </GradientButton>
                        </div>
                    </motion.div>
                </div>
            </section>

            <TrustStrip />

            {/* Deep Dive Features */}
            <section id="features" className="py-24 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Web Development <span className="text-orange-500">Expertise</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Specialized solutions tailored to your specific industry needs, using the latest tech stack to ensure performance and longevity.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {webFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md hover:bg-white/[0.08] transition-all group global-orange-glow"
                            >
                                <div className="size-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content & Tech Stack Section */}
            <section className="py-24 px-4 bg-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Modern Tech Stack for <span className="text-blue-400">Superior Results</span></h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            At Reinsoft, we don't just write code; we architect solutions. We leverage the most advanced technologies to ensure your web application is built for the future.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                { icon: <ZapIcon className="size-5 text-yellow-400" />, text: "Performance-first approach with Next.js and React" },
                                { icon: <BarChart3Icon className="size-5 text-blue-400" />, text: "Scalable backend systems with Node.js and Python" },
                                { icon: <SearchIcon className="size-5 text-green-400" />, text: "Advanced SEO optimization out of the box" },
                                { icon: <RocketIcon className="size-5 text-purple-400" />, text: "Automated deployment and continuous integration" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-200">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <GradientButton href="/contact">Get a Tech Consultation</GradientButton>
                    </motion.div>

                    <motion.div
                        className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-square"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/assets/Services.jpg"
                            alt="Web Development"
                            fill
                            className="object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10 p-6 glass rounded-2xl border border-white/20">
                            <p className="text-xl font-bold italic">"Innovation is at the heart of everything we build."</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <WorkflowSteps />

            <Testimonials />

            <FaqSection />

            {/* Lead Form Section */}
            <section id="quote" className="py-24 px-4 bg-gradient-to-b from-black to-slate-900/50 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Scale Your <br /><span className="text-orange-500">Web Presence?</span></h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Fill out the form to get a detailed estimate for your project. Our experts will get back to you within 24 hours.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                    <CodeIcon className="size-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Technical Expertise</h4>
                                    <p className="text-sm text-gray-400">Verified seniors working on your code.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                                    <GlobeIcon className="size-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Global Standards</h4>
                                    <p className="text-sm text-gray-400">Delivering world-class quality for every pixel.</p>
                                </div>
                            </div>
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
        </main>
    );
}
