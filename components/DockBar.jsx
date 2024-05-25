import { Dock, DockIcon } from "@/components/magicui/dock"
import { ModeToggle } from "./ModeToggle"
import { Separator } from "./ui/separator"

import Image from "next/image"
import Link from "next/link"

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

import { HomeIcon } from "@radix-ui/react-icons"

import Contact from "@/public/features/contact.png"
import GridBuilder from "@/public/features/grid_building.png"
import MultiAttack from "@/public/features/multiattack.png"
import Critical from "@/public/features/critical.png"
import GridScore from "@/public/features/grid_score.png"

export default function DockBar() {
	return (
		<TooltipProvider delayDuration={400}>
			<Dock className="fixed inset-x-0 z-50 bottom-6">
				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild className="size-10 hover:size-14">
							<div className="flex items-center justify-center w-full h-full">
								<ModeToggle />
							</div>
						</TooltipTrigger>
						<TooltipContent>
							<p>Light / Dark Mode</p>
						</TooltipContent>
					</Tooltip>
					{/* <div className="flex items-center justify-center size-10">
						<ModeToggle />
					</div> */}
					{/* <ModeToggle /> */}
				</DockIcon>
				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link href="/about">
								<Image src={Contact} alt="Contact" unoptimized className="" />
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Contact</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>
				<Separator orientation="vertical" className="w-1" />
				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link href="/" className="size-10 hover:size-14">
								<div className="flex items-center justify-center w-full h-full">
									<HomeIcon className="m-2 size-6" />
								</div>
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Home</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>
				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link href="/grid-builder">
								<Image
									src={GridBuilder}
									alt="Grid Builder"
									unoptimized
									className=""
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Grid Builder</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>
				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link href="/multiattack-calculator">
								<Image
									src={MultiAttack}
									alt="MultiAttack"
									unoptimized
									className=""
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>MA Calculator</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>
				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link href="/critical-calculator">
								<Image
									src={Critical}
									alt="Critical"
									unoptimized
									className="scale-105"
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Crit Calculator</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>
				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link href="/grid-score">
								<Image
									src={GridScore}
									alt="Grid Score"
									unoptimized
									className=""
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Grid Score</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>
			</Dock>
		</TooltipProvider>
	)
}
