'use client';

import { motion } from "framer-motion";
import { TargetIcon, HeartIcon, SparklesIcon, RocketIcon } from "lucide-react";
import Image from "next/image";
import GradientButton from "@/components/gradient-button";
import WhyChooseUs from "@/sections/why-choose-us";
import Team from "@/sections/team";
import CallToAction from "@/sections/call-to-action";

export default function AboutPage() {
    return (
        <main className="min-h-screen selection:bg-orange-500/30">
            {/* Background elements */}
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
                    className="object-cover opacity-90 grayscale brightness-50"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
            </div>

            {/* Agency Intro Hero */}
            <section className="relative pt-6 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Centered Heading */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-blue-400 mb-6 inline-block">
                            About Reinsoft
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            We Build Digital Products That Matter
                        </h1>
                    </motion.div>

                    {/* Two-column: Description + Stats */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <motion.div
                            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 60 }}
                        >
                            <p className="text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed">
                                Reinsoft is a global software development agency dedicated to crafting innovative, high-performance digital solutions. We partner with businesses to turn bold ideas into reality.
                            </p>
                            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
                                With 10+ years of experience and a passion for clean code, we combine technical expertise with creative design to deliver products that delight users and drive growth.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
                                <GradientButton href="/contact" className="max-md:w-full" contentClassName="px-6 py-3 font-semibold bg-black/20 backdrop-blur-md" loop={false}>
                                    Get in Touch
                                </GradientButton>
                                <GradientButton href="/our-work" className="max-md:w-full" contentClassName="px-6 py-3 font-semibold bg-white/5 border border-white/10 backdrop-blur-md" loop={false}>
                                    View Our Work
                                </GradientButton>
                            </div>
                        </motion.div>

                        {/* Right: Stats Grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-5"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 60 }}
                        >
                            {[
                                { value: "10+", label: "Years of Experience", color: "from-blue-500 to-cyan-400", iconBg: "bg-blue-500/15", border: "border-blue-500/20", glow: "0, 150, 255" },
                                { value: "200+", label: "Projects Delivered", color: "from-orange-500 to-amber-400", iconBg: "bg-orange-500/15", border: "border-orange-500/20", glow: "255, 122, 24" },
                                { value: "100%", label: "Client Satisfaction", color: "from-emerald-500 to-green-400", iconBg: "bg-emerald-500/15", border: "border-emerald-500/20", glow: "16, 185, 129" },
                                { value: "24/7", label: "Dedicated Support", color: "from-purple-500 to-pink-400", iconBg: "bg-purple-500/15", border: "border-purple-500/20", glow: "168, 85, 247" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                                    className={`relative group bg-white/5 backdrop-blur-xl border ${stat.border} rounded-2xl p-6 md:p-8 text-center hover:bg-white/[0.08] hover:scale-[1.04] transition-all duration-500 overflow-hidden`}
                                    style={{
                                        animation: `stat-glow-${i} 3s ease-in-out infinite`,
                                        animationDelay: `${i * 0.5}s`,
                                    }}
                                >
                                    {/* Animated glow keyframes */}
                                    <style>{`
                                        @keyframes stat-glow-${i} {
                                            0%, 100% { box-shadow: 0 0 15px rgba(${stat.glow}, 0.15), 0 0 30px rgba(${stat.glow}, 0.05); }
                                            50% { box-shadow: 0 0 25px rgba(${stat.glow}, 0.4), 0 0 50px rgba(${stat.glow}, 0.15); }
                                        }
                                    `}</style>
                                    {/* Gradient glow */}
                                    <div className={`absolute -top-12 -right-12 size-28 bg-gradient-to-br ${stat.color} rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                                    {/* Top accent line */}
                                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${stat.color} opacity-60`} />
                                    <span className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                        {stat.value}
                                    </span>
                                    <p className="text-gray-300 text-sm md:text-base font-medium mt-3 leading-tight">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Team */}
            <Team />

            {/* Our Mission Section */}
            <section className="py-24 px-4 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">
                            Our <span className="text-orange-500">Mission</span>
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl mx-auto">
                            To empower businesses worldwide with world-class software solutions that are innovative, reliable, and built for long-term success. We believe great technology should be accessible to every ambitious business, no matter the size.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <TargetIcon className="size-7" />,
                                title: "Precision",
                                description: "Every line of code is crafted with purpose and attention to detail.",
                                color: "text-blue-400",
                                bg: "bg-blue-500/10",
                                border: "border-blue-500/20"
                            },
                            {
                                icon: <HeartIcon className="size-7" />,
                                title: "Passion",
                                description: "We genuinely love what we do, and it shows in every project.",
                                color: "text-rose-400",
                                bg: "bg-rose-500/10",
                                border: "border-rose-500/20"
                            },
                            {
                                icon: <SparklesIcon className="size-7" />,
                                title: "Innovation",
                                description: "We stay ahead of the curve, leveraging the latest technologies.",
                                color: "text-amber-400",
                                bg: "bg-amber-500/10",
                                border: "border-amber-500/20"
                            },
                            {
                                icon: <RocketIcon className="size-7" />,
                                title: "Impact",
                                description: "We measure success by the real-world value we deliver to clients.",
                                color: "text-emerald-400",
                                bg: "bg-emerald-500/10",
                                border: "border-emerald-500/20"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`${item.bg} border ${item.border} backdrop-blur-md rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}
                            >
                                <div className={`${item.color} mb-4 flex justify-center`}>
                                    {item.icon}
                                </div>
                                <h3 className={`text-lg font-bold ${item.color} mb-2`}>{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <CallToAction />
        </main>
    );
}
