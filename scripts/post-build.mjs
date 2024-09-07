import env from "@next/env"
// import { writeOgImages } from './generate-og-images';
import { updateSearchIndexes } from "./update-index.mjs"
import { readFile } from "node:fs/promises"

env.loadEnvConfig(process.cwd())

async function main() {
	const manifest = JSON.parse(
		(await readFile(".source/manifest.json")).toString()
	)

	console.log("Successfully retrieved manifest")

	await Promise.all([updateSearchIndexes(manifest)])
}

await main().catch((e) => {
	console.error("Failed to run post build script", e)
})
