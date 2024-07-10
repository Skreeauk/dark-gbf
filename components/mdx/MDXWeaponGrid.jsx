import Image from "next/image"

import { cn } from "@/lib/utils"

export async function MDXWeaponGrid({
	className,
	weapons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	opus_key = ["224", "none"],
	draco_key = ["226", "227"],
	ultima_key = ["none", "229", "230"],
	...props
}) {
	const weaponFetch = getWeapons()
	const weaponSkillFetch = getWeaponSkills()
	const [weaponData, weaponSkillData] = await Promise.all([
		weaponFetch,
		weaponSkillFetch,
	])

	return (
		<div className="flex flex-col gap-1 mx-auto md:gap-4 md:flex-row md:justify-center">
			<Weapon weaponID={weapons[0]}></Weapon>

			<div className="grid grid-cols-3 gap-1 md:gap-4">
				{weapons?.slice(1).map((weaponID, i) => (
					<Weapon weaponID={weapons[i + 1]} key={i + 1}></Weapon>
				))}
			</div>
		</div>
	)
}

function Weapon({ weaponID }) {
	return (
		<div className="w-[84px] h-[48px] lg:w-[126px] lg:h-[72px] xl:w-[168px] xl:h-[96px] bg-gray-500 relative">
			{weaponID != 0 && (
				<Image
					src={"/weapon/" + weaponID + ".webp"}
					fill
					sizes="(max-width: 1024px) 84px, (max-width: 1280) 126px, 168px"
					alt={weaponID}
					className="not-prose"
				/>
			)}
			<div className="absolute bottom-0 left-0 flex flex-row items-center justify-center w-full gap-1 bg-transparent/40 h-1/2 md:h-2/5"></div>
		</div>
	)
}

async function getWeapons() {
	const res = await fetch(checkEnvironment() + "/api/weapons")
	return res.json()
}

async function getWeaponSkills() {
	const res = await fetch(checkEnvironment() + "/api/weapon_skills")
	return res.json()
}

function checkEnvironment() {
	let base_url =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: "https://dark-gbf.vercel.app"

	return base_url
}
