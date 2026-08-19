/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.konksi.com',
        pathname: '/**',

      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },{
        protocol: "https",
        hostname: "picsum.photos",
      },{
        protocol: "https",
        hostname: "storage.idcloud.kantor",
      },{
        protocol: "https",
        hostname: "is3.cloudhost.id",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
