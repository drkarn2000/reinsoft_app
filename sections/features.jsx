'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

// The data object with the exact same content, including bullets
const servicesData = [
    {
        title: "Custom Website Development",
        description: "We design and develop high-performing, conversion-focused websites tailored to your business goals. From landing pages to full-scale platforms, every build is fast, responsive and optimized for growth.",
        cta: { label: "View Web Solutions", href: "/services/web-development" },
        image: "/assets/webbb.png",
        imageAlt: "Custom Website Development Illustration",
        imageAlign: "right", // image on the right
    },
    {
        title: "Custom Software Solutions",
        description: "Streamline your operations with tailored software built specifically for your workflows. We create scalable, secure, and efficient systems that eliminate manual work and improve productivity.",
        bullets: ["Fully tailored to your business", "Scalable architecture", "Automation & integrations"],
        cta: { label: "Explore Software Solutions", href: "/services" },
        image: "/assets/mohini_pos1.png",
        imageAlt: "Custom Software Solutions Illustration",
        imageAlign: "left", // image on the left
    },
    {
        title: "Mobile App Development",
        description: "Build powerful Android and iOS apps that deliver seamless user experiences. We focus on performance, usability, and scalability to help your product succeed in a competitive market.",
        cta: { label: "Discover Mobile Apps", href: "/services/mobile-app-development" },
        image: "/assets/mobile-app-illustration.png",
        imageAlt: "Mobile App Development Illustration",
        imageAlign: "right", // image on the right
    },
];

// 3D slide transition variants
const slideVariants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 800 : -800,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 25 : -25,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 800 : -800,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 25 : -25,
        };
    }
};

export default function Features() {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {
        const nextPage = page + newDirection;
        // prevent going out of bounds
        if (nextPage < 0 || nextPage >= servicesData.length) return;
        setPage([nextPage, newDirection]);
    };

    // Calculate the precise index (guaranteed positive because we block out of bounds above)
    const i = page;
    const service = servicesData[i];
    const isImageLeft = service.imageAlign === "left";

    // Progress percentage for visual feedback
    const progress = ((i + 1) / servicesData.length) * 100;

    return (
        <section className="py-20 bg-[#f8faff] dark:bg-[#0a0f1c] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-[34px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
                            Custom Software &amp; Web
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400">
                            Development Services
                        </span>
                    </h2>
                    <p className="text-[#475569] dark:text-slate-400 text-[16px] md:text-[18px] font-medium max-w-2xl mx-auto">
                        Three core services. No fluff. Just practical solutions that help your business grow.
                    </p>
                </div>

                {/* SLIDER CONTAINER */}
                <div className="relative w-full max-w-5xl mx-auto perspective-1000" style={{ perspective: '1200px' }}>
                    
                    {/* The Cards AnimatePresence Container */}
                    <div className="relative w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] p-1">
                        <div className="grid">
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <motion.div
                                    key={page}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.3 },
                                        scale: { duration: 0.5, ease: "easeOut" },
                                        rotateY: { duration: 0.5, ease: "easeOut" }
                                    }}
                                    className="w-full h-full"
                                    style={{ gridArea: "1 / 1" }}
                                >
                                    {/* Pristine Card Design (from the previous snapshot) */}
                                    <div className="group flex flex-col md:flex-row items-stretch overflow-hidden
                                                  bg-[#fdfbf9] dark:bg-slate-800/40 
                                                  border border-[#e6ecf5] dark:border-white/5 
                                                  rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 lg:p-16 gap-8 md:gap-16
                                                  shadow-2xl shadow-blue-900/10 dark:shadow-none h-full"
                                    >
                                    {/* Text Content Area */}
                                    <div className={`flex flex-col flex-1 justify-center order-2 ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}>
                                        <h3 className="text-3xl md:text-4xl font-bold text-[#1e293b] dark:text-white mb-5 leading-tight tracking-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#475569] dark:text-slate-300 text-[15px] md:text-[17px] leading-[1.7] mb-6">
                                            {service.description}
                                        </p>

                                        {service.bullets && (
                                            <ul className="mb-8 space-y-3">
                                                {service.bullets.map((b, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-[15px] text-[#334155] dark:text-slate-300 font-medium">
                                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <Link
                                            href={service.cta.href}
                                            className="inline-flex items-center gap-2 text-[15px] font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors w-fit"
                                        >
                                            {service.cta.label}
                                            <span className="text-lg transition-transform group-hover:translate-x-1">&rarr;</span>
                                        </Link>
                                    </div>

                                    {/* Illustration Area */}
                                    <div className={`flex items-center justify-center flex-shrink-0 w-full md:w-[360px] lg:w-[420px] order-1 ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
                                        <div className="relative w-full aspect-[4/3] transform transition-transform duration-700 group-hover:scale-[1.02]">
                                            <Image
                                                src={service.image}
                                                alt={service.imageAlt}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, 420px"
                                                priority={i === 0}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        </div>
                    </div>

                    {/* Progress & Navigation Controls */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-16 px-4">
                        
                        {/* Status Dots */}
                        <div className="flex items-center gap-3">
                            {servicesData.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        if (idx === page) return;
                                        setPage([idx, idx > page ? 1 : -1]);
                                    }}
                                    className="relative flex items-center justify-center focus:outline-none group"
                                    aria-label={`Go to slide ${idx + 1}`}
                                >
                                    {/* Unactive dot */}
                                    <span className={`block h-[6px] rounded-full transition-all duration-500 ${idx === page ? 'w-10 bg-blue-600' : 'w-2 bg-slate-300 group-hover:bg-slate-400 dark:bg-slate-700'}`} />
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Previous Button */}
                            <button
                                onClick={() => paginate(-1)}
                                disabled={page === 0}
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 text-blue-600 bg-white border border-[#e6ecf5] shadow-lg shadow-blue-900/5 ${page === 0 ? 'opacity-40 cursor-not-allowed scale-95' : 'hover:scale-105 hover:bg-blue-50'} dark:bg-slate-800 dark:border-white/10 dark:text-blue-400`}
                                aria-label="Previous service"
                            >
                                <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={() => paginate(1)}
                                disabled={page === servicesData.length - 1}
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 text-white shadow-lg shadow-blue-900/30 ${page === servicesData.length - 1 ? 'bg-slate-300 cursor-not-allowed scale-95 opacity-50' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 hover:shadow-blue-500/40'}`}
                                aria-label="Next service"
                            >
                                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
