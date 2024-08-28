"use client"

import {
	Carousel,
	CarouselItem,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

import BarGraph from "./bar-graph"
import RadialGraph from "./radial-graph"
import Skills from "./skills"

export default function CarouselGraph() {
	return (
		<div className="h-full">
			<Carousel
				className="h-full"
				opts={{
					loop: true,
				}}
			>
				<CarouselContent
					className="h-full ml-0 *:h-full *:pl-0"
					fullHeight={true}
				>
					<CarouselItem className="">
						<Skills />
					</CarouselItem>
					<CarouselItem className="">
						<BarGraph />
					</CarouselItem>
					<CarouselItem className="">
						<RadialGraph />
					</CarouselItem>
				</CarouselContent>
				<div className="*:size-10 *:border-none *:bg-transparent *:hover:bg-transparent *:rounded-sm *:translate-y-0 *:z-50">
					<CarouselPrevious className="left-0" />
					<CarouselNext className="right-0" />
				</div>
			</Carousel>
		</div>
	)
}
