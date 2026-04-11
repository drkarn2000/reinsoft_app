'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

// Centralized logo list
const defaultLogos = [
    "/assets/Brands logo/vendorconnect.png",
    "/assets/Brands logo/DURAup-2.png",
    "/assets/Brands logo/AccusterLogo_PNG-e1701758391141-1536x1036.png",
    "/assets/Brands logo/BJS.png",
    "/assets/Brands logo/Kamutalk1.png",
    "/assets/Brands logo/Shamrock Logo.png",
    "/assets/Brands logo/The_Mural_Story_-_Horizontal_-_Logo1.png",
    "/assets/Brands logo/angela.png",
    "/assets/Brands logo/cropped-DrLabike-New-logo-trans-261x300.png",
    "/assets/Brands logo/elmeck-logo.png",
    "/assets/Brands logo/cropped-New-VRidez-Logo.png",
    "/assets/Brands logo/j2wealth1.png",
    "/assets/Brands logo/opal.png",
    "/assets/Brands logo/sahasraai.png",
    "/assets/Brands logo/shopalic.png",
];

// 1. Grid Variant
function Grid({ logos }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center max-w-5xl mx-auto">
            {logos.slice(0, 10).map((logo, i) => (
                <div key={i} className="relative w-32 h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300">
                    <Image
                        src={logo}
                        alt={`Trusted Client Brand Logo ${i + 1}`}
                        title={`Trusted Client Brand Logo ${i + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 20vw"
                    />
                </div>
            ))}
        </div>
    );
}

// 2. Marquee Variant
function Marquee({ logos }) {
    return (
        <div className="overflow-hidden whitespace-nowrap relative w-full before:absolute before:left-0 before:top-0 before:bottom-0 before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent dark:before:from-[#0a0a0a] before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent dark:after:from-[#0a0a0a] after:z-10 py-6">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-200px * ${logos.length})); }
                }
                .animate-marquee-custom {
                    display: flex;
                    width: max-content;
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee-custom:hover {
                    animation-play-state: paused;
                }
            `}</style>
            <div className="animate-marquee-custom gap-16 items-center px-8">
                {[...logos, ...logos].map((logo, i) => (
                    <div key={i} className="relative w-40 h-16 shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <Image src={logo} alt={`Trusted Client Brand Logo ${i + 1}`} title={`Trusted Client Brand Logo ${i + 1}`} fill className="object-contain" sizes="160px" />
                    </div>
                ))}
            </div>
        </div>
    );
}

// 3. Cards Variant
function Cards({ logos }) {
    return (
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
            {logos.slice(0, 12).map((logo, i) => (
                <div
                    key={i}
                    className="p-6 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-44 h-28 relative flex items-center justify-center group"
                >
                    <div className="relative w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <Image src={logo} alt={`Trusted Client Brand Logo ${i + 1}`} title={`Trusted Client Brand Logo ${i + 1}`} fill className="object-contain" sizes="176px" />
                    </div>
                </div>
            ))}
        </div>
    );
}

// 4. Simple Slider Variant
function SimpleSlider({ logos }) {
    const [index, setIndex] = useState(0);
    const visibleLogos = logos.slice(0, 8); // Keep it curated for the slider

    const next = () => setIndex((index + 1) % visibleLogos.length);
    const prev = () => setIndex((index - 1 + visibleLogos.length) % visibleLogos.length);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 3000);
        return () => clearInterval(timer);
    }, [index, visibleLogos.length]);

    return (
        <div className="text-center max-w-sm mx-auto p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 relative">
            <div className="relative w-full h-32 mb-8 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                    >
                        <Image src={visibleLogos[index]} alt={`Trusted Client Brand Logo`} title={`Trusted Client Brand Logo`} fill className="object-contain" sizes="384px" />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center gap-4">
                <button 
                    onClick={prev}
                    className="p-3 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/20 shadow-sm hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    aria-label="Previous logo"
                >
                    <ChevronLeftIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <div className="flex items-center gap-2 px-4">
                    {visibleLogos.map((_, i) => (
                        <button 
                            key={i} 
                            onClick={() => setIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-orange-500 w-4' : 'bg-gray-300 dark:bg-gray-600'}`}
                            aria-label={`Go to logo ${i + 1}`}
                        />
                    ))}
                </div>
                <button 
                    onClick={next}
                    className="p-3 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/20 shadow-sm hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    aria-label="Next logo"
                >
                    <ChevronRightIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
            </div>
        </div>
    );
}

export default function BrandSection({ variant = "grid", title, badge }) {
    // Randomize logos on mount to ensure SSR matches client initially, or just rely on a seeded random if needed.
    // To avoid hydration mismatch, we sort safely inside a useEffect, OR we just do pseudo-random based on variant length.
    const [shuffledLogos, setShuffledLogos] = useState(defaultLogos);

    useEffect(() => {
        // Randomize on client-side only to avoid hydration errors
        setShuffledLogos([...defaultLogos].sort(() => Math.random() - 0.5));
    }, []);

    const displayTitle = title || "Brands We've Worked With";
    const displayBadge = badge || "👉 Trusted globally";

    return (
        <section className="py-16 w-full">
            <div className="max-w-7xl mx-auto text-center mb-12 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold tracking-wider uppercase mb-4">
                        {displayBadge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent pb-1">
                        {displayTitle}
                    </h2>
                </motion.div>
            </div>

            <div className="w-full">
                {variant === "slider" && <SimpleSlider logos={shuffledLogos} />}
                {variant === "marquee" && <Marquee logos={shuffledLogos} />}
                {variant === "cards" && <Cards logos={shuffledLogos} />}
                {variant === "grid" && <Grid logos={shuffledLogos} />}
            </div>
        </section>
    );
}
