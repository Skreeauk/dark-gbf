"use client"

import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

export default function Options() {
	const [openPrimal1, setOpenPrimal1] = useState(false)
	const [primal1, setPrimal1] = useState("")

	const [openPrimal2, setOpenPrimal2] = useState(false)
	const [primal2, setPrimal2] = useState("")

	const [val, setVal] = useState([100])

	return (
		<Card>
			<CardContent className="flex flex-col items-center p-3 pt-3 md:p-6 md:pt-6">
				<div className="grid items-center w-full grid-cols-2 gap-6 p-4 md:p-6">
					{/* Summon 1 */}
					<div className="grid items-center gap-2">
						<div className="bg-secondary relative aspect-[28/16]">
							{primal1 ? (
								// <Image
								// 	src="/summon/2040090000.jpg"
								// 	fill
								// 	alt="hades"
								// />
								<div className="w-full h-full bg-secondary"></div>
							) : (
								<div className="w-full h-full bg-secondary"></div>
							)}
						</div>
						<Popover
							open={openPrimal1}
							onOpenChange={setOpenPrimal1}
						>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									role="combobox"
									aria-expanded={openPrimal1}
									className="justify-between flex-1"
									aria-label="Select Primal"
								>
									{primal1
										? primals.find(
												(primal) => primal.value.toLowerCase() === primal1
										  )?.label
										: "Select Primal..."}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-40 p-0 md:w-44">
								<Command>
									<CommandInput placeholder="Search..." />
									<CommandEmpty>No framework found.</CommandEmpty>
									<CommandGroup>
										<CommandList>
											{primals.map((primal) => (
												<CommandItem
													key={primal.value}
													value={primal.value}
													onSelect={(currentValue) => {
														setPrimal1(
															currentValue === primal1 ? "" : currentValue
														)
														setOpenPrimal1(false)
													}}
												>
													{primal.label}
												</CommandItem>
											))}
										</CommandList>
									</CommandGroup>
								</Command>
							</PopoverContent>
						</Popover>
					</div>
					{/* Summon 2 */}
					<div className="grid items-center gap-2">
						<div className="bg-secondary relative aspect-[28/16]">
							{primal2 ? (
								// <Image
								// 	src="/summon/2040090000.jpg"
								// 	fill
								// 	alt="hades"
								// />
								<div className="w-full h-full bg-secondary"></div>
							) : (
								<div className="w-full h-full bg-secondary"></div>
							)}
						</div>
						<Popover
							open={openPrimal2}
							onOpenChange={setOpenPrimal2}
						>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									role="combobox"
									aria-expanded={openPrimal2}
									className="justify-between flex-1"
									aria-label="Select Primal"
								>
									{primal2
										? primals.find(
												(primal) => primal.value.toLowerCase() === primal2
										  )?.label
										: "Select Primal..."}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-40 p-0 md:w-44">
								<Command>
									<CommandInput placeholder="Search..." />
									<CommandEmpty>No framework found.</CommandEmpty>
									<CommandGroup>
										<CommandList>
											{primals.map((primal) => (
												<CommandItem
													key={primal.value}
													value={primal.value}
													onSelect={(currentValue) => {
														setPrimal2(
															currentValue === primal2 ? "" : currentValue
														)
														setOpenPrimal2(false)
													}}
												>
													{primal.label}
												</CommandItem>
											))}
										</CommandList>
									</CommandGroup>
								</Command>
							</PopoverContent>
						</Popover>
					</div>
				</div>
				{/* Options */}
				<div className="grid items-center w-full grid-cols-3 gap-6 p-4 md:p-6">
					{/* Row 1 */}
					<span>Aura</span>
					<div className="col-span-2">
						<Button className="w-full">Button</Button>
					</div>

					{/* Row 2 */}
					<span>MC Class</span>
					<div className="col-span-2">
						<Button className="w-full">Button</Button>
					</div>

					{/* Row 4 */}
					<span>HP %</span>
					<div className="col-span-2 flex gap-6 items-center justify-center">
						<div className="w-8">{val}</div>
						<Slider
							value={val}
							onValueChange={(e) => setVal(e)}
							max={100}
							step={5}
							className="flex-1"
						></Slider>
					</div>
				</div>
			</CardContent>
		</Card>
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
