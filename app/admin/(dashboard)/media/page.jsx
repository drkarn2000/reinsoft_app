import MediaManagerClient from './_components/media-manager';

export const metadata = {
    title: 'Media Library | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default function MediaAdminPage() {
    return <MediaManagerClient />;
}
