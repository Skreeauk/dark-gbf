"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
	{ might: "magna", value: 275, fill: "var(--color-magna)" },
	{ might: "normal", value: 200, fill: "var(--color-normal)" },
	{ might: "ex", value: 187, fill: "var(--color-ex)" },
]

const chartConfig = {
	magna: {
		label: "Magna",
		color: "hsl(var(--chart-4))",
	},
	normal: {
		label: "Normal",
		color: "hsl(var(--chart-5))",
	},
	ex: {
		label: "EX",
		color: "hsl(var(--chart-1))",
	},
}

export function MightPreviewChart() {
	return (
		<ChartContainer config={chartConfig}>
			<BarChart
				accessibilityLayer
				data={chartData}
				layout="vertical"
				margin={{
					left: 0,
				}}
			>
				<YAxis
					dataKey="might"
					type="category"
					tickLine={false}
					tickMargin={10}
					axisLine={false}
					tickFormatter={(value) => chartConfig[value]?.label}
				/>
				<XAxis dataKey="value" type="number" hide />
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent hideLabel />}
				/>
				<Bar dataKey="value" layout="vertical" radius={5} />
			</BarChart>
		</ChartContainer>
	)
}
