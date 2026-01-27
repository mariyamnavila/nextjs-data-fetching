/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',     
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/add',
        destination: '/dashboard/products/add',
        permanent: false,
      },
    ];
  }
};

export default nextConfig;
