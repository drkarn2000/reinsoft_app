'use client';
import { MailIcon, PhoneIcon, MessageCircleIcon, GlobeIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GradientButton from "@/components/gradient-button";

export default function Footer() {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms & Conditions', href: '/terms' },
    ];

    return (
        <motion.footer className="px-6 md:px-10 lg:px-10 w-full pt-8 mt-12 border-t border-white/10 bg-transparent backdrop-blur-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Main Footer Content - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-32 pb-10">

                {/* Column 1 - Brand */}
                <div className="space-y-4">
                    <Link href="/">
                        <Image
                            src='/assets/logo.png'
                            alt='Reinsoft Logo'
                            className='h-24 w-auto'
                            width={280}
                            height={96}
                        />
                    </Link>
                    <p className="text-xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#ff7a18] bg-clip-text text-transparent">
                        Custom Software & IT Solutions for Growing Businesses
                    </p>
                    <p className="text-gray-300 text-sm/6">
                        We design and develop high-performance websites, mobile apps, and custom software that help businesses grow faster.
                    </p>
                    <GradientButton className="cursor-default" loop={false}>
                        <GlobeIcon className="size-4" />
                        Serving clients globally
                    </GradientButton>
                </div>

                {/* Column 2 - Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-white font-semibold text-lg">Quick Links</h4>
                    <nav className="flex flex-col gap-3">
                        {quickLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className='text-gray-300 hover:text-white transition text-sm'
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Column 3 - Contact & CTA */}
                <div className="space-y-4">
                    <h4 className="text-white font-semibold text-lg">Get In Touch</h4>
                    <div className="space-y-3">
                        <a href="mailto:info@reinsoft.tech" className="flex items-center gap-3 text-gray-300 hover:text-white transition text-sm">
                            <MailIcon className="size-4" />
                            info@reinsoft.tech
                        </a>
                        <a href="tel:+918968369582" className="flex items-center gap-3 text-gray-300 hover:text-white transition text-sm">
                            <PhoneIcon className="size-4" />
                            +91 89683 69582
                        </a>
                    </div>
                    <div className="pt-0 space-y-3">
                        <p className="flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#ff7a18] bg-clip-text text-transparent font-medium text-sm">
                            <MessageCircleIcon className="size-4 text-orange-400" />
                            Let's discuss your project
                        </p>
                        <GradientButton
                            href="/contact"
                            className="inline-block"
                            contentClassName="bg-white/20 text-sm py-2.5 px-6"
                            loop={false}
                        >
                            Get Free Consultation
                        </GradientButton>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <hr className="w-full border-white/20" />
            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-5">
                <p className="text-gray-400 text-sm">
                    © 2025 Reinsoft. All rights reserved.
                </p>
                <p className="flex items-center gap-1 text-gray-400 text-sm">
                    Built with <HeartIcon className="size-3.5 text-red-400 fill-red-400" /> for startups & growing businesses worldwide.
                </p>
            </div>
        </motion.footer>
    );
}