'use client';

import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";

export default function TrustStrip() {
    return (
        <motion.div
            className="relative p-[2px] mt-12 max-w-3xl mx-auto rounded-full overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            {/* Spinning Gradient Border */}
            <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff7a18_0%,#3b82f6_50%,#ff7a18_100%)] opacity-80" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 md:gap-4 px-6 py-3 !bg-black/20 backdrop-blur-md rounded-full h-full w-full text-sm">
                <span className="flex items-center gap-1.5">
                    <StarIcon className="size-4 text-yellow-400 fill-yellow-400" />
                    Trusted by startups & businesses worldwide
                </span>
                <span className="hidden md:inline text-white/40">|</span>
                <span className="text-gray-200">10+ years experience</span>
                <span className="hidden md:inline text-white/40">|</span>
                <span className="text-gray-200">Remote global delivery</span>
            </div>
        </motion.div>
    );
}
