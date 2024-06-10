"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"

import { OpusSelect } from "../select/OpusSelect"
import { DracoSelect } from "../select/DracoSelect"
import { UltimaSelect } from "../select/UltimaSelect"

import useDataStore from "@/store/dataStore"

export function KeyPopUp({ weapon }) {
	const keyName =
		weapon == "opus" ? "Pendulums" : weapon == "draconic" ? "Telumas" : "Keys"

	const opusKeys = useDataStore((state) => state.opus_key)
	const dracoKeys = useDataStore((state) => state.draco_key)
	const ultimaKeys = useDataStore((state) => state.ultima_key)

	const updateOpus = useDataStore((state) => state.updateOpus)
	const updateDraco = useDataStore((state) => state.updateDraco)
	const updateUltima = useDataStore((state) => state.updateUltima)

	const [opus, setOpus] = useState(opusKeys)
	const [draco, setDraco] = useState(dracoKeys)
	const [ultima, setUltima] = useState(ultimaKeys)

	function handleOpusChange(i, val) {
		const copyOpus = [...opus]
		copyOpus[i] = val
		setOpus(copyOpus)
	}

	function handleDracoChange(i, val) {
		const copyDraco = [...draco]
		copyDraco[i] = val
		setDraco(copyDraco)
	}

	function handleUltimaChange(i, val) {
		const copyUltima = [...ultima]
		copyUltima[i] = val
		setUltima(copyUltima)
	}

	function handleSubmit() {
		updateOpus(opus)
		updateDraco(draco)
		updateUltima(ultima)
	}

	return (
		<DialogContent className="sm:max-w-[425px]">
			<DialogHeader>
				<DialogTitle className="capitalize">Edit {weapon}</DialogTitle>
				<DialogDescription>Select {keyName}</DialogDescription>
			</DialogHeader>
			{/* Opus */}
			{weapon == "opus" && (
				<OpusSelect opus={opus} handleOpusChange={handleOpusChange} />
			)}

			{/* Draco */}
			{weapon == "draconic" && (
				<DracoSelect draco={draco} handleDracoChange={handleDracoChange} />
			)}

			{/* Ultima */}
			{weapon == "ultima" && (
				<UltimaSelect ultima={ultima} handleUltimaChange={handleUltimaChange} />
			)}

			<DialogFooter>
				<DialogClose asChild>
					<Button type="button" onClick={() => handleSubmit()}>
						Select
					</Button>
				</DialogClose>
			</DialogFooter>
		</DialogContent>
	)
}
