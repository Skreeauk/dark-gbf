import algosearch from "algoliasearch"

import { updateDocuments } from "fumadocs-core/search-algolia/server"
import { createGetUrl, getSlugs, parseFilePath } from "fumadocs-core/source"

import path from "node:path"

export async function updateSearchIndexes(manifest) {
	if (!process.env.ALGOLIA_WRITE_KEY) {
		console.warn("Algolia API Key not found, skip updating search index.")
		return
	}

	if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
		console.warn("Algolia App ID not found, skip updating search index.")
		return
	}

	if (!manifest?.files) {
		console.warn("Manifest file array empty, return early")
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

	console.log("Initialize Algosearch Client")

	const getUrl = createGetUrl("/docs")

	console.log("Get Docs URL")

	// await customSync(client, {
	// 	document: process.env.NEXT_PUBLIC_ALGOLIA_INDEX ?? "document",
	// 	documents: indexes.map((docs) => {
	// 		return {
	// 			_id: docs.id,
	// 			title: docs.title,
	// 			description: docs.description,
	// 			url: docs.url,
	// 			structured: docs.structuredData,
	// 			tag: docs.url.split("/")[2],
	// 			extra_data: {
	// 				keywords: docs._data.frontmatter.keywords,
	// 			},
	// 		}
	// 	}),
	// })

	await customSync(client, {
		document: process.env.NEXT_PUBLIC_ALGOLIA_INDEX ?? "document",
		documents: manifest.files
			.filter((file) => file.collection === "docs")
			.map((docs) => {
				const url = getUrl(
					getSlugs(parseFilePath(path.relative("content/docs", docs.path)))
				)

				if (!docs.data.structuredData)
					throw new Error("`structuredData` is required")

				return {
					_id: docs.path,
					title: docs.data.frontmatter.title,
					description: docs.data.frontmatter.description,
					url,
					structured: docs.data.structuredData,
					tag: url.split("/")[2],
					extra_data: {
						keywords: docs.data.frontmatter.keywords,
					},
				}
			}),
	})

	console.log("Update Index: Algolia Search Updated")
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
