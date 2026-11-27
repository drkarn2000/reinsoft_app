'use client';

import React, { useState } from 'react';
import {
    Settings,
    Save,
    Building,
    Phone,
    Mail,
    MessageCircle,
    Globe,
    BarChart,
    Shield,
    CheckCircle2,
} from 'lucide-react';
import { useToast } from '@/app/admin/_components/toast-context';

export default function SettingsManagerClient({ initialSettings }) {
    const { showToast } = useToast();

    const [formData, setFormData] = useState({
        companyName: initialSettings?.companyName || 'Reinsoft IT Solutions',
        tagline: initialSettings?.tagline || '',
        contactEmail: initialSettings?.contactEmail || 'info@reinsoft.tech',
        contactPhone: initialSettings?.contactPhone || '+91 89683 69582',
        whatsappNumber: initialSettings?.whatsappNumber || '918968369582',
        whatsappMessage: initialSettings?.whatsappMessage || '',
        address: initialSettings?.address || '',
        gtmId: initialSettings?.gtmId || '',
        gaId: initialSettings?.gaId || '',
        googleVerification: initialSettings?.googleVerification || '',
        defaultSeoTitle: initialSettings?.defaultSeoTitle || '',
        defaultSeoDesc: initialSettings?.defaultSeoDesc || '',
        defaultSeoKeywords: initialSettings?.defaultSeoKeywords || '',
        canonicalBaseUrl: initialSettings?.canonicalBaseUrl || 'https://reinsoft.tech',
    });
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const res = await fetch('/api/admin/settings', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to update settings');

            showToast('Global Site Settings and SEO saved to Neon DB!', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <Settings className="w-6 h-6 text-slate-300" />
                        Global Site Settings &amp; SEO
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Manage corporate contact channels, WhatsApp integration, GTM/GA identifiers, and default SEO tags.
                    </p>
                </div>

                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 disabled:opacity-50 transition-all self-start sm:self-center"
                >
                    <Save className="w-4 h-4" />
                    <span>{isSaving ? 'Saving Changes...' : 'Save Settings'}</span>
                </button>
            </div>

            <form onSubmit={handleSave} className="space-y-6 text-xs">
                {/* 1. Corporate Identity & Contact Channels */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#121622] border border-slate-800 space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                        <Building className="w-4 h-4 text-orange-400" />
                        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                            Corporate Identity &amp; Contact Details
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">Company Name</label>
                            <input
                                type="text"
                                value={formData.companyName}
                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">Company Tagline</label>
                            <input
                                type="text"
                                value={formData.tagline}
                                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">Contact Email</label>
                            <input
                                type="email"
                                value={formData.contactEmail}
                                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">Contact Phone Number</label>
                            <input
                                type="text"
                                value={formData.contactPhone}
                                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">Address / Operational Regions</label>
                            <input
                                type="text"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                            />
                        </div>
                    </div>
                </div>

                {/* 2. WhatsApp Integration */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#121622] border border-slate-800 space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                            WhatsApp Quick Chat Integration
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">
                                WhatsApp Number (International format without +)
                            </label>
                            <input
                                type="text"
                                value={formData.whatsappNumber}
                                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-emerald-500/50"
                                placeholder="918968369582"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">Default Message Template</label>
                            <input
                                type="text"
                                value={formData.whatsappMessage}
                                onChange={(e) => setFormData({ ...formData, whatsappMessage: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500/50"
                            />
                        </div>
                    </div>
                </div>

                {/* 3. Analytics & Webmaster Verification */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#121622] border border-slate-800 space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                        <BarChart className="w-4 h-4 text-blue-400" />
                        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                            Analytics &amp; Verification Keys
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">Google Tag Manager (GTM) ID</label>
                            <input
                                type="text"
                                value={formData.gtmId}
                                onChange={(e) => setFormData({ ...formData, gtmId: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-blue-500/50"
                                placeholder="GTM-XXXXXXX"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">Google Analytics (GA4) ID</label>
                            <input
                                type="text"
                                value={formData.gaId}
                                onChange={(e) => setFormData({ ...formData, gaId: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-blue-500/50"
                                placeholder="G-XXXXXXXXXX"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">Google Site Verification Token</label>
                            <input
                                type="text"
                                value={formData.googleVerification}
                                onChange={(e) => setFormData({ ...formData, googleVerification: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-blue-500/50"
                            />
                        </div>
                    </div>
                </div>

                {/* 4. Global Default SEO */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#121622] border border-slate-800 space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                        <Globe className="w-4 h-4 text-cyan-400" />
                        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                            Default SEO Fallback Metadata
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">Canonical Base URL</label>
                            <input
                                type="text"
                                value={formData.canonicalBaseUrl}
                                onChange={(e) => setFormData({ ...formData, canonicalBaseUrl: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-cyan-500/50"
                                placeholder="https://reinsoft.tech"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-1 font-semibold">Default SEO Title</label>
                            <input
                                type="text"
                                value={formData.defaultSeoTitle}
                                onChange={(e) => setFormData({ ...formData, defaultSeoTitle: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-slate-300 mb-1 font-semibold">Default Meta Description</label>
                        <textarea
                            rows={3}
                            value={formData.defaultSeoDesc}
                            onChange={(e) => setFormData({ ...formData, defaultSeoDesc: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50"
                        />
                    </div>

                    <div>
                        <label className="block text-slate-300 mb-1 font-semibold">Default Meta Keywords</label>
                        <input
                            type="text"
                            value={formData.defaultSeoKeywords}
                            onChange={(e) => setFormData({ ...formData, defaultSeoKeywords: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50"
                        />
                    </div>
                </div>

                <div className="flex justify-end pt-2">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 disabled:opacity-50 transition-all"
                    >
                        <Save className="w-4 h-4" />
                        <span>{isSaving ? 'Saving...' : 'Save Settings to Database'}</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
