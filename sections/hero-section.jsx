import { PhoneIcon, MessageCircleIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import GradientButton from "@/components/gradient-button";
import LeadForm from "@/components/lead-form";

const reveal = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
    const glowY = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section ref={sectionRef}>
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none hidden dark:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
            </motion.div>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    <motion.div
                        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                        variants={reveal}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
                        variants={reveal}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="w-full max-w-xl lg:max-w-none">
                            <LeadForm title="Grow Your Business 🚀" description="Tell us about your project and get a custom quote within 24 hours." />
                        </div>
                    </motion.div>
                </div>
            </section>
        </section>
    );
}
