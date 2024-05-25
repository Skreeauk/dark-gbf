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

import Draggable from "./components/Draggable"
import Droppable from "./components/Droppable"

import WeaponCommand from "./components/WeaponCommand"
import WeaponSkillHover from "./components/WeaponSkillHover"
import WeaponSkillIcon from "./components/WeaponSkillIcon"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"

import { weapons } from "@/components/data/weapons"
import { weapon_skills } from "@/components/data/weapon_skills"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
	const [grid, setGrid] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

	const [mounted, setMount] = useState(false)

	const [open, setOpen] = useState(false)
	const [showSkill, setShowSkill] = useState(false)
	const [showNumeric, setShowNumeric] = useState(false)
	const [hover, setHover] = useState(true)
	const [selectedID, setSelectedID] = useState(-1)

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
		setMount(true)
	}, [])

	if (!mounted) {
		return null
	}

	function handleDragEnd(event) {
		const { active, over } = event
		// Active - Draggable
		// Over - Droppbale

		console.log("Active - Draggable")
		console.log(active)

		console.log("Over - Droppable")
		console.log(over)

		if (over) {
			const newGrid = grid.slice(0, grid.length)

			const copy = newGrid[active.id - 1]
			newGrid[active.id - 1] = newGrid[over.id - 1]
			newGrid[over.id - 1] = copy

			console.log("New Grid:")
			console.log(newGrid)
			setGrid(newGrid)
		}
		setHover(true)
		console.log("------")
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
							sizes="(max-width: 768px) 60vw, 40vw"
							alt={weapon_id}
							onClick={() => handleButtonClick(id)}
							className=""
						/>
						{hover && showSkill && (
							<div className="absolute bottom-0 left-0 flex flex-row items-center justify-center w-full gap-1 bg-transparent/40 h-1/2 md:h-2/5">
								{weapon.skills.map((skillID, i) => {
									return (
										<WeaponSkillIcon
											key={i}
											skillData={weapon_skills.find((e) => e.id == skillID)}
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
						className="h-auto w-96"
					>
						<div className="flex flex-col items-center justify-center w-full h-full gap-2 md:gap-4">
							{weapon.skills.map((skillID, i) => {
								return (
									<WeaponSkillHover
										key={i}
										skillData={weapon_skills.find((e) => e.id == skillID)}
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
						"text-xs md:text-base text-center truncate w-full",
						mh && "w-[112px] md:w-[168px]"
					)}
				>
					{slot != 0 ? weapons.find((e) => e.id == slot).name : "Empty"}
				</span>
			</div>
		)
	}

	return (
		<>
			<div className="relative z-50 flex flex-col items-center justify-center flex-1 w-full max-w-5xl gap-8 mx-auto">
				<div className="flex flex-col items-center justify-center w-full max-w-4xl gap-5 pt-6 md:pt-0">
					<Label className="text-5xl font-semibold">Grid Builder</Label>
					<div className="flex flex-row items-center gap-6">
						<Switch
							id="skill-mode"
							checked={showSkill}
							onCheckedChange={() => setShowSkill(!showSkill)}
						></Switch>
						<Label htmlFor="skill-mode">Show Skills</Label>
						<Switch
							id="numeric-mode"
							checked={showNumeric}
							onCheckedChange={() => setShowNumeric(!showNumeric)}
						></Switch>
						<Label htmlFor="numeric-mode">Show Details</Label>
					</div>
				</div>
				<Card className="w-[95%] md:w-full max-w-5xl md:mx-auto mb-28">
					<CardContent className="p-3 pt-3 md:p-6">
						<DndContext
							onDragEnd={handleDragEnd}
							onDragStart={handleDragStart}
							sensors={sensors}
						>
							<div className="flex flex-col gap-3 mx-auto md:gap-6 md:flex-row w-fit touch-none">
								<DroppableSlot id={1} slot={grid[0]} mh />

								<div className="grid grid-cols-3 gap-3 mx-auto md:gap-6 w-fit">
									{grid.map((slot, i) => {
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
				grid={grid}
				setGrid={setGrid}
				selectedID={selectedID}
				open={open}
				setOpen={setOpen}
			/>
		</>
	)
}
