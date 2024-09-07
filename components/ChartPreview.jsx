"use client"

import { useRef } from "react"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import { MightPreviewChart } from "./charts/MightPreviewChart"
import { StamEnmPreviewChart } from "./charts/StamEnmPreviewChart"

export function ChartPreview() {
	const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))

	return (
		// <div className="relative flex h-96 mb-3 w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background">
		// </div>
		<Carousel
			className="relative flex min-h-[13.5rem] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background"
			plugins={[plugin.current]}
		>
			<CarouselContent>
				<CarouselItem className="w-full">
					<div className="w-full p-1 text-center">
						<MightPreviewChart />
					</div>
				</CarouselItem>
				<CarouselItem className="w-full">
					<div className="w-full p-1 text-center">
						<StamEnmPreviewChart />
					</div>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	)
}
