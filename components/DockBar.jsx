import { Dock, DockIcon } from "@/components/magicui/dock"
import { ModeToggle } from "./ModeToggle"
import { UwuToggle } from "./UwuToggle"
import { Separator } from "./ui/separator"

import Image from "next/image"

// import Link from "next/link"
import NextLink from "next/link"
import { Link } from "next-view-transitions"

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

import Contact from "@/public/features/contact.webp"
import GridBuilder from "@/public/features/grid_building.webp"
import MultiAttack from "@/public/features/multiattack.webp"
import WeaponSkills from "@/public/features/weapon_skills.webp"
import GridScore from "@/public/features/grid_score.webp"
import Home from "@/public/features/home.webp"

export default function DockBar() {
	return (
		<TooltipProvider>
			<Dock
				direction="middle"
				className="fixed inset-x-0 z-50 bottom-6 bg-white/10 backdrop-blur-2xl"
			>
				<DockIcon>
					<Tooltip>
						<TooltipTrigger>
							<NextLink href="/" className={"size-12 rounded-full"}>
								<Image src={Home} alt="Home" />
							</NextLink>
						</TooltipTrigger>
						<TooltipContent>
							<p>Home</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>
				{data.map((route, i) => (
					<DockIcon key={i}>
						<Tooltip>
							<TooltipTrigger>
								<Link href={route.url} className={"size-12 rounded-full"}>
									<route.icon />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>{route.name}</p>
							</TooltipContent>
						</Tooltip>
					</DockIcon>
				))}

				<Separator
					orientation="vertical"
					className="w-1 mx-1 rounded-full bg-primary/50"
				/>

				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild>
							<div>
								<UwuToggle className="size-12" />
							</div>
						</TooltipTrigger>
						<TooltipContent>
							<p>uwu</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>
				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild>
							<div>
								<ModeToggle className="flex items-center justify-center p-3 size-12" />
							</div>
						</TooltipTrigger>
						<TooltipContent>
							<p>Light / Dark Mode</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>
			</Dock>
		</TooltipProvider>
	)
}

const Icons = {
	grid: (props) => <Image src={GridBuilder} alt="Grid Builder" {...props} />,
	ma: (props) => <Image src={MultiAttack} alt="Multi Attack" {...props} />,
	skills: (props) => (
		<Image src={WeaponSkills} alt="Weapon Skills" {...props} />
	),
	score: (props) => <Image src={GridScore} alt="Grid Score" {...props} />,
	contact: (props) => <Image src={Contact} alt="Contact" {...props} />,
}

const data = [
	{
		name: "Grid Builder",
		url: "/tool/grid-builder",
		icon: Icons.grid,
	},
	{
		name: "MA Calculator",
		url: "/tool/multiattack-calculator",
		icon: Icons.ma,
	},
	{
		name: "Weapon Skills",
		url: "/tool/weapon-skills",
		icon: Icons.skills,
	},
	{
		name: "Grid Score",
		url: "/tool/grid-score",
		icon: Icons.score,
	},
	{
		name: "Contact",
		url: "/tool/about",
		icon: Icons.contact,
	},
]
