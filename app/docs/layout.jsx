import { DocsLayout } from "fumadocs-ui/layout"
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle"
import { source } from "@/app/source"
import { Banner } from "fumadocs-ui/components/banner"

import { UwuToggle } from "@/components/UwuToggle"

import Image from "next/image"

export default function RootDocsLayout({ children }) {
	return (
		<>
			<Banner id="wip-alert">Docs is still WIP</Banner>
			<DocsLayout
				tree={source.pageTree}
				nav={{
					title: (
						<>
							<Image
								src={"/logo.webp"}
								width={40}
								height={40}
								alt="logo"
								className="size-10"
							/>
							<h6 className="font-medium max-md:[header_&]:hidden">Dark GBF</h6>
						</>
					),
				}}
				sidebar={{
					prefetch: false,
					banner: (
						<RootToggle
							options={[
								{
									title: "Celeste",
									description: "Magna Guide",
									url: "/docs/celeste",
									icon: (
										<Image
											src={"/docs/icon/celeste.webp"}
											width={56}
											height={56}
											alt="magna"
											className="size-14 shrink-0"
										/>
									),
								},
								{
									title: "Hades",
									description: "Primal Guide",
									url: "/docs/hades",
									icon: (
										<Image
											src={"/docs/icon/hades.webp"}
											width={56}
											height={56}
											alt="primal"
											className="size-14 shrink-0"
										/>
									),
								},
								{
									title: "Tools",
									description: "Tools for Dark Players",
									url: "/tool",
									icon: (
										<Image
											src={"/docs/icon/mommy.webp"}
											width={56}
											height={56}
											alt="tool"
											className="size-14 shrink-0"
										/>
									),
								},
							]}
						/>
					),
					footer: <UwuToggle className="mr-4 size-10 hover:bg-accent" />,
				}}
			>
				{children}
			</DocsLayout>
		</>
	)
}
