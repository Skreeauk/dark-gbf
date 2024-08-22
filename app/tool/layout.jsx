import { ViewTransitions } from "next-view-transitions"

import DockBar from "@/components/DockBar"

import dynamic from "next/dynamic"

const BackgroundCellCore = dynamic(() =>
	import("@/components/aceternity/BackgroundRipple")
)

export const metadata = {
	title: "Dark GBF",
	description: "Make your Dark better",
	alternates: {
		canonical: "/tool",
	},
}

export default function Layout({ children }) {
	return (
		<ViewTransitions>
			<div className="relative flex flex-col flex-1 md:overflow-hidden">
				{children}
				<DockBar />
				<BackgroundCellCore />
			</div>
		</ViewTransitions>
	)
}
