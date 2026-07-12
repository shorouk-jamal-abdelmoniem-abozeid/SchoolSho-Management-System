/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {hostname:"images.pixels.com"}
        ]
    }
};

export default nextConfig;
