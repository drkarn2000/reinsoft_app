/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
        qualities: [75, 90, 95, 100],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    async redirects() {
        return [
            {
                source: '/portfolio',
                destination: '/our-work',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
