'use client';

import { useParams, notFound, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
    CheckCircle,
    ChevronRight,
    Globe,
    Layout,
    Layers,
    Zap,
    ArrowRight,
    Plus,
    Monitor,
    Smartphone,
    Trophy,
    Target,
    Search,
    ShoppingCart,
    Package,
    Activity,
    BarChart3,
    TrendingUp,
    ShieldCheck,
    Stethoscope,
    Users,
    Calendar,
    Video,
    FileText,
    Navigation,
    Map,
    ClipboardCheck,
    Sparkles
} from 'lucide-react';
import { caseStudies } from '@/lib/case-studies-data';

const IconMap = {
    Search,
    ShoppingCart,
    Package,
    Smartphone,
    Sparkles,
    Activity,
    BarChart3,
    TrendingUp,
    ShieldCheck,
    Zap,
    Stethoscope,
    Users,
    Calendar,
    Video,
    FileText,
    Navigation,
    Map,
    ClipboardCheck,
    Layout
};

const FeatureColors = [
    { text: "text-[#2db1c4]", bg: "bg-[#2db1c4]/10", border: "border-[#2db1c4]/30", shadow: "shadow-[#2db1c4]/20", circle: "bg-[#2db1c4]" },
    { text: "text-[#eb6361]", bg: "bg-[#eb6361]/10", border: "border-[#eb6361]/30", shadow: "shadow-[#eb6361]/20", circle: "bg-[#eb6361]" },
    { text: "text-[#8cb342]", bg: "bg-[#8cb342]/10", border: "border-[#8cb342]/30", shadow: "shadow-[#8cb342]/20", circle: "bg-[#8cb342]" },
    { text: "text-[#f39221]", bg: "bg-[#f39221]/10", border: "border-[#f39221]/30", shadow: "shadow-[#f39221]/20", circle: "bg-[#f39221]" },
    { text: "text-[#b677e1]", bg: "bg-[#b677e1]/10", border: "border-[#b677e1]/30", shadow: "shadow-[#b677e1]/20", circle: "bg-[#b677e1]" }
];

function CaseStudyContent() {
    const { slug } = useParams();
    const searchParams = useSearchParams();
    const hideDemo = searchParams.get('hideDemo') === 'true';
    const project = caseStudies.find(cs => cs.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-10 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff7a18]/5 to-transparent -z-10" />
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            <span className="px-4 py-1.5 rounded-full bg-[#ff7a18]/10 border border-[#ff7a18]/30 text-[#ff7a18] text-xs font-bold uppercase tracking-widest">
                                {project.industry}
                            </span>
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {project.title && (
                            <h1 className="text-xl font-bold mb-6">
                                {project.title}
                            </h1>
                        )}
                        {project.shortDescription && (
                            <p className="text-xl font-bold text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                                {project.shortDescription}
                            </p>
                        )}
                        {!hideDemo && project.showDemo !== false && (
                            <div className="flex flex-wrap justify-center gap-4">
                                {project.liveLink ? (
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3.5 bg-gradient-to-r from-[#ff7a18] to-[#ea4c89] rounded-full font-bold text-white shadow-lg shadow-[#ff7a18]/20 flex items-center gap-2 cursor-pointer"
                                    >
                                        <Globe size={18} /> Visit Live Demo
                                    </motion.a>
                                ) : (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3.5 bg-gradient-to-r from-[#ff7a18] to-[#ea4c89] rounded-full font-bold text-white shadow-lg shadow-[#ff7a18]/20 flex items-center gap-2"
                                    >
                                        <Globe size={18} /> Visit Live Demo
                                    </motion.button>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-20 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#ff7a18]">
                                <Target size={20} /> Project Overview
                            </h3>
                            <p className="text-gray-400 font-bold leading-relaxed px-8 border-l-2 border-[#ff7a18]/30">
                                {project.overview}
                            </p>
                        </div>
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-red-400">
                                    <Target size={20} /> The Problem
                                </h3>
                                <p className="text-gray-400 font-bold leading-relaxed px-8 border-l-2 border-red-400/30">
                                    {project.problem}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-green-400">
                                    <CheckCircle size={20} /> The Solution
                                </h3>
                                <p className="text-gray-400 font-bold leading-relaxed px-8 border-l-2 border-green-400/30">
                                    {project.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-xl font-bold mb-4">Core Capabilities</h2>
                        <p className="text-gray-400 font-bold text-lg">Industry-leading features implemented with precision.</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {project.features.map((feature, i) => {
                            const colors = FeatureColors[i % FeatureColors.length];
                            const FeatureIcon = IconMap[feature.icon] || Layers;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/[0.08] transition-all duration-500`}
                                >
                                    {/* Left Accent Bar */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors.circle}`} />

                                    {/* Number Circle */}
                                    <div className="p-6 md:p-8 shrink-0 flex items-center justify-center">
                                        <div className={`size-14 md:size-16 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center text-xl md:text-2xl font-black ${colors.text} shadow-xl ${colors.shadow} group-hover:scale-110 transition-transform duration-500`}>
                                            {i + 1}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow p-4 md:py-6 md:px-0 text-center md:text-left">
                                        <h3 className={`text-xl font-bold mb-3 ${colors.text}`}>{feature.title}</h3>
                                        <ul className="space-y-2">
                                            {feature.points.map((point, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-gray-400 font-bold text-xs md:text-sm justify-center md:justify-start">
                                                    <div className={`size-1 rounded-full ${colors.circle} opacity-60`} />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right Side Icon */}
                                    <div className="p-8 shrink-0 hidden md:flex items-center justify-center">
                                        <div className={`size-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${colors.text} opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}>
                                            <FeatureIcon size={24} strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Side Gradient Accent */}
                                    <div className={`absolute right-0 top-0 bottom-0 w-1 ${colors.circle} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Development Process (Our Methodology) */}
            <section className="py-24 bg-white/[0.01] overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-xl font-bold mb-4">
                            Our <span className="text-[#ff7a18]">Methodology</span>
                        </h2>
                        <p className="text-gray-400 font-bold text-lg max-w-2xl mx-auto">
                            A structured, roadmap-driven approach to delivering excellence in every project.
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Vertical Timeline Line */}
                        <div className="absolute top-0 left-6 bottom-0 w-0.5 bg-white/10 hidden md:block" />

                        <div className="space-y-12 relative">
                            {project.process.map((step, i) => {
                                // Match screenshot color sequence: Purple, Green, Orange, Teal, Red
                                const screenshotColors = [
                                    FeatureColors[4], // Purple
                                    FeatureColors[2], // Green
                                    FeatureColors[3], // Orange
                                    FeatureColors[0], // Teal
                                    FeatureColors[1]  // Red
                                ];
                                const colors = screenshotColors[i % screenshotColors.length];
                                const StepIcon = IconMap[step.stage] || IconMap["Layout"];

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-8 group"
                                    >
                                        {/* Number Indicator on Timeline */}
                                        <div className="relative shrink-0 hidden md:flex flex-col items-center">
                                            <div className={`size-12 rounded-full ${colors.circle} flex items-center justify-center text-white font-black text-xl shadow-lg z-10 group-hover:scale-110 transition-transform duration-500`}>
                                                {i + 1}
                                            </div>
                                            {i !== project.process.length - 1 && (
                                                <div className={`w-0.5 flex-grow ${colors.circle} opacity-30 mt-2`} />
                                            )}
                                        </div>

                                        {/* Step Card */}
                                        <div className={`flex-grow bg-[#111] border-2 ${colors.border} rounded-[2rem] p-6 md:p-8 pr-12 md:pr-24 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative group-hover:bg-white/[0.03] transition-colors duration-500`}>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className={`md:hidden size-8 rounded-full ${colors.circle} flex items-center justify-center text-white font-bold text-sm`}>
                                                        {i + 1}
                                                    </div>
                                                    <h3 className={`text-xl font-bold ${colors.text}`}>
                                                        {step.stage}
                                                    </h3>
                                                </div>
                                                <p className="text-gray-400 font-bold text-sm md:text-base leading-relaxed mb-4">
                                                    {step.description}
                                                </p>
                                                {step.points && (
                                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        {step.points.map((point, idx) => (
                                                            <li key={idx} className="flex items-center gap-2 font-bold text-xs text-gray-500">
                                                                <div className={`size-1 rounded-full ${colors.circle} opacity-60`} />
                                                                {point}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>

                                            {/* Right Circular Icon - Positioned on border */}
                                            <div className="absolute -right-10 md:-right-12 top-1/2 -translate-y-1/2 shrink-0 z-20">
                                                <div className={`size-20 md:size-24 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center ${colors.text} shadow-2xl group-hover:rotate-12 transition-transform duration-700`}>
                                                    <StepIcon size={40} strokeWidth={1.5} />
                                                </div>
                                            </div>

                                            {/* Background Subtle Accent */}
                                            <div className={`absolute top-0 right-0 w-32 h-full bg-gradient-to-l ${colors.bg} opacity-5 -z-10 rounded-r-[2rem]`} />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-20 bg-gradient-to-b from-black to-[#ff7a18]/10 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-xl font-bold mb-6">The Outcome</h2>
                        <p className="text-gray-400 font-bold text-lg">
                            Tangible impact and measurable results achieved post-launch.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {project.results.map((res, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 text-center"
                            >
                                <div className="text-3xl md:text-4xl font-black text-white mb-2">{res.value}</div>
                                <div className="text-xs font-bold text-[#ff7a18] uppercase tracking-widest leading-tight">{res.metric}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#ff7a18]/5 -z-10" />
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl font-bold mb-8">Ready to achieve similar results?</h2>
                        <p className="text-lg font-bold text-gray-400 mb-12">
                            Let's discuss how we can bring your vision to life with a high-performance digital solution.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-black rounded-full hover:bg-[#ff7a18] hover:text-white transition-all transform hover:scale-105 active:scale-95"
                        >
                            Start Your Project <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default function CaseStudyPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white font-bold">Loading...</div>}>
            <CaseStudyContent />
        </Suspense>
    );
}
