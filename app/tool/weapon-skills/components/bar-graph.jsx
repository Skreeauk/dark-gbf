"use client"

import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
	CardHeader,
} from "@/components/ui/card"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

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
	{ browser: "other2", visitors: 90, fill: "var(--color-other2)" },
	{ browser: "other3", visitors: 90, fill: "var(--color-other3)" },
	{ browser: "other4", visitors: 90, fill: "var(--color-other4)" },
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
	other2: {
		label: "Other2",
		color: "hsl(var(--chart-5))",
	},
	other3: {
		label: "Other3",
		color: "hsl(var(--chart-5))",
	},
	other4: {
		label: "Other4",
		color: "hsl(var(--chart-5))",
	},
}

export default function BarGraph() {
	return (
		<Card className="h-full flex flex-col">
			<CardHeader className="items-center">
				<CardTitle>Bar Chart</CardTitle>
			</CardHeader>
			<CardContent className="flex-1">
				<ChartContainer
					config={chartConfig}
					className="h-full w-full"
				>
					<BarChart
						accessibilityLayer
						data={chartData}
						layout="vertical"
						margin={{
							left: 0,
						}}
					>
						<CartesianGrid horizontal={false} />
						<YAxis
							dataKey="browser"
							type="category"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => chartConfig[value]?.label}
						/>
						<XAxis
							dataKey="visitors"
							type="number"
							hide
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar
							dataKey="visitors"
							layout="vertical"
							radius={5}
						>
							<LabelList
								dataKey="visitors"
								position="center"
								offset={8}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
