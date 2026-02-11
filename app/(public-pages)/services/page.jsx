'use client';

import { motion } from "framer-motion";
import { GlobeIcon, SmartphoneIcon, HeadphonesIcon, CheckIcon, TabletSmartphoneIcon, PhoneIcon, MessageCircleIcon, CalendarIcon } from "lucide-react";
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
            <div className="fixed inset-0 -z-30 pointer-events-none">
                <Image
                    src="/assets/Services.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
            </div>

            {/* Hero Section */}
            <motion.section className="flex flex-col items-center mt-24"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-center text-4xl md:text-6xl font-semibold tracking-tight drop-shadow-[0_0_35px_rgba(255,255,255,0.5)]">
                    Our <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(255,122,24,1)]">Core Services</span>
                </h1>
                <p className="text-center text-gray-100 text-base/7 max-w-lg mt-6">
                    Practical IT solutions that help your business grow. Custom development for startups and growing businesses.
                </p>
            </motion.section>

            {/* Services List */}
            <section className="mt-12 max-w-5xl mx-auto">
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="global-orange-glow !bg-black/20 backdrop-blur-md p-8 rounded-xl flex justify-center"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 320, damping: 70 }}
                        >
                            <div className="w-full max-w-2xl">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                                        <service.icon className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium bg-gradient-to-r from-pink-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">{service.title}</h3>
                                        <p className="text-gray-200 mt-1">{service.description}</p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h4 className="text-sm font-medium text-gray-300 mb-3">What's Included:</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-gray-100">
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

            {/* CTA Section */}
            <motion.div
                className="flex flex-col max-w-5xl mt-20 mb-20 px-4 mx-auto items-center justify-center text-center py-16 rounded-xl glass global-orange-glow"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">Ready to Get Started?</h2>
                <p className="mt-4 text-gray-200 max-w-md">
                    Let's discuss your project and find the right solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                    <GradientButton
                        href="tel:+919876543210"
                        contentClassName="flex items-center gap-2 px-6"
                        loop={false}
                    >
                        <PhoneIcon className="size-4" />
                        Call Now
                    </GradientButton>
                    <GradientButton
                        href="https://wa.me/919876543210"
                        contentClassName="flex items-center gap-2 px-6 bg-green-600/30 hover:bg-green-600/50"
                        loop={false}
                    >
                        <MessageCircleIcon className="size-4" />
                        WhatsApp Us
                    </GradientButton>
                    <GradientButton href="/contact" contentClassName="flex items-center gap-2 px-6 bg-white/20" loop={false}>
                        <CalendarIcon className="size-4" />
                        Book Free Consultation
                    </GradientButton>
                </div>
            </motion.div>
        </main>
    );
}
