'use client';

import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Requirement Analysis", desc: "Understanding your goals, target audience, and business requirements deeply to set a solid foundation.", icon: "📋" },
    { num: "02", title: "Project Planning", desc: "Creating a comprehensive roadmap, defining tech stacks, and setting clear milestones and deliverables.", icon: "🎯" },
    { num: "03", title: "UI/UX Design", desc: "Crafting intuitive, engaging, and beautiful interfaces. Prototyping user journeys for seamless experiences.", icon: "✨" },
    { num: "04", title: "Development", desc: "Writing clean, scalable, and secure code. Building both the frontend architecture and backend systems.", icon: "💻" },
    { num: "05", title: "Testing & Quality Assurance", desc: "Rigorous testing across devices and scenarios to ensure zero bugs and peak performance.", icon: "🔍" },
    { num: "06", title: "Deployment", desc: "Smoothly launching your application to live servers or app stores with zero downtime.", icon: "🚀" },
    { num: "07", title: "Support & Maintenance", desc: "Continuous monitoring, updates, and optimization to ensure long-term success.", icon: "🛠️" }
];

export default function AboutProcess() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff7a18]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    title="Our Development Process"
                    description="A highly professional and transparent workflow ensuring on-time delivery without compromising quality."
                    gradient={true}
                />

                <div className="mt-20 relative max-w-5xl mx-auto">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[36px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff7a18]/0 via-[#ff7a18]/40 to-[#ff7a18]/0" />

                    <div className="flex flex-col gap-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full ${i % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : ""}`}
                            >
                                {/* Left/Right Content area */}
                                <div className="md:w-1/2 pl-[84px] md:pl-0">
                                    <div className={`bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-[#ff7a18]/30 transition-all duration-300 group inline-block w-full max-w-md ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                                        <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                            <span className="text-3xl bg-black/5 dark:bg-white/10 p-3 rounded-xl">{step.icon}</span>
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white capitalize leading-tight">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-10 w-[74px] h-[74px] flex items-center justify-center">
                                    <div className="w-[50px] h-[50px] rounded-full bg-white dark:bg-black border-4 border-[#ff7a18] shadow-[0_0_20px_rgba(255,122,24,0.4)] flex items-center justify-center text-sm font-black text-[#ff7a18]">
                                        {step.num}
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
