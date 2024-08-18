"use client"

import { useState } from "react"

import Image from "next/image"

import { ResetIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

export default function CharacterPanel({
	frameworks = [],
	value = "",
	setValue,
	handleReset,
}) {
	const [open, setOpen] = useState(false)

	return (
		<>
			{/* Left */}
			<Card className="basis-1/3">
				<CardContent className="flex flex-col items-center gap-6 pt-6">
					{/* Select Char */}
					<div className="flex items-center justify-between w-64 gap-6 md:w-full">
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									role="combobox"
									aria-expanded={open}
									className="justify-between flex-1"
									aria-label="Select Character"
								>
									{value
										? frameworks.find((framework) => framework.value === value)
												?.label
										: "Select Character..."}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-48 p-0">
								<Command>
									<CommandInput placeholder="Search..." />
									<CommandEmpty>No framework found.</CommandEmpty>
									<CommandGroup>
										<CommandList>
											{frameworks.map((framework) => (
												<CommandItem
													key={framework.value}
													value={framework.value}
													onSelect={(currentValue) => {
														setValue(currentValue === value ? "" : currentValue)
														setOpen(false)
													}}
												>
													{framework.label}
												</CommandItem>
											))}
										</CommandList>
									</CommandGroup>
								</Command>
							</PopoverContent>
						</Popover>
						<Button aria-label="Reset" onClick={() => handleReset()}>
							<ResetIcon className="size-6" />
						</Button>
					</div>
					{/* Char Image Data */}
					<div className="flex flex-col items-center gap-6 pt-6">
						<div className="relative aspect-square size-40 md:size-64">
							{value ? (
								<Image src="/character/3040035000.jpg" fill alt="seox" />
							) : (
								<div className="w-full h-full bg-secondary"></div>
							)}
						</div>
						<span className="text-xl font-semibold">
							{value ? "Seox" : "Empty"}
						</span>
						<span className="text-primary/55">
							{value ? "100% DA / 0% TA" : "0% DA / 0% TA"}
						</span>
					</div>
				</CardContent>
			</Card>
		</>
	)
}
