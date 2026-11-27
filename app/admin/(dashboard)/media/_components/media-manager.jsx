'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Image as ImageIcon,
    Search,
    Copy,
    Check,
    Folder,
    Plus,
    Film,
    FileText,
    ExternalLink,
    Edit3,
    Trash2,
    X,
    Save,
} from 'lucide-react';
import { useToast } from '@/app/admin/_components/toast-context';

const FOLDERS = [
    { id: 'ALL', label: 'All Media Assets' },
    { id: 'general', label: 'General / Layout' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'brands', label: 'Brand Logos' },
    { id: 'team', label: 'Team Leadership' },
];

export default function MediaManagerClient() {
    const { showToast } = useToast();

    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFolder, setSelectedFolder] = useState('ALL');
    const [copiedUrl, setCopiedUrl] = useState(null);

    const [selectedAsset, setSelectedAsset] = useState(null);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [registerForm, setRegisterForm] = useState({
        filename: '',
        url: '/assets/',
        altText: '',
        folder: 'general',
    });

    const fetchAssets = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/media');
            const data = await res.json();
            if (res.ok) {
                setAssets(data.assets || []);
            }
        } catch (err) {
            console.error('Failed to load media:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAssets();
    }, []);

    const handleCopyUrl = (url) => {
        navigator.clipboard.writeText(url);
        setCopiedUrl(url);
        showToast(`Copied "${url}" to clipboard!`, 'success', 2500);
        setTimeout(() => setCopiedUrl(null), 2000);
    };

    const handleSaveMetadata = async (e) => {
        e.preventDefault();
        if (!selectedAsset) return;

        try {
            const res = await fetch(`/api/admin/media/${selectedAsset.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    altText: selectedAsset.altText,
                    folder: selectedAsset.folder,
                    filename: selectedAsset.filename,
                    url: selectedAsset.url,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to update asset metadata');

            setAssets((prev) =>
                prev.map((a) => (a.id === selectedAsset.id ? { ...a, ...data.asset } : a))
            );
            showToast('Asset metadata saved!', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    const filteredAssets = assets.filter((asset) => {
        const matchesFolder = selectedFolder === 'ALL' || asset.folder === selectedFolder;
        const matchesSearch = asset.filename.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFolder && matchesSearch;
    });

    const formatBytes = (bytes) => {
        if (!bytes) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <ImageIcon className="w-6 h-6 text-pink-400" />
                        Media Asset Library
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Browse, organize, and copy image and video references preserving `/public/assets` paths.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsRegisterModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-md shadow-pink-500/20 transition-all"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Register Asset</span>
                    </button>
                </div>
            </div>

            {/* Filter toolbar */}
            <div className="p-4 rounded-2xl bg-[#121622] border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
                <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search assets by file name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/50"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <select
                        value={selectedFolder}
                        onChange={(e) => setSelectedFolder(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-pink-500/50"
                    >
                        {FOLDERS.map((f) => (
                            <option key={f.id} value={f.id}>
                                {f.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Grid & Asset detail pane */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Assets Grid */}
                <div className="lg:col-span-8">
                    {loading ? (
                        <div className="p-12 text-center text-slate-500 text-xs">
                            Loading media assets...
                        </div>
                    ) : filteredAssets.length === 0 ? (
                        <div className="p-12 text-center rounded-2xl bg-[#121622] border border-slate-800 text-slate-500 text-xs">
                            No assets match your search.
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[650px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
                            {filteredAssets.map((asset) => {
                                const isVideo = asset.filename.endsWith('.mp4');
                                const isSelected = selectedAsset?.id === asset.id;
                                return (
                                    <div
                                        key={asset.id}
                                        onClick={() => setSelectedAsset(asset)}
                                        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                                            isSelected
                                                ? 'bg-pink-500/15 border-pink-500/50 shadow-md'
                                                : 'bg-[#121622] border-slate-800 hover:border-slate-700'
                                        }`}
                                    >
                                        <div className="relative w-full h-28 rounded-lg bg-slate-900 overflow-hidden mb-2">
                                            {isVideo ? (
                                                <div className="w-full h-full flex items-center justify-center bg-purple-950/40 text-purple-400">
                                                    <Film className="w-8 h-8" />
                                                </div>
                                            ) : (
                                                <Image
                                                    src={asset.url}
                                                    alt={asset.altText || asset.filename}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                                                />
                                            )}
                                        </div>

                                        <div>
                                            <p className="text-[11px] font-semibold text-white truncate">
                                                {asset.filename}
                                            </p>
                                            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                                                <span>{formatBytes(asset.sizeBytes)}</span>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleCopyUrl(asset.url);
                                                    }}
                                                    className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800"
                                                    title="Copy URL"
                                                >
                                                    {copiedUrl === asset.url ? (
                                                        <Check className="w-3 h-3 text-emerald-400" />
                                                    ) : (
                                                        <Copy className="w-3 h-3" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Right Column: Asset Details Inspector */}
                <div className="lg:col-span-4">
                    {selectedAsset ? (
                        <div className="p-5 rounded-2xl bg-[#121622] border border-slate-800 space-y-4 text-xs sticky top-20">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                                    Asset Inspector
                                </span>
                                <button
                                    onClick={() => setSelectedAsset(null)}
                                    className="p-1 text-slate-500 hover:text-white"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="relative w-full h-44 rounded-xl bg-slate-950 overflow-hidden border border-slate-800">
                                {selectedAsset.filename.endsWith('.mp4') ? (
                                    <div className="w-full h-full flex items-center justify-center text-purple-400">
                                        <Film className="w-10 h-10" />
                                    </div>
                                ) : (
                                    <Image
                                        src={selectedAsset.url}
                                        alt={selectedAsset.filename}
                                        fill
                                        className="object-contain p-2"
                                    />
                                )}
                            </div>

                            <div className="space-y-2">
                                <div>
                                    <label className="block text-slate-400 text-[11px]">File Name</label>
                                    <p className="font-mono text-white text-[11px] truncate">
                                        {selectedAsset.filename}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-slate-400 text-[11px]">Direct Path</label>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <input
                                            type="text"
                                            readOnly
                                            value={selectedAsset.url}
                                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 font-mono text-[11px]"
                                        />
                                        <button
                                            onClick={() => handleCopyUrl(selectedAsset.url)}
                                            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold shrink-0"
                                            title="Copy Path"
                                        >
                                            {copiedUrl === selectedAsset.url ? (
                                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                            ) : (
                                                <Copy className="w-3.5 h-3.5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-slate-400 text-[11px] mb-1">Alt Text (SEO)</label>
                                    <input
                                        type="text"
                                        value={selectedAsset.altText || ''}
                                        onChange={(e) =>
                                            setSelectedAsset({ ...selectedAsset, altText: e.target.value })
                                        }
                                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none"
                                        placeholder="Descriptive alt text for SEO"
                                    />
                                </div>

                                <div>
                                    <label className="block text-slate-400 text-[11px] mb-1">Folder Category</label>
                                    <select
                                        value={selectedAsset.folder || 'general'}
                                        onChange={(e) =>
                                            setSelectedAsset({ ...selectedAsset, folder: e.target.value })
                                        }
                                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none"
                                    >
                                        <option value="general">general</option>
                                        <option value="case-studies">case-studies</option>
                                        <option value="testimonials">testimonials</option>
                                        <option value="brands">brands</option>
                                        <option value="team">team</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={handleSaveMetadata}
                                className="w-full py-2 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                            >
                                <Save className="w-3.5 h-3.5" />
                                <span>Save Asset Metadata</span>
                            </button>
                        </div>
                    ) : (
                        <div className="p-8 text-center rounded-2xl bg-[#121622] border border-slate-800 text-slate-500 text-xs">
                            <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-40" />
                            <p>Select any image or video to inspect details or copy its path.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal: Register Existing or External Asset */}
            {isRegisterModalOpen && (
                <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-md rounded-2xl bg-[#121622] border border-slate-800 p-6 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                <Plus className="w-4 h-4 text-pink-400" />
                                Register Asset in Media Library
                            </h2>
                            <button
                                onClick={() => setIsRegisterModalOpen(false)}
                                className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                try {
                                    const res = await fetch('/api/admin/media', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(registerForm),
                                    });
                                    const data = await res.json();
                                    if (!res.ok) throw new Error(data.error || 'Failed to register asset');

                                    setAssets((prev) => [data.asset, ...prev]);
                                    showToast('Asset registered successfully!', 'success');
                                    setIsRegisterModalOpen(false);
                                } catch (err) {
                                    showToast(err.message, 'error');
                                }
                            }}
                            className="space-y-4 text-xs"
                        >
                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Filename *</label>
                                <input
                                    type="text"
                                    value={registerForm.filename}
                                    onChange={(e) => setRegisterForm({ ...registerForm, filename: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none"
                                    placeholder="e.g. hero-banner.jpg"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Asset URL *</label>
                                <input
                                    type="text"
                                    value={registerForm.url}
                                    onChange={(e) => setRegisterForm({ ...registerForm, url: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none"
                                    placeholder="/assets/hero-banner.jpg"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1 font-semibold">Folder</label>
                                <select
                                    value={registerForm.folder}
                                    onChange={(e) => setRegisterForm({ ...registerForm, folder: e.target.value })}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none"
                                >
                                    <option value="general">general</option>
                                    <option value="case-studies">case-studies</option>
                                    <option value="testimonials">testimonials</option>
                                    <option value="brands">brands</option>
                                    <option value="team">team</option>
                                </select>
                            </div>

                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsRegisterModalOpen(false)}
                                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
