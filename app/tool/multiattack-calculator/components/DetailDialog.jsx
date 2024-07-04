import { Button } from "@/components/ui/button"
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
						<span className="text-right">Grid</span>
						<span className="col-span-3">asd</span>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<span className="text-right">Aura</span>
						<span className="col-span-3">dsa</span>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<span className="text-right">Awakening</span>
						<span className="col-span-3">{awakening}%</span>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<span className="text-right">Mastery</span>
						<span className="col-span-3">{mastery}%</span>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<span className="text-right">Passive</span>
						<span className="col-span-3">{passive}%</span>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<span className="text-right">Wonder</span>
						<span className="col-span-3">{wonder}%</span>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<span className="text-right">Buffs</span>
						<span className="col-span-3">{buff}%</span>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<span className="text-right">Other</span>
						<span className="col-span-3">{other}%</span>
					</div>
					<Separator />
					<div className="grid items-center grid-cols-4 gap-4">
						<span className="text-right">Total</span>
						<span className="col-span-3">
							{awakening + mastery + passive + wonder + buff + other}%
						</span>
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
