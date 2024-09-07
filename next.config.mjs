import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	reactStrictMode: true,
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
			"usehooks-ts",
		],
	},
	// logging: {
	// 	fetches: {
	// 		fullUrl: true,
	// 	},
	// },
}

export default withMDX(nextConfig)
