'use client';

import React, { useState } from 'react';
import {
    Compass,
    Plus,
    Edit3,
    Trash2,
    Eye,
    EyeOff,
    ExternalLink,
    Save,
    X,
    FolderTree,
} from 'lucide-react';
import { useToast } from '@/app/admin/_components/toast-context';

const MENU_LOCATIONS = [
    { id: 'NAVBAR_MAIN', label: 'Main Header Navigation' },
    { id: 'NAVBAR_SERVICES_DROPDOWN', label: 'Services Dropdown Mega-Menu' },
    { id: 'FOOTER_QUICK_LINKS', label: 'Footer Quick Links' },
    { id: 'FOOTER_EXPLORE_LINKS', label: 'Footer Explore / Services' },
];

export default function NavigationManagerClient({ initialItems }) {
    const { showToast } = useToast();

    const [items, setItems] = useState(initialItems || []);
    const [selectedLocation, setSelectedLocation] = useState('NAVBAR_MAIN');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({
        location: 'NAVBAR_MAIN',
        label: '',
        href: '',
        iconName: '',
        description: '',
        sortOrder: 1,
        isEnabled: true,
        openInNewTab: false,
    });
    const [isSaving, setIsSaving] = useState(false);

    const filteredItems = items.filter((i) => i.location === selectedLocation);

    const handleOpenNew = () => {
        setEditingItem(null);
        setFormData({
            location: selectedLocation,
            label: '',
            href: '/',
            iconName: '',
            description: '',
            sortOrder: filteredItems.length + 1,
            isEnabled: true,
            openInNewTab: false,
        });
        setIsModalOpen(true);
    };

    const handleOpenEdit = (item) => {
        setEditingItem(item);
        setFormData({
            location: item.location || 'NAVBAR_MAIN',
            label: item.label || '',
            href: item.href || '',
            iconName: item.iconName || '',
            description: item.description || '',
            sortOrder: item.sortOrder || 1,
            isEnabled: item.isEnabled !== undefined ? item.isEnabled : true,
            openInNewTab: Boolean(item.openInNewTab),
        });
        setIsModalOpen(true);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const url = editingItem
                ? `/api/admin/navigation/${editingItem.id}`
                : '/api/admin/navigation';
            const method = editingItem ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save navigation item');

            if (editingItem) {
                setItems((prev) =>
                    prev.map((i) => (i.id === data.item.id ? data.item : i))
                );
                showToast(`Menu item "${data.item.label}" updated!`, 'success');
            } else {
                setItems((prev) => [...prev, data.item]);
                showToast(`Menu item "${data.item.label}" created!`, 'success');
            }

            setIsModalOpen(false);
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const handleToggleEnabled = async (item) => {
        try {
            const newStatus = !item.isEnabled;
            const res = await fetch(`/api/admin/navigation/${item.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isEnabled: newStatus }),
            });
            if (!res.ok) throw new Error('Failed to toggle status');

            setItems((prev) =>
                prev.map((i) => (i.id === item.id ? { ...i, isEnabled: newStatus } : i))
            );
            showToast(`Menu item ${newStatus ? 'enabled' : 'disabled'}`, 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    const handleDelete = async (id, label) => {
        if (!confirm(`Delete menu item "${label}"?`)) return;

        try {
            const res = await fetch(`/api/admin/navigation/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete navigation item');

            setItems((prev) => prev.filter((i) => i.id !== id));
            showToast('Menu item deleted successfully', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <Compass className="w-6 h-6 text-cyan-400" />
                        Navigation &amp; Menus
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Manage main header navigation links, services dropdown items, and footer navigation blocks.
                    </p>
                </div>

                <button
                    onClick={handleOpenNew}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 shadow-md shadow-cyan-500/20 transition-all self-start sm:self-center"
                >
                    <Plus className="w-4 h-4" />
                    <span>Add Menu Item</span>
                </button>
            </div>

            {/* Menu location tabs */}
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {MENU_LOCATIONS.map((loc) => {
                    const isActive = selectedLocation === loc.id;
                    const count = items.filter((i) => i.location === loc.id).length;
                    return (
                        <button
                            key={loc.id}
                            onClick={() => setSelectedLocation(loc.id)}
                            className={`px-3.5 py-2 rounded-xl border transition-all flex items-center gap-2 ${
                                isActive
                                    ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40 shadow-sm'
                                    : 'bg-[#121622] text-slate-400 border-slate-800 hover:text-white'
                            }`}
                        >
                            <span>{loc.label}</span>
                            <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 text-[10px]">
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Menu Items Table / List */}
            <div className="p-5 rounded-2xl bg-[#121622] border border-slate-800 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span>Menu Link Hierarchy</span>
                    <span>Order &amp; Controls</span>
                </div>

                {filteredItems.length === 0 ? (
                    <div className="text-center py-10 text-slate-500 text-xs">
                        <FolderTree className="w-8 h-8 mx-auto mb-2 opacity-40" />
                        <p>No navigation items in this menu location.</p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        {filteredItems.map((item, idx) => (
                            <div
                                key={item.id}
                                className={`p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                                    item.isEnabled
                                        ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                                        : 'bg-slate-900/30 border-slate-800/40 opacity-50'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400 shrink-0">
                                        {item.sortOrder}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-xs font-bold text-white">{item.label}</p>
                                            <span className="text-[10px] text-slate-500 font-mono">
                                                {item.href}
                                            </span>
                                            {item.openInNewTab && (
                                                <span className="text-[10px] px-1 rounded bg-slate-800 text-slate-400">
                                                    _blank
                                                </span>
                                            )}
                                        </div>
                                        {item.description && (
                                            <p className="text-[11px] text-slate-400 mt-0.5">{item.description}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 self-end sm:self-center">
                                    <button
                                        onClick={() => handleToggleEnabled(item)}
                                        className={`p-1.5 rounded-lg border text-xs ${
                                            item.isEnabled
                                                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                                                : 'bg-slate-800 border-slate-700 text-slate-500'
                                        }`}
                                        title={item.isEnabled ? 'Disable' : 'Enable'}
                                    >
                                        {item.isEnabled ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                                    </button>
                                    <button
                                        onClick={() => handleOpenEdit(item)}
                                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                                        title="Edit"
                                    >
                                        <Edit3 className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id, item.label)}
                                        className="p-1.5 rounded-lg hover:bg-red-500/20 text-slate-500 hover:text-red-400"
                                        title="Delete"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-md rounded-2xl bg-[#121622] border border-slate-800 p-6 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                <Compass className="w-4 h-4 text-cyan-400" />
                                {editingItem ? 'Edit Menu Item' : 'Add Menu Item'}
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
                                <label className="block text-slate-300 mb-1 font-semibold">Menu Location</label>
                                <select
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50"
                                >
                                    {MENU_LOCATIONS.map((loc) => (
                                        <option key={loc.id} value={loc.id}>
                                            {loc.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Label *</label>
                                    <input
                                        type="text"
                                        value={formData.label}
                                        onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50"
                                        placeholder="e.g. Services"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">URL Path *</label>
                                    <input
                                        type="text"
                                        value={formData.href}
                                        onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-cyan-500/50"
                                        placeholder="/services"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Sub-Description (Optional)</label>
                                <input
                                    type="text"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50"
                                    placeholder="Helper caption for mega-menu dropdowns"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Lucide Icon Name</label>
                                    <input
                                        type="text"
                                        value={formData.iconName}
                                        onChange={(e) => setFormData({ ...formData, iconName: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50"
                                        placeholder="CodeIcon, SmartphoneIcon"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Sort Order</label>
                                    <input
                                        type="number"
                                        value={formData.sortOrder}
                                        onChange={(e) => setFormData({ ...formData, sortOrder: Number(e.target.value) })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="newtab-check"
                                    checked={formData.openInNewTab}
                                    onChange={(e) => setFormData({ ...formData, openInNewTab: e.target.checked })}
                                    className="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-700"
                                />
                                <label htmlFor="newtab-check" className="text-white cursor-pointer font-medium">
                                    Open link in new browser tab (_blank)
                                </label>
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
                                    className="px-5 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 shadow-md shadow-cyan-500/20 disabled:opacity-50"
                                >
                                    {isSaving ? 'Saving...' : 'Save Item'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
