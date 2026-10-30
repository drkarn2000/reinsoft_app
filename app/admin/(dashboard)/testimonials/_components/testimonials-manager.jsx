'use client';

import React, { useState } from 'react';
import {
    MessageSquareQuote,
    Plus,
    Search,
    Edit3,
    Trash2,
    Star,
    Video,
    Save,
    X,
    ExternalLink,
    CheckCircle2,
    Sparkles,
} from 'lucide-react';
import { useToast } from '@/app/admin/_components/toast-context';

const emptyTestimonial = {
    clientName: '',
    role: 'Founder & CEO',
    companyName: '',
    location: 'United States',
    countryCode: 'us',
    rating: 5,
    reviewText: '',
    projectType: 'Custom Software Development',
    resultBadgeText: '',
    resultBadgeColor: 'text-green-600 bg-green-100',
    avatarImage: '/assets/Testimonial1.jpg',
    caseStudyLink: '',
    isVideo: false,
    videoUrl: '',
    subtitleVttUrl: '',
    videoThumbnail: '',
    isFeatured: false,
    sortOrder: 0,
    status: 'PUBLISHED',
};

export default function TestimonialsManagerClient({ initialTestimonials }) {
    const { showToast } = useToast();

    const [testimonials, setTestimonials] = useState(initialTestimonials || []);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('ALL'); // 'ALL' | 'VIDEO' | 'TEXT'

    // Editor modal state
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formState, setFormState] = useState(emptyTestimonial);
    const [isSaving, setIsSaving] = useState(false);

    const filteredTestimonials = testimonials.filter((t) => {
        const matchesType =
            filterType === 'ALL' ||
            (filterType === 'VIDEO' && t.isVideo) ||
            (filterType === 'TEXT' && !t.isVideo);
        const matchesSearch =
            t.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (t.companyName && t.companyName.toLowerCase().includes(searchQuery.toLowerCase())) ||
            t.reviewText.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearch;
    });

    const handleOpenNew = () => {
        setEditingItem(null);
        setFormState({
            ...emptyTestimonial,
            sortOrder: testimonials.length + 1,
        });
        setIsEditorOpen(true);
    };

    const handleOpenEdit = (item) => {
        setEditingItem(item);
        setFormState({
            clientName: item.clientName || '',
            role: item.role || '',
            companyName: item.companyName || '',
            location: item.location || 'United States',
            countryCode: item.countryCode || 'us',
            rating: item.rating || 5,
            reviewText: item.reviewText || '',
            projectType: item.projectType || 'Custom Software Development',
            resultBadgeText: item.resultBadgeText || '',
            resultBadgeColor: item.resultBadgeColor || 'text-green-600 bg-green-100',
            avatarImage: item.avatarImage || '',
            caseStudyLink: item.caseStudyLink || '',
            isVideo: Boolean(item.isVideo),
            videoUrl: item.videoUrl || '',
            subtitleVttUrl: item.subtitleVttUrl || '',
            videoThumbnail: item.videoThumbnail || '',
            isFeatured: Boolean(item.isFeatured),
            sortOrder: item.sortOrder || 0,
            status: item.status || 'PUBLISHED',
        });
        setIsEditorOpen(true);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const url = editingItem
                ? `/api/admin/testimonials/${editingItem.id}`
                : '/api/admin/testimonials';
            const method = editingItem ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save testimonial');

            if (editingItem) {
                setTestimonials((prev) =>
                    prev.map((t) => (t.id === data.testimonial.id ? data.testimonial : t))
                );
                showToast(`Review from "${data.testimonial.clientName}" updated!`, 'success');
            } else {
                setTestimonials((prev) => [data.testimonial, ...prev]);
                showToast(`Review from "${data.testimonial.clientName}" created!`, 'success');
            }

            setIsEditorOpen(false);
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id, name) => {
        if (!confirm(`Delete review from "${name}"?`)) return;

        try {
            const res = await fetch(`/api/admin/testimonials/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete testimonial');

            setTestimonials((prev) => prev.filter((t) => t.id !== id));
            showToast('Review deleted successfully', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <MessageSquareQuote className="w-6 h-6 text-emerald-400" />
                        Client Reviews &amp; Testimonials
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Manage verified client ratings, feedback quotes, outcome badges, and video testimonial URLs.
                    </p>
                </div>

                <button
                    onClick={handleOpenNew}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-md shadow-emerald-500/20 transition-all self-start sm:self-center"
                >
                    <Plus className="w-4 h-4" />
                    <span>Add Testimonial</span>
                </button>
            </div>

            {/* Filter toolbar */}
            <div className="p-4 rounded-2xl bg-[#121622] border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
                <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search by client name, company, or review content..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-emerald-500/50"
                    >
                        <option value="ALL">All Testimonial Types</option>
                        <option value="VIDEO">Video Testimonials Only</option>
                        <option value="TEXT">Written Reviews Only</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTestimonials.map((t) => (
                    <div
                        key={t.id}
                        className="p-5 rounded-2xl bg-[#121622] border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-lg group"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    {[...Array(t.rating || 5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    {t.isVideo && (
                                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center gap-1">
                                            <Video className="w-3 h-3" />
                                            <span>Video</span>
                                        </span>
                                    )}
                                    {t.isFeatured && (
                                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                            Featured
                                        </span>
                                    )}
                                </div>
                            </div>

                            <p className="text-xs text-slate-300 italic leading-relaxed line-clamp-3">
                                &ldquo;{t.reviewText}&rdquo;
                            </p>

                            {t.resultBadgeText && (
                                <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    {t.resultBadgeText}
                                </span>
                            )}
                        </div>

                        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-white">{t.clientName}</p>
                                <p className="text-[10px] text-slate-400">
                                    {t.role} {t.companyName ? `• ${t.companyName}` : ''} ({t.location})
                                </p>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <button
                                    onClick={() => handleOpenEdit(t)}
                                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                                    title="Edit"
                                >
                                    <Edit3 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    onClick={() => handleDelete(t.id, t.clientName)}
                                    className="p-1.5 rounded-lg hover:bg-red-500/20 text-slate-500 hover:text-red-400 transition-colors"
                                    title="Delete"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isEditorOpen && (
                <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
                    <div className="w-full max-w-2xl rounded-2xl bg-[#121622] border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-5 my-auto max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                <MessageSquareQuote className="w-5 h-5 text-emerald-400" />
                                {editingItem ? 'Edit Testimonial' : 'Add Client Review'}
                            </h2>
                            <button
                                onClick={() => setIsEditorOpen(false)}
                                className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="space-y-4 text-xs">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Client Name *</label>
                                    <input
                                        type="text"
                                        value={formState.clientName}
                                        onChange={(e) => setFormState({ ...formState, clientName: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500/50"
                                        placeholder="e.g. David Vance"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Role / Title</label>
                                    <input
                                        type="text"
                                        value={formState.role}
                                        onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500/50"
                                        placeholder="e.g. CTO & Co-Founder"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Company Name</label>
                                    <input
                                        type="text"
                                        value={formState.companyName}
                                        onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500/50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Location</label>
                                    <input
                                        type="text"
                                        value={formState.location}
                                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500/50"
                                        placeholder="Austin, Texas"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Rating (Stars)</label>
                                    <select
                                        value={formState.rating}
                                        onChange={(e) => setFormState({ ...formState, rating: Number(e.target.value) })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500/50"
                                    >
                                        <option value={5}>5 Stars - Excellent</option>
                                        <option value={4}>4 Stars - Very Good</option>
                                        <option value={3}>3 Stars - Average</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Review Text *</label>
                                <textarea
                                    rows={4}
                                    value={formState.reviewText}
                                    onChange={(e) => setFormState({ ...formState, reviewText: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500/50"
                                    placeholder="Client review feedback..."
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Result Badge Text</label>
                                    <input
                                        type="text"
                                        value={formState.resultBadgeText}
                                        onChange={(e) => setFormState({ ...formState, resultBadgeText: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500/50"
                                        placeholder="e.g. +42% Conversion Growth"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Project Type</label>
                                    <input
                                        type="text"
                                        value={formState.projectType}
                                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500/50"
                                        placeholder="e.g. Mobile App Development"
                                    />
                                </div>
                            </div>

                            {/* Video Testimonial Toggle */}
                            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="video-checkbox"
                                        checked={formState.isVideo}
                                        onChange={(e) => setFormState({ ...formState, isVideo: e.target.checked })}
                                        className="w-4 h-4 rounded text-emerald-500 bg-slate-800 border-slate-700"
                                    />
                                    <label htmlFor="video-checkbox" className="text-white font-semibold cursor-pointer">
                                        This is a Video Testimonial
                                    </label>
                                </div>

                                {formState.isVideo && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                        <div>
                                            <label className="block text-slate-400 mb-1">Video MP4 URL / Path</label>
                                            <input
                                                type="text"
                                                value={formState.videoUrl}
                                                onChange={(e) => setFormState({ ...formState, videoUrl: e.target.value })}
                                                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono"
                                                placeholder="/assets/videos/testimonial1.mp4"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-400 mb-1">Video Thumbnail Path</label>
                                            <input
                                                type="text"
                                                value={formState.videoThumbnail}
                                                onChange={(e) => setFormState({ ...formState, videoThumbnail: e.target.value })}
                                                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono"
                                                placeholder="/assets/thumb.jpg"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsEditorOpen(false)}
                                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="px-5 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-md shadow-emerald-500/20 disabled:opacity-50"
                                >
                                    {isSaving ? 'Saving...' : 'Save Testimonial'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
