'use client';

import { motion } from "framer-motion";

const brandImagesRow1 = [
    { src: "/assets/Brands logo/vendorconnect.png", className: "scale-[1.3] w-[85%] h-[85%] object-contain" },
    { src: "/assets/Brands logo/DURAup-2.png", className: "" },
    { src: "/assets/Brands logo/AccusterLogo_PNG-e1701758391141-1536x1036.png", className: "" },
    { src: "/assets/Brands logo/BJS.png", className: "" },
    { src: "/assets/Brands logo/Kamutalk1.png", className: "scale-[2.0]" },
    { src: "/assets/Brands logo/Shamrock Logo.png", className: "" },
    { src: "/assets/Brands logo/The_Mural_Story_-_Horizontal_-_Logo1.png", className: "scale-110", bgClass: "bg-gray-900 border-gray-800" },
    { src: "/assets/Brands logo/WhatsApp Image 2026-03-20 at 2.23.31 PM.jpeg", className: "scale-125 contrast-125" },
    { src: "/assets/Brands logo/angela.png", className: "" },
    { src: "/assets/Brands logo/cropped-DrLabike-New-logo-trans-261x300.png", className: "" },
    { src: "/assets/Brands logo/ZAAF Logo.png", className: "scale-125 object-contain" },
    { src: "/assets/Brands logo/PostPress.jpeg", className: "w-[85%] h-[85%] object-contain mix-blend-multiply", bgClass: "bg-white" },
    { src: "/assets/Brands logo/matematikk.png", className: "w-[90%] h-[90%] object-contain" },
    { src: "/assets/Brands logo/Macau.webp", className: "scale-125 object-contain mix-blend-multiply" }
];

const brandImagesRow2 = [
    { src: "/assets/Brands logo/elmeck-logo.png", className: "scale-[1.15] w-full h-full object-contain" },
    { src: "/assets/Brands logo/cropped-New-VRidez-Logo.png", className: "" },
    { src: "/assets/Brands logo/j2wealth1.png", className: "scale-110", bgClass: "bg-gray-900 border-gray-800" },
    { src: "/assets/Brands logo/opal.png", className: "" },
    { src: "/assets/Brands logo/property.jpeg", className: "scale-[2.6]" },
    { src: "/assets/Brands logo/purelife.jpeg", className: "scale-[1.35]" },
    { src: "/assets/Brands logo/sahasraai.png", className: "" },
    { src: "/assets/Brands logo/shopalic.png", className: "scale-[1.35]" },
    { src: "/assets/Brands logo/trucker.webp", className: "scale-[2.0]", bgClass: "bg-gray-900 border-gray-800" },
    { src: "/assets/Brands logo/logo Sport Info.png", className: "scale-[1.65] object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/fymate.png", className: "scale-[1.3] object-contain mix-blend-multiply" },
    { src: "/assets/Brands logo/Corridors.png", className: "scale-[1.4] object-contain mix-blend-multiply" }
];

export default function BrandsSlider({ variant = "home", title, badge, styleMode = "classic", speed = 35 }) {
    const isHome = variant === "home";
    const bgClass = isHome ? "bg-black/5 dark:bg-white/5 py-16" : "bg-transparent py-14";

    const displayTitle = title || (isHome ? "Trusted by Growing & Established Brands" : "Brands We've Worked With");
    const displayBadge = badge || "👉 Worked with 60+ brands worldwide";

    // Dynamic styles for logos
    const getCardStyle = (logo) => {
        let base = "rounded-2xl flex items-center justify-center shadow-md border hover:scale-105 transition-all duration-300 w-48 h-28 overflow-hidden";
        
        switch (styleMode) {
            case "glass":
                return `${base} bg-white/10 dark:bg-white/5 backdrop-blur-xl border-white/20 dark:border-white/10 p-5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]`;
            case "minimal":
                return `${base} bg-transparent border-transparent shadow-none hover:bg-black/5 dark:hover:bg-white/5 p-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100`;
            case "dark":
                return `${base} bg-[#0A0A0A] border-gray-800 p-4 shadow-lg`;
            case "outline":
                return `${base} bg-transparent border-dashed border-2 border-gray-300 dark:border-gray-700 p-4`;
            case "classic":
            default:
                return `${base} ${logo.bgClass || "bg-white border-black/5 dark:bg-white/5 dark:border-white/10"} p-4 hover:border-orange-500/40 hover:shadow-xl`;
        }
    };

    return (
        <section className={`relative overflow-hidden ${bgClass} w-full`}>
            {/* Headers based on layout */}
            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold tracking-wider uppercase mb-4">
                        {displayBadge}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent pb-1 max-w-4xl mx-auto">
                        {displayTitle}
                    </h2>
                </motion.div>
            </div>

            {/* Slider Track Container */}
            <div className="relative w-full overflow-hidden flex flex-col gap-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent dark:before:from-[#0a0a0a] before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent dark:after:from-[#0a0a0a] after:z-10">
                <style>{`
                    @keyframes scrollLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-260px * ${brandImagesRow1.length})); }
                    }
                    @keyframes scrollRight {
                        0% { transform: translateX(calc(-260px * ${brandImagesRow2.length})); }
                        100% { transform: translateX(0); }
                    }
                    .brands-marquee-left-${speed} {
                        display: flex;
                        animation: scrollLeft ${speed}s linear infinite;
                        width: calc(260px * ${brandImagesRow1.length * 2}); 
                    }
                    .brands-marquee-right-${speed} {
                        display: flex;
                        animation: scrollRight ${speed}s linear infinite;
                        width: calc(260px * ${brandImagesRow2.length * 2}); 
                    }
                    .brands-marquee-left-${speed}:hover, .brands-marquee-right-${speed}:hover {
                        animation-play-state: paused;
                    }
                `}</style>

                {/* Row 1: Right to Left */}
                <div className={`brands-marquee-left-${speed} items-center block`}>
                    {[...brandImagesRow1, ...brandImagesRow1].map((logo, index) => (
                        <div key={`r1-${index}`} className="flex-shrink-0 w-[260px] flex items-center justify-center px-4">
                            <div className={getCardStyle(logo)}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={logo.src}
                                    alt="Brand Logo"
                                    className={`object-contain transition-all duration-300 ${logo.className}`}
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 2: Left to Right */}
                <div className={`brands-marquee-right-${speed} items-center block`}>
                    {[...brandImagesRow2, ...brandImagesRow2].map((logo, index) => (
                        <div key={`r2-${index}`} className="flex-shrink-0 w-[260px] flex items-center justify-center px-4">
                            <div className={getCardStyle(logo)}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={logo.src}
                                    alt="Brand Logo"
                                    className={`object-contain transition-all duration-300 ${logo.className}`}
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
