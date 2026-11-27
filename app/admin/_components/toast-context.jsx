'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const ToastContext = createContext({
    showToast: () => {},
});

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const showToast = useCallback((message, type = 'success', duration = 4000) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        if (duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }
    }, [removeToast]);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Toast Container */}
            <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-md w-full pointer-events-none px-4 sm:px-0">
                {toasts.map((toast) => {
                    const isSuccess = toast.type === 'success';
                    const isError = toast.type === 'error';
                    return (
                        <div
                            key={toast.id}
                            className={`pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-xl border shadow-2xl backdrop-blur-md transition-all animate-in slide-in-from-bottom-3 duration-200 ${
                                isSuccess
                                    ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-100'
                                    : isError
                                    ? 'bg-red-950/90 border-red-500/40 text-red-100'
                                    : 'bg-slate-900/95 border-slate-700 text-slate-100'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                                {isError && <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />}
                                {!isSuccess && !isError && <Info className="w-5 h-5 text-blue-400 shrink-0" />}
                                <span className="text-sm font-medium">{toast.message}</span>
                            </div>
                            <button
                                onClick={() => removeToast(toast.id)}
                                className="p-1 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    );
                })}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    return useContext(ToastContext);
}
