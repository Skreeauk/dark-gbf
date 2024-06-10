import Image from "next/image"
import { KeyTrigger } from "./keyModal/KeyTrigger"
import { cn } from "@/lib/utils"

export default function WeaponSkillIcon({ weapon }) {
	return (
		<KeyTrigger weapon={weapon}>
			<div
				className={cn(
					"relative rounded-lg size-7 md:size-9",
					weapon != "none" &&
						"cursor-pointer hover:brightness-50 transition-all"
				)}
			>
				<Image
					src="/weapon_skill/grid/aegis.png"
					alt="aegis"
					fill
					className="rounded-lg"
				/>
			</div>
		</KeyTrigger>
	)
}
