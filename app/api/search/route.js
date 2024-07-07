import { getPages } from "@/app/source"
import { createSearchAPI } from "fumadocs-core/search/server"

export const { GET } = createSearchAPI("advanced", {
	indexes: getPages().map((page) => {
		page.data?.keywords?.length != 0 &&
			page.data.keywords.map((keyword) => {
				page.data.exports.structuredData.headings.push({
					id: keyword,
					content: keyword,
				})
			})
		return {
			title: page.data.title,
			structuredData: page.data.exports.structuredData,
			id: page.url,
			url: page.url,
		}
	}),
})
