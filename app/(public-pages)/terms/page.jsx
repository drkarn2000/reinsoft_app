'use client';

import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";

export default function TermsPage() {
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
                    Terms & <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">Conditions</span>
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
                        By accessing and using <span className="font-semibold text-white">reinsoft.site</span>, you agree to the following terms and conditions.
                    </p>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Services</h2>
                        <p>Reinsoft provides website development, web application development, mobile application development, and related IT services. All services are provided based on mutually agreed project scope and timelines.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Project Scope & Payments</h2>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li>Project requirements, timelines, and costs are finalized before project start.</li>
                            <li>Any changes or additional requirements may require revised timelines or costs.</li>
                            <li>Payments are non-refundable once project work has started, unless otherwise agreed in writing.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Client Responsibilities</h2>
                        <p>Clients are responsible for providing accurate information, content, and timely feedback required for project completion.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Intellectual Property</h2>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li>Upon full payment, the client will own the final delivered work unless otherwise stated in the agreement.</li>
                            <li>We reserve the right to showcase completed projects in our portfolio unless restricted by confidentiality.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
                        <p>Reinsoft will not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Governing Law</h2>
                        <p>These terms shall be governed by and interpreted in accordance with the laws of India.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Changes to Terms</h2>
                        <p>We reserve the right to update these Terms & Conditions at any time without prior notice.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Contact</h2>
                        <p>For any questions regarding these terms, please contact:</p>
                        <a href="mailto:info@reinsoft.site" className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-300 transition">
                            <MailIcon className="size-4" />
                            info@reinsoft.site
                        </a>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
