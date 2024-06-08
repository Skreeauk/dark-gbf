import supabase from "@/utils/supabase"

export async function GET() {
	const { data, error } = await supabase
		.from("weapons")
		.select()
		.order("name", { ascending: true })

	return Response.json(data)
}
