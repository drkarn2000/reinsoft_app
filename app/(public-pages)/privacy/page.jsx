'use client';

import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <main className="px-4">
            {/* Background gradient blobs */}
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </motion.div>

            {/* Hero Section */}
            <motion.section className="flex flex-col items-center mt-32"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-center text-4xl md:text-5xl font-semibold tracking-tight">
                    Privacy <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">Policy</span>
                </h1>
            </motion.section>

            {/* Content */}
            <motion.section
                className="max-w-3xl mx-auto mt-12 mb-20 glass p-8 md:p-12 rounded-xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="space-y-8 text-gray-200">
                    <p className="text-lg">
                        At <span className="font-semibold text-white">Reinsoft</span>, we respect your privacy and are committed to protecting the personal information you share with us.
                    </p>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
                        <p>When you contact us through our website, we may collect the following information:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Project or business requirements</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">How We Use Your Information</h2>
                        <p>The information collected is used to:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>Respond to your enquiries</li>
                            <li>Understand your project requirements</li>
                            <li>Communicate about our services</li>
                            <li>Improve our website and service offerings</li>
                        </ul>
                        <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Data Security</h2>
                        <p>We take reasonable measures to protect your personal data from unauthorized access, misuse, or disclosure.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Cookies</h2>
                        <p>Our website may use basic cookies to improve user experience and website performance. These cookies do not collect personal information.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Third-Party Services</h2>
                        <p>We may use trusted third-party tools (such as analytics or advertising platforms) to understand website performance. These services may collect anonymous usage data.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Your Consent</h2>
                        <p>By using our website and submitting your information, you consent to this Privacy Policy.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Contact Information</h2>
                        <p>If you have any questions regarding this Privacy Policy, you can contact us at:</p>
                        <a href="mailto:info@reinsoft.tech" className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-300 transition">
                            <MailIcon className="size-4" />
                            info@reinsoft.tech
                        </a>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
