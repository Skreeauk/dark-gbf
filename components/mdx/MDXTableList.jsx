import { cn } from "@/lib/utils"

export function MDXTableList({ className, items, ...props }) {
	return (
		<ul className={cn("my-0", className)}>
			{items.map((item, i) => {
				return (
					<li key={"item" + i} className="text-balance">
						{item}
					</li>
				)
			})}
		</ul>
	)
}
