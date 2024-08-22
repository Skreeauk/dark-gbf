"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import logo from "@/public/logo.webp"

const FADE_UP = {
	hidden: { opacity: 0, y: 10 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", duration: 2 },
	},
}

const PULL_UP = {
	hidden: { y: 0 },
	show: (i) => ({
		y: "-100%",
		transition: {
			type: "spring",
			delay: 2 + i * 0.15,
			duration: 2,
		},
	}),
}

export function PreLoader() {
	const arr = [0, 0, 0, 0, 0]

	const [load, setLoad] = useState(true)

	useEffect(() => {
		// Scroll to the top
		window.scrollTo({
			top: 0,
			left: 0,
		})

		// Disable scrolling
		document.body.classList.add("overflow-y-hidden")

		setTimeout(() => {
			setLoad(false)

			// Re-enable scrolling
			document.body.classList.remove("overflow-y-hidden")
		}, 4000)
	}, [])

	return (
		load && (
			<motion.div
				initial="hidden"
				animate="show"
				viewport={{ once: true }}
				className="text-primary z-[100] w-screen h-screen flex absolute overflow-hidden"
				// variants={SCROLL_DOWN}
			>
				{arr.map((e, i) => {
					return (
						<motion.div
							key={i}
							custom={i}
							variants={PULL_UP}
							className="h-full w-1/4 bg-black"
						/>
					)
				})}
				<motion.div
					viewport={{ once: true }}
					variants={{
						hidden: {},
						show: {
							opacity: 0,
							y: -10,
							transition: { type: "spring", duration: 2, delay: 1.7 },
						},
					}}
					className="text-white h-full w-full flex items-center justify-center flex-col md:flex-row fixed gap-8"
				>
					<motion.h1
						className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
						variants={FADE_UP}
					>
						Dark GBF
					</motion.h1>
					<motion.div className="text-center" variants={FADE_UP}>
						<Image src={logo} alt="logo" />
					</motion.div>
				</motion.div>
			</motion.div>
		)
	)
}
