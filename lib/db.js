import supabase from "@/utils/supabase"

import { unstable_cache } from "next/cache"

async function getWeapons() {
	const { data, error } = await supabase
		.from("weapons")
		.select()
		.order("name", { ascending: true })

	return data
}

async function getWeaponSkills() {
	const { data, error } = await supabase.from("weapon_skills").select()

	return data
}

async function getCharacters() {
	const { data, error } = await supabase.from("characters").select()

	return data
}

async function getSummons() {
	const { data, error } = await supabase.from("summons").select()

	return data
}

const getCachedWeapons = unstable_cache(getWeapons, ["cachedWeapons"], {
	tags: ["cachedWeapons"],
})
const getCachedWeaponSkills = unstable_cache(
	getWeaponSkills,
	["cachedWeaponSkills"],
	{ tags: ["cachedWeaponSkills"] }
)
const getCachedCharacters = unstable_cache(
	getCharacters,
	["cachedCharacters"],
	{ tags: ["cachedCharacters"] }
)
const getCachedSummons = unstable_cache(getSummons, ["cachedSummons"], {
	tags: ["cachedSummons"],
})

export {
	getCachedWeapons,
	getCachedWeaponSkills,
	getCachedCharacters,
	getCachedSummons,
}
