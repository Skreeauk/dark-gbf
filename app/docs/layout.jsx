import { DocsLayout } from "fumadocs-ui/layout"
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle"
import { pageTree } from "@/app/source"

import { ScissorsIcon } from "@radix-ui/react-icons"
import Image from "next/image"

export default function RootDocsLayout({ children }) {
	return (
		<DocsLayout
			tree={pageTree}
			nav={{
				title: (
					<>
						<Image src={"/favicon.ico"} width={32} height={32} />
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
										src={"/docs/icon/magna.png"}
										width={40}
										height={40}
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
										src={"/docs/icon/primal.png"}
										width={40}
										height={40}
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
										src={"/docs/icon/tool.png"}
										width={40}
										height={40}
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
	)
}
