import Image from "next/image"
import { KeyTrigger } from "./keyModal/KeyTrigger"
import { cn } from "@/lib/utils"

export default function WeaponSkillIcon({ weapon, skillData }) {
	return (
		<KeyTrigger weapon={weapon}>
			<div
				className={cn(
					"relative rounded-lg size-7 md:size-10",
					weapon != "none" &&
						"cursor-pointer hover:brightness-50 transition-all"
				)}
			>
				<Image
					src={`/weapon_skill/grid/${skillData.icon_path}.webp`}
					alt={skillData.icon_path}
					fill
					sizes="(max-width: 768px) 28px, 40px"
					className=""
				/>
			</div>
		</KeyTrigger>
	)
}
