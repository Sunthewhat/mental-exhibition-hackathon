/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/instragram",
        destination: "https://www.instagram.com/hackmindgallery.kmutt/",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
