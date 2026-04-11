'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SiteMotionLayer() {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [-80, 120]);
    const y2 = useTransform(scrollYProgress, [0, 1], [90, -90]);
    const y3 = useTransform(scrollYProgress, [0, 1], [-50, 70]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) return null;

    return (
        <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute left-0 top-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#ff7a18] via-[#3b82f6] to-[#c6a86a] opacity-35"
            />
            <motion.div
                style={{ y: y1 }}
                className="absolute -top-24 left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#ff7a18]/06 blur-[120px] dark:bg-[#ff7a18]/08"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[18%] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#3b82f6]/06 blur-[130px] dark:bg-[#3b82f6]/08"
            />
            <motion.div
                style={{ y: y3, scale }}
                className="absolute bottom-[-10rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#c6a86a]/06 blur-[140px] dark:bg-[#d9bf88]/08"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,122,24,0.03),transparent_28%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,122,24,0.03),transparent_28%)]" />
        </div>
    );
}
