import { docs, meta } from "@/.source"
import { createMDXSource } from "fumadocs-mdx"
import { loader } from "fumadocs-core/source"
import { Icons, createIcon } from "@/components/Icon"

export const source = loader({
	baseUrl: "/docs",
	icon(icon) {
		if (icon && icon in Icons) return createIcon({ icon: Icons[icon] })
	},
	source: createMDXSource(docs, meta),
})
