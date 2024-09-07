import { ImageResponse } from "next/og"
import { readFileSync } from "node:fs"

import { source } from "@/app/source"
import { notFound } from "next/navigation"

// if edge

// const zenkaku = fetch(
// 	new URL("./ZenKakuGothicNew-Bold.ttf", import.meta.url),
// ).then((res) => res.arrayBuffer())

const zenkaku = readFileSync("./app/og/[...slugs]/ZenKakuGothicNew-Bold.ttf")
const logoData = readFileSync("./app/og/[...slugs]/logo.png")
const logoSrc = Uint8Array.from(logoData).buffer

export async function GET(req, { params }) {
	// if (zenkaku) console.log("Font Fetched")

	const page = source.getPage(params.slugs.slice(0, -1))
	if (!page) notFound()

	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					height: "100%",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					backgroundImage: "linear-gradient(to bottom right, #4f46e5, #d8b4fe)",
					fontSize: 68,
					letterSpacing: -2,
					fontWeight: 700,
					gap: 10,
					textAlign: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						textAlign: "center",
						fontSize: 84,
						gap: 28,
					}}
				>
					<img src={logoSrc} height={128} width={128} />
					<span>Dark GBF</span>
				</div>

				<div style={{}}>{page.data.title || "Be the 闇 you deserve"}</div>
				<div
					style={{
						fontSize: 56,
					}}
				>
					{page.data.description}
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: "Zen Kaku Gothic New",
					data: await zenkaku,
					style: "normal",
					weight: 700,
				},
			],
		}
	)
}

export async function generateStaticParams() {
	// console.log(source.generateParams("slugs"))
	const slugs = source.generateParams("slugs").map((param) => ({
		...param,
		slugs: [...param.slugs, "og.png"],
	}))
	// console.log("Slugs:", slugs)
	return slugs
}
