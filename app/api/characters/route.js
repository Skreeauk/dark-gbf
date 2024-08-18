import { getCachedCharacters } from "@/lib/db"

export async function GET() {
	const data = await getCachedCharacters()

	return Response.json(data)
}
