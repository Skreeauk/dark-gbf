"use client"

import React from "react"

import { CommandGroup, CommandItem, CommandSeparator } from "@/components/ui/command"

export default function WeaponCommandGroup({ weapons, weapon_type, handleSelection, last }) {
	return (
		weapons.length != 0 && (
			<>
				<CommandGroup heading={weapon_type}>
					{weapons.map((weapon) => {
						return (
							weapon.weapon_type === weapon_type && (
								<CommandItem key={weapon.id} onSelect={(val) => handleSelection(val, weapon.id)}>
									<span>{weapon.name}</span>
								</CommandItem>
							)
						)
					})}
				</CommandGroup>
				{!last && <CommandSeparator className="mx-4" />}
			</>
		)
	)
}
