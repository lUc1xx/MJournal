/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['leonardo.osnova.io'],
        formats: ['image/webp'],
    },
}

module.exports = nextConfig