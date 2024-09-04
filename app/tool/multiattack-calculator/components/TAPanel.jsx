"use client"

import React from "react"
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
	Dialog,
	DialogTrigger,
	DialogClose,
	DialogDescription,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
	SelectTrigger,
	Select,
	SelectContent,
	SelectItem,
	SelectValue,
	SelectGroup,
} from "@/components/ui/select"

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

	const [value, setValue] = useState(0)

	const handleInput = (e) => {
		let cleanInput = sanitizeInput(e)

		setValue(cleanInput)
	}

	const sanitizeInput = (e) => {
		// Remove any non-numeric characters, including minus signs
		let newValue = e.target.value.replace(/[^0-9]/g, "")

		// Remove leading zeros
		newValue = newValue.replace(/^0+/, "")

		// If the value is empty after removing leading zeros, set it to '0'
		if (newValue === "") {
			newValue = "0"
		}

		return newValue
	}

	const handleKeyDown = (e) => {
		// Prevent the minus sign
		if (e.key === "-") {
			e.preventDefault()
		}
	}

	return (
		<>
			<Card className="w-full h-full">
				<CardContent className="flex flex-col items-center gap-4 pt-6 mx-0 md:mx-6 *:w-full">
					<div className="flex flex-col items-center gap-5 *:w-full">
						<div className="grid items-center grid-cols-3 gap-2 md:gap-0">
							<span>Aura</span>
							<Dialog className="">
								<DialogTrigger asChild>
									<Button
										variant="outline"
										className="col-span-2"
										aria-label="Set Awakening"
									>
										Set Aura
									</Button>
								</DialogTrigger>
								<DialogContent className="sm:max-w-[425px]">
									<DialogHeader>
										<DialogTitle>Auras</DialogTitle>
										<DialogDescription>
											Other auras outside of grid. Exaltos are automatically
											counted from grid.
										</DialogDescription>
									</DialogHeader>
									<div className="grid grid-cols-1 gap-4 py-4">
										<div className="flex items-center justify-center gap-4">
											<Label className="basis-1/3" htmlFor="dragon">
												Dragon
											</Label>
											<Select defaultValue={0}>
												<SelectTrigger id="dragon" className="flex-1">
													<SelectValue placeholder="Select a stage" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectItem value={0}>None</SelectItem>
														<SelectItem value={10}>10% (Base)</SelectItem>
														<SelectItem value={20}>20% (MLB)</SelectItem>
														<SelectItem value={40}>40% (FLB)</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</div>
										<div className="flex items-center justify-center gap-4">
											<Label className="basis-1/3" htmlFor="wedges">
												Wedges of the Sky
											</Label>
											<Select defaultValue={0}>
												<SelectTrigger id="wedges" className="flex-1">
													<SelectValue placeholder="Select a stage" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectItem value={0}>None</SelectItem>
														<SelectItem value={20}>20% (MLB)</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</div>
										<div className="flex items-center justify-center gap-4">
											<Label className="basis-1/3" htmlFor="passive">
												Character Passive
											</Label>
											<Select defaultValue={0}>
												<SelectTrigger id="passive" className="flex-1">
													<SelectValue placeholder="Select a value" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectItem value={0}>None</SelectItem>
														<SelectItem value={10}>10%</SelectItem>
														<SelectItem value={20}>20%</SelectItem>
														<SelectItem value={30}>30%</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</div>
										<div className="flex items-center justify-center gap-4">
											<Label className="basis-1/3" htmlFor="exaltoAura">
												Exaltos
											</Label>
											<Input
												id="exaltoAura"
												type="number"
												value={0}
												disabled
												className="flex-1"
											/>
										</div>
										<div className="flex items-center justify-center gap-4">
											<Label className="basis-1/3" htmlFor="otherAura">
												Others
											</Label>
											<Input
												id="otherAura"
												type="number"
												value={value}
												defaultValue={0}
												min={0}
												onChange={handleInput}
												onKeyDown={handleKeyDown}
												className="flex-1"
											/>
										</div>
									</div>
									<DialogFooter>
										<DialogClose asChild>
											<Button
												type="button"
												onClick={() => console.log("selected")}
											>
												Select
											</Button>
										</DialogClose>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</div>
						<div className="grid items-center grid-cols-3 gap-2 md:gap-0">
							<span>Awakening / Mastery</span>
							<Dialog className="">
								<DialogTrigger asChild>
									<Button
										variant="outline"
										className="col-span-2"
										aria-label="Set Masteries"
									>
										Set Awakening / Masteries
									</Button>
								</DialogTrigger>
								<DialogContent className="sm:max-w-[425px]">
									<DialogHeader>
										<DialogTitle>Awakening / Masteries</DialogTitle>
										<DialogDescription>
											Awakening, EMP, Ring, Earring.
										</DialogDescription>
									</DialogHeader>
									<div className="grid grid-cols-1 gap-4 py-4">
										<div className="flex items-center justify-center gap-4">
											<Label className="basis-1/3" htmlFor="awakening">
												Awakening
											</Label>
											<Select defaultValue={3}>
												<SelectTrigger id="awakening" className="flex-1">
													<SelectValue placeholder="Select an awakening" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectItem value={3}>Balanced</SelectItem>
														<SelectItem value={5}>Multi Attack</SelectItem>
														<SelectItem value={0}>Other</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</div>
										<div className="flex items-center justify-center gap-4">
											<Label className="basis-1/3" htmlFor="emp">
												EMP
											</Label>
											<Input
												id="emp"
												type="number"
												defaultValue={0}
												min={0}
												max={100}
												onChange={(e) => {
													!e.target.value || e.target.value < 0
														? setEmp(0)
														: setEmp(parseFloat(e.target.value))
												}}
												className="flex-1"
											/>
										</div>
										<div className="flex items-center justify-center gap-4">
											<Label className="basis-1/3" htmlFor="ring">
												Ring
											</Label>
											<Input
												id="ring"
												type="number"
												defaultValue={0}
												min={0}
												max={100}
												onChange={(e) => {
													!e.target.value || e.target.value < 0
														? setRing(0)
														: setRing(parseFloat(e.target.value))
												}}
												className="flex-1"
											/>
										</div>
										<div className="flex items-center justify-center gap-4">
											<Label className="basis-1/3" htmlFor="earring">
												Earring
											</Label>
											<Input
												id="earring"
												type="number"
												defaultValue={0}
												min={0}
												max={100}
												onChange={(e) => {
													!e.target.value || e.target.value < 0
														? setEarring(0)
														: setEarring(parseFloat(e.target.value))
												}}
												className="flex-1"
											/>
										</div>
									</div>
									<DialogFooter>
										<DialogClose asChild>
											<Button
												type="button"
												onClick={() => console.log("selected")}
											>
												Select
											</Button>
										</DialogClose>
									</DialogFooter>
								</DialogContent>
							</Dialog>
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
