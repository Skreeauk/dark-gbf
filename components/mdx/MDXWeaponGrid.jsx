import Image from "next/image"

import { getCachedWeapons, getCachedWeaponSkills } from "@/lib/db"

export async function MDXWeaponGrid({
	className,
	weapons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	opus_key = ["224", "none"],
	draco_key = ["226", "227"],
	ultima_key = ["none", "229", "230"],
	...props
}) {
	const [weaponFetch, weaponSkillFetch] = await Promise.all([
		getCachedWeapons(),
		getCachedWeaponSkills(),
	])

	return (
		<div className="mx-auto flex flex-col gap-1 md:flex-row md:justify-center md:gap-4">
			<Weapon weaponID={weapons[0]}></Weapon>

			<div className="grid grid-cols-3 gap-1 md:gap-4">
				{weapons?.slice(1).map((weaponID, i) => (
					<Weapon
						weaponID={weapons[i + 1]}
						key={i + 1}
						weaponFetch={weaponFetch}
						weaponSkillFetch={weaponSkillFetch}
					></Weapon>
				))}
			</div>
		</div>
	)
}

function Weapon({ weaponID, weaponFetch = [], weaponSkillFetch = [] }) {
	const weaponData = weaponFetch.find((e) => e.id == weaponID)
	return (
		<div className="relative h-[48px] w-[84px] bg-gray-500 lg:h-[72px] lg:w-[126px] xl:h-[96px] xl:w-[168px]">
			{weaponID != 0 && (
				<Image
					src={"/weapon/" + weaponID + ".webp"}
					fill
					sizes="(max-width: 1024px) 84px, (max-width: 1280) 126px, 168px"
					alt={weaponID}
					className="not-prose"
				/>
			)}
			<WeaponSkills />
		</div>
	)
}

function WeaponSkills({ weaponID }) {
	return (
		<div className="absolute bottom-0 left-0 flex h-1/2 w-full flex-row items-center justify-center gap-1 bg-transparent/40 md:h-2/5"></div>
	)
}
