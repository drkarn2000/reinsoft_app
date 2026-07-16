'use client';

import { MenuIcon, XIcon, ChevronDownIcon, SmartphoneIcon, CodeIcon, LayoutGridIcon, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from 'next-themes';

import GradientButton from './gradient-button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        {
            name: 'Our Services',
            href: '/services',
            dropdown: [
                { name: 'Software Development', href: '/services/software-development', icon: <CodeIcon className="size-4" />, description: 'Custom software & enterprise solutions' },
                { name: 'Web Development', href: '/services/web-development', icon: <LayoutGridIcon className="size-4" />, description: 'Custom web apps & sites' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', icon: <SmartphoneIcon className="size-4" />, description: 'Native & Cross-platform apps' },
                { name: 'All Services', href: '/services', icon: <LayoutGridIcon className="size-4" />, description: 'Explore our full list' },
            ]
        },
        { name: 'Our Work', href: '/our-work' },
    ];

    useEffect(() => {
        setMounted(true);
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
                className={`fixed top-4 inset-x-0 mx-auto z-50 flex w-[95%] max-w-[1400px] items-center justify-between px-3 py-1.5 md:px-5 md:py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/40 transition-all duration-300 ${isScrolled
                    ? 'shadow-2xl shadow-black/20 bg-white/50 border-white/50'
                    : 'shadow-xl shadow-black/10'
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >

                <Link href='/'>
                    <div className="relative h-20 sm:h-20 md:h-20 w-[180px] sm:w-[210px] md:w-[240px] -my-4">
                        <Image
                            src='/assets/logo.png'
                            alt='Reinsoft - Custom Software & IT Solutions Logo'
                            title='Reinsoft Home'
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
                            <div className="relative inline-flex rounded-full group">
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0f6fff] via-[#35a4ff] to-[#54d9ff] blur-3xl opacity-0 transition duration-300 group-hover:opacity-75" />
                                {link.href === pathname || (pathname.startsWith(link.href) && link.href !== '/') ? (
                                    <Link
                                        href={link.href}
                                        className="relative z-10 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#0f6fff] to-[#54d9ff] rounded-full flex items-center gap-1 shadow-[0_15px_40px_rgba(15,111,255,0.28)] transition-all duration-200 hover:-translate-y-0.5"
                                    >
                                        {link.name}
                                        {link.dropdown && <ChevronDownIcon className={`size-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                    </Link>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="relative z-10 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-full flex items-center gap-1 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#0f6fff] hover:to-[#54d9ff] hover:text-white hover:shadow-[0_15px_40px_rgba(15,111,255,0.18)] hover:-translate-y-0.5"
                                    >
                                        {link.name}
                                        {link.dropdown && <ChevronDownIcon className={`size-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                    </Link>
                                )}
                            </div>
                            {link.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 min-w-[280px] glass global-orange-glow bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-3 shadow-2xl z-50 overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-1">
                                                {link.dropdown.map((item) => (
                                                    <div key={item.name} className="relative rounded-2xl group overflow-hidden">
                                                        <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0f6fff] via-[#35a4ff] to-[#54d9ff] blur-3xl opacity-0 transition duration-300 group-hover:opacity-75" />
                                                        <Link
                                                            href={item.href}
                                                            className="relative z-10 flex items-start gap-4 p-3 rounded-2xl border border-white/15 bg-white/95 text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0f6fff] hover:to-[#54d9ff] hover:text-white hover:shadow-[0_20px_60px_rgba(15,111,255,0.22)] hover:-translate-y-0.5"
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            <div className="size-9 rounded-xl bg-slate-100/70 border border-slate-200/60 flex items-center justify-center text-slate-500 transition-colors duration-300 group-hover:text-white">
                                                                {item.icon}
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="text-sm font-semibold text-slate-900 whitespace-nowrap group-hover:text-white transition-colors duration-300">{item.name}</span>
                                                                <span className="text-xs text-slate-500 leading-tight mt-0.5 group-hover:text-slate-100 transition-colors duration-300">{item.description}</span>
                                                            </div>
                                                        </Link>
                                                    </div>
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

                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="ml-3 p-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-200"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
                        </button>
                    )}
                </div>

                <div className="flex items-center md:hidden gap-3">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors text-gray-700 dark:text-gray-200"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
                        </button>
                    )}
                    <button
                        onClick={() => setIsOpen(true)}
                        className='transition active:scale-90 text-gray-800 dark:text-gray-200'
                    >
                        <MenuIcon className='size-6.5' />
                    </button>
                </div>
            </motion.nav>

            <div
                className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-white/95 text-black dark:bg-black/95 dark:text-white text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden overflow-y-auto pt-20 pb-10 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {links.map((link) => (
                    <div key={link.name} className="flex flex-col items-center gap-4 w-full">
                        <div className="relative w-full inline-flex rounded-full group">
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-sky-500 blur-2xl opacity-0 transition duration-300 group-hover:opacity-70" />
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`relative z-10 w-full px-6 py-2 text-lg font-semibold rounded-full flex items-center gap-1.5 transition-all duration-200 ${link.href === pathname || (pathname.startsWith(link.href) && link.href !== '/')
                                    ? 'bg-black/10 text-black dark:bg-white/10 dark:text-white hover:text-white'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-white'
                                    } ${link.href !== pathname ? 'hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500' : ''}`}
                            >
                                {link.name}
                            </Link>
                        </div>

                        {link.dropdown && (
                            <div className="flex flex-col items-center gap-3 pl-4 border-l border-black/10 dark:border-white/10 mt-1 mb-4">
                                {link.dropdown.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-base text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
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
                    className='rounded-md p-2 glass absolute top-8 right-8 text-black dark:text-white'
                >
                    <XIcon className="text-current" />
                </button>
            </div>
        </>
    );
}
