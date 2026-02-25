import Link from 'next/link';
import { motion } from "framer-motion";

export default function GradientButton({
    href,
    children,
    onClick,
    className = "",
    contentClassName = "bg-black/80 hover:bg-black/60", // Default dark bg
    useTrustStripStyle = false,
    loop = true,
    ...props
}) {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
    const Component = href ? (isInternal ? Link : 'a') : 'button';

    // If it's an external link, add target="_blank" and rel="noopener noreferrer" by default unless overridden
    const extraProps = !isInternal && href ? { target: "_blank", rel: "noopener noreferrer" } : {};

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`relative inline-flex p-[2px] overflow-hidden rounded-full group transition-transform active:scale-95 ${className}`}
            {...extraProps}
            {...props}
        >
            <span className={`absolute ${useTrustStripStyle ? 'inset-[-100%]' : 'inset-[-1000%]'} ${loop ? 'animate-[spin_3s_linear_infinite]' : ''} bg-[conic-gradient(from_90deg_at_50%_50%,#ff7a18_0%,#3b82f6_50%,#ff7a18_100%)] opacity-80`} />
            <span className={`relative z-10 flex items-center justify-center w-full px-6 py-2.5 backdrop-blur-md rounded-full text-white transition-colors ${contentClassName}`}>
                {children}
            </span>
        </Component>
    );
}
