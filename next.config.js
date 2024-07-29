/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
          remotePatterns: [
               {
                    protocol: 'https',
                    hostname: 'owad17hypl5lwyn4.public.blob.vercel-storage.com',
                    port: '',
                    pathname: '/**',
               },

          ]
     }
};

module.exports = nextConfig;
