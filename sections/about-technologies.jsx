'use client';

import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

const technologies = [
    { name: "Flutter", icon: "📱", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "React", icon: "⚛️", color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "MERN / MEAN / MEVN", icon: "🚀", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Node.js", icon: "🟢", color: "text-green-600", bg: "bg-green-500/10", border: "border-green-500/20" },
    { name: "PHP / Laravel / CI", icon: "🐘", color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Shopify / Wordpress", icon: "🛍️", color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "REST API Development", icon: "⚡", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { name: "MySQL / MongoDB / PostgreSQL", icon: "🗄️", color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "UI / UX Design", icon: "🎨", color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
];

export default function AboutTechnologies() {
    return (
        <section className="py-24 px-4 relative overflow-hidden" id="technologies">
            {/* Ambient Backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto z-10 relative">
                <SectionTitle
                    title="Our Core Technologies"
                    description="We harness modern, scalable, and reliable tech stacks to build high-performance applications."
                    gradient={true}
                />

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-16">
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className={`flex items-center gap-3 px-6 py-4 rounded-full border ${tech.border} ${tech.bg} backdrop-blur-md cursor-pointer hover:shadow-xl hover:shadow-${tech.color.split('-')[1]}-500/20 transition-all duration-300 group`}
                        >
                            <span className="text-2xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                            <span className={`font-bold text-gray-800 dark:text-gray-200 group-hover:${tech.color} transition-colors text-sm md:text-base`}>
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
