"use client"

import React, { useEffect, useState } from "react"
import {
	m,
	LazyMotion,
	domAnimation,
	useAnimationControls,
} from "framer-motion"
import { cn } from "@/lib/utils"

export default function BackgroundCellCore() {
	return (
		<div className="absolute inset-0 hidden h-full md:block">
			<div className="absolute inset-y-0 h-full overflow-hidden">
				<div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-background [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
				<Pattern className="opacity-[0.6]" cellClassName="border-neutral-700" />
			</div>
		</div>
	)
}

function Pattern({ className, cellClassName }) {
	const x = new Array(30).fill(0)
	const y = new Array(18).fill(0)
	const matrix = x.map((_, i) => y.map((_, j) => [i, j]))
	const [clickedCell, setClickedCell] = useState(null)

	return (
		<LazyMotion features={domAnimation}>
			<div className={cn("flex flex-row relative z-30", className)}>
				{matrix.map((row, rowIdx) => (
					<Row
						key={`matrix-row-${rowIdx}`}
						row={row}
						rowIdx={rowIdx}
						clickedCell={clickedCell}
						setClickedCell={setClickedCell}
						cellClassName={cellClassName}
					></Row>
				))}
			</div>
		</LazyMotion>
	)
}

function Row({ row, rowIdx, clickedCell, setClickedCell, cellClassName }) {
	return (
		<div className="relative z-20 flex flex-col border-b">
			{row.map((column, colIdx) => {
				return (
					<Cell
						key={`matrix-col-${colIdx}`}
						rowIdx={rowIdx}
						colIdx={colIdx}
						clickedCell={clickedCell}
						setClickedCell={setClickedCell}
						cellClassName={cellClassName}
					></Cell>
				)
			})}
		</div>
	)
}

function Cell({ rowIdx, colIdx, clickedCell, setClickedCell, cellClassName }) {
	const controls = useAnimationControls()

	useEffect(() => {
		if (clickedCell) {
			const distance = Math.sqrt(
				Math.pow(clickedCell[0] - rowIdx, 2) +
					Math.pow(clickedCell[1] - colIdx, 2)
			)
			controls.start({
				opacity: [0, 1 - distance * 0.1, 0],
				transition: { duration: distance * 0.2 },
			})
		}
	}, [clickedCell])

	return (
		<div
			className={cn("bg-transparent border-l border-b", cellClassName)}
			onClick={() => setClickedCell([rowIdx, colIdx])}
		>
			<m.div
				initial={{
					opacity: 0,
				}}
				whileHover={{
					opacity: 1,
				}}
				transition={{
					duration: 0.5,
					ease: "backOut",
				}}
				animate={controls}
				className="bg-[rgba(14,91,233,0.7)] dark:bg-[rgba(14,165,233,0.4)] size-16"
			></m.div>
		</div>
	)
}
