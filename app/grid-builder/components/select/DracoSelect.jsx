import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function DracoSelect({ draco, handleDracoChange }) {
	return (
		<div className="grid gap-4 py-4">
			<div className="flex items-center justify-center gap-4">
				<Label className="basis-1/2">2nd Teluma</Label>
				<Select
					defaultValue="226"
					value={draco ? draco[0] : "226"}
					onValueChange={(e) => handleDracoChange(0, e)}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a teluma" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="226">None</SelectItem>
							<SelectItem value="147">Endurance Teluma</SelectItem>
							<SelectItem value="159">Aureole Teluma</SelectItem>
							<SelectItem value="9">Malice Teluma</SelectItem>
							<SelectItem value="11">Salvation Teluma</SelectItem>
							<SelectItem value="12">Oblivion Teluma</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="flex items-center justify-center gap-4">
				<Label className="basis-1/2">3rd Teluma</Label>
				<Select
					defaultValue="227"
					value={draco ? draco[1] : "227"}
					onValueChange={(e) => handleDracoChange(1, e)}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a teluma" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="227">None</SelectItem>
							<SelectItem value="101">Optimus Teluma</SelectItem>
							<SelectItem value="73">Omega Teluma</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
