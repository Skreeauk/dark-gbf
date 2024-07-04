"use client"

import React from "react"
import { useState } from "react"

import Image from "next/image"

import { ResetIcon } from "@radix-ui/react-icons"

import { Input } from "@/components/ui/input"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import DetailDialog from "./components/DetailDialog"

export default function Page() {
	// const [grid, setGrid] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")

	const [awakening, setAwakening] = useState("balanced")

	const [openPrimal1, setOpenPrimal1] = useState(false)
	const [primal1, setPrimal1] = useState("")

	const [openPrimal2, setOpenPrimal2] = useState(false)
	const [primal2, setPrimal2] = useState("")

	const [emp, setEmp] = useState(0)
	const [ring, setRing] = useState(0)
	const [earring, setEarring] = useState(0)

	const [passive, setPassive] = useState(0)
	const [wonder, setWonder] = useState(0)
	const [buff, setBuff] = useState(0)
	const [other, setOther] = useState(0)

	function handleReset() {
		setValue("")
		setPrimal1("")
		setPrimal2("")
	}

	return (
		<>
			<main className="relative z-50 flex flex-col items-center justify-center flex-1 w-full max-w-5xl gap-6 mx-auto">
				<div className="flex flex-col items-center justify-center w-full max-w-4xl gap-5 pt-6 md:pt-0">
					<h1 className="text-5xl font-semibold text-center">
						MultiAttack Calculator
					</h1>
				</div>
				<Card className="w-[95%] md:w-full max-w-5xl md:mx-auto mb-28">
					<CardContent className="flex flex-col items-center w-full h-full gap-6 p-3 pt-3 md:p-6 md:pt-6 md:flex-row">
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
													? frameworks.find(
															(framework) => framework.value === value
													  )?.label
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
																	setValue(
																		currentValue === value ? "" : currentValue
																	)
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
						{/* Right */}
						<div className="flex flex-col flex-1 w-full h-full">
							{/* Primal */}
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
												aria-expanded={open}
												className="justify-between flex-1"
												aria-label="Select Primal"
											>
												{primal1
													? primals.find((primal) => primal.value === primal1)
															?.label
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
												aria-expanded={open}
												className="justify-between flex-1"
												aria-label="Select Primal"
											>
												{primal2
													? primals.find((primal) => primal.value === primal2)
															?.label
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
							{/* TA Inputs */}
							<Card className="w-full h-full">
								<CardContent className="flex flex-col items-center gap-4 pt-6 mx-0 md:mx-6 *:w-full">
									<div className="flex flex-col items-center gap-5 *:w-full">
										<div className="grid items-center grid-cols-3 gap-2 md:gap-0">
											<Label>Awakening</Label>
											<Popover className="">
												<PopoverTrigger asChild>
													<Button
														variant="outline"
														className="col-span-2"
														aria-label="Set Awakening"
													>
														Set Awakening
													</Button>
												</PopoverTrigger>
												<PopoverContent className="w-48 md:w-80">
													<div className="grid gap-4">
														<div className="space-y-2">
															<h4 className="font-medium leading-none">
																Awakening
															</h4>
															<p className="text-sm text-muted-foreground text-balance">
																Balanced / Multiattack / Other
															</p>
														</div>
														<RadioGroup
															defaultValue="balanced"
															value={awakening}
															onValueChange={(e) => setAwakening(e)}
															className="grid gap-3 md:gap-4 md:grid-cols-3"
														>
															<div>
																<RadioGroupItem
																	value="balanced"
																	id="balanced"
																	className="sr-only peer"
																/>
																<Label
																	htmlFor="balanced"
																	className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
																>
																	<div className="relative mb-1 size-12 md:mb-3">
																		<Image
																			src="/emp/Silver_Centrum.jpg"
																			fill
																			alt="balanced"
																		/>
																	</div>
																	Balanced
																</Label>
															</div>
															<div>
																<RadioGroupItem
																	value="multiattack"
																	id="multiattack"
																	className="sr-only peer"
																/>
																<Label
																	htmlFor="multiattack"
																	className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
																>
																	<div className="relative mb-1 size-12 md:mb-3">
																		<Image
																			src="/emp/Citrine_Awakening_Orb.jpg"
																			fill
																			alt="multiatk"
																		/>
																	</div>
																	MA
																</Label>
															</div>
															<div>
																<RadioGroupItem
																	value="otherAwakening"
																	id="otherAwakening"
																	className="sr-only peer"
																/>
																<Label
																	htmlFor="otherAwakening"
																	className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
																>
																	<div className="relative mb-1 size-12 md:mb-3">
																		<Image
																			src="/emp/Sapphire_Awakening_Orb.jpg"
																			fill
																			alt="other"
																		/>
																	</div>
																	Other
																</Label>
															</div>
														</RadioGroup>
													</div>
												</PopoverContent>
											</Popover>
										</div>
										<div className="grid items-center grid-cols-3 gap-2 md:gap-0">
											<Label>Mastery</Label>
											<Popover className="">
												<PopoverTrigger asChild>
													<Button
														variant="outline"
														className="col-span-2"
														aria-label="Set Masteries"
													>
														Set Masteries
													</Button>
												</PopoverTrigger>
												<PopoverContent className="w-48 md:w-80">
													<div className="grid gap-4">
														<div className="space-y-2">
															<h4 className="font-medium leading-none">
																Masteries
															</h4>
															<p className="text-sm text-muted-foreground">
																EMP & Ring & Earring
															</p>
														</div>
														<div className="grid gap-3">
															<div className="grid items-center grid-cols-3 gap-4">
																<Label htmlFor="emp">EMP</Label>
																<Input
																	id="emp"
																	type="number"
																	defaultValue={emp}
																	onChange={(e) =>
																		setEmp(parseFloat(e.target.value))
																	}
																	min="0"
																	max="100"
																	className="col-span-2"
																/>
															</div>
															<div className="grid items-center grid-cols-3 gap-4">
																<Label htmlFor="ring">Ring</Label>
																<Input
																	id="ring"
																	type="number"
																	defaultValue={ring}
																	onChange={(e) =>
																		setRing(parseFloat(e.target.value))
																	}
																	min="0"
																	max="10"
																	className="col-span-2"
																/>
															</div>
															<div className="grid items-center grid-cols-3 gap-4">
																<Label htmlFor="earring">Earring</Label>
																<Input
																	id="earring"
																	type="number"
																	defaultValue={earring}
																	onChange={(e) =>
																		setEarring(parseFloat(e.target.value))
																	}
																	min="0"
																	max="10"
																	className="col-span-2"
																/>
															</div>
														</div>
													</div>
												</PopoverContent>
											</Popover>
										</div>
										{/* Passive / Wonder / Buffs / Other */}
										<div className="grid gap-5 md:grid-cols-2">
											<div className="grid items-center grid-cols-3 gap-2 md:grid-cols-1 md:gap-2">
												<Label htmlFor="passive">Passive</Label>
												<Input
													id="passive"
													type="number"
													defaultValue={passive}
													onChange={(e) =>
														setPassive(parseFloat(e.target.value))
													}
													min="0"
													max="100"
													className="col-span-2 md:col-span-1"
												/>
											</div>
											<div className="grid items-center grid-cols-3 gap-2 md:grid-cols-1 md:gap-2">
												<Label htmlFor="wonder">Wonder</Label>
												<Input
													id="wonder"
													type="number"
													defaultValue={wonder}
													onChange={(e) =>
														setWonder(parseFloat(e.target.value))
													}
													min="0"
													max="100"
													className="col-span-2 md:col-span-1"
												/>
											</div>
											<div className="grid items-center grid-cols-3 gap-2 md:grid-cols-1 md:gap-2">
												<Label htmlFor="buff">Buffs</Label>
												<Input
													id="buff"
													type="number"
													defaultValue={buff}
													onChange={(e) => setBuff(parseFloat(e.target.value))}
													min="0"
													max="100"
													className="col-span-2 md:col-span-1"
												/>
											</div>
											<div className="grid items-center grid-cols-3 gap-2 md:grid-cols-1 md:gap-2">
												<Label htmlFor="otherBuff">Other</Label>
												<Input
													id="otherBuff"
													type="number"
													defaultValue={other}
													onChange={(e) => setOther(parseFloat(e.target.value))}
													min="0"
													max="100"
													className="col-span-2 md:col-span-1"
												/>
											</div>
										</div>
									</div>
									<Separator />
									<div className="flex items-center justify-between gap-2 md:gap-0">
										<span>Total excluding Grid: {50 + "% TA"}</span>
										<DetailDialog
											awakening={
												awakening == "balanced"
													? 3
													: awakening == "multiattack"
													? 5
													: 0
											}
											mastery={emp + ring + earring}
											passive={passive}
											wonder={wonder}
											buff={buff}
											other={other}
										/>
									</div>
								</CardContent>
							</Card>
						</div>
					</CardContent>
				</Card>
			</main>
		</>
	)
}

const frameworks = [
	{
		value: "Seox",
		label: "Seox",
	},
	{
		value: "Ilsa",
		label: "Ilsa",
	},
	{
		value: "Bowman",
		label: "Bowman",
	},
]

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
