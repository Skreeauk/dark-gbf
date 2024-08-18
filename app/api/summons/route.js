import { getCachedSummons } from "@/lib/db"

export async function GET() {
	const data = await getCachedSummons()

	return Response.json(data)
}
