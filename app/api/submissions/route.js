import { NextResponse } from 'next/server';
import { sendSubmissionEmail } from '@/lib/mail';

export async function POST(req) {
    try {
        const data = await req.json();

        // Validation
        if (!data.name || !data.email || !data.message || !data.budget) {
            return NextResponse.json({ error: 'Name, email, budget and message are required' }, { status: 400 });
        }

        // Send email notification
        const result = await sendSubmissionEmail(data);

        if (!result.success) {
            console.error('Failed to send notification email:', result.error);
            // Optionally notify the user/client if the notification failed
            // return NextResponse.json({ error: 'Failed to send submission email' }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Submission received' }, { status: 200 });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
