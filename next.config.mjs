import createMDX from "fumadocs-mdx/config"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: [
			"lucide-react",
			"@radix-ui/react-icons",
			"fumadocs-core",
			"fumadocs-mdx",
			"fumadocs-ui",
		],
	},
	// logging: {
	// 	fetches: {
	// 		fullUrl: true,
	// 	},
	// },
}

export default withMDX(nextConfig)
