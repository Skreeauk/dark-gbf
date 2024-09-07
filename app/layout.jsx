import { Zen_Kaku_Gothic_New } from "next/font/google"
import localFont from "next/font/local"

import "@/css/globals.css"

import { cn } from "@/lib/utils"

import { Provider } from "@/components/Provider"

import { openGraph, twitter } from "@/lib/utils/meta"

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
	weight: ["500", "700"],
	subsets: ["latin"],
	variable: "--font-zen-kaku-gothic",
	display: "swap",
})

const Yuruka = localFont({
	src: "./FOT-YurukaStd-UB.otf",
	variable: "--font-yuruka",
	display: "swap",
})

export const metadata = {
	title: "Dark GBF",
	description: "Be the 闇 you deserve",
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
		<html
			lang="en"
			suppressHydrationWarning
			className={cn(ZenKakuGothicNew.variable, Yuruka.variable)}
		>
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body
				className={cn(
					"antialiased min-h-screen bg-background flex flex-col relative font-zen_kaku_gothic"
				)}
			>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
