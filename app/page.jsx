import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

import { GlareCard } from "@/components/aceternity/GlareCard"
import { ModeToggle } from "@/components/ModeToggle"

const BackgroundCellCore = dynamic(() =>
	import("@/components/BackgroundRipple")
)

export default function Home() {
	return (
		<div className="relative flex flex-col flex-1 md:overflow-hidden">
			<main className="relative z-50 flex flex-col items-center justify-center flex-1 w-full max-w-5xl gap-8 mx-auto md:gap-24">
				<div className="flex flex-col items-center justify-center w-full max-w-4xl gap-2 pt-6 md:pt-0">
					<h1 className="text-5xl font-semibold">Dark GBF</h1>
					<h3 className="text-2xl opacity-70">Tools for Dark Players</h3>
					<div className="flex items-center justify-center rounded-md size-14 bg-secondary">
						<ModeToggle />
					</div>
				</div>
				<div className="grid grid-cols-1 gap-10 mb-10 md:grid-cols-3 md:mb-0">
					<Link href={"/docs/celeste"} aria-label="Celeste Guide">
						<GlareCard className="flex flex-col items-center justify-center gap-6 px-6 py-8">
							<div className="flex items-center justify-center basis-1/2">
								<Image
									src={"/docs/icon/magna.png"}
									width={80}
									height={80}
									className=""
									alt="Magna"
								/>
							</div>
							<div className="flex flex-col justify-end basis-1/2">
								<p className="text-lg font-bold text-white">Magna Guide</p>
								<p className="mt-4 text-base font-normal text-neutral-200">
									Learn how to be decent as a Celeste user
								</p>
							</div>
						</GlareCard>
					</Link>
					<Link href={"/docs/hades"} aria-label="Hades Guide">
						<GlareCard className="flex flex-col items-center justify-center gap-6 px-6 py-8">
							<div className="flex items-center justify-center basis-1/2">
								<Image
									src={"/docs/icon/primal.png"}
									width={80}
									height={80}
									className=""
									alt="Primal"
								/>
							</div>
							<div className="flex flex-col justify-end basis-1/2">
								<p className="text-lg font-bold text-white">Primal Guide</p>
								<p className="mt-4 text-base font-normal text-neutral-200">
									Elevate your Hades experience by actually learning
								</p>
							</div>
						</GlareCard>
					</Link>
					<Link href={"/tool"} aria-label="Dark Tools">
						<GlareCard className="flex flex-col items-center justify-center gap-6 px-6 py-8">
							<div className="flex items-center justify-center basis-1/2">
								<Image
									src={"/docs/icon/tool.png"}
									width={80}
									height={80}
									className=""
									alt="Tools"
								/>
							</div>
							<div className="flex flex-col justify-end basis-1/2">
								<p className="text-lg font-bold text-white">Tools</p>
								<p className="mt-4 text-base font-normal text-neutral-200">
									Tools to help Dark players ability to play GBF
								</p>
							</div>
						</GlareCard>
					</Link>
				</div>
			</main>
			<BackgroundCellCore />
		</div>
	)
}
