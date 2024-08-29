import { getCachedWeapons, getCachedWeaponSkills } from "@/lib/db/db"

import WeaponGrid from "./components/WeaponGrid"

export default async function Page() {
	const [weapons, weapon_skills] = await Promise.all([
		getCachedWeapons(),
		getCachedWeaponSkills(),
	])

	return (
		<>
			<WeaponGrid weapons={weapons} weapon_skills={weapon_skills} />
		</>
	)
}
