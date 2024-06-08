"use client"
import React from "react"

import { cn } from "@/lib/utils"
import { m } from "framer-motion"

export const IconContainer = ({ icon, delay }) => {
	return (
		<m.div
			initial={{
				opacity: 0,
				scale: 0.95,
			}}
			animate={{
				opacity: 1,
				scale: 1,
			}}
			transition={{
				duration: 0.2,
				delay: delay ? delay : 0,
			}}
			className={cn(
				"relative z-50 flex flex-col items-center justify-center space-y-2"
			)}
		>
			<div className="flex items-center justify-center shadow-inner size-12 rounded-2xl">
				{icon}
			</div>
		</m.div>
	)
}
