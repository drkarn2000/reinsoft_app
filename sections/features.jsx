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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6 max-w-7xl mx-auto relative z-10">
                {featuresData.map((feature, index) => {
                    // Distinct premium theme for each card with enhanced glow colors
                    const themes = [
                        { gradient: "from-blue-500 to-cyan-400", borderGlow: "group-hover:border-blue-500/60", text: "text-blue-400", topAccent: "via-blue-500", shadow: "group-hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]" },
                        { gradient: "from-fuchsia-500 to-pink-500", borderGlow: "group-hover:border-fuchsia-500/60", text: "text-fuchsia-400", topAccent: "via-fuchsia-500", shadow: "group-hover:shadow-[0_0_60px_rgba(217,70,239,0.3)]" },
                        { gradient: "from-emerald-400 to-teal-500", borderGlow: "group-hover:border-emerald-500/60", text: "text-emerald-400", topAccent: "via-emerald-500", shadow: "group-hover:shadow-[0_0_60px_rgba(16,185,129,0.3)]" }
                    ];
                    const theme = themes[index % themes.length];

                    return (
                        <motion.div
                            key={index}
                            ref={(el) => (refs.current[index] = el)}
                            className={`group relative rounded-3xl bg-white/[0.02] border border-white/[0.05] p-8 flex flex-col h-full transition-all duration-700 backdrop-blur-xl hover:-translate-y-2 ${theme.borderGlow} ${theme.shadow}`}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Intense Ambient Hover Glow behind the card */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700 pointer-events-none -z-10`} />

                            {/* Top Neon Accent Line */}
                            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[3px] bg-gradient-to-r transparent ${theme.topAccent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_20px_currentColor] ${theme.text}`} />

                            {/* Inner Glass Shine */}
                            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 rounded-t-3xl transition-opacity duration-700 pointer-events-none" />

                            {/* Glowing Icon Container */}
                            <div className="mb-8 relative w-fit z-10">
                                {/* Increased Icon Hover Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} blur-xl rounded-full opacity-10 group-hover:opacity-60 transition-opacity duration-700`} />
                                <div className="relative p-4 rounded-2xl bg-white/5 border border-white/10 text-white shadow-xl flex items-center justify-center group-hover:bg-white/10 transition-colors duration-700">
                                    <feature.icon className={`size-8 ${theme.text} group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_currentColor]`} strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Title and Description */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 font-medium leading-relaxed mb-8">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Custom Animated Link */}
                            <div className="mt-auto pt-6 border-t border-white/[0.05] relative z-10">
                                <Link
                                    href="/services"
                                    className={`inline-flex items-center gap-2 text-sm font-bold ${theme.text} hover:text-white transition-colors duration-300 w-fit group/link`}
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
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
