/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
