import { source } from "@/app/source"

import { baseURL } from "@/lib/utils/meta"

export default function sitemap() {
	const url = (path) => new URL(path, baseURL).toString()

	return [
		{
			url: url("/"),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: url("/tool"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		...source.getPages().map((page) => ({
			url: url(page.url),
			changeFrequency: "monthly",
			priority: 0.5,
		})),
	]
}
