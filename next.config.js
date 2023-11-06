/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rzyumvhnpighziiabmjs.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/classic_druids/photography/**',
      },
    ],
  },
}

module.exports = nextConfig
