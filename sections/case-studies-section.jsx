import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseStudiesSection() {
    return (
        <section className="mt-20 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Real Results <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">From Real Projects</span>
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-base/relaxed">
                    Honest examples from actual client work across different industries. No fake numbers. Just real, practical outcomes. We work with businesses globally through remote collaboration and digital delivery.
                </p>
            </div>

            <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl global-orange-glow bg-gradient-to-b from-black/80 to-slate-900 border border-white/10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Decorative glow line at bottom of image area */}
                <div className="absolute top-[40%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50 z-10" />

                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10" />
                    <Image
                        src="/assets/Case-study.jpg"
                        alt="Case Study Background"
                        fill
                        className="object-cover object-center opacity-40 mix-blend-luminosity"
                    />
                </div>

                <div className="relative z-20 p-8 md:p-12 -mt-20 md:-mt-24">
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-pink-500">Professional Services Business</h3>
                        <span className="px-3 py-1 text-xs font-medium text-gray-300 border border-gray-600 rounded-full bg-gray-800/80 backdrop-blur-sm">
                            Global Client Remote Collaboration
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Challenge</h4>
                            <p className="text-gray-200 text-sm/relaxed">
                                The client had a website that looked outdated and was not converting visitors into enquiries, especially on mobile devices.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Solution</h4>
                            <p className="text-gray-200 text-sm/relaxed">
                                We redesigned the website with a conversion-focused structure, clear CTAs, and direct WhatsApp & form integrations. The site was optimized for mobile performance, speed, and clarity to support global users.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
