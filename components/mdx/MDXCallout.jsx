import { Callout } from "fumadocs-ui/components/callout"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import {
	LightbulbIcon,
	TriangleAlertIcon,
	OctagonAlertIcon,
	InfoIcon,
} from "lucide-react"

const calloutVariants = cva("flex flex-col pl-4 border-l-2 gap-2", {
	variants: {
		type: {
			default: "border-l-blue-500 [&_span]:text-blue-500",
			tip: "border-l-emerald-500 [&_span]:text-emerald-500",
			warning: "border-l-yellow-500 [&_span]:text-yellow-500",
			danger: "border-l-rose-500 [&_span]:text-rose-500",
		},
	},
	defaultVariants: {
		type: "default",
	},
})

export function MDXCallout({ title, type = "default", children }) {
	return (
		<Callout icon={<></>}>
			<div className={cn(calloutVariants({ type }))}>
				<div className="flex flex-row items-center gap-2">
					{type === "tip" ? (
						<LightbulbIcon className="size-5 basis-5 stroke-emerald-500" />
					) : type === "warning" ? (
						<TriangleAlertIcon className="size-5 basis-5 stroke-yellow-500" />
					) : type === "danger" ? (
						<OctagonAlertIcon className="size-5 basis-5 stroke-rose-500" />
					) : (
						<InfoIcon className="size-5 basis-5 stroke-blue-500" />
					)}
					<span className="font-semibold">{title}</span>
				</div>
				<div className="prose-no-margin">{children}</div>
			</div>
		</Callout>
	)
}
