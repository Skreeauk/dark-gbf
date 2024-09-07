"use client"

import { RootProvider } from "fumadocs-ui/provider"
import dynamic from "next/dynamic"

const SearchDialog = dynamic(() => import("@/components/Search"), {
	ssr: false,
})

const inject = `
const item = localStorage.getItem('uwu')
    
if (item === 'true') {
    document.documentElement.classList.add("uwu")
}    
`

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
			<script
				suppressHydrationWarning
				dangerouslySetInnerHTML={{ __html: inject }}
			/>
			{children}
		</RootProvider>
	)
}
