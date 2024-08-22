import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

import { GlareCard } from "@/components/aceternity/GlareCard"
import { ModeToggle } from "@/components/ModeToggle"
import { PreLoader } from "@/components/PreLoader"
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams"
import { Card, CardContent } from "@/components/ui/card"
import { BorderBeam } from "@/components/magicui/border-beam"
import { RevealCard, CanvasReveal } from "@/components/aceternity/CanvasReveal"

export default function Home() {
	return (
		<div className="relative flex flex-col flex-1 md:overflow-hidden">
			<PreLoader />
			<BackgroundBeams className="flex-1">
				<main className="relative z-50 flex flex-col items-center justify-center flex-1 w-full max-w-5xl gap-8 mx-auto md:gap-24">
					<div className="flex flex-col items-center justify-center w-full max-w-4xl gap-2 pt-6 md:pt-0">
						<h1 className="text-5xl font-semibold">Dark GBF</h1>
						<h2 className="text-2xl opacity-70">Make your Dark better</h2>
						<div className="flex items-center justify-center rounded-md size-14 bg-secondary">
							<ModeToggle />
						</div>
					</div>
					<div className="flex flex-col gap-8 mb-10 md:flex-row ">
						<Link
							href={"/docs/celeste"}
							aria-label="Celeste Guide"
							className="w-80"
						>
							<RevealCard
								title="Magna Guide"
								desc="Learn how to be decent as a Celeste user"
								icon={
									<Image
										src={"/docs/icon/magna.webp"}
										width={80}
										height={80}
										className=""
										alt="Magna"
									/>
								}
							>
								<CanvasReveal
									animationSpeed={3}
									containerClassName="bg-background"
									colors={[
										[236, 72, 153],
										[232, 121, 249],
									]}
								/>
							</RevealCard>
						</Link>
						<Link
							href={"/docs/hades"}
							aria-label="Hades Guide"
							className="w-80"
						>
							<RevealCard
								title="Hades Guide"
								desc="Elevate your Hades experience by actually learning"
								icon={
									<Image
										src={"/docs/icon/primal.webp"}
										width={80}
										height={80}
										className=""
										alt="Primal"
									/>
								}
							>
								<CanvasReveal
									animationSpeed={3}
									containerClassName="bg-background"
									colors={[
										[59, 130, 246],
										[139, 92, 246],
									]}
								/>
							</RevealCard>
						</Link>
						<Link href={"/tool"} aria-label="Dark Tools" className="w-80">
							<RevealCard
								title="Tools"
								desc="Tools to help Dark players ability to play GBF"
								icon={
									<Image
										src={"/docs/icon/tool.webp"}
										width={80}
										height={80}
										className=""
										alt="Tools"
									/>
								}
							>
								<CanvasReveal
									animationSpeed={3}
									containerClassName="bg-background"
									colors={[[125, 211, 252]]}
								/>
							</RevealCard>
						</Link>
					</div>
				</main>
			</BackgroundBeams>
		</div>
	)
}
