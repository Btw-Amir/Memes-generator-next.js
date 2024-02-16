/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'https://api.imgflip.com',
              port: '',
            },
          ],
        },
};

export default nextConfig;
