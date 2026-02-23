import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import Link from "next/link";
import GradientButton from "@/components/gradient-button";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

const steps = [
    {
        id: 1,
        title: "We understand your business & goals",
        description: "Not just technical requirements. We learn what success means for your business and tailor solutions accordingly.",
        link: "/contact",
        image: "/assets/workflow1.png",
        width: 808,
        height: 552,
    },
    {
        id: 2,
        title: "We suggest the right technical solution",
        description: "No over-engineering. Just practical solutions that fit your budget and needs perfectly.",
        link: "/services",
        image: "/assets/Services.jpg",
        width: 1920,
        height: 1280,
    },
    {
        id: 3,
        title: "We build fast, secure & scalable systems",
        description: "Modern technology stack. Clean code. Built to grow with your business.",
        link: "/services",
        image: "/assets/workflow3.jpg",
        width: 2560,
        height: 1708,
    },
    {
        id: 4,
        title: "We support you after project delivery",
        description: "Updates, bug fixes, and ongoing improvements. We're your long-term IT partner.",
        link: "/contact",
        image: "/assets/Case-study.jpg",
        width: 2000,
        height: 1367,
    },
];

export default function WorkflowSteps() {
    return (
        <section className="mt-16 relative">
            <SectionTitle
                title="Our Simple & Effective Process"
                description="A transparent process that works for both local and global clients. No confusion. No hidden costs. Just honest work that delivers results."
                gradient={true}
            />

            <motion.div className="relative space-y-20 md:space-y-30 mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Center timeline with step numbers */}
                <div className="flex-col items-center hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                        01
                    </p>
                    <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                        02
                    </p>
                    <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                        03
                    </p>
                    <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                        04
                    </p>
                </div>

                {steps.map((step, index) => (
                    <motion.div key={index} className={`flex items-center justify-center gap-6 md:gap-20 ${index % 2 !== 0 ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {/* Animated Image Container */}
                        <div className="relative flex-1 max-w-sm rounded-xl overflow-hidden p-[3px] shadow-[0_0_15px_rgba(255,122,24,0.3),0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(255,122,24,0.5),0_0_25px_rgba(59,130,246,0.5)] transition-shadow duration-300">

                            {/* Spinning Gradient */}
                            <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#ff7a18_0%,#3b82f6_50%,#ff7a18_100%)]" />

                            {/* Image Content */}
                            <div className="relative z-10 bg-black rounded-xl overflow-hidden h-full w-full">
                                <Image
                                    src={step.image}
                                    alt="step"
                                    width={step.width}
                                    height={step.height}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                        </div>
                        <div key={index} className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                            <h3 className="text-2xl font-medium bg-gradient-to-r from-[#3b82f6] to-[#ff7a18] bg-clip-text text-transparent">
                                {step.title}
                            </h3>
                            <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">
                                {step.description}
                            </p>
                            <GradientButton href={step.link} className="w-fit" loop={false}>
                                Learn More
                                <ExternalLinkIcon className="size-4 ml-2" />
                            </GradientButton>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.p
                className="text-center mt-16 text-lg font-medium text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                We don't just build projects, <span className="text-white">we build trust.</span>
            </motion.p>
        </section>
    );
}
