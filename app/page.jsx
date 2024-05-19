import {
	BentoGrid,
	BentoGridItem,
} from "@/components/BentoGrid"

import { OrbitingIcons } from "@/components/OrbitingIcons"
import { AnimatedBeams } from "@/components/Beams"
import { RadarIcons } from "@/components/RadarIcons"

import { Label } from "@/components/ui/label"

const items = [
	{
		title: "Grid Builder",
		description:
			"Discover the beauty of thoughtful and functional design.",
		header: <RadarIcons />,
		className: "md:col-span-2",
		url: "/grid-builder",
	},
	{
		title: "Multiattack Calculator",
		description: "Make your life easier with this tool.",
		header: <Skeleton />,
		className: "md:col-span-1",
		url: "/multiattack-calculator",
	},
	{
		title: "Critical Calculator",
		description: "Count on your chances.",
		header: <OrbitingIcons />,
		className: "md:col-span-1",
		url: "#",
	},
	{
		title: "Grid Score",
		description:
			"Rate your grid with our own CV rating system.",
		header: <AnimatedBeams />,
		className: "md:col-span-2",
		url: "/grid-score",
	},
]

export default function Home() {
	return (
		<main className="relative z-50 flex flex-col items-center justify-center flex-1 w-full max-w-5xl gap-8 mx-auto">
			<div className="flex flex-col items-center justify-center w-full max-w-4xl pt-6 md:pt-0">
				<Label className="text-5xl font-semibold">
					Dark GBF
				</Label>
			</div>
			<BentoGrid className="max-w-5xl px-4 md:px-0 w-full mx-auto md:auto-rows-[20rem] pb-28">
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						url={item.url}
						className={item.className}
						highlight={i == 0}
					/>
				))}
			</BentoGrid>
		</main>
	)
}

function Skeleton() {
	return (
		<div className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
	)
}
