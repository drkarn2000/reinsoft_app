import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Submission from '@/models/Submission';

export async function POST(req) {
    try {
        await dbConnect();
        const data = await req.json();

        if (!data.name || !data.email || !data.message) {
            return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
        }

        const submission = await Submission.create(data);
        return NextResponse.json({ success: true, data: submission }, { status: 201 });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
    }
}

export async function GET() {
    try {
        await dbConnect();
        const submissions = await Submission.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: submissions });
    } catch (error) {
        console.error('Fetch submissions error:', error);
        return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
    }
}
