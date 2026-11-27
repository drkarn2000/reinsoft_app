'use client';

import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { 
    HeartIcon, NewspaperIcon, LayoutListIcon, BotIcon, CarIcon, 
    LandmarkIcon, PackageIcon, ReceiptIcon, UsersIcon, GraduationCapIcon,
    CalculatorIcon, ShoppingCartIcon, TrendingUpIcon, StethoscopeIcon, UtensilsIcon,
    BookOpenIcon, TvIcon, VideoIcon, BuildingIcon, ActivityIcon,
    TruckIcon, BriefcaseIcon, ArrowUpRightIcon
} from "lucide-react";

const industries = [
    { title: "Dating Apps Project", icon: <HeartIcon />, accent: "#ff5f8f" },
    { title: "News Websites & Apps", icon: <NewspaperIcon />, accent: "#3b82f6" },
    { title: "Directory Listing & Coupon Code", icon: <LayoutListIcon />, accent: "#8b5cf6" },
    { title: "AI Chat Bot", icon: <BotIcon />, accent: "#06b6d4" },
    { title: "Car Wash, Parking Apps & Vehicle Sale", icon: <CarIcon />, accent: "#0ea5e9" },
    { title: "Loan, Finance & Internet Banking Apps", icon: <LandmarkIcon />, accent: "#22c55e" },
    { title: "Inventory Management", icon: <PackageIcon />, accent: "#f59e0b" },
    { title: "Expenses Management", icon: <ReceiptIcon />, accent: "#10b981" },
    { title: "HRM SAAS Management", icon: <UsersIcon />, accent: "#6366f1" },
    { title: "School Management LMS", icon: <GraduationCapIcon />, accent: "#14b8a6" },
    { title: "POS (Point Of Sale)", icon: <CalculatorIcon />, accent: "#ef4444" },
    { title: "Ecommerce (Single & Multivendor)", icon: <ShoppingCartIcon />, accent: "#f97316" },
    { title: "Online Trading Platform", icon: <TrendingUpIcon />, accent: "#84cc16" },
    { title: "Doctor Appt. System & Dental Clinic", icon: <StethoscopeIcon />, accent: "#2dd4bf" },
    { title: "Food Delivery Project", icon: <UtensilsIcon />, accent: "#fb7185" },
    { title: "Study Related Websites", icon: <BookOpenIcon />, accent: "#60a5fa" },
    { title: "Live Streaming & Live TV Project", icon: <TvIcon />, accent: "#a855f7" },
    { title: "Video & Audio Chat/Call", icon: <VideoIcon />, accent: "#38bdf8" },
    { title: "Tenant, Property & Real Estate", icon: <BuildingIcon />, accent: "#c6a86a" },
    { title: "Yoga Websites", icon: <ActivityIcon />, accent: "#34d399" },
    { title: "Courier, Logistics & Drop Shipping", icon: <TruckIcon />, accent: "#facc15" },
    { title: "B2B, Hotel Booking & Restaurant", icon: <BriefcaseIcon />, accent: "#fb923c" }
];

export default function IndustriesServe() {
    return (
        <section className="relative overflow-hidden bg-transparent px-4 py-24">
            <div className="max-w-[90rem] mx-auto relative z-10">
                <div className="mb-16">
                    <SectionTitle
                        title="Industries We Serve"
                        description="Delivering scalable software solutions tailored for a vast array of market sectors and specific business models."
                    />
                </div>

                {/* Sleek Horizontal Cards Grid */}
                <div className="relative">
                    <div className="absolute -inset-8 rounded-[3rem] border border-white/45 bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-[2px] dark:border-white/5 dark:bg-white/[0.02]" />
                    <div className="relative grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 8) * 0.05, duration: 0.4 }}
                            className="industry-3d-tile group relative min-h-[5.4rem] overflow-visible rounded-2xl border border-black/5 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]"
                            style={{ '--industry-accent': industry.accent }}
                        >
                            {/* Inner Hover Gradient Injection */}
                            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_16%_18%,color-mix(in_srgb,var(--industry-accent)_22%,transparent),transparent_30%),linear-gradient(120deg,rgba(255,255,255,0.72),rgba(255,255,255,0.16))] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_16%_18%,color-mix(in_srgb,var(--industry-accent)_20%,transparent),transparent_30%),linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                            <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[var(--industry-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70" />

                            <div className="industry-3d-content relative z-10 flex h-full items-center gap-4">
                                {/* Premium Icon Box */}
                                <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100 text-gray-400 shadow-sm transition-all duration-300 group-hover:text-white dark:bg-black/50 dark:text-gray-500">
                                    <div className="absolute inset-0 bg-[var(--industry-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
                                    <div className="relative z-10 [&>svg]:size-5">
                                        {industry.icon}
                                    </div>
                                </div>

                                {/* Crisp Text */}
                                <h3 className="pr-6 text-sm font-bold leading-snug text-gray-800 transition-colors duration-300 group-hover:text-[#ff7a18] dark:text-gray-200 md:text-md">
                                    {industry.title}
                                </h3>

                                {/* Interactive Arrow */}
                                <div className="absolute right-0 hidden -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block" style={{ color: industry.accent }}>
                                    <ArrowUpRightIcon className="size-4" />
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
