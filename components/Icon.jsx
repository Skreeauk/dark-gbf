import {
	HouseIcon,
	ClipboardPenLineIcon,
	BookAIcon,
	GitBranchIcon,
} from "lucide-react"

export const Icons = {
	home: HouseIcon,
	requirement: ClipboardPenLineIcon,
	dictionary: BookAIcon,
	changelog: GitBranchIcon,
}

export function createIcon({ icon: Icon }) {
	return (
		<div className="p-1 border rounded-md shadow-sm bg-gradient-to-b from-secondary">
			<Icon className="size-4" />
		</div>
	)
}
