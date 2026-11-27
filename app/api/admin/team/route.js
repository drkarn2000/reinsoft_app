import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(request) {
    try {
        await requireAdmin();

        const { searchParams } = new URL(request.url);
        const foundersOnly = searchParams.get('foundersOnly') === 'true';

        const where = {};
        if (foundersOnly) where.isFounder = true;

        const members = await prisma.teamMember.findMany({
            where,
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
        });

        return NextResponse.json({ members });
    } catch (error) {
        console.error('Error fetching team members:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch team members' },
            { status: error.status || 500 }
        );
    }
}

export async function POST(request) {
    try {
        const user = await requireAdmin();
        const body = await request.json();

        const {
            name,
            role,
            focusArea,
            bio,
            imageUrl,
            accentGradient,
            linkedinUrl,
            isFounder,
            sortOrder,
            isEnabled,
        } = body;

        if (!name || !role || !bio) {
            return NextResponse.json(
                { error: 'Name, role, and bio are required' },
                { status: 400 }
            );
        }

        let targetSortOrder = sortOrder;
        if (targetSortOrder === undefined || targetSortOrder === null) {
            const last = await prisma.teamMember.findFirst({
                orderBy: { sortOrder: 'desc' },
            });
            targetSortOrder = last ? last.sortOrder + 1 : 1;
        }

        const member = await prisma.teamMember.create({
            data: {
                name: name.trim(),
                role: role.trim(),
                focusArea: focusArea || null,
                bio: bio.trim(),
                imageUrl: imageUrl || '/assets/team-1.jpg',
                accentGradient: accentGradient || 'from-[#c6a86a] via-[#e7d2a3] to-[#f5ead3]',
                linkedinUrl: linkedinUrl || null,
                isFounder: Boolean(isFounder),
                sortOrder: Number(targetSortOrder),
                isEnabled: isEnabled !== undefined ? Boolean(isEnabled) : true,
            },
        });

        await prisma.auditLog.create({
            data: {
                userId: user.id,
                action: 'CREATE_TEAM_MEMBER',
                targetId: member.id,
                details: { name: member.name },
            },
        });

        try {
            const { revalidatePath } = await import('next/cache');
            revalidatePath('/');
            revalidatePath('/about');
        } catch (e) {
            console.error('Cache revalidation error:', e);
        }

        return NextResponse.json({ member }, { status: 201 });
    } catch (error) {
        console.error('Error creating team member:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create team member' },
            { status: error.status || 500 }
        );
    }
}
