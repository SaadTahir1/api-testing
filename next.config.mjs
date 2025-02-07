/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    api: {
        bodyParser: true, // ✅ Ensure request body is parsed correctly
    },
};

export default nextConfig;
