'use client';

import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { SmartphoneIcon, AtomIcon, LayersIcon, ServerCogIcon, CodeIcon, ShoppingCartIcon, NetworkIcon, DatabaseIcon, PaletteIcon } from "lucide-react";

const technologies = [
    { name: "Flutter", icon: <SmartphoneIcon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-blue-500 group-hover:text-white transition-colors duration-500" />, glow: "from-blue-500/0 via-blue-500/10 to-blue-500/20", borderHover: "group-hover:border-blue-500/40" },
    { name: "React", icon: <AtomIcon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-cyan-500 group-hover:text-white transition-colors duration-500" />, glow: "from-cyan-500/0 via-cyan-500/10 to-cyan-500/20", borderHover: "group-hover:border-cyan-500/40" },
    { name: "MERN / MEAN", icon: <LayersIcon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-emerald-500 group-hover:text-white transition-colors duration-500" />, glow: "from-emerald-500/0 via-emerald-500/10 to-emerald-500/20", borderHover: "group-hover:border-emerald-500/40" },
    { name: "Node.js", icon: <ServerCogIcon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-green-500 group-hover:text-white transition-colors duration-500" />, glow: "from-green-500/0 via-green-500/10 to-green-500/20", borderHover: "group-hover:border-green-500/40" },
    { name: "PHP & Laravel", icon: <CodeIcon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-indigo-500 group-hover:text-white transition-colors duration-500" />, glow: "from-indigo-500/0 via-indigo-500/10 to-indigo-500/20", borderHover: "group-hover:border-indigo-500/40" },
    { name: "Shopify", icon: <ShoppingCartIcon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-purple-500 group-hover:text-white transition-colors duration-500" />, glow: "from-purple-500/0 via-purple-500/10 to-purple-500/20", borderHover: "group-hover:border-purple-500/40" },
    { name: "REST APIs", icon: <NetworkIcon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-orange-500 group-hover:text-white transition-colors duration-500" />, glow: "from-orange-500/0 via-orange-500/10 to-orange-500/20", borderHover: "group-hover:border-orange-500/40" },
    { name: "Databases", icon: <DatabaseIcon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-rose-500 group-hover:text-white transition-colors duration-500" />, glow: "from-rose-500/0 via-rose-500/10 to-rose-500/20", borderHover: "group-hover:border-rose-500/40" },
    { name: "UI/UX Design", icon: <PaletteIcon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-pink-500 group-hover:text-white transition-colors duration-500" />, glow: "from-pink-500/0 via-pink-500/10 to-pink-500/20", borderHover: "group-hover:border-pink-500/40" },
];

export default function AboutTechnologies() {
    return (
        <section className="py-24 md:py-32 px-4 relative overflow-hidden bg-white/50 dark:bg-black/50 backdrop-blur-3xl" id="technologies">
            {/* Ambient Backgrounds - Now more intense but refined */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1000px] h-[500px] md:h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse duration-10000" />

            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="flex flex-col items-center justify-center text-center mb-20">
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        <span className="text-gray-900 dark:text-gray-200 text-sm font-bold tracking-[0.2em] uppercase ml-2">
                            Tech Stack
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 dark:text-white mb-6">
                            Our Core Technologies
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                            We harness modern, scalable, and reliable tech stacks to build high-performance applications.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-16 max-w-6xl mx-auto justify-center">
                    {/* Centering logic when on large screens with 9 items (5 in top row, 4 in bottom row) */}
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
                            className={`group relative h-40 md:h-48 rounded-[2rem] bg-white/80 dark:bg-black/40 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 flex flex-col items-center justify-center p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer ${tech.borderHover} ${i === 8 ? 'lg:col-start-4' : i === 7 ? 'lg:col-start-3' : i === 6 ? 'lg:col-start-2' : ''}`}
                        >
                            {/* Inner ambient hover glow */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${tech.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0`} />
                            
                            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out">
                                    {tech.icon}
                                </div>
                                <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm md:text-base group-hover:text-white transition-colors duration-500 z-10 px-2 lg:px-0">
                                    {tech.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
