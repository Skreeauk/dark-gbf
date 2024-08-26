import { cn } from "@/lib/utils"
// import Link from "next/link"
import { Link } from "next-view-transitions"
import { BorderBeam } from "../magicui/border-beam"

export const BentoGrid = ({ className, children }) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
				className
			)}
		>
			{children}
		</div>
	)
}

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	url,
	highlight,
}) => {
	return (
		<Link
			href={url}
			className={cn(
				"md:relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-inner dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-black/[0.1] justify-between flex flex-col &:not(:last-child):space-y-4",
				className
			)}
		>
			{header}
			<div className="transition duration-200 group-hover/bento:translate-x-2 *:font-zen_kaku_gothic">
				<div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
					{title}
				</div>
				<div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
					{description}
				</div>
			</div>
			{highlight && (
				<BorderBeam
					size={300}
					duration={8}
					delay={0}
					className={"hidden md:inline"}
				/>
			)}
		</Link>
	)
}
