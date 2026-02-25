import { NextResponse } from 'next/server';
import { sendSubmissionEmail } from '@/lib/mail';

export async function POST(req) {
    try {
        const data = await req.json();

        // Validation - Budget is required for lead form
        if (!data.name || !data.email || !data.message || !data.budget || !data.phone) {
            return NextResponse.json({ error: 'Name, email, phone, budget and message are required' }, { status: 400 });
        }

        // Send email with specific subject
        const result = await sendSubmissionEmail({
            ...data,
            subject: `ADS LEAD: ${data.enquiryType || 'New Enquiry'} from ${data.name}`
        });

        if (!result.success) {
            console.error('Failed to send lead notification email:', result.error);
        }

        return NextResponse.json({ success: true, message: 'Lead received' }, { status: 200 });
    } catch (error) {
        console.error('Lead submission error:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
