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
											src={"/docs/icon/magna.webp"}
											width={40}
											height={40}
											alt="magna"
											className="p-1 rounded-md bg-purple-400/50 size-10 shrink-0"
										/>
									),
								},
								{
									title: "Hades",
									description: "Primal Guide",
									url: "/docs/hades",
									icon: (
										<Image
											src={"/docs/icon/primal.webp"}
											width={40}
											height={40}
											alt="primal"
											className="p-1 rounded-md bg-blue-400/50 size-10 shrink-0"
										/>
									),
								},
								{
									title: "Tools",
									description: "Tools for Dark Players",
									url: "/tool",
									icon: (
										<Image
											src={"/docs/icon/tool.webp"}
											width={40}
											height={40}
											alt="tool"
											className="p-1 rounded-md bg-teal-400/50 size-10 shrink-0"
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
