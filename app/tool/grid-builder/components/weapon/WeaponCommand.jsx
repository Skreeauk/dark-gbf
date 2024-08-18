"use client"

import { useState } from "react"

import {
	CommandDialog,
	CommandEmpty,
	CommandInput,
	CommandList,
	CommandGroup,
	CommandItem,
	CommandSeparator,
} from "@/components/ui/command"

// import { weapons } from "@/components/data/weapons"
import { weapon_types } from "@/components/data/weapon_types"

import WeaponCommandGroup from "./WeaponCommandGroup"
import WeaponFilter from "./WeaponFilter"

import useDataStore from "@/store/dataStore"

export default function WeaponCommand({
	selectedID,
	open,
	setOpen,
	weapons = [],
}) {
	const updateGridSlot = useDataStore((state) => state.updateGridSlot)

	const [filters, setFilters] = useState(weapon_types)

	function handleSelection(val, weapon_id) {
		// const newGrid = grid.slice(0, grid.length)
		// newGrid[selectedID - 1] = weapon_id
		// setGrid(newGrid)
		updateGridSlot(selectedID - 1, weapon_id)

		setOpen(false)
	}

	return (
		<CommandDialog open={open || false} onOpenChange={setOpen}>
			<CommandInput placeholder="Search..." />
			<WeaponFilter
				weapon_types={weapon_types}
				filters={filters}
				setFilters={setFilters}
			/>
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading={"Empty"}>
					<CommandItem onSelect={(val) => handleSelection(val, 0)}>
						<span>Empty</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator className="mx-4" />
				{filters.map((weapon_type, i, { length }) => {
					return (
						<WeaponCommandGroup
							key={weapon_type}
							weapons={weapons.filter((e) => e.weapon_type == weapon_type)}
							weapon_type={weapon_type}
							handleSelection={handleSelection}
							last={length - 1 == i}
						/>
					)
				})}
			</CommandList>
		</CommandDialog>
	)
}
