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
    { title: "Dating Apps Project", icon: <HeartIcon /> },
    { title: "News Websites & Apps", icon: <NewspaperIcon /> },
    { title: "Directory Listing & Coupon Code", icon: <LayoutListIcon /> },
    { title: "AI Chat Bot", icon: <BotIcon /> },
    { title: "Car Wash, Parking Apps & Vehicle Sale", icon: <CarIcon /> },
    { title: "Loan, Finance & Internet Banking Apps", icon: <LandmarkIcon /> },
    { title: "Inventory Management", icon: <PackageIcon /> },
    { title: "Expenses Management", icon: <ReceiptIcon /> },
    { title: "HRM SAAS Management", icon: <UsersIcon /> },
    { title: "School Management LMS", icon: <GraduationCapIcon /> },
    { title: "POS (Point Of Sale)", icon: <CalculatorIcon /> },
    { title: "Ecommerce (Single & Multivendor)", icon: <ShoppingCartIcon /> },
    { title: "Online Trading Platform", icon: <TrendingUpIcon /> },
    { title: "Doctor Appt. System & Dental Clinic", icon: <StethoscopeIcon /> },
    { title: "Food Delivery Project", icon: <UtensilsIcon /> },
    { title: "Study Related Websites", icon: <BookOpenIcon /> },
    { title: "Live Streaming & Live TV Project", icon: <TvIcon /> },
    { title: "Video & Audio Chat/Call", icon: <VideoIcon /> },
    { title: "Tenant, Property & Real Estate", icon: <BuildingIcon /> },
    { title: "Yoga Websites", icon: <ActivityIcon /> },
    { title: "Courier, Logistics & Drop Shipping", icon: <TruckIcon /> },
    { title: "B2B, Hotel Booking & Restaurant", icon: <BriefcaseIcon /> }
];

export default function IndustriesServe() {
    return (
        <section className="py-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]">
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[150px] pointer-events-none translate-y-1/3" />

            <div className="max-w-[90rem] mx-auto relative z-10">
                <div className="mb-16">
                    <SectionTitle
                        title="Industries We Serve"
                        description="Delivering scalable software solutions tailored for a vast array of market sectors and specific business models."
                    />
                </div>

                {/* Sleek Horizontal Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 8) * 0.05, duration: 0.4 }}
                            className="group relative bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-2xl p-4 flex items-center gap-4 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 hover:border-orange-500/30"
                        >
                            {/* Inner Hover Gradient Injection */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/5 dark:to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            {/* Premium Icon Box */}
                            <div className="relative size-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-black/50 text-gray-400 dark:text-gray-500 group-hover:bg-[#ff7a18] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                                <div className="[&>svg]:size-5">
                                    {industry.icon}
                                </div>
                            </div>

                            {/* Crisp Text */}
                            <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm md:text-md leading-snug group-hover:text-[#ff7a18] transition-colors duration-300 pr-6">
                                {industry.title}
                            </h3>

                            {/* Interactive Arrow */}
                            <div className="absolute right-4 text-orange-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
                                <ArrowUpRightIcon className="size-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
