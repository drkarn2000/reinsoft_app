export default function AdminLoading() {
    return (
        <div className="space-y-8" aria-label="Loading admin panel">
            <div className="h-40 animate-pulse rounded-2xl border border-slate-800 bg-slate-900/70" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {Array.from({ length: 6 }, (_, index) => (
                    <div
                        key={index}
                        className="h-24 animate-pulse rounded-xl border border-slate-800 bg-[#121622]"
                    />
                ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                <div className="h-80 animate-pulse rounded-2xl border border-slate-800 bg-[#121622]" />
                <div className="h-80 animate-pulse rounded-2xl border border-slate-800 bg-[#121622]" />
            </div>
        </div>
    );
}
