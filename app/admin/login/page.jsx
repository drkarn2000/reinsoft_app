'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Lock,
    Mail,
    Eye,
    EyeOff,
    ShieldCheck,
    AlertCircle,
    Loader2,
    ArrowRight,
    FileText,
    LayoutGrid,
    Image as ImageIcon,
    BarChart3,
} from 'lucide-react';

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirect') || '/admin';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [keepSignedIn, setKeepSignedIn] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [forgotNotice, setForgotNotice] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setForgotNotice(false);
        setIsLoading(true);

        try {
            const res = await fetch('/api/admin/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMessage(data.error || 'Authentication failed. Check your credentials.');
                setIsLoading(false);
                return;
            }

            // Redirect to destination
            router.push(redirectUrl);
            router.refresh();
        } catch {
            setErrorMessage('Unable to connect to authentication service. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[460px] mx-auto">
            {/* Ambient Animated Glow Aura behind the card */}
            <div className="relative group">
                <div className="absolute -inset-1.5 rounded-[34px] bg-gradient-to-r from-[#ff6b00]/40 via-[#ff9438]/25 to-[#ff5100]/30 blur-2xl opacity-80 group-hover:opacity-100 group-hover:blur-3xl transition-all duration-700 pointer-events-none" />

                {/* Ultra-Premium Transparent Glassmorphic Card with Glowing Border */}
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="relative rounded-3xl bg-[#080d1a]/30 backdrop-blur-xl border-2 border-[#ff7a18]/45 hover:border-[#ff9438]/70 p-7 sm:p-9 shadow-[0_0_35px_rgba(255,122,24,0.35),inset_0_0_25px_rgba(255,122,24,0.12),0_25px_50px_rgba(0,0,0,0.7)] hover:shadow-[0_0_55px_rgba(255,122,24,0.55),inset_0_0_35px_rgba(255,122,24,0.2),0_30px_60px_rgba(0,0,0,0.85)] transition-all duration-500 overflow-hidden"
                >
                    {/* Glass Specular Highlights */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-transparent pointer-events-none rounded-3xl" />
                    <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#ffa857]/80 to-transparent pointer-events-none" />

                    {/* Card Top: Centered REINSOFT Logo & Portal Badge */}
                    <div className="flex flex-col items-center justify-center text-center mb-6 relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="relative mb-3.5 flex items-center justify-center group/logo"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#ff7a18]/25 via-white/10 to-[#3b82f6]/20 blur-md rounded-2xl opacity-60 group-hover/logo:opacity-100 transition-opacity pointer-events-none" />
                            <Image
                                src="/assets/logo.png"
                                alt="REINSOFT CMS"
                                width={240}
                                height={75}
                                priority
                                className="relative z-10 h-12 sm:h-14 w-auto object-contain brightness-125 contrast-105 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
                            />
                        </motion.div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#ff7a18]/20 via-[#ff7a18]/10 to-transparent border border-[#ff7a18]/35 text-[#ff8a24] text-[10px] font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_15px_rgba(255,122,24,0.25)]">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#ff8a24]" />
                            <span>REINSOFT CMS PORTAL</span>
                        </div>
                    </div>

                    {/* Card Heading - Centered */}
                    <div className="text-center mb-6 relative z-10">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm">
                            Welcome back
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-300/80 mt-1">
                            Sign in to manage your digital presence.
                        </p>
                    </div>

                    {/* Feedback notices */}
                    {errorMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            role="alert"
                            className="mb-5 p-3.5 rounded-xl bg-red-500/15 border border-red-500/40 backdrop-blur-md flex items-start gap-3 text-red-200 text-xs sm:text-sm shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                        >
                            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{errorMessage}</span>
                        </motion.div>
                    )}

                    {forgotNotice && (
                        <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-5 p-3.5 rounded-xl bg-orange-500/15 border border-orange-500/35 backdrop-blur-md flex items-start gap-2.5 text-orange-200 text-xs shadow-[0_0_15px_rgba(255,122,24,0.2)]"
                        >
                            <ShieldCheck className="w-4 h-4 text-[#ff8a24] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">
                                For security protocols, credential recovery is managed internally. Please contact your Super Administrator.
                            </span>
                        </motion.div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="admin-email-input"
                                className="block text-[11px] font-bold text-slate-300 mb-1.5 uppercase tracking-wider"
                            >
                                Email Address
                            </label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-[#ff8a24] transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <input
                                    id="admin-email-input"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@reinsoft.tech"
                                    className="w-full pl-10 pr-4 py-3 bg-white/[0.05] hover:bg-white/[0.08] focus:bg-black/40 border border-white/10 hover:border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/30 backdrop-blur-md transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="admin-password-input"
                                className="block text-[11px] font-bold text-slate-300 mb-1.5 uppercase tracking-wider"
                            >
                                Password
                            </label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-[#ff8a24] transition-colors">
                                    <Lock className="w-4 h-4" />
                                </div>
                                <input
                                    id="admin-password-input"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    className="w-full pl-10 pr-11 py-3 bg-white/[0.05] hover:bg-white/[0.08] focus:bg-black/40 border border-white/10 hover:border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/30 backdrop-blur-md transition-all duration-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Keep me signed in & Forgot password row */}
                        <div className="flex items-center justify-between text-xs pt-0.5">
                            <label className="flex items-center gap-2 text-slate-300 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={keepSignedIn}
                                    onChange={(e) => setKeepSignedIn(e.target.checked)}
                                    className="w-4 h-4 rounded text-[#ff7a18] focus:ring-0 bg-white/10 border-white/20 cursor-pointer accent-[#ff7a18]"
                                />
                                <span className="text-slate-300 font-medium">Keep me signed in</span>
                            </label>

                            <button
                                type="button"
                                onClick={() => setForgotNotice((prev) => !prev)}
                                className="text-[#ff8a24] hover:text-[#ffa34d] font-semibold transition-colors cursor-pointer"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Primary Button with Motion & Glowing Hover Effect */}
                        <motion.button
                            type="submit"
                            disabled={isLoading}
                            whileHover={!isLoading ? { scale: 1.015 } : {}}
                            whileTap={!isLoading ? { scale: 0.985 } : {}}
                            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff6b00] to-[#ff8c26] hover:from-[#ff7919] hover:to-[#ff993d] shadow-[0_0_25px_rgba(255,107,0,0.45)] hover:shadow-[0_0_35px_rgba(255,107,0,0.7)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-2 transition-shadow duration-300"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span>Verifying Credentials...</span>
                                </>
                            ) : (
                                <>
                                    <span>Sign in to Dashboard</span>
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                            <span className="bg-[#0b101c]/80 backdrop-blur-md px-3 rounded-full border border-white/5">
                                OR
                            </span>
                        </div>
                    </div>

                    {/* Authorized Access Notice */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-3 text-slate-300/80 text-xs">
                        <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="leading-relaxed text-[11px]">
                            Authorized personnel only. All access attempts are recorded in the security audit ledger.
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default function AdminLoginPage() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-black text-white overflow-x-hidden selection:bg-[#ff7a18]/30 selection:text-white">
            {/* Pure Original Background Image - No Overlays or Extra Tints */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <Image
                    src="/assets/admin-login-bg.jpg"
                    alt="REINSOFT Executive Office"
                    fill
                    priority
                    quality={100}
                    className="object-cover object-center"
                />
            </div>

            {/* Top Center Logo & ADMIN CONTROL CENTER Badge Touching Top Border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-auto flex flex-col items-center">
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                    className="-mt-1.5 sm:-mt-2"
                >
                    <Image
                        src="/assets/logo.png"
                        alt="REINSOFT IT SOLUTIONS"
                        width={300}
                        height={90}
                        priority
                        className="h-16 sm:h-20 w-auto object-contain brightness-110 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
                    />
                </motion.div>
                <div className="-mt-1 sm:-mt-1.5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#ff7a18]/20 via-[#ff7a18]/10 to-transparent border border-[#ff7a18]/30 text-[#ff8a24] text-[11px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-[0_0_20px_rgba(255,122,24,0.2)]">
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff8a24]" />
                        <span>ADMIN CONTROL CENTER</span>
                    </div>
                </div>
            </div>

            {/* Main Container - Split Screen on Desktop, Centered on Mobile */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                    
                    {/* LEFT BRAND PANEL (Desktop / Tablet) */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-7 lg:pr-6">
                        {/* Headline */}
                        <div className="space-y-1">
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-md">
                                Your business.<br />
                                <span className="brand-text-gradient">
                                    Under control.
                                </span>
                            </h1>
                        </div>

                        {/* Supporting Text */}
                        <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl drop-shadow-sm font-medium">
                            Manage your website content, case studies, services, client testimonials, media assets, and inquiries from one powerful admin panel.
                        </p>

                        {/* 4 Feature Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 max-w-xl">
                            {/* Feature 1: Content Management */}
                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#090e1a]/65 backdrop-blur-xl border border-white/10 hover:border-[#ff7a18]/40 hover:bg-[#090e1a]/85 transition-all group shadow-lg"
                            >
                                <div className="w-11 h-11 rounded-xl bg-orange-500/20 border border-orange-500/35 flex items-center justify-center text-[#ff8a24] shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,122,24,0.2)]">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                                        Content Management
                                    </h4>
                                    <p className="text-[11px] text-slate-300 truncate">
                                        Pages, sections &amp; more
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature 2: Service Management */}
                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#090e1a]/65 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 hover:bg-[#090e1a]/85 transition-all group shadow-lg"
                            >
                                <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-500/35 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                    <LayoutGrid className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                                        Service Management
                                    </h4>
                                    <p className="text-[11px] text-slate-300 truncate">
                                        Showcase your expertise
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature 3: Media Library */}
                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#090e1a]/65 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 hover:bg-[#090e1a]/85 transition-all group shadow-lg"
                            >
                                <div className="w-11 h-11 rounded-xl bg-purple-500/20 border border-purple-500/35 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                    <ImageIcon className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                                        Media Library
                                    </h4>
                                    <p className="text-[11px] text-slate-300 truncate">
                                        Images, videos &amp; assets
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature 4: Inquiries & Leads */}
                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#090e1a]/65 backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 hover:bg-[#090e1a]/85 transition-all group shadow-lg"
                            >
                                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/35 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                    <BarChart3 className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                                        Inquiries &amp; Leads
                                    </h4>
                                    <p className="text-[11px] text-slate-300 truncate">
                                        Track and manage clients
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Left Panel Footer */}
                        <div className="pt-4 flex items-center gap-3 text-[11px] font-semibold tracking-widest text-slate-300 uppercase">
                            <span className="w-6 h-[2px] bg-[#ff7a18] rounded-full inline-block" />
                            <span>REINSOFT IT SOLUTIONS · SECURE ADMINISTRATION</span>
                        </div>
                    </div>

                    {/* RIGHT LOGIN PANEL (Card) */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <Suspense
                            fallback={
                                <div className="w-full max-w-[460px] h-[580px] rounded-3xl bg-[#070b16]/45 backdrop-blur-2xl border border-white/10 p-8 flex flex-col items-center justify-center text-slate-400 text-sm">
                                    <Loader2 className="w-6 h-6 animate-spin text-[#ff7a18] mb-3" />
                                    <span>Loading secure portal...</span>
                                </div>
                            }
                        >
                            <LoginForm />
                        </Suspense>
                    </div>

                </div>
            </div>
        </div>
    );
}
