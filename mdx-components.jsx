// Assume you're using Fumadocs UI
import defaultComponents from "fumadocs-ui/mdx"

export function useMDXComponents(components) {
	return {
		...defaultComponents,
		...components,
	}
}
