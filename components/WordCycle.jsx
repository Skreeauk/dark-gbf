import { FlipWords } from "./aceternity/FlipWords"

export function WordCycle() {
	const words = ["abandon", "exertion", "surge", "trium", "wrath", "fandango"]

	return (
		<div className="flex items-center justify-center h-40 px-4 border rounded-lg md:h-80 bg-background">
			<div className="mx-auto text-4xl font-normal text-center text-neutral-600 dark:text-neutral-400">
				Calculate your <br />
				<FlipWords words={words} />
			</div>
		</div>
	)
}
