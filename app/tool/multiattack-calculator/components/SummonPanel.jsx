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
	primals = [],
	openPrimal1,
	openPrimal2,
	setOpenPrimal1,
	setOpenPrimal2,
	primal1,
	primal2,
	setPrimal1,
	setPrimal2,
}) {
	return (
		<>
			{/* Summon 1 */}
			<div className="grid items-center w-full grid-cols-2 gap-6 p-4 md:p-6">
				<div className="grid items-center gap-2">
					<div className="bg-secondary relative aspect-[28/16]">
						{primal1 ? (
							<Image src="/summon/2040090000.jpg" fill alt="hades" />
						) : (
							<div className="w-full h-full bg-secondary"></div>
						)}
					</div>
					<Popover open={openPrimal1} onOpenChange={setOpenPrimal1}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={openPrimal1}
								className="justify-between flex-1"
								aria-label="Select Primal"
							>
								{primal1
									? primals.find((primal) => primal.value === primal1)?.label
									: "Select Primal..."}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-40 p-0 md:w-72">
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
							<Image src="/summon/2040090000.jpg" fill alt="hades" />
						) : (
							<div className="w-full h-full bg-secondary"></div>
						)}
					</div>
					<Popover open={openPrimal2} onOpenChange={setOpenPrimal2}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={openPrimal2}
								className="justify-between flex-1"
								aria-label="Select Primal"
							>
								{primal2
									? primals.find((primal) => primal.value === primal2)?.label
									: "Select Primal..."}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-40 p-0 md:w-72">
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
		</>
	)
}
