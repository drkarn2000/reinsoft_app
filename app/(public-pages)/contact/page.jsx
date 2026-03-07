'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, MessageCircleIcon, Send } from "lucide-react";
import GradientButton from "@/components/gradient-button";

const FloatingInput = ({ label, id, name, value, onChange, type = "text", required = false }) => {
    const [isFocused, setIsFocused] = useState(false);
    const isFloating = isFocused || (value && value.length > 0);

    return (
        <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-[#ff7a18]/20 to-[#3b82f6]/20 rounded-xl blur-sm transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`relative bg-black/40 backdrop-blur-md border rounded-xl transition-all duration-300 ${isFocused ? 'border-[#ff7a18] shadow-[0_0_15px_rgba(255,122,24,0.2)]' : 'border-white/10'}`}>
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    className="block w-full px-4 py-4 text-white bg-transparent rounded-xl appearance-none focus:outline-none focus:ring-0 peer transition-all text-sm"
                    placeholder=" "
                />
                <label
                    htmlFor={id}
                    className={`absolute text-sm duration-300 transform origin-[0] left-4 transition-all pointer-events-none 
                    ${isFloating
                            ? 'text-[#ff7a18] -translate-y-2.5 scale-75 top-2.5 font-bold'
                            : 'text-gray-400 -translate-y-1/2 top-1/2 scale-100'
                        }`}
                >
                    {label} {required && '*'}
                </label>
            </div>
        </div>
    );
};

const FloatingTextarea = ({ label, id, name, value, onChange, required = false, rows = 4 }) => {
    const [isFocused, setIsFocused] = useState(false);
    const isFloating = isFocused || (value && value.length > 0);

    return (
        <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-[#ff7a18]/20 to-[#3b82f6]/20 rounded-2xl blur-sm transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`relative bg-black/40 backdrop-blur-md border rounded-2xl transition-all duration-300 ${isFocused ? 'border-[#ff7a18] shadow-[0_0_15px_rgba(255,122,24,0.2)]' : 'border-white/10'}`}>
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    rows={rows}
                    className="block w-full px-4 py-4 text-white bg-transparent rounded-2xl appearance-none focus:outline-none focus:ring-0 peer transition-all resize-none text-sm"
                    placeholder=" "
                />
                <label
                    htmlFor={id}
                    className={`absolute text-sm duration-300 transform origin-[0] left-4 transition-all pointer-events-none 
                    ${isFloating
                            ? 'text-[#ff7a18] -translate-y-2.5 scale-75 top-2.5 font-bold'
                            : 'text-gray-400 translate-y-4 top-0 scale-100'
                        }`}
                >
                    {label} {required && '*'}
                </label>
            </div>
        </div>
    );
};

const FloatingSelect = ({ label, id, name, value, onChange, options, required = false }) => {
    const [isFocused, setIsFocused] = useState(false);
    const isFloating = isFocused || (value && value.length > 0);

    return (
        <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-[#ff7a18]/20 to-[#3b82f6]/20 rounded-xl blur-sm transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`relative bg-black/40 backdrop-blur-md border rounded-xl transition-all duration-300 ${isFocused ? 'border-[#ff7a18] shadow-[0_0_15px_rgba(255,122,24,0.2)]' : 'border-white/10'}`}>
                <select
                    id={id}
                    name={name}
                    value={value || ""}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    className="block w-full px-4 py-4 text-white bg-transparent rounded-xl appearance-none focus:outline-none focus:ring-0 peer transition-all text-sm cursor-pointer"
                >
                    <option value="" disabled hidden></option>
                    {options.map((option) => (
                        <option key={option} value={option} className="bg-[#1a1231] text-white">
                            {option}
                        </option>
                    ))}
                </select>
                <label
                    htmlFor={id}
                    className={`absolute text-sm duration-300 transform origin-[0] left-4 transition-all pointer-events-none z-10 
                    ${isFloating
                            ? 'text-[#ff7a18] -translate-y-2.5 scale-75 top-2.5 font-bold'
                            : 'text-gray-400 -translate-y-1/2 top-1/2 scale-100'
                        }`}
                >
                    {label} {required && '*'}
                </label>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

function ContactFormContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const isQuoteType = type === 'quote';

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        enquiryType: '',
        budget: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        const submissionData = {
            ...formData,
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            companyName: formData.enquiryType,   // Back-compat
            inquiryType: isQuoteType ? 'Quote Request' : (formData.enquiryType || 'General Inquiry')
        };

        try {
            const response = await fetch('/api/contact-submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ firstName: '', lastName: '', email: '', phone: '', country: '', enquiryType: '', budget: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 60000);
            } else {
                const data = await response.json();
                setSubmitError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitError('Network error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="px-4">
            {/* Background Image & Overlays */}
            <div className="fixed inset-0 -z-30 pointer-events-none">
                <img
                    src="/assets/contact.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black z-10" />
            </div>

            {/* Hero Section */}
            <motion.section className="flex flex-col items-center pt-24 pb-12"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-center text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
                    {isQuoteType ? 'Get a Custom' : 'Contact'} <span className="bg-gradient-to-r from-[#ff7a18] via-[#e21b7a] to-[#3b82f6] bg-clip-text text-transparent">Project {isQuoteType ? 'Quote' : 'Reinsoft'}</span>
                </h1>
                <p className="text-center text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                    {isQuoteType
                        ? "Tell us about your vision. We'll provide a detailed roadmap, timeline, and accurate cost estimate for your next big project."
                        : "Ready to accelerate your business? Whether you have a specific project or just want to explore possibilities, we're here to help."
                    }
                </p>
            </motion.section>

            {/* Main Content Grid */}
            <section className="max-w-7xl mx-auto mb-24 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

                    {/* Sidebar */}
                    <motion.div
                        className="lg:col-span-5 flex"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex-grow p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group flex flex-col justify-between">
                            <div className="absolute -top-24 -right-24 size-48 bg-[#ff7a18]/20 blur-[60px] rounded-full group-hover:bg-[#ff7a18]/30 transition-colors duration-700" />

                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">Let's start the conversation</h2>
                                <p className="text-gray-400 mb-8 max-w-sm">
                                    Join 200+ companies that have scaled their digital footprint with Reinsoft expertise.
                                </p>

                                <div className="space-y-6">
                                    <a href="mailto:info@reinsoft.tech" className="flex items-center gap-5 group/item">
                                        <div className="size-12 rounded-2xl bg-[#ff7a18]/10 flex items-center justify-center border border-[#ff7a18]/20 group-hover/item:bg-[#ff7a18]/20 transition-all">
                                            <MailIcon className="size-5 text-[#ff7a18]" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Us</p>
                                            <p className="text-lg font-semibold text-white">info@reinsoft.tech</p>
                                        </div>
                                    </a>

                                    <a href="tel:+918968369582" className="flex items-center gap-5 group/item">
                                        <div className="size-12 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center border border-[#3b82f6]/20 group-hover/item:bg-[#3b82f6]/20 transition-all">
                                            <PhoneIcon className="size-5 text-[#3b82f6]" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Call Expert</p>
                                            <p className="text-lg font-semibold text-white">+91 89683 69582</p>
                                        </div>
                                    </a>

                                    <a href="https://wa.me/918968369582" className="flex items-center gap-5 group/item">
                                        <div className="size-12 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover/item:bg-green-500/20 transition-all">
                                            <MessageCircleIcon className="size-5 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">WhatsApp</p>
                                            <p className="text-lg font-semibold text-white">Quick Chat Now</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-5 group/item">
                                        <div className="size-12 rounded-2xl bg-[#a855f7]/10 flex items-center justify-center border border-[#a855f7]/20 group-hover/item:bg-[#a855f7]/20 transition-all shrink-0 mt-1">
                                            <svg className="size-5 text-[#a855f7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Visit Us</p>
                                            <p className="text-base font-semibold text-white leading-relaxed">
                                                Phase 8-B, Mohali, 160071<br />
                                                ( Punjab ), India
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#ff7a18]/10 to-transparent border border-white/5">
                                <p className="text-sm italic text-gray-400">
                                    "Reinsoft transformed our idea into a high-performance platform within weeks. Their communication is unmatched."
                                </p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-gray-600 border border-white/20" />
                                    <div>
                                        <p className="text-xs font-bold text-white">Sujoye Dhar</p>
                                        <p className="text-[10px] text-gray-500">CTO, Biswakarma</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-7 flex"
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex-grow bg-transparent backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {isQuoteType ? 'Request a Detailed Quote' : 'Send a Message'}
                            </h3>
                            <p className="text-gray-400 mb-10">We usually respond within 2-4 business hours.</p>

                            {isSubmitted ? (
                                <motion.div
                                    className="flex-grow flex flex-col items-center justify-center py-20 text-center"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div className="size-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-400 border border-green-500/30">
                                        <Send className="size-10" />
                                    </div>
                                    <h4 className="text-3xl font-bold text-white">Message Dispatched!</h4>
                                    <p className="text-gray-400 mt-4 max-w-sm">Thank you! Our technical team has received your inquiry and will reach out shortly.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 text-[#ff7a18] font-bold underline underline-offset-4"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FloatingInput
                                                label="First name"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                            <FloatingInput
                                                label="Last name"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FloatingInput
                                                label="Email address"
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <FloatingInput
                                                label="Telephone number"
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FloatingSelect
                                                label="Enquiry Type"
                                                id="enquiryType"
                                                name="enquiryType"
                                                required
                                                value={formData.enquiryType}
                                                onChange={handleChange}
                                                options={[
                                                    "Mobile App Development",
                                                    "Web Development",
                                                    "Custom Software",
                                                    "Other"
                                                ]}
                                            />
                                            <FloatingInput
                                                label="Country"
                                                id="country"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 gap-6">
                                            <FloatingSelect
                                                label="Budget"
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                required
                                                options={[
                                                    "$200 – $500",
                                                    "$500 – $1000",
                                                    "$1000 – $1500",
                                                    "$1500 – $2000",
                                                    "$2,000 – $2500",
                                                    "$2500 – $5000",
                                                    "$5,000 – $7000",
                                                    "$7,000 – $8000",
                                                    "$8,000 – $10000",
                                                    "$10000 – $25000"
                                                ]}
                                            />
                                        </div>

                                        <FloatingTextarea
                                            label="How can we help?"
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                        />

                                        {submitError && (
                                            <p className="text-red-400 text-sm font-medium">{submitError}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col items-center gap-4 pt-8">
                                        <p className="text-center md:text-left text-sm text-gray-500">
                                            Secure and encrypted project submission.
                                        </p>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            style={{
                                                position: 'relative',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: '12px 28px',
                                                borderRadius: '999px',
                                                fontSize: '15px',
                                                fontWeight: '700',
                                                color: '#fff',
                                                letterSpacing: '0.01em',
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                border: 'none',
                                                outline: 'none',
                                                background: 'linear-gradient(135deg, rgba(255,122,24,0.22) 0%, rgba(255,160,50,0.28) 50%, rgba(255,100,0,0.22) 100%)',
                                                boxShadow: '0 0 0 1.5px rgba(255,122,24,0.6), 0 0 18px 4px rgba(255,122,24,0.35), 0 0 32px 8px rgba(255,160,50,0.20), inset 0 1.5px 6px rgba(255,255,255,0.18), inset 0 -2px 8px rgba(0,0,0,0.35)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                transition: 'box-shadow 0.3s ease, transform 0.2s ease',
                                                overflow: 'hidden',
                                                opacity: isSubmitting ? 0.7 : 1,
                                            }}
                                            onMouseEnter={e => {
                                                if (!isSubmitting) {
                                                    e.currentTarget.style.boxShadow = '0 0 0 1.5px rgba(255,122,24,0.9), 0 0 28px 8px rgba(255,122,24,0.55), 0 0 50px 12px rgba(255,160,50,0.35), inset 0 1.5px 6px rgba(255,255,255,0.22), inset 0 -2px 8px rgba(0,0,0,0.35)';
                                                    e.currentTarget.style.transform = 'scale(1.04)';
                                                }
                                            }}
                                            onMouseLeave={e => {
                                                if (!isSubmitting) {
                                                    e.currentTarget.style.boxShadow = '0 0 0 1.5px rgba(255,122,24,0.6), 0 0 18px 4px rgba(255,122,24,0.35), 0 0 32px 8px rgba(255,160,50,0.20), inset 0 1.5px 6px rgba(255,255,255,0.18), inset 0 -2px 8px rgba(0,0,0,0.35)';
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }
                                            }}
                                        >
                                            {/* Gradient colour layer */}
                                            <span style={{
                                                position: 'absolute',
                                                inset: 0,
                                                borderRadius: '999px',
                                                background: 'linear-gradient(120deg, rgba(255,100,0,0.40) 0%, rgba(255,140,30,0.50) 50%, rgba(255,80,0,0.40) 100%)',
                                                pointerEvents: 'none',
                                            }} />

                                            <div style={{ position: 'relative', zIndex: 1 }} className="flex items-center gap-3">
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="size-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                        <span>Processing...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>{isQuoteType ? 'Get My Free Estimate' : 'Send Message Now'}</span>
                                                        <Send className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </>
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default function ContactPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="size-12 border-4 border-[#ff7a18]/20 border-t-[#ff7a18] rounded-full animate-spin" />
            </div>
        }>
            <ContactFormContent />
        </Suspense>
    );
}
