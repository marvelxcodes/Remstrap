/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		// swcPlugins: [['next-superjson-plugin', {}]],
	},
	images: {
		domains: ['images.clerk.dev'],
	},
};

module.exports = nextConfig;
