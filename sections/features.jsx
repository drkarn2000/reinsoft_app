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
            <SectionTitle
                title="What We Do"
                description="Three core services. No fluff. Just practical solutions that help your business grow. Long-term support & growth included."
                gradient={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 max-w-7xl mx-auto">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="gradient-border-card p-6 rounded-2xl space-y-4 bg-white/5 hover:bg-white/10 transition-colors w-full h-full flex flex-col items-center text-center"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                        onAnimationComplete={() => {
                            const card = refs.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className="p-3 bg-orange-500/10 rounded-lg w-fit">
                            <feature.icon className="size-6 text-orange-500" />
                        </div>
                        <h3 className="w-fit text-xs px-3 py-1 rounded-full border bg-[#ff7a18]/10 border-[#ff7a18]/30 text-[#ff7a18] font-bold">
                            {feature.title}
                        </h3>
                        <p className="text-gray-300 pb-2">
                            {feature.description}
                        </p>
                        <GradientButton href="/services" className="mt-auto" loop={false}>
                            Learn More →
                        </GradientButton>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
