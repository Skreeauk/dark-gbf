import { Zen_Kaku_Gothic_New } from "next/font/google"
import localFont from "next/font/local"

import "@/css/globals.css"

import { cn } from "@/lib/utils"

import { Provider } from "@/components/Provider"

import { openGraph, twitter, baseURL } from "@/lib/utils/meta"

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
	metadataBase: baseURL,
	openGraph: {
		url: baseURL,
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
				<meta
					name="google-site-verification"
					content="YcHNuPro0k5yKiPu3t7F-TorYUGC3VHpkdx1bJWg2kA"
				/>

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
