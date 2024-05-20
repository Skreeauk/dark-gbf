"use client"

import { useState, useEffect } from "react"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
	const [mounted, setMounted] = useState(false)
	const { resolvedTheme, setTheme } = useTheme()

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			className="p-2 hover:bg-transparent"
			onClick={() =>
				setTheme(
					resolvedTheme === "dark" ? "light" : "dark"
				)
			}
		>
			{resolvedTheme === "dark" ? (
				<MoonIcon className="size-10 text-primary" />
			) : (
				<SunIcon className="size-10 text-primary" />
			)}
		</Button>
	)
}
