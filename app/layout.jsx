import { Inter } from "next/font/google"
import "@/css/globals.css"

import { ThemeProvider } from "@/components/providers/ThemeProvider"

import { BackgroundCellCore } from "@/components/BackgroundRipple"
import DockBar from "@/components/DockBar"

import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Dark GBF",
	description: "Tools for Dark Players",
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<head>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</head>
			<body
				className={cn(
					"antialiased min-h-screen bg-background flex flex-col relative md:overflow-hidden",
					inter.className
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<DockBar />
					<BackgroundCellCore />
				</ThemeProvider>
			</body>
		</html>
	)
}
