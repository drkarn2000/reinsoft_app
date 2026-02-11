import SectionTitle from "@/components/section-title";
import { UserIcon } from "lucide-react";

import { useRef } from "react";
import Image from "next/image";

export default function Team() {
    const refs = useRef([]);

    const teamMembers = [
        {
            name: "Tanu B",
            role: "Founder & Co-Partner",
            bio: "Leads business strategy, client communication, and overall project direction to ensure every solution aligns with client goals..",
            imageUrl: "/assets/Founder.jpeg"
        },
        {
            name: "Mr Singh",
            role: "Co-Founder & Business Lead",
            bio: "Technical Lead & Co-Partner Oversees architecture, development quality, and technical decision-making across web and mobile projects.",
            imageUrl: "/assets/MrSingh.jpeg"
        },
        {
            name: "Amarjit Singh",
            role: "Full-Stack Developer",
            bio: "Senior Full-Stack Developer Specializes in building scalable, secure web applications using modern frontend and backend technologies.",
            imageUrl: "/assets/Amarjit.jpeg"
        },
        {
            name: "Muneeb",
            role: "Project Analyst & Delivery Manager",
            bio: "Manages requirement analysis, project planning, timelines, and communication to ensure smooth and on-time delivery.",
            imageUrl: "/assets/Muneeb.jpeg"
        }
    ];

    return (
        <section id="team" className="mt-16">
            <SectionTitle
                title="Meet Our Team"
                description="The talented individuals behind our success. We are dedicated to delivering the best results for your business. Supported by a trusted network of experienced developers and designers on a project basis."
                gradient={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6 max-w-7xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl global-orange-glow !bg-black/20 backdrop-blur-md flex flex-col items-center text-center group"
                    >
                        {/* Animated Avatar Container */}
                        <div className="relative w-32 h-32 rounded-full overflow-hidden p-[3px] mb-4">
                            {/* Spinning Gradient */}
                            <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#ff7a18_0%,#3b82f6_50%,#ff7a18_100%)]" />

                            {/* Avatar Content */}
                            <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-gray-700/50 flex items-center justify-center">
                                {member.imageUrl ? (
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <UserIcon className="size-16 text-gray-400 group-hover:text-orange-500 transition-colors" />
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl font-medium text-white">
                            {member.name}
                        </h3>
                        <p className="text-orange-400 text-sm font-medium mb-2">
                            {member.role}
                        </p>
                        <p className="text-gray-300 text-sm mb-4">
                            {member.bio}
                        </p>
                    </div>
                ))
                }
            </div>
        </section>
    );
}
