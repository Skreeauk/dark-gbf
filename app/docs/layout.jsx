import { DocsLayout } from "fumadocs-ui/layout"
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle"
import { pageTree } from "@/app/source"
import { Banner } from "fumadocs-ui/components/banner"

import Image from "next/image"

export default function RootDocsLayout({ children }) {
	return (
		<>
			<Banner id="wip-alert">Docs is still WIP</Banner>
			<DocsLayout
				tree={pageTree}
				nav={{
					title: (
						<>
							<Image src={"/favicon.webp"} width={32} height={32} alt="logo" />
							<span className="font-medium max-md:[header_&]:hidden">
								Dark GBF
							</span>
						</>
					),
				}}
				sidebar={{
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
				}}
			>
				{children}
			</DocsLayout>
		</>
	)
}
