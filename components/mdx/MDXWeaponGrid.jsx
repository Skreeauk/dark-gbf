import Image from "next/image"

import { getCachedWeaponsDocs, getCachedWeaponSkillsDocs } from "@/lib/db/db"

export async function MDXWeaponGrid({
	className,
	weapons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	opus_key = ["224", "none"],
	draco_key = ["226", "227"],
	ultima_key = ["none", "229", "230"],
	...props
}) {
	const [weaponFetch, weaponSkillFetch] = await Promise.all([
		getCachedWeaponsDocs(),
		getCachedWeaponSkillsDocs(),
	])

	const mh = weaponFetch.find((e) => e.id == weapons[0])

	return (
		<div className="flex flex-col gap-1 mx-auto md:flex-row md:justify-center md:gap-4">
			<Weapon weapon={mh} weaponSkillFetch={weaponSkillFetch}></Weapon>

			<div className="grid grid-cols-3 gap-1 md:gap-4">
				{weapons?.slice(1).map((weaponID, i) => {
					const weapon = weaponFetch.find((e) => e.id == weaponID)

					return (
						<Weapon
							key={i + 1}
							weapon={weapon}
							weaponSkillFetch={weaponSkillFetch}
						></Weapon>
					)
				})}
			</div>
		</div>
	)
}

function Weapon({ weapon, weaponSkillFetch }) {
	return (
		<div className="relative h-[48px] w-[84px] bg-gray-500 lg:h-[72px] lg:w-[126px] xl:h-[96px] xl:w-[168px]">
			{weapon && (
				<Image
					src={"/weapon/" + weapon?.id + ".webp"}
					fill
					sizes="(max-width: 1024px) 84px, (max-width: 1280) 126px, 168px"
					alt={weapon?.id}
					className="not-prose"
				/>
			)}
			<div className="absolute bottom-0 left-0 flex items-center justify-center w-full gap-1 h-2/5 bg-transparent/40">
				{weapon?.skills &&
					weapon?.skills.map((skillID, i) => {
						const skill = weaponSkillFetch.find((e) => e.id == skillID)
						return <WeaponSkills key={i} skill={skill} />
					})}
			</div>
		</div>
	)
}

function WeaponSkills({ skill }) {
	return (
		<div className={"relative rounded-lg size-5 md:size-10"}>
			<Image
				src={"/weapon_skill/grid/" + skill.icon_path + ".webp"}
				fill
				sizes="(max-width: 768px) 20px, 40px"
				alt={skill.icon_path}
				className="not-prose"
			/>
		</div>
	)
}
