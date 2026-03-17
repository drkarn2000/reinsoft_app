'use client';

import { motion } from "framer-motion";
import { GlobeIcon, SmartphoneIcon, HeadphonesIcon, CheckIcon, TabletSmartphoneIcon, PhoneIcon, MessageCircleIcon, ArrowRightIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";
import GradientButton from "@/components/gradient-button";
import Image from "next/image";

const services = [
    {
        id: 'websites',
        icon: GlobeIcon,
        title: 'Business Websites & Lead Systems',
        description: 'Modern, fast and mobile-friendly websites designed to convert visitors into enquiries and sales.',
        features: [
            'Mobile-responsive design',
            'SEO-optimized structure',
            'WhatsApp & call integration',
            'Lead capture forms',
            'Fast loading performance',
            'Easy content updates',
        ],
    },
    {
        id: 'software',
        icon: SmartphoneIcon,
        title: 'Custom Software / CRM Development',
        description: 'Tailor-made systems to automate operations, manage customers and improve efficiency.',
        features: [
            'Customer management systems',
            'Workflow automation',
            'Custom dashboards & reports',
            'Third-party integrations',
            'Scalable architecture',
            'Training & documentation',
        ],
    },
    {
        id: 'mobile',
        icon: TabletSmartphoneIcon,
        title: 'Mobile App Development (Android & iOS)',
        description: 'We build high-performance mobile apps using both Native and Cross-Platform technologies.',
        features: [
            'Native Android (Java & Kotlin)',
            'Native iOS development',
            'Cross-Platform with Flutter',
            'Cross-Platform with React Native',
            'App Store optimization',
            'Ongoing maintenance & updates',
        ],
    },
    {
        id: 'support',
        icon: HeadphonesIcon,
        title: 'Long-Term Support & Growth',
        description: 'Reliable ongoing support so your systems stay secure, updated and running smoothly.',
        features: [
            'Regular security updates',
            'Bug fixes & improvements',
            'Performance optimization',
            'Backup & recovery',
            'Priority support',
            'Long-term partnership',
        ],
    },
];

export default function ServicesPage() {
    return (
        <main className="px-4">
            {/* Background gradient blobs - restored (light version) */}
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

            {/* Background Image */}
            <div className="fixed inset-0 -z-30 pointer-events-none hidden dark:block">
                <Image
                    src="/assets/Services.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/80 dark:from-black/70 dark:via-black/40 dark:to-black/70 z-10" />
            </div>

            {/* Hero Section */}
            <motion.section className="flex flex-col items-center mt-24 text-center px-4 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight shadow-black dark:drop-shadow-[0_0_35px_rgba(255,255,255,0.5)]">
                    Our <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent drop-shadow-md dark:drop-shadow-[0_0_50px_rgba(255,122,24,1)]">Core Services</span>
                </h1>
                <p className="text-gray-700 dark:text-gray-100 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
                    Practical IT solutions that help your business grow. Custom development for startups and growing businesses.
                </p>
            </motion.section>

            {/* Services List */}
            <section className="mt-12 max-w-5xl mx-auto">
                <div className="space-y-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="relative rounded-3xl overflow-hidden bg-white/50 dark:bg-black/40 border border-black/10 dark:border-white/10 p-8 md:p-12 flex justify-center shadow-xl"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 320, damping: 70 }}
                        >
                            {/* Background glow effects inside the card matching CTA */}
                            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-orange-500/20 via-pink-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -z-10 pointer-events-none" />

                            <div className="w-full max-w-3xl relative z-10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                                        <service.icon className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium bg-gradient-to-r from-pink-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">{service.title}</h3>
                                        <p className="text-gray-700 dark:text-gray-200 mt-1">{service.description}</p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-3">What's Included:</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
                                                <div className="p-1 rounded-full bg-green-500/20">
                                                    <CheckIcon className="size-3 text-green-400" strokeWidth={3} />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <GradientButton href="/contact" className="mt-6 inline-block" loop={false}>
                                    Get Started →
                                </GradientButton>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Dedicated Services CTA Section */}
            <section className="mt-20 mb-24 max-w-5xl mx-auto px-4 relative z-10">
                <motion.div
                    className="relative rounded-3xl overflow-hidden bg-white/50 dark:bg-black/40 border border-black/10 dark:border-white/10 p-8 md:p-14 lg:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background glow effects inside the CTA */}
                    <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-orange-500/20 via-pink-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full -z-10 pointer-events-none" />

                    <div className="lg:max-w-xl">
                        <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-xs font-bold text-orange-400 uppercase tracking-widest inline-flex items-center gap-2 mb-6 shadow-[0_0_15px_rgba(255,122,24,0.15)]">
                            <span className="relative flex size-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
                            </span>
                            Start Your Project
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
                            Ready to build something <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">extraordinary?</span>
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                            Get a free technical consultation and a detailed project roadmap. We'll help you figure out the best technology, timeline, and budget.
                        </p>
                    </div>

                    <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
                        <Link
                            href="/contact?type=quote"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full font-bold text-white shadow-[0_8px_30px_rgba(255,122,24,0.3)] hover:shadow-[0_8px_40px_rgba(255,122,24,0.5)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 flex items-center gap-2">
                                Get Your Free Quote
                                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a
                                href="tel:+918968369582"
                                className="flex-1 flex justify-center items-center gap-3 px-6 py-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-400/50 rounded-full font-bold text-blue-700 dark:text-white transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] whitespace-nowrap group"
                            >
                                <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-1.5 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                                    <PhoneIcon className="size-4" fill="currentColor" />
                                </div>
                                Call Expert
                            </a>
                            <a
                                href="https://wa.me/918968369582"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex justify-center items-center gap-3 px-6 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400/50 rounded-full font-bold text-emerald-700 dark:text-white transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] whitespace-nowrap group"
                            >
                                <div className="bg-gradient-to-br from-emerald-400 to-green-600 text-white p-1.5 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                                    <MessageCircleIcon className="size-4" fill="currentColor" />
                                </div>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
