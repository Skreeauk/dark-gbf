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
	characters = [],
	char = "",
	setChar,
	handleReset,
}) {
	const [open, setOpen] = useState(false)

	const charData = characters.find(
		(character) => character.id.toString() === char
	)

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
									{char ? charData?.name : "Select Character..."}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-48 p-0">
								<Command>
									<CommandInput placeholder="Search..." />
									<CommandEmpty>No character found.</CommandEmpty>
									<CommandGroup>
										<CommandList>
											{characters.map((character) => {
												return (
													<CommandItem
														key={character.id.toString()}
														value={character.id.toString()}
														onSelect={(currentChar) => {
															setChar(currentChar === char ? "" : currentChar)
															setOpen(false)
														}}
													>
														{character.name}
													</CommandItem>
												)
											})}
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
							{char ? (
								<Image src="/character/3040035000.jpg" fill alt="seox" />
							) : (
								<div className="w-full h-full bg-secondary"></div>
							)}
						</div>
						<span className="text-xl font-semibold">
							{char ? charData?.name : "Empty"}
						</span>
						<span className="text-primary/55">
							{char
								? `${charData?.da}% DA / ${charData?.ta}% TA`
								: "0% DA / 0% TA"}
						</span>
					</div>
				</CardContent>
			</Card>
		</>
	)
}
