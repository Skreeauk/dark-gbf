import React from "react"
import { useDraggable } from "@dnd-kit/core"
import { cn } from "@/lib/utils"

export default function Draggable({ className, ...props }) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: props.id,
	})
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined

	return (
		<div ref={setNodeRef} style={style} {...listeners} {...attributes} className={cn(className)}>
			{props.children}
		</div>
	)
}
