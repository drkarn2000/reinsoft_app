import SectionTitle from "@/components/section-title";
import { GlobeIcon, SmartphoneIcon, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import GradientButton from "@/components/gradient-button";

export default function Features() {

    const refs = useRef([]);

    const featuresData = [
        {
            icon: GlobeIcon,
            title: "Custom Website Development",
            description: "Modern, fast and mobile-friendly websites designed to convert visitors into enquiries and sales.",
        },
        {
            icon: SmartphoneIcon,
            title: "Android & iOS App Development",
            description: "High-performance mobile applications built to grow your business and engage your users.",
        },
        {
            icon: HeadphonesIcon,
            title: "Long-Term Support & Growth",
            description: "Ongoing support and optimization to ensure your digital assets remain secure, fast, and stable.",
        }
    ];

    return (
        <section className="mt-16">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#ff7a18]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

            <SectionTitle
                title="What We Do"
                description="Three core services. No fluff. Just practical solutions that help your business grow. Long-term support & growth included."
                gradient={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-6 max-w-7xl mx-auto relative z-10">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.05] p-8 flex flex-col h-full hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.01)]"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                    >
                        {/* Hover Gradient Glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ff7a18]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Glowing Icon Container */}
                        <div className="mb-8 relative w-fit">
                            <div className="absolute inset-0 bg-[#ff7a18]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-white shadow-xl flex items-center justify-center">
                                <feature.icon className="size-8 group-hover:text-[#ff7a18] transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Title and Description */}
                        <h3 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                            {feature.title}
                        </h3>

                        <p className="text-gray-400 font-medium leading-relaxed mb-8 flex-grow">
                            {feature.description}
                        </p>

                        {/* Custom Animated Link replacing thick button */}
                        <div className="mt-auto pt-6 border-t border-white/[0.05]">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 text-sm font-bold text-[#ff7a18] hover:text-white transition-colors duration-300 w-fit group/link"
                            >
                                <span>Explore Service</span>
                                <motion.span
                                    className="inline-block"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    →
                                </motion.span>
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-full" />
                            </Link>
                        </div>

                        {/* Interactive border glow (pseudo-element for glowing rim effect) */}
                        <div className="absolute inset-0 rounded-3xl border border-[#ff7a18]/0 group-hover:border-[#ff7a18]/30 transition-colors duration-700 pointer-events-none" style={{ mixBlendMode: 'overlay' }} />

                    </motion.div>
                ))}
            </div>
        </section>
    );
}
