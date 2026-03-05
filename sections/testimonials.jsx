'use client';

import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from 'next/dynamic';
import { Play, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const VideoModal = dynamic(() => import("@/components/video-modal"), {
    ssr: false,
});

const stats = [
    { label: "Projects Delivered", value: "200+" },
    { label: "Years Experience", value: "10+" },
    { label: "Global Clients", value: "15 Countries" },
];

const testimonials = [
    {
        id: 1,
        review: "I want to take a moment to express my deepest gratitude and appreciation for Manpreet... Manpreet showcased not only excellent technical expertise in React and web development but also a true sense of ownership.",
        name: "Sujoye Dhar",
        role: "CTO",
        companyLogo: "Biswakarma",
        location: "Kolkata, India",
        flag: "🇮🇳",
        rating: 5,
        image: "/assets/sujoay_pic.png",
        projectType: "Custom E-commerce Website",
        resultBadgeText: "2x Operational Efficiency",
        resultBadgeColor: "text-purple-600 bg-purple-100",
        highlight: true,
        link: "/case-studies/ecommerce-experience"
    },
    {
        id: 2,
        review: "The custom CRM they built for us completely streamlined our operations. What used to take days now takes hours. Amarjeet did an exceptional job with converting my Custom CRM. I have worked with lots of developers and he outperformed them all!",
        name: "Ehsan F.",
        role: "Product Owner",
        companyLogo: "thirty30media",
        location: "London, UK",
        flag: "🇬🇧",
        rating: 5,
        image: "/assets/man.jpg",
        projectType: "Custom Web App",
        resultBadgeText: "65% Faster Load Speed",
        resultBadgeColor: "text-blue-600 bg-blue-100",
        link: "/case-studies/thirty30-media"
    },
    {
        id: 3,
        review: "Working with Reinsoft on our SaaS platform was a game-changer. They understood our vision perfectly and the Laravel backend and flutter app is rock solid. Best work delivered, on time and prompt in response.",
        name: "Angela",
        role: "Founder",
        companyLogo: "Legacy Marketplace",
        location: "Wheelhouse, Oxford OX4 1AW",
        flag: "LANDON",
        rating: 5,
        image: "/assets/angela.png",
        projectType: "Laravel Backend",
        resultBadgeText: "+42% Conversion Growth",
        resultBadgeColor: "text-green-600 bg-green-100",
        link: "/case-studies/legacy-marketplace"
    },
    {
        id: 4,
        review: "Excellent Work done by Tanu and his team, also helps going beyond the box and makes my experience great. Clear Communications and quick Solutions. We needed a complete overhaul of our e-commerce platform. They delivered a fast, mobile-responsive site that caused our sales to triple in the first quarter alone.",
        name: "Manti Makkakoli",
        role: "Founder",
        companyLogo: "Shopaholic",
        location: "Johannesburg Gauteng",
        flag: "South Africa",
        rating: 5,
        image: "/assets/Manti.jpeg",
        projectType: "Custom E-commerce Website",
        resultBadgeText: "3x Q1 Sales Growth",
        resultBadgeColor: "text-orange-600 bg-orange-100",
        highlight: false,
        link: "/case-studies/multivendor-e-commerce"
    },
    {
        id: 5,
        review: "Amerjeet has high professional value and expertise, very good listener which make communication lot easier for customer, I am not expert in software terminology but he understand and foresee customer requirement and provide solution according, that has helped us a lot.",
        name: "Umesh Patel",
        role: "CEO",
        companyLogo: "Mohini Cloud (POS)",
        location: "Ahmedabad, Gujarat",
        flag: "IN",
        rating: 5,
        image: "/assets/umesh.png",
        projectType: "Custom POS Software",
        resultBadgeText: "-60% Cash Discrepancies",
        resultBadgeColor: "text-purple-600 bg-purple-100",
        highlight: false,
        link: "/case-studies/pos-software"
    },
    {
        id: 6,
        review: "Am really happy with the performance Tanu & Amarjit did exactly what was required and did excellent work. Highly professional and easy to work with, Would definitely work with him again. Thanks a lot once again.",
        name: "Kishor Kumar",
        role: "Managing Director",
        companyLogo: "Vridez Private Limited",
        location: "Krishnarajapuram, Bengaluru",
        flag: "IN",
        rating: 5,
        image: "/assets/kishor1.png",
        projectType: "Mobility & Transportation Platform",
        resultBadgeText: "End-to-End Delivery",
        resultBadgeColor: "text-blue-600 bg-blue-100",
        highlight: false,
        link: "/case-studies/vridez"

    },
    {
        id: 7,
        review: "I had a fantastic experience working with Amarjeet S. They were professional and highly skilled and delivered exceptional results on my project. Their attention to detail, communication, and ability to understand my requirements made the entire process smooth and efficient. The final product exceeded my expectations, and I would highly recommend them to anyone looking for a talented and reliable freelancer. I look forward to working with them again in the future!",
        name: "Sagar Jujare",
        role: "CEO",
        companyLogo: "Jujare Tech Advisors",
        location: "Ahmedabad, Gujarat",
        flag: "IN",
        rating: 5,
        image: "/assets/sagar.png",
        projectType: "Sahasra AI Intelligent Chatbot",
        resultBadgeText: "Improved Engagement",
        resultBadgeColor: "text-green-600 bg-green-100",
        highlight: false,
        link: "/case-studies/sahasra-ai"
    },
    {
        id: 8,
        review: "Tanu did an amazing job with development on my website. she understands clearly what i need and implements it correctly, She didn't give up until it was perfectly working. they guided us every step. The resulting website is a hit with our clients. Thank you ReinSoft team, recommended developer go for it, will definitely work with you again.",
        name: "Sandeep Singh",
        role: "IT Manager",
        companyLogo: "IndraSur Consulting",
        location: "Cambridge",
        flag: "CA",
        rating: 5,
        image: "/assets/Sandip.png",
        projectType: "Interior/ Home Decor/ E-Commerce",
        resultBadgeText: "High Scalability",
        resultBadgeColor: "text-orange-600 bg-orange-100",
        highlight: false,
        link: "/case-studies/mural-story"
    },
    {
        id: 9,
        review: "The mobile app they created for our gym allows members to book classes effortlessly. It's fast, sleek, and didn't break our budget.",
        name: "Saim",
        role: "CTO",
        companyLogo: "ELIGHT MALE WELLNESS",
        location: "London, UK",
        flag: "🇬🇧",
        rating: 5,
        image: "/assets/sam.png",
        projectType: "Cross-platform Mobile",
        resultBadgeText: "Flutter Fitness App",
        resultBadgeColor: "text-teal-600 bg-teal-100",
        highlight: false
    }
];

const StarRating = () => (
    <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const TestimonialCard = ({ item, onVideoClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px 8px rgba(255,122,24,0.25), 0 0 80px 16px rgba(255,80,180,0.12)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`group relative rainbow-lighting-card rounded-[2rem] p-6 h-full flex flex-col transition-shadow duration-300 cursor-pointer ${item.highlight ? 'shadow-[0_0_30px_rgba(255,122,24,0.15)]' : ''}`}
        >
            {item.highlight && (
                <div className="absolute -top-3.5 right-8 z-30">
                    <span className="bg-[#ff7a18] text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
                        Featured
                    </span>
                </div>
            )}

            {/* Header: Client Photo + Details + Location */}
            <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#ff7a18]/20 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover object-top w-full h-full"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <h4 className="text-white font-bold text-base leading-tight group-hover:text-[#ff7a18] transition-colors">
                        {item.name}
                    </h4>
                    <p className="text-sm text-gray-400 font-medium">
                        {item.role} @ {item.companyLogo}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                        <span>{item.flag}</span>
                        <span>{item.location}</span>
                    </div>
                </div>
            </div>

            {/* Stars & Project Type */}
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
                <StarRating />
                <span className="text-xs font-bold px-3 py-1 rounded-full border bg-[#ff7a18]/10 border-[#ff7a18]/30 text-[#ff7a18]">
                    {item.projectType}
                </span>
            </div>

            {/* Subtle Result Badge */}
            {item.resultBadgeText && (
                <div className="mb-4">
                    <span className={`inline-flex px-3 py-1 rounded-md text-xs font-bold border ${item.highlight ? 'border-[#ff7a18]/50 bg-[#ff7a18]/20 text-[#ff7a18]' : 'border-white/20 bg-white/5 text-gray-300'}`}>
                        {item.resultBadgeText}
                    </span>
                </div>
            )}

            {/* Review Content */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                "{item.review}"
            </p>

            {/* Footer Buttons */}
            <div className={`mt-auto flex items-center justify-center border-t pt-4 ${item.highlight ? 'border-white/10' : 'border-white/5'}`}>
                {item.link ? (
                    <Link
                        href={`${item.link}?hideDemo=true`}
                        style={{
                            position: 'relative',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px 22px',
                            borderRadius: '999px',
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#fff',
                            letterSpacing: '0.01em',
                            cursor: 'pointer',
                            border: 'none',
                            outline: 'none',
                            background: 'linear-gradient(135deg, rgba(255,80,180,0.18) 0%, rgba(255,122,24,0.22) 50%, rgba(200,60,255,0.18) 100%)',
                            boxShadow: '0 0 0 1.5px rgba(255,100,200,0.55), 0 0 18px 4px rgba(255,80,180,0.28), 0 0 32px 8px rgba(255,122,24,0.15), inset 0 1.5px 6px rgba(255,255,255,0.18), inset 0 -2px 8px rgba(0,0,0,0.35)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            transition: 'box-shadow 0.3s ease, transform 0.2s ease',
                            overflow: 'hidden',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '0 0 0 1.5px rgba(255,100,200,0.8), 0 0 28px 8px rgba(255,80,180,0.45), 0 0 50px 12px rgba(255,122,24,0.25), inset 0 1.5px 6px rgba(255,255,255,0.22), inset 0 -2px 8px rgba(0,0,0,0.35)';
                            e.currentTarget.style.transform = 'scale(1.04)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = '0 0 0 1.5px rgba(255,100,200,0.55), 0 0 18px 4px rgba(255,80,180,0.28), 0 0 32px 8px rgba(255,122,24,0.15), inset 0 1.5px 6px rgba(255,255,255,0.18), inset 0 -2px 8px rgba(0,0,0,0.35)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        {/* Gradient colour layer */}
                        <span style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '999px',
                            background: 'linear-gradient(120deg, rgba(255,60,160,0.30) 0%, rgba(255,140,30,0.35) 45%, rgba(180,60,255,0.28) 100%)',
                            pointerEvents: 'none',
                        }} />
                        <span style={{ position: 'relative', zIndex: 1 }}>See How We Did It</span>
                    </Link>
                ) : (
                    <button
                        style={{
                            position: 'relative',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px 22px',
                            borderRadius: '999px',
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#fff',
                            letterSpacing: '0.01em',
                            cursor: 'pointer',
                            border: 'none',
                            outline: 'none',
                            background: 'linear-gradient(135deg, rgba(255,80,180,0.18) 0%, rgba(255,122,24,0.22) 50%, rgba(200,60,255,0.18) 100%)',
                            boxShadow: '0 0 0 1.5px rgba(255,100,200,0.55), 0 0 18px 4px rgba(255,80,180,0.28), 0 0 32px 8px rgba(255,122,24,0.15), inset 0 1.5px 6px rgba(255,255,255,0.18), inset 0 -2px 8px rgba(0,0,0,0.35)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            transition: 'box-shadow 0.3s ease, transform 0.2s ease',
                            overflow: 'hidden',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '0 0 0 1.5px rgba(255,100,200,0.8), 0 0 28px 8px rgba(255,80,180,0.45), 0 0 50px 12px rgba(255,122,24,0.25), inset 0 1.5px 6px rgba(255,255,255,0.22), inset 0 -2px 8px rgba(0,0,0,0.35)';
                            e.currentTarget.style.transform = 'scale(1.04)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = '0 0 0 1.5px rgba(255,100,200,0.55), 0 0 18px 4px rgba(255,80,180,0.28), 0 0 32px 8px rgba(255,122,24,0.15), inset 0 1.5px 6px rgba(255,255,255,0.18), inset 0 -2px 8px rgba(0,0,0,0.35)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        {/* Gradient colour layer */}
                        <span style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '999px',
                            background: 'linear-gradient(120deg, rgba(255,60,160,0.30) 0%, rgba(255,140,30,0.35) 45%, rgba(180,60,255,0.28) 100%)',
                            pointerEvents: 'none',
                        }} />
                        <span style={{ position: 'relative', zIndex: 1 }}>See How We Did It</span>
                    </button>
                )}
                {item.videoId && (
                    <button
                        onClick={() => onVideoClick(item.videoId)}
                        className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-white/10"
                    >
                        <Play className="size-4" /> Watch Video
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export default function Testimonials({ limit }) {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const testimonialsToDisplay = limit ? testimonials.slice(0, limit) : testimonials;

    return (
        <section className="py-16 relative overflow-hidden" id="testimonials">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff7a18]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <SectionTitle
                        title="Trusted by Growing Businesses Worldwide"
                        description="Real feedback from founders, startups, and enterprise teams we've partnered with."
                        gradient={true}
                    />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {testimonialsToDisplay.map((item) => (
                        <TestimonialCard
                            key={item.id}
                            item={item}
                            onVideoClick={setSelectedVideo}
                        />
                    ))}
                </div>

                {/* Conversion Booster / Stats */}
                <div className="mt-20 border-t border-white/10 pt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="px-4 py-4 md:py-0"
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base text-[#ff7a18] font-medium tracking-wide uppercase">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
                videoId={selectedVideo}
            />
        </section>
    );
}