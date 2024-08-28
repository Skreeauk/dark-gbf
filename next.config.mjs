import createMDX from "fumadocs-mdx/config"

const withMDX = createMDX({
	buildSearchIndex: {},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	eslint: {
		// Replaced by root workspace command
		ignoreDuringBuilds: true,
	},
	images: {
		unoptimized: true,
	},
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
