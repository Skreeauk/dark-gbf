import supabase from "@/utils/supabase"

export async function GET() {
	const { data, error } = await supabase.from("weapon_skills").select()

	return Response.json(data)
}
