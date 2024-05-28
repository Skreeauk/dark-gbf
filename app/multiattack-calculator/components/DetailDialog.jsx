import { Button } from "@/components/ui/button"

import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog"

export default function DetailDialog({
	awakening,
	mastery,
	passive,
	wonder,
	buff,
	other,
}) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Details</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Detailed TA</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid items-center grid-cols-4 gap-4">
						<Label className="text-right">Grid</Label>
						<Label className="col-span-3">asd</Label>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<Label className="text-right">Aura</Label>
						<Label className="col-span-3">dsa</Label>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<Label className="text-right">Awakening</Label>
						<Label className="col-span-3">{awakening}%</Label>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<Label className="text-right">Mastery</Label>
						<Label className="col-span-3">{mastery}%</Label>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<Label className="text-right">Passive</Label>
						<Label className="col-span-3">{passive}%</Label>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<Label className="text-right">Wonder</Label>
						<Label className="col-span-3">{wonder}%</Label>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<Label className="text-right">Buffs</Label>
						<Label className="col-span-3">{buff}%</Label>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<Label className="text-right">Other</Label>
						<Label className="col-span-3">{other}%</Label>
					</div>
					<Separator />
					<div className="grid items-center grid-cols-4 gap-4">
						<Label className="text-right">Total</Label>
						<Label className="col-span-3">
							{awakening + mastery + passive + wonder + buff + other}%
						</Label>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button type="button">Close</Button>
					</DialogClose>
					{/* <Button
														onClick={() =>
															console.log(otherInput.current.value)
														}
													>
														asd
													</Button> */}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
