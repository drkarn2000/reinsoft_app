import SectionTitle from "@/components/section-title";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "Tanu B",
        role: "Founder & Co-Partner",
        bio: "Leads business strategy, client communication, and overall project direction to ensure every solution aligns with client goals.",
        imageUrl: "/assets/Founder.jpeg"
    },
    {
        name: "Mr Singh",
        role: "Co-Founder",
        bio: "Technical Lead & Co-Partner. Oversees architecture, development quality, and technical decision-making across web and mobile projects.",
        imageUrl: "/assets/MrSingh.jpeg"
    },
    {
        name: "Amarjit Singh",
        role: "Full-Stack Developer",
        bio: "Specializes in building scalable, secure web applications using modern frontend and backend technologies.",
        imageUrl: "/assets/Amarjit.jpeg"
    },
    {
        name: "Muneeb",
        role: "Project Analyst",
        bio: "Manages requirement analysis, project planning, timelines, and communication to ensure smooth and on-time delivery.",
        imageUrl: "/assets/Muneeb.jpeg"
    }
];

const TeamCard = ({ member, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center h-full p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors shadow-lg text-center gradient-border-card group"
        >
            {/* 1. Name on TOP */}
            <h4 className="font-semibold text-white text-lg mb-2">{member.name}</h4>

            {/* 2. Designation */}
            <span className="text-xs px-3 py-1 rounded-full bg-[#ff7a18]/10 border border-[#ff7a18]/30 text-[#ff7a18] mb-6 inline-block font-bold">
                {member.role}
            </span>

            {/* 3. Animated Avatar Container */}
            <div className="relative w-28 h-28 rounded-full overflow-hidden p-[3px] mb-6 shrink-0">
                {/* Spinning Gradient */}
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#ff7a18_0%,#3b82f6_50%,#ff7a18_100%)] animate-spin-slow" />

                {/* Avatar Content */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                    {member.imageUrl ? (
                        <Image
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <UserIcon className="size-12 text-gray-400" />
                    )}
                </div>
            </div>

            {/* 4. Content */}
            <p className="text-gray-300 leading-relaxed text-sm flex-grow">
                "{member.bio}"
            </p>
        </motion.div>
    );
};

export default function Team() {
    return (
        <section id="team" className="py-12 mt-8">
            <SectionTitle
                title="Meet Our Team"
                description="The talented individuals behind our success. We are dedicated to delivering the best results for your business."
                gradient={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6 max-w-7xl mx-auto">
                {teamMembers.map((member, index) => (
                    <TeamCard key={index} member={member} index={index} />
                ))}
            </div>
        </section>
    );
}
