import { Card, CardContent } from "@/components/ui/card"

import CarouselGraph from "./components/carousel-graph"
import Options from "./components/options"

export default function Page() {
	return (
		<main className="relative z-50 flex flex-col items-center justify-center flex-1 w-full max-w-5xl gap-6 mx-auto">
			<div className="flex flex-col items-center justify-center w-full max-w-4xl gap-5 pt-6 md:pt-0">
				<h1 className="text-5xl font-semibold text-center">Weapon Skills</h1>
			</div>
			<Card className="w-[95%] md:w-full max-w-5xl md:mx-auto mb-28">
				<CardContent className="flex flex-col items-center w-full h-full gap-6 p-3 pt-3 md:p-6 md:pt-6 md:flex-row">
					<div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-5 py-2">
						<Options />
						<CarouselGraph />
					</div>
				</CardContent>
			</Card>
		</main>
	)
}

const primals = [
	{
		value: "Hades 250",
		label: "Hades 250",
	},
	{
		value: "Celeste 250",
		label: "Celeste 250",
	},
]
