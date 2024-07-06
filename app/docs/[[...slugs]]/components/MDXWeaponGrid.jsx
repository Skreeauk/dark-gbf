import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card"

import Image from "next/image"

import { cn } from "@/lib/utils"

export function MDXWeaponGrid({
	className,
	weapons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	...props
}) {
	return (
		<div className="flex flex-col gap-1 mx-auto md:gap-4 md:flex-row md:justify-center">
			<HoverWeapon i={0}></HoverWeapon>

			<div className="grid grid-cols-3 gap-1 md:gap-4">
				{weapons?.slice(1).map((weaponID, i) => (
					<HoverWeapon i={i + 1} key={i + 1}></HoverWeapon>
				))}
			</div>
		</div>
	)
}

function HoverWeapon({ i }) {
	return (
		<HoverCard openDelay={400}>
			<HoverCardTrigger>
				<div className="w-[84px] h-[48px] lg:w-[126px] lg:h-[72px] xl:w-[168px] xl:h-[96px] bg-gray-500 relative">
					<div className="absolute bottom-0 left-0 flex flex-row items-center justify-center w-full gap-1 bg-transparent/40 h-1/2 md:h-2/5"></div>
				</div>
			</HoverCardTrigger>
			<HoverCardContent side={"top"} className="h-auto w-96">
				STILL WIP
			</HoverCardContent>
		</HoverCard>
	)
}
