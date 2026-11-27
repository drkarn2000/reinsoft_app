import test from 'node:test';
import assert from 'node:assert/strict';
import {
    GTM_ID,
    isTrackablePath,
    buildPageViewUrl,
    pushDataLayerEvent,
    trackVirtualPageView,
    trackFormSubmitSuccess,
} from '../lib/analytics.js';

test('GTM_ID matches the company-owned container', () => {
    assert.equal(GTM_ID, 'GTM-MTZ86LXL');
});

test('isTrackablePath excludes all /admin routes and invalid inputs', () => {
    assert.equal(isTrackablePath('/'), true);
    assert.equal(isTrackablePath('/services/web-development'), true);
    assert.equal(isTrackablePath('/contact'), true);
    assert.equal(isTrackablePath('/admin'), false);
    assert.equal(isTrackablePath('/admin/login'), false);
    assert.equal(isTrackablePath('/admin/settings'), false);
    assert.equal(isTrackablePath(''), false);
    assert.equal(isTrackablePath(null), false);
});

test('buildPageViewUrl normalizes pathname and query string', () => {
    assert.equal(buildPageViewUrl('/contact', ''), '/contact');
    assert.equal(buildPageViewUrl('/contact', 'type=quote'), '/contact?type=quote');
    assert.equal(buildPageViewUrl('/contact', '?type=quote'), '/contact?type=quote');
    assert.equal(buildPageViewUrl('', ''), '/');
});

test('pushDataLayerEvent initializes dataLayer and pushes event safely', () => {
    assert.equal(pushDataLayerEvent('test_event', {}, null), false);

    const mockWindow = {};
    const pushed = pushDataLayerEvent('cta_click', { cta_text: 'Book Free Consultation' }, mockWindow);
    assert.equal(pushed, true);
    assert.deepEqual(mockWindow.dataLayer, [
        {
            event: 'cta_click',
            cta_text: 'Book Free Consultation',
        },
    ]);
});

test('trackVirtualPageView pushes virtual_pageview for public routes and skips /admin/*', () => {
    const mockWindow = { dataLayer: [] };

    const adminResult = trackVirtualPageView(
        {
            pathname: '/admin/inquiries',
            search: 'page=2',
            location: 'https://reinsoft.tech/admin/inquiries?page=2',
            title: 'Admin',
        },
        mockWindow
    );
    assert.equal(adminResult, false);
    assert.equal(mockWindow.dataLayer.length, 0);

    const publicResult = trackVirtualPageView(
        {
            pathname: '/contact',
            search: 'type=quote',
            location: 'https://reinsoft.tech/contact?type=quote',
            title: 'Contact | Reinsoft',
        },
        mockWindow
    );
    assert.equal(publicResult, true);
    assert.deepEqual(mockWindow.dataLayer, [
        {
            event: 'virtual_pageview',
            page_path: '/contact?type=quote',
            page_location: 'https://reinsoft.tech/contact?type=quote',
            page_title: 'Contact | Reinsoft',
        },
    ]);
});

test('trackFormSubmitSuccess pushes form_submit_success without any PII', () => {
    const mockWindow = { dataLayer: [] };

    const result = trackFormSubmitSuccess(
        {
            formName: 'quote_form',
            inquiryType: 'Quote Request',
            service: 'Web Development',
            budget: '$5,000 – $7000',
            country: 'USA',
            email: 'user@example.com',
            phone: '+1234567890',
            name: 'Jane Doe',
            message: 'Secret project details',
        },
        mockWindow
    );

    assert.equal(result, true);
    assert.equal(mockWindow.dataLayer.length, 1);

    const payload = mockWindow.dataLayer[0];
    assert.deepEqual(payload, {
        event: 'form_submit_success',
        form_name: 'quote_form',
        inquiry_type: 'Quote Request',
        service: 'Web Development',
        budget: '$5,000 – $7000',
        country: 'USA',
    });
    assert.equal('email' in payload, false);
    assert.equal('phone' in payload, false);
    assert.equal('name' in payload, false);
    assert.equal('message' in payload, false);
});
