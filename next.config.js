/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
          {
              source: "/",
              destination: "/anime",
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
