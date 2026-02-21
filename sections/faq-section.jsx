import SectionTitle from '@/components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection({
    title = "Frequently Asked Questions",
    description = "Find answers to common questions about our services, process, and how we can help your business grow.",
    data: dataProps
}) {
    const [isOpen, setIsOpen] = useState(false);
    const defaultData = [
        {
            question: 'What type of projects do you work on?',
            answer: 'We work on website development, web applications, mobile apps (Android & iOS) & Custom Software / CRM development for startups, growing businesses, and enterprises.',
        },
        {
            question: 'What is the minimum budget to start a project?',
            answer: "It depends on scope, features, and timelines. We always suggest the most cost-effective solution first.",
        },
        {
            question: 'Do you provide support after project delivery?',
            answer: 'Yes ✅ We provide post-launch support, bug fixes, and optional maintenance plans to ensure smooth performance.',
        },
        {
            question: 'Do you work with startups and small businesses?',
            answer: 'Yes. We work with startups, SMEs, and established businesses globally.',
        },
        {
            question: 'Can you work with international clients?',
            answer: 'Absolutely. We work with clients globally and handle communication via email, Zoom, WhatsApp, or Slack.',
        },
        {
            question: 'How do we get started?',
            answer: "Simply fill out the form or contact us on WhatsApp. We'll schedule a free consultation to understand your requirements and suggest the best approach.",
        },
    ];

    const data = dataProps || defaultData;

    return (
        <section className="mt-16 max-w-4xl mx-auto px-6" id="faq">
            <SectionTitle title={title} description={description} gradient={true} />
            <div className='mx-auto mt-12 space-y-4 w-full max-w-xl'>
                {data.map((item, index) => (
                    <motion.div key={index} className='flex flex-col glass global-orange-glow rounded-[2rem]'
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <h3 className='flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium' onClick={() => setIsOpen(isOpen === index ? null : index)}>
                            {item.question}
                            <ChevronDownIcon className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? 'rotate-180' : ''}`} />
                        </h3>
                        <p className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${isOpen === index ? 'pt-2 pb-4 max-h-80' : 'max-h-0'}`}>{item.answer}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}