'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, UserIcon, MessageSquareIcon, ClockIcon, Loader2Icon, Trash2Icon } from 'lucide-react';

export default function SubmissionsDashboard() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/submissions');
            const data = await res.json();
            if (data.success) {
                setSubmissions(data.data);
            } else {
                setError(data.error || 'Failed to load submissions');
            }
        } catch (err) {
            setError('An error occurred while fetching submissions');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12 pt-24 md:pt-32 relative overflow-hidden">
            {/* Background blobs */}
            <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute rounded-full top-20 left-1/4 size-96 bg-[#D10A8A] blur-[150px] opacity-20" />
                <div className="absolute rounded-full bottom-20 right-1/4 size-96 bg-[#2E08CF] blur-[150px] opacity-20" />
            </div>

            <div className="max-w-6xl mx-auto">
                <header className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#ff7a18] bg-clip-text text-transparent"
                    >
                        Form Submissions
                    </motion.h1>
                    <p className="text-gray-400 mt-2">Manage and view all inquiries from your website contact form.</p>
                </header>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2Icon className="size-12 animate-spin text-blue-500 mb-4" />
                        <p className="text-gray-400">Loading submissions...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-xl text-center">
                        <p className="text-red-400">{error}</p>
                        <button
                            onClick={fetchSubmissions}
                            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium"
                        >
                            Retry
                        </button>
                    </div>
                ) : submissions.length === 0 ? (
                    <div className="glass global-orange-glow p-20 rounded-2xl text-center">
                        <MessageSquareIcon className="size-16 mx-auto text-gray-600 mb-6" />
                        <h2 className="text-2xl font-semibold mb-2">No submissions yet</h2>
                        <p className="text-gray-400">When people fill out your contact form, they will appear here.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {submissions.map((submission, index) => (
                            <motion.div
                                key={submission._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass global-orange-glow p-6 rounded-2xl flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="size-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                                            {submission.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg leading-tight">{submission.name}</h3>
                                            <p className="text-xs text-gray-500 flex items-center gap-1">
                                                <ClockIcon className="size-3" />
                                                {new Date(submission.createdAt).toLocaleDateString()} at {new Date(submission.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-6 text-sm text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <MailIcon className="size-4 text-gray-500" />
                                            <a href={`mailto:${submission.email}`} className="hover:text-blue-400 transition underline underline-offset-4 decoration-gray-700">
                                                {submission.email}
                                            </a>
                                        </div>
                                        {submission.phone && (
                                            <div className="flex items-center gap-2">
                                                <PhoneIcon className="size-4 text-gray-500" />
                                                <a href={`tel:${submission.phone}`} className="hover:text-blue-400 transition">
                                                    {submission.phone}
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <p className="text-sm text-gray-400 italic">"{submission.message}"</p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                                    <button className="text-xs text-gray-500 hover:text-red-400 transition flex items-center gap-1">
                                        <Trash2Icon className="size-3.5" />
                                        Archive
                                    </button>
                                    <a
                                        href={`mailto:${submission.email}?subject=Regarding your inquiry&body=Hi ${submission.name},`}
                                        className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
                                    >
                                        Reply Now
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
