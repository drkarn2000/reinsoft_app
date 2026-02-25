import { useState } from 'react';
import { motion } from 'framer-motion';
import GradientButton from './gradient-button';

export default function LeadForm({ title, description }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        enquiryType: '',
        budget: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitResult(null);

        try {
            const payload = {
                ...formData,
                companyName: formData.enquiryType,   // Using enquiryType as company back-compat
            };

            const response = await fetch('/api/lead-submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setSubmitResult({ type: 'success', message: 'Thank you for your enquiry. We will get back to you shortly.' });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    enquiryType: '',
                    budget: '',
                    message: ''
                });

                // Clear the success message after 1 minute (60000 ms)
                setTimeout(() => {
                    setSubmitResult(null);
                }, 60000);
            } else {
                const data = await response.json();
                setSubmitResult({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setSubmitResult({ type: 'error', message: 'Network error. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            className="w-full max-w-md bg-white p-5 sm:p-6 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70 }}
        >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent mb-2">
                {title || "Request a Quote"}
            </h3>
            {description && <p className="text-gray-500 text-sm mb-4">{description}</p>}
            {!description && <div className="mb-4" />}

            {submitResult && (
                <div className={`mb-4 p-3 rounded-lg text-sm ${submitResult.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitResult.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <label htmlFor="name" className="sr-only">Name*</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name*"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 transition-shadow"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email address*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email address*"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 transition-shadow"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="sr-only">Telephone number*</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Telephone number*"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 transition-shadow"
                    />
                </div>
                <div>
                    <label htmlFor="enquiryType" className="sr-only">Enquiry Type*</label>
                    <select
                        id="enquiryType"
                        name="enquiryType"
                        required
                        value={formData.enquiryType}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-shadow appearance-none bg-white ${formData.enquiryType ? 'text-gray-800' : 'text-gray-500'}`}
                    >
                        <option value="" disabled>Enquiry Type*</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="budget" className="sr-only">Budget*</label>
                    <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-shadow appearance-none bg-white ${formData.budget ? 'text-gray-800' : 'text-gray-500'}`}
                    >
                        <option value="" disabled hidden>Budget*</option>
                        <option value="$200 – $500">$200 – $500</option>
                        <option value="$500 – $1000">$500 – $1000</option>
                        <option value="$1000 – $1500">$1000 – $1500</option>
                        <option value="$1500 – $2000">$1500 – $2000</option>
                        <option value="$2,000 – $2500">$2,000 – $2500</option>
                        <option value="$2500 – $5000">$2500 – $5000</option>
                        <option value="$5,000 – $7000">$5,000 – $7000</option>
                        <option value="$7,000 – $8000">$7,000 – $8000</option>
                        <option value="$8,000 – $10000">$8,000 – $10000</option>
                        <option value="$10000 – $25000">$10000 – $25000</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">How can we help?*</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="How can we help?*"
                        required
                        rows="2"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 transition-shadow resize-none"
                    ></textarea>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full relative py-3 rounded-full font-bold text-white shadow-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
                        style={{
                            background: 'linear-gradient(to right, #3b82f6, #ff7a18)',
                            boxShadow: '0 4px 15px rgba(255, 122, 24, 0.3)'
                        }}
                    >
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity"></div>
                        {isSubmitting ? 'Sending...' : 'Send Now'}
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
