import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.kwontkd.com",
          },
        ],
        destination: "https://www.kwontkd.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
