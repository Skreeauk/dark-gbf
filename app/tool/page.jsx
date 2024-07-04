import { BentoGrid, BentoGridItem } from "@/components/BentoGrid"

import { RadarIcons } from "@/components/RadarIcons"
import { WordCycle } from "@/components/WordCycle"
import { OrbitingIcons } from "@/components/OrbitingIcons"
import { AnimatedBeams } from "@/components/Beams"

const items = [
	{
		title: "Grid Builder",
		description: "Discover the beauty of thoughtful and functional design.",
		header: <RadarIcons />,
		className: "md:col-span-2",
		url: "/tool/grid-builder",
	},
	{
		title: "Multiattack Calculator",
		description: "Make your life easier with this tool.",
		header: <WordCycle />,
		className: "md:col-span-1",
		url: "/tool/multiattack-calculator",
	},
	{
		title: "Critical Calculator",
		description: "Count on your chances.",
		header: <OrbitingIcons />,
		className: "md:col-span-1",
		url: "/tool/critical-calculator",
	},
	{
		title: "Grid Score",
		description: "Rate your grid with our own CV rating system.",
		header: <AnimatedBeams />,
		className: "md:col-span-2",
		url: "/tool/grid-score",
	},
]

export default function Page() {
	return (
		<main className="relative z-50 flex flex-col items-center justify-center flex-1 w-full max-w-5xl gap-8 mx-auto">
			<div className="flex flex-col items-center justify-center w-full max-w-4xl pt-6 md:pt-0">
				<h1 className="text-5xl font-semibold">Dark GBF Tool</h1>
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
