'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, ArrowUpRight } from "lucide-react";

export default function Founders() {
    return (
        <section className="py-24 md:py-32 px-4 relative overflow-hidden bg-[#f8f9fa] dark:bg-[#020202]">
            {/* Animated Ambient Background Blurs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ff7a18]/5 dark:bg-[#ff7a18]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 animate-pulse duration-10000" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#2563eb]/5 dark:bg-[#2563eb]/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3 animate-pulse duration-10000 delay-500" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Premium Section Heading */}
                <motion.div
                    className="text-center mb-28 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7a18] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7a18]"></span>
                        </span>
                        <span className="text-gray-900 dark:text-gray-200 text-sm font-bold tracking-[0.2em] uppercase ml-2">
                            Our Leadership
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-gray-900 dark:text-white leading-[1.1]">
                        Meet The Minds Behind <br className="hidden md:block" />
                        <span className="relative inline-block mt-2">
                            <span className="absolute -inset-2 bg-gradient-to-r from-[#ff7a18]/20 to-[#2563eb]/20 blur-2xl opacity-50 dark:opacity-100 transition-opacity duration-500 group-hover:opacity-100 dark:group-hover:opacity-100"></span>
                            <span className="relative bg-gradient-to-r from-[#ff7a18] via-[#e85d04] to-[#2563eb] bg-clip-text text-transparent">
                                Reinsoft IT Solutions
                            </span>
                        </span>
                    </h2>
                </motion.div>

                {/* Founders Flow */}
                <div className="flex flex-col gap-24 md:gap-32">

                    {/* Founder 1: Manpreet */}
                    <motion.div 
                        className="flex flex-col lg:flex-row items-center group relative"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Premium Image Frame */}
                        <div className="w-full lg:w-5/12 relative z-0">
                            <div className="relative aspect-[4/5] rounded-[3rem] p-3 border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:border-[#ff7a18]/30 group-hover:bg-[#ff7a18]/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ff7a18]/20 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-[#111] isolate shadow-inner">
                                    <Image
                                        src="/assets/Founders_pics/Manpreet_founder_CEO.png"
                                        alt="Manpreet Singh"
                                        fill
                                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                </div>
                            </div>
                        </div>

                        {/* Overlapping Content Card */}
                        <div className="w-full lg:w-8/12 -mt-10 lg:mt-0 lg:-ml-16 relative z-10">
                            <div className="bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-500 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(255,122,24,0.15)] overflow-hidden">
                                
                                {/* Decorative elements */}
                                <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-[#ff7a18]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute top-10 right-10 text-[#ff7a18] opacity-10">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 11L8 15H11V19H7L9 15H6V11H10ZM18 11L16 15H19V19H15L17 15H14V11H18Z" fill="currentColor"/>
                                    </svg>
                                </div>

                                <div className="mb-8 relative z-10">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff7a18]/10 to-[#ff7a18]/5 text-[#ff7a18] dark:text-[#ff9d5c] text-sm font-bold tracking-widest uppercase mb-4 border border-[#ff7a18]/20 shadow-[0_0_15px_rgba(255,122,24,0.1)]">
                                        Co-Founder & CEO
                                    </span>
                                    <h3 className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Manpreet Singh</h3>
                                </div>

                                <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-6 relative z-10">
                                    <p>
                                        With a strong focus on building scalable digital solutions, Manpreet Singh leads the vision and strategy behind the company. From working with startups to growing businesses, he specializes in creating high-performing websites and applications that drive real business results.
                                    </p>
                                    <p>
                                        His approach combines technical expertise with a deep understanding of user behavior, helping brands not just build products but grow sustainably.
                                    </p>
                                </div>

                                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10 relative z-10">
                                    <Link href="https://www.linkedin.com/in/founder-mr-singh/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 group/btn">
                                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0A66C2]/5 dark:bg-[#0A66C2]/10 text-[#0A66C2] dark:text-[#70b5f9] group-hover/btn:bg-[#0A66C2] group-hover/btn:text-white group-hover/btn:shadow-[0_0_20px_rgba(10,102,194,0.4)] transition-all duration-300 border border-[#0A66C2]/20">
                                            <Linkedin size={22} />
                                        </div>
                                        <span className="font-semibold text-gray-900 dark:text-white group-hover/btn:text-[#0A66C2] dark:group-hover/btn:text-[#70b5f9] transition-colors text-lg">Connect on LinkedIn</span>
                                        <ArrowUpRight className="text-gray-400 group-hover/btn:text-[#0A66C2] dark:group-hover/btn:text-[#70b5f9] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Founder 2: Tanu */}
                    <motion.div 
                        className="flex flex-col lg:flex-row-reverse items-center group relative"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    >
                        {/* Premium Image Frame */}
                        <div className="w-full lg:w-5/12 relative z-0">
                            <div className="relative aspect-[4/5] rounded-[3rem] p-3 border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:border-[#2563eb]/30 group-hover:bg-[#2563eb]/5">
                                <div className="absolute inset-0 bg-gradient-to-bl from-[#2563eb]/20 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-[#111] isolate shadow-inner">
                                    <Image
                                        src="/assets/Founders_pics/Tanu_founder & CTO.png"
                                        alt="Tanu Bharti"
                                        fill
                                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                </div>
                            </div>
                        </div>

                        {/* Overlapping Content Card */}
                        <div className="w-full lg:w-8/12 -mt-10 lg:mt-0 lg:-mr-16 relative z-10">
                            <div className="bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-500 lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] overflow-hidden">
                                
                                {/* Decorative elements */}
                                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tl from-[#2563eb]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute top-10 left-10 text-[#2563eb] opacity-10 hidden lg:block transform scale-x-[-1]">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 11L8 15H11V19H7L9 15H6V11H10ZM18 11L16 15H19V19H15L17 15H14V11H18Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div className="absolute top-10 right-10 text-[#2563eb] opacity-10 lg:hidden">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 11L8 15H11V19H7L9 15H6V11H10ZM18 11L16 15H19V19H15L17 15H14V11H18Z" fill="currentColor"/>
                                    </svg>
                                </div>

                                <div className="mb-8 lg:pl-16 relative z-10">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2563eb]/10 to-[#2563eb]/5 text-[#2563eb] dark:text-[#60a5fa] text-sm font-bold tracking-widest uppercase mb-4 border border-[#2563eb]/20 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                                        Co-Founder & CTO
                                    </span>
                                    <h3 className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Tanu Bharti</h3>
                                </div>

                                <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-6 lg:pl-16 relative z-10">
                                    <p>
                                        Tanu Bharti brings innovation and execution together. With expertise in design, development, and performance marketing, she ensures every project is delivered with precision and creativity.
                                    </p>
                                    <p>
                                        Her focus lies in turning ideas into impactful digital experiences that engage users and convert them into customers, acting as the creative and technical bridge for the company.
                                    </p>
                                </div>

                                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10 lg:pl-16 relative z-10">
                                    <Link href="https://www.linkedin.com/in/tanu-bharti-059452178/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 group/btn">
                                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0A66C2]/5 dark:bg-[#0A66C2]/10 text-[#0A66C2] dark:text-[#70b5f9] group-hover/btn:bg-[#0A66C2] group-hover/btn:text-white group-hover/btn:shadow-[0_0_20px_rgba(10,102,194,0.4)] transition-all duration-300 border border-[#0A66C2]/20">
                                            <Linkedin size={22} />
                                        </div>
                                        <span className="font-semibold text-gray-900 dark:text-white group-hover/btn:text-[#0A66C2] dark:group-hover/btn:text-[#70b5f9] transition-colors text-lg">Connect on LinkedIn</span>
                                        <ArrowUpRight className="text-gray-400 group-hover/btn:text-[#0A66C2] dark:group-hover/btn:text-[#70b5f9] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

