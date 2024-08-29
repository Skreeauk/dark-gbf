import { Zen_Kaku_Gothic_New } from "next/font/google"
import "@/css/globals.css"

import { cn } from "@/lib/utils"

import { Provider } from "@/components/Provider"

import { openGraph, twitter } from "@/lib/utils/meta"

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
	weight: ["400", "500", "700"],
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
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
