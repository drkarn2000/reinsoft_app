'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
    Users,
    Plus,
    Edit3,
    Trash2,
    Save,
    X,
    Linkedin,
    Sparkles,
    Shield,
    Upload,
} from 'lucide-react';
import { useToast } from '@/app/admin/_components/toast-context';

const emptyMember = {
    name: '',
    role: 'Co-Founder & CEO',
    focusArea: 'Technology & Strategy',
    bio: '',
    imageUrl: '/assets/team-1.jpg',
    accentGradient: 'from-[#c6a86a] via-[#e7d2a3] to-[#f5ead3]',
    linkedinUrl: '',
    isFounder: true,
    sortOrder: 1,
    isEnabled: true,
};

export default function TeamManagerClient({ initialMembers }) {
    const { showToast } = useToast();

    const [members, setMembers] = useState(initialMembers || []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMember, setEditingMember] = useState(null);
    const [formData, setFormData] = useState(emptyMember);
    const [isSaving, setIsSaving] = useState(false);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleOpenNew = () => {
        setEditingMember(null);
        setFormData({
            ...emptyMember,
            sortOrder: members.length + 1,
        });
        setIsModalOpen(true);
    };

    const handleOpenEdit = (member) => {
        setEditingMember(member);
        setFormData({
            name: member.name || '',
            role: member.role || '',
            focusArea: member.focusArea || '',
            bio: member.bio || '',
            imageUrl: member.imageUrl || '/assets/team-1.jpg',
            accentGradient: member.accentGradient || 'from-[#c6a86a] via-[#e7d2a3] to-[#f5ead3]',
            linkedinUrl: member.linkedinUrl || '',
            isFounder: Boolean(member.isFounder),
            sortOrder: member.sortOrder || 1,
            isEnabled: member.isEnabled !== undefined ? member.isEnabled : true,
        });
        setIsModalOpen(true);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];
        event.target.value = '';
        if (!file) return;

        if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type)) {
            showToast('Please choose a JPEG, PNG, WebP, or GIF image.', 'error');
            return;
        }
        if (file.size > 10 * 1024 * 1024) {
            showToast('Images must be 10 MB or smaller.', 'error');
            return;
        }

        const uploadData = new FormData();
        uploadData.append('file', file);
        uploadData.append('folder', 'team');
        setIsUploadingImage(true);
        setUploadProgress(0);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/admin/uploads/case-study-image');
        xhr.upload.addEventListener('progress', (progressEvent) => {
            if (progressEvent.lengthComputable) {
                setUploadProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100));
            }
        });
        xhr.addEventListener('load', () => {
            let data;
            try {
                data = JSON.parse(xhr.responseText);
            } catch {
                data = {};
            }

            if (xhr.status < 200 || xhr.status >= 300) {
                showToast(data.error || 'Image upload failed.', 'error');
                return;
            }

            setFormData((prev) => ({ ...prev, imageUrl: data.url }));
            setUploadProgress(100);
            showToast('Profile image uploaded. Save the profile to apply it.', 'success');
        });
        xhr.addEventListener('error', () => {
            showToast('Image upload failed. Check your connection and try again.', 'error');
        });
        xhr.addEventListener('loadend', () => setIsUploadingImage(false));
        xhr.send(uploadData);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const url = editingMember
                ? `/api/admin/team/${editingMember.id}`
                : '/api/admin/team';
            const method = editingMember ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save member profile');

            if (editingMember) {
                setMembers((prev) =>
                    prev.map((m) => (m.id === data.member.id ? data.member : m))
                );
                showToast(`Profile for "${data.member.name}" updated!`, 'success');
            } else {
                setMembers((prev) => [...prev, data.member]);
                showToast(`Profile for "${data.member.name}" created!`, 'success');
            }

            setIsModalOpen(false);
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id, name) => {
        if (!confirm(`Delete profile for "${name}"?`)) return;

        try {
            const res = await fetch(`/api/admin/team/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete member profile');

            setMembers((prev) => prev.filter((m) => m.id !== id));
            showToast('Member profile deleted successfully', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <Users className="w-6 h-6 text-rose-400" />
                        Team &amp; Executive Leadership
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Manage leadership profiles, bios, roles, headshots, and LinkedIn links shown on the About page.
                    </p>
                </div>

                <button
                    onClick={handleOpenNew}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 shadow-md shadow-rose-500/20 transition-all self-start sm:self-center"
                >
                    <Plus className="w-4 h-4" />
                    <span>Add Team Member</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {members.map((member) => (
                    <div
                        key={member.id}
                        className="rounded-2xl bg-[#121622] border border-slate-800/80 hover:border-slate-700 transition-all overflow-hidden flex flex-col justify-between group shadow-lg"
                    >
                        <div className="p-5 space-y-4">
                            <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                                <Image
                                    src={member.imageUrl || '/assets/team-1.jpg'}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {member.isFounder && (
                                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-amber-400 border border-amber-500/30">
                                        Founder
                                    </div>
                                )}
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-white">{member.name}</h3>
                                <p className="text-xs text-rose-400 font-semibold">{member.role}</p>
                                {member.focusArea && (
                                    <p className="text-[11px] text-slate-400 mt-0.5">{member.focusArea}</p>
                                )}
                                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-900/40 border-t border-slate-800 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                                {member.linkedinUrl && (
                                    <a
                                        href={member.linkedinUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-slate-400 hover:text-white"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                )}
                                <span className="text-[10px] text-slate-500">Order: {member.sortOrder}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <button
                                    onClick={() => handleOpenEdit(member)}
                                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                                    title="Edit"
                                >
                                    <Edit3 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    onClick={() => handleDelete(member.id, member.name)}
                                    className="p-1.5 rounded-lg hover:bg-red-500/20 text-slate-500 hover:text-red-400"
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
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="w-full max-w-lg rounded-2xl bg-[#121622] border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-4 my-auto max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                <Users className="w-5 h-5 text-rose-400" />
                                {editingMember ? 'Edit Profile' : 'Add Team Member'}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="space-y-4 text-xs">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Full Name *</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-rose-500/50"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Role / Title *</label>
                                    <input
                                        type="text"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-rose-500/50"
                                        placeholder="e.g. Co-Founder & CTO"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">Focus Area</label>
                                    <input
                                        type="text"
                                        value={formData.focusArea}
                                        onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-rose-500/50"
                                        placeholder="Engineering & Scale"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-1 font-semibold">LinkedIn Profile URL</label>
                                    <input
                                        type="text"
                                        value={formData.linkedinUrl}
                                        onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-rose-500/50"
                                        placeholder="https://linkedin.com/in/..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Profile Photo Asset Path</label>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="text"
                                        value={formData.imageUrl}
                                        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                        className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-rose-500/50"
                                        placeholder="/assets/team-1.jpg or Cloudinary URL"
                                    />
                                    <label className={`inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl font-bold text-white bg-rose-600 hover:bg-rose-500 cursor-pointer transition-colors ${isUploadingImage ? 'opacity-60 pointer-events-none' : ''}`}>
                                        <Upload className="w-4 h-4" />
                                        {isUploadingImage ? `Uploading ${uploadProgress}%` : 'Upload Image'}
                                        <input
                                            type="file"
                                            accept="image/jpeg,image/png,image/webp,image/gif"
                                            onChange={handleImageUpload}
                                            disabled={isUploadingImage}
                                            className="sr-only"
                                        />
                                    </label>
                                </div>
                                {isUploadingImage && (
                                    <div className="mt-2 h-1.5 rounded-full bg-slate-800 overflow-hidden" aria-label={`Upload progress ${uploadProgress}%`}>
                                        <div className="h-full bg-rose-500 transition-all" style={{ width: `${uploadProgress}%` }} />
                                    </div>
                                )}
                                {formData.imageUrl && (
                                    <div className="relative mt-2 h-32 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                                        <Image
                                            src={formData.imageUrl}
                                            alt="Profile photo preview"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 100vw, 640px"
                                        />
                                    </div>
                                )}
                                <p className="mt-1 text-[11px] text-slate-500">JPEG, PNG, WebP, or GIF up to 10 MB.</p>
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Biography Narrative *</label>
                                <textarea
                                    rows={4}
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-rose-500/50"
                                    placeholder="Executive bio..."
                                    required
                                />
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                                <input
                                    type="checkbox"
                                    id="founder-check"
                                    checked={formData.isFounder}
                                    onChange={(e) => setFormData({ ...formData, isFounder: e.target.checked })}
                                    className="w-4 h-4 rounded text-rose-500 bg-slate-800 border-slate-700"
                                />
                                <label htmlFor="founder-check" className="text-white font-semibold cursor-pointer">
                                    Display as Executive Founder / Leadership
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
                                    className="px-5 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 shadow-md shadow-rose-500/20 disabled:opacity-50"
                                >
                                    {isSaving ? 'Saving...' : 'Save Profile'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
