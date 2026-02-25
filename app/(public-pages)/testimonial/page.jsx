import Testimonials from "@/sections/testimonials";

export const metadata = {
    title: 'Testimonials - Reinsoft',
    description: 'What Our Clients Say About Working With Us',
};

export default function TestimonialPage() {
    return (
        <main className="pt-24 pb-12 min-h-screen">
            {/* Background elements to keep styling consistent */}
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none opacity-40">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 w-[130px] h-[130px] bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 w-[130px] h-[130px] bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 w-[130px] h-[130px] bg-[#F26A06] blur-[100px]" />
            </div>
            <Testimonials />
        </main>
    );
}
