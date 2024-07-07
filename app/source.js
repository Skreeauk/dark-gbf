import { map } from "@/.map"
import { createMDXSource, defaultSchemas } from "fumadocs-mdx"
import { loader } from "fumadocs-core/source"
import { Icons, createIcon } from "@/components/Icon"
import { z } from "zod"

export const { getPage, getPages, pageTree } = loader({
	baseUrl: "/docs",
	rootDir: "docs",
	icon(icon) {
		if (icon && icon in Icons) return createIcon({ icon: Icons[icon] })
	},
	source: createMDXSource(map, {
		schema: {
			frontmatter: defaultSchemas.frontmatter.extend({
				keywords: z.array(z.string().default([])),
			}),
		},
	}),
})
