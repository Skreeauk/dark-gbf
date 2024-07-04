import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export function OpusSelect({ opus, handleOpusChange }) {
	return (
		<div className="grid gap-4 py-4">
			<div className="flex items-center justify-center gap-4">
				<span className="basis-1/2">2nd Pendulum</span>
				<Select
					defaultValue="224"
					value={opus ? opus[0] : "224"}
					onValueChange={(e) => handleOpusChange(0, e)}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a pendulum" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="224">None</SelectItem>
							<SelectItem value="213">α Pendulum</SelectItem>
							<SelectItem value="214">β Pendulum</SelectItem>
							<SelectItem value="215">γ Pendulum</SelectItem>
							<SelectItem value="216">Δ Pendulum</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="flex items-center justify-center gap-4">
				<span className="basis-1/2">3rd Pendulum</span>
				<Select
					defaultValue="none"
					value={opus ? opus[1] : "none"}
					onValueChange={(e) => handleOpusChange(1, e)}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a pendulum" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="none">None</SelectItem>
							<SelectItem value="stamina">Pendulum of Strength</SelectItem>
							<SelectItem value="enmity">Pendulum of Zeal</SelectItem>
							<SelectItem value="trium">Pendulum of Strife</SelectItem>
							<SelectItem value="prog">Pendulum of Prosperity</SelectItem>
							<SelectItem value="celere">Chain of Temperament</SelectItem>
							<SelectItem value="majesty">Chain of Restoration</SelectItem>
							<SelectItem value="glory">Chain of Glorification</SelectItem>
							<SelectItem value="freyr">Chain of Temptation</SelectItem>
							<SelectItem value="apple">Chain of Forbiddance</SelectItem>
							<SelectItem value="plain">Chain of Depravity</SelectItem>
							<SelectItem value="echo">Chain of Falsehood</SelectItem>
							<SelectItem value="extremity">Pendulum of Extremity</SelectItem>
							<SelectItem value="sagacity">Pendulum of Sagacity</SelectItem>
							<SelectItem value="supremacy">Pendulum of Supremacy</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
