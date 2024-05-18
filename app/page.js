import {
	BentoGrid,
	BentoGridItem,
} from "@/components/bento-grid"
import { Label } from "@/components/ui/label"
import { AnimatedBeamDemo } from "@/components/Beams"

const items = [
	{
		title: "Critical Calculator",
		description:
			"Being able to count on a crit means consistency.",
		header: <AnimatedBeamDemo />,
		className: "md:col-span-2",
		url: "/critical-calculator",
	},
	{
		title: "Multiattack Calculator",
		description: "Make your life easier with this tool.",
		header: <Skeleton />,
		className: "md:col-span-1",
		url: "/multiattack-calculator",
	},
	{
		title: "The Art of Design",
		description:
			"Discover the beauty of thoughtful and functional design.",
		header: <Skeleton />,
		className: "md:col-span-1",
		url: "#",
	},
	{
		title: "The Power of Communication",
		description:
			"Understand the impact of effective communication in our lives.",
		header: <Skeleton />,
		className: "md:col-span-2",
		url: "#",
	},
]

export default function Home() {
	return (
		<main className="flex-1 flex flex-col gap-10 items-center justify-center">
			<div className="w-full flex flex-col gap-4 items-center justify-center max-w-4xl">
				<Label className="text-5xl font-semibold">
					Dark GBF
				</Label>
				<Label className="text-2xl font-semibold">
					GBF tools with only Dark Characters & Weapons
				</Label>
			</div>
			<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						url={item.url}
						className={item.className}
					/>
				))}
			</BentoGrid>
		</main>
	)
}

function Skeleton() {
	return (
		<div className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
	)
}
