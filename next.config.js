/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ts-freyja-api.onrender.com/api/:path*',
      },
    ]
  },
};

module.exports = nextConfig;
