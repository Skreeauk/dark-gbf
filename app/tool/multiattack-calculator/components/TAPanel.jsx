"use client"

import React from "react"
import { useState } from "react"

import Image from "next/image"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import DetailDialog from "./DetailDialog"

export default function TAPanel({}) {
	const [awakening, setAwakening] = useState("balanced")

	const [emp, setEmp] = useState(0)
	const [ring, setRing] = useState(0)
	const [earring, setEarring] = useState(0)

	const [passive, setPassive] = useState(0)
	const [wonder, setWonder] = useState(0)
	const [buff, setBuff] = useState(0)
	const [other, setOther] = useState(0)

	return (
		<>
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
											<h4 className="font-medium leading-none">Awakening</h4>
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
											<h4 className="font-medium leading-none">Masteries</h4>
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
													onChange={(e) => setEmp(parseFloat(e.target.value))}
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
													onChange={(e) => setRing(parseFloat(e.target.value))}
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
									onChange={(e) => setPassive(parseFloat(e.target.value))}
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
									onChange={(e) => setWonder(parseFloat(e.target.value))}
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
								awakening == "balanced" ? 3 : awakening == "multiattack" ? 5 : 0
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
		</>
	)
}
