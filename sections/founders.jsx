'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Founders() {
    return (
        <section className="py-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-[#050505]">
            {/* Ambient Background Blur */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Heading */}
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold tracking-widest uppercase mb-6 inline-block">
                        Leadership
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
                        Meet The Minds Behind
                        <span className="block mt-2 bg-gradient-to-r from-[#ff7a18] to-blue-600 bg-clip-text text-transparent">
                            Reinsoft IT Solutions
                        </span>
                    </h2>
                </motion.div>

                {/* Founders Grid */}
                <div className="flex flex-col gap-12 md:gap-16">

                    {/* Founder 1: Manpreet (Image Left, Content Right) */}
                    <motion.div 
                        className="flex flex-col lg:flex-row bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* Premium Image Container */}
                        <div className="w-full lg:w-5/12 relative min-h-[400px] lg:min-h-[auto] overflow-hidden">
                            <Image
                                src="/assets/Founders_pics/Manpreet_founder_CEO.png"
                                alt="Manpreet Singh"
                                fill
                                className="object-cover object-top transition-transform duration-[10s] group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                            {/* Color Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#ff7a18]/80 via-[#ff7a18]/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                        </div>

                        {/* Contained Premium Content */}
                        <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white dark:bg-black/20 backdrop-blur-xl">
                            {/* Decorative Quote Mark */}
                            <div className="absolute top-6 right-10 text-[12rem] text-gray-100 dark:text-white/[0.03] font-serif leading-none select-none pointer-events-none -z-10 group-hover:-translate-y-2 transition-transform duration-500">
                                "
                            </div>

                            <div className="mb-8 relative z-10">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 dark:bg-[#ff7a18]/10 text-orange-600 dark:text-[#ff7a18] text-sm font-bold tracking-widest uppercase mb-4 border border-orange-200 dark:border-[#ff7a18]/20 shadow-[0_0_15px_rgba(255,122,24,0.1)]">
                                    Co-Founder & CEO
                                </span>
                                <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Manpreet Singh</h3>
                            </div>

                            <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-6 relative z-10">
                                <p>
                                    With a strong focus on building scalable digital solutions, Manpreet Singh leads the vision and strategy behind the company. From working with startups to growing businesses, he specializes in creating high-performing websites and applications that drive real business results.
                                </p>
                                <p>
                                    His approach combines technical expertise with a deep understanding of user behavior, helping brands not just build products but grow sustainably.
                                </p>
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-100 dark:border-white/10 flex items-center relative z-10">
                                <Link href="https://www.linkedin.com/in/founder-mr-singh/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] dark:text-[#70b5f9] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 font-bold border border-[#0A66C2]/20">
                                    <Linkedin size={20} />
                                    Connect on LinkedIn
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Founder 2: Tanu (Content Left, Image Right) */}
                    <motion.div 
                        className="flex flex-col lg:flex-row-reverse bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    >
                        {/* Premium Image Container */}
                        <div className="w-full lg:w-5/12 relative min-h-[400px] lg:min-h-[auto] overflow-hidden bg-black">
                            <Image
                                src="/assets/Founders_pics/Tanu_founder & CTO.png"
                                alt="Tanu Bharti"
                                fill
                                className="object-cover object-top transition-transform duration-[10s] group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                            {/* Color Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                        </div>

                        {/* Contained Premium Content */}
                        <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white dark:bg-black/20 backdrop-blur-xl">
                            {/* Decorative Quote Mark */}
                            <div className="absolute top-6 left-10 text-[12rem] text-gray-100 dark:text-white/[0.03] font-serif leading-none select-none pointer-events-none -z-10 group-hover:-translate-y-2 transition-transform duration-500">
                                "
                            </div>

                            <div className="mb-8 relative z-10">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-4 border border-blue-200 dark:border-blue-600/20 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                                    Co-Founder & CTO
                                </span>
                                <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Tanu Bharti</h3>
                            </div>

                            <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-6 relative z-10">
                                <p>
                                    Tanu Bharti brings innovation and execution together. With expertise in design, development, and performance marketing, she ensures every project is delivered with precision and creativity.
                                </p>
                                <p>
                                    Her focus lies in turning ideas into impactful digital experiences that engage users and convert them into customers, acting as the creative and technical bridge for the company.
                                </p>
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-100 dark:border-white/10 flex items-center relative z-10">
                                <Link href="https://www.linkedin.com/in/tanu-bharti-059452178/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] dark:text-[#70b5f9] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 font-bold border border-[#0A66C2]/20">
                                    <Linkedin size={20} />
                                    Connect on LinkedIn
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
