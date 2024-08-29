"use client"

import { useState } from "react"

import Image from "next/image"

import { Button } from "@/components/ui/button"
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

export default function SummonPanel({
	summons = [],
	openSummon1,
	openSummon2,
	setOpenSummon1,
	setOpenSummon2,
	summon1,
	summon2,
	setSummon1,
	setSummon2,
}) {
	return (
		<>
			{/* Summon 1 */}
			<div className="grid items-center w-full grid-cols-2 gap-6 p-4 md:p-6">
				<div className="grid items-center gap-2">
					<div className="bg-secondary relative aspect-[28/16]">
						{summon1 ? (
							<Image src="/summon/2040090000.jpg" fill alt="hades" />
						) : (
							<div className="w-full h-full bg-secondary"></div>
						)}
					</div>
					<Popover open={openSummon1} onOpenChange={setOpenSummon1}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={openSummon1}
								className="justify-between flex-1"
								aria-label="Select Summon"
							>
								{summon1
									? summons.find((summon) => summon.name === summon1)?.name
									: "Select Summon..."}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-40 p-0 md:w-72">
							<Command>
								<CommandInput placeholder="Search..." />
								<CommandEmpty>No summon found.</CommandEmpty>
								<CommandGroup>
									<CommandList>
										{summons.map((summon) => (
											<CommandItem
												key={summon.id}
												value={summon.name}
												onSelect={(currentValue) => {
													setSummon1(
														currentValue === summon1 ? "" : currentValue
													)
													setOpenSummon1(false)
												}}
											>
												{summon.name}
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
						{summon2 ? (
							<Image src="/summon/2040090000.jpg" fill alt="hades" />
						) : (
							<div className="w-full h-full bg-secondary"></div>
						)}
					</div>
					<Popover open={openSummon2} onOpenChange={setOpenSummon2}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={openSummon2}
								className="justify-between flex-1"
								aria-label="Select Summon"
							>
								{summon2
									? summons.find((summon) => summon.name === summon2)?.name
									: "Select Summon..."}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-40 p-0 md:w-72">
							<Command>
								<CommandInput placeholder="Search..." />
								<CommandEmpty>No framework found.</CommandEmpty>
								<CommandGroup>
									<CommandList>
										{summons.map((summon) => (
											<CommandItem
												key={summon.id + "2"}
												value={summon.name}
												onSelect={(currentValue) => {
													setSummon2(
														currentValue === summon2 ? "" : currentValue
													)
													setOpenSummon2(false)
												}}
											>
												{summon.name}
											</CommandItem>
										))}
									</CommandList>
								</CommandGroup>
							</Command>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</>
	)
}
