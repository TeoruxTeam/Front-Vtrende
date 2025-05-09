/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.vtrende.kz',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;