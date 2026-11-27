'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    FileText,
    Briefcase,
    FolderKanban,
    MessageSquareQuote,
    HelpCircle,
    Building2,
    Users,
    Image as ImageIcon,
    Compass,
    Settings,
    Inbox,
    Menu,
    X,
    ExternalLink,
    ChevronRight,
    Shield,
} from 'lucide-react';
import AdminLogoutButton from './logout-button';
import { ToastProvider } from './toast-context';

const navGroups = [
    {
        title: 'Core Control',
        items: [
            { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
        ],
    },
    {
        title: 'Content & Pages',
        items: [
            { href: '/admin/pages', label: 'Pages & Sections', icon: FileText },
            { href: '/admin/case-studies', label: 'Case Studies', icon: FolderKanban },
            { href: '/admin/services', label: 'Services Engine', icon: Briefcase },
            { href: '/admin/testimonials', label: 'Testimonials', icon: MessageSquareQuote },
            { href: '/admin/faqs', label: 'FAQs Pool', icon: HelpCircle },
        ],
    },
    {
        title: 'Brand & Assets',
        items: [
            { href: '/admin/brand-logos', label: 'Brand Logos', icon: Building2 },
            { href: '/admin/team', label: 'Team Members', icon: Users },
            { href: '/admin/media', label: 'Media Library', icon: ImageIcon },
        ],
    },
    {
        title: 'Structure & Inquiries',
        items: [
            { href: '/admin/navigation', label: 'Navigation & Menus', icon: Compass },
            { href: '/admin/settings', label: 'Global Settings & SEO', icon: Settings },
            { href: '/admin/inquiries', label: 'Inquiries Inbox', icon: Inbox },
        ],
    },
];

export default function AdminShell({ children, user }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isSuperAdmin = user?.role === 'SUPER_ADMIN';

    return (
        <ToastProvider>
            <div className="min-h-screen bg-[#0a0c10] text-slate-100 flex flex-col lg:flex-row antialiased">
                {/* Mobile Backdrop */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Sidebar Navigation */}
                <aside
                    className={`fixed lg:sticky top-0 bottom-0 left-0 w-72 bg-[#0f1219] border-r border-slate-800/80 z-50 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
                        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    {/* Brand Header */}
                    <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800/80 bg-[#121622]">
                        <Link href="/admin" className="flex items-center gap-3">
                            <Image
                                src="/assets/logo.png"
                                alt="REINSOFT"
                                width={130}
                                height={38}
                                className="h-8 w-auto brightness-110"
                                priority
                            />
                            <span className="text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                                CMS
                            </span>
                        </Link>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-1.5 text-slate-400 hover:text-white rounded-lg lg:hidden"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Navigation Scroll Area */}
                    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-800">
                        {navGroups.map((group) => (
                            <div key={group.title} className="space-y-1">
                                <h3 className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                    {group.title}
                                </h3>
                                <div className="space-y-0.5 pt-1">
                                    {group.items.map((item) => {
                                        const Icon = item.icon;
                                        const isActive = item.exact
                                            ? pathname === item.href
                                            : pathname === item.href || pathname.startsWith(item.href + '/');

                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setSidebarOpen(false)}
                                                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                                                    isActive
                                                        ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/10 text-orange-400 border border-orange-500/30 font-semibold shadow-sm'
                                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                                }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Icon
                                                        className={`w-4 h-4 transition-colors ${
                                                            isActive
                                                                ? 'text-orange-400'
                                                                : 'text-slate-400 group-hover:text-slate-300'
                                                        }`}
                                                    />
                                                    <span>{item.label}</span>
                                                </div>
                                                {isActive && (
                                                    <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* User Profile & Footer in Sidebar */}
                    <div className="p-4 border-t border-slate-800/80 bg-[#121622]/80">
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-sm shrink-0">
                                    {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs font-semibold text-white truncate">{user?.name || 'Admin'}</p>
                                    <div className="flex items-center gap-1.5">
                                        <span
                                            className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${
                                                isSuperAdmin
                                                    ? 'bg-orange-500/10 text-orange-400 border-orange-500/30'
                                                    : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                                            }`}
                                        >
                                            {user?.role || 'EDITOR'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <AdminLogoutButton />
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Top Bar */}
                    <header className="h-16 px-4 sm:px-8 border-b border-slate-800/80 bg-[#0f1219]/90 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="p-2 -ml-2 text-slate-400 hover:text-white rounded-lg lg:hidden"
                                aria-label="Open menu"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                                <span className="font-semibold text-slate-300">Admin Control Center</span>
                                <span>/</span>
                                <span className="text-orange-400 capitalize">
                                    {pathname.split('/')[2] ? pathname.split('/')[2].replace('-', ' ') : 'Dashboard'}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-colors"
                            >
                                <span>View Live Site</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>

                            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Neon DB Active</span>
                            </div>
                        </div>
                    </header>

                    {/* Page Content Body */}
                    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
                        {children}
                    </main>
                </div>
            </div>
        </ToastProvider>
    );
}
