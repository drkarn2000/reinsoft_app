import { PhoneIcon, MessageCircleIcon, CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import GradientButton from "@/components/gradient-button";
export default function CallToAction() {
    return (
        <motion.div className="flex flex-col max-w-5xl mt-20 px-4 mx-auto items-center justify-center text-center py-16 rounded-xl global-orange-glow relative overflow-hidden"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/contact.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            <div className="relative z-20 flex flex-col items-center">
                <motion.h2 className="text-2xl md:text-4xl font-medium mt-2 bg-gradient-to-r from-[#3b82f6] to-[#ff7a18] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,122,24,0.5)]"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Let's discuss your project
                </motion.h2>
                <motion.p className="mt-4 text-sm/7 max-w-md"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
                >
                    Get a clear solution, realistic timeline, and transparent cost no pressure, no obligation.
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row items-center gap-4 mt-8"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <GradientButton
                        href="tel:+918968369582"
                        contentClassName="flex items-center gap-2 px-6"
                        loop={false}
                    >
                        <PhoneIcon className="size-4" />
                        Call Now
                    </GradientButton>
                    <GradientButton
                        href="https://wa.me/916283448462"
                        contentClassName="flex items-center gap-2 px-6 bg-green-600/30 hover:bg-green-600/50"
                        loop={false}
                    >
                        <MessageCircleIcon className="size-4" />
                        WhatsApp Us
                    </GradientButton>
                    <GradientButton href="/contact" contentClassName="flex items-center gap-2 px-6 bg-white/20">
                        <CalendarIcon className="size-4" />
                        Book Free Consultation
                    </GradientButton>
                </motion.div>
            </div>
        </motion.div>
    );
};