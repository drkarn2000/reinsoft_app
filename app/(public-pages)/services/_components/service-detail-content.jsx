'use client';

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRightIcon,
    BarChart3Icon,
    BotIcon,
    BrainCircuitIcon,
    CalendarClockIcon,
    CalendarDaysIcon,
    CheckCircle2Icon,
    ClipboardCheckIcon,
    CogIcon,
    DatabaseZapIcon,
    HandshakeIcon,
    LinkIcon,
    MessageCircleIcon,
    MessageSquareIcon,
    PhoneIcon,
    PlusIcon,
    ShieldCheckIcon,
    SparklesIcon,
    ZapIcon,
    WorkflowIcon,
    WrenchIcon,
} from "lucide-react";
import LeadForm from "@/components/lead-form";

const iconMap = {
    handshake: HandshakeIcon,
    wrench: WrenchIcon,
    bot: BotIcon,
};

const automationCards = [
    {
        title: 'WhatsApp Cloud API',
        description: 'Automate messages,\nleads and follow-ups',
        icon: MessageCircleIcon,
        position: 'right-[37%] top-[135px] w-[205px] xl:w-[225px]',
    },
    {
        title: 'CRM Integrations',
        description: 'Connect with HubSpot,\nZoho, Salesforce & more',
        icon: LinkIcon,
        position: 'right-[4.5%] top-[150px] w-[215px] xl:w-[235px]',
    },
    {
        title: 'AI Workflows',
        description: 'Practical AI integrations\nfor real business use',
        icon: WorkflowIcon,
        position: 'left-[52%] top-[540px] w-[205px] xl:w-[225px]',
    },
];

const highlightCards = [
    { label: 'WhatsApp\nBusiness API', icon: MessageSquareIcon },
    { label: 'CRM\nIntegrations', icon: DatabaseZapIcon },
    { label: 'Automated\nWorkflows', icon: CogIcon },
    { label: 'Reports &\nAnalytics', icon: BarChart3Icon },
    { label: 'Practical\nAI Solutions', icon: SparklesIcon },
];

function AutomationHero({ service }) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            className="relative isolate overflow-hidden text-white pb-16 sm:pb-20 lg:pb-24 min-h-[760px] lg:min-h-[860px] xl:min-h-[920px] 2xl:min-h-[960px]"
            style={{ paddingTop: '115px' }}
        >
            {/* Full-width professional cinematic office background */}
            <motion.div
                className="absolute inset-0 -z-30"
                initial={shouldReduceMotion ? false : { scale: 1 }}
                animate={shouldReduceMotion ? false : { scale: 1.018 }}
                transition={{ duration: 18, ease: 'easeOut' }}
            >
                <Image
                    src={service.heroImage}
                    alt={service.heroAlt}
                    fill
                    priority
                    quality={95}
                    sizes="100vw"
                    className="object-cover object-center lg:object-[center_center]"
                />
            </motion.div>

            {/* Foreground content container */}
            <div className="mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <div className="relative z-10 max-w-[620px] xl:max-w-[690px] 2xl:max-w-[760px]">
                    {/* Badge: BUSINESS AUTOMATION & AI */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/50 bg-black/50 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)] mb-5 sm:mb-6 2xl:mb-8"
                    >
                        <span className="flex size-5 items-center justify-center rounded-full border border-amber-400/60 text-amber-300">
                            <ZapIcon className="size-3 fill-amber-300/40" />
                        </span>
                        <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] text-white">
                            Business Automation & AI
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.3rem] 2xl:text-[3.9rem]"
                    >
                        Automate Your{' '}
                        <span className="block brand-text-gradient">
                            Business Operations
                        </span>{' '}
                        with{' '}
                        <span className="whitespace-nowrap brand-text-gradient">
                            AI & Integrations
                        </span>
                    </motion.h1>

                    {/* Supporting Paragraph */}
                    <motion.p
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6 text-sm sm:text-base md:text-lg leading-[1.6] text-slate-200 max-w-[560px] xl:max-w-[620px] 2xl:max-w-[680px] 2xl:text-xl font-normal"
                    >
                        Streamline repetitive tasks, connect your favourite tools and create intelligent workflows with WhatsApp Business API, CRM integrations and practical AI solutions tailored to your business.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5"
                    >
                        <Link
                            href="#inquiry"
                            className="group inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#F97316] px-7 sm:px-8 text-sm sm:text-base font-bold text-slate-950 shadow-[0_12px_36px_rgba(245,158,11,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(245,158,11,0.5)] hover:brightness-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b16]"
                        >
                            <span>Plan Automation Workflow</span>
                            <ArrowRightIcon className="size-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/services"
                            className="group inline-flex h-12 sm:h-13 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-6 sm:px-7 text-sm sm:text-base font-semibold text-white backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.14] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b16]"
                        >
                            <span className="flex size-6 items-center justify-center rounded-full bg-white text-slate-950 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                                <span className="ml-0.5 h-0 w-0 border-y-[4.5px] border-l-[7px] border-y-transparent border-l-current" />
                            </span>
                            <span>View All Services</span>
                        </Link>
                    </motion.div>

                </div>

                {/* Floating feature cards over the hero image */}
                <div className="pointer-events-auto hidden xl:block">
                    {automationCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            className={`absolute z-20 ${card.position}`}
                            initial={shouldReduceMotion ? false : { opacity: 0 }}
                            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, -9, 0] }}
                            transition={shouldReduceMotion
                                ? { duration: 0.4, delay: 0.3 + index * 0.08 }
                                : {
                                    opacity: { duration: 0.5, delay: 0.3 + index * 0.08 },
                                    y: { duration: 3.6 + index * 0.45, delay: index * 0.3, repeat: Infinity, ease: 'easeInOut' },
                                }}
                        >
                            <div className="flex items-center gap-3 rounded-2xl border border-white/25 bg-[#07101f]/80 p-3.5 text-white shadow-[0_16px_44px_rgba(0,0,0,0.42)] backdrop-blur-xl transition-colors duration-300 hover:border-amber-300/60 hover:bg-[#0a1930]/90">
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-amber-300/30 bg-amber-300/10 text-amber-200">
                                    <card.icon className="size-5" />
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-sm font-bold leading-tight">{card.title}</span>
                                    <span className="mt-1 block whitespace-pre-line text-[11px] leading-snug text-slate-300">{card.description}</span>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Full-width row of 5 feature icons pinned to the bottom of the hero */}
            <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-12 lg:absolute lg:inset-x-0 lg:bottom-8 lg:mt-0"
            >
                <div className="mx-auto grid w-full max-w-[1720px] grid-cols-3 gap-4 px-4 sm:grid-cols-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    {highlightCards.map((item) => {
                        const HighlightIcon = item.icon;
                        return (
                            <div key={item.label} className="group flex cursor-default flex-col items-center text-center">
                                <div className="flex size-16 items-center justify-center rounded-2xl border border-cyan-400/25 bg-[#0b1329]/75 text-cyan-200 shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-cyan-300 group-hover:text-white group-hover:shadow-[0_0_24px_rgba(6,182,212,0.45)] sm:size-[4.5rem] lg:size-20">
                                    <HighlightIcon className="size-7 sm:size-8 lg:size-9" />
                                </div>
                                <p className="mt-3 whitespace-pre-line text-xs font-semibold leading-tight text-slate-200 transition-colors group-hover:text-white sm:text-sm lg:text-base">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}

function DefaultHero({ service, Icon }) {
    return (
        <section className="relative overflow-hidden px-4 pt-24 pb-16 lg:pt-32 lg:pb-20">
            <div className="absolute inset-0 -z-10">
                <Image src={service.heroImage} alt={service.heroAlt} fill priority quality={90} className="object-cover object-center" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,246,236,0.9)_0%,rgba(255,246,236,0.74)_48%,rgba(255,246,236,0.46)_100%)] dark:bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.7)_48%,rgba(5,5,5,0.38)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,122,24,0.2),transparent_34%),radial-gradient(circle_at_right,rgba(59,130,246,0.16),transparent_32%)]" />
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
                <motion.div className="relative z-10 text-center lg:text-left" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-xs font-bold text-orange-600 dark:text-orange-300 uppercase tracking-widest mb-8 backdrop-blur-sm">
                        <Icon className="size-3.5" />
                        {service.eyebrow}
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 text-gray-900 dark:text-white">
                        {service.title} <span className="brand-text-gradient">Services</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 max-w-2xl leading-relaxed mx-auto lg:mx-0 mb-10">{service.intro}</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <Link href="#inquiry" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold shadow-[0_8px_30px_rgba(255,122,24,0.3)] hover:shadow-[0_8px_40px_rgba(255,122,24,0.48)] hover:-translate-y-1 transition-all">
                            {service.primaryCta}
                            <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/55 dark:bg-black/25 backdrop-blur-xl border border-black/10 dark:border-white/15 font-semibold hover:bg-white/80 dark:hover:bg-white/10 transition-all">
                            View All Services
                        </Link>
                    </div>
                </motion.div>
                <motion.div className="relative z-10 min-h-[320px] lg:h-[500px] flex items-center justify-center" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.1 }}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-pink-500/10 to-blue-500/10 blur-[90px] rounded-full" />
                    <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-white/15 dark:bg-black/25 backdrop-blur-xl p-6 shadow-2xl">
                        <div className="grid grid-cols-2 gap-4">
                            {service.heroPoints.map((point, index) => (
                                <div key={point} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/65 dark:bg-white/[0.06] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50">
                                    <span className="text-xs font-black tracking-widest text-orange-500">0{index + 1}</span>
                                    <p className="mt-2 text-sm font-bold text-gray-900 dark:text-white leading-snug">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

function SectionHeading({ eyebrow, title, align = 'center' }) {
    return (
        <motion.div {...fadeUp} className={align === 'center' ? 'mx-auto mb-14 max-w-3xl text-center' : ''}>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                <span className="size-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500" />
                {eyebrow}
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">{title}</h2>
        </motion.div>
    );
}

const iconTile = 'flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 text-white shadow-[0_10px_26px_-8px_rgba(236,72,153,0.7)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6';
const cardBase = 'group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_28px_60px_-28px_rgba(249,115,22,0.55)] dark:border-white/10 dark:bg-white/[0.05]';
const cardGlow = 'pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-gradient-to-br from-orange-500/25 via-pink-500/20 to-purple-500/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100';

export default function ServiceDetailContent({ service }) {
    const Icon = iconMap[service.icon] || SparklesIcon;
    const hero = service.premiumVariant === 'automation'
        ? <AutomationHero service={service} />
        : <DefaultHero service={service} Icon={Icon} />;

    return (
        <main className="min-h-screen selection:bg-orange-500/30">
            <div className="fixed inset-0 -z-30 pointer-events-none hidden dark:block">
                <Image src="/assets/Services.jpg" alt={`${service.title} background`} fill className="object-cover opacity-80 grayscale brightness-50" priority quality={90} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/85 z-10" />
            </div>

            {hero}

            <section className="px-4 py-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="lg:sticky lg:top-28">
                        <SectionHeading eyebrow="Value Proposition" title={service.valueTitle} align="left" />
                        <motion.p {...fadeUp} className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">{service.valueText}</motion.p>
                        <motion.div {...fadeUp} className="mt-8 flex flex-wrap gap-3">
                            {['WhatsApp Cloud API', 'CRM Sync', 'AI Workflows'].map((chip) => (
                                <span key={chip} className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-semibold text-gray-800 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/50 hover:text-orange-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-200">
                                    {chip}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {service.deliverables.map((item, index) => (
                            <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.07 }} className={cardBase}>
                                <span className={cardGlow} />
                                <div className="relative">
                                    <div className={iconTile}>
                                        <CheckCircle2Icon className="size-6" />
                                    </div>
                                    <h3 className="mb-2 mt-5 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-500 dark:text-white">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-24">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading eyebrow="Benefits & Use Cases" title="Built for practical business outcomes" />
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {service.benefits.map((benefit, index) => (
                            <motion.div key={benefit} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.07 }} className={cardBase}>
                                <span className={cardGlow} />
                                <div className="relative">
                                    <div className={iconTile}>
                                        <ShieldCheckIcon className="size-6" />
                                    </div>
                                    <p className="mt-5 font-semibold leading-relaxed text-gray-800 transition-colors group-hover:text-orange-500 dark:text-gray-200">{benefit}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-24">
                <div className="mx-auto max-w-6xl">
                    <SectionHeading eyebrow="Process" title="Simple, transparent delivery" />
                    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-4">
                        <div className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-px bg-gradient-to-r from-orange-500/0 via-pink-500/50 to-purple-500/0 md:block" />
                        {service.process.map((step, index) => (
                            <motion.div key={step.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="group relative text-center">
                                <div className="relative mx-auto flex size-[4.5rem] items-center justify-center rounded-full border border-orange-500/30 bg-white/80 text-2xl font-black text-orange-500 shadow-[0_12px_30px_-12px_rgba(249,115,22,0.6)] backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:text-white dark:bg-[#0b1329]/80">
                                    0{index + 1}
                                </div>
                                <div className="mt-6 rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-orange-500/40 group-hover:shadow-[0_24px_50px_-24px_rgba(249,115,22,0.55)] dark:border-white/10 dark:bg-white/[0.05]">
                                    <ClipboardCheckIcon className="mx-auto mb-3 size-6 text-orange-500 transition-transform duration-300 group-hover:scale-125" />
                                    <h3 className="mb-2 font-bold text-gray-900 transition-colors group-hover:text-orange-500 dark:text-white">{step.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-24">
                <div className="mx-auto max-w-4xl">
                    <SectionHeading eyebrow="FAQs" title="Common questions" />
                    <div className="space-y-4">
                        {service.faqs.map((faq, index) => (
                            <motion.details key={faq.question} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.06 }} className="group rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/40 hover:shadow-[0_20px_44px_-26px_rgba(249,115,22,0.55)] open:border-orange-500/40 dark:border-white/10 dark:bg-white/[0.05]">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-bold text-gray-900 transition-colors group-hover:text-orange-500 dark:text-white [&::-webkit-details-marker]:hidden">
                                    {faq.question}
                                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 text-white transition-transform duration-300 group-open:rotate-45">
                                        <PlusIcon className="size-4" />
                                    </span>
                                </summary>
                                <p className="px-6 pb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{faq.answer}</p>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </section>

            <section id="inquiry" className="px-4 py-24">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] md:p-12">
                    <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-gradient-to-br from-orange-500/25 to-pink-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-gradient-to-br from-purple-500/25 to-blue-500/20 blur-3xl" />
                    <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                        <div>
                            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-500">
                                <SparklesIcon className="size-3.5" />
                                Start a conversation
                            </span>
                            <h2 className="mb-6 text-3xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">{service.ctaTitle}</h2>
                            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">{service.ctaText}</p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <a href="tel:+918968369582" className="inline-flex items-center justify-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-4 font-bold text-blue-700 transition-all hover:-translate-y-1 hover:bg-blue-500/20 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.55)] dark:text-white">
                                    <PhoneIcon className="size-4" />
                                    Call Expert
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=918968369582" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 font-bold text-emerald-700 transition-all hover:-translate-y-1 hover:bg-emerald-500/20 hover:shadow-[0_12px_30px_-10px_rgba(16,185,129,0.55)] dark:text-white">
                                    <MessageCircleIcon className="size-4" />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                        <LeadForm title={service.formTitle} description={service.formDescription} defaultService={service.title} />
                    </div>
                </div>
            </section>
        </main>
    );
}
