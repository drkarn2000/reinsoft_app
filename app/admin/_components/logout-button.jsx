'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Loader2 } from 'lucide-react';

export default function AdminLogoutButton() {
    const router = useRouter();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            await fetch('/api/admin/auth/logout', {
                method: 'POST',
            });
            router.push('/admin/login');
            router.refresh();
        } catch {
            setIsLoggingOut(false);
            window.location.href = '/admin/login';
        }
    };

    return (
        <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 border border-slate-700 transition-colors disabled:opacity-50"
            title="Log out of CMS"
        >
            {isLoggingOut ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
                <LogOut className="w-3.5 h-3.5 text-slate-400" />
            )}
            <span>Log out</span>
        </button>
    );
}
