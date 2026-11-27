export const metadata = {
    title: {
        default: 'CMS Administration | REINSOFT',
        template: '%s | REINSOFT Admin',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#0d0f12] text-slate-100 selection:bg-orange-500/30 font-sans antialiased">
            {children}
        </div>
    );
}
