'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    FileText,
    Layers,
    Plus,
    Save,
    Trash2,
    MoveUp,
    MoveDown,
    ExternalLink,
    Check,
    AlertCircle,
    Eye,
    EyeOff,
    Edit3,
    Code,
    Sparkles,
    Search,
    Filter,
    ChevronDown,
    Globe,
    Settings,
    X,
} from 'lucide-react';
import { useToast } from '@/app/admin/_components/toast-context';

const SECTION_TYPES = [
    'HERO',
    'BRANDS_SLIDER',
    'TRUST_STRIP',
    'WHY_CHOOSE_US',
    'FEATURES_OVERVIEW',
    'WORKFLOW_STEPS',
    'PORTFOLIO_GRID',
    'TEAM_GRID',
    'FOUNDERS_STORY',
    'TESTIMONIALS_CAROUSEL',
    'FAQ_ACCORDION',
    'CALL_TO_ACTION',
    'INDUSTRIES_GRID',
    'ABOUT_HERO',
    'ABOUT_STORY',
    'ABOUT_VISION',
    'ABOUT_SERVICES',
    'ABOUT_TECH_STACK',
    'ABOUT_PROCESS',
    'SERVICE_HERO',
    'SERVICE_DELIVERABLES',
    'LOCATION_HERO',
    'HIRE_HERO',
    'HIRE_COMPARISON',
    'RICH_TEXT_LEGAL',
    'CUSTOM_JSON',
];

export default function PagesEditorClient({ initialPages, initialSelectedPage }) {
    const router = useRouter();
    const { showToast } = useToast();

    const [pages, setPages] = useState(initialPages || []);
    const [selectedPage, setSelectedPage] = useState(initialSelectedPage);
    const [selectedPageId, setSelectedPageId] = useState(initialSelectedPage?.id || '');
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('ALL');

    // Page metadata form
    const [pageForm, setPageForm] = useState({
        title: initialSelectedPage?.title || '',
        slug: initialSelectedPage?.slug || '',
        status: initialSelectedPage?.status || 'PUBLISHED',
        seoTitle: initialSelectedPage?.seoTitle || '',
        seoDescription: initialSelectedPage?.seoDescription || '',
        seoKeywords: initialSelectedPage?.seoKeywords || '',
        canonicalUrl: initialSelectedPage?.canonicalUrl || '',
    });
    const [isSavingPage, setIsSavingPage] = useState(false);

    // Section Editor State
    const [editingSection, setEditingSection] = useState(null);
    const [jsonMode, setJsonMode] = useState(false);
    const [jsonContent, setJsonContent] = useState('{}');
    const [jsonError, setJsonError] = useState(null);
    const [isSavingSection, setIsSavingSection] = useState(false);

    // New Section Modal State
    const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
    const [newSectionType, setNewSectionType] = useState('HERO');
    const [newSectionName, setNewSectionName] = useState('');
    const [isAddingSection, setIsAddingSection] = useState(false);

    // Switch selected page
    const handleSelectPage = async (pageId) => {
        try {
            setSelectedPageId(pageId);
            setEditingSection(null);
            const res = await fetch(`/api/admin/pages/${pageId}`);
            if (!res.ok) throw new Error('Failed to load page data');
            const data = await res.json();
            setSelectedPage(data.page);
            setPageForm({
                title: data.page.title || '',
                slug: data.page.slug || '',
                status: data.page.status || 'PUBLISHED',
                seoTitle: data.page.seoTitle || '',
                seoDescription: data.page.seoDescription || '',
                seoKeywords: data.page.seoKeywords || '',
                canonicalUrl: data.page.canonicalUrl || '',
            });
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    // Save Page Metadata
    const handleSavePageMeta = async (e) => {
        e.preventDefault();
        if (!selectedPage) return;
        setIsSavingPage(true);
        try {
            const res = await fetch(`/api/admin/pages/${selectedPage.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(pageForm),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to update page');

            setSelectedPage((prev) => ({ ...prev, ...data.page }));
            setPages((prev) =>
                prev.map((p) => (p.id === data.page.id ? { ...p, title: data.page.title, slug: data.page.slug, status: data.page.status } : p))
            );
            showToast('Page details saved successfully!', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsSavingPage(false);
        }
    };

    // Open Section Editor
    const handleStartEditSection = (section) => {
        setEditingSection(section);
        const contentStr = JSON.stringify(section.content || {}, null, 2);
        setJsonContent(contentStr);
        setJsonError(null);
    };

    // Save Section
    const handleSaveSection = async () => {
        if (!editingSection) return;
        setIsSavingSection(true);
        setJsonError(null);

        let finalContent = editingSection.content;
        if (jsonMode) {
            try {
                finalContent = JSON.parse(jsonContent);
            } catch (err) {
                setJsonError('Invalid JSON format: ' + err.message);
                setIsSavingSection(false);
                return;
            }
        }

        try {
            const res = await fetch(`/api/admin/sections/${editingSection.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: editingSection.name,
                    isEnabled: editingSection.isEnabled,
                    sectionType: editingSection.sectionType,
                    content: finalContent,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save section');

            // Update in local state
            setSelectedPage((prev) => ({
                ...prev,
                sections: prev.sections.map((s) => (s.id === data.section.id ? data.section : s)),
            }));
            setEditingSection(data.section);
            showToast(`Section "${data.section.name}" saved!`, 'success');
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsSavingSection(false);
        }
    };

    // Toggle Section Enabled
    const handleToggleEnabled = async (section) => {
        try {
            const newStatus = !section.isEnabled;
            const res = await fetch(`/api/admin/sections/${section.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isEnabled: newStatus }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to toggle status');

            setSelectedPage((prev) => ({
                ...prev,
                sections: prev.sections.map((s) => (s.id === section.id ? { ...s, isEnabled: newStatus } : s)),
            }));
            if (editingSection?.id === section.id) {
                setEditingSection((prev) => ({ ...prev, isEnabled: newStatus }));
            }
            showToast(`Section ${newStatus ? 'enabled' : 'disabled'}`, 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    // Reorder Section (Move Up / Down)
    const handleMoveSection = async (index, direction) => {
        if (!selectedPage?.sections) return;
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= selectedPage.sections.length) return;

        const newSections = [...selectedPage.sections];
        const [moved] = newSections.splice(index, 1);
        newSections.splice(targetIndex, 0, moved);

        // Optimistically update
        setSelectedPage((prev) => ({ ...prev, sections: newSections }));

        try {
            const orderedIds = newSections.map((s) => s.id);
            const res = await fetch('/api/admin/sections', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderedIds }),
            });
            if (!res.ok) throw new Error('Failed to update sort order');
            showToast('Sections reordered', 'success');
        } catch (err) {
            showToast(err.message, 'error');
            // Revert by re-fetching
            handleSelectPage(selectedPage.id);
        }
    };

    // Delete Section
    const handleDeleteSection = async (sectionId, sectionName) => {
        if (!confirm(`Are you sure you want to delete section "${sectionName}"?`)) return;
        try {
            const res = await fetch(`/api/admin/sections/${sectionId}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete section');

            setSelectedPage((prev) => ({
                ...prev,
                sections: prev.sections.filter((s) => s.id !== sectionId),
            }));
            if (editingSection?.id === sectionId) {
                setEditingSection(null);
            }
            showToast('Section deleted', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    // Add New Section
    const handleCreateSection = async (e) => {
        e.preventDefault();
        if (!selectedPage) return;
        setIsAddingSection(true);
        try {
            const res = await fetch('/api/admin/sections', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    pageId: selectedPage.id,
                    sectionType: newSectionType,
                    name: newSectionName || `${newSectionType.replace(/_/g, ' ')}`,
                    content: {
                        title: 'New Section Title',
                        subtitle: 'Section description goes here.',
                    },
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to create section');

            setSelectedPage((prev) => ({
                ...prev,
                sections: [...(prev.sections || []), data.section],
            }));
            setIsAddSectionOpen(false);
            setNewSectionName('');
            setEditingSection(data.section);
            showToast('New section added to page!', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsAddingSection(false);
        }
    };

    // Filter pages
    const filteredPages = pages.filter((p) => {
        const matchesType = filterType === 'ALL' || p.pageType === filterType;
        const matchesQuery =
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.slug.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesQuery;
    });

    const previewUrl = selectedPage?.slug === '' ? '/' : `/${selectedPage?.slug || ''}`;

    return (
        <div className="space-y-6">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <FileText className="w-6 h-6 text-orange-400" />
                        Pages &amp; Section Editor
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Select a page to edit its ordered sections, headlines, CTAs, and SEO metadata.
                    </p>
                </div>

                {selectedPage && (
                    <div className="flex items-center gap-2">
                        <a
                            href={previewUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                        >
                            <span>Preview Live Page</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                            onClick={() => setIsAddSectionOpen(true)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all shadow-md shadow-orange-500/20"
                        >
                            <Plus className="w-4 h-4" />
                            <span>Add Section</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Layout: Sidebar Page Selector + Main Section Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column: Pages List */}
                <div className="lg:col-span-4 space-y-4">
                    <div className="p-4 rounded-2xl bg-[#121622] border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                Select Page ({filteredPages.length})
                            </span>
                        </div>

                        {/* Search & Filter */}
                        <div className="space-y-2">
                            <div className="relative">
                                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    placeholder="Search pages..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50"
                                />
                            </div>

                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="w-full px-3 py-1.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-orange-500/50"
                            >
                                <option value="ALL">All Page Categories</option>
                                <option value="HOME">Homepage</option>
                                <option value="ABOUT">About Us</option>
                                <option value="SERVICES_HUB">Services Hub</option>
                                <option value="SERVICE_DETAIL">Service Detail Pages</option>
                                <option value="PORTFOLIO">Portfolio / Our Work</option>
                                <option value="LOCATION_LANDING">Location Landers</option>
                                <option value="HIRE_DEVELOPERS">Hire Developers Landers</option>
                                <option value="PPC_LANDING">PPC Landing Pages</option>
                                <option value="LEGAL">Legal Pages</option>
                            </select>
                        </div>

                        {/* Pages Scroll Area */}
                        <div className="max-h-[500px] overflow-y-auto space-y-1.5 pr-1 scrollbar-thin scrollbar-thumb-slate-800">
                            {filteredPages.map((page) => {
                                const isCurrent = page.id === selectedPageId;
                                return (
                                    <button
                                        key={page.id}
                                        onClick={() => handleSelectPage(page.id)}
                                        className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between group ${
                                            isCurrent
                                                ? 'bg-orange-500/15 border border-orange-500/40 text-orange-400 font-semibold'
                                                : 'bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800/60 text-slate-300'
                                        }`}
                                    >
                                        <div className="min-w-0 pr-2">
                                            <p className="truncate font-medium">{page.title}</p>
                                            <p className="text-[10px] text-slate-500 font-mono truncate">
                                                /{page.slug || ''}
                                            </p>
                                        </div>
                                        <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400">
                                            {page._count?.sections ?? 0} sec
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Column: Page Metadata & Ordered Sections */}
                <div className="lg:col-span-8 space-y-6">
                    {selectedPage ? (
                        <>
                            {/* Page Metadata Drawer/Card */}
                            <div className="p-5 rounded-2xl bg-[#121622] border border-slate-800 space-y-4">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <Globe className="w-4 h-4 text-orange-400" />
                                        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                                            Page Metadata &amp; SEO
                                        </h2>
                                    </div>
                                    <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        {pageForm.status}
                                    </span>
                                </div>

                                <form onSubmit={handleSavePageMeta} className="space-y-4 text-xs">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-slate-400 mb-1 font-medium">Page Title</label>
                                            <input
                                                type="text"
                                                value={pageForm.title}
                                                onChange={(e) => setPageForm({ ...pageForm, title: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-slate-400 mb-1 font-medium">
                                                Slug (URL Path)
                                            </label>
                                            <div className="flex items-center">
                                                <span className="px-2.5 py-2 bg-slate-800 text-slate-400 border border-r-0 border-slate-700/60 rounded-l-xl text-xs font-mono">
                                                    /
                                                </span>
                                                <input
                                                    type="text"
                                                    value={pageForm.slug}
                                                    onChange={(e) => setPageForm({ ...pageForm, slug: e.target.value })}
                                                    className="w-full px-3 py-2 rounded-r-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-orange-500/50"
                                                    placeholder="e.g. services/web-development"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-slate-400 mb-1 font-medium">SEO Title</label>
                                            <input
                                                type="text"
                                                value={pageForm.seoTitle}
                                                onChange={(e) => setPageForm({ ...pageForm, seoTitle: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                                placeholder="Custom SEO Title tag"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-slate-400 mb-1 font-medium">Status</label>
                                            <select
                                                value={pageForm.status}
                                                onChange={(e) => setPageForm({ ...pageForm, status: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                            >
                                                <option value="PUBLISHED">PUBLISHED</option>
                                                <option value="DRAFT">DRAFT</option>
                                                <option value="ARCHIVED">ARCHIVED</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-slate-400 mb-1 font-medium">
                                            SEO Meta Description
                                        </label>
                                        <textarea
                                            rows={2}
                                            value={pageForm.seoDescription}
                                            onChange={(e) => setPageForm({ ...pageForm, seoDescription: e.target.value })}
                                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                            placeholder="Page meta description for search engines..."
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={isSavingPage}
                                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors disabled:opacity-50"
                                        >
                                            <Save className="w-3.5 h-3.5" />
                                            <span>{isSavingPage ? 'Saving...' : 'Update Page Details'}</span>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Ordered Sections List */}
                            <div className="p-5 rounded-2xl bg-[#121622] border border-slate-800 space-y-4">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-orange-400" />
                                        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                                            Configured Sections ({selectedPage.sections?.length || 0})
                                        </h2>
                                    </div>
                                    <button
                                        onClick={() => setIsAddSectionOpen(true)}
                                        className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                                    >
                                        <Plus className="w-3.5 h-3.5" />
                                        <span>Add Section</span>
                                    </button>
                                </div>

                                {!selectedPage.sections || selectedPage.sections.length === 0 ? (
                                    <div className="text-center py-10 text-slate-500 text-xs">
                                        <Layers className="w-8 h-8 mx-auto mb-2 opacity-40" />
                                        <p>No sections configured on this page yet.</p>
                                        <button
                                            onClick={() => setIsAddSectionOpen(true)}
                                            className="mt-3 px-3 py-1.5 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 text-xs font-semibold inline-flex items-center gap-1"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                            <span>Add First Section</span>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        {selectedPage.sections.map((section, idx) => {
                                            const isEditing = editingSection?.id === section.id;
                                            return (
                                                <div
                                                    key={section.id}
                                                    className={`p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                                                        isEditing
                                                            ? 'bg-orange-500/10 border-orange-500/50 shadow-md'
                                                            : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex flex-col gap-0.5">
                                                            <button
                                                                onClick={() => handleMoveSection(idx, 'up')}
                                                                disabled={idx === 0}
                                                                className="p-1 text-slate-400 hover:text-white disabled:opacity-20 hover:bg-slate-800 rounded"
                                                                title="Move Up"
                                                            >
                                                                <MoveUp className="w-3 h-3" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleMoveSection(idx, 'down')}
                                                                disabled={idx === selectedPage.sections.length - 1}
                                                                className="p-1 text-slate-400 hover:text-white disabled:opacity-20 hover:bg-slate-800 rounded"
                                                                title="Move Down"
                                                            >
                                                                <MoveDown className="w-3 h-3" />
                                                            </button>
                                                        </div>

                                                        <span className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400 shrink-0">
                                                            {idx + 1}
                                                        </span>

                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-xs font-bold text-white">
                                                                    {section.name || section.sectionType}
                                                                </p>
                                                                <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-mono">
                                                                    {section.sectionType}
                                                                </span>
                                                            </div>
                                                            <p className="text-[10px] text-slate-500 truncate max-w-sm">
                                                                {section.content?.title || section.content?.subtitle || 'Custom configuration payload'}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-2 self-end sm:self-center">
                                                        <button
                                                            onClick={() => handleToggleEnabled(section)}
                                                            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                                                                section.isEnabled
                                                                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                                                                    : 'bg-slate-800 border-slate-700 text-slate-500'
                                                            }`}
                                                            title={section.isEnabled ? 'Disable section' : 'Enable section'}
                                                        >
                                                            {section.isEnabled ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                                                        </button>

                                                        <button
                                                            onClick={() => handleStartEditSection(section)}
                                                            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                                                                isEditing
                                                                    ? 'bg-orange-500 text-white border-orange-500'
                                                                    : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
                                                            }`}
                                                        >
                                                            <Edit3 className="w-3 h-3" />
                                                            <span>{isEditing ? 'Editing' : 'Edit'}</span>
                                                        </button>

                                                        <button
                                                            onClick={() => handleDeleteSection(section.id, section.name)}
                                                            className="p-1.5 rounded-lg hover:bg-red-500/20 text-slate-500 hover:text-red-400 transition-colors"
                                                            title="Delete section"
                                                        >
                                                            <Trash2 className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            {/* Section Content Editor Modal/Drawer */}
                            {editingSection && (
                                <div className="p-5 rounded-2xl bg-[#121622] border-2 border-orange-500/40 shadow-2xl space-y-4 animate-in fade-in duration-150">
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                                        <div className="flex items-center gap-2.5">
                                            <div className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400">
                                                <Edit3 className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-white">
                                                    Editing: {editingSection.name}
                                                </h3>
                                                <p className="text-[10px] text-slate-400 font-mono">
                                                    Type: {editingSection.sectionType}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    if (!jsonMode) {
                                                        setJsonContent(JSON.stringify(editingSection.content || {}, null, 2));
                                                    }
                                                    setJsonMode(!jsonMode);
                                                }}
                                                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-colors ${
                                                    jsonMode
                                                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                                                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                                                }`}
                                            >
                                                <Code className="w-3.5 h-3.5" />
                                                <span>{jsonMode ? 'Visual Form' : 'Raw JSON'}</span>
                                            </button>

                                            <button
                                                onClick={() => setEditingSection(null)}
                                                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Section Name & Type */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                        <div>
                                            <label className="block text-slate-400 mb-1 font-medium">Editorial Label</label>
                                            <input
                                                type="text"
                                                value={editingSection.name || ''}
                                                onChange={(e) =>
                                                    setEditingSection({ ...editingSection, name: e.target.value })
                                                }
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-400 mb-1 font-medium">Section Type</label>
                                            <select
                                                value={editingSection.sectionType}
                                                onChange={(e) =>
                                                    setEditingSection({ ...editingSection, sectionType: e.target.value })
                                                }
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                            >
                                                {SECTION_TYPES.map((type) => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Editor Body */}
                                    {jsonMode ? (
                                        <div className="space-y-2">
                                            <label className="block text-xs text-slate-400 font-medium">
                                                JSON Content Payload
                                            </label>
                                            <textarea
                                                rows={12}
                                                value={jsonContent}
                                                onChange={(e) => {
                                                    setJsonContent(e.target.value);
                                                    setJsonError(null);
                                                }}
                                                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-amber-300 font-mono text-xs focus:outline-none focus:border-orange-500/50"
                                            />
                                            {jsonError && (
                                                <p className="text-xs text-red-400 flex items-center gap-1">
                                                    <AlertCircle className="w-3.5 h-3.5" />
                                                    {jsonError}
                                                </p>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="space-y-3 text-xs">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-slate-400 mb-1 font-medium">Badge / Eyebrow</label>
                                                    <input
                                                        type="text"
                                                        value={editingSection.content?.badge || ''}
                                                        onChange={(e) =>
                                                            setEditingSection({
                                                                ...editingSection,
                                                                content: { ...editingSection.content, badge: e.target.value },
                                                            })
                                                        }
                                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                                        placeholder="e.g. 10+ Years Experience"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-slate-400 mb-1 font-medium">Section Heading</label>
                                                    <input
                                                        type="text"
                                                        value={editingSection.content?.title || ''}
                                                        onChange={(e) =>
                                                            setEditingSection({
                                                                ...editingSection,
                                                                content: { ...editingSection.content, title: e.target.value },
                                                            })
                                                        }
                                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                                        placeholder="Headline"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-slate-400 mb-1 font-medium">Subtitle / Body Copy</label>
                                                <textarea
                                                    rows={3}
                                                    value={editingSection.content?.subtitle || ''}
                                                    onChange={(e) =>
                                                        setEditingSection({
                                                            ...editingSection,
                                                            content: { ...editingSection.content, subtitle: e.target.value },
                                                        })
                                                    }
                                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                                    placeholder="Section description text..."
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-slate-400 mb-1 font-medium">Primary CTA Text</label>
                                                    <input
                                                        type="text"
                                                        value={editingSection.content?.ctaPrimaryText || ''}
                                                        onChange={(e) =>
                                                            setEditingSection({
                                                                ...editingSection,
                                                                content: { ...editingSection.content, ctaPrimaryText: e.target.value },
                                                            })
                                                        }
                                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                                        placeholder="Get Free Consultation"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-slate-400 mb-1 font-medium">Primary CTA Link</label>
                                                    <input
                                                        type="text"
                                                        value={editingSection.content?.ctaPrimaryLink || ''}
                                                        onChange={(e) =>
                                                            setEditingSection({
                                                                ...editingSection,
                                                                content: { ...editingSection.content, ctaPrimaryLink: e.target.value },
                                                            })
                                                        }
                                                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                                        placeholder="/contact"
                                                    />
                                                </div>
                                            </div>

                                            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                                                <div>
                                                    <p className="font-semibold text-white">Need nested arrays or deep configuration?</p>
                                                    <p className="text-slate-400 text-[11px]">
                                                        Switch to Raw JSON to edit custom arrays, cards, deliverables, and icons.
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setJsonContent(JSON.stringify(editingSection.content || {}, null, 2));
                                                        setJsonMode(true);
                                                    }}
                                                    className="px-2.5 py-1 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 text-xs font-semibold"
                                                >
                                                    Edit JSON
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Action buttons */}
                                    <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                                        <button
                                            type="button"
                                            onClick={() => setEditingSection(null)}
                                            className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleSaveSection}
                                            disabled={isSavingSection}
                                            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 disabled:opacity-50"
                                        >
                                            <Save className="w-3.5 h-3.5" />
                                            <span>{isSavingSection ? 'Saving to Database...' : 'Save Section'}</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="p-12 text-center rounded-2xl bg-[#121622] border border-slate-800 text-slate-400 text-sm">
                            <FileText className="w-12 h-12 mx-auto mb-3 text-slate-600" />
                            <p className="font-semibold text-white">No Page Selected</p>
                            <p className="text-xs text-slate-500 mt-1">Select a page from the list on the left to begin editing.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Add Section Modal */}
            {isAddSectionOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-md rounded-2xl bg-[#121622] border border-slate-800 p-6 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <h3 className="text-base font-bold text-white flex items-center gap-2">
                                <Plus className="w-4 h-4 text-orange-400" />
                                Add New Section to Page
                            </h3>
                            <button
                                onClick={() => setIsAddSectionOpen(false)}
                                className="p-1 text-slate-400 hover:text-white rounded-lg"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <form onSubmit={handleCreateSection} className="space-y-4 text-xs">
                            <div>
                                <label className="block text-slate-400 mb-1 font-medium">Section Type</label>
                                <select
                                    value={newSectionType}
                                    onChange={(e) => {
                                        setNewSectionType(e.target.value);
                                        if (!newSectionName) {
                                            setNewSectionName(e.target.value.replace(/_/g, ' '));
                                        }
                                    }}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                >
                                    {SECTION_TYPES.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-slate-400 mb-1 font-medium">Editorial Name / Title</label>
                                <input
                                    type="text"
                                    value={newSectionName}
                                    onChange={(e) => setNewSectionName(e.target.value)}
                                    placeholder="e.g. Hero Banner, Client Logos"
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-orange-500/50"
                                    required
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsAddSectionOpen(false)}
                                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isAddingSection}
                                    className="px-4 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-50"
                                >
                                    {isAddingSection ? 'Adding...' : 'Add Section'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
