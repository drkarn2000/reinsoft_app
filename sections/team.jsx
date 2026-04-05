'use client';

import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
    {
        name: "Manpreet Singh",
        role: "Founder & CEO",
        bio: "With a strong focus on building scalable digital solutions, Manpreet leads the vision and strategy behind Reinsoft. He specializes in high-performing systems that drive results.",
        imageUrl: "/assets/Founders_pics/Manpreet_founder_CEO.png",
    },
    {
        name: "Tanu Bharti",
        role: "Co-Founder & CTO",
        bio: "Tanu brings innovation and execution together. With expertise in design and development, she ensures every project is delivered with creative precision.",
        imageUrl: "/assets/Founders_pics/Tanu_founder & CTO.png",
    },
    {
        name: "Amarjit Singh",
        role: "Full-Stack Developer",
        bio: "Specializes in building scalable, secure web applications using modern frontend and backend technologies to deliver seamless user experiences.",
        imageUrl: "/assets/Amarjit.jpeg",
    },
    {
        name: "Muneeb",
        role: "Project Analyst",
        bio: "Manages requirement analysis, project planning, timelines, and communication to ensure smooth, on-time delivery for all global clients.",
        imageUrl: "/assets/Muneeb.jpeg",
    }
];

const TeamCard = ({ member, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-white/5 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] h-full"
        >
            {/* 1. Image Area - Full Height Background */}
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-200 dark:bg-white/5">
                <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Subtle dark gradient overlay that intensifies on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500 z-10" />
            </div>

            {/* 2. Floating Info Box - Overlays the image at bottom */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 dark:border-white/5 transform transition-all duration-500 group-hover:-translate-y-2 z-20">
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1.5 leading-tight tracking-tight">
                    {member.name}
                </h3>
                
                {/* Expertise Badge */}
                <div className="mb-0 group-hover:mb-4 transition-all duration-500">
                    <div className="inline-block px-3 py-1 rounded-lg bg-[#0b8278]/10 dark:bg-[#0b8278]/20 text-[#0b8278] dark:text-[#0dc8b8] text-[9px] font-bold uppercase tracking-widest border border-[#0b8278]/20 shadow-sm">
                        {member.role}
                    </div>
                </div>

                {/* BIO Reveal - Animates from zero height/opacity to full */}
                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mt-2 border-t border-gray-100 dark:border-white/5 pt-3">
                        {member.bio}
                    </p>
                </div>

                {/* Subtle glassmorphic line for refined design */}
                <div className="w-8 h-1 bg-[#0b8278]/30 mt-3 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
            </div>
        </motion.div>
    );
};

export default function Team() {
    return (
        <section id="team" className="py-24 md:py-32 px-4 bg-[#fcfcfc] dark:bg-[#050505] relative overflow-hidden">
            {/* Subtle background decorative element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0b8278]/5 dark:bg-[#0b8278]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 lg:mb-28">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0b8278]/20 bg-[#0b8278]/5 mb-6 shadow-sm"
                    >
                        <span className="text-[#0b8278] text-[10px] font-bold uppercase tracking-[0.2em]">Our Experts</span>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white leading-[1.1] mb-6">
                        Meet The Minds Behind
                        <span className="relative inline-block ml-4 text-[#0b8278]">
                            Reinsoft
                        </span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto font-medium">
                        Transforming bold ideas into powerful digital reality through core engineering expertise and creative precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
