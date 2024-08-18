import { getCachedWeapons } from "@/lib/db"

export async function GET() {
	const data = await getCachedWeapons()

	return Response.json(data)
}
