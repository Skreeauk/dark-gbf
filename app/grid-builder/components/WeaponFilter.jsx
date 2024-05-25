"use client"

import Image from "next/image"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Toggle } from "@/components/ui/toggle"
import { Separator } from "@/components/ui/separator"

export default function WeaponFilter({ weapon_types, filters, setFilters }) {
	const noFilter = filters == weapon_types

	function handleAllFilter() {
		if (!noFilter) {
			setFilters(weapon_types)
		} else {
			setFilters([])
		}
	}

	function handleGroupFilter(filterGroup) {
		if (noFilter) {
			setFilters(weapon_types.filter((e) => !filterGroup.includes(e)))
		} else if (filterGroup.length == 0) {
			setFilters(weapon_types)
		} else {
			setFilters(filterGroup.sort())
		}
	}

	return (
		<>
			<div className="flex items-center justify-center w-full h-auto py-2">
				<div className="flex items-center justify-center w-1/4 md:w-fit md:pl-3">
					<Toggle
						pressed={noFilter}
						onPressedChange={() => handleAllFilter()}
						className="size-10 data-[state=on]:brightness-[0.6]"
					>
						<span>All</span>
					</Toggle>
				</div>
				<ToggleGroup
					type="multiple"
					value={filters}
					onValueChange={(e) => handleGroupFilter(e)}
					className="flex-wrap flex-1 pr-6 md:pr-0"
				>
					{weapon_types.map((weapon_type) => {
						return (
							<ToggleGroupItem
								key={weapon_type}
								value={weapon_type}
								className="relative size-10 data-[state=off]:brightness-[0.6] hover:brightness-75 hover:bg-transparent hover:text-transparent data-[state=on]:bg-transparent data-[state=on]:text-transparent"
							>
								<Image
									src={"/weapon_type/" + weapon_type.toLowerCase() + ".png"}
									alt={weapon_type}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									className=""
								/>
							</ToggleGroupItem>
						)
					})}
				</ToggleGroup>
			</div>
			<Separator />
		</>
	)
}
