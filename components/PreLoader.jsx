"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import logo from "@/public/logo.webp"

import useScrollHook from "@/lib/hooks/useScrollHook"

const FADE_UP = {
	hidden: { opacity: 0, y: 10 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", duration: 2 },
	},
}

// const PULL_UP = {
// 	hidden: { y: 0 },
// 	show: (i) => ({
// 		y: "-100%",
// 		transition: {
// 			type: "spring",
// 			delay: 2 + i * 0.15,
// 			duration: 2,
// 		},
// 	}),
// }

const BLUR_OUT = {
	hidden: {
		opacity: 1,
		filter: "blur(0px)",
	},
	show: {
		opacity: 0,
		filter: "blur(10px)",
		transition: { type: "spring", duration: 2.2, delay: 1.7 },
	},
}

export function PreLoader() {
	// const arr = [0, 0, 0, 0, 0]

	const [load, setLoad] = useState(true)
	const [blockScroll, allowScroll] = useScrollHook()

	useEffect(() => {
		// Scroll to the top
		window.scrollTo({
			top: 0,
			left: 0,
		})

		// Disable scrolling
		blockScroll()

		setTimeout(() => {
			setLoad(false)

			// Re-enable scrolling
			allowScroll()
		}, 3500)
	}, [])

	return (
		load && (
			<motion.div
				initial="hidden"
				animate="show"
				viewport={{ once: true }}
				className="text-primary z-[100] w-screen h-screen flex absolute overflow-hidden bg-black"
				variants={BLUR_OUT}
			>
				{/* {arr.map((e, i) => {
					return (
						<motion.div
							key={i}
							custom={i}
							variants={PULL_UP}
							className="w-1/4 h-full bg-black"
						/>
					)
				})} */}
				<motion.div
					viewport={{ once: true }}
					className="fixed flex flex-col items-center justify-center w-full h-full gap-8 text-white md:flex-row"
				>
					<motion.h1
						className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
						variants={FADE_UP}
					>
						Dark GBF
					</motion.h1>
					<motion.div className="text-center" variants={FADE_UP}>
						<Image src={logo} alt="logo" quality={100} />
					</motion.div>
				</motion.div>
			</motion.div>
		)
	)
}
