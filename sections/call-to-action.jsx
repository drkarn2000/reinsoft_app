'use client';
import { PhoneIcon, MessageCircleIcon, CalendarIcon, ArrowRightIcon, SparklesIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="relative mt-24 mb-10 px-4">
            <motion.div
                className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                {/* Dark gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a12]" />

                {/* Glowing orbs */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#ff7a18]/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#3b82f6]/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Top border glow line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff7a18]/60 to-transparent" />
                {/* Bottom border glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent" />

                {/* Border */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 px-5 py-12 sm:px-8 sm:py-16 md:px-20 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left: Text */}
                    <div className="flex-1 text-left">
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <SparklesIcon className="size-3.5" />
                            Free Consultation Available
                        </motion.div>

                        <motion.h2
                            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Let's Build Something
                            <span className="block mt-1 bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#3b82f6] bg-clip-text text-transparent">
                                Extraordinary Together
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-gray-400 text-lg leading-relaxed max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            Get a clear solution, realistic timeline, and transparent pricing.
                            No pressure, no obligation — just results.
                        </motion.p>
                    </div>

                    {/* Right: CTA Buttons */}
                    <motion.div
                        className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[280px]"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        {/* Primary CTA */}
                        <Link href="/contact"
                            className="group flex items-center justify-between gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#ff7a18] to-[#ff4d4d] hover:from-[#ff8f35] hover:to-[#ff6060] text-white font-bold text-base shadow-[0_0_30px_rgba(255,122,24,0.3)] hover:shadow-[0_0_40px_rgba(255,122,24,0.5)] transition-all duration-300"
                        >
                            <span className="flex items-center gap-2">
                                <CalendarIcon className="size-5" />
                                Book Free Consultation
                            </span>
                            <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {/* Secondary CTAs */}
                        <div className="flex gap-3">
                            <Link href="tel:+918968369582"
                                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                            >
                                <PhoneIcon className="size-4 text-green-400" />
                                Call Now
                            </Link>
                            <Link href="https://wa.me/918968369582" target="_blank"
                                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 hover:border-green-500/50 text-green-400 font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                            >
                                <MessageCircleIcon className="size-4" />
                                WhatsApp
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}