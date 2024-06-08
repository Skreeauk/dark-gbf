import { createClient } from "@supabase/supabase-js"

let supabase

if (process.env.NODE_ENV === "production") {
	supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
	)
} else {
	if (!global.supabase) {
		global.supabase = createClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL,
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
		)
	}

	supabase = global.supabase
}

export default supabase
