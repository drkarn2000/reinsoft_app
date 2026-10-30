'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
    Building2,
    Plus,
    Search,
    Edit3,
    Trash2,
    Eye,
    EyeOff,
    Save,
    X,
    MoveUp,
    MoveDown,
} from 'lucide-react';
import { useToast } from '@/app/admin/_components/toast-context';

export default function BrandLogosManagerClient({ initialLogos }) {
    const { showToast } = useToast();

    const [logos, setLogos] = useState(initialLogos || []);
    const [selectedRow, setSelectedRow] = useState(0); // 0 = all, 1 = row 1, 2 = row 2
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingLogo, setEditingLogo] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        logoUrl: '/assets/brand-logos/logo1.png',
        rowNumber: 1,
        sortOrder: 1,
        customClass: '',
        bgClass: '',
        isEnabled: true,
    });
    const [isSaving, setIsSaving] = useState(false);

    const filteredLogos = logos.filter((logo) => {
        if (selectedRow !== 0 && logo.rowNumber !== selectedRow) return false;
        return true;
    });

    const handleOpenNew = () => {
        setEditingLogo(null);
        setFormData({
            name: '',
            logoUrl: '',
            rowNumber: selectedRow === 2 ? 2 : 1,
            sortOrder: logos.length + 1,
            customClass: '',
            bgClass: '',
            isEnabled: true,
        });
        setIsModalOpen(true);
    };

    const handleOpenEdit = (logo) => {
        setEditingLogo(logo);
        setFormData({
            name: logo.name || '',
            logoUrl: logo.logoUrl || '',
            rowNumber: logo.rowNumber || 1,
            sortOrder: logo.sortOrder || 1,
            customClass: logo.customClass || '',
            bgClass: logo.bgClass || '',
            isEnabled: logo.isEnabled !== undefined ? logo.isEnabled : true,
        });
        setIsModalOpen(true);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const url = editingLogo
                ? `/api/admin/brand-logos/${editingLogo.id}`
                : '/api/admin/brand-logos';
            const method = editingLogo ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save brand logo');

            if (editingLogo) {
                setLogos((prev) =>
                    prev.map((l) => (l.id === data.logo.id ? data.logo : l))
                );
                showToast(`Logo "${data.logo.name}" updated!`, 'success');
            } else {
                setLogos((prev) => [...prev, data.logo]);
                showToast(`Logo "${data.logo.name}" added!`, 'success');
            }

            setIsModalOpen(false);
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const handleToggleEnabled = async (logo) => {
        try {
            const newStatus = !logo.isEnabled;
            const res = await fetch(`/api/admin/brand-logos/${logo.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isEnabled: newStatus }),
            });
            if (!res.ok) throw new Error('Failed to toggle status');

            setLogos((prev) =>
                prev.map((l) => (l.id === logo.id ? { ...l, isEnabled: newStatus } : l))
            );
            showToast(`Logo ${newStatus ? 'enabled' : 'disabled'}`, 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    const handleDelete = async (id, name) => {
        if (!confirm(`Delete logo "${name}"?`)) return;

        try {
            const res = await fetch(`/api/admin/brand-logos/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete brand logo');

            setLogos((prev) => prev.filter((l) => l.id !== id));
            showToast('Logo deleted successfully', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <Building2 className="w-6 h-6 text-purple-400" />
                        Brand Logos &amp; Marquee Ticker
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Manage client partner logos displayed in the homepage animated marquee sliders.
                    </p>
                </div>

                <button
                    onClick={handleOpenNew}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-md shadow-purple-500/20 transition-all self-start sm:self-center"
                >
                    <Plus className="w-4 h-4" />
                    <span>Add Brand Logo</span>
                </button>
            </div>

            {/* Row filter */}
            <div className="flex items-center gap-2 text-xs font-semibold">
                <button
                    onClick={() => setSelectedRow(0)}
                    className={`px-3 py-1.5 rounded-xl border transition-all ${
                        selectedRow === 0
                            ? 'bg-purple-500/20 text-purple-400 border-purple-500/40'
                            : 'bg-[#121622] text-slate-400 border-slate-800 hover:text-white'
                    }`}
                >
                    All Logos ({logos.length})
                </button>
                <button
                    onClick={() => setSelectedRow(1)}
                    className={`px-3 py-1.5 rounded-xl border transition-all ${
                        selectedRow === 1
                            ? 'bg-purple-500/20 text-purple-400 border-purple-500/40'
                            : 'bg-[#121622] text-slate-400 border-slate-800 hover:text-white'
                    }`}
                >
                    Marquee Row 1 ({logos.filter((l) => l.rowNumber === 1).length})
                </button>
                <button
                    onClick={() => setSelectedRow(2)}
                    className={`px-3 py-1.5 rounded-xl border transition-all ${
                        selectedRow === 2
                            ? 'bg-purple-500/20 text-purple-400 border-purple-500/40'
                            : 'bg-[#121622] text-slate-400 border-slate-800 hover:text-white'
                    }`}
                >
                    Marquee Row 2 ({logos.filter((l) => l.rowNumber === 2).length})
                </button>
            </div>

            {/* Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {filteredLogos.map((logo) => (
                    <div
                        key={logo.id}
                        className={`p-3 rounded-2xl bg-[#121622] border transition-all flex flex-col justify-between items-center text-center gap-2 group ${
                            logo.isEnabled
                                ? 'border-slate-800 hover:border-slate-700'
                                : 'border-slate-800/40 opacity-50'
                        }`}
                    >
                        {/* Logo Preview Container */}
                        <div className={`w-full h-20 rounded-xl flex items-center justify-center p-3 relative ${logo.bgClass || 'bg-slate-900/60'}`}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={logo.logoUrl}
                                    alt={logo.name}
                                    fill
                                    className={`object-contain ${logo.customClass || ''}`}
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <p className="text-xs font-bold text-white truncate">{logo.name}</p>
                            <span className="text-[10px] text-slate-500">
                                Row {logo.rowNumber} • Order {logo.sortOrder}
                            </span>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1 pt-1 border-t border-slate-800/60 w-full justify-center">
                            <button
                                onClick={() => handleToggleEnabled(logo)}
                                className={`p-1 rounded text-slate-400 hover:text-white ${logo.isEnabled ? 'text-emerald-400' : 'text-slate-600'}`}
                                title={logo.isEnabled ? 'Disable' : 'Enable'}
                            >
                                {logo.isEnabled ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                            </button>
                            <button
                                onClick={() => handleOpenEdit(logo)}
                                className="p-1 rounded text-slate-400 hover:text-white"
                                title="Edit"
                            >
                                <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                                onClick={() => handleDelete(logo.id, logo.name)}
                                className="p-1 rounded text-slate-400 hover:text-red-400"
                                title="Delete"
                            >
                                <Trash2 className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-md rounded-2xl bg-[#121622] border border-slate-800 p-6 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-purple-400" />
                                {editingLogo ? 'Edit Brand Logo' : 'Add Brand Logo'}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="space-y-4 text-xs">
                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Brand / Client Name *</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500/50"
                                    placeholder="e.g. Acme Health"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Logo Image Path *</label>
                                <input
                                    type="text"
                                    value={formData.logoUrl}
                                    onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-purple-500/50"
                                    placeholder="/assets/brand-logos/logo1.png"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Marquee Row</label>
                                    <select
                                        value={formData.rowNumber}
                                        onChange={(e) => setFormData({ ...formData, rowNumber: Number(e.target.value) })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500/50"
                                    >
                                        <option value={1}>Row 1 (Top Slider)</option>
                                        <option value={2}>Row 2 (Bottom Slider)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Sort Order</label>
                                    <input
                                        type="number"
                                        value={formData.sortOrder}
                                        onChange={(e) => setFormData({ ...formData, sortOrder: Number(e.target.value) })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500/50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Custom CSS Class (optional)</label>
                                <input
                                    type="text"
                                    value={formData.customClass}
                                    onChange={(e) => setFormData({ ...formData, customClass: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-purple-500/50"
                                    placeholder="e.g. brightness-125"
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="px-5 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-md shadow-purple-500/20 disabled:opacity-50"
                                >
                                    {isSaving ? 'Saving...' : 'Save Logo'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
