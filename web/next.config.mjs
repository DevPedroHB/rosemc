/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "github.com" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "loremflickr.com" },
      { hostname: "picsum.photos" },
    ],
  },
  reactCompiler: true,
  ppr: "incremental",
  after: true,
};

export default nextConfig;
