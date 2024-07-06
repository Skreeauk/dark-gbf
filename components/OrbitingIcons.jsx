import OrbitingCircles from "@/components/magicui/orbiting-circles"

import Image from "next/image"

import Celere from "@/public/weapon_skill/celere.webp"
import Precocity from "@/public/weapon_skill/precocity.webp"
import Restraint from "@/public/weapon_skill/restraint.webp"
import Verity from "@/public/weapon_skill/verity.webp"

export function OrbitingIcons() {
	return (
		<div className="relative flex h-96 mb-3 w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background">
			<span className="font-semibold leading-none text-center text-transparent whitespace-pre-wrap pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl dark:from-white dark:to-slate-900/10">
				Crit %
			</span>

			{/* Inner Circles */}
			<OrbitingCircles
				className="bg-transparent border-none size-8"
				duration={20}
				delay={20}
				radius={40}
			>
				<Image src={Celere} alt="Celere" className="rounded-lg" />
			</OrbitingCircles>
			<OrbitingCircles
				className="bg-transparent border-none size-8"
				duration={20}
				delay={10}
				radius={40}
			>
				<Image src={Verity} alt="Verity" className="rounded-lg" />
			</OrbitingCircles>

			{/* Outer Circles (reverse) */}
			<OrbitingCircles
				className="bg-transparent border-none size-10"
				reverse
				radius={100}
				duration={20}
			>
				<Image src={Restraint} alt="Restraint" className="rounded-lg" />
			</OrbitingCircles>
			<OrbitingCircles
				className="bg-transparent border-none size-10"
				reverse
				radius={100}
				duration={20}
				delay={20}
			>
				<Image src={Precocity} alt="Precocity" className="rounded-lg" />
			</OrbitingCircles>
		</div>
	)
}
