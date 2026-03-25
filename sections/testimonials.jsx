'use client';

import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import dynamic from 'next/dynamic';
import { Play } from "lucide-react";
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

const featuredVideos = [
    {
        name: "Capt. Pankaj Sabarwal",
        role: "Director, Maritime Training Institute",
        location: "India",
        flag: "in",
        image: "/assets/Testimonial/Capt_Pankaj.jpeg",
        review: "They developed a fantastic certificate generation and verification software for my maritime training institute. Both of them were very professional and very supportive. I highly recommend them for your software development work.",
        projectType: "Certificate Verification Software",
        localVideo: "/assets/Testimonial/Capt_Pankaj.mp4",
        subtitleSrc: "/assets/Testimonial/capt_pankaj.vtt",
    },
    {
        name: "Sujoye Dhar",
        role: "CTO, Biswakarma",
        location: "Kolkata, India",
        flag: "in",
        image: "/assets/Testimonial/sujoay_pic.png",
        review: "Manpreet ji understood our problems very well. He applied the right solution and our jewellery website was made perfectly. I recommend him for any website or technical problem. My experience with him was very good.",
        projectType: "Jewellery E-commerce Website",
        localVideo: "/assets/Testimonial/sujoye_dhar.mp4",
        subtitleSrc: "/assets/Testimonial/sujoye_dhar.vtt",
    },
];

const VideoSlider = ({ onPlay }) => {
    const [current, setCurrent] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const videoRef = useRef(null);
    const timerRef = useRef(null);
    const total = featuredVideos.length;
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;
    const item = featuredVideos[current];

    const goTo = useCallback((index) => {
        const i = (index + total) % total;
        setCurrent(i);
        setIsHovering(false);
        if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
    }, [total]);

    // Auto-advance every 7s when not hovering
    useEffect(() => {
        if (isHovering) return;
        timerRef.current = setTimeout(() => {
            setCurrent(prev => (prev + 1) % total);
        }, 7000);
        return () => clearTimeout(timerRef.current);
    }, [current, isHovering, total]);

    // Reset video when slide changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [current]);

    const handleMouseEnter = () => {
        setIsHovering(true);
        clearTimeout(timerRef.current);
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(() => {});
        }
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
        if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-full mb-14 rounded-3xl overflow-hidden"
        >
            {/* Dynamic blurred background */}
            <div className="absolute inset-0 -z-0">
                {featuredVideos.map((v, i) => (
                    <div key={i} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === current ? 1 : 0 }}>
                        <img src={v.image} alt="" className="w-full h-full object-cover scale-110" style={{ filter: 'blur(32px) brightness(0.22) saturate(1.3)' }} />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
            </div>

            {/* Label */}
            <div className="relative z-10 flex items-center justify-center gap-2 pt-10 pb-6">
                <span className="h-px w-10 bg-[#ff7a18]/40" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#ff7a18]">Featured Video Testimonials</span>
                <span className="h-px w-10 bg-[#ff7a18]/40" />
            </div>

            {/* Showcase carousel */}
            <div className="relative z-10 flex items-center justify-center gap-4 px-4 pb-4" style={{ minHeight: '340px' }}>

                {/* Prev arrow */}
                <button onClick={() => goTo(current - 1)} className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none" style={{ background: 'rgba(255,122,24,0.15)', border: '1px solid rgba(255,122,24,0.3)' }} aria-label="Previous">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>

                {/* Left peek card */}
                <div className="hidden md:block flex-shrink-0 cursor-pointer" style={{ width: '180px', opacity: 0.4, transform: 'scale(0.85) translateX(16px)', transition: 'all 0.5s ease', borderRadius: '14px', overflow: 'hidden' }} onClick={() => goTo(current - 1)}>
                    <div className="relative aspect-video">
                        <img src={featuredVideos[prev].image} alt="" className="w-full h-full object-cover object-top" style={{ filter: 'brightness(0.55)' }} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,122,24,0.55)' }}>
                                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            </div>
                        </div>
                    </div>
                    <div className="px-3 py-2" style={{ background: 'rgba(0,0,0,0.7)' }}>
                        <p className="text-white/70 text-xs font-semibold truncate">{featuredVideos[prev].name}</p>
                        <p className="text-white/40 text-[10px] truncate">{featuredVideos[prev].role}</p>
                    </div>
                </div>

                {/* Active center card */}
                <div className="relative flex-shrink-0 transition-all duration-500" style={{ width: 'min(500px, 100%)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 0 0 1.5px rgba(255,122,24,0.4), 0 0 60px 12px rgba(255,122,24,0.22), 0 30px 60px rgba(0,0,0,0.7)' }}>
                    {/* Video / thumbnail */}
                    <div className="relative aspect-video cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <video ref={videoRef} key={item.localVideo} src={item.localVideo} muted playsInline loop preload="auto" className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500" style={{ opacity: isHovering ? 1 : 0 }} />
                        <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500" style={{ opacity: isHovering ? 0 : 1, filter: 'brightness(0.8)' }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                        {/* Play button — click opens full modal with audio + subtitles */}
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ opacity: isHovering ? 0 : 1 }}>
                            <button
                                onClick={() => onPlay(item)}
                                className="relative focus:outline-none"
                                aria-label="Watch with audio"
                            >
                                <div className="absolute inset-0 rounded-full bg-[#ff7a18]/30 scale-[2] blur-lg animate-pulse" />
                                <div className="relative flex items-center justify-center w-16 h-16 rounded-full hover:scale-110 transition-transform duration-200" style={{ background: 'linear-gradient(135deg, rgba(255,122,24,0.95), rgba(255,60,0,1))', boxShadow: '0 0 0 4px rgba(255,122,24,0.3), 0 0 30px rgba(255,122,24,0.6)' }}>
                                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                                </div>
                            </button>
                        </div>
                        {/* Subtitles badge */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
                            <span className="size-1.5 rounded-full bg-[#ff7a18] animate-pulse inline-block" />
                            <span className="text-white text-[10px] font-semibold">English Subtitles</span>
                        </div>
                    </div>
                    {/* Stars */}
                    <div className="flex gap-0.5 px-5 pt-4 pb-1" style={{ background: 'rgba(15,23,42,0.97)' }}>
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                    </div>
                    {/* Animated quote + info */}
                    <motion.div key={`q-${current}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="px-5 pb-5" style={{ background: 'rgba(15,23,42,0.97)' }}>
                        <p className="text-white/80 text-sm leading-relaxed line-clamp-3 mb-3">&ldquo;{item.review}&rdquo;</p>
                        <div className="flex items-center gap-2.5">
                            <img src={item.image} alt={item.name} className="w-8 h-8 rounded-full object-cover object-top border border-[#ff7a18]/40" />
                            <div>
                                <p className="text-white text-sm font-bold leading-tight">{item.name}</p>
                                <div className="flex items-center gap-1">
                                    <img src={`https://flagcdn.com/w20/${item.flag}.png`} alt="flag" className="h-2.5 w-[14px] object-cover rounded-[1px]" />
                                    <p className="text-white/50 text-xs">{item.role}</p>
                                </div>
                            </div>
                            <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#ff7a18]/30 text-[#ff7a18] bg-[#ff7a18]/10 whitespace-nowrap">{item.projectType}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right peek card */}
                <div className="hidden md:block flex-shrink-0 cursor-pointer" style={{ width: '180px', opacity: 0.4, transform: 'scale(0.85) translateX(-16px)', transition: 'all 0.5s ease', borderRadius: '14px', overflow: 'hidden' }} onClick={() => goTo(current + 1)}>
                    <div className="relative aspect-video">
                        <img src={featuredVideos[next].image} alt="" className="w-full h-full object-cover object-top" style={{ filter: 'brightness(0.55)' }} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,122,24,0.55)' }}>
                                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            </div>
                        </div>
                    </div>
                    <div className="px-3 py-2" style={{ background: 'rgba(0,0,0,0.7)' }}>
                        <p className="text-white/70 text-xs font-semibold truncate">{featuredVideos[next].name}</p>
                        <p className="text-white/40 text-[10px] truncate">{featuredVideos[next].role}</p>
                    </div>
                </div>

                {/* Next arrow */}
                <button onClick={() => goTo(current + 1)} className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none" style={{ background: 'rgba(255,122,24,0.15)', border: '1px solid rgba(255,122,24,0.3)' }} aria-label="Next">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            {/* Bottom dots */}
            <div className="relative z-10 flex flex-col items-center gap-2 pb-8">
                <div className="flex items-center gap-2">
                    {featuredVideos.map((_, i) => (
                        <button key={i} onClick={() => goTo(i)} className="transition-all duration-300 rounded-full focus:outline-none" style={{ width: i === current ? '28px' : '8px', height: '8px', background: i === current ? '#ff7a18' : 'rgba(255,255,255,0.25)' }} aria-label={`Go to ${featuredVideos[i].name}`} />
                    ))}
                </div>
                <span className="text-white/30 text-xs">{current + 1} / {total}</span>
            </div>
        </motion.div>
    );
};

const testimonials = [
    {
        id: 2,
        review: "The custom website built by Amarjeet from Reinsoft completely streamlined our operations. What used to take days now takes hours. I have worked with many developers before, but Amarjeet truly outperformed them all.",
        name: "Ehsan F.",
        role: "Product Owner",
        companyLogo: "thirty30media",
        location: "London, UK",
        flag: "gb",
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
        location: "Oxford, UK",
        flag: "gb",
        rating: 5,
        image: "/assets/Testimonial/angela.png",
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
        location: "Johannesburg, South Africa",
        flag: "za",
        rating: 5,
        image: "/assets/Testimonial/Manti.jpeg",
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
        location: "Ahmedabad, India",
        flag: "in",
        rating: 5,
        image: "/assets/Testimonial/umesh.png",
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
        location: "Bengaluru, India",
        flag: "in",
        rating: 5,
        image: "/assets/Testimonial/kishor1.png",
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
        location: "Ahmedabad, India",
        flag: "in",
        rating: 5,
        image: "/assets/Testimonial/sagar.png",
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
        location: "Cambridge, Canada",
        flag: "ca",
        rating: 5,
        image: "/assets/Testimonial/Sandip.png",
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
        flag: "gb",
        rating: 5,
        image: "/assets/Testimonial/sam.png",
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
    const hasVideo = item.localVideo || item.videoId;
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
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        {item.flag && <img src={`https://flagcdn.com/w20/${item.flag.toLowerCase()}.png`} alt="flag" className="h-3 w-[18px] object-cover rounded-[1px] shadow-sm" loading="lazy" />}
                        <span className="font-medium text-gray-600 dark:text-gray-400">{item.location}</span>
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
            <div className={`mt-auto flex items-center justify-center gap-3 flex-wrap border-t pt-4 ${item.highlight ? 'border-black/10 dark:border-white/10' : 'border-black/5 dark:border-white/5'}`}>
                {hasVideo && (
                    <button
                        onClick={() => onVideoClick(item)}
                        style={{
                            position: 'relative',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '7px',
                            padding: '10px 22px',
                            borderRadius: '999px',
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#fff',
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
                        <span style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '999px',
                            background: 'linear-gradient(120deg, rgba(255,100,0,0.40) 0%, rgba(255,140,30,0.50) 50%, rgba(255,80,0,0.40) 100%)',
                            pointerEvents: 'none',
                        }} />
                        <Play size={14} style={{ position: 'relative', zIndex: 1 }} />
                        <span style={{ position: 'relative', zIndex: 1 }}>Watch Testimonial</span>
                    </button>
                )}
                {item.link && (
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
                        <span style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '999px',
                            background: 'linear-gradient(120deg, rgba(255,100,0,0.40) 0%, rgba(255,140,30,0.50) 50%, rgba(255,80,0,0.40) 100%)',
                            pointerEvents: 'none',
                        }} />
                        <span style={{ position: 'relative', zIndex: 1 }}>See How We Did It</span>
                    </Link>
                )}
                {!hasVideo && !item.link && (
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
            </div>
        </motion.div>
    );
};

export default function Testimonials({ limit }) {
    const [selectedVideo, setSelectedVideo] = useState(null); // stores full item object

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

                {/* Featured Video Testimonial Slider */}
                <VideoSlider onPlay={(item) => setSelectedVideo(item)} />

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {testimonialsToDisplay.map((item) => (
                        <TestimonialCard
                            key={item.id}
                            item={item}
                            onVideoClick={(item) => setSelectedVideo(item)}
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
                videoId={selectedVideo?.videoId}
                localVideo={selectedVideo?.localVideo}
                subtitleSrc={selectedVideo?.subtitleSrc}
            />
        </section>
    );
}