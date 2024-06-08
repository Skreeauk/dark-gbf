"use client"
import React, { useEffect, useState } from "react"
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion"

import { cn } from "@/lib/utils"

export function FlipWords({ className }) {
	// const words = ["abandon", "exertion", "surge", "trium", "wrath", "fandango"]

	const [currentWord, setCurrentWord] = useState("abandon")

	useEffect(() => {
		const words = ["abandon", "exertion", "surge", "trium", "wrath", "fandango"]
		const duration = 3000

		let i = 0
		const interval = setInterval(() => {
			i++
			if (i === words.length) {
				i = 0
			}
			const word = words[i]
			setCurrentWord(word)
		}, duration)

		return () => clearInterval(interval)
	}, [])

	return (
		<LazyMotion features={domAnimation}>
			<AnimatePresence>
				<m.div
					initial={{
						opacity: 0,
						y: 10,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.4,
						ease: "easeInOut",
						type: "spring",
						stiffness: 100,
						damping: 10,
					}}
					exit={{
						opacity: 0,
						y: -40,
						x: 40,
						filter: "blur(8px)",
						scale: 2,
						position: "absolute",
					}}
					className={cn(
						"z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
						className
					)}
					key={currentWord}
				>
					{currentWord.split("").map((letter, index) => (
						<m.span
							key={currentWord + index}
							initial={{
								opacity: 0,
								y: 10,
								filter: "blur(8px)",
							}}
							animate={{
								opacity: 1,
								y: 0,
								filter: "blur(0px)",
							}}
							transition={{
								delay: index * 0.08,
								duration: 0.4,
							}}
							className="inline-block"
						>
							{letter}
						</m.span>
					))}
				</m.div>
			</AnimatePresence>
		</LazyMotion>
	)
}
