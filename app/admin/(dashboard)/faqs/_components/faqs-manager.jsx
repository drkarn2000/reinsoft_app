'use client';

import React, { useState } from 'react';
import {
    HelpCircle,
    Plus,
    Search,
    Edit3,
    Trash2,
    Eye,
    EyeOff,
    Save,
    X,
} from 'lucide-react';
import { useToast } from '@/app/admin/_components/toast-context';

export default function FaqsManagerClient({ initialFaqs }) {
    const { showToast } = useToast();

    const [faqs, setFaqs] = useState(initialFaqs || []);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingFaq, setEditingFaq] = useState(null);
    const [formData, setFormData] = useState({
        category: 'general',
        question: '',
        answer: '',
        sortOrder: 1,
        isEnabled: true,
    });
    const [isSaving, setIsSaving] = useState(false);

    // Extract unique categories
    const categories = ['ALL', ...Array.from(new Set(faqs.map((f) => f.category)))];

    const filteredFaqs = faqs.filter((faq) => {
        const matchesCategory = selectedCategory === 'ALL' || faq.category === selectedCategory;
        const matchesSearch =
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleOpenNew = () => {
        setEditingFaq(null);
        setFormData({
            category: selectedCategory !== 'ALL' ? selectedCategory : 'general',
            question: '',
            answer: '',
            sortOrder: faqs.length + 1,
            isEnabled: true,
        });
        setIsModalOpen(true);
    };

    const handleOpenEdit = (faq) => {
        setEditingFaq(faq);
        setFormData({
            category: faq.category || 'general',
            question: faq.question || '',
            answer: faq.answer || '',
            sortOrder: faq.sortOrder || 1,
            isEnabled: faq.isEnabled !== undefined ? faq.isEnabled : true,
        });
        setIsModalOpen(true);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const url = editingFaq
                ? `/api/admin/faqs/${editingFaq.id}`
                : '/api/admin/faqs';
            const method = editingFaq ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save FAQ');

            if (editingFaq) {
                setFaqs((prev) =>
                    prev.map((f) => (f.id === data.faq.id ? data.faq : f))
                );
                showToast('FAQ updated successfully!', 'success');
            } else {
                setFaqs((prev) => [...prev, data.faq]);
                showToast('FAQ created successfully!', 'success');
            }

            setIsModalOpen(false);
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const handleToggleEnabled = async (faq) => {
        try {
            const newStatus = !faq.isEnabled;
            const res = await fetch(`/api/admin/faqs/${faq.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isEnabled: newStatus }),
            });
            if (!res.ok) throw new Error('Failed to toggle status');

            setFaqs((prev) =>
                prev.map((f) => (f.id === faq.id ? { ...f, isEnabled: newStatus } : f))
            );
            showToast(`FAQ ${newStatus ? 'enabled' : 'disabled'}`, 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    const handleDelete = async (id, question) => {
        if (!confirm(`Delete FAQ: "${question}"?`)) return;

        try {
            const res = await fetch(`/api/admin/faqs/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete FAQ');

            setFaqs((prev) => prev.filter((f) => f.id !== id));
            showToast('FAQ deleted successfully', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <HelpCircle className="w-6 h-6 text-yellow-400" />
                        Frequently Asked Questions Pool
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Manage categorized FAQs rendered across the Homepage, About, and Service detail pages.
                    </p>
                </div>

                <button
                    onClick={handleOpenNew}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 shadow-md shadow-amber-500/20 transition-all self-start sm:self-center"
                >
                    <Plus className="w-4 h-4" />
                    <span>Add FAQ</span>
                </button>
            </div>

            {/* Filter toolbar */}
            <div className="p-4 rounded-2xl bg-[#121622] border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
                <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search questions or answers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-amber-500/50 capitalize"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat === 'ALL' ? 'All Categories' : cat}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* FAQs List */}
            <div className="space-y-3">
                {filteredFaqs.map((faq) => (
                    <div
                        key={faq.id}
                        className={`p-4 rounded-2xl bg-[#121622] border transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4 ${
                            faq.isEnabled
                                ? 'border-slate-800/80 hover:border-slate-700'
                                : 'border-slate-800/40 opacity-50'
                        }`}
                    >
                        <div className="space-y-1.5 flex-1">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-amber-400">
                                    {faq.category}
                                </span>
                                <span className="text-[10px] text-slate-500">Order: {faq.sortOrder}</span>
                            </div>
                            <h3 className="text-sm font-bold text-white">{faq.question}</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
                        </div>

                        <div className="flex items-center gap-1.5 self-end sm:self-start shrink-0">
                            <button
                                onClick={() => handleToggleEnabled(faq)}
                                className={`p-1.5 rounded-lg border text-xs ${
                                    faq.isEnabled
                                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                                        : 'bg-slate-800 border-slate-700 text-slate-500'
                                }`}
                                title={faq.isEnabled ? 'Disable' : 'Enable'}
                            >
                                {faq.isEnabled ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                            </button>
                            <button
                                onClick={() => handleOpenEdit(faq)}
                                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                                title="Edit"
                            >
                                <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                                onClick={() => handleDelete(faq.id, faq.question)}
                                className="p-1.5 rounded-lg hover:bg-red-500/20 text-slate-500 hover:text-red-400"
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
                    <div className="w-full max-w-lg rounded-2xl bg-[#121622] border border-slate-800 p-6 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-yellow-400" />
                                {editingFaq ? 'Edit FAQ' : 'Add FAQ'}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="space-y-4 text-xs">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Category</label>
                                    <input
                                        type="text"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-amber-500/50"
                                        placeholder="general, services, pricing..."
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Sort Order</label>
                                    <input
                                        type="number"
                                        value={formData.sortOrder}
                                        onChange={(e) => setFormData({ ...formData, sortOrder: Number(e.target.value) })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-amber-500/50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Question *</label>
                                <input
                                    type="text"
                                    value={formData.question}
                                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-amber-500/50"
                                    placeholder="e.g. How does REINSOFT ensure code quality?"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Answer *</label>
                                <textarea
                                    rows={4}
                                    value={formData.answer}
                                    onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-amber-500/50"
                                    placeholder="Detailed response..."
                                    required
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
                                    className="px-5 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 shadow-md shadow-amber-500/20 disabled:opacity-50"
                                >
                                    {isSaving ? 'Saving...' : 'Save FAQ'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
