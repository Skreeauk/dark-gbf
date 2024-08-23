import Image from "next/image"
import { KeyTrigger } from "../keyModal/KeyTrigger"
import { cn } from "@/lib/utils"

export default function WeaponSkillHover({ order, weapon, skillData }) {
	return (
		<KeyTrigger weapon={weapon}>
			<div
				className={cn(
					"flex flex-row items-center justify-center w-full gap-2 px-4 py-2 rounded-lg",
					order == 0 && "pt-4",
					order == 2 && "pb-4",
					weapon != "none" &&
						"hover:bg-black/15 dark:hover:bg-white/15 cursor-pointer"
				)}
			>
				<div className="relative rounded-lg size-7 md:size-10">
					<Image
						src={`/weapon_skill/grid/${skillData.icon_path}.webp`}
						alt={skillData.icon_path}
						fill
						sizes="(max-width: 768px) 28px, 40px"
						className=""
					/>
				</div>
				<div className="flex flex-col flex-1">
					<span className="font-semibold">{skillData?.name}</span>
					<span className="flex-1 break-words opacity-75">
						{skillData?.desc_numeric}
					</span>
				</div>
			</div>
		</KeyTrigger>
	)
}
