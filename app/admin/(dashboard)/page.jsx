import Link from 'next/link';
import prisma from '@/lib/prisma';
import { getAuthenticatedAdmin } from '@/lib/auth';
import {
    FileText,
    FolderKanban,
    Briefcase,
    MessageSquareQuote,
    Building2,
    Users,
    HelpCircle,
    Compass,
    Settings,
    Inbox,
    PlusCircle,
    ExternalLink,
    Clock,
    Database,
    ShieldCheck,
    ArrowUpRight,
    Sparkles,
} from 'lucide-react';

export const metadata = {
    title: 'CMS Dashboard | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
    const user = await getAuthenticatedAdmin();

    // Query live record counts from Neon PostgreSQL
    const [counts, recentSubmissions] = await Promise.all([
        prisma.$queryRaw`
            SELECT
                (SELECT COUNT(*)::int FROM "pages") AS "pagesCount",
                (SELECT COUNT(*)::int FROM "page_sections") AS "sectionsCount",
                (SELECT COUNT(*)::int FROM "case_studies") AS "caseStudiesCount",
                (SELECT COUNT(*)::int FROM "testimonials") AS "testimonialsCount",
                (SELECT COUNT(*)::int FROM "brand_logos") AS "brandLogosCount",
                (SELECT COUNT(*)::int FROM "team_members") AS "teamCount",
                (SELECT COUNT(*)::int FROM "faq_items") AS "faqsCount",
                (SELECT COUNT(*)::int FROM "navigation_items") AS "navCount",
                (SELECT COUNT(*)::int FROM "form_submissions") AS "inquiriesCount"
        `,
        prisma.formSubmission.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
        }),
    ]);
    const [
        {
            pagesCount,
            sectionsCount,
            caseStudiesCount,
            testimonialsCount,
            brandLogosCount,
            teamCount,
            faqsCount,
            navCount,
            inquiriesCount,
        },
    ] = counts;

    const statCards = [
        {
            title: 'Pages & Landing Pages',
            count: pagesCount,
            subtitle: `${sectionsCount} active sections configured`,
            icon: FileText,
            href: '/admin/pages',
            color: 'from-orange-500/20 to-amber-500/10 text-orange-400 border-orange-500/30',
        },
        {
            title: 'Case Studies',
            count: caseStudiesCount,
            subtitle: 'Portfolio projects & metrics',
            icon: FolderKanban,
            href: '/admin/case-studies',
            color: 'from-blue-500/20 to-cyan-500/10 text-blue-400 border-blue-500/30',
        },
        {
            title: 'Client Testimonials',
            count: testimonialsCount,
            subtitle: 'Text & video client reviews',
            icon: MessageSquareQuote,
            href: '/admin/testimonials',
            color: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30',
        },
        {
            title: 'Brand Logos',
            count: brandLogosCount,
            subtitle: 'Row 1 & Row 2 marquee tickers',
            icon: Building2,
            href: '/admin/brand-logos',
            color: 'from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30',
        },
        {
            title: 'Core Leadership & Team',
            count: teamCount,
            subtitle: 'Founders & executive profiles',
            icon: Users,
            href: '/admin/team',
            color: 'from-rose-500/20 to-red-500/10 text-rose-400 border-rose-500/30',
        },
        {
            title: 'FAQs Pool',
            count: faqsCount,
            subtitle: 'Categorized questions & answers',
            icon: HelpCircle,
            href: '/admin/faqs',
            color: 'from-amber-500/20 to-yellow-500/10 text-amber-400 border-amber-500/30',
        },
        {
            title: 'Navigation & Menus',
            count: navCount,
            subtitle: 'Navbar, mega-menu & footer links',
            icon: Compass,
            href: '/admin/navigation',
            color: 'from-cyan-500/20 to-sky-500/10 text-cyan-400 border-cyan-500/30',
        },
        {
            title: 'Client Inquiries & Leads',
            count: inquiriesCount,
            subtitle: 'Contact form submissions',
            icon: Inbox,
            href: '/admin/inquiries',
            color: 'from-violet-500/20 to-purple-500/10 text-violet-400 border-violet-500/30',
        },
    ];

    const quickShortcuts = [
        { label: 'Edit Homepage Sections', href: '/admin/pages?slug=', icon: FileText },
        { label: 'Add New Case Study', href: '/admin/case-studies?action=new', icon: PlusCircle },
        { label: 'Manage Services Engine', href: '/admin/services', icon: Briefcase },
        { label: 'Manage Brand Logos', href: '/admin/brand-logos', icon: Building2 },
        { label: 'Manage Testimonials', href: '/admin/testimonials', icon: MessageSquareQuote },
        { label: 'Global Settings & SEO', href: '/admin/settings', icon: Settings },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Banner */}
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#131722] to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
                            <Sparkles className="w-3.5 h-3.5" />
                            REINSOFT Control Center
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            Welcome back, {user?.name || 'Admin'}
                        </h1>
                        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
                            Manage sections, case studies, service pages, media assets, client reviews, and SEO directly in your Neon PostgreSQL database.
                        </p>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap gap-3 text-xs">
                        <div className="px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center gap-3">
                            <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                            <div>
                                <p className="font-semibold text-white">Neon PostgreSQL</p>
                                <p className="text-slate-400">Dev branch connected</p>
                            </div>
                        </div>

                        <div className="px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center gap-3">
                            <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                            <div>
                                <p className="font-semibold text-white">{user?.role || 'EDITOR'}</p>
                                <p className="text-slate-400">Role verified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Actions Bar */}
            <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Quick Actions &amp; Common Tasks
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {quickShortcuts.map((action) => {
                        const Icon = action.icon;
                        return (
                            <Link
                                key={action.label}
                                href={action.href}
                                className="flex flex-col items-center text-center p-3.5 rounded-xl bg-[#121622] border border-slate-800/80 hover:border-orange-500/40 hover:bg-slate-850 transition-all group"
                            >
                                <div className="p-2.5 rounded-lg bg-slate-800/60 text-slate-300 group-hover:text-orange-400 group-hover:bg-orange-500/10 mb-2 transition-colors">
                                    <Icon className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-semibold text-slate-300 group-hover:text-white leading-tight">
                                    {action.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Database Metrics Grid */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Content Overview &amp; Live Records
                    </h2>
                    <span className="text-xs text-slate-400">Neon DB Synced</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {statCards.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <Link
                                key={stat.title}
                                href={stat.href}
                                className="p-5 rounded-2xl bg-[#121622] border border-slate-800/80 hover:border-slate-700 transition-all hover:translate-y-[-2px] group block shadow-md"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`p-2.5 rounded-xl border bg-gradient-to-br ${stat.color}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-3xl font-black text-white mb-1 tracking-tight">
                                    {stat.count}
                                </div>
                                <h3 className="text-sm font-semibold text-slate-200 group-hover:text-orange-400 transition-colors">
                                    {stat.title}
                                </h3>
                                <p className="text-xs text-slate-400 mt-0.5">{stat.subtitle}</p>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Recent Inquiries Snapshot */}
            <section className="p-6 rounded-2xl bg-[#121622] border border-slate-800">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <Inbox className="w-5 h-5 text-purple-400" />
                        <div>
                            <h3 className="text-base font-bold text-white">Recent Inquiries &amp; Leads</h3>
                            <p className="text-xs text-slate-400">Latest website submissions</p>
                        </div>
                    </div>
                    <Link
                        href="/admin/inquiries"
                        className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                    >
                        <span>View All ({inquiriesCount})</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {recentSubmissions.length === 0 ? (
                    <div className="text-center py-8 text-slate-400 text-sm">
                        <p>No contact or lead submissions recorded yet.</p>
                        <p className="text-xs text-slate-400 mt-1">
                            Website contact forms and PPC lander submissions will appear here securely.
                        </p>
                    </div>
                ) : (
                    <div className="divide-y divide-slate-800/60">
                        {recentSubmissions.map((sub) => (
                            <div key={sub.id} className="py-3 flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold text-white">{sub.name}</p>
                                    <p className="text-xs text-slate-400">{sub.email} • {sub.enquiryType || 'General'}</p>
                                </div>
                                <div className="text-right">
                                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        {sub.status}
                                    </span>
                                    <p className="text-[10px] text-slate-400 mt-1">
                                        {new Date(sub.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
