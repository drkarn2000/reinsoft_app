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
    { icon: "⭐", value: "200+", label: "Successful Projects" },
    { icon: "🌍", value: "15+", label: "Countries Worldwide" },
    { icon: "🚀", value: "10+", label: "Years Experience" },
    { icon: "💼", value: "Startups", label: "to Enterprise Clients" },
];

const testimonials = [
    {
        id: 1,
        review: "I want to take a moment to express my deepest gratitude and appreciation for Manpreet from Reinsoft. He showcased excellent technical expertise in React and web development and demonstrated a true sense of ownership throughout the project.",
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
        review: "The custom website built by Amarjeet from Reinsoft completely streamlined our operations. What used to take days now takes hours. I have worked with many developers before, but Amarjeet truly outperformed them all.",
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
        review: "Working with the Reinsoft team on our SaaS platform was a game-changer. They understood our vision perfectly and delivered a rock-solid Laravel backend. Everything was delivered on time with prompt communication..",
        name: "Angela",
        role: "Founder",
        companyLogo: "Legacy Marketplace",
        location: "Wheelhouse, Oxford OX4 1AW",
        flag: "LANDON",
        rating: 5,
        image: "/assets/angela.png",
        projectType: "Laravel SaaS Platform",
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
        review: "I am really happy with the performance. Tanu and Amarjeet from Reinsoft did exactly what was required and delivered excellent work. They were highly professional and easy to work with..",
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
        review: "Am really happy with the performance Tanu & Amarjit (Team REINSOFT) did exactly what was required and did excellent work. Highly professional and easy to work with, Would definitely work with him again. Thanks a lot once again.",
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
        review: "I had a fantastic experience working with Amarjeet from Reinsoft. He was professional, highly skilled, and delivered exceptional results. The attention to detail and understanding of requirements made the entire process smooth.",
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
        review: "Tanu from the Reinsoft team did an amazing job developing our website. They clearly understood our requirements and implemented everything perfectly. The final website turned out to be a big success with our clients.",
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
        review: "The mobile app created by the Reinsoft team allows our gym members to book classes effortlessly. It’s fast, sleek, and delivered within our budget",
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
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#ff7a18]/20 shadow-sm" style={{ background: item.name === 'Angela' ? '#fff' : 'transparent' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={item.image}
                        alt={`Client ${item.name} - ${item.role} @ ${item.companyLogo}`}
                        title={`Testimonial from ${item.name}`}
                        className={`w-full h-full ${item.name === 'Angela' ? 'object-contain p-1' : 'object-cover object-top'}`}
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <h4 className="text-black dark:text-white font-bold text-base leading-tight group-hover:text-[#ff7a18] transition-colors">
                        {item.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {item.role} @ {item.companyLogo}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                        <span>{item.flag}</span>
                        <span>{item.location}</span>
                    </div>
                </div>
            </div>

            {/* Stars & Project Type */}
            <div className="flex items-center justify-between mb-3 border-b border-black/10 dark:border-white/10 pb-3">
                <StarRating />
                <span className="text-xs font-bold px-3 py-1 rounded-full border bg-[#ff7a18]/10 border-[#ff7a18]/30 text-[#ff7a18]">
                    {item.projectType}
                </span>
            </div>

            {/* Result Badge - same orange style on all cards */}
            {item.resultBadgeText && (
                <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-orange-400/20 to-pink-400/20 border border-orange-400/40 text-orange-500 dark:text-orange-300">
                        <span className="size-1.5 rounded-full bg-orange-400 animate-pulse inline-block" />
                        {item.resultBadgeText}
                    </span>
                </div>
            )}

            {/* Review Content */}
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                "{item.review}"
            </p>

            {/* Footer Buttons */}
            <div className={`mt-auto flex items-center justify-center border-t pt-4 ${item.highlight ? 'border-black/10 dark:border-white/10' : 'border-black/5 dark:border-white/5'}`}>
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
                            background: 'linear-gradient(135deg, rgba(255,122,24,0.22) 0%, rgba(255,160,50,0.28) 50%, rgba(255,100,0,0.22) 100%)',
                            boxShadow: '0 0 0 1.5px rgba(255,122,24,0.6), 0 0 18px 4px rgba(255,122,24,0.35), 0 0 32px 8px rgba(255,160,50,0.20), inset 0 1.5px 6px rgba(255,255,255,0.18), inset 0 -2px 8px rgba(0,0,0,0.35)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            transition: 'box-shadow 0.3s ease, transform 0.2s ease',
                            overflow: 'hidden',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '0 0 0 1.5px rgba(255,122,24,0.9), 0 0 28px 8px rgba(255,122,24,0.55), 0 0 50px 12px rgba(255,160,50,0.35), inset 0 1.5px 6px rgba(255,255,255,0.22), inset 0 -2px 8px rgba(0,0,0,0.35)';
                            e.currentTarget.style.transform = 'scale(1.04)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = '0 0 0 1.5px rgba(255,122,24,0.6), 0 0 18px 4px rgba(255,122,24,0.35), 0 0 32px 8px rgba(255,160,50,0.20), inset 0 1.5px 6px rgba(255,255,255,0.18), inset 0 -2px 8px rgba(0,0,0,0.35)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        {/* Logo-matched gradient overlay */}
                        <span style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '999px',
                            background: 'linear-gradient(120deg, rgba(255,100,0,0.40) 0%, rgba(255,140,30,0.50) 50%, rgba(255,80,0,0.40) 100%)',
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
                            background: 'linear-gradient(135deg, rgba(255,122,24,0.22) 0%, rgba(255,160,50,0.28) 50%, rgba(255,100,0,0.22) 100%)',
                            boxShadow: '0 0 0 1.5px rgba(255,122,24,0.6), 0 0 18px 4px rgba(255,122,24,0.35), 0 0 32px 8px rgba(255,160,50,0.20), inset 0 1.5px 6px rgba(255,255,255,0.18), inset 0 -2px 8px rgba(0,0,0,0.35)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            transition: 'box-shadow 0.3s ease, transform 0.2s ease',
                            overflow: 'hidden',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '0 0 0 1.5px rgba(255,122,24,0.9), 0 0 28px 8px rgba(255,122,24,0.55), 0 0 50px 12px rgba(255,160,50,0.35), inset 0 1.5px 6px rgba(255,255,255,0.22), inset 0 -2px 8px rgba(0,0,0,0.35)';
                            e.currentTarget.style.transform = 'scale(1.04)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = '0 0 0 1.5px rgba(255,122,24,0.6), 0 0 18px 4px rgba(255,122,24,0.35), 0 0 32px 8px rgba(255,160,50,0.20), inset 0 1.5px 6px rgba(255,255,255,0.18), inset 0 -2px 8px rgba(0,0,0,0.35)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        {/* Logo-matched gradient overlay */}
                        <span style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '999px',
                            background: 'linear-gradient(120deg, rgba(255,100,0,0.40) 0%, rgba(255,140,30,0.50) 50%, rgba(255,80,0,0.40) 100%)',
                            pointerEvents: 'none',
                        }} />
                        <span style={{ position: 'relative', zIndex: 1 }}>See How We Did It</span>
                    </button>
                )}
                {item.videoId && (
                    <button
                        onClick={() => onVideoClick(item.videoId)}
                        className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff7a18]/5 blur-[120px] rounded-full pointer-events-none hidden dark:block" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <SectionTitle
                        title="Client Testimonials for Our IT Solutions"
                        description="Don't just take our word for it—see what our partners say about working directly with a team that delivers results."
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
                <div className="mt-20 border-t border-black/10 dark:border-white/10 pt-12">
                    {/* Section Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-sm font-semibold tracking-widest uppercase text-[#ff7a18] mb-8"
                    >
                        Trusted by Businesses Worldwide
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative p-[1.5px] rounded-2xl group"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,122,24,0.55) 0%, rgba(255,80,180,0.35) 40%, rgba(100,100,255,0.25) 70%, rgba(255,122,24,0.4) 100%)',
                                    boxShadow: '0 0 18px 2px rgba(255,122,24,0.18), 0 0 40px 6px rgba(255,80,180,0.10)',
                                }}
                            >
                                {/* Inner card */}
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.25 }}
                                    className="relative flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-transparent overflow-hidden"
                                    style={{
                                        boxShadow: 'inset 0 0 40px 6px rgba(255,122,24,0.06)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.parentElement.style.boxShadow = '0 0 36px 8px rgba(255,122,24,0.45), 0 0 70px 18px rgba(255,80,180,0.22), 0 0 120px 30px rgba(100,100,255,0.10)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.parentElement.style.boxShadow = '0 0 18px 2px rgba(255,122,24,0.18), 0 0 40px 6px rgba(255,80,180,0.10)';
                                    }}
                                >
                                    {/* Top-edge prismatic light streak */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#ff7a18]/80 to-transparent pointer-events-none" />
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-gradient-to-b from-[#ff7a18]/20 to-transparent blur-md pointer-events-none rounded-full" />

                                    {/* Ambient radial glow in background */}
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_0%,rgba(255,122,24,0.12)_0%,transparent_65%)] pointer-events-none" />
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_100%,rgba(255,80,180,0.08)_0%,transparent_65%)] pointer-events-none" />

                                    {/* Icon with glow halo */}
                                    <div className="relative">
                                        <div className="absolute inset-0 blur-xl bg-[#ff7a18]/30 rounded-full scale-150 pointer-events-none" />
                                        <span className="relative text-4xl leading-none drop-shadow-[0_0_12px_rgba(255,122,24,0.9)]">{stat.icon}</span>
                                    </div>

                                    <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-100 dark:to-gray-400 bg-clip-text text-transparent leading-tight drop-shadow-[0_0_16px_rgba(255,255,255,0.25)]">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-black dark:text-white font-bold leading-snug">
                                        {stat.label}
                                    </div>
                                </motion.div>
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