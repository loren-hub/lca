/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/ciberseguridad-en-:location',
        destination: '/ciberseguridad-en/:location',
      },
    ]
  },
}

export default nextConfig

