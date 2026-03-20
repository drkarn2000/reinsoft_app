'use client';

import { motion } from "framer-motion";
import { AppWindowIcon, SmartphoneIcon, Code2Icon, ShoppingCartIcon, ServerIcon, HeadphonesIcon } from "lucide-react";

const services = [
    {
        title: "Custom Software Development",
        description: "Tailored software solutions designed perfectly for your unique business logic and operational needs.",
        icon: <Code2Icon className="size-6 sm:size-8" />,
        gradient: "bg-gradient-to-r from-[#ff7a18] to-[#1e3a8a]",
        fold: "bg-orange-700",
        iconColor: "text-[#ff7a18]"
    },
    {
        title: "Mobile App Development",
        description: "High-performance cross-platform and native mobile applications for iOS and Android.",
        icon: <SmartphoneIcon className="size-6 sm:size-8" />,
        gradient: "bg-gradient-to-r from-[#ff7a18] to-[#1e3a8a]",
        fold: "bg-orange-700",
        iconColor: "text-[#ff7a18]"
    },
    {
        title: "Web App Development",
        description: "Scalable, secure, and blazing-fast web applications built with modern frameworks.",
        icon: <AppWindowIcon className="size-6 sm:size-8" />,
        gradient: "bg-gradient-to-r from-[#ff7a18] to-[#1e3a8a]",
        fold: "bg-orange-700",
        iconColor: "text-[#ff7a18]"
    },
    {
        title: "E-Commerce Development",
        description: "Feature-rich online stores optimized for conversion, speed, and seamless checkout.",
        icon: <ShoppingCartIcon className="size-6 sm:size-8" />,
        gradient: "bg-gradient-to-r from-[#ff7a18] to-[#1e3a8a]",
        fold: "bg-orange-700",
        iconColor: "text-[#ff7a18]"
    },
    {
        title: "API Development & Integration",
        description: "Robust REST and GraphQL APIs that seamlessly connect your digital ecosystem.",
        icon: <ServerIcon className="size-6 sm:size-8" />,
        gradient: "bg-gradient-to-r from-[#ff7a18] to-[#1e3a8a]",
        fold: "bg-orange-700",
        iconColor: "text-[#ff7a18]"
    },
    {
        title: "Maintenance & Support",
        description: "24/7 technical support and continuous maintenance to keep your systems flawlessly online.",
        icon: <HeadphonesIcon className="size-6 sm:size-8" />,
        gradient: "bg-gradient-to-r from-[#ff7a18] to-[#1e3a8a]",
        fold: "bg-orange-700",
        iconColor: "text-[#ff7a18]"
    }
];

export default function AboutServices() {
    return (
        <section className="py-24 px-4 relative overflow-hidden bg-black/[0.02] dark:bg-white/[0.02]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20 text-gray-900 dark:text-white">
                    <span className="px-4 py-1 rounded-full border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/50 text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight text-gray-800 dark:text-gray-100">
                        Our Services
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#ff7a18] to-blue-600 mx-auto rounded-full" />
                </div>

                <div className="flex flex-col gap-8 md:gap-10">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                            className="relative w-full h-[100px] sm:h-[120px] group flex"
                        >
                            {/* White Base Pill */}
                            <div className="absolute top-4 sm:top-5 bottom-0 left-0 right-10 sm:right-16 bg-white dark:bg-[#1a1a1a] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex items-center pl-6 sm:pl-10 z-10 transition-transform duration-300 group-hover:scale-[1.01] border border-gray-100 dark:border-gray-800">
                                <div className={`flex-shrink-0 ${service.iconColor} transition-transform duration-500 group-hover:rotate-12`}>
                                    {service.icon}
                                </div>
                            </div>

                            {/* 3D Ribbon Fold (The curved dark shape connecting back to the white pill) */}
                            {/* Instead of border tricks, we use an absolute div with border-radius for an exact curve */}
                            <div 
                                className={`absolute top-0 w-6 sm:w-8 h-4 sm:h-5 left-10 sm:left-[68px] ${service.fold} rounded-tl-full z-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1`}
                            />

                            {/* Colored Ribbon Overlap */}
                            {/* Shape match: Flat Top-Left (rounded-tl-none), Fully Rounded Bottom-Left (rounded-bl-full), Fully Rounded Right (rounded-r-full) */}
                            <div className={`absolute top-0 bottom-4 sm:bottom-5 left-16 sm:left-[100px] right-0 ${service.gradient} rounded-l-full rounded-tl-none rounded-r-full shadow-xl z-20 flex items-center px-6 sm:px-10 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1`}>
                                
                                <span className="text-5xl sm:text-6xl font-black drop-shadow-md shrink-0">
                                    0{i + 1}
                                </span>

                                <div className="flex flex-col overflow-hidden justify-center pl-4 sm:pl-8 ml-4 sm:ml-8 border-l border-white/30 truncate">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight truncate mb-1 shadow-black">{service.title}</h3>
                                    <p className="text-xs sm:text-sm text-white/90 truncate font-medium">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
