import React from "react"
import { useDroppable } from "@dnd-kit/core"
import { cn } from "@/lib/utils"

export default function Droppable({ className, ...props }) {
	const { isOver, setNodeRef } = useDroppable({
		id: props.id,
	})
	const style = {
		color: isOver ? "green" : undefined,
	}

	return (
		<div ref={setNodeRef} className={cn(className, isOver && "bg-primary/50")}>
			{props.children}
		</div>
	)
}
