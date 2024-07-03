// Assume you're using Fumadocs UI
import defaultComponents from "fumadocs-ui/mdx"
import { cn } from "@/lib/utils"

export function useMDXComponents(components) {
	return {
		...defaultComponents,
		...components,
		h1: ({ className, ...props }) => (
			<h1
				className={cn(
					"mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
					className
				)}
				{...props}
			/>
		),
		h2: ({ className, ...props }) => (
			<h2
				className={cn(
					"mt-10 scroll-m-20 border-b pb-1 mb-4 text-3xl font-semibold tracking-tight first:mt-0",
					className
				)}
				{...props}
			/>
		),
	}
}
