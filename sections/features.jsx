'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, Code2Icon, SmartphoneIcon, GlobeIcon } from "lucide-react";

const reveal = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const servicesData = [
    {
        title: "Custom Website Development",
        shortTitle: "Web Development",
        shortDescription: "High-performing websites tailored for brand clarity, speed, and conversion.",
        cta: { label: "View Web Solutions", href: "/services/web-development" },
        image: "/assets/webbb.png",
        imageAlt: "Custom Website Development Solutions by Reinsoft IT Solutions",
        icon: <GlobeIcon className="size-6" />,
        badge: "Web Experiences",
        gradient: "from-[#d9781f] to-[#f0b35c]",
    },
    {
        title: "Custom Software Solutions",
        shortTitle: "Custom Software",
        shortDescription: "Tailored software built around your workflows, operations, and business logic.",
        cta: { label: "Explore Software Solutions", href: "/services/software-development" },
        image: "/assets/mohini_pos1.png",
        imageAlt: "Custom Software Engineering & MVP Solutions by Reinsoft IT Solutions",
        icon: <Code2Icon className="size-6" />,
        badge: "Software Systems",
        gradient: "from-[#c36b21] to-[#e8aa57]",
    },
    {
        title: "Mobile App Development",
        shortTitle: "Mobile Apps",
        shortDescription: "iOS and Android apps designed for intuitive use, smooth performance, and scale.",
        cta: { label: "Discover Mobile Apps", href: "/services/mobile-app-development" },
        image: "/assets/mobile-app-illustration.png",
        imageAlt: "Premium iOS & Android App Development - Reinsoft IT Solutions",
        icon: <SmartphoneIcon className="size-6" />,
        badge: "Mobile Products",
        gradient: "from-[#e07b1e] to-[#f0bc6b]",
    },
];

export default function Features() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [-24, 24]);
    const glowY = useTransform(scrollYProgress, [0, 1], [24, -24]);
    const featuredService = servicesData[0];
    const secondaryServices = servicesData.slice(1);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-transparent py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-transparent dark:bg-[radial-gradient(circle_at_top,rgba(255,122,24,0.14),transparent_45%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_40%)]" />
                <motion.div style={{ y: glowY }} className="absolute left-[8%] top-14 h-72 w-72 rounded-full bg-[#efd9ae]/50 blur-[120px] dark:bg-[#ff7a18]/12" />
                <motion.div style={{ y: imageY }} className="absolute right-[8%] top-12 h-80 w-80 rounded-full bg-[#f5e6c5]/55 blur-[130px] dark:bg-[#3b82f6]/10" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c6a86a]/40 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                <motion.div
                    className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#ccb07a]/40 bg-white/85 px-5 py-2 shadow-[0_12px_32px_-22px_rgba(164,132,76,0.45)] backdrop-blur-md dark:border-[#c6a86a]/20 dark:bg-white/[0.04]">
                        <span className="h-2 w-2 rounded-full bg-[#c6a86a]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#9b7a42] dark:text-[#d9bf88]">
                            Our Core Services
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-[-0.06em] text-[#171614] dark:text-white sm:text-5xl md:text-6xl">
                        Services built with
                        <span className="bg-gradient-to-r from-[#9b7a42] via-[#c6a86a] to-[#e4d0a3] bg-clip-text text-transparent">
                            {" "}clarity, depth, and momentum
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#665e52] dark:text-[#bfb7aa] md:text-lg">
                        Focused digital services designed to help ambitious businesses launch faster, operate better, and grow with confidence.
                    </p>
                </motion.div>

                <motion.div
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_1fr]"
                >
                    <div className="relative overflow-hidden rounded-[2rem] border border-[#d9c7a2]/45 bg-white/78 p-3 shadow-[0_24px_60px_-32px_rgba(31,24,10,0.28)] backdrop-blur-xl dark:border-[#ff7a18]/20 dark:bg-white/[0.03] dark:backdrop-blur-2xl">
                        <div className={`absolute inset-x-10 top-0 h-24 rounded-full bg-gradient-to-r ${featuredService.gradient} opacity-25 blur-3xl`} />

                        <div className="relative h-full rounded-[1.65rem] border border-[#eadfc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f1_100%)] p-4 dark:border-white/10 dark:bg-white/[0.04] backdrop-blur-2xl">
                            <div className="relative h-full min-h-[560px] overflow-hidden rounded-[1.4rem]">
                                <motion.div style={{ y: imageY }} className="absolute inset-0">
                                    <Image
                                        src="/assets/luxury_web_dev.png"
                                        alt="Reinsoft IT Solutions Core Services Overview"
                                        title="Reinsoft IT Solutions Core Services Overview"
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 1024px) 100vw, 42vw"
                                        priority
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,15,10,0.05),rgba(18,15,10,0.20))]" />

                                <div className="absolute left-5 top-5 rounded-full border border-[#ffb57a]/40 bg-[#ff7a18]/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_10px_24px_-14px_rgba(255,122,24,0.8)] backdrop-blur-md">
                                    Featured Service
                                </div>

                                <div className="absolute bottom-5 left-5 right-5 rounded-[1.6rem] border border-white/15 bg-[#1b2231]/82 p-6 text-white backdrop-blur-2xl shadow-[0_18px_50px_rgba(8,12,20,0.28)]">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f0c27a]">
                                        {featuredService.badge}
                                    </p>
                                    <h3 className="mt-3 max-w-md text-3xl font-black tracking-[-0.05em]">
                                        {featuredService.title}
                                    </h3>
                                    <p className="mt-3 max-w-md text-sm leading-7 text-[#ded4c3]">
                                        {featuredService.shortDescription}
                                    </p>
                                    <Link
                                        href={featuredService.cta.href}
                                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f0c27a] transition-colors duration-300 hover:text-white"
                                    >
                                        Explore
                                        <ArrowRightIcon className="size-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {secondaryServices.map((service, index) => (
                            <motion.article
                                key={service.title}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, delay: index * 0.08 }}
                            className="group relative overflow-hidden rounded-[1.6rem] border border-[#24324c] bg-[#121b2d]/92 p-8 shadow-[0_24px_60px_-32px_rgba(10,16,28,0.55)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#344666] hover:shadow-[0_34px_80px_-36px_rgba(10,16,28,0.72)] dark:bg-white/[0.05] dark:border-white/10"
                            >
                                <div className={`absolute inset-x-8 top-0 h-20 rounded-full bg-gradient-to-r ${service.gradient} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-20`} />
                                <div className="relative z-10">
                                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-transform duration-500 group-hover:scale-105">
                                        {service.icon}
                                    </div>
                                    <h3 className="max-w-[12rem] text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-white">
                                        {service.shortTitle}
                                    </h3>
                                    <p className="mt-4 max-w-xs text-sm leading-7 text-[#b9c3d4]">
                                        {service.shortDescription}
                                    </p>
                                    <Link
                                        href={service.cta.href}
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f0c27a] transition-colors duration-300 hover:text-white"
                                    >
                                        Explore
                                        <ArrowRightIcon className="size-4" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}

                        <motion.article
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55, delay: 0.15 }}
                            className="relative overflow-hidden rounded-[1.6rem] border border-[#24324c] bg-[#121b2d]/92 p-8 shadow-[0_24px_60px_-32px_rgba(10,16,28,0.55)] backdrop-blur-xl sm:col-span-2 dark:bg-white/[0.05] dark:border-white/10"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(240,194,122,0.16),transparent_28%)]" />
                            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f0c27a]">
                                        Tailored Engagement
                                    </p>
                                    <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white">
                                        You have got a unique business
                                    </h3>
                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#b9c3d4]">
                                        Your specific goals, workflows, and customers deserve systems designed around how your business actually works.
                                    </p>
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#12c8ea] px-6 py-4 text-sm font-bold text-[#081522] transition-all duration-300 hover:scale-105 hover:bg-[#2ad4f1]"
                                >
                                    Contact
                                    <ArrowRightIcon className="size-4" />
                                </Link>
                            </div>
                        </motion.article>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link
                        href="/services"
                        className="group inline-flex items-center gap-2 rounded-full bg-[#1c1914] px-8 py-4 text-base font-bold text-[#f7f0e3] shadow-[0_18px_40px_-22px_rgba(28,25,20,0.8)] transition-all duration-300 hover:scale-105 hover:bg-[#2b261f]"
                    >
                        View All Services
                        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
