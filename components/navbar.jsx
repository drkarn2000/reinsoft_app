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
        { name: 'About Us', href: '/about' },
        {
            name: 'Our Services',
            href: '/services',
            dropdown: [
                { name: 'Web Development', href: '/services/web-development', icon: <CodeIcon className="size-4" />, description: 'Custom web apps & sites' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', icon: <SmartphoneIcon className="size-4" />, description: 'Native & Cross-platform apps' },
                { name: 'All Services', href: '/services', icon: <LayoutGridIcon className="size-4" />, description: 'Explore our full list' },
            ]
        },
        { name: 'Our Work', href: '/our-work' },
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
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex w-[98%] xl:w-[95%] max-w-[1400px] items-center justify-between px-3 py-1.5 md:px-5 md:py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/40 transition-all duration-300 ${isScrolled
                    ? 'shadow-2xl shadow-black/20 bg-white/50 border-white/50'
                    : 'shadow-xl shadow-black/10'
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >

                <Link href='/'>
                    <div className="relative h-10 sm:h-12 md:h-12 w-[140px] sm:w-[160px] md:w-[180px]">
                        <Image
                            src='/assets/logo.png'
                            alt='Reinsoft Logo'
                            fill
                            className='object-contain'
                            priority
                            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 240px"
                        />
                    </div>
                </Link>

                <div className='hidden items-center space-x-2 md:flex'>
                    {links.map((link) => (
                        <div
                            key={link.name}
                            className="relative h-full flex items-center"
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                        >
                            {link.href === pathname || (pathname.startsWith(link.href) && link.href !== '/') ? (
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-white/20 rounded-full flex items-center gap-1 transition-colors"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDownIcon className={`size-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                </Link>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-full flex items-center gap-1 transition-colors"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDownIcon className={`size-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                </Link>
                            )}
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

                    <Link
                        href='/contact'
                        className="ml-4 px-5 py-2 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Let's Talk
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className='transition active:scale-90 md:hidden text-gray-800'
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
                        <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`px-6 py-2 text-lg font-semibold rounded-full flex items-center gap-1.5 transition-colors ${link.href === pathname || (pathname.startsWith(link.href) && link.href !== '/')
                                ? 'bg-white/10 text-white'
                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.name}
                        </Link>

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

                <Link
                    href='/contact'
                    onClick={() => setIsOpen(false)}
                    className="mt-6 px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] transition-all duration-200"
                >
                    Let's Talk
                </Link>

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
