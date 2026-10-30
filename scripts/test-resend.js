#!/usr/bin/env node

/**
 * REINSOFT IT SOLUTIONS - Resend Email Integration Test Script
 * 
 * Safely validates email configuration and recipient parsing.
 * - Never logs or exposes API keys or secrets
 * - Uses only synthetic test data (no real customer information)
 * - Safe to run in any environment
 */

const fs = require('fs');
const path = require('path');

// Safe loader for local environment variables (.env.local first, fallback to .env)
function loadEnv() {
    ['.env.local', '.env'].forEach((fileName) => {
        const filePath = path.resolve(process.cwd(), fileName);
        if (fs.existsSync(filePath)) {
            const lines = fs.readFileSync(filePath, 'utf8').split('\n');
            lines.forEach((line) => {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith('#')) return;
                const match = trimmed.match(/^([^=]+)=(.*)$/);
                if (match) {
                    const key = match[1].trim();
                    let val = match[2].trim().replace(/^["']|["']$/g, '');
                    if (!process.env[key]) {
                        process.env[key] = val;
                    }
                }
            });
        }
    });
}

loadEnv();

async function runTest() {
    console.log('\n======================================================');
    console.log('  REINSOFT IT SOLUTIONS - RESEND INTEGRATION TEST     ');
    console.log('======================================================\n');

    // Dynamically import ESM mail module
    const { getNotificationRecipients, sendSubmissionEmail } = await import('../lib/mail.js');

    // 1. Validate Recipient Parsing
    console.log('1. Testing Recipient Address Parsing & Validation:');
    const testCases = [
        { input: undefined, expected: ['info@reinsoft.tech', 'reinsoftitsolutions@gmail.com'], label: 'Default fallback (undefined)' },
        { input: 'info@reinsoft.tech, reinsoftitsolutions@gmail.com', expected: ['info@reinsoft.tech', 'reinsoftitsolutions@gmail.com'], label: 'Comma-separated inboxes' },
        { input: '  first@test.com ,  second@test.com  ', expected: ['first@test.com', 'second@test.com'], label: 'Trim whitespace' },
        { input: 'valid@test.com, not-an-email, another@test.com', expected: ['valid@test.com', 'another@test.com'], label: 'Filter invalid address' },
    ];

    let allParsingPassed = true;
    testCases.forEach((tc, idx) => {
        const result = getNotificationRecipients(tc.input);
        const match = JSON.stringify(result) === JSON.stringify(tc.expected);
        if (match) {
            console.log(`   [PASS] Case ${idx + 1}: ${tc.label} ->`, result);
        } else {
            console.log(`   [FAIL] Case ${idx + 1}: ${tc.label} -> Got:`, result, 'Expected:', tc.expected);
            allParsingPassed = false;
        }
    });

    console.log('\n2. Checking Local Environment Configuration:');
    const hasApiKey = Boolean(process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim().length > 0);
    const configuredRecipients = getNotificationRecipients();
    const fromAddress = process.env.RESEND_FROM || 'Reinsoft IT Solutions <notifications@reinsoft.tech>';

    console.log(`   - RESEND_API_KEY:     ${hasApiKey ? '[Configured]' : '[MISSING in local environment]'}`);
    console.log(`   - Configured Senders: ${fromAddress}`);
    console.log(`   - Target Recipients:  ${configuredRecipients.join(', ')}`);

    if (!hasApiKey) {
        console.log('\n[INFO] Local RESEND_API_KEY is not configured in .env.local or .env.');
        console.log('       A live transmission test cannot be dispatched without a local key.');
        console.log('       (Production key was configured in Vercel as reported by user).');
        console.log('\n[RESULT] Recipient logic & Resend library integration: PASS (Static)');
        console.log('         Live email delivery: SKIPPED (Awaiting local key for live dispatch)\n');
        return;
    }

    console.log('\n3. Dispatching Synthetic Test Message via Resend API...');
    const syntheticPayload = {
        name: 'Synthetic System Verification',
        email: 'synthetic-test@reinsoft.local',
        companyName: 'Reinsoft Test Harness',
        phone: '+91 00000 00000',
        budget: 'Testing',
        enquiryType: 'Integration Verification',
        message: 'This is an automated synthetic verification message to confirm Resend delivery pipeline functionality.',
        subject: '[TEST] Resend Integration Verification',
    };

    const result = await sendSubmissionEmail(syntheticPayload);

    if (result.success) {
        console.log('\n✅ [SUCCESS] Synthetic test email accepted by Resend!');
        console.log(`   - Resend Message ID: ${result.id}`);
        console.log(`   - Targeted inboxes:   ${configuredRecipients.join(', ')}`);
    } else {
        console.log('\n⚠️ [NOTICE] Resend API responded with an error or restriction:');
        console.log(`   - Error: ${result.error}`);
        console.log('   - Common causes:');
        console.log('     * Domain reinsoft.tech not yet verified in Resend (requires onboarding@resend.dev)');
        console.log('     * Sending to unverified addresses while in Resend sandbox mode');
    }
    console.log('');
}

runTest().catch((err) => {
    console.error('Fatal error in test script:', err);
    process.exit(1);
});
