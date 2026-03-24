'use client';

import { motion } from "framer-motion";
import { AppWindowIcon, SmartphoneIcon, Code2Icon, ShoppingCartIcon, ServerIcon, HeadphonesIcon } from "lucide-react";

const services = [
    {
        title: "Custom Software",
        description: "Tailored software solutions designed perfectly for your unique business logic and operational needs.",
        icon: <Code2Icon className="w-8 h-8" />,
        color: "from-blue-600 to-indigo-600",
        shadow: "shadow-[0_8px_30px_rgba(79,70,229,0.3)]",
        hoverGlow: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
    },
    {
        title: "Mobile Apps",
        description: "High-performance cross-platform and native mobile applications for iOS and Android.",
        icon: <SmartphoneIcon className="w-8 h-8" />,
        color: "from-[#ff7a18] to-orange-500",
        shadow: "shadow-[0_8px_30px_rgba(255,122,24,0.3)]",
        hoverGlow: "group-hover:text-orange-500 dark:group-hover:text-orange-400"
    },
    {
        title: "Web Applications",
        description: "Scalable, secure, and blazing-fast web applications built with modern frameworks.",
        icon: <AppWindowIcon className="w-8 h-8" />,
        color: "from-purple-600 to-pink-500",
        shadow: "shadow-[0_8px_30px_rgba(168,85,247,0.3)]",
        hoverGlow: "group-hover:text-purple-600 dark:group-hover:text-purple-400"
    },
    {
        title: "E-Commerce",
        description: "Feature-rich online stores optimized for conversion, speed, and seamless checkout.",
        icon: <ShoppingCartIcon className="w-8 h-8" />,
        color: "from-emerald-500 to-teal-400",
        shadow: "shadow-[0_8px_30px_rgba(16,185,129,0.3)]",
        hoverGlow: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400"
    },
    {
        title: "API & Integration",
        description: "Robust REST and GraphQL APIs that seamlessly connect your digital ecosystem.",
        icon: <ServerIcon className="w-8 h-8" />,
        color: "from-rose-500 to-red-500",
        shadow: "shadow-[0_8px_30px_rgba(244,63,94,0.3)]",
        hoverGlow: "group-hover:text-rose-600 dark:group-hover:text-rose-400"
    },
    {
        title: "Maintenance",
        description: "24/7 technical support and continuous maintenance to keep your systems flawlessly online.",
        icon: <HeadphonesIcon className="w-8 h-8" />,
        color: "from-cyan-500 to-blue-500",
        shadow: "shadow-[0_8px_30px_rgba(6,182,212,0.3)]",
        hoverGlow: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
    }
];

export default function AboutServices() {
    return (
        <section className="py-24 md:py-32 px-4 relative overflow-hidden bg-white dark:bg-[#050505]">
            {/* Animated Ambient Background Blurs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2 animate-pulse duration-10000" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#ff7a18]/5 dark:bg-[#ff7a18]/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3 animate-pulse duration-10000 delay-500" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Premium Section Heading */}
                <motion.div
                    className="text-center mb-24 group flex flex-col items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-gray-900 dark:text-gray-200 text-sm font-bold tracking-[0.2em] uppercase ml-2">
                            What We Do
                        </span>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-gray-900 dark:text-white leading-[1.1]">
                        Our Premium <br className="hidden md:block" />
                        <span className="relative inline-block mt-2">
                            <span className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-[#ff7a18]/20 blur-2xl opacity-50 dark:opacity-100 transition-opacity duration-500 group-hover:opacity-100 dark:group-hover:opacity-100"></span>
                            <span className="relative bg-gradient-to-r from-blue-600 via-indigo-500 to-[#ff7a18] bg-clip-text text-transparent">
                                Services
                            </span>
                        </span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                            className="group relative"
                        >
                            <div className="h-full bg-[#f8f9fa]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl border border-gray-200/60 dark:border-white/10 p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
                                
                                {/* Hover background glow blob */}
                                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${service.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700`} />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon Container with Gradient */}
                                    <div className={`mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg ${service.shadow} border border-white/20 group-hover:scale-110 transition-transform duration-500`}>
                                        {service.icon}
                                    </div>

                                    <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${service.hoverGlow} transition-colors`}>
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>
                                    
                                    <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-white/10">
                                        <div className={`flex items-center gap-2 text-sm font-bold tracking-wide text-gray-900 dark:text-white ${service.hoverGlow} transition-colors uppercase`}>
                                            <span>Explore Service</span>
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
