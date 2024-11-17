/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns:[
        {
            protocol: 'https', 
            hostname: 'www.wizardingworld.com'
        },
        {
            protocol: 'https', 
            hostname: 'ik.imagekit.io'
        },
    ]
   }
};

export default nextConfig;
