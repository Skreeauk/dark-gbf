"use client"

import { Radar } from "./Radar"
import { IconContainer } from "./IconContainer"
import { LazyMotion, domAnimation } from "framer-motion"

import Image from "next/image"

import Glory from "@/public/weapon_skill/glory.webp"
import MagnaExalto from "@/public/weapon_skill/magna_exalto.webp"
import Majesty from "@/public/weapon_skill/majesty.webp"
import Seraphic from "@/public/weapon_skill/seraphic.webp"
import Trium from "@/public/weapon_skill/trium.webp"

export function RadarIcons() {
	return (
		<div className="relative flex flex-col items-center justify-center w-full px-4 space-y-4 overflow-hidden h-96">
			<LazyMotion features={domAnimation}>
				<div className="w-full max-w-3xl mx-auto">
					<div className="flex items-center justify-center w-full">
						<IconContainer
							delay={0.3}
							icon={<Image src={Glory} alt="Glory" className="rounded-lg" />}
						/>
					</div>
				</div>
				<div className="w-full max-w-md mx-auto">
					<div className="flex items-center justify-between w-full space-x-10 md:justify-between md:space-x-0 ">
						<IconContainer
							delay={0.5}
							icon={
								<Image
									src={MagnaExalto}
									alt="MagnaExalto"
									className="rounded-lg"
								/>
							}
						/>
						<IconContainer
							icon={<Image src={Trium} alt="Trium" className="rounded-lg" />}
							delay={0.8}
						/>
					</div>
				</div>
				<div className="w-full max-w-3xl mx-auto">
					<div className="flex items-center w-full space-x-10 justify-evenly md:space-x-0 ">
						<IconContainer
							delay={0.6}
							icon={
								<Image src={Majesty} alt="Majesty" className="rounded-lg" />
							}
						/>
						<IconContainer
							delay={0.7}
							icon={
								<Image src={Seraphic} alt="Seraphic" className="rounded-lg" />
							}
						/>
					</div>
				</div>

				<Radar className="absolute -bottom-12" />
			</LazyMotion>
			<div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
		</div>
	)
}
