import prisma from '@/lib/prisma';
import TestimonialsManagerClient from './_components/testimonials-manager';

export const metadata = {
    title: 'Testimonials & Video Reviews | REINSOFT Admin',
};

export const dynamic = 'force-dynamic';

export default async function TestimonialsAdminPage() {
    const testimonials = await prisma.testimonial.findMany({
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });

    return <TestimonialsManagerClient initialTestimonials={testimonials} />;
}
