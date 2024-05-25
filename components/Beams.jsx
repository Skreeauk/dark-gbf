"use client"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import React, { forwardRef, useRef, useState, useEffect } from "react"

import { VercelGauge } from "./VercelGauge"

import Image from "next/image"

import GridBuilder from "@/public/features/grid_building.png"
import MultiAttack from "@/public/features/multiattack.png"
import Critical from "@/public/features/critical.png"
import GridScore from "@/public/features/grid_score.png"

const Circle = forwardRef(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white dark:bg-slate-600 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				className
			)}
		>
			{children}
		</div>
	)
})

Circle.displayName = "Circle"

const FeatureCircle = forwardRef(({ className, src, alt }, ref) => {
	return (
		<Image
			ref={ref}
			src={src}
			alt={alt}
			unoptimized
			className={cn(
				"z-10 size-12 bg-white dark:bg-slate-600 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				className
			)}
		></Image>
	)
})

FeatureCircle.displayName = "FeatureCircle"

export function AnimatedBeams() {
	const containerRef = useRef(null)
	const div1Ref = useRef(null)
	const div2Ref = useRef(null)
	const div4Ref = useRef(null)
	const div5Ref = useRef(null)
	const div6Ref = useRef(null)

	const [gaugeValue, setGaugeValue] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setGaugeValue(Math.floor(Math.random() * 101))
		}, 3500)

		return () => clearInterval(interval)
	}, [])

	return (
		<div
			className="relative flex items-center justify-center w-full p-5 overflow-hidden border rounded-lg bg-background"
			ref={containerRef}
		>
			<div className="flex flex-col justify-between w-full h-full">
				<div className="flex flex-row items-center justify-between">
					<FeatureCircle ref={div1Ref} src={GridBuilder} alt="Grid Builder" />
					<FeatureCircle
						ref={div5Ref}
						src={MultiAttack}
						alt="Multiattack Calculator"
					/>
				</div>
				<div className="flex flex-row items-center justify-center">
					<Circle ref={div4Ref} className="size-20">
						<VercelGauge
							value={gaugeValue}
							size="lg"
							gapPercent={6}
							strokeWidth={11}
							showValue
							showAnimation
							variant="ascending"
						/>
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<FeatureCircle
						ref={div2Ref}
						src={Critical}
						alt="Critical Calculator"
					/>
					<FeatureCircle ref={div6Ref} src={GridScore} alt="Grid Score" />
				</div>
			</div>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div4Ref}
				curvature={25}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div4Ref}
				curvature={-25}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div4Ref}
				curvature={25}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div4Ref}
				curvature={-25}
				reverse
			/>
		</div>
	)
}
