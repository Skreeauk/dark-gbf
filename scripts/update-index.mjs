import algosearch from "algoliasearch"
import { sync } from "fumadocs-core/search-algolia/server"

export async function updateSearchIndexes(indexes) {
	if (!process.env.ALGOLIA_WRITE_KEY) {
		console.warn("Algolia API Key not found, skip updating search index.")
		return
	}

	if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
		console.warn("Algolia App ID not found, skip updating search index.")
		return
	}

	const client = algosearch(
		process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
		process.env.ALGOLIA_WRITE_KEY,
		{
			timeouts: {
				connect: 60,
				read: 180,
				write: 180,
			},
		}
	)

	await sync(client, {
		document: process.env.NEXT_PUBLIC_ALGOLIA_INDEX ?? "document",
		documents: indexes.map((docs) => {
			return {
				_id: docs.id,
				title: docs.title,
				description: docs.description,
				url: docs.url,
				structured: docs.structuredData,
				tag: docs.url.split("/")[2],
			}
		}),
	})

	console.log("search updated")
}
