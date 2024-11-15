/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns:[
        {
            protocol: 'https', 
            hostname: 'www.wizardingworld.com'
        }
    ]
   }
};

export default nextConfig;
