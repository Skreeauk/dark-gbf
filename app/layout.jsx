import { Inter } from "next/font/google"
import "@/css/globals.css"

import { cn } from "@/lib/utils"

import { ViewTransitions } from "next-view-transitions"

import { RootProvider } from "fumadocs-ui/provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Dark GBF",
	description: "Tools for Dark Players",
}

export default function RootLayout({ children }) {
	return (
		<ViewTransitions>
			<html lang="en" suppressHydrationWarning>
				<head>
					<link rel="icon" href="/favicon.ico" />
				</head>
				<body
					className={cn(
						"antialiased min-h-screen bg-background flex flex-col relative",
						inter.className
					)}
				>
					<RootProvider
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
		</ViewTransitions>
	)
}
