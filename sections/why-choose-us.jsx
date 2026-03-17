import SectionTitle from "@/components/section-title";
import { CheckCircleIcon, UsersIcon, LightbulbIcon, Headset, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const cardColors = [
    { bar: "bg-[#2db1c4]", text: "text-[#2db1c4]", border: "border-[#2db1c4]/30", hex: "#2db1c4" },
    { bar: "bg-[#eb6361]", text: "text-[#eb6361]", border: "border-[#eb6361]/30", hex: "#eb6361" },
    { bar: "bg-[#8cb342]", text: "text-[#8cb342]", border: "border-[#8cb342]/30", hex: "#8cb342" },
    { bar: "bg-[#f39221]", text: "text-[#f39221]", border: "border-[#f39221]/30", hex: "#f39221" },
    { bar: "bg-[#b677e1]", text: "text-[#b677e1]", border: "border-[#b677e1]/30", hex: "#b677e1" },
    { bar: "bg-[#ff7a18]", text: "text-[#ff7a18]", border: "border-[#ff7a18]/30", hex: "#ff7a18" },
];

const reasons = [
    {
        icon: UsersIcon,
        title: "Experienced Software Developers",
        description: "Our diverse team of experts brings years of experience in software development and IT solutions.",
    },
    {
        icon: LightbulbIcon,
        title: "Custom IT Solutions",
        description: "We don't believe in one-size-fits-all. We build custom solutions that fit your specific business needs.",
    },
    {
        icon: Clock,
        title: "Agile Development Process",
        description: "We value your time. Our agile process ensures we deliver high-quality projects on schedule.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Application Architecture",
        description: "Security is our top priority. We build robust systems that keep your data safe and your business running.",
    },
    {
        icon: Headset,
        title: "Dedicated IT Support",
        description: "We are here for the long haul. Our support team is always ready to assist you post-launch.",
    },
    {
        icon: CheckCircleIcon,
        title: "Proven Industry Experience",
        description: "We have a history of delivering successful projects that help businesses grow and succeed.",
    }
];

function RoadmapCard({ reason, index }) {
    const colors = cardColors[index % cardColors.length];
    const Icon = reason.icon;
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative flex flex-row items-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl overflow-visible group hover:bg-black/10 dark:hover:bg-white/[0.08] transition-all duration-500 ml-5 sm:ml-7"
        >
            {/* Left accent bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors.bar} rounded-l-2xl`} />

            {/* Number circle — half outside, half inside with decorative left rings */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10" style={{ width: '48px', height: '48px' }}>
                {/* Outer ring — half on left side */}
                <div style={{
                    position: 'absolute',
                    left: '-12px', top: '-12px',
                    width: '72px', height: '72px',
                    borderRadius: '50%',
                    border: `3px solid ${colors.hex}`,
                    opacity: 0.7,
                    boxShadow: `0 0 10px 2px ${colors.hex}80`,
                    clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
                }} />
                {/* Middle ring — half on left side */}
                <div style={{
                    position: 'absolute',
                    left: '-6px', top: '-6px',
                    width: '60px', height: '60px',
                    borderRadius: '50%',
                    border: `3px solid ${colors.hex}`,
                    opacity: 0.9,
                    boxShadow: `0 0 8px 2px ${colors.hex}60`,
                    clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
                }} />
                {/* Main solid circle */}
                <div className={`size-12 rounded-full ${colors.bar} flex items-center justify-center text-lg font-black text-white shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                    {index + 1}
                </div>
            </div>

            {/* Content — left padded to avoid overlap with badge */}
            <div className="flex-grow py-4 pl-10 pr-2 text-left">
                <h3 className={`text-base font-bold mb-1 ${colors.text}`}>{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{reason.description}</p>
            </div>

            {/* Right icon */}
            <div className="pr-5 shrink-0 flex items-center justify-center">
                <div className={`size-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center ${colors.text} opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}>
                    <Icon size={20} strokeWidth={1.5} />
                </div>
            </div>

            {/* Right accent bar on hover */}
            <div className={`absolute right-0 top-0 bottom-0 w-1 ${colors.bar} opacity-0 group-hover:opacity-100 transition-opacity rounded-r-2xl`} />
        </motion.div>
    );
}

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="mt-16 relative">
            <SectionTitle
                title="Why Choose Reinsoft for IT Solutions"
                description="What sets us apart? We focus on practical, high-quality deliverables without unnecessary complexity."
                gradient={true}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-14 px-4 sm:px-6 max-w-7xl mx-auto items-center">

                {/* Left Side: Roadmap Cards */}
                <div className="flex flex-col gap-4">
                    {reasons.slice(0, 5).map((reason, index) => (
                        <RoadmapCard key={index} reason={reason} index={index} />
                    ))}
                </div>

                {/* Right Side: Image */}
                <motion.div
                    className="relative w-full h-[360px] sm:h-[480px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 60 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white to-gray-200 dark:from-slate-900 dark:to-black z-0" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/20 blur-[80px] rounded-full hidden dark:block" />
                    <Image
                        src="/assets/What_we_do.jpeg"
                        alt="Reinsoft IT Solutions Showcase - Custom Software & Web Development"
                        title="Why Choose Reinsoft for your next IT project"
                        fill
                        className="object-cover z-10"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                    <div className="absolute inset-0 rounded-3xl border border-orange-500/20 z-20 pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
}
