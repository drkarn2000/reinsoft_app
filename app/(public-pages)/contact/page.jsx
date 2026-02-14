'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, ClockIcon, MessageCircleIcon, Loader2Icon } from "lucide-react";
import GradientButton from "@/components/gradient-button";
import Image from "next/image";

const FloatingInput = ({ label, id, name, value, onChange, type = "text", required = false }) => {
    const [isFocused, setIsFocused] = useState(false);
    const isFloating = isFocused || value.length > 0;

    return (
        <div className="relative global-orange-glow rounded-full">
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                required={required}
                className="block w-full px-4 py-3.5 text-white bg-transparent rounded-full appearance-none focus:outline-none focus:ring-0 peer transition-all"
                placeholder=" "
            />
            <label
                htmlFor={id}
                className={`absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 transition-all pointer-events-none ${isFloating ? 'text-white scale-75 -translate-y-4 top-2 bg-[#1a1231]' : ''}`}
            >
                {label} {required && '*'}
            </label>
        </div>
    );
};

const FloatingTextarea = ({ label, id, name, value, onChange, required = false, rows = 4 }) => {
    const [isFocused, setIsFocused] = useState(false);
    const isFloating = isFocused || value.length > 0;

    return (
        <div className="relative global-orange-glow rounded-[2rem]">
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                required={required}
                rows={rows}
                className="block w-full px-4 py-4 text-white bg-transparent rounded-[2rem] appearance-none focus:outline-none focus:ring-0 peer transition-all resize-none"
                placeholder=" "
            />
            <label
                htmlFor={id}
                className={`absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:top-0 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 transition-all pointer-events-none ${isFloating ? 'text-white scale-75 -translate-y-4 top-2 bg-[#1a1231]' : ''}`}
            >
                {label} {required && '*'}
            </label>
        </div>
    );
};

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        phone: '',
        budget: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', companyName: '', phone: '', budget: '', message: '' });
                }, 3000);
            } else {
                console.error('Submission failed');
                alert('Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="px-4">
            {/* Background gradient blobs - same as home page */}
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-60 left-2/5 -translate-x-1/2 size-120 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-60 right-0 -translate-x-1/2 size-120 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-120 bg-[#F26A06] blur-[100px]" />
            </motion.div>

            {/* Background Image */}
            <div className="fixed inset-0 -z-30 pointer-events-none">
                <Image
                    src="/assets/contact.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
            </div>

            {/* Hero Section */}
            <motion.section className="flex flex-col items-center mt-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-center text-4xl md:text-6xl font-semibold tracking-tight drop-shadow-[0_0_35px_rgba(255,255,255,0.5)]">
                    Contact <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(255,122,24,1)]">Reinsoft</span>
                </h1>
                <p className="text-center text-gray-100 text-base/7 max-w-lg mt-4">
                    Looking for a reliable IT partner? Talk to us today and let's build something that helps your business grow.
                </p>
            </motion.section>

            {/* Contact Section */}
            <section className="mt-12 max-w-6xl mx-auto mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Contact Info - Col Span 2 */}
                    <motion.div
                        className="lg:col-span-2 space-y-4"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h2 className="text-2xl font-medium mb-1">Let's discuss your project</h2>
                            <p className="text-gray-300 text-sm">
                                Get a clear solution, timeline and cost: no pressure, no obligation.
                            </p>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <GradientButton
                                href="https://wa.me/916283448462"
                                className="flex-1 text-sm"
                                contentClassName="flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/40 py-2.5"
                            >
                                <MessageCircleIcon className="size-4" />
                                WhatsApp Chat
                            </GradientButton>
                            <GradientButton
                                href="tel:+918968369582"
                                className="flex-1 text-sm"
                                contentClassName="flex items-center justify-center gap-2 py-2.5"
                            >
                                <PhoneIcon className="size-4" />
                                Call Now
                            </GradientButton>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-4 glass global-orange-glow p-4 rounded-full">
                                <MailIcon className="size-5 shrink-0 text-gray-400" />
                                <div>
                                    <strong className="block text-xs text-gray-400 uppercase tracking-wider">Email</strong>
                                    <a href="mailto:info@reinsoft.site" className="text-base font-semibold text-white hover:text-gray-200 transition">
                                        info@reinsoft.site
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 glass global-orange-glow p-4 rounded-full">
                                <PhoneIcon className="size-5 shrink-0 text-gray-400" />
                                <div>
                                    <strong className="block text-xs text-gray-400 uppercase tracking-wider">Phone</strong>
                                    <a href="tel:+918968369582" className="text-base font-semibold text-white hover:text-gray-200 transition">
                                        +91 89683 69582
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 glass global-orange-glow p-4 rounded-full">
                                <ClockIcon className="size-5 shrink-0 text-gray-400" />
                                <div>
                                    <strong className="block text-xs text-gray-400 uppercase tracking-wider">Response Time</strong>
                                    <p className="text-base font-semibold text-white">Within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form - Col Span 3 */}
                    <motion.div
                        className="lg:col-span-3 glass global-orange-glow p-6 md:p-8 rounded-xl"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-medium mb-1">Send us a Message</h3>
                        <p className="text-gray-300 text-sm mb-6">Fill out the form and we'll get back to you within 24 hours.</p>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-10 text-center">
                                <div className="size-14 rounded-full bg-green-500/20 flex items-center justify-center mb-4 text-green-400">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-medium">Message Sent!</h4>
                                <p className="text-gray-300 text-sm mt-2">We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <FloatingInput
                                        label="Full Name"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <FloatingInput
                                        label="Email Address"
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <FloatingInput
                                        label="Company Name"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                    />
                                    <FloatingInput
                                        label="Phone Number"
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="relative global-orange-glow rounded-full">
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        required
                                        className="block w-full px-4 py-3.5 text-white bg-[#1a1231] rounded-full appearance-none focus:outline-none focus:ring-0 peer transition-all"
                                    >
                                        <option value="" disabled>Select Budget *</option>
                                        <option value="$200 - $500">$200 - $500</option>
                                        <option value="$500 - $1000">$500 - $1000</option>
                                        <option value="$1000 - $1500">$1000 - $1500</option>
                                        <option value="$1500 - $2000">$1500 - $2000</option>
                                        <option value="$2,000 - $2500">$2,000 - $2500</option>
                                        <option value="$2500 - $5000">$2500 - $5000</option>
                                        <option value="$5,000 - $7000">$5,000 - $7000</option>
                                        <option value="$7,000 - $8000">$7,000 - $8000</option>
                                        <option value="$8,000 - $10000">$8,000 - $10000</option>
                                        <option value="$10000 - $25000">$10000 - $25000</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                        <svg className="size-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <label
                                        htmlFor="budget"
                                        className={`absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 left-3 bg-[#1a1231] pointer-events-none ${!formData.budget ? 'hidden' : ''}`}
                                    >
                                        Budget *
                                    </label>
                                </div>

                                <FloatingTextarea
                                    label="Briefly describe your project requirements"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                />

                                <GradientButton
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex justify-center group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    contentClassName="w-full px-6 py-3.5 bg-black/20 hover:bg-black/40 backdrop-blur-md font-medium"
                                    useTrustStripStyle={true}
                                    loop={!isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <Loader2Icon className="size-4 animate-spin" />
                                            Sending...
                                        </span>
                                    ) : (
                                        "👈 Request Project Estimate"
                                    )}
                                </GradientButton>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
