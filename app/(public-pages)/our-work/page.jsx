'use client';
import Portfolio from '@/sections/portfolio';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

export default function OurWorkPage() {
    return (
        <main className='px-4 pt-20'>
            <div className="max-w-4xl mx-auto text-center mb-[-60px] md:mb-[-80px] relative z-10">
                <p className="text-lg text-gray-600 dark:text-gray-300 px-4 mt-6">
                    See our latest product developments, web apps, and enterprise architecture built using modern tech stacks. We help brands worldwide achieve digital transformation. Review our portfolio to see real examples of our technical expertise.
                </p>
            </div>
            <Portfolio asH1={true} />

            {/* Compact Our Work CTA */}
            <section className="relative mt-16 mb-12 px-4">
                <motion.div
                    className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-rose-500/5 rounded-2xl" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />

                    <div className="relative z-10 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                                Ready to build something <span className="text-orange-500">amazing?</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                                Let's turn your vision into a product users love.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="group shrink-0 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:scale-105"
                        >
                            Start Your Project
                            <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
