/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/instagram',
				destination: 'https://www.instagram.com/hackmindgallery.kmutt/',
				permanent: false,
				basePath: false,
			},
		];
	},
	output: 'standalone',
};

export default nextConfig;
