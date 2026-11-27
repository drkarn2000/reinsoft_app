import { Resend } from 'resend';

const DEFAULT_RECIPIENTS = ['info@reinsoft.tech', 'reinsoftitsolutions@gmail.com'];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Parses and validates comma-separated or single recipient emails.
 * Supports comma-separated strings (e.g. "info@reinsoft.tech, reinsoftitsolutions@gmail.com").
 * Automatically ensures both mandated notification inboxes receive alerts even if legacy
 * local configurations only specify the single primary address.
 */
export function getNotificationRecipients(envEmailTo = process.env.EMAIL_TO) {
    if (!envEmailTo || typeof envEmailTo !== 'string') {
        return DEFAULT_RECIPIENTS;
    }

    const recipients = envEmailTo
        .split(',')
        .map((addr) => addr.trim())
        .filter((addr) => EMAIL_REGEX.test(addr));

    if (recipients.length === 0) {
        return DEFAULT_RECIPIENTS;
    }

    // If legacy environment contains only the single info@reinsoft.tech address,
    // safely expand to both intended notification recipients.
    if (recipients.length === 1 && recipients[0].toLowerCase() === 'info@reinsoft.tech') {
        return DEFAULT_RECIPIENTS;
    }

    return recipients;
}

/**
 * Sends form inquiry notification emails via the Resend API.
 * Preserves the exact return contract { success: boolean, error?: string, id?: string }.
 */
export async function sendSubmissionEmail(data) {
    const { name, email, companyName, phone, budget, message, enquiryType, subject } = data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.warn('RESEND_API_KEY is not set. Submission email notification skipped.');
        return {
            success: false,
            error: 'RESEND_API_KEY environment variable is missing.',
        };
    }

    const resend = new Resend(apiKey);
    const recipients = getNotificationRecipients();
    const fromAddress = process.env.RESEND_FROM || 'Reinsoft IT Solutions <notifications@reinsoft.tech>';
    const emailSubject = subject || `New Contact Form Submission from ${name || 'Website Visitor'}`;

    const textContent = `
New Submission Received
---------------------------
Name: ${name || 'N/A'}
Email: ${email || 'N/A'}
Enquiry Type: ${enquiryType || 'N/A'}
Company: ${companyName || 'N/A'}
Phone: ${phone || 'N/A'}
Budget: ${budget || 'N/A'}

Message:
${message || 'N/A'}
    `.trim();

    const htmlContent = `
<h2>New Submission Received</h2>
<p><strong>Name:</strong> ${name || 'N/A'}</p>
<p><strong>Email:</strong> ${email ? `<a href="mailto:${email}">${email}</a>` : 'N/A'}</p>
<p><strong>Enquiry Type:</strong> ${enquiryType || 'N/A'}</p>
<p><strong>Company:</strong> ${companyName || 'N/A'}</p>
<p><strong>Phone:</strong> ${phone ? `<a href="tel:${phone}">${phone}</a>` : 'N/A'}</p>
<p><strong>Budget:</strong> ${budget || 'N/A'}</p>
<p><strong>Message:</strong></p>
<p style="white-space: pre-wrap; background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px;">${message || 'N/A'}</p>
    `.trim();

    try {
        const payload = {
            from: fromAddress,
            to: recipients,
            subject: emailSubject,
            text: textContent,
            html: htmlContent,
        };

        if (email && EMAIL_REGEX.test(email.trim())) {
            payload.reply_to = email.trim();
        }

        const { data: resendData, error: resendError } = await resend.emails.send(payload);

        if (resendError) {
            console.error('Resend delivery failure:', resendError);
            return {
                success: false,
                error: resendError.message || 'Resend API error',
            };
        }

        console.log(`Email dispatched successfully via Resend (ID: ${resendData?.id}) to:`, recipients.join(', '));
        return {
            success: true,
            id: resendData?.id,
        };
    } catch (error) {
        console.error('Error sending email through Resend:', error);
        return {
            success: false,
            error: error.message || 'An unexpected error occurred while sending email.',
        };
    }
}
