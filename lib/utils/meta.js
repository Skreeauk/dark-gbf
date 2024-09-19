export const openGraph = {
	images: [
		{
			url: "https://res.cloudinary.com/do5ymg44v/image/upload/v1724962074/og.png",
			width: 1200,
			height: 630,
			alt: "Dark GBF",
			type: "image/png",
		},
	],
	siteName: "Dark GBF",
}

export const twitter = {
	card: "summary_large_image",
	images: [
		{
			url: "https://res.cloudinary.com/do5ymg44v/image/upload/v1724962074/og.png",
			width: 1200,
			height: 630,
			alt: "Dark GBF",
			type: "image/png",
		},
	],
	creator: "@Skreeauk",
}

export const baseURL = process.env.VERCEL_URL
	? new URL(`https://${process.env.VERCEL_URL}`)
	: process.env.CF_PAGES_URL
	? new URL(`https://dark-gbf.pages.dev`)
	: new URL(`https://localhost:3000`)
