import supabase from "@/utils/supabase"

export async function GET() {
	const { data, error } = await supabase.from("characters").select()

	return Response.json(data)
}
