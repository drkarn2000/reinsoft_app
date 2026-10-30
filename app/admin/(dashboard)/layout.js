import { redirect } from 'next/navigation';
import { getAuthenticatedAdmin } from '@/lib/auth';
import AdminShell from '../_components/admin-shell';

export const dynamic = 'force-dynamic';

export default async function AuthenticatedAdminLayout({ children }) {
    const user = await getAuthenticatedAdmin();

    if (!user) {
        redirect('/admin/login');
    }

    return <AdminShell user={user}>{children}</AdminShell>;
}
