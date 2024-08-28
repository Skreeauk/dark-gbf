"use client"

import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
	CardHeader,
} from "@/components/ui/card"

import { CarouselItem } from "@/components/ui/carousel"

import { LabelList, RadialBar, RadialBarChart } from "recharts"

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
	{ browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
	{ browser: "safari", visitors: 200, fill: "var(--color-safari)" },
	{ browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
	{ browser: "edge", visitors: 173, fill: "var(--color-edge)" },
	{ browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	chrome: {
		label: "Chrome",
		color: "hsl(var(--chart-1))",
	},
	safari: {
		label: "Safari",
		color: "hsl(var(--chart-2))",
	},
	firefox: {
		label: "Firefox",
		color: "hsl(var(--chart-3))",
	},
	edge: {
		label: "Edge",
		color: "hsl(var(--chart-4))",
	},
	other: {
		label: "Other",
		color: "hsl(var(--chart-5))",
	},
}

export default function RadialGraph() {
	return (
		<Card className="h-full flex flex-col">
			<CardHeader className="items-center">
				<CardTitle>Radial Chart</CardTitle>
			</CardHeader>
			<CardContent className="flex-1">
				<ChartContainer
					config={chartConfig}
					className="h-full w-full"
				>
					<RadialBarChart
						data={chartData}
						startAngle={-90}
						endAngle={380}
						innerRadius={50}
						outerRadius={180}
					>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									hideLabel
									nameKey="browser"
								/>
							}
						/>
						<RadialBar
							dataKey="visitors"
							background
						>
							<LabelList
								position="insideStart"
								dataKey="browser"
								className="fill-white capitalize mix-blend-luminosity"
								fontSize={11}
							/>
						</RadialBar>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
