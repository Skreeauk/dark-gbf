"use client"

import { RootProvider } from "fumadocs-ui/provider"
import dynamic from "next/dynamic"

const SearchDialog = dynamic(() => import("@/components/Search"), {
	ssr: false,
})

export function Provider({ children }) {
	return (
		<RootProvider
			search={{
				SearchDialog,
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
	)
}
