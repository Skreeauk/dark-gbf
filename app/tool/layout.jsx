import DockBar from "@/components/DockBar"

import dynamic from "next/dynamic"

const BackgroundCellCore = dynamic(() =>
	import("@/components/BackgroundRipple")
)

export const metadata = {
	title: "Dark GBF",
	description: "Tools for Dark Players",
}

export default function Layout({ children }) {
	return (
		<div className="relative flex flex-col min-h-screen md:overflow-hidden">
			{children}
			<DockBar />
			<BackgroundCellCore />
		</div>
	)
}
