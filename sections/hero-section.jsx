import { PhoneIcon, MessageCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import GradientButton from "@/components/gradient-button";
import LeadForm from "@/components/lead-form";

export default function HeroSection() {

    return (
        <>
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none hidden dark:block"
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </motion.div>

            <div className="fixed inset-0 -z-10 pointer-events-none hidden dark:block">
                <Image
                    src="/assets/hero-bg.jpg"
                    alt="Reinsoft IT Solutions - Custom Software, Web & Mobile App Development Background"
                    title="Reinsoft IT Solutions - Expert Software, Web and Mobile App Development Services"
                    fill
                    className="object-cover opacity-90"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-400/10 via-white/20 to-white/40 dark:from-[#ff7a18]/5 dark:via-black dark:to-black z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/15 to-white dark:from-black/80 dark:via-black/50 dark:to-black z-10" />
            </div>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    <motion.div
                        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 60 }}
                    >
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                            <p className="text-base md:text-lg text-gray-800 dark:text-gray-200">Trusted by startups &amp; growing businesses</p>
                            <span className="btn glass global-orange-glow rounded-full py-1 px-3 text-sm whitespace-nowrap text-gray-900 dark:text-white">
                                10+ Years Experience
                            </span>
                        </div>
                        <h1 className="text-3xl/tight md:text-5xl/tight lg:text-[3.5rem] leading-[1.15] font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                            Custom Software, Web &amp; Mobile <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 dark:from-yellow-300 dark:via-orange-300 dark:to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,122,24,0.3)] dark:drop-shadow-[0_0_35px_rgba(255,122,24,0.8)]">App Development Company</span>
                        </h1>
                        <p className="text-gray-700 dark:text-gray-100 text-base md:text-lg/relaxed max-w-xl">
                            We build high-performance websites and mobile apps that generate business and scale effortlessly.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
                            {/* Primary CTA */}
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                                style={{
                                    background: 'linear-gradient(135deg, #ff7a18 0%, #e8530a 100%)',
                                    boxShadow: '0 4px 20px rgba(255,122,24,0.4), 0 0 0 0 rgba(255,122,24,0)'
                                }}
                                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 40px rgba(255,122,24,0.7), 0 0 60px rgba(255,122,24,0.25)'}
                                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,122,24,0.4), 0 0 0 0 rgba(255,122,24,0)'}
                            >
                                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                <span className="relative">Get Free Consultation</span>
                                <svg className="relative size-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                            </Link>
                            {/* Secondary CTA */}
                            <Link
                                href="/contact?type=quote"
                                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                                style={{
                                    background: 'linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)',
                                    boxShadow: '0 4px 18px rgba(30,30,46,0.45)'
                                }}
                                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 40px rgba(30,30,46,0.7), 0 0 50px rgba(100,100,200,0.15)'}
                                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 18px rgba(30,30,46,0.45)'}
                            >
                                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                <MessageCircleIcon className="relative size-4" />
                                <span className="relative">Request a Quote</span>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex justify-center lg:justify-end w-full"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 60 }}
                    >
                        <div className="w-full max-w-xl lg:max-w-none">
                            <LeadForm title="Grow Your Business 🚀" description="Tell us about your project and get a custom quote within 24 hours." />
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
