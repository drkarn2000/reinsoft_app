'use client';

import SectionTitle from "@/components/section-title";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { Play } from "lucide-react";
import Image from "next/image";

const VideoModal = dynamic(() => import("@/components/video-modal"), {
    ssr: false,
});

const stats = [
    { label: "Projects Delivered", value: "200+" },
    { label: "Years Experience", value: "8+" },
    { label: "Global Clients", value: "15 Countries" },
];

const testimonials = [
    {
        id: 1,
        review: "We needed a scalable e-commerce solution and Reinsoft delivered beyond expectations. The Shopify integration was seamless and our sales increased by 40% in the first month.",
        name: "Sarah Jenkins",
        role: "Founder, Glow Organic",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
        projectType: "Shopify Development",
        // videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        highlight: true,
    },
    {
        id: 2,
        review: "The custom CRM they built for us completely streamlined our operations. What used to take days now takes hours. Their team is incredibly responsive and technical.",
        name: "Marcus Chen",
        role: "CTO, TechFlow Inc",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
        projectType: "Custom Web App",
    },
    {
        id: 3,
        review: "Working with Reinsoft on our SaaS platform was a game-changer. They understood our vision perfectly and the Laravel backend is rock solid.",
        name: "Elena Rodriguez",
        role: "Product Manager, DataSync",
        rating: 5,
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
        projectType: "Laravel Backend",
    }
];

const StarRating = () => (
    <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[#ff7a18] fill-current" viewBox="0 0 20 20">
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-2xl p-6 md:p-8 h-full flex flex-col ${item.highlight
                ? 'bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] border border-[#ff7a18]/30 shadow-[0_0_30px_rgba(255,122,24,0.15)]'
                : 'gradient-border-card bg-white/5 hover:bg-white/10 transition-colors'
                }`}
        >
            {item.highlight && (
                <div className="absolute -top-3 -right-3">
                    <span className="bg-[#ff7a18] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Featured</span>
                </div>
            )}

            <div className="flex items-center justify-between mb-4">
                <StarRating />
                <span className={`text-xs px-3 py-1 rounded-full border ${item.highlight
                    ? 'bg-[#ff7a18]/10 border-[#ff7a18]/30 text-[#ff7a18]'
                    : 'bg-white/5 border-white/10 text-gray-400'
                    }`}>
                    {item.projectType}
                </span>
            </div>

            <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                "{item.review}"
            </p>

            {item.videoId && (
                <div className="mb-6 relative group cursor-pointer overflow-hidden rounded-xl bg-black/50 aspect-video" onClick={() => onVideoClick(item.videoId)}>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors z-10">
                        <div className="w-12 h-12 rounded-full bg-[#ff7a18] flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                            <Play size={20} className="text-white" fill="white" />
                        </div>
                    </div>
                    {/* Placeholder for video thumbnail - normally you'd fetch this from YouTube API or use a static image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <p className="absolute bottom-3 left-4 text-xs font-medium text-white z-20">Watch Video Review</p>
                </div>
            )}

            <div className={`mt-auto flex items-center gap-4 pt-4 border-t ${item.highlight ? 'border-white/10' : 'border-white/5'}`}>
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#ff7a18]/20">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <p className="text-sm text-gray-400">{item.role}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default function Testimonials() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section className="py-12 relative overflow-hidden" id="testimonials">


            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle
                    title="What Our Clients Say About Working With Us"
                    description="Real results from real businesses. See how we help companies scale with custom software solutions."
                />

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((item) => (
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