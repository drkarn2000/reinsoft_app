import { PhoneIcon, MessageCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import GradientButton from "@/components/gradient-button";
export default function HeroSection() {

    return (
        <>
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </motion.div>

            <div className="fixed inset-0 -z-10 pointer-events-none">
                <Image
                    src="/assets/hero-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />
            </div>

            <motion.section className="flex flex-col items-center">
                <motion.div className="flex items-center gap-3 mt-20"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className="text-lg">Trusted by startups & growing businesses</p>
                    <span className="btn glass global-orange-glow rounded-full py-1 px-3 text-sm">
                        10+ Years Experience
                    </span>
                </motion.div>
                <motion.h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-4xl drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    We Build <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,122,24,0.8)]">High-Performance Websites & Mobile Apps</span> That Generate Business
                </motion.h1>
                <motion.p className="text-center text-gray-100 text-base/7 max-w-md mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Practical IT solutions for startups and growing businesses focused on leads, speed, and scalability.
                </motion.p>

                <motion.div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <GradientButton href="/contact" className="max-md:w-full" contentClassName="bg-black/20 backdrop-blur-md" loop={false}>
                        Get Free Consultation
                    </GradientButton>
                    <GradientButton href="/contact?type=quote" className="max-md:w-full" contentClassName="bg-black/20 backdrop-blur-md flex items-center justify-center gap-2" loop={false}>
                        <MessageCircleIcon className="size-4.5" />
                        Request a Quote (24h Response)
                    </GradientButton>
                </motion.div>
            </motion.section>
        </>
    );
}