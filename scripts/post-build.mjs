import env from "@next/env"
// import { writeOgImages } from './generate-og-images';
import { updateSearchIndexes } from "./update-index.mjs"
import { readFile } from "node:fs/promises"

env.loadEnvConfig(process.cwd())

async function main() {
	const indexes = JSON.parse(
		(await readFile(".next/server/chunks/fumadocs_search.json")).toString()
	)

	await Promise.all([updateSearchIndexes(indexes)])
}

await main().catch((e) => {
	console.error("Failed to run post build script", e)
})
