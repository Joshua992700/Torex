/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.chromethemer.com',
        pathname: '/**', // Allow all paths under this hostname
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**', // Allow all paths under this hostname
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
        pathname: '/**', // Allow all paths under this hostname
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com', // Add the required hostname here
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
