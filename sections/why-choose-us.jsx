import SectionTitle from "@/components/section-title";
import { CheckCircleIcon, UsersIcon, LightbulbIcon, Headset, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function WhyChooseUs() {
    const refs = useRef([]);

    const reasons = [
        {
            icon: UsersIcon,
            title: "Experienced Team",
            description: "Our diverse team of experts brings years of experience in software development and IT solutions.",
        },
        {
            icon: LightbulbIcon,
            title: "Tailored Solutions",
            description: "We don't believe in one-size-fits-all. We build custom solutions that fit your specific business needs.",
        },
        {
            icon: Clock,
            title: "Timely Delivery",
            description: "We value your time. Our agile process ensures we deliver high-quality projects on schedule.",
        },
        {
            icon: ShieldCheck,
            title: "Reliable & Secure",
            description: "Security is our top priority. We build robust systems that keep your data safe and your business running.",
        },
        {
            icon: Headset,
            title: "Dedicated Support",
            description: "We are here for the long haul. Our support team is always ready to assist you post-launch.",
        },
        {
            icon: CheckCircleIcon,
            title: "Proven Track Record",
            description: "We have a history of delivering successful projects that help businesses grow and succeed.",
        }
    ];

    return (
        <section id="why-choose-us" className="mt-16 relative">
            <SectionTitle
                title="Why Choose Us"
                description="We are committed to delivering excellence. Here is why businesses trust us with their digital transformation."
                gradient={true}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-14 px-6 max-w-7xl mx-auto items-center">

                {/* Left Side: Vertical Cards */}
                <div className="flex flex-col gap-5">
                    {reasons.slice(0, 4).map((reason, index) => (
                        <motion.div
                            key={index}
                            ref={(el) => (refs.current[index] = el)}
                            className="gradient-border-card p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors flex items-start gap-5 w-full text-left group"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 320,
                                damping: 70,
                            }}
                        >
                            {/* Icon Container with subtle glow */}
                            <div className="p-4 bg-orange-500/10 rounded-xl shrink-0 group-hover:shadow-[0_0_15px_rgba(255,122,24,0.3)] transition-shadow">
                                <reason.icon className="size-7 text-orange-500" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed pr-4">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side: Image Display Area */}
                <motion.div
                    className="relative w-full h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 60 }}
                >
                    {/* Decorative blurred background instead of standard image for modern look */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-black z-0" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/20 blur-[80px] rounded-full" />

                    <Image
                        src="/assets/Case-study.jpg"
                        alt="Why Choose Us Showcase"
                        fill
                        className="object-cover z-10" // remove opacity + mix-blend
                    />

                    {/* A subtle glowing border overlay */}
                    <div className="absolute inset-0 rounded-3xl border border-orange-500/20 z-20 pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
}
