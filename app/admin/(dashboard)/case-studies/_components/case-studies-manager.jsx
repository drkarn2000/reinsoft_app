'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
    FolderKanban,
    Plus,
    Search,
    Edit3,
    Trash2,
    ExternalLink,
    Star,
    Save,
    X,
    Check,
    Layers,
    TrendingUp,
    ChevronUp,
    ChevronDown,
    Target,
    CheckCircle,
    ArrowRight,
    Sparkles,
    Activity,
    BarChart3,
    ShieldCheck,
    Zap,
    Layout,
    Globe,
    Upload,
    GripVertical,
} from 'lucide-react';
import { useToast } from '@/app/admin/_components/toast-context';

const CATEGORIES = [
    'Web Development',
    'Mobile Applications',
    'Software',
    'UI/UX',
    'Custom Software',
    'AI & Automation',
    'E-Commerce',
];

const AVAILABLE_ICONS = [
    'Search',
    'ShoppingCart',
    'Package',
    'Sparkles',
    'Activity',
    'BarChart3',
    'TrendingUp',
    'ShieldCheck',
    'Zap',
    'Stethoscope',
    'Users',
    'Calendar',
    'Video',
    'FileText',
    'Navigation',
    'Map',
    'ClipboardCheck',
    'Layout',
    'Layers',
    'Globe',
    'Target',
    'CheckCircle',
];

const emptyCaseStudy = {
    title: '',
    slug: '',
    clientName: '',
    liveLink: '',
    shortDescription: '',
    industry: 'Technology',
    category: 'Web Development',
    techStack: ['Next.js', 'Tailwind CSS'],
    heroImage: '/assets/Portfolio1.jpg',
    overviewHeading: 'Project Overview',
    overview: '',
    problemHeading: 'The Problem',
    problem: '',
    solutionHeading: 'The Solution',
    solution: '',
    features: [
        {
            title: 'Core Architecture',
            description: 'Scalable cloud infrastructure designed for maximum throughput.',
            points: ['High-throughput backend', 'Scalable database'],
            icon: 'Layers',
        },
    ],
    processStages: [
        {
            stage: 'Research',
            description: 'Audited requirements and technical scope',
            points: ['Stakeholder interviews', 'Technical audit'],
            icon: 'Search',
        },
    ],
    results: [
        {
            value: '+40%',
            metric: 'Conversion Rate',
            description: 'Measured 90 days post-launch',
            icon: 'TrendingUp',
        },
    ],
    ctaTitle: 'Ready to achieve similar results?',
    ctaDescription: "Let's discuss how we can bring your vision to life with a high-performance digital solution.",
    ctaButtonText: 'Start Your Project',
    ctaButtonUrl: '/#contact',
    screenshots: [],
    isFeatured: false,
    sortOrder: 0,
    status: 'PUBLISHED',
    seoTitle: '',
    seoDescription: '',
};

export default function CaseStudiesManagerClient({ initialCaseStudies }) {
    const { showToast } = useToast();

    const [caseStudies, setCaseStudies] = useState(initialCaseStudies || []);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('ALL');
    const [statusFilter, setStatusFilter] = useState('ALL');

    // Editor modal state
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('basic');
    const [editingItem, setEditingItem] = useState(null);
    const [formState, setFormState] = useState(emptyCaseStudy);
    const [newTechTag, setNewTechTag] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [draggedCaseStudyId, setDraggedCaseStudyId] = useState(null);
    const [isReordering, setIsReordering] = useState(false);

    // Filtered case studies
    const filteredCaseStudies = caseStudies.filter((cs) => {
        const matchesCategory = categoryFilter === 'ALL' || cs.category === categoryFilter;
        const matchesStatus = statusFilter === 'ALL' || cs.status === statusFilter;
        const matchesSearch =
            cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cs.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (cs.clientName && cs.clientName.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (cs.industry && cs.industry.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesStatus && matchesSearch;
    });

    const handleOpenNew = () => {
        setEditingItem(null);
        setActiveTab('basic');
        setFormState({
            ...emptyCaseStudy,
            sortOrder: caseStudies.length + 1,
        });
        setIsEditorOpen(true);
    };

    const handleOpenEdit = (item) => {
        setEditingItem(item);
        setActiveTab('basic');
        setFormState({
            title: item.title || '',
            slug: item.slug || '',
            clientName: item.clientName || '',
            liveLink: item.liveLink || '',
            shortDescription: item.shortDescription || '',
            industry: item.industry || 'Technology',
            category: item.category || 'Web Development',
            techStack: Array.isArray(item.techStack) ? item.techStack : [],
            heroImage: item.heroImage || item.image || '/assets/Portfolio1.jpg',
            overviewHeading: item.overviewHeading || 'Project Overview',
            overview: item.overview || '',
            problemHeading: item.problemHeading || 'The Problem',
            problem: item.problem || '',
            solutionHeading: item.solutionHeading || 'The Solution',
            solution: item.solution || '',
            features: Array.isArray(item.features) ? item.features : [],
            processStages: Array.isArray(item.processStages)
                ? item.processStages
                : Array.isArray(item.process)
                ? item.process
                : [],
            results: Array.isArray(item.results) ? item.results : [],
            ctaTitle: item.ctaTitle !== undefined && item.ctaTitle !== null ? item.ctaTitle : 'Ready to achieve similar results?',
            ctaDescription: item.ctaDescription || "Let's discuss how we can bring your vision to life with a high-performance digital solution.",
            ctaButtonText: item.ctaButtonText || 'Start Your Project',
            ctaButtonUrl: item.ctaButtonUrl || '/#contact',
            screenshots: Array.isArray(item.screenshots) ? item.screenshots : [],
            isFeatured: Boolean(item.isFeatured),
            sortOrder: item.sortOrder || 0,
            status: item.status || 'PUBLISHED',
            seoTitle: item.seoTitle || '',
            seoDescription: item.seoDescription || '',
        });
        setIsEditorOpen(true);
    };

    // Auto-generate slug from title
    const handleGenerateSlug = () => {
        if (!formState.title) return;
        const genSlug = formState.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
        setFormState((prev) => ({ ...prev, slug: genSlug }));
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

        const formData = new FormData();
        formData.append('file', file);
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

            setFormState((prev) => ({ ...prev, heroImage: data.url }));
            setUploadProgress(100);
            showToast('Image uploaded successfully. Save the case study to apply it.', 'success');
        });
        xhr.addEventListener('error', () => showToast('Image upload failed. Check your connection and try again.', 'error'));
        xhr.addEventListener('loadend', () => setIsUploadingImage(false));
        xhr.send(formData);
    };

    // Tech tags
    const handleAddTechTag = (e) => {
        if (e) e.preventDefault();
        const tag = newTechTag.trim();
        if (!tag) return;
        if (!formState.techStack.includes(tag)) {
            setFormState((prev) => ({
                ...prev,
                techStack: [...prev.techStack, tag],
            }));
        }
        setNewTechTag('');
    };

    const handleRemoveTechTag = (tagToRemove) => {
        setFormState((prev) => ({
            ...prev,
            techStack: prev.techStack.filter((t) => t !== tagToRemove),
        }));
    };

    // Reorder helper
    const moveItem = (listKey, index, direction) => {
        setFormState((prev) => {
            const list = [...(prev[listKey] || [])];
            const target = index + direction;
            if (target < 0 || target >= list.length) return prev;
            const [item] = list.splice(index, 1);
            list.splice(target, 0, item);
            return { ...prev, [listKey]: list };
        });
    };

    // Core Capabilities (Features)
    const handleAddFeature = () => {
        setFormState((prev) => ({
            ...prev,
            features: [
                ...prev.features,
                {
                    title: 'New Capability',
                    description: '',
                    points: ['Feature detail point'],
                    icon: 'Layers',
                },
            ],
        }));
    };

    const handleUpdateFeature = (index, field, value) => {
        setFormState((prev) => {
            const updated = [...prev.features];
            updated[index] = { ...updated[index], [field]: value };
            return { ...prev, features: updated };
        });
    };

    const handleRemoveFeature = (index) => {
        setFormState((prev) => ({
            ...prev,
            features: prev.features.filter((_, i) => i !== index),
        }));
    };

    // Methodology (Process stages)
    const handleAddStage = () => {
        setFormState((prev) => ({
            ...prev,
            processStages: [
                ...prev.processStages,
                {
                    stage: 'New Phase',
                    description: '',
                    points: ['Key milestone or deliverable'],
                    icon: 'Layout',
                },
            ],
        }));
    };

    const handleUpdateStage = (index, field, value) => {
        setFormState((prev) => {
            const updated = [...prev.processStages];
            updated[index] = { ...updated[index], [field]: value };
            return { ...prev, processStages: updated };
        });
    };

    const handleRemoveStage = (index) => {
        setFormState((prev) => ({
            ...prev,
            processStages: prev.processStages.filter((_, i) => i !== index),
        }));
    };

    // Results (Outcomes)
    const handleAddResult = () => {
        setFormState((prev) => ({
            ...prev,
            results: [
                ...prev.results,
                {
                    value: '+25%',
                    metric: 'Performance Growth',
                    description: '',
                    icon: 'TrendingUp',
                },
            ],
        }));
    };

    const handleUpdateResult = (index, field, value) => {
        setFormState((prev) => {
            const updated = [...prev.results];
            updated[index] = { ...updated[index], [field]: value };
            return { ...prev, results: updated };
        });
    };

    const handleRemoveResult = (index) => {
        setFormState((prev) => ({
            ...prev,
            results: prev.results.filter((_, i) => i !== index),
        }));
    };

    // Save Case Study (Create or Update)
    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const url = editingItem
                ? `/api/admin/case-studies/${editingItem.id}`
                : '/api/admin/case-studies';
            const method = editingItem ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save case study');

            if (editingItem) {
                setCaseStudies((prev) =>
                    prev.map((cs) => (cs.id === data.caseStudy.id ? data.caseStudy : cs))
                );
                showToast(`Case study "${data.caseStudy.title}" updated!`, 'success');
            } else {
                setCaseStudies((prev) => [data.caseStudy, ...prev]);
                showToast(`Case study "${data.caseStudy.title}" created!`, 'success');
            }

            setIsEditorOpen(false);
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    // Toggle featured state
    const handleToggleFeatured = async (item) => {
        try {
            const newFeatured = !item.isFeatured;
            const res = await fetch(`/api/admin/case-studies/${item.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isFeatured: newFeatured }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to toggle featured status');

            setCaseStudies((prev) =>
                prev.map((cs) => (cs.id === item.id ? { ...cs, isFeatured: newFeatured } : cs))
            );
            showToast(`Case study ${newFeatured ? 'marked as featured' : 'unfeatured'}`, 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    // Delete Case Study
    const handleDelete = async (id, title) => {
        if (!confirm(`Are you sure you want to delete case study "${title}"?`)) return;

        try {
            const res = await fetch(`/api/admin/case-studies/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete case study');

            setCaseStudies((prev) => prev.filter((cs) => cs.id !== id));
            showToast('Case study deleted successfully', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    const handleDropCaseStudy = async (targetId) => {
        if (
            !draggedCaseStudyId ||
            draggedCaseStudyId === targetId ||
            searchQuery ||
            categoryFilter !== 'ALL' ||
            statusFilter !== 'ALL'
        ) {
            setDraggedCaseStudyId(null);
            return;
        }

        const currentIndex = caseStudies.findIndex((cs) => cs.id === draggedCaseStudyId);
        const targetIndex = caseStudies.findIndex((cs) => cs.id === targetId);
        if (currentIndex === -1 || targetIndex === -1) {
            setDraggedCaseStudyId(null);
            return;
        }

        const reordered = [...caseStudies];
        const [movedCaseStudy] = reordered.splice(currentIndex, 1);
        reordered.splice(targetIndex, 0, movedCaseStudy);
        setCaseStudies(reordered);
        setDraggedCaseStudyId(null);
        setIsReordering(true);

        try {
            const res = await fetch('/api/admin/case-studies/reorder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderedIds: reordered.map((cs) => cs.id) }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save case study order');
            showToast('Case study order saved.', 'success');
        } catch (err) {
            setCaseStudies(caseStudies);
            showToast(err.message, 'error');
        } finally {
            setIsReordering(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <FolderKanban className="w-6 h-6 text-blue-400" />
                        Case Studies &amp; Portfolio
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Manage portfolio projects, tech stacks, client metrics, methodologies, and live case study pages.
                    </p>
                </div>

                <button
                    onClick={handleOpenNew}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-md shadow-blue-500/20 transition-all self-start sm:self-center"
                >
                    <Plus className="w-4 h-4" />
                    <span>Create Case Study</span>
                </button>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-xs text-blue-200">
                <GripVertical className="h-4 w-4 shrink-0 text-blue-400" />
                <span>
                    Drag and drop cards to change their order. Clear search and filters before reordering.
                </span>
                {isReordering && <span className="ml-auto text-blue-400">Saving order...</span>}
            </div>

            {/* Filter & Search Bar */}
            <div className="p-4 rounded-2xl bg-[#121622] border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
                <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search by title, client, industry, or slug..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-blue-500/50"
                    >
                        <option value="ALL">All Categories</option>
                        {CATEGORIES.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>

                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-blue-500/50"
                    >
                        <option value="ALL">All Statuses</option>
                        <option value="PUBLISHED">PUBLISHED</option>
                        <option value="DRAFT">DRAFT</option>
                        <option value="ARCHIVED">ARCHIVED</option>
                    </select>
                </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredCaseStudies.map((cs) => {
                    const isPublished = cs.status === 'PUBLISHED';
                    return (
                        <div
                            key={cs.id}
                            draggable={!searchQuery && categoryFilter === 'ALL' && statusFilter === 'ALL'}
                            onDragStart={() => setDraggedCaseStudyId(cs.id)}
                            onDragOver={(event) => event.preventDefault()}
                            onDrop={() => handleDropCaseStudy(cs.id)}
                            onDragEnd={() => setDraggedCaseStudyId(null)}
                            className="rounded-2xl bg-[#121622] border border-slate-800/80 hover:border-slate-700 transition-all overflow-hidden flex flex-col group shadow-lg"
                        >
                            {/* Card Image Banner */}
                            <div className="relative h-44 w-full bg-slate-900 border-b border-slate-800/80">
                                <Image
                                    src={cs.heroImage || '/assets/Portfolio1.jpg'}
                                    alt={cs.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121622] via-transparent to-black/40" />

                                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/10">
                                        {cs.category}
                                    </span>
                                    <span
                                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                            isPublished
                                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                                : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                        }`}
                                    >
                                        {cs.status}
                                    </span>
                                </div>

                                <button
                                    onClick={() => handleToggleFeatured(cs)}
                                    className={`absolute top-3 right-3 p-1.5 rounded-full backdrop-blur-md transition-colors ${
                                        cs.isFeatured
                                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                                            : 'bg-black/40 text-slate-400 hover:text-white border border-white/10'
                                    }`}
                                    title={cs.isFeatured ? 'Featured on home' : 'Click to feature'}
                                >
                                    <Star className={`w-3.5 h-3.5 ${cs.isFeatured ? 'fill-amber-400' : ''}`} />
                                </button>
                            </div>

                            {/* Card Details */}
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                                <div>
                                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {cs.title}
                                    </h3>
                                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                                        /case-studies/{cs.slug}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                                        {cs.overview || cs.shortDescription}
                                    </p>
                                </div>

                                {/* Tech stack tags */}
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {cs.techStack?.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-800 text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {cs.techStack?.length > 4 && (
                                        <span className="px-1.5 py-0.5 rounded-md text-[10px] text-slate-500">
                                            +{cs.techStack.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* Footer actions */}
                                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                                    <a
                                        href={`/case-studies/${cs.slug}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-slate-400 hover:text-white flex items-center gap-1 font-medium"
                                    >
                                        <span>Preview</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </a>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleOpenEdit(cs)}
                                            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold flex items-center gap-1 transition-colors"
                                        >
                                            <Edit3 className="w-3.5 h-3.5" />
                                            <span>Edit</span>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(cs.id, cs.title)}
                                            className="p-1.5 rounded-lg hover:bg-red-500/20 text-slate-500 hover:text-red-400 transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Complete Case Study CMS Editor Modal */}
            {isEditorOpen && (
                <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
                    <div className="w-full max-w-5xl rounded-2xl bg-[#121622] border border-slate-800 shadow-2xl flex flex-col my-auto max-h-[92vh] overflow-hidden">
                        {/* Modal Header */}
                        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between shrink-0 bg-[#161c2d]">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                                    <FolderKanban className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">
                                        {editingItem ? `Edit: ${editingItem.title}` : 'Create New Case Study'}
                                    </h2>
                                    <p className="text-xs text-slate-400">
                                        Configure project overview, problem, solution, capabilities, methodology, outcomes, and CTA.
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsEditorOpen(false)}
                                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex border-b border-slate-800 px-6 bg-slate-900/50 overflow-x-auto text-xs shrink-0">
                            {[
                                { id: 'basic', label: '1. Basic Details' },
                                { id: 'story', label: '2. Overview & Problem' },
                                { id: 'capabilities', label: `3. Core Capabilities (${formState.features?.length || 0})` },
                                { id: 'methodology', label: `4. Methodology (${formState.processStages?.length || 0})` },
                                { id: 'outcomes', label: `5. The Outcome (${formState.results?.length || 0})` },
                                { id: 'cta', label: '6. Final CTA & SEO' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-3 px-4 font-bold border-b-2 whitespace-nowrap transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                                            : 'border-transparent text-slate-400 hover:text-slate-200'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Form Body */}
                        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
                            {/* TAB 1: BASIC DETAILS */}
                            {activeTab === 'basic' && (
                                <div className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Project Title *</label>
                                            <input
                                                type="text"
                                                value={formState.title}
                                                onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="e.g. E-Commerce Experience"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between mb-1">
                                                <label className="text-slate-300 font-semibold">Slug (URL identifier) *</label>
                                                <button
                                                    type="button"
                                                    onClick={handleGenerateSlug}
                                                    className="text-[10px] text-blue-400 hover:underline"
                                                >
                                                    Generate from Title
                                                </button>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="px-2.5 py-2 bg-slate-800 text-slate-400 border border-r-0 border-slate-700/60 rounded-l-xl font-mono text-xs">
                                                    /case-studies/
                                                </span>
                                                <input
                                                    type="text"
                                                    value={formState.slug}
                                                    onChange={(e) => setFormState({ ...formState, slug: e.target.value })}
                                                    className="w-full px-3 py-2 rounded-r-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-blue-500/50"
                                                    placeholder="ecommerce-experience"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Short Description (Used for Case Study Detail Page Hero and SEO metadata) */}
                                    <div>
                                        <label className="block text-slate-300 mb-1 font-semibold">
                                            Short Description / Hero Subheading *
                                            <span className="text-slate-500 font-normal ml-2">
                                                (Rendered in the hero header of the case study detail page and used for SEO meta description)
                                            </span>
                                        </label>
                                        <textarea
                                            rows={3}
                                            value={formState.shortDescription}
                                            onChange={(e) => setFormState({ ...formState, shortDescription: e.target.value })}
                                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                            placeholder="A high-conversion online store built with Next.js, featuring seamless checkout and dynamic product filtering."
                                            required
                                        />
                                    </div>

                                    {/* Category, Industry, Status & Sort Order */}
                                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Category</label>
                                            <select
                                                value={formState.category}
                                                onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                            >
                                                {CATEGORIES.map((cat) => (
                                                    <option key={cat} value={cat}>
                                                        {cat}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Industry</label>
                                            <input
                                                type="text"
                                                value={formState.industry}
                                                onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="E-Commerce, FinTech, etc."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Publish Status</label>
                                            <select
                                                value={formState.status}
                                                onChange={(e) => setFormState({ ...formState, status: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                            >
                                                <option value="PUBLISHED">PUBLISHED</option>
                                                <option value="DRAFT">DRAFT</option>
                                                <option value="ARCHIVED">ARCHIVED</option>
                                            </select>
                                        </div>

                                    </div>

                                    {/* Client & Live Link */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Client / Brand Name</label>
                                            <input
                                                type="text"
                                                value={formState.clientName}
                                                onChange={(e) => setFormState({ ...formState, clientName: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="e.g. Biswakarma Jewellery"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Live Project / Demo URL</label>
                                            <input
                                                type="text"
                                                value={formState.liveLink}
                                                onChange={(e) => setFormState({ ...formState, liveLink: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="https://client-project.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Hero / Background Image */}
                                    <div>
                                        <label className="block text-slate-300 mb-1 font-semibold">Hero &amp; Portfolio Card Image</label>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <input
                                                type="text"
                                                value={formState.heroImage}
                                                onChange={(e) => setFormState({ ...formState, heroImage: e.target.value })}
                                                className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-blue-500/50"
                                                placeholder="/assets/Biswakarama.png or Cloudinary URL"
                                            />
                                            <label className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 cursor-pointer transition-colors ${isUploadingImage ? 'opacity-60 pointer-events-none' : ''}`}>
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
                                                <div className="h-full bg-blue-500 transition-all" style={{ width: `${uploadProgress}%` }} />
                                            </div>
                                        )}
                                        {formState.heroImage && (
                                            <div className="relative mt-3 h-40 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                                                <Image
                                                    src={formState.heroImage}
                                                    alt="Case study hero preview"
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 100vw, 640px"
                                                />
                                            </div>
                                        )}
                                        <p className="mt-1 text-[11px] text-slate-500">JPEG, PNG, WebP, or GIF up to 10 MB. Existing local paths remain supported.</p>
                                    </div>

                                    {/* Tech Stack Tags */}
                                    <div className="space-y-2">
                                        <label className="block text-slate-300 font-semibold">Technology Tags</label>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {formState.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-200"
                                                >
                                                    <span>{tech}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveTechTag(tech)}
                                                        className="text-slate-400 hover:text-red-400"
                                                    >
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Add technology (e.g. Next.js, Stripe, PostgreSQL)..."
                                                value={newTechTag}
                                                onChange={(e) => setNewTechTag(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        handleAddTechTag(e);
                                                    }
                                                }}
                                                className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                            />
                                            <button
                                                type="button"
                                                onClick={handleAddTechTag}
                                                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold"
                                            >
                                                Add Tag
                                            </button>
                                        </div>
                                    </div>

                                    {/* Featured Toggle */}
                                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                                        <input
                                            type="checkbox"
                                            id="featured-checkbox"
                                            checked={formState.isFeatured}
                                            onChange={(e) => setFormState({ ...formState, isFeatured: e.target.checked })}
                                            className="w-4 h-4 rounded text-blue-500 focus:ring-0 bg-slate-800 border-slate-700"
                                        />
                                        <label htmlFor="featured-checkbox" className="text-white font-semibold cursor-pointer">
                                            Feature in Homepage &amp; Top Portfolio Showcase
                                        </label>
                                    </div>
                                </div>
                            )}

                            {/* TAB 2: OVERVIEW, PROBLEM & SOLUTION */}
                            {activeTab === 'story' && (
                                <div className="space-y-6">
                                    {/* Section 2: Project Overview */}
                                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                                        <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                                            <Target className="w-4 h-4" />
                                            <span>Section 2: Project Overview</span>
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Overview Section Heading</label>
                                            <input
                                                type="text"
                                                value={formState.overviewHeading}
                                                onChange={(e) => setFormState({ ...formState, overviewHeading: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="Project Overview"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">
                                                Overview Content
                                                <span className="text-slate-500 font-normal ml-2">
                                                    (Rendered in the Project Overview section and on /our-work portfolio cards)
                                                </span>
                                            </label>
                                            <textarea
                                                rows={5}
                                                value={formState.overview}
                                                onChange={(e) => setFormState({ ...formState, overview: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="Describe the client's business context, background, and high-level project goals..."
                                            />
                                        </div>
                                    </div>

                                    {/* Section 3: The Problem */}
                                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                                        <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                                            <Target className="w-4 h-4" />
                                            <span>Section 3: The Problem</span>
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">The Problem Section Heading</label>
                                            <input
                                                type="text"
                                                value={formState.problemHeading}
                                                onChange={(e) => setFormState({ ...formState, problemHeading: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="The Problem"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">The Problem Content</label>
                                            <textarea
                                                rows={4}
                                                value={formState.problem}
                                                onChange={(e) => setFormState({ ...formState, problem: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="What bottlenecks, legacy architecture, or operational challenges was the client facing?"
                                            />
                                        </div>
                                    </div>

                                    {/* Section 4: The Solution */}
                                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                                        <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                                            <CheckCircle className="w-4 h-4" />
                                            <span>Section 4: The Solution</span>
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">The Solution Section Heading</label>
                                            <input
                                                type="text"
                                                value={formState.solutionHeading}
                                                onChange={(e) => setFormState({ ...formState, solutionHeading: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="The Solution"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">The Solution Content</label>
                                            <textarea
                                                rows={4}
                                                value={formState.solution}
                                                onChange={(e) => setFormState({ ...formState, solution: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="How did REINSOFT engineer, design, and deploy the solution to resolve the problem?"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB 3: CORE CAPABILITIES */}
                            {activeTab === 'capabilities' && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                                        <div>
                                            <h3 className="text-sm font-bold text-white flex items-center gap-2">
                                                <Layers className="w-4 h-4 text-cyan-400" />
                                                Core Capabilities List
                                            </h3>
                                            <p className="text-[11px] text-slate-400">
                                                Rendered on the public page with numbered gradient accents and icons.
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleAddFeature}
                                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                            <span>Add Capability</span>
                                        </button>
                                    </div>

                                    {formState.features.length === 0 ? (
                                        <div className="p-8 text-center rounded-xl bg-slate-900/50 border border-dashed border-slate-800 text-slate-500">
                                            No capabilities added yet. Click &quot;Add Capability&quot; above to add one.
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            {formState.features.map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 relative group"
                                                >
                                                    <div className="flex items-center justify-between gap-3">
                                                        <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-xs">
                                                            {idx + 1}
                                                        </span>
                                                        <input
                                                            type="text"
                                                            value={feature.title || ''}
                                                            onChange={(e) => handleUpdateFeature(idx, 'title', e.target.value)}
                                                            className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-bold focus:outline-none focus:border-blue-500/50"
                                                            placeholder="Capability Title (e.g. Advanced Search & Filtering)"
                                                        />
                                                        <select
                                                            value={feature.icon || 'Layers'}
                                                            onChange={(e) => handleUpdateFeature(idx, 'icon', e.target.value)}
                                                            className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none focus:border-blue-500/50"
                                                        >
                                                            {AVAILABLE_ICONS.map((icon) => (
                                                                <option key={icon} value={icon}>
                                                                    {icon}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <div className="flex items-center gap-1">
                                                            <button
                                                                type="button"
                                                                onClick={() => moveItem('features', idx, -1)}
                                                                disabled={idx === 0}
                                                                className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                                                                title="Move Up"
                                                            >
                                                                <ChevronUp className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => moveItem('features', idx, 1)}
                                                                disabled={idx === formState.features.length - 1}
                                                                className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                                                                title="Move Down"
                                                            >
                                                                <ChevronDown className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveFeature(idx)}
                                                                className="p-1 text-slate-400 hover:text-red-400 ml-1"
                                                                title="Remove"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-slate-400 text-[10px] uppercase font-semibold mb-1">
                                                            Optional Description
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={feature.description || ''}
                                                            onChange={(e) => handleUpdateFeature(idx, 'description', e.target.value)}
                                                            className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-blue-500/50"
                                                            placeholder="Short summary of this capability..."
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-slate-400 text-[10px] uppercase font-semibold mb-1">
                                                            Bullet Points (one per line)
                                                        </label>
                                                        <textarea
                                                            rows={2}
                                                            value={Array.isArray(feature.points) ? feature.points.join('\n') : ''}
                                                            onChange={(e) =>
                                                                handleUpdateFeature(
                                                                    idx,
                                                                    'points',
                                                                    e.target.value
                                                                        .split('\n')
                                                                        .map((p) => p.trim())
                                                                        .filter(Boolean)
                                                                )
                                                            }
                                                            className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-blue-500/50"
                                                            placeholder="Instant results&#10;Multi-attribute filtering&#10;Elasticsearch indexing"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* TAB 4: OUR METHODOLOGY */}
                            {activeTab === 'methodology' && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                                        <div>
                                            <h3 className="text-sm font-bold text-white flex items-center gap-2">
                                                <Target className="w-4 h-4 text-orange-400" />
                                                Our Methodology (Project Stages)
                                            </h3>
                                            <p className="text-[11px] text-slate-400">
                                                Structured roadmap phases (e.g. Research, UI/UX Design, Development, Testing, Deployment).
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleAddStage}
                                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                            <span>Add Stage</span>
                                        </button>
                                    </div>

                                    {formState.processStages.length === 0 ? (
                                        <div className="p-8 text-center rounded-xl bg-slate-900/50 border border-dashed border-slate-800 text-slate-500">
                                            No stages added yet. Click &quot;Add Stage&quot; above to add one.
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            {formState.processStages.map((step, idx) => (
                                                <div
                                                    key={idx}
                                                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 relative group"
                                                >
                                                    <div className="flex items-center justify-between gap-3">
                                                        <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center font-bold text-xs">
                                                            {idx + 1}
                                                        </span>
                                                        <input
                                                            type="text"
                                                            value={step.stage || step.title || ''}
                                                            onChange={(e) => handleUpdateStage(idx, 'stage', e.target.value)}
                                                            className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-bold focus:outline-none focus:border-blue-500/50"
                                                            placeholder="Stage Name (e.g. UI/UX Design, Development)"
                                                        />
                                                        <select
                                                            value={step.icon || 'Layout'}
                                                            onChange={(e) => handleUpdateStage(idx, 'icon', e.target.value)}
                                                            className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none focus:border-blue-500/50"
                                                        >
                                                            {AVAILABLE_ICONS.map((icon) => (
                                                                <option key={icon} value={icon}>
                                                                    {icon}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <div className="flex items-center gap-1">
                                                            <button
                                                                type="button"
                                                                onClick={() => moveItem('processStages', idx, -1)}
                                                                disabled={idx === 0}
                                                                className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                                                                title="Move Up"
                                                            >
                                                                <ChevronUp className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => moveItem('processStages', idx, 1)}
                                                                disabled={idx === formState.processStages.length - 1}
                                                                className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                                                                title="Move Down"
                                                            >
                                                                <ChevronDown className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveStage(idx)}
                                                                className="p-1 text-slate-400 hover:text-red-400 ml-1"
                                                                title="Remove"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-slate-400 text-[10px] uppercase font-semibold mb-1">
                                                            Stage Description
                                                        </label>
                                                        <textarea
                                                            rows={2}
                                                            value={step.description || ''}
                                                            onChange={(e) => handleUpdateStage(idx, 'description', e.target.value)}
                                                            className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-blue-500/50"
                                                            placeholder="Narrative summary of work conducted in this stage..."
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-slate-400 text-[10px] uppercase font-semibold mb-1">
                                                            Milestones / Deliverable Points (one per line)
                                                        </label>
                                                        <textarea
                                                            rows={2}
                                                            value={Array.isArray(step.points) ? step.points.join('\n') : ''}
                                                            onChange={(e) =>
                                                                handleUpdateStage(
                                                                    idx,
                                                                    'points',
                                                                    e.target.value
                                                                        .split('\n')
                                                                        .map((p) => p.trim())
                                                                        .filter(Boolean)
                                                                )
                                                            }
                                                            className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-blue-500/50"
                                                            placeholder="Wireframing&#10;Design System Architecture&#10;Interactive Prototyping"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* TAB 5: THE OUTCOME (RESULTS) */}
                            {activeTab === 'outcomes' && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                                        <div>
                                            <h3 className="text-sm font-bold text-white flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-emerald-400" />
                                                The Outcome (Metric Cards)
                                            </h3>
                                            <p className="text-[11px] text-slate-400">
                                                Highlighted metrics (e.g. +35% Conversion Rate, 2x Mobile Sales, &lt; 1.2s Load Time, -40% Cart Abandonment).
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleAddResult}
                                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                            <span>Add Metric Card</span>
                                        </button>
                                    </div>

                                    {formState.results.length === 0 ? (
                                        <div className="p-8 text-center rounded-xl bg-slate-900/50 border border-dashed border-slate-800 text-slate-500">
                                            No outcome metrics added yet. Click &quot;Add Metric Card&quot; above to add one.
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {formState.results.map((res, idx) => (
                                                <div
                                                    key={idx}
                                                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 relative group"
                                                >
                                                    <div className="flex items-center justify-between gap-2">
                                                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-[10px]">
                                                            {idx + 1}
                                                        </span>
                                                        <div className="flex items-center gap-1 ml-auto">
                                                            <button
                                                                type="button"
                                                                onClick={() => moveItem('results', idx, -1)}
                                                                disabled={idx === 0}
                                                                className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                                                                title="Move Up"
                                                            >
                                                                <ChevronUp className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => moveItem('results', idx, 1)}
                                                                disabled={idx === formState.results.length - 1}
                                                                className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                                                                title="Move Down"
                                                            >
                                                                <ChevronDown className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveResult(idx)}
                                                                className="p-1 text-slate-400 hover:text-red-400 ml-1"
                                                                title="Remove"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div>
                                                            <label className="block text-slate-400 text-[10px] uppercase font-semibold mb-1">
                                                                Value *
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={res.value || ''}
                                                                onChange={(e) => handleUpdateResult(idx, 'value', e.target.value)}
                                                                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400 font-extrabold focus:outline-none focus:border-blue-500/50"
                                                                placeholder="+35% or < 1.2s"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-slate-400 text-[10px] uppercase font-semibold mb-1">
                                                                Metric Label *
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={res.metric || res.label || ''}
                                                                onChange={(e) => handleUpdateResult(idx, 'metric', e.target.value)}
                                                                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-semibold focus:outline-none focus:border-blue-500/50"
                                                                placeholder="Conversion Rate"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-slate-400 text-[10px] uppercase font-semibold mb-1">
                                                            Optional Description / Context
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={res.description || ''}
                                                            onChange={(e) => handleUpdateResult(idx, 'description', e.target.value)}
                                                            className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none focus:border-blue-500/50"
                                                            placeholder="e.g. Measured 90 days post-launch vs baseline"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* TAB 6: FINAL CTA & SEO */}
                            {activeTab === 'cta' && (
                                <div className="space-y-6">
                                    {/* Final CTA Controls */}
                                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-4">
                                        <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                                            <Sparkles className="w-4 h-4" />
                                            <span>Section 8: Final Call to Action</span>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-slate-300 mb-1 font-semibold">CTA Heading</label>
                                                <input
                                                    type="text"
                                                    value={formState.ctaTitle}
                                                    onChange={(e) => setFormState({ ...formState, ctaTitle: e.target.value })}
                                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                    placeholder="Ready to achieve similar results?"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-slate-300 mb-1 font-semibold">Button Text</label>
                                                <input
                                                    type="text"
                                                    value={formState.ctaButtonText}
                                                    onChange={(e) => setFormState({ ...formState, ctaButtonText: e.target.value })}
                                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                    placeholder="Start Your Project"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Button Destination URL</label>
                                            <input
                                                type="text"
                                                value={formState.ctaButtonUrl}
                                                onChange={(e) => setFormState({ ...formState, ctaButtonUrl: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-blue-500/50"
                                                placeholder="/#contact or /contact"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">CTA Description Copy</label>
                                            <textarea
                                                rows={3}
                                                value={formState.ctaDescription}
                                                onChange={(e) => setFormState({ ...formState, ctaDescription: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="Let's discuss how we can bring your vision to life with a high-performance digital solution."
                                            />
                                        </div>
                                    </div>

                                    {/* SEO Meta Information */}
                                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                                        <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                                            <Globe className="w-4 h-4" />
                                            <span>SEO Metadata Overrides</span>
                                        </div>

                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">SEO Title Override</label>
                                            <input
                                                type="text"
                                                value={formState.seoTitle}
                                                onChange={(e) => setFormState({ ...formState, seoTitle: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="Defaults to Project Title if empty"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">SEO Meta Description Override</label>
                                            <textarea
                                                rows={2}
                                                value={formState.seoDescription}
                                                onChange={(e) => setFormState({ ...formState, seoDescription: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50"
                                                placeholder="Defaults to Short Description if empty"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Modal Footer Controls */}
                            <div className="flex items-center justify-between pt-4 border-t border-slate-800 shrink-0">
                                <span className="text-slate-500 text-[11px]">
                                    All sections persist to database and sync automatically with the public case study page.
                                </span>
                                <div className="flex items-center gap-3">
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
                                        className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-md shadow-blue-500/20 disabled:opacity-50"
                                    >
                                        <Save className="w-4 h-4" />
                                        <span>{isSaving ? 'Saving to Database...' : 'Save Case Study'}</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
