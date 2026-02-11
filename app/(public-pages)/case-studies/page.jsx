'use client';

import { motion } from "framer-motion";
import { CheckIcon, PhoneIcon, MessageCircleIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GradientButton from "@/components/gradient-button";

const caseStudies = [
    {
        id: 1,
        client: 'Professional Services Business',
        industry: 'Global Client Remote Collaboration',
        challenge: 'The client had a website that looked outdated and was not converting visitors into enquiries, especially on mobile devices. ',
        solution: 'We redesigned the website with a conversion-focused structure, clear CTAs, and direct WhatsApp & form integrations. The site was optimized for mobile performance, speed, and clarity to support global users.',
        results: [
            'Improved enquiry quality after launch',
            'Better engagement from mobile and international visitors',
            'Faster response through WhatsApp and contact forms',
            'More consistent inbound enquiries over time',
        ],
        testimonial: "The new website is much better. We're getting more enquiries now.",
        author: 'Business Owner',
    },
    {
        id: 2,
        client: 'Small Business (India)',
        industry: 'Business Operations',
        challenge: 'Manual customer tracking & follow-ups',
        solution: 'Custom CRM system tailored to their workflow. Simple interface for tracking customers, follow-ups, and sales pipeline.',
        results: [
            'Better customer management',
            'Time savings on manual data entry',
            'Improved follow-up tracking',
            'Clear visibility of sales pipeline',
        ],
        testimonial: 'Now we can actually keep track of our customers properly. Much easier than spreadsheets.',
        author: 'Managing Partner',
    },
];

export default function CaseStudiesPage() {
    return (
        <main className="px-4">
            {/* Background gradient blobs - same as home page */}
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

            <div className="fixed inset-0 -z-10 pointer-events-none">
                <Image
                    src="/assets/Case-study.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />
            </div>

            {/* Hero Section */}
            <motion.section className="flex flex-col items-center mt-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-center text-4xl md:text-6xl font-semibold tracking-tight drop-shadow-[0_0_35px_rgba(255,255,255,0.5)]">
                    Real Results  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(255,122,24,1)]">From Real Projects</span>
                </h1>
                <p className="text-center text-gray-100 text-base/7 max-w-xl mt-6">
                    Honest examples from actual client work across different industries. No fake numbers. Just real, practical outcomes. We work with businesses globally through remote collaboration and digital delivery.
                </p>
            </motion.section>

            {/* Case Studies */}
            <section className="mt-16 max-w-5xl mx-auto">
                <div className="space-y-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            className="global-orange-glow !bg-black/20 backdrop-blur-md p-8 rounded-xl"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 320, damping: 70 }}
                        >
                            {/* Header */}
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <h3 className="text-xl font-medium bg-gradient-to-r from-pink-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">{study.client}</h3>
                                <span className="px-3 py-1 rounded-full text-xs border border-white/20 bg-transparent text-gray-200">{study.industry}</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Challenge */}
                                <div>
                                    <h4 className="text-sm font-medium text-gray-400 mb-2">Challenge</h4>
                                    <p className="text-gray-100">{study.challenge}</p>
                                </div>

                                {/* Solution */}
                                <div>
                                    <h4 className="text-sm font-medium text-gray-400 mb-2">Solution</h4>
                                    <p className="text-gray-100">{study.solution}</p>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="mt-6">
                                <h4 className="text-sm font-medium text-gray-400 mb-3">Results</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {study.results.map((result, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-100">
                                            <div className="p-1 rounded-full bg-green-500/20 mt-0.5">
                                                <CheckIcon className="size-3 text-green-400" strokeWidth={3} />
                                            </div>
                                            {result}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Testimonial */}
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="text-gray-200 italic">"{study.testimonial}"</p>
                                <span className="text-sm text-gray-400 mt-2 block">- {study.author}</span>
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
                <h2 className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">Let's Write Your Success Story</h2>
                <p className="mt-4 text-gray-200 max-w-md">
                    Start your project with a free consultation: no pressure, no obligation.
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
