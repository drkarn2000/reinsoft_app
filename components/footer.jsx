'use client';
import { MailIcon, PhoneIcon, MessageCircleIcon, GlobeIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GradientButton from "@/components/gradient-button";

export default function Footer({ settings = null, navData = null }) {
    const defaultQuickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Our Services', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms & Conditions', href: '/terms' },
    ];

    const defaultExploreLinks = [
        { name: 'Our Work', href: '/our-work' },
        { name: 'Testimonials', href: '/testimonial' },
        { name: 'Web Solutions', href: '/services/web-development' },
        { name: 'Mobile Solutions', href: '/services/mobile-app-development' },
        { name: 'E-Commerce', href: '/services/e-commerce' },
        { name: 'API Integration', href: '/services/api-integration' },
        { name: 'Web Dev Australia', href: '/web-development-company-australia' },
        { name: 'Mobile Apps UK', href: '/mobile-app-development-company-uk' },
        { name: 'Software Dev USA', href: '/software-development-company-usa' },
        { name: 'Hire Flutter Devs (AU)', href: '/hire-flutter-developers-australia' },
        { name: 'Hire Flutter Devs (UK)', href: '/hire-flutter-developers-uk' },
        { name: 'Hire Flutter Devs (US)', href: '/hire-flutter-developers-usa' },
        { name: 'Hire Full Stack (AU)', href: '/hire-full-stack-developers-australia' },
        { name: 'Hire Full Stack (UK)', href: '/hire-full-stack-developers-uk' },
        { name: 'Hire Full Stack (US)', href: '/hire-full-stack-developers-usa' },
        { name: 'Hire React Native (AU)', href: '/hire-react-native-developers-australia' },
        { name: 'Hire React Native (UK)', href: '/hire-react-native-developers-uk' },
        { name: 'Hire React Native (US)', href: '/hire-react-native-developers-usa' },
    ];

    const quickLinks = navData?.footerQuickLinks && navData.footerQuickLinks.length > 0
        ? navData.footerQuickLinks.map((l) => ({ name: l.label, href: l.href }))
        : defaultQuickLinks;

    const exploreLinks = navData?.footerExploreLinks && navData.footerExploreLinks.length > 0
        ? navData.footerExploreLinks.map((l) => ({ name: l.label, href: l.href }))
        : defaultExploreLinks;

    const tagline = settings?.tagline || "Custom Software & IT Solutions for Growing Businesses";
    const contactEmail = settings?.contactEmail || "info@reinsoft.tech";
    const contactPhone = settings?.contactPhone || "+91 89683 69582";
    const phoneTel = contactPhone.replace(/\s+/g, '');

    return (
        <motion.footer className="px-6 md:px-10 lg:px-10 w-full pt-8 mt-12 border-t border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl"
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
                            alt='Reinsoft - Custom Software & IT Solutions Logo'
                            title='Reinsoft Home'
                            className='h-24 w-auto'
                            width={280}
                            height={96}
                        />
                    </Link>
                    <p className="text-xl font-bold brand-text-gradient">
                        {tagline}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm/6">
                        We design and develop high-performance websites, mobile apps, and custom software that help businesses grow faster.
                    </p>
                    <GradientButton className="cursor-default" loop={false}>
                        <GlobeIcon className="size-4" />
                        Serving clients globally
                    </GradientButton>
                </div>

                {/* Column 2 - Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-black dark:text-white font-semibold text-lg">Quick Links</h4>
                    <nav className="flex flex-col gap-3">
                        {quickLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className='text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-sm'
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Column 3 - Contact & CTA */}
                <div className="space-y-4">
                    <h4 className="text-black dark:text-white font-semibold text-lg">Get In Touch</h4>
                    <div className="space-y-3">
                        <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-sm">
                            <MailIcon className="size-4" />
                            {contactEmail}
                        </a>
                        <a href={`tel:${phoneTel}`} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-sm">
                            <PhoneIcon className="size-4" />
                            {contactPhone}
                        </a>
                    </div>
                    <div className="pt-0 space-y-3">
                        <p className="flex items-center gap-2 brand-text-gradient font-medium text-sm">
                            <MessageCircleIcon className="size-4 text-orange-400" />
                            Let&apos;s discuss your project
                        </p>
                        <GradientButton
                            href="/contact"
                            className="inline-block"
                            contentClassName="bg-white/80 dark:bg-white/20 text-black dark:text-white text-sm py-2.5 px-6"
                            loop={false}
                        >
                            Get Free Consultation
                        </GradientButton>
                    </div>
                </div>
            </div>

            {/* SEO & Internal Navigation Links */}
            <div className="py-8 text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-t border-black/10 dark:border-white/20 mt-8">
                <p className="font-semibold mb-2 text-black dark:text-white">Explore More</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {exploreLinks.map((link, index) => (
                        <Link key={index} href={link.href} className="hover:text-black dark:hover:text-white transition">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <p className="font-semibold mt-6 mb-2 text-black dark:text-white">Our Case Studies</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <Link href="/case-studies/accuster-patient-management" className="hover:text-black dark:hover:text-white transition">Accuster</Link>
                    <Link href="/case-studies/activelink-support-app" className="hover:text-black dark:hover:text-white transition">Activlink</Link>
                    <Link href="/case-studies/agriculture-task-app" className="hover:text-black dark:hover:text-white transition">Purelife Agri</Link>
                    <Link href="/case-studies/finance-dashboard" className="hover:text-black dark:hover:text-white transition">Finance Dashboard</Link>
                    <Link href="/case-studies/j2-wealth" className="hover:text-black dark:hover:text-white transition">J2 Wealth</Link>
                    <Link href="/case-studies/kamutalk" className="hover:text-black dark:hover:text-white transition">Kamutalk</Link>
                    <Link href="/case-studies/landlord-management-system" className="hover:text-black dark:hover:text-white transition">Landlord PMS</Link>
                    <Link href="/case-studies/legacy-marketplace" className="hover:text-black dark:hover:text-white transition">Legacy Marketplace</Link>
                    <Link href="/case-studies/macau-nutrition" className="hover:text-black dark:hover:text-white transition">Macau Nutrition</Link>
                    <Link href="/case-studies/multivendor-e-commerce" className="hover:text-black dark:hover:text-white transition">E-Commerce Platform</Link>
                    <Link href="/case-studies/mural-story" className="hover:text-black dark:hover:text-white transition">Mural Story</Link>
                    <Link href="/case-studies/pos-software" className="hover:text-black dark:hover:text-white transition">POS Software</Link>
                    <Link href="/case-studies/sahasra-ai" className="hover:text-black dark:hover:text-white transition">Sahasra AI</Link>
                    <Link href="/case-studies/tap-shake-walk" className="hover:text-black dark:hover:text-white transition">TapShakeWalk</Link>
                    <Link href="/case-studies/thirty30-media" className="hover:text-black dark:hover:text-white transition">Thirty30 Media</Link>
                    <Link href="/case-studies/vridez" className="hover:text-black dark:hover:text-white transition">Vridez</Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <hr className="w-full border-black/10 dark:border-white/20" />
            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-5">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    © 2025 Reinsoft. All rights reserved.
                </p>
                <p className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                    Built with <HeartIcon className="size-3.5 text-red-400 fill-red-400" /> for startups & growing businesses worldwide.
                </p>
            </div>
        </motion.footer>
    );
}