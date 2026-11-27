export const GTM_ID = 'GTM-MTZ86LXL';

/**
 * Returns true when the given pathname should be tracked by public GTM/GA4.
 * All /admin routes are excluded.
 */
export function isTrackablePath(pathname) {
    if (!pathname || typeof pathname !== 'string') {
        return false;
    }
    return pathname !== '/admin' && !pathname.startsWith('/admin/');
}

/**
 * Builds a normalized page path string including query parameters when present.
 */
export function buildPageViewUrl(pathname, search = '') {
    if (!pathname) {
        return '/';
    }
    const cleanSearch = typeof search === 'string' ? search.replace(/^\?/, '') : '';
    return cleanSearch ? `${pathname}?${cleanSearch}` : pathname;
}

/**
 * Safely pushes an event object onto window.dataLayer.
 * Accepts an optional targetWindow for unit testing.
 */
export function pushDataLayerEvent(
    event,
    params = {},
    targetWindow = typeof window !== 'undefined' ? window : null
) {
    if (!targetWindow || !event) {
        return false;
    }

    targetWindow.dataLayer = targetWindow.dataLayer || [];
    targetWindow.dataLayer.push({
        event,
        ...params,
    });
    return true;
}

/**
 * Tracks a client-side route transition for Next.js App Router.
 * Skips /admin/* routes.
 */
export function trackVirtualPageView(
    { pathname, search = '', location = '', title = '' } = {},
    targetWindow = typeof window !== 'undefined' ? window : null
) {
    if (!isTrackablePath(pathname)) {
        return false;
    }

    return pushDataLayerEvent(
        'virtual_pageview',
        {
            page_path: buildPageViewUrl(pathname, search),
            page_location: location,
            page_title: title,
        },
        targetWindow
    );
}

/**
 * Tracks a successful contact or quote form submission without any PII.
 */
export function trackFormSubmitSuccess(
    { formName = 'contact_form', inquiryType = 'General Inquiry', service = 'none', budget = 'none', country = 'none' } = {},
    targetWindow = typeof window !== 'undefined' ? window : null
) {
    return pushDataLayerEvent(
        'form_submit_success',
        {
            form_name: formName,
            inquiry_type: inquiryType || 'General Inquiry',
            service: service || 'none',
            budget: budget || 'none',
            country: country || 'none',
        },
        targetWindow
    );
}
