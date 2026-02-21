import SectionTitle from "@/components/section-title";
import { CheckCircleIcon, UsersIcon, LightbulbIcon, Headset, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function WhyChooseUs({
    title = "Why Choose Us",
    description = "We are committed to delivering excellence. Here is why businesses trust us with their digital transformation.",
    reasons: reasonsProps
}) {
    const refs = useRef([]);

    const defaultReasons = [
        {
            icon: UsersIcon,
            title: "Experienced Team",
            description: "Our diverse team of experts brings years of experience in software development and IT solutions.",
        },
        {
            icon: LightbulbIcon,
            title: "Tailored Solutions",
            description: "We don't believe in one-size-fits-all. We build custom solutions that fit your specific business needs.",
        },
        {
            icon: Clock,
            title: "Timely Delivery",
            description: "We value your time. Our agile process ensures we deliver high-quality projects on schedule.",
        },
        {
            icon: ShieldCheck,
            title: "Reliable & Secure",
            description: "Security is our top priority. We build robust systems that keep your data safe and your business running.",
        },
        {
            icon: Headset,
            title: "Dedicated Support",
            description: "We are here for the long haul. Our support team is always ready to assist you post-launch.",
        },
        {
            icon: CheckCircleIcon,
            title: "Proven Track Record",
            description: "We have a history of delivering successful projects that help businesses grow and succeed.",
        }
    ];

    const reasons = reasonsProps || defaultReasons;

    return (
        <section id="why-choose-us" className="mt-16 relative">
            {/* Decorative background element if needed, keeping it clean for now to match features */}
            <SectionTitle
                title={title}
                description={description}
                gradient={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 max-w-7xl mx-auto">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="global-orange-glow hover:-translate-y-0.5 p-6 rounded-xl space-y-4 !bg-black/20 backdrop-blur-md w-full h-full flex flex-col"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                    >
                        <div className="p-3 bg-orange-500/10 rounded-lg w-fit">
                            <reason.icon className="size-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-medium bg-gradient-to-r from-[#3b82f6] to-[#ff7a18] bg-clip-text text-transparent">
                            {reason.title}
                        </h3>
                        <p className="text-gray-300">
                            {reason.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
