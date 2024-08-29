import {
	getCachedWeapons,
	getCachedWeaponSkills,
	getCachedCharacters,
	getCachedSummons,
} from "@/lib/db/db"

import MACalculator from "./components/MACalculator"

export default async function Page() {
	const [weapons, weapon_skills, characters, summons] = await Promise.all([
		getCachedWeapons(),
		getCachedWeaponSkills(),
		getCachedCharacters(),
		getCachedSummons(),
	])

	return (
		<>
			<MACalculator characters={characters} summons={summons} />
		</>
	)
}
