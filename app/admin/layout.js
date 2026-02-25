import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function AdminLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
