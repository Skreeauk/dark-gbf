import { baseURL } from "@/lib/utils/meta"

export default function robots() {
	const url = (path) => new URL(path, baseURL).toString()

	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: url("/sitemap.xml"),
	}
}
