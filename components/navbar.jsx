'use client';

import { MenuIcon, XIcon, ChevronDownIcon, SmartphoneIcon, CodeIcon, LayoutGridIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import GradientButton from './gradient-button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Why Choose Us', href: '/#why-choose-us' },
        {
            name: 'Our Services',
            href: '/services',
            dropdown: [
                { name: 'Web Development', href: '/services/web-development', icon: <CodeIcon className="size-4" />, description: 'Custom web apps & sites' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', icon: <SmartphoneIcon className="size-4" />, description: 'Native & Cross-platform apps' },
                { name: 'All Services', href: '/services', icon: <LayoutGridIcon className="size-4" />, description: 'Explore our full list' },
            ]
        },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Our Team', href: '/#team' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        setIsOpen(false); // Close mobile menu on path change

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    return (
        <>
            <motion.nav
                className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-10 lg:px-16 transition-colors ${isScrolled
                    ? '!bg-black/20 backdrop-blur-md shadow-sm'
                    : 'bg-transparent backdrop-blur-sm'
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                {/* Gradient Border */}
                <div
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#3b82f6] to-[#ff7a18] transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
                />

                <Link href='/'>
                    <Image
                        src='/assets/logo.png'
                        alt='Reinsoft Logo'
                        className='h-24 w-auto'
                        width={240}
                        height={96}
                        priority
                    />
                </Link>

                <div className='hidden items-center space-x-2 md:flex'>
                    {links.map((link) => (
                        <div
                            key={link.name}
                            className="relative h-full flex items-center"
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                        >
                            <GradientButton href={link.href} loop={false} className="flex items-center gap-1.5">
                                {link.name}
                                {link.dropdown && <ChevronDownIcon className={`size-4.5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                            </GradientButton>

                            {link.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 min-w-[280px] glass global-orange-glow bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl z-50 overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-1">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/10 transition-all group/item"
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        <div className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover/item:text-white transition-colors">
                                                            {item.icon}
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-sm font-semibold text-gray-200 group-hover/item:text-white whitespace-nowrap">{item.name}</span>
                                                            <span className="text-xs text-gray-400 leading-tight mt-0.5">{item.description}</span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                            {/* Accent glow line inside dropdown */}
                                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-orange-500/50" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}

                    <GradientButton
                        href='/contact'
                        contentClassName="bg-black/20 hover:bg-black/40 backdrop-blur-md ml-4"
                        useTrustStripStyle={true}
                    >
                        Get Estimate
                    </GradientButton>
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className='transition active:scale-90 md:hidden text-white'
                >
                    <MenuIcon className='size-6.5' />
                </button>
            </motion.nav>

            <div
                className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/95 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden overflow-y-auto pt-20 pb-10 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {links.map((link) => (
                    <div key={link.name} className="flex flex-col items-center gap-4">
                        <GradientButton
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            loop={false}
                        >
                            {link.name}
                        </GradientButton>

                        {link.dropdown && (
                            <div className="flex flex-col items-center gap-3 pl-4 border-l border-white/10 mt-1 mb-4">
                                {link.dropdown.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-base text-gray-400 hover:text-white transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <GradientButton
                    href='/contact'
                    onClick={() => setIsOpen(false)}
                    contentClassName="bg-black/20 hover:bg-black/40 backdrop-blur-md mt-6"
                    useTrustStripStyle={true}
                >
                    Get Estimate
                </GradientButton>

                <button
                    onClick={() => setIsOpen(false)}
                    className='rounded-md p-2 glass absolute top-8 right-8'
                >
                    <XIcon className="text-white" />
                </button>
            </div>
        </>
    );
}
