import { Zen_Kaku_Gothic_New } from "next/font/google"
import "@/css/globals.css"

import { cn } from "@/lib/utils"

import { RootProvider } from "fumadocs-ui/provider"

import { openGraph, twitter } from "@/utils/meta"

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
	weight: ["300", "400", "500", "700", "900"],
	subsets: ["latin"],
	variable: "--font-zen-kaku-gothic",
	display: "swap",
})

export const metadata = {
	title: "Dark GBF",
	description: "Make your Dark better",
	metadataBase: "https://dark-gbf.vercel.app",
	openGraph: {
		url: "https://dark-gbf.vercel.app",
		type: "website",
		...openGraph,
	},
	twitter: {
		...twitter,
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body
				className={cn(
					"antialiased min-h-screen bg-background flex flex-col relative",
					ZenKakuGothicNew.className
				)}
			>
				<RootProvider
					search={{
						links: [
							["Celeste / Magna Guide", "/docs/celeste"],
							["Hades / Primal Guide", "/docs/hades"],
						],
						options: {
							delayMs: 650,
							defaultTag: "celeste",
							tags: [
								{
									name: "Celeste",
									value: "celeste",
								},
								{
									name: "Hades",
									value: "hades",
								},
							],
						},
					}}
					theme={{
						attribute: "class",
						defaultTheme: "system",
						enableSystem: true,
						disableTransitionOnChange: true,
					}}
				>
					{children}
				</RootProvider>
			</body>
		</html>
	)
}
