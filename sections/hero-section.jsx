import { PhoneIcon, MessageCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import GradientButton from "@/components/gradient-button";
import LeadForm from "@/components/lead-form";

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
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff7a18]/5 via-black to-black z-10" />
                <div className="absolute inset-0 bg-black/70 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />
            </div>

            <section className="max-w-7xl mx-auto py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 60 }}
                    >
                        <div className="flex items-center gap-3">
                            <p className="text-lg">Trusted by startups & growing businesses</p>
                            <span className="btn glass global-orange-glow rounded-full py-1 px-3 text-sm">
                                10+ Years Experience
                            </span>
                        </div>
                        <h1 className="text-4xl/tight md:text-6xl/tight font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                            We Build <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,122,24,0.8)]">High-Performance Websites & Mobile Apps</span> That Generate Business
                        </h1>
                        <p className="text-gray-100 text-lg/relaxed max-w-xl">
                            Practical IT solutions for startups and growing businesses focused on leads, speed, and scalability.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <GradientButton href="/contact" className="max-md:w-full" contentClassName="bg-black/20 backdrop-blur-md" loop={false}>
                                Get Free Consultation
                            </GradientButton>
                            <GradientButton href="/contact?type=quote" className="max-md:w-full" contentClassName="bg-black/20 backdrop-blur-md flex items-center justify-center gap-2" loop={false}>
                                <MessageCircleIcon className="size-4.5" />
                                Request a Quote
                            </GradientButton>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 60 }}
                    >
                        <LeadForm title="Grow Your Business 🚀" description="Tell us about your project and get a custom quote within 24 hours." />
                    </motion.div>
                </div>
            </section>
        </>
    );
}
