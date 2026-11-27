import prisma from '@/lib/prisma';
import PagesEditorClient from './_components/pages-editor';

export const metadata = {
    title: 'Pages & Section Editor | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default async function PagesAdminPage({ searchParams }) {
    const params = await searchParams;
    const initialSlug = params?.slug !== undefined ? params.slug : '';

    // Fetch all pages for selector
    const pages = await prisma.page.findMany({
        select: {
            id: true,
            slug: true,
            title: true,
            pageType: true,
            status: true,
            _count: {
                select: { sections: true },
            },
        },
        orderBy: [{ pageType: 'asc' }, { slug: 'asc' }],
    });

    // Find initial selected page (default to Home or specified slug)
    let selectedPage = pages.find((p) => p.slug === initialSlug) || pages[0] || null;

    let initialPageData = null;
    if (selectedPage) {
        initialPageData = await prisma.page.findUnique({
            where: { id: selectedPage.id },
            include: {
                sections: {
                    orderBy: { sortOrder: 'asc' },
                },
            },
        });
    }

    return (
        <PagesEditorClient
            initialPages={pages}
            initialSelectedPage={initialPageData}
        />
    );
}
