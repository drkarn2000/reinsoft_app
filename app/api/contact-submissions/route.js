import { NextResponse } from 'next/server';
import { sendSubmissionEmail } from '@/lib/mail';

export async function POST(req) {
    try {
        const data = await req.json();

        // Validation - Budget is optional for general contact
        if (!data.name || !data.email || !data.message) {
            return NextResponse.json({ error: 'Name, email and message are required' }, { status: 400 });
        }

        // Send email with specific subject
        const result = await sendSubmissionEmail({
            ...data,
            subject: `CONTACT FORM: Submission from ${data.name}`
        });

        if (!result.success) {
            console.error('Failed to send contact notification email:', result.error);
        }

        return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 });
    } catch (error) {
        console.error('Contact submission error:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
