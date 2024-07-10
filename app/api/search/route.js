import { getPages } from "@/app/source"
import { createSearchAPI } from "fumadocs-core/search/server"

export const { GET } = createSearchAPI("advanced", {
	indexes: getPages().map((page) => {
		return {
			title:
				page.data.title +
				" - " +
				page.slugs[0].charAt(0).toUpperCase() +
				page.slugs[0].slice(1),
			structuredData: page.data.exports.structuredData,
			id: page.url,
			url: page.url,
			keywords: page.data.keywords,
		}
	}),
})
