import Image from "next/image"

export default function WeaponSkillHover({ skillData, showNumeric }) {
	return (
		<div className="flex flex-row items-center justify-center w-full gap-2">
			<div className="relative rounded-lg size-9">
				<Image
					src="/weapon_skill/grid/aegis.png"
					alt="aegis"
					fill
					className="rounded-lg"
				/>
			</div>
			<div className="flex flex-col flex-1">
				<span className="font-semibold">{skillData.name}</span>
				<span className="flex-1 break-words opacity-75">
					{showNumeric ? skillData.desc_numeric : skillData.desc}
				</span>
			</div>
		</div>
	)
}
