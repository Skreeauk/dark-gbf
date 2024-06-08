"use client"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import {
	m,
	LazyMotion,
	domAnimation,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion"
import React, { useRef } from "react"

const DEFAULT_MAGNIFICATION = 60
const DEFAULT_DISTANCE = 140

const dockVariants = cva(
	"mx-auto w-max mt-8 h-[58px] p-2 flex items-end gap-2 rounded-2xl border dark:border-[#707070]"
)

const Dock = React.forwardRef(
	(
		{
			className,
			children,
			magnification = DEFAULT_MAGNIFICATION,
			distance = DEFAULT_DISTANCE,
			...props
		},
		ref
	) => {
		const mousex = useMotionValue(Infinity)

		const renderChildren = () => {
			return React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					mousex: mousex,
					magnification: magnification,
					distance: distance,
				})
			})
		}

		return (
			<LazyMotion features={domAnimation}>
				<m.div
					ref={ref}
					onMouseMove={(e) => mousex.set(e.pageX)}
					onMouseLeave={() => mousex.set(Infinity)}
					{...props}
					className={cn(dockVariants({ className }), className)}
				>
					{renderChildren()}
				</m.div>
			</LazyMotion>
		)
	}
)

Dock.displayName = "Dock"

const DockIcon = ({
	size,
	magnification = DEFAULT_MAGNIFICATION,
	distance = DEFAULT_DISTANCE,
	mousex,
	className,
	children,
	...props
}) => {
	const ref = useRef(null)

	const distanceCalc = useTransform(mousex, (val) => {
		const bounds = ref.current?.getBoundingClientRect() ?? {
			x: 0,
			width: 0,
		}

		return val - bounds.x - bounds.width / 2
	})

	let widthSync = useTransform(
		distanceCalc,
		[-distance, 0, distance],
		[40, magnification, 40]
	)

	let width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	})

	return (
		<m.div
			ref={ref}
			style={{ width }}
			className={cn(
				"flex aspect-square cursor-pointer items-center justify-center rounded-lg bg-neutral-400/40",
				className
			)}
			{...props}
		>
			{children}
		</m.div>
	)
}

DockIcon.displayName = "DockIcon"

export { Dock, DockIcon, dockVariants }
