import { motion } from "framer-motion";

export default function SectionTitle({ title, description, gradient = false, asH1 = false }) {
    const Tag = asH1 ? motion.h1 : motion.h2;
    return (
        <div className="text-center">
            <Tag className={`text-3xl font-semibold max-w-lg mx-auto mt-4 ${gradient ? 'brand-text-gradient drop-shadow-[0_0_15px_rgba(255,122,24,0.5)]' : 'text-black dark:text-white'}`}
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {title}
            </Tag>
            <motion.p className="mt-4 text-center text-sm/7 text-black dark:text-gray-300 max-w-md mx-auto"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                {description}
            </motion.p>
        </div>
    )
}