import { getCachedWeaponSkills } from "@/lib/db"

export async function GET() {
	const data = await getCachedWeaponSkills()

	return Response.json(data)
}
