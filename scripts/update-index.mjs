import algosearch from "algoliasearch"
import { sync, updateDocuments } from "fumadocs-core/search-algolia/server"

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

	await customSync(client, {
		document: process.env.NEXT_PUBLIC_ALGOLIA_INDEX ?? "document",
		documents: indexes.map((docs) => {
			console.log(docs)
			return {
				_id: docs.id,
				title: docs.title,
				description: docs.description,
				url: docs.url,
				structured: docs.structuredData,
				tag: docs.url.split("/")[2],
				extra_data: {
					keywords: docs._data.frontmatter.keywords,
				},
			}
		}),
	})

	console.log("search updated")
}

async function setIndexSettings(index) {
	await index.setSettings({
		attributeForDistinct: "page_id",
		attributesToRetrieve: ["title", "section", "content", "url", "section_id"],
		searchableAttributes: ["title", "section", "content", "keywords"],
		attributesToSnippet: [],
		attributesForFaceting: ["tag"],
	})
}

async function customSync(client, options) {
	const { document = "document", documents } = options
	const index = client.initIndex(document)
	await setIndexSettings(index)
	await updateDocuments(index, documents)
}
