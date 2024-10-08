"use client"
import React from "react"
import { cn } from "@/lib/utils"
import { m } from "framer-motion"

export const Radar = ({ className }) => {
	const circles = new Array(8).fill(1)
	return (
		<div
			className={cn(
				"relative flex size-20 items-center justify-center rounded-full",
				className
			)}
		>
			<div
				style={{
					transformOrigin: "right center",
				}}
				className="absolute right-1/2 top-1/2 z-40 flex h-[5px] overflow-hidden animate-radar-spin w-[400px] items-end justify-center bg-transparent"
			>
				{/* Radar line that rotates */}
				<div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent" />
			</div>
			{/* concentric circles */}
			{circles.map((circle, idx) => (
				<Circle
					style={{
						height: `${(idx + 1) * 5}rem`,
						width: `${(idx + 1) * 5}rem`,
						border: `1px solid rgba(71, 85, 105, ${1 - (idx + 1) * 0.1})`,
					}}
					key={`motion-${idx}`}
					idx={idx}
				/>
			))}
		</div>
	)
}

{
	/* Creating circles */
}
export const Circle = ({ className, children, idx, ...rest }) => {
	return (
		<m.div
			{...rest}
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				delay: idx * 0.1,
				duration: 0.2,
			}}
			className={cn(
				"absolute inset-0 left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-neutral-200",
				className
			)}
		></m.div>
	)
}
