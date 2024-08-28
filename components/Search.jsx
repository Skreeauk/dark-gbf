"use client"

import algo from "algoliasearch/lite"
import SearchDialog from "fumadocs-ui/components/dialog/search-algolia"

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX

const client = algo(appId, apiKey)

const index = client.initIndex(indexName)

export default function CustomSearchDialog(props) {
	return (
		<SearchDialog
			index={index}
			defaultTag="celeste"
			tags={[
				{
					name: "Celeste",
					value: "celeste",
				},
				{
					name: "Hades",
					value: "hades",
				},
			]}
			showAlgolia
			{...props}
		/>
	)
}
