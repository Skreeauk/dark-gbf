import { Radar } from "./aceternity/Radar"
import { IconContainer } from "./aceternity/IconContainer"

import Image from "next/image"

import Glory from "@/public/weapon_skill/glory.png"
import MagnaExalto from "@/public/weapon_skill/magna_exalto.png"
import Majesty from "@/public/weapon_skill/majesty.png"
import Seraphic from "@/public/weapon_skill/seraphic.png"
import Trium from "@/public/weapon_skill/trium.png"

export function RadarIcons() {
	return (
		<div className="relative flex flex-col items-center justify-center w-full px-4 space-y-4 overflow-hidden h-96">
			<div className="w-full max-w-3xl mx-auto">
				<div className="flex items-center justify-center w-full">
					<IconContainer
						delay={0.3}
						icon={
							<Image
								unoptimized
								src={Glory}
								alt="Glory"
								className="rounded-lg"
							/>
						}
					/>
				</div>
			</div>
			<div className="w-full max-w-md mx-auto">
				<div className="flex items-center justify-between w-full space-x-10 md:justify-between md:space-x-0 ">
					<IconContainer
						delay={0.5}
						icon={
							<Image
								unoptimized
								src={MagnaExalto}
								alt="MagnaExalto"
								className="rounded-lg"
							/>
						}
					/>
					<IconContainer
						icon={
							<Image
								unoptimized
								src={Trium}
								alt="Trium"
								className="rounded-lg"
							/>
						}
						delay={0.8}
					/>
				</div>
			</div>
			<div className="w-full max-w-3xl mx-auto">
				<div className="flex items-center w-full space-x-10 justify-evenly md:space-x-0 ">
					<IconContainer
						delay={0.6}
						icon={
							<Image
								unoptimized
								src={Majesty}
								alt="Majesty"
								className="rounded-lg"
							/>
						}
					/>
					<IconContainer
						delay={0.7}
						icon={
							<Image
								unoptimized
								src={Seraphic}
								alt="Seraphic"
								className="rounded-lg"
							/>
						}
					/>
				</div>
			</div>

			<Radar className="absolute -bottom-12" />
			<div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
		</div>
	)
}
