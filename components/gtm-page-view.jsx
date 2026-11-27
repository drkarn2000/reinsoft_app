'use client';

import { Suspense, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackVirtualPageView } from '@/lib/analytics';

function GtmPageViewTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isFirstRender = useRef(true);
    const search = searchParams ? searchParams.toString() : '';

    useEffect(() => {
        // Initial load is tracked by the GTM Google Tag on Initialization - All Pages.
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        trackVirtualPageView({
            pathname,
            search,
            location: window.location.href,
            title: document.title,
        });
    }, [pathname, search]);

    return null;
}

export default function GtmPageView() {
    return (
        <Suspense fallback={null}>
            <GtmPageViewTracker />
        </Suspense>
    );
}
