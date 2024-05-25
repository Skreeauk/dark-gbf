import Image from "next/image"

export default function WeaponSkillIcon({}) {
	return (
		<div className="relative rounded-lg size-7 md:size-9">
			<Image
				src="/weapon_skill/grid/aegis.png"
				alt="aegis"
				fill
				className="rounded-lg"
			/>
		</div>
	)
}
