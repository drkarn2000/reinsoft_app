import CaseStudiesManagerClient from './_components/case-studies-manager';
import { getCaseStudies } from '@/lib/cms';

export const metadata = {
    title: 'Case Studies Management | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default async function CaseStudiesAdminPage() {
    // Use the same image normalization as the public portfolio pages. Preview
    // keeps drafts and archived records visible in the admin listing.
    const caseStudies = await getCaseStudies({ preview: true });

    return <CaseStudiesManagerClient initialCaseStudies={caseStudies} />;
}
