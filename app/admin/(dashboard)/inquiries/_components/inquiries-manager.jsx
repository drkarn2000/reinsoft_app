'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
    Inbox,
    Mail,
    Phone,
    Building,
    Calendar,
    Search,
    Filter,
    Save,
    Trash2,
    Plus,
    X,
    MessageSquare,
    DollarSign,
    Copy,
    Check,
    Download,
    MessageCircle,
    User,
    Tag,
    Clock,
    ChevronRight,
    ChevronDown,
    ArrowUpRight,
    ExternalLink,
    MoreHorizontal,
} from 'lucide-react';
import { useToast } from '@/app/admin/_components/toast-context';

const STATUS_CONFIG = {
    NEW: {
        label: 'New Lead',
        badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/25',
        dot: 'bg-emerald-400',
    },
    CONTACTED: {
        label: 'Contacted',
        badge: 'bg-blue-500/15 text-blue-400 border-blue-500/30 hover:bg-blue-500/25',
        dot: 'bg-blue-400',
    },
    QUALIFIED: {
        label: 'Qualified',
        badge: 'bg-purple-500/15 text-purple-400 border-purple-500/30 hover:bg-purple-500/25',
        dot: 'bg-purple-400',
    },
    CLOSED: {
        label: 'Closed / Won',
        badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30 hover:bg-amber-500/25',
        dot: 'bg-amber-400',
    },
    ARCHIVED: {
        label: 'Archived',
        badge: 'bg-slate-800 text-slate-400 border-slate-700/60 hover:bg-slate-750',
        dot: 'bg-slate-500',
    },
};

function formatDate(dateString) {
    if (!dateString) return { formatted: 'Recent', relative: 'Just now' };
    const date = new Date(dateString);
    const formatted = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    let relative = 'Just now';
    if (diffInSeconds >= 60 && diffInSeconds < 3600) {
        relative = `${Math.floor(diffInSeconds / 60)}m ago`;
    } else if (diffInSeconds >= 3600 && diffInSeconds < 86400) {
        relative = `${Math.floor(diffInSeconds / 3600)}h ago`;
    } else if (diffInSeconds >= 86400) {
        const days = Math.floor(diffInSeconds / 86400);
        relative = days === 1 ? 'Yesterday' : `${days}d ago`;
    }

    return { formatted, relative };
}

function getCleanPhone(phone) {
    if (!phone) return null;
    const clean = phone.replace(/[^\d]/g, '');
    return clean.length >= 10 ? clean : null;
}

export default function InquiriesManagerClient({ initialInquiries }) {
    const { showToast } = useToast();

    const [inquiries, setInquiries] = useState(initialInquiries || []);
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('ALL');
    const [actionMenu, setActionMenu] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleClose = () => setActionMenu(null);
        if (actionMenu) {
            window.addEventListener('scroll', handleClose, true);
            window.addEventListener('resize', handleClose);
            return () => {
                window.removeEventListener('scroll', handleClose, true);
                window.removeEventListener('resize', handleClose);
            };
        }
    }, [actionMenu]);

    const handleToggleActionMenu = (e, inq) => {
        e.stopPropagation();
        if (actionMenu?.inq.id === inq.id) {
            setActionMenu(null);
            return;
        }
        const rect = e.currentTarget.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const openUpward = spaceBelow < 230;

        setActionMenu({
            inq,
            top: rect.bottom + 6,
            bottom: window.innerHeight - rect.top + 6,
            right: window.innerWidth - rect.right,
            openUpward,
        });
    };

    // Drawer state
    const [adminNotes, setAdminNotes] = useState('');
    const [isSavingNotes, setIsSavingNotes] = useState(false);
    const [copiedField, setCopiedField] = useState(null);
    const [isTestModalOpen, setIsTestModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    // Test form
    const [testForm, setTestForm] = useState({
        name: 'Michael Vance',
        email: 'michael.vance@techcorp.io',
        phone: '+1 (555) 438-9120',
        companyName: 'TechCorp Global',
        enquiryType: 'Business Automation & AI',
        budget: '$15,000 - $30,000',
        message: 'Looking for a dedicated engineering team to build custom AI workflows into our existing CRM.',
        type: 'LEAD_FORM',
    });

    // Counts for tabs
    const counts = useMemo(() => {
        return {
            ALL: inquiries.length,
            NEW: inquiries.filter((i) => i.status === 'NEW').length,
            CONTACTED: inquiries.filter((i) => i.status === 'CONTACTED').length,
            QUALIFIED: inquiries.filter((i) => i.status === 'QUALIFIED').length,
            CLOSED: inquiries.filter((i) => i.status === 'CLOSED').length,
            ARCHIVED: inquiries.filter((i) => i.status === 'ARCHIVED').length,
        };
    }, [inquiries]);

    // Filtered inquiries
    const filteredInquiries = useMemo(() => {
        return inquiries.filter((inq) => {
            const matchesStatus = statusFilter === 'ALL' || inq.status === statusFilter;
            const q = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !q ||
                inq.name?.toLowerCase().includes(q) ||
                inq.email?.toLowerCase().includes(q) ||
                inq.phone?.toLowerCase().includes(q) ||
                inq.companyName?.toLowerCase().includes(q) ||
                inq.enquiryType?.toLowerCase().includes(q) ||
                inq.budget?.toLowerCase().includes(q) ||
                inq.message?.toLowerCase().includes(q);
            return matchesStatus && matchesSearch;
        });
    }, [inquiries, statusFilter, searchQuery]);

    const handleOpenDetail = (inq) => {
        setSelectedInquiry(inq);
        setAdminNotes(inq.notes || '');
        setActionMenu(null);
    };

    const handleCloseDetail = () => {
        setSelectedInquiry(null);
        setAdminNotes('');
    };

    const handleCopy = (text, fieldName) => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopiedField(fieldName);
        showToast(`Copied ${fieldName}!`, 'info');
        setTimeout(() => setCopiedField(null), 2000);
    };

    const handleUpdateStatus = async (inquiryId, newStatus) => {
        try {
            const res = await fetch(`/api/admin/inquiries/${inquiryId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to update status');

            setInquiries((prev) =>
                prev.map((i) => (i.id === inquiryId ? { ...i, status: newStatus } : i))
            );
            if (selectedInquiry?.id === inquiryId) {
                setSelectedInquiry((prev) => ({ ...prev, status: newStatus }));
            }
            showToast(`Status updated to ${STATUS_CONFIG[newStatus]?.label || newStatus}`, 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    const handleSaveNotes = async () => {
        if (!selectedInquiry) return;
        setIsSavingNotes(true);
        try {
            const res = await fetch(`/api/admin/inquiries/${selectedInquiry.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ notes: adminNotes }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save notes');

            setInquiries((prev) =>
                prev.map((i) => (i.id === selectedInquiry.id ? { ...i, notes: adminNotes } : i))
            );
            showToast('Follow-up notes saved', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsSavingNotes(false);
        }
    };

    const handleDelete = async (inq) => {
        if (!window.confirm(`Permanently delete inquiry from "${inq.name}"?`)) return;
        setIsDeleting(true);
        try {
            const res = await fetch(`/api/admin/inquiries/${inq.id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to delete');

            setInquiries((prev) => prev.filter((i) => i.id !== inq.id));
            if (selectedInquiry?.id === inq.id) {
                handleCloseDetail();
            }
            setActionMenu(null);
            showToast('Inquiry deleted successfully', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsDeleting(false);
        }
    };

    const handleCreateTestInquiry = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/admin/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(testForm),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to create test lead');

            setInquiries((prev) => [data.inquiry, ...prev]);
            setIsTestModalOpen(false);
            handleOpenDetail(data.inquiry);
            showToast('New test inquiry added!', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    const handleExportCSV = () => {
        if (filteredInquiries.length === 0) {
            showToast('No inquiries to export', 'error');
            return;
        }

        const headers = ['Date', 'Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Status', 'Message', 'Notes'];
        const rows = filteredInquiries.map((inq) => [
            new Date(inq.createdAt).toISOString(),
            `"${(inq.name || '').replace(/"/g, '""')}"`,
            `"${(inq.email || '').replace(/"/g, '""')}"`,
            `"${(inq.phone || '').replace(/"/g, '""')}"`,
            `"${(inq.companyName || '').replace(/"/g, '""')}"`,
            `"${(inq.enquiryType || '').replace(/"/g, '""')}"`,
            `"${(inq.budget || '').replace(/"/g, '""')}"`,
            inq.status,
            `"${(inq.message || '').replace(/"/g, '""')}"`,
            `"${(inq.notes || '').replace(/"/g, '""')}"`,
        ]);

        const csv = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
        const link = document.createElement('a');
        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', `reinsoft_leads_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('Exported to CSV', 'success');
    };

    return (
        <div className="space-y-5 max-w-7xl mx-auto">
            {/* Header: Clean & Direct */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
                <div>
                    <h1 className="text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <Inbox className="w-6 h-6 text-purple-400" />
                        Inquiries &amp; Leads
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        Review submissions from website contact forms, quotation requests, and PPC landers.
                    </p>
                </div>

                <div className="flex items-center gap-2.5 self-start sm:self-center">
                    <button
                        onClick={handleExportCSV}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-white transition-all shadow-sm"
                        title="Download CSV report"
                    >
                        <Download className="w-3.5 h-3.5" />
                        <span>Export CSV</span>
                    </button>

                    <button
                        onClick={() => setIsTestModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/30 hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all"
                    >
                        <Plus className="w-4 h-4" />
                        <span>+ Test Lead</span>
                    </button>
                </div>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-2xl bg-[#121622] border border-slate-800 shadow-sm">
                {/* Status Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
                    {[
                        { id: 'ALL', label: 'All Leads', count: counts.ALL },
                        { id: 'NEW', label: 'New', count: counts.NEW, dot: 'bg-emerald-400' },
                        { id: 'CONTACTED', label: 'Contacted', count: counts.CONTACTED, dot: 'bg-blue-400' },
                        { id: 'QUALIFIED', label: 'Qualified', count: counts.QUALIFIED, dot: 'bg-purple-400' },
                        { id: 'CLOSED', label: 'Closed', count: counts.CLOSED, dot: 'bg-amber-400' },
                    ].map((tab) => {
                        const active = statusFilter === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setStatusFilter(tab.id)}
                                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all whitespace-nowrap ${
                                    active
                                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                                        : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
                                }`}
                            >
                                {tab.dot && <span className={`w-1.5 h-1.5 rounded-full ${tab.dot}`} />}
                                <span>{tab.label}</span>
                                <span
                                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                                        active ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                                    }`}
                                >
                                    {tab.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Search Input */}
                <div className="relative w-full sm:w-72 text-xs">
                    <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search leads by name, email, company..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-7 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white p-0.5"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    )}
                </div>
            </div>

            {/* Clean Data Table - ZERO VERTICAL SCROLL, ONLY HORIZONTAL SCROLL WHEN NEEDED */}
            <div className="rounded-2xl bg-[#121622] border border-slate-800/90 shadow-xl overflow-hidden">
                {filteredInquiries.length === 0 ? (
                    <div className="p-16 text-center text-slate-500 space-y-3">
                        <Inbox className="w-10 h-10 mx-auto text-slate-600 opacity-60" />
                        <div>
                            <p className="font-bold text-white text-sm">No inquiries found</p>
                            <p className="text-xs text-slate-500 mt-1">There are no leads matching your search criteria.</p>
                        </div>
                        <button
                            onClick={() => setIsTestModalOpen(true)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition-colors"
                        >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add Sample Lead</span>
                        </button>
                    </div>
                ) : (
                    <div
                        className="admin-table-scroll pb-2"
                        style={{ overflowX: 'auto', overflowY: 'hidden' }}
                    >
                        <table className="w-full text-left border-collapse min-w-[950px]">
                            <thead>
                                <tr className="border-b border-slate-800/90 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-[#0c101a]">
                                    <th className="py-4 px-4 w-[24%] min-w-[190px] font-semibold">Client</th>
                                    <th className="py-4 px-4 w-[24%] min-w-[200px] font-semibold">Contact</th>
                                    <th className="py-4 px-4 w-[20%] min-w-[180px] font-semibold">Service</th>
                                    <th className="py-4 px-4 w-[15%] min-w-[140px] font-semibold">Budget</th>
                                    <th className="py-4 px-4 w-[17%] min-w-[150px] font-semibold">Date Received</th>
                                    <th className="py-4 px-4 w-[10%] min-w-[100px] text-right font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60">
                                {filteredInquiries.map((inq) => {
                                    const cleanPhone = getCleanPhone(inq.phone);
                                    const dateInfo = formatDate(inq.createdAt);

                                    return (
                                        <tr
                                            key={inq.id}
                                            onClick={() => handleOpenDetail(inq)}
                                            className="group hover:bg-[#161c2d] transition-all duration-200 cursor-pointer"
                                        >
                                            {/* Column 1: Client Name & Company (NO AVATAR BOX) */}
                                            <td className="py-4 px-4 align-middle">
                                                <div className="min-w-0 pr-2">
                                                    <div className="font-bold text-white text-[13px] tracking-tight truncate group-hover:text-purple-300 transition-colors">
                                                        {inq.name}
                                                    </div>
                                                    <div className="text-[11px] text-slate-400 font-medium truncate mt-0.5 flex items-center gap-1.5">
                                                        <Building className="w-3 h-3 text-slate-500 shrink-0" />
                                                        <span className="truncate">{inq.companyName || 'Direct / Individual'}</span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Column 2: Email & Phone */}
                                            <td className="py-4 px-4 align-middle">
                                                <div className="min-w-0 pr-2 space-y-0.5">
                                                    <div className="text-slate-200 text-xs font-medium truncate hover:text-purple-300 transition-colors">
                                                        {inq.email}
                                                    </div>
                                                    <div className="text-[11px] text-slate-400 font-mono truncate flex items-center gap-1.5">
                                                        <Phone className="w-3 h-3 text-slate-500 shrink-0" />
                                                        <span>{inq.phone || 'No phone provided'}</span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Column 3: Service (Dedicated Column) */}
                                            <td className="py-4 px-4 align-middle">
                                                <div className="font-semibold text-slate-200 text-xs truncate">
                                                    {inq.enquiryType || 'General Consultation'}
                                                </div>
                                            </td>

                                            {/* Column 4: Budget (Dedicated Column) */}
                                            <td className="py-4 px-4 align-middle">
                                                {inq.budget ? (
                                                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                                                        <DollarSign className="w-3 h-3 text-emerald-400 shrink-0" />
                                                        <span>{inq.budget}</span>
                                                    </span>
                                                ) : (
                                                    <span className="text-slate-500 text-[11px] italic">
                                                        Not specified
                                                    </span>
                                                )}
                                            </td>

                                            {/* Column 5: Date Received */}
                                            <td className="py-4 px-4 align-middle whitespace-nowrap">
                                                <div className="space-y-0.5">
                                                    <div className="text-slate-300 text-xs font-medium">
                                                        {dateInfo.formatted}
                                                    </div>
                                                    <div className="text-[10px] text-slate-500 flex items-center gap-1">
                                                        <Clock className="w-2.5 h-2.5 text-slate-500" />
                                                        <span>{dateInfo.relative}</span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Column 6: Actions Trigger Button */}
                                            <td className="py-4 px-4 align-middle text-right" onClick={(e) => e.stopPropagation()}>
                                                <button
                                                    type="button"
                                                    onClick={(e) => handleToggleActionMenu(e, inq)}
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border shadow-xs ${
                                                        actionMenu?.inq.id === inq.id
                                                            ? 'bg-purple-600 text-white border-purple-500 shadow-purple-600/30'
                                                            : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700/80 hover:border-slate-600'
                                                    }`}
                                                >
                                                    <span>Actions</span>
                                                    <ChevronDown className="w-3 h-3 opacity-70" />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Slide-over Detail Drawer */}
            {selectedInquiry && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
                    <div
                        className="fixed inset-0"
                        onClick={handleCloseDetail}
                    />

                    <div className="relative w-full max-w-xl h-full bg-[#121622] border-l border-slate-800 shadow-2xl flex flex-col z-10 overflow-y-auto">
                        {/* Drawer Header */}
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 sticky top-0 z-10 backdrop-blur-md">
                            <div>
                                <h2 className="text-lg font-black text-white tracking-tight">
                                    {selectedInquiry.name}
                                </h2>
                                <p className="text-xs text-slate-400 font-medium mt-0.5 flex items-center gap-1.5">
                                    <Building className="w-3 h-3 text-slate-500" />
                                    <span>{selectedInquiry.companyName || 'Individual Client'}</span>
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleDelete(selectedInquiry)}
                                    className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors"
                                    title="Delete inquiry"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handleCloseDetail}
                                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
                                    title="Close panel"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Drawer Body */}
                        <div className="p-6 space-y-6 flex-1 text-xs">
                            {/* Fast Action Buttons */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                {getCleanPhone(selectedInquiry.phone) && (
                                    <a
                                        href={`https://wa.me/${getCleanPhone(selectedInquiry.phone)}?text=${encodeURIComponent(
                                            `Hello ${selectedInquiry.name}, thank you for reaching out to Reinsoft IT Solutions regarding your inquiry on "${selectedInquiry.enquiryType || 'IT Services'}".`
                                        )}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 font-bold transition-all text-xs shadow-xs"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>WhatsApp</span>
                                    </a>
                                )}

                                <a
                                    href={`mailto:${selectedInquiry.email}?subject=${encodeURIComponent(
                                        `Re: ${selectedInquiry.enquiryType || 'Inquiry'} - Reinsoft IT Solutions`
                                    )}`}
                                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white border border-blue-500/30 font-bold transition-all text-xs shadow-xs"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Send Email</span>
                                </a>

                                {selectedInquiry.phone && (
                                    <a
                                        href={`tel:${selectedInquiry.phone}`}
                                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold transition-all text-xs shadow-xs"
                                    >
                                        <Phone className="w-4 h-4 text-purple-400" />
                                        <span>Call Client</span>
                                    </a>
                                )}
                            </div>

                            {/* Status Change Selector inside Drawer */}
                            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                                    Lead Pipeline Status
                                </label>
                                <div className="flex items-center gap-2 flex-wrap">
                                    {['NEW', 'CONTACTED', 'QUALIFIED', 'CLOSED', 'ARCHIVED'].map((stKey) => {
                                        const isCurrent = selectedInquiry.status === stKey;
                                        const cfg = STATUS_CONFIG[stKey];
                                        return (
                                            <button
                                                key={stKey}
                                                type="button"
                                                onClick={() => handleUpdateStatus(selectedInquiry.id, stKey)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                                    isCurrent
                                                        ? 'bg-purple-600 text-white shadow-sm'
                                                        : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60'
                                                }`}
                                            >
                                                {cfg.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Contact Details List */}
                            <div className="space-y-3">
                                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                    Contact Information
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                                        <span className="text-slate-500 text-[10px] uppercase font-bold block">Email</span>
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-white truncate">{selectedInquiry.email}</span>
                                            <button
                                                onClick={() => handleCopy(selectedInquiry.email, 'email')}
                                                className="text-slate-500 hover:text-white p-1"
                                                title="Copy"
                                            >
                                                {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                                        <span className="text-slate-500 text-[10px] uppercase font-bold block">Phone</span>
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-white font-mono truncate">{selectedInquiry.phone || 'Not provided'}</span>
                                            {selectedInquiry.phone && (
                                                <button
                                                    onClick={() => handleCopy(selectedInquiry.phone, 'phone')}
                                                    className="text-slate-500 hover:text-white p-1"
                                                    title="Copy"
                                                >
                                                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                                        <span className="text-slate-500 text-[10px] uppercase font-bold block">Service Area</span>
                                        <span className="font-semibold text-purple-300 block">{selectedInquiry.enquiryType || 'General Consultation'}</span>
                                    </div>

                                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                                        <span className="text-slate-500 text-[10px] uppercase font-bold block">Budget</span>
                                        <span className="font-bold text-emerald-400 block">{selectedInquiry.budget || 'Not specified'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Message Box */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                        <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                                        Client Message
                                    </h3>
                                    <button
                                        onClick={() => handleCopy(selectedInquiry.message, 'message')}
                                        className="text-slate-400 hover:text-white text-[11px] font-medium flex items-center gap-1"
                                    >
                                        {copiedField === 'message' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                                        <span>Copy Text</span>
                                    </button>
                                </div>

                                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 leading-relaxed whitespace-pre-wrap font-normal">
                                    {selectedInquiry.message}
                                </div>
                            </div>

                            {/* Private Follow-up Notes */}
                            <div className="space-y-2 pt-2 border-t border-slate-800">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                        Internal Team Notes
                                    </h3>
                                    <span className="text-[10px] text-slate-500">Only visible in admin panel</span>
                                </div>

                                <textarea
                                    rows={4}
                                    value={adminNotes}
                                    onChange={(e) => setAdminNotes(e.target.value)}
                                    placeholder="Add notes about call summary, agreed deliverables, or follow-up schedule..."
                                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 leading-relaxed font-sans text-xs"
                                />

                                <div className="flex justify-end">
                                    <button
                                        onClick={handleSaveNotes}
                                        disabled={isSavingNotes}
                                        className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors flex items-center gap-1.5 disabled:opacity-50"
                                    >
                                        <Save className="w-3.5 h-3.5" />
                                        <span>{isSavingNotes ? 'Saving...' : 'Save Notes'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Test Submission Modal */}
            {isTestModalOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-md rounded-2xl bg-[#121622] border border-slate-800 p-6 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                <Plus className="w-4 h-4 text-purple-400" />
                                Add Test Lead
                            </h2>
                            <button
                                onClick={() => setIsTestModalOpen(false)}
                                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <form onSubmit={handleCreateTestInquiry} className="space-y-3 text-xs">
                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Client Name *</label>
                                <input
                                    type="text"
                                    value={testForm.name}
                                    onChange={(e) => setTestForm({ ...testForm, name: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Email *</label>
                                    <input
                                        type="email"
                                        value={testForm.email}
                                        onChange={(e) => setTestForm({ ...testForm, email: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Phone</label>
                                    <input
                                        type="text"
                                        value={testForm.phone}
                                        onChange={(e) => setTestForm({ ...testForm, phone: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Company</label>
                                    <input
                                        type="text"
                                        value={testForm.companyName}
                                        onChange={(e) => setTestForm({ ...testForm, companyName: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Service</label>
                                    <input
                                        type="text"
                                        value={testForm.enquiryType}
                                        onChange={(e) => setTestForm({ ...testForm, enquiryType: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Message *</label>
                                <textarea
                                    rows={3}
                                    value={testForm.message}
                                    onChange={(e) => setTestForm({ ...testForm, message: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                                    required
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                                <button
                                    type="button"
                                    onClick={() => setIsTestModalOpen(false)}
                                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-500"
                                >
                                    Save Lead
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Floating Portal Action Menu - ZERO CLIPPING, MOUNTED DIRECTLY TO DOCUMENT.BODY */}
            {mounted && actionMenu && createPortal(
                <div className="fixed inset-0 z-[9999] pointer-events-none">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 pointer-events-auto cursor-default bg-transparent"
                        onClick={() => setActionMenu(null)}
                    />

                    {/* Popover Menu */}
                    <div
                        style={{
                            position: 'fixed',
                            ...(actionMenu.openUpward
                                ? { bottom: `${actionMenu.bottom}px` }
                                : { top: `${actionMenu.top}px` }),
                            right: `${Math.max(16, actionMenu.right)}px`,
                        }}
                        className="pointer-events-auto w-48 rounded-2xl bg-[#151c2e] border border-slate-700/90 shadow-2xl py-1.5 divide-y divide-slate-800 text-xs animate-in fade-in zoom-in-95 duration-150"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="py-1">
                            <button
                                type="button"
                                onClick={() => {
                                    const inq = actionMenu.inq;
                                    setActionMenu(null);
                                    handleOpenDetail(inq);
                                }}
                                className="w-[calc(100%-8px)] mx-1 text-left px-3 py-2 text-slate-200 hover:bg-purple-600 hover:text-white flex items-center gap-2.5 transition-colors font-medium rounded-lg"
                            >
                                <Inbox className="w-3.5 h-3.5 text-purple-400" />
                                <span>View Details</span>
                            </button>

                            {getCleanPhone(actionMenu.inq.phone) && (
                                <a
                                    href={`https://wa.me/${getCleanPhone(actionMenu.inq.phone)}?text=${encodeURIComponent(
                                        `Hello ${actionMenu.inq.name}, this is Reinsoft IT Solutions regarding your inquiry on "${actionMenu.inq.enquiryType || 'IT Services'}".`
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setActionMenu(null)}
                                    className="w-[calc(100%-8px)] mx-1 text-left px-3 py-2 text-emerald-400 hover:bg-emerald-500/20 flex items-center gap-2.5 transition-colors font-medium rounded-lg"
                                >
                                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>WhatsApp</span>
                                </a>
                            )}

                            <a
                                href={`mailto:${actionMenu.inq.email}?subject=${encodeURIComponent(
                                    `Re: ${actionMenu.inq.enquiryType || 'Inquiry'} - Reinsoft IT Solutions`
                                )}`}
                                onClick={() => setActionMenu(null)}
                                className="w-[calc(100%-8px)] mx-1 text-left px-3 py-2 text-blue-400 hover:bg-blue-500/20 flex items-center gap-2.5 transition-colors font-medium rounded-lg"
                            >
                                <Mail className="w-3.5 h-3.5 text-blue-400" />
                                <span>Send Email</span>
                            </a>
                        </div>

                        <div className="py-1">
                            <button
                                type="button"
                                onClick={() => {
                                    const inq = actionMenu.inq;
                                    setActionMenu(null);
                                    handleDelete(inq);
                                }}
                                className="w-[calc(100%-8px)] mx-1 text-left px-3 py-2 text-rose-400 hover:bg-rose-500/20 flex items-center gap-2.5 transition-colors font-medium rounded-lg"
                            >
                                <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                                <span>Delete Lead</span>
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}
