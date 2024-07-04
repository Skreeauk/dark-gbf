"use client"

import React from "react"
import { useState, useEffect } from "react"

import {
	DndContext,
	useSensor,
	useSensors,
	TouchSensor,
	MouseSensor,
} from "@dnd-kit/core"

import Draggable from "./components/dnd/Draggable"
import Droppable from "./components/dnd/Droppable"

import WeaponCommand from "./components/WeaponCommand"
import WeaponSkillHover from "./components/WeaponSkillHover"
import WeaponSkillIcon from "./components/WeaponSkillIcon"

import { KeyTrigger } from "./components/keyModal/KeyTrigger"

import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { ResetIcon } from "@radix-ui/react-icons"

import useDataStore from "@/store/dataStore"
import { cn } from "@/lib/utils"
import { checkWeapon, whichOpus } from "@/lib/checkWeapon"
import { getOpusKey, getUltimaKey } from "@/lib/getKeys"

export default function Page() {
	// const [grid, setGrid] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

	const grid = useDataStore((state) => state.grid)
	const swapGridSlot = useDataStore((state) => state.swapGridSlot)

	const opus_key = useDataStore((state) => state.opus_key)
	const draco_key = useDataStore((state) => state.draco_key)
	const ultima_key = useDataStore((state) => state.ultima_key)

	const resetAll = useDataStore((state) => state.resetAll)

	const [mounted, setMount] = useState(false)

	const [open, setOpen] = useState(false)
	const [showSkill, setShowSkill] = useState(false)
	const [showNumeric, setShowNumeric] = useState(false)
	const [hover, setHover] = useState(true)
	const [selectedID, setSelectedID] = useState(-1)

	const [weapons, setWeapons] = useState([])
	const [weapon_skills, setWeaponSkills] = useState([])

	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: {
				distance: 35,
			},
		}),
		useSensor(TouchSensor, {
			activationConstraint: {
				distance: 35,
			},
		})
	)

	useEffect(() => {
		async function getData() {
			const weaponFetch = getWeapons()
			const weaponSkillFetch = getWeaponSkills()
			const [weaponData, weaponSkillData] = await Promise.all([
				weaponFetch,
				weaponSkillFetch,
			])
			setWeapons(weaponData)
			setWeaponSkills(weaponSkillData)
		}

		setMount(true)
		getData()
	}, [])

	if (!mounted) {
		return null
	}

	async function getWeapons() {
		const res = await fetch("/api/weapons")
		return res.json()
	}

	async function getWeaponSkills() {
		const res = await fetch("/api/weapon_skills")
		return res.json()
	}

	function handleDragEnd(event) {
		const { active, over } = event
		// Active - Draggable
		// Over - Droppbale

		// console.log("Active - Draggable")
		// console.log(active)

		// console.log("Over - Droppable")
		// console.log(over)

		if (over) {
			// const newGrid = grid.slice(0, grid.length)

			// const copy = newGrid[active.id - 1]
			// newGrid[active.id - 1] = newGrid[over.id - 1]
			// newGrid[over.id - 1] = copy

			// console.log("New Grid:")
			// console.log(newGrid)
			// setGrid(newGrid)
			swapGridSlot(active.id, over.id)
		}
		setHover(true)
		// console.log("------")
	}

	function handleDragStart(event) {
		// console.log("handle start event")
		// console.log(event)

		const { active } = event
		setSelectedID(active.id)
		setHover(false)
	}

	function handleButtonClick(id) {
		setSelectedID(id)
		setOpen(true)
	}

	function getSkillData(
		weapon_check,
		i,
		correctOpusKey,
		correctUltimaKey,
		skillID
	) {
		// Index varies due to checkWeapon for highlighting purposes
		if (weapon_check == "opus") {
			// Opus index only 1, 2
			if (i < 2) {
				return weapon_skills.find((e) => e.id == opus_key[i - 1])
			} else {
				return weapon_skills.find((e) => e.id == correctOpusKey)
			}
		} else if (weapon_check == "draconic") {
			// Draco index = 1 , 2
			return weapon_skills.find((e) => e.id == draco_key[i - 1])
		} else if (weapon_check == "ultima") {
			// Ultima index = 0, 1, 2
			if (i == 0) {
				return weapon_skills.find((e) => e.id == correctUltimaKey)
			} else {
				return weapon_skills.find((e) => e.id == ultima_key[i])
			}
		} else {
			return weapon_skills.find((e) => e.id == skillID)
		}
	}

	function DraggableItem({ id, weapon_id, className }) {
		const img_path = "/weapon/" + weapon_id + ".jpg"

		const weapon = weapons.find((e) => e.id == weapon_id)

		return (
			<HoverCard openDelay={400}>
				<HoverCardTrigger>
					<Draggable
						id={id}
						className={cn(
							"w-[112px] h-[64px] md:w-[168px] md:h-[96px]",
							hover && showSkill && "relative",
							className
						)}
					>
						<Image
							src={img_path}
							width={280}
							height={160}
							sizes="(max-width: 768px) 112px, 168px"
							alt={weapon_id}
							onClick={() => handleButtonClick(id)}
							className=""
						/>
						{hover && showSkill && (
							<div className="absolute bottom-0 left-0 flex flex-row items-center justify-center w-full gap-1 bg-transparent/40 h-1/2 md:h-2/5">
								{weapon?.skills.map((skillID, i) => {
									const weapon_check = checkWeapon(weapon.id, i)
									const selectedOpus = whichOpus(weapon.id)
									const correctOpusKey = getOpusKey(opus_key[1], selectedOpus)
									const correctUltimaKey = getUltimaKey(
										ultima_key[0],
										weapon.weapon_type
									)
									const skillData = getSkillData(
										weapon_check,
										i,
										correctOpusKey,
										correctUltimaKey,
										skillID
									)
									return (
										<WeaponSkillIcon
											key={i}
											weapon={weapon_check}
											skillData={skillData}
										/>
									)
								})}
							</div>
						)}
					</Draggable>
				</HoverCardTrigger>
				{hover && (
					<HoverCardContent
						side={id > 10 ? "top" : "right"}
						className="h-auto p-0 w-96"
					>
						<div className="flex flex-col items-center justify-center w-full h-full">
							{weapon?.skills.map((skillID, i) => {
								const weapon_check = checkWeapon(weapon.id, i)
								const selectedOpus = whichOpus(weapon.id)
								const correctOpusKey = getOpusKey(opus_key[1], selectedOpus)
								const correctUltimaKey = getUltimaKey(
									ultima_key[0],
									weapon.weapon_type
								)
								const skillData = getSkillData(
									weapon_check,
									i,
									correctOpusKey,
									correctUltimaKey,
									skillID
								)
								return (
									<WeaponSkillHover
										key={i}
										order={i}
										weapon={weapon_check}
										skillData={skillData}
										showNumeric={showNumeric}
									/>
								)
							})}
						</div>
					</HoverCardContent>
				)}
			</HoverCard>
		)
	}

	function EmptyGridSlot({ id }) {
		return (
			<button
				className="w-full h-full text-4xl hover:bg-primary/50"
				onClick={() => handleButtonClick(id)}
				aria-label="Add Weapon"
			>
				+
			</button>
		)
	}

	function DroppableSlot({ id, slot, mh, arcarum }) {
		return (
			<div
				className={cn(
					"flex flex-col gap-1",
					mh ? "items-start md:items-center" : "items-center"
				)}
			>
				<Droppable
					id={id}
					className={cn(
						"w-[112px] h-[64px] md:w-[168px] md:h-[96px] flex items-center justify-center border-2",
						arcarum ? "bg-background" : "bg-secondary",
						!mh && "m-auto"
					)}
				>
					{slot != 0 ? (
						<DraggableItem id={id} weapon_id={slot} />
					) : (
						<EmptyGridSlot id={id} />
					)}
				</Droppable>
				<span
					className={cn(
						"text-xs md:text-base text-center truncate w-full md:w-[168px]",
						mh && "w-[112px]"
					)}
				>
					{slot != 0 ? weapons.find((e) => e.id == slot)?.name : "Empty"}
				</span>
			</div>
		)
	}

	return (
		<>
			<div className="relative z-50 flex flex-col items-center justify-center flex-1 w-full max-w-5xl gap-8 mx-auto">
				<div className="flex flex-col items-center justify-center w-full max-w-4xl gap-8 pt-6 md:gap-5 md:pt-0">
					<h1 className="text-5xl font-semibold">Grid Builder</h1>
					<div className="flex flex-row items-center gap-14">
						<div className="flex flex-row items-center gap-6">
							<Switch
								id="skill-mode"
								checked={showSkill}
								aria-label="Toggle Skills"
								onCheckedChange={() => setShowSkill(!showSkill)}
							/>
							<Label htmlFor="skill-mode">Show Skills</Label>
							<Switch
								id="numeric-mode"
								aria-label="Toggle Details"
								checked={showNumeric}
								onCheckedChange={() => setShowNumeric(!showNumeric)}
							/>
							<Label htmlFor="numeric-mode">Show Details</Label>
						</div>
						<Button
							aria-label="Reset"
							variant="destructive"
							onClick={() => resetAll()}
							className="hidden md:inline-flex"
						>
							<ResetIcon className="mr-2 size-4" /> Reset
						</Button>
					</div>
					<div className="flex flex-col items-center w-1/3 gap-8 mx-auto md:hidden *:w-full">
						<KeyTrigger weapon="opus">
							<Button aria-label="Set Opus">Set Opus</Button>
						</KeyTrigger>
						<KeyTrigger weapon="draconic">
							<Button aria-label="Set Draco">Set Draco</Button>
						</KeyTrigger>
						<KeyTrigger weapon="ultima">
							<Button aria-label="Set Ultima">Set Ultima</Button>
						</KeyTrigger>
						<Button
							aria-label="Reset"
							variant="destructive"
							onClick={() => resetAll()}
							className="md:hidden"
						>
							Reset
						</Button>
					</div>
				</div>
				<Card className="w-[95%] md:w-full max-w-5xl md:mx-auto mb-28">
					<CardContent className="p-3 pt-3 md:p-6">
						<DndContext
							onDragEnd={handleDragEnd}
							onDragStart={handleDragStart}
							sensors={sensors}
						>
							<div className="flex flex-col gap-3 mx-auto md:gap-4 md:flex-row w-fit touch-none">
								<DroppableSlot id={1} slot={grid && grid[0]} mh />

								<div className="grid grid-cols-3 gap-3 mx-auto md:gap-4 w-fit">
									{grid?.map((slot, i) => {
										return (i + 1 > 1) & (i + 1 <= 10) ? (
											<DroppableSlot key={i + 1} id={i + 1} slot={slot} />
										) : (
											i + 1 > 10 && (
												<DroppableSlot
													key={i + 1}
													id={i + 1}
													slot={slot}
													arcarum
												/>
											)
										)
									})}
								</div>
							</div>
						</DndContext>
					</CardContent>
				</Card>
			</div>
			<WeaponCommand
				selectedID={selectedID}
				open={open}
				setOpen={setOpen}
				weapons={weapons}
			/>
		</>
	)
}
