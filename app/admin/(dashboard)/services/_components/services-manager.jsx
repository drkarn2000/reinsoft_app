'use client';

import React, { useState } from 'react';
import {
    Briefcase,
    Save,
    ExternalLink,
    Plus,
    Trash2,
    CheckCircle2,
    HelpCircle,
    ListOrdered,
    Layers,
    Sparkles,
    ChevronRight,
    Search,
    Globe,
    ArrowUpRight,
} from 'lucide-react';
import { useToast } from '@/app/admin/_components/toast-context';

export default function ServicesManagerClient({ initialServices }) {
    const { showToast } = useToast();

    const [services, setServices] = useState(initialServices || []);
    const [selectedService, setSelectedService] = useState(initialServices[0] || null);
    const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'deliverables' | 'process' | 'faqs' | 'seo'
    const [searchQuery, setSearchQuery] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    // Find or build initial content from selected service section
    const deliverablesSection = selectedService?.sections?.find(
        (s) => s.sectionType === 'SERVICE_DELIVERABLES' || s.sectionType === 'SERVICE_HERO'
    );

    const initialContent = deliverablesSection?.content || {};

    const [formData, setFormData] = useState({
        // Page meta
        title: selectedService?.title || '',
        slug: selectedService?.slug || '',
        status: selectedService?.status || 'PUBLISHED',
        seoTitle: selectedService?.seoTitle || '',
        seoDescription: selectedService?.seoDescription || '',
        // Content payload
        eyebrow: initialContent.eyebrow || 'Specialized Engineering',
        headline: initialContent.headline || selectedService?.title || '',
        intro: initialContent.intro || '',
        heroImage: initialContent.heroImage || '/assets/Services1.jpg',
        primaryCta: initialContent.primaryCta || 'Get Free Consultation',
        heroPoints: Array.isArray(initialContent.heroPoints)
            ? initialContent.heroPoints
            : ['Architecture & Design', 'Modern Frontend & Backend', 'Security & Scale', 'Ongoing Support'],
        valueTitle: initialContent.valueTitle || 'Engineered for scalability and business growth.',
        valueText: initialContent.valueText || '',
        deliverables: Array.isArray(initialContent.deliverables)
            ? initialContent.deliverables
            : [{ title: 'Full Stack Implementation', description: 'Modern cloud-ready web applications and APIs.' }],
        process: Array.isArray(initialContent.process)
            ? initialContent.process
            : [
                  { title: 'Discovery & Architecture', description: 'Define scope, technical stack, and timeline.' },
                  { title: 'Sprint Delivery', description: 'Iterative milestones with transparent progress reviews.' },
                  { title: 'Deployment & Support', description: 'Production rollout with zero downtime and monitoring.' },
              ],
        faqs: Array.isArray(initialContent.faqs)
            ? initialContent.faqs
            : [{ question: 'What is the estimated delivery timeline?', answer: 'Typical MVPs take 4 to 8 weeks depending on scope.' }],
        ctaTitle: initialContent.ctaTitle || 'Ready to start your project?',
        ctaText: initialContent.ctaText || 'Reach out to discuss your requirements with our tech leads.',
    });

    // When selecting a different service
    const handleSelectService = (service) => {
        setSelectedService(service);
        const section = service.sections?.find(
            (s) => s.sectionType === 'SERVICE_DELIVERABLES' || s.sectionType === 'SERVICE_HERO'
        );
        const c = section?.content || {};

        setFormData({
            title: service.title || '',
            slug: service.slug || '',
            status: service.status || 'PUBLISHED',
            seoTitle: service.seoTitle || '',
            seoDescription: service.seoDescription || '',
            eyebrow: c.eyebrow || 'Specialized Engineering',
            headline: c.headline || service.title || '',
            intro: c.intro || '',
            heroImage: c.heroImage || '/assets/Services1.jpg',
            primaryCta: c.primaryCta || 'Get Free Consultation',
            heroPoints: Array.isArray(c.heroPoints) ? c.heroPoints : ['Discovery & Planning', 'Development', 'QA & Delivery'],
            valueTitle: c.valueTitle || 'Engineered for scalability and business growth.',
            valueText: c.valueText || '',
            deliverables: Array.isArray(c.deliverables) ? c.deliverables : [{ title: 'Core Implementation', description: 'Tailored to your needs.' }],
            process: Array.isArray(c.process) ? c.process : [{ title: 'Stage 1', description: 'Initial review.' }],
            faqs: Array.isArray(c.faqs) ? c.faqs : [{ question: 'How do we get started?', answer: 'Send us your requirements.' }],
            ctaTitle: c.ctaTitle || 'Ready to start your project?',
            ctaText: c.ctaText || 'Reach out to discuss your requirements with our tech leads.',
        });
    };

    // Save Service (Updates Page & Upserts Section)
    const handleSave = async (e) => {
        e.preventDefault();
        if (!selectedService) return;
        setIsSaving(true);

        try {
            // 1. Update Page metadata & SEO
            const pageRes = await fetch(`/api/admin/pages/${selectedService.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: formData.title,
                    slug: formData.slug,
                    status: formData.status,
                    seoTitle: formData.seoTitle,
                    seoDescription: formData.seoDescription,
                }),
            });
            const pageData = await pageRes.json();
            if (!pageRes.ok) throw new Error(pageData.error || 'Failed to update service page');

            // 2. Upsert Service Deliverables section
            const contentPayload = {
                title: formData.title,
                eyebrow: formData.eyebrow,
                headline: formData.headline,
                intro: formData.intro,
                heroImage: formData.heroImage,
                primaryCta: formData.primaryCta,
                heroPoints: formData.heroPoints,
                valueTitle: formData.valueTitle,
                valueText: formData.valueText,
                deliverables: formData.deliverables,
                process: formData.process,
                faqs: formData.faqs,
                ctaTitle: formData.ctaTitle,
                ctaText: formData.ctaText,
            };

            const existingSection = selectedService.sections?.find(
                (s) => s.sectionType === 'SERVICE_DELIVERABLES'
            );

            if (existingSection) {
                const secRes = await fetch(`/api/admin/sections/${existingSection.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ content: contentPayload }),
                });
                if (!secRes.ok) throw new Error('Failed to update service section');
            } else {
                const createSecRes = await fetch('/api/admin/sections', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        pageId: selectedService.id,
                        sectionType: 'SERVICE_DELIVERABLES',
                        name: `${formData.title} Deliverables`,
                        content: contentPayload,
                    }),
                });
                if (!createSecRes.ok) throw new Error('Failed to create service section');
            }

            // Update local state
            setServices((prev) =>
                prev.map((s) => (s.id === selectedService.id ? { ...s, ...pageData.page } : s))
            );
            showToast(`Service "${formData.title}" saved successfully!`, 'success');
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    // Helper functions for array fields
    const addDeliverable = () => {
        setFormData({
            ...formData,
            deliverables: [...formData.deliverables, { title: 'New Deliverable', description: 'Description here.' }],
        });
    };

    const removeDeliverable = (index) => {
        setFormData({
            ...formData,
            deliverables: formData.deliverables.filter((_, i) => i !== index),
        });
    };

    const addProcessStep = () => {
        setFormData({
            ...formData,
            process: [...formData.process, { title: 'New Process Step', description: 'Process description.' }],
        });
    };

    const removeProcessStep = (index) => {
        setFormData({
            ...formData,
            process: formData.process.filter((_, i) => i !== index),
        });
    };

    const addFaq = () => {
        setFormData({
            ...formData,
            faqs: [...formData.faqs, { question: 'New Question?', answer: 'Answer details.' }],
        });
    };

    const removeFaq = (index) => {
        setFormData({
            ...formData,
            faqs: formData.faqs.filter((_, i) => i !== index),
        });
    };

    const filteredServices = services.filter((s) =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.slug.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <Briefcase className="w-6 h-6 text-amber-400" />
                        Services Engine
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Manage detailed service offerings, process steps, deliverables, FAQs, and value propositions.
                    </p>
                </div>

                {selectedService && (
                    <div className="flex items-center gap-2">
                        <a
                            href={`/${selectedService.slug}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                        >
                            <span>Preview Service Page</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-amber-500/20 disabled:opacity-50 transition-all"
                        >
                            <Save className="w-4 h-4" />
                            <span>{isSaving ? 'Saving...' : 'Save All Changes'}</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Split layout: Services list on left, Editor tabs on right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Services list */}
                <div className="lg:col-span-4 space-y-3">
                    <div className="p-4 rounded-2xl bg-[#121622] border border-slate-800 space-y-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Select Service ({filteredServices.length})
                        </span>

                        <div className="relative">
                            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Filter services..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                            />
                        </div>

                        <div className="space-y-1.5 max-h-[550px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
                            {filteredServices.map((service) => {
                                const isCurrent = service.id === selectedService?.id;
                                return (
                                    <button
                                        key={service.id}
                                        onClick={() => handleSelectService(service)}
                                        className={`w-full text-left p-3 rounded-xl text-xs transition-all flex items-center justify-between group ${
                                            isCurrent
                                                ? 'bg-amber-500/15 border border-amber-500/40 text-amber-400 font-semibold'
                                                : 'bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800/60 text-slate-300'
                                        }`}
                                    >
                                        <div className="min-w-0 pr-2">
                                            <p className="truncate font-semibold text-white">{service.title}</p>
                                            <p className="text-[10px] text-slate-500 font-mono truncate">
                                                /{service.slug}
                                            </p>
                                        </div>
                                        <ChevronRight className={`w-4 h-4 shrink-0 ${isCurrent ? 'text-amber-400' : 'text-slate-600'}`} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Editor Content Area */}
                <div className="lg:col-span-8 space-y-4">
                    {selectedService ? (
                        <div className="p-5 sm:p-6 rounded-2xl bg-[#121622] border border-slate-800 space-y-5">
                            {/* Tabs navigation */}
                            <div className="flex flex-wrap gap-2 pb-3 border-b border-slate-800 text-xs font-semibold">
                                {[
                                    { id: 'overview', label: 'Hero & Overview', icon: Sparkles },
                                    { id: 'deliverables', label: 'Deliverables', icon: Layers },
                                    { id: 'process', label: 'Process Steps', icon: ListOrdered },
                                    { id: 'faqs', label: 'Service FAQs', icon: HelpCircle },
                                    { id: 'seo', label: 'SEO & Meta', icon: Globe },
                                ].map((tab) => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            type="button"
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                                                isActive
                                                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                                                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                                            }`}
                                        >
                                            <Icon className="w-3.5 h-3.5" />
                                            <span>{tab.label}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Tab 1: Hero & Overview */}
                            {activeTab === 'overview' && (
                                <div className="space-y-4 text-xs">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Service Name</label>
                                            <input
                                                type="text"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-amber-500/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Eyebrow / Badge</label>
                                            <input
                                                type="text"
                                                value={formData.eyebrow}
                                                onChange={(e) => setFormData({ ...formData, eyebrow: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-amber-500/50"
                                                placeholder="e.g. Agency Delivery Partner"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 mb-1 font-semibold">Hero Headline</label>
                                        <input
                                            type="text"
                                            value={formData.headline}
                                            onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-amber-500/50"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 mb-1 font-semibold">Service Intro Narrative</label>
                                        <textarea
                                            rows={3}
                                            value={formData.intro}
                                            onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-amber-500/50"
                                            placeholder="Detailed description of the service and value proposition..."
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Hero Image Asset Path</label>
                                            <input
                                                type="text"
                                                value={formData.heroImage}
                                                onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono focus:outline-none focus:border-amber-500/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Primary CTA Button Text</label>
                                            <input
                                                type="text"
                                                value={formData.primaryCta}
                                                onChange={(e) => setFormData({ ...formData, primaryCta: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-amber-500/50"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Tab 2: Deliverables */}
                            {activeTab === 'deliverables' && (
                                <div className="space-y-4 text-xs">
                                    <div className="flex items-center justify-between">
                                        <p className="text-slate-400">Core deliverables provided under this service.</p>
                                        <button
                                            type="button"
                                            onClick={addDeliverable}
                                            className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 font-semibold flex items-center gap-1"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                            <span>Add Deliverable</span>
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        {formData.deliverables.map((del, index) => (
                                            <div
                                                key={index}
                                                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-bold text-amber-400 text-[11px]">
                                                        Deliverable #{index + 1}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeDeliverable(index)}
                                                        className="text-slate-500 hover:text-red-400"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    value={del.title}
                                                    onChange={(e) => {
                                                        const updated = [...formData.deliverables];
                                                        updated[index].title = e.target.value;
                                                        setFormData({ ...formData, deliverables: updated });
                                                    }}
                                                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-semibold focus:outline-none"
                                                    placeholder="Deliverable Title (e.g. Frontend Implementation)"
                                                />
                                                <textarea
                                                    rows={2}
                                                    value={del.description}
                                                    onChange={(e) => {
                                                        const updated = [...formData.deliverables];
                                                        updated[index].description = e.target.value;
                                                        setFormData({ ...formData, deliverables: updated });
                                                    }}
                                                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none"
                                                    placeholder="Detailed description..."
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tab 3: Process Steps */}
                            {activeTab === 'process' && (
                                <div className="space-y-4 text-xs">
                                    <div className="flex items-center justify-between">
                                        <p className="text-slate-400">Step-by-step development process workflow.</p>
                                        <button
                                            type="button"
                                            onClick={addProcessStep}
                                            className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 font-semibold flex items-center gap-1"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                            <span>Add Step</span>
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        {formData.process.map((step, index) => (
                                            <div
                                                key={index}
                                                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-bold text-amber-400 text-[11px]">
                                                        Step {index + 1}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeProcessStep(index)}
                                                        className="text-slate-500 hover:text-red-400"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    value={step.title}
                                                    onChange={(e) => {
                                                        const updated = [...formData.process];
                                                        updated[index].title = e.target.value;
                                                        setFormData({ ...formData, process: updated });
                                                    }}
                                                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-semibold focus:outline-none"
                                                    placeholder="Step Title (e.g. Fit Check, Scope Alignment)"
                                                />
                                                <textarea
                                                    rows={2}
                                                    value={step.description}
                                                    onChange={(e) => {
                                                        const updated = [...formData.process];
                                                        updated[index].description = e.target.value;
                                                        setFormData({ ...formData, process: updated });
                                                    }}
                                                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none"
                                                    placeholder="Step explanation..."
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tab 4: Service FAQs */}
                            {activeTab === 'faqs' && (
                                <div className="space-y-4 text-xs">
                                    <div className="flex items-center justify-between">
                                        <p className="text-slate-400">Frequently asked questions specific to this service.</p>
                                        <button
                                            type="button"
                                            onClick={addFaq}
                                            className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 font-semibold flex items-center gap-1"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                            <span>Add FAQ</span>
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        {formData.faqs.map((faq, index) => (
                                            <div
                                                key={index}
                                                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-bold text-amber-400 text-[11px]">
                                                        Question #{index + 1}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFaq(index)}
                                                        className="text-slate-500 hover:text-red-400"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    value={faq.question}
                                                    onChange={(e) => {
                                                        const updated = [...formData.faqs];
                                                        updated[index].question = e.target.value;
                                                        setFormData({ ...formData, faqs: updated });
                                                    }}
                                                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-semibold focus:outline-none"
                                                    placeholder="Question?"
                                                />
                                                <textarea
                                                    rows={2}
                                                    value={faq.answer}
                                                    onChange={(e) => {
                                                        const updated = [...formData.faqs];
                                                        updated[index].answer = e.target.value;
                                                        setFormData({ ...formData, faqs: updated });
                                                    }}
                                                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none"
                                                    placeholder="Detailed answer..."
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tab 5: SEO & Status */}
                            {activeTab === 'seo' && (
                                <div className="space-y-4 text-xs">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Publish Status</label>
                                            <select
                                                value={formData.status}
                                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none"
                                            >
                                                <option value="PUBLISHED">PUBLISHED</option>
                                                <option value="DRAFT">DRAFT</option>
                                                <option value="ARCHIVED">ARCHIVED</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-slate-300 mb-1 font-semibold">Custom SEO Title</label>
                                            <input
                                                type="text"
                                                value={formData.seoTitle}
                                                onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 mb-1 font-semibold">SEO Meta Description</label>
                                        <textarea
                                            rows={3}
                                            value={formData.seoDescription}
                                            onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="p-12 text-center rounded-2xl bg-[#121622] border border-slate-800 text-slate-400 text-sm">
                            <Briefcase className="w-12 h-12 mx-auto mb-3 text-slate-600" />
                            <p className="font-semibold text-white">No Service Selected</p>
                            <p className="text-xs text-slate-500 mt-1">Select a service page on the left to edit its offerings.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
