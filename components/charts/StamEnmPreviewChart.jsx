"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
	ChartLegend,
	ChartLegendContent,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
	{ hp: "0", stamina: 0, enmity: 100 },
	{ hp: "25", stamina: 16, enmity: 65 },
	{ hp: "50", stamina: 50, enmity: 36 },
	{ hp: "75", stamina: 73, enmity: 18 },
	{ hp: "100", stamina: 100, enmity: 0 },
]

const chartConfig = {
	stamina: {
		label: "Stamina",
		color: "hsl(var(--chart-2))",
	},
	enmity: {
		label: "Enmity",
		color: "hsl(var(--chart-4))",
	},
}

export function StamEnmPreviewChart() {
	return (
		<ChartContainer config={chartConfig}>
			<AreaChart
				accessibilityLayer
				data={chartData}
				margin={{
					left: 12,
					right: 12,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="hp"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
					tickFormatter={(value) => value.slice(0, 3)}
				/>
				<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
				<defs>
					<linearGradient id="fillStamina" x1="0" y1="0" x2="0" y2="1">
						<stop
							offset="5%"
							stopColor="var(--color-stamina)"
							stopOpacity={0.8}
						/>
						<stop
							offset="95%"
							stopColor="var(--color-stamina)"
							stopOpacity={0.1}
						/>
					</linearGradient>
					<linearGradient id="fillEnmity" x1="0" y1="0" x2="0" y2="1">
						<stop
							offset="5%"
							stopColor="var(--color-enmity)"
							stopOpacity={0.8}
						/>
						<stop
							offset="95%"
							stopColor="var(--color-enmity)"
							stopOpacity={0.1}
						/>
					</linearGradient>
				</defs>
				<Area
					dataKey="enmity"
					type="natural"
					fill="url(#fillEnmity)"
					fillOpacity={0.4}
					stroke="var(--color-enmity)"
					stackId="a"
				/>
				<Area
					dataKey="stamina"
					type="natural"
					fill="url(#fillStamina)"
					fillOpacity={0.4}
					stroke="var(--color-stamina)"
					stackId="b"
				/>
				<ChartLegend content={<ChartLegendContent />} />
			</AreaChart>
		</ChartContainer>
	)
}
