import {
	defineDocs,
	defineConfig,
	frontmatterSchema,
} from "fumadocs-mdx/config"

import { z } from "zod"

export const { docs, meta } = defineDocs({
	docs: {
		schema: frontmatterSchema.extend({
			keywords: z.array(z.string()).default([]),
			wikiURL: z.string().default(""),
		}),
	},
})

export default defineConfig({
	generateManifest: true,
})
