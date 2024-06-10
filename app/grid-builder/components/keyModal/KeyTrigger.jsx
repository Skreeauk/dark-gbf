import { Dialog, DialogTrigger } from "@/components/ui/dialog"

import { KeyPopUp } from "./KeyPopUp"

export function KeyTrigger({ weapon, children }) {
	if (weapon == "none") return <>{children}</>
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<KeyPopUp weapon={weapon} />
		</Dialog>
	)
}
