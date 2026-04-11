'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
    {
        name: "Manpreet Singh",
        role: "Founder & CEO",
        focus: "Vision & Growth",
        bio: "Leads Reinsoft with a sharp focus on scalable digital products, long-term strategy, and systems that create measurable business impact.",
        imageUrl: "/assets/Founders_pics/Manpreet_founder_CEO.png",
        accent: "from-[#c6a86a] via-[#e7d2a3] to-[#f5ead3]",
    },
    {
        name: "Tanu Bharti",
        role: "Co-Founder & CTO",
        focus: "Product & Delivery",
        bio: "Combines product thinking with technical execution to ensure every project feels polished, performant, and thoughtfully delivered.",
        imageUrl: "/assets/Founders_pics/Tanu_founder & CTO.png",
        accent: "from-[#b8955b] via-[#dbc08d] to-[#f3e6c7]",
    },
   
    {
        name: "Muneeb",
        role: "Project Analyst",
        focus: "Planning & Ops",
        bio: "Turns requirements into clarity by aligning timelines, communication, and delivery workflows so projects move with confidence.",
        imageUrl: "/assets/Muneeb.jpeg",
        accent: "from-[#b48b4d] via-[#d8be89] to-[#f5e6c5]",
    },
    
    {
        name: "Amarjit Singh",
        role: "Full-Stack Developer",
        focus: "Engineering",
        bio: "Builds secure, scalable applications across frontend and backend stacks with a strong emphasis on performance and usability.",
        imageUrl: "/assets/Amarjit.jpeg",
        accent: "from-[#a7864b] via-[#d4b77f] to-[#f0dfb8]",
    },
];

const sideHighlights = [
    {
        title: "Product Strategy",
        label: "From Idea to Direction",
        text: "We shape roadmaps, priorities, and product thinking so every build decision supports real business momentum.",
    },
    {
        title: "Reliable Delivery",
        label: "Built for Long-Term Growth",
        text: "From planning to launch and support, our team keeps execution clear, refined, and focused on outcomes.",
    },
];

const TeamCard = ({ member, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group relative h-full overflow-hidden rounded-[2rem] border border-[#d9c7a2]/22 bg-white/22 p-3 shadow-[0_24px_60px_-28px_rgba(21,24,32,0.14)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_90px_-36px_rgba(21,24,32,0.18)] dark:border-[#d6bd8a]/10 dark:bg-white/[0.02]"
        >
            <div className={`absolute inset-x-10 top-0 h-28 rounded-full bg-gradient-to-r ${member.accent} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-16`} />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(247,242,232,0.06))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(198,168,106,0.02))]" />

            <div className="relative flex h-full flex-col rounded-[1.6rem] border border-[#e9ddc4]/28 bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(251,248,241,0.10)_100%)] p-4 dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)]">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-95`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_36%)]" />
                    <div className="relative aspect-[4/4.7] overflow-hidden rounded-[1.4rem]">
                        <Image
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#120f0a]/26 via-[#120f0a]/6 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/5 to-transparent" />
                    </div>
                </div>

                <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                    <div className="mb-4">
                        <h3 className="text-[1.5rem] text-center font-black tracking-[-0.04em] text-[#18171a] dark:text-white">
                            {member.name}
                        </h3>

                        <div className="mt-3 flex justify-center">
                            <span className="inline-flex items-center justify-center rounded-full border border-[#f3b26a]/28 bg-[#fff1de]/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d96b16] dark:border-[#f3b26a]/18 dark:bg-white/[0.04] dark:text-[#ffb566]">
                                {member.role}
                            </span>
                        </div>
                    </div>

                    <p className="text-center text-sm leading-7 text-[#5d564a] dark:text-[#d1cabd]">
                        {member.bio}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[#e7dcc6]/55 pt-4 dark:border-white/10">
                        <div className="text-center lg:text-left">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a19784] dark:text-[#847b6e]">
                                Core Focus
                            </p>
                        </div>
                        <div className={`rounded-2xl bg-gradient-to-br ${member.accent} p-[1px] shadow-[0_8px_24px_-10px_rgba(198,168,106,0.8)]`}>
                            <div className="flex min-h-11 items-center justify-center rounded-2xl bg-[#fffdfa]/28 px-3 text-center dark:bg-white/[0.03]">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7b6440] dark:text-[#e4d0a3]">
                                    {member.focus}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default function Team() {
    const featuredMembers = teamMembers.slice(0, 3);
    const centerMember = teamMembers[3];

    return (
        <section id="team" className="relative overflow-hidden bg-transparent px-4 py-24 md:py-32">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_54%),linear-gradient(180deg,rgba(246,242,234,0.04),rgba(246,242,234,0.01))] dark:bg-[radial-gradient(circle_at_top,rgba(255,122,24,0.06),transparent_45%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.03),transparent_40%)]" />
                <div className="absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-[#d8c299]/10 blur-[120px] dark:bg-[#ff7a18]/6" />
                <div className="absolute right-[-8%] top-0 h-80 w-80 rounded-full bg-[#efe1c2]/20 blur-[130px] dark:bg-[#3b82f6]/4" />
                <div className="absolute bottom-[-4rem] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#dcc6a0]/12 blur-[110px] dark:bg-[#c6a86a]/5" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8a86a]/18 to-transparent dark:via-[#c8a86a]/12" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#ccb07a]/28 bg-white/35 px-5 py-2 shadow-[0_12px_32px_-22px_rgba(164,132,76,0.2)] backdrop-blur-md dark:border-[#c6a86a]/12 dark:bg-white/[0.03]"
                    >
                        <span className="h-2 w-2 rounded-full bg-[#c6a86a]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#9b7a42] dark:text-[#d9bf88]">
                            Our Team
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="text-4xl font-black leading-tight tracking-[-0.06em] text-[#171614] dark:text-white sm:text-5xl md:text-6xl"
                    >
                        A refined team building
                        <span className="bg-gradient-to-r from-[#9b7a42] via-[#c6a86a] to-[#e4d0a3] bg-clip-text text-transparent">
                            {" "}elevated digital products
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#665e52] dark:text-[#bfb7aa] md:text-lg"
                    >
                        Strategy, engineering, and delivery working in quiet harmony to craft products that feel premium, perform beautifully, and age well.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {featuredMembers.map((member, index) => (
                        <TeamCard key={member.name} member={member} index={index} />
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_320px_minmax(0,1fr)] xl:items-center">
                    <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.55 }}
                        className="relative overflow-hidden rounded-[2rem] border border-[#dccaa6]/20 bg-white/16 p-7 shadow-[0_24px_60px_-36px_rgba(31,24,10,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.01]"
                    >
                        <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-gradient-to-r from-[#c6a86a]/8 via-[#e7d2a3]/8 to-transparent blur-3xl" />
                        <p className="relative text-[10px] font-semibold uppercase tracking-[0.32em] text-[#9b7a42] dark:text-[#d9bf88]">
                            {sideHighlights[0].label}
                        </p>
                        <h3 className="relative mt-4 text-2xl font-black tracking-[-0.04em] text-[#18171a] dark:text-white">
                            {sideHighlights[0].title}
                        </h3>
                        <p className="relative mt-4 max-w-md text-sm leading-7 text-[#5d564a] dark:text-[#d1cabd]">
                            {sideHighlights[0].text}
                        </p>
                    </motion.article>

                    {centerMember && (
                        <div className="mx-auto w-full max-w-[340px]">
                            <TeamCard member={centerMember} index={3} />
                        </div>
                    )}

                    <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="relative overflow-hidden rounded-[2rem] border border-[#dccaa6]/20 bg-white/16 p-7 shadow-[0_24px_60px_-36px_rgba(31,24,10,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.01]"
                    >
                        <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-gradient-to-r from-transparent via-[#d8be89]/8 to-[#c6a86a]/8 blur-3xl" />
                        <p className="relative text-[10px] font-semibold uppercase tracking-[0.32em] text-[#9b7a42] dark:text-[#d9bf88]">
                            {sideHighlights[1].label}
                        </p>
                        <h3 className="relative mt-4 text-2xl font-black tracking-[-0.04em] text-[#18171a] dark:text-white">
                            {sideHighlights[1].title}
                        </h3>
                        <p className="relative mt-4 max-w-md text-sm leading-7 text-[#5d564a] dark:text-[#d1cabd]">
                            {sideHighlights[1].text}
                        </p>
                    </motion.article>
                </div>
            </div>
        </section>
    );
}
