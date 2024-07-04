import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export function UltimaSelect({ ultima, handleUltimaChange }) {
	return (
		<div className="grid gap-4 py-4">
			<div className="flex items-center justify-center gap-4">
				<span className="basis-1/2">1st Key</span>
				<Select
					defaultValue="none"
					value={ultima ? ultima[0] : "none"}
					onValueChange={(e) => handleUltimaChange(0, e)}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a key" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="none">None</SelectItem>
							{/* <SelectItem value="atk">Gauph Key of Will</SelectItem> */}
							<SelectItem value="ma">Gauph Key of Strife</SelectItem>
							{/* <SelectItem value="hp">Gauph Key of Vitality</SelectItem> */}
							<SelectItem value="stamina">Gauph Key of Strength</SelectItem>
							{/* <SelectItem value="enmity">Gauph Key of Zeal</SelectItem> */}
							{/* <SelectItem value="crit">Gauph Key of Courage</SelectItem> */}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="flex items-center justify-center gap-4">
				<span className="basis-1/2">2nd Key</span>
				<Select
					defaultValue="229"
					value={ultima ? ultima[1] : "229"}
					onValueChange={(e) => handleUltimaChange(1, e)}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a key" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="229">None</SelectItem>
							<SelectItem value="181">Gauph Key α</SelectItem>
							<SelectItem value="182">Gauph Key β</SelectItem>
							<SelectItem value="183">Gauph Key γ</SelectItem>
							<SelectItem value="184">Gauph Key Δ</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="flex items-center justify-center gap-4">
				<span className="basis-1/2">3rd Key</span>
				<Select
					defaultValue="230"
					value={ultima ? ultima[2] : "230"}
					onValueChange={(e) => handleUltimaChange(2, e)}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a key" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="230">None</SelectItem>
							<SelectItem value="185">Gauph Key Ena</SelectItem>
							<SelectItem value="186">Gauph Key Dio</SelectItem>
							<SelectItem value="187">Gauph Key Tria</SelectItem>
							<SelectItem value="188">Gauph Key Tessera</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
