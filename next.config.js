/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
          {
              source: "/",
              destination: "/main",
          },
      ]
    },
    images: {
        allowFutureImage: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
}

module.exports = nextConfig
