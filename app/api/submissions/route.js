import { NextResponse } from 'next/server';
import { sendSubmissionEmail } from '@/lib/mail';
import prisma from '@/lib/prisma';

export async function POST(req) {
    try {
        const data = await req.json();

        // Validation
        if (!data.name || !data.email || !data.message || !data.budget || !data.phone) {
            return NextResponse.json({ error: 'Name, email, phone, budget and message are required' }, { status: 400 });
        }

        // Persist to database FormSubmission
        try {
            await prisma.formSubmission.create({
                data: {
                    type: 'QUOTE_REQUEST',
                    name: data.name.trim(),
                    email: data.email.trim(),
                    phone: data.phone || null,
                    companyName: data.companyName || null,
                    enquiryType: data.enquiryType || 'Quote Request',
                    budget: data.budget || null,
                    message: data.message.trim(),
                    status: 'NEW',
                },
            });
        } catch (dbErr) {
            console.error('Failed to save quote submission to DB:', dbErr);
        }

        // Send email notification
        const result = await sendSubmissionEmail(data);

        if (!result.success) {
            console.error('Failed to send notification email:', result.error);
        }

        return NextResponse.json({ success: true, message: 'Submission received' }, { status: 200 });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
