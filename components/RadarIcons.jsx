import { BoxIcon } from "@radix-ui/react-icons"
import { Radar } from "./aceternity/Radar"
import { IconContainer } from "./aceternity/IconContainer"

export function RadarIcons() {
	return (
		<div className="relative flex flex-col items-center justify-center w-full px-4 space-y-4 overflow-hidden h-96">
			<div className="w-full max-w-3xl mx-auto">
				<div className="flex items-center justify-center w-full">
					<IconContainer
						text="Designing"
						delay={0.3}
						icon={
							<BoxIcon className="w-8 h-8 text-slate-600" />
						}
					/>
				</div>
			</div>
			<div className="w-full max-w-md mx-auto">
				<div className="flex items-center justify-between w-full space-x-10 md:justify-between md:space-x-0 ">
					<IconContainer
						text="Maintenence"
						delay={0.5}
						icon={
							<BoxIcon className="w-8 h-8 text-slate-600" />
						}
					/>
					<IconContainer
						text="Server management"
						icon={
							<BoxIcon className="w-8 h-8 text-slate-600" />
						}
						delay={0.8}
					/>
				</div>
			</div>
			<div className="w-full max-w-3xl mx-auto">
				<div className="flex items-center w-full space-x-10 justify-evenly md:space-x-0 ">
					<IconContainer
						delay={0.6}
						text="GitHub Integration"
						icon={
							<BoxIcon className="w-8 h-8 text-slate-600" />
						}
					/>
					<IconContainer
						delay={0.7}
						text="CMS Integration"
						icon={
							<BoxIcon className="w-8 h-8 text-slate-600" />
						}
					/>
				</div>
			</div>

			<Radar className="absolute -bottom-12" />
			<div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
		</div>
	)
}
