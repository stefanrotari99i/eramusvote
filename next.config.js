/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'graph.facebook.com',
            },
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
