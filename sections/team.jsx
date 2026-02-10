import SectionTitle from "@/components/section-title";
import { UserIcon } from "lucide-react";

import { useRef } from "react";
import Image from "next/image";

export default function Team() {
    const refs = useRef([]);

    const teamMembers = [
        {
            name: "Tanu B",
            role: "CEO & Founder",
            bio: "Visionary leader with over 10 years of experience in the tech industry.",
            imageUrl: "/assets/Founder.jpeg"
        },
        {
            name: "Mr Singh",
            role: "Co-Founder",
            bio: "Full-stack wizard passionate about building scalable and efficient web applications.",
            imageUrl: "/assets/MrSingh.jpeg"
        },
        {
            name: "Amarjit Singh",
            role: "Full-Stack Developer",
            bio: "Creative mind focused on delivering intuitive and beautiful user experiences.",
            imageUrl: "/assets/Amarjit.jpeg"
        },
        {
            name: "Muneeb",
            role: "Project Manager",
            bio: "Ensures projects are delivered on time and within budget, keeping everyone on track.",
            imageUrl: "/assets/Muneeb.jpeg"
        }
    ];

    return (
        <section id="team" className="mt-16">
            <SectionTitle
                title="Meet Our Team"
                description="The talented individuals behind our success. We are dedicated to delivering the best results for your business."
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
                            <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff7a18_0%,#3b82f6_50%,#ff7a18_100%)]" />

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
