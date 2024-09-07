"use client"

import { useState, useEffect } from "react"
import { useLocalStorage } from "usehooks-ts"

import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

export function UwuToggle({ className }) {
	const [mounted, setMounted] = useState(false)
	const [uwu, setUwu, removeUwu] = useLocalStorage("uwu", false)

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	function handleUwu() {
		uwu
			? document.documentElement.classList.remove("uwu")
			: document.documentElement.classList.add("uwu")
		setUwu(!uwu)
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			className={cn("p-2 hover:bg-transparent", className)}
			onClick={handleUwu}
			aria-label="Toggle uwu"
		>
			<span className={cn("font-yuruka", uwu && "line-through decoration-2")}>
				uwu
			</span>
		</Button>
	)
}
