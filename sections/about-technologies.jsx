'use client';

import { motion } from "framer-motion";
import {
    SmartphoneIcon,
    AtomIcon,
    LayersIcon,
    ServerCogIcon,
    CodeIcon,
    ShoppingCartIcon,
    NetworkIcon,
    DatabaseIcon,
    PaletteIcon,
    GlobeIcon,
    MonitorSmartphoneIcon,
    BlocksIcon
} from "lucide-react";

const technologies = [
    {
        name: "Flutter",
        category: "Cross-Platform Apps",
        icon: SmartphoneIcon,
        accent: "from-[#c89b52] via-[#e3c58f] to-[#f5ead3]",
        iconColor: "text-[#b67a21]",
        description: "For polished, high-performance mobile apps with one codebase across iOS and Android.",
    },
    {
        name: "React",
        category: "Modern Frontends",
        icon: AtomIcon,
        accent: "from-[#caa461] via-[#e7cf9f] to-[#f7edde]",
        iconColor: "text-[#c0841c]",
        description: "For responsive interfaces that feel fast, intuitive, and refined across every screen.",
    },
    {
        name: "MERN / MEAN",
        category: "Full-Stack Systems",
        icon: LayersIcon,
        accent: "from-[#bf9050] via-[#ddbe89] to-[#f3e4c8]",
        iconColor: "text-[#a96c1c]",
        description: "For connected platforms where frontend, backend, and data layers work in clean alignment.",
    },
    {
        name: "Node.js",
        category: "Backend Services",
        icon: ServerCogIcon,
        accent: "from-[#b98745] via-[#d8b77f] to-[#f0ddba]",
        iconColor: "text-[#996217]",
        description: "For scalable server-side systems, real-time workflows, and modern API-driven architecture.",
    },
    {
        name: "PHP & Laravel",
        category: "Robust Web Platforms",
        icon: CodeIcon,
        accent: "from-[#c18d4c] via-[#dfbf88] to-[#f4e4c5]",
        iconColor: "text-[#a86416]",
        description: "For dependable web platforms, business portals, and custom products built for longevity.",
    },
    {
        name: "Shopify",
        category: "Commerce Experiences",
        icon: ShoppingCartIcon,
        accent: "from-[#c59a58] via-[#e2c78f] to-[#f5e8cf]",
        iconColor: "text-[#b56f18]",
        description: "For premium storefronts and conversion-focused ecommerce experiences that scale with growth.",
    },
    {
        name: "REST APIs",
        category: "Connected Architecture",
        icon: NetworkIcon,
        accent: "from-[#bc8744] via-[#d8b57d] to-[#eedbb8]",
        iconColor: "text-[#9d6215]",
        description: "For seamless integration between products, services, and third-party business systems.",
    },
    {
        name: "Databases",
        category: "Stable Data Foundations",
        icon: DatabaseIcon,
        accent: "from-[#c09252] via-[#dfc28b] to-[#f4e5ca]",
        iconColor: "text-[#ab6d18]",
        description: "For structured, secure, and reliable data layers that support product performance at scale.",
    },
    {
        name: "UI/UX Design",
        category: "Product Experience",
        icon: PaletteIcon,
        accent: "from-[#c89c5c] via-[#e3c993] to-[#f7ecda]",
        iconColor: "text-[#b7771d]",
        description: "For digital experiences that feel clear, elegant, and aligned with real user behavior.",
    },
];

const serviceHighlights = [
    {
        title: "Mobile Apps",
        text: "Built for iOS and Android with smooth performance and premium usability.",
        icon: MonitorSmartphoneIcon,
    },
    {
        title: "Web Development",
        text: "High-performing websites and platforms designed for speed, scale, and clarity.",
        icon: GlobeIcon,
    },
    {
        title: "Custom Software",
        text: "Tailored systems that streamline operations and support long-term business growth.",
        icon: BlocksIcon,
    },
];

export default function AboutTechnologies() {
    return (
        <section
            id="technologies"
            className="relative overflow-hidden bg-[#f7f2e9] px-4 py-24 dark:bg-transparent md:py-32"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.78),transparent_48%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,122,24,0.10),transparent_45%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_40%)]" />
                <div className="absolute left-[6%] top-20 h-72 w-72 rounded-full bg-[#ead8b2]/60 blur-[120px] dark:bg-[#ff7a18]/8" />
                <div className="absolute right-[8%] top-10 h-80 w-80 rounded-full bg-[#f2e5cb]/70 blur-[130px] dark:bg-[#3b82f6]/8" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c6a86a]/45 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
                    <motion.div
                        className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#ccb07a]/40 bg-white/85 px-5 py-2 shadow-[0_12px_32px_-22px_rgba(164,132,76,0.45)] backdrop-blur-md dark:border-[#c6a86a]/20 dark:bg-white/[0.04]"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                    >
                        <span className="h-2 w-2 rounded-full bg-[#c6a86a]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#9b7a42] dark:text-[#d9bf88]">
                            Our Core Technologies
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="text-4xl font-black leading-tight tracking-[-0.06em] text-[#171614] dark:text-white sm:text-5xl md:text-6xl"
                    >
                        The technology stack behind
                        <span className="bg-gradient-to-r from-[#9b7a42] via-[#c6a86a] to-[#e4d0a3] bg-clip-text text-transparent">
                            {" "}refined digital products
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#665e52] dark:text-[#bfb7aa] md:text-lg"
                    >
                        We combine trusted frameworks, scalable backend systems, and thoughtful product design tools to build fast, resilient, and premium experiences.
                    </motion.p>
                </div>

                <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <motion.article
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55 }}
                        className="group relative overflow-hidden rounded-[2.1rem] border border-[#dccaa6] bg-[linear-gradient(135deg,#1d1a15_0%,#2a241b_45%,#43341f_100%)] p-8 shadow-[0_30px_80px_-40px_rgba(18,14,8,0.82)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_38px_95px_-42px_rgba(18,14,8,0.92)] dark:bg-white/[0.04] dark:border-white/10"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,225,194,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(198,168,106,0.18),transparent_30%)] transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e5d3ad]/55 to-transparent transition-opacity duration-500 group-hover:via-[#f0ddb5]" />
                        <div className="relative z-10">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#dcc79e]">
                                Technology Philosophy
                            </p>
                            <h3 className="mt-4 max-w-xl text-3xl font-black tracking-[-0.05em] text-white md:text-[2.4rem]">
                                Modern tools, selected with restraint and built for longevity.
                            </h3>
                            <p className="mt-5 max-w-2xl text-base leading-8 text-[#ddd1bb]">
                                We do not chase trends for the sake of novelty. Every technology we use is chosen to improve reliability, speed, maintainability, and the overall feel of the product.
                            </p>

                            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {[
                                    { value: "Frontend", label: "Fast, responsive interfaces" },
                                    { value: "Backend", label: "Stable systems and APIs" },
                                    { value: "Design", label: "Clear product experiences" },
                                ].map((item) => (
                                    <div
                                        key={item.value}
                                        className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-md transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/8"
                                    >
                                        <p className="text-lg font-black tracking-[-0.04em] text-[#f7eddc]">
                                            {item.value}
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-[#d3c6ad]">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 md:grid-cols-[1.15fr_0.85fr]">
                                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-md">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#dcc79e]">
                                        How We Use It
                                    </p>
                                    <div className="mt-4 flex flex-wrap items-center gap-3">
                                        {["Research", "Architecture", "Build", "Refine", "Scale"].map((step, index) => (
                                            <div key={step} className="flex items-center gap-3">
                                                <span className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f7eddc] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/12">
                                                    {step}
                                                </span>
                                                {index < 4 && <span className="text-[#cdbd9e]/70">+</span>}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-md transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/8">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#dcc79e]">
                                        Outcome
                                    </p>
                                    <p className="mt-4 text-base leading-8 text-[#f3e7d2]">
                                        A product stack that feels elegant on the surface and dependable underneath.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    <motion.article
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="group relative overflow-hidden rounded-[2.1rem] border border-[#dccaa6] bg-white/78 p-7 shadow-[0_24px_60px_-34px_rgba(31,24,10,0.34)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_80px_-38px_rgba(31,24,10,0.42)] dark:border-[#d6bd8a]/12 dark:bg-white/[0.03]"
                    >
                        <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-gradient-to-r from-[#c6a86a]/25 via-[#e7d2a3]/25 to-transparent blur-3xl transition-all duration-500 group-hover:opacity-90 group-hover:scale-110" />
                        <div className="relative z-10">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#9b7a42] dark:text-[#d9bf88]">
                                What This Means
                            </p>
                            <h3 className="mt-4 text-2xl font-black tracking-[-0.04em] text-[#18171a] dark:text-white">
                                A stack that supports polish and scale
                            </h3>
                            <p className="mt-4 text-sm leading-7 text-[#5d564a] dark:text-[#d1cabd]">
                                The result is faster delivery, cleaner architecture, and products that feel as good to use as they are to maintain.
                            </p>

                            <div className="mt-6 space-y-4">
                                {serviceHighlights.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="flex items-start gap-4 rounded-[1.2rem] border border-[#eadfc8] bg-[#fffaf1] px-4 py-4 transition-all duration-500 hover:border-[#e6c78f] hover:bg-[#fff6e8] dark:border-white/8 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
                                        >
                                            <div className="rounded-2xl border border-[#e6c78f] bg-[#fff3de] p-3 transition-all duration-500 group-hover:scale-105 dark:border-[#c6a86a]/15 dark:bg-[#1c1610]">
                                                <Icon className="h-5 w-5 text-[#b7771d] transition-transform duration-500 group-hover:rotate-[-6deg] dark:text-[#d9bf88]" strokeWidth={1.8} />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold tracking-[-0.02em] text-[#18171a] dark:text-white">
                                                    {item.title}
                                                </h4>
                                                <p className="mt-1 text-sm leading-6 text-[#5d564a] dark:text-[#d1cabd]">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.article>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {technologies.map((tech, index) => {
                        const Icon = tech.icon;

                        return (
                            <motion.article
                                key={tech.name}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, delay: index * 0.05 }}
                                className="group relative overflow-hidden rounded-[2rem] border border-[#dccaa6] bg-white/78 p-3 shadow-[0_24px_60px_-36px_rgba(31,24,10,0.32)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#d1b17b] hover:shadow-[0_34px_80px_-40px_rgba(31,24,10,0.4)] dark:border-[#d6bd8a]/12 dark:bg-white/[0.03]"
                            >
                                <div className={`absolute inset-x-10 top-0 h-24 rounded-full bg-gradient-to-r ${tech.accent} opacity-30 blur-3xl transition-all duration-500 group-hover:opacity-55 group-hover:scale-110`} />
                                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#cfaf78]/0 to-transparent transition-all duration-500 group-hover:via-[#cfaf78]/80" />

                                <div className="relative flex h-full min-h-[270px] flex-col rounded-[1.6rem] border border-[#eadfc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f1_100%)] p-6 transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#ffffff_0%,#f9f3e8_100%)] dark:border-white/8 dark:bg-[linear-gradient(180deg,#111111_0%,#0b0b0b_100%)] dark:group-hover:bg-[linear-gradient(180deg,#151515_0%,#0d0d0d_100%)]">
                                    <div className="mb-10 flex items-start justify-between gap-4">
                                        <div>
                                            <span className="inline-flex items-center justify-center rounded-full border border-[#e3c48f] bg-[#fff4e1] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a87422] transition-colors duration-500 group-hover:border-[#d6ad68] group-hover:text-[#8f6b34] dark:border-[#c6a86a]/20 dark:bg-white/[0.04] dark:text-[#d9bf88] dark:group-hover:text-[#e2cc9e]">
                                                {tech.category}
                                            </span>
                                            <h3 className="mt-4 text-[1.7rem] font-black tracking-[-0.05em] text-[#18171a] transition-transform duration-500 group-hover:translate-y-[-2px] dark:text-white">
                                                {tech.name}
                                            </h3>
                                        </div>

                                        <div className={`rounded-[1.4rem] bg-gradient-to-br ${tech.accent} p-[1px] shadow-[0_10px_28px_-14px_rgba(198,168,106,0.8)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-3deg]`}>
                                            <div className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] bg-[#fffdfa] transition-colors duration-500 dark:bg-[#101010]">
                                                <Icon className={`h-7 w-7 ${tech.iconColor} transition-transform duration-500 group-hover:scale-110`} strokeWidth={1.7} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto border-t border-[#e7dcc6] pt-5 dark:border-white/10">
                                        <div className="flex items-center justify-between gap-4">
                                            <p className="text-sm leading-7 text-[#5d564a] transition-colors duration-500 group-hover:text-[#4a4339] dark:text-[#d1cabd] dark:group-hover:text-[#e5dccc]">
                                                {tech.description}
                                            </p>
                                            <div className={`shrink-0 rounded-full bg-gradient-to-r ${tech.accent} p-[1px] transition-transform duration-500 group-hover:scale-105`}>
                                                <div className="rounded-full bg-[#fffdfa] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9b7a42] transition-colors duration-500 group-hover:text-[#8f641f] dark:bg-[#101010] dark:text-[#d9bf88] dark:group-hover:text-[#f0d59e]">
                                                    Core
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
