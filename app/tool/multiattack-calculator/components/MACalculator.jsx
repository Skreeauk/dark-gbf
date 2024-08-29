"use client"

import React from "react"
import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"

import CharacterPanel from "./CharacterPanel"
import SummonPanel from "./SummonPanel"
import TAPanel from "./TAPanel"

export default function MACalculator({ characters, summons }) {
	const [char, setChar] = useState("")

	const [openSummon1, setOpenSummon1] = useState(false)
	const [summon1, setSummon1] = useState("")

	const [openSummon2, setOpenSummon2] = useState(false)
	const [summon2, setSummon2] = useState("")

	function handleReset() {
		setChar("")
		setSummon1("")
		setSummon2("")
	}

	return (
		<>
			<main className="relative z-50 flex flex-col items-center justify-center flex-1 w-full max-w-5xl gap-6 mx-auto">
				<div className="flex flex-col items-center justify-center w-full max-w-4xl gap-5 pt-6 md:pt-0">
					<h1 className="text-5xl font-semibold text-center">
						MultiAttack Calculator
					</h1>
				</div>
				<Card className="w-[95%] md:w-full max-w-5xl md:mx-auto mb-28">
					<CardContent className="flex flex-col items-center w-full h-full gap-6 p-3 pt-3 md:p-6 md:pt-6 md:flex-row">
						{/* Left */}
						<CharacterPanel
							characters={characters}
							char={char}
							setChar={setChar}
							handleReset={handleReset}
						/>
						{/* Right */}
						<div className="flex flex-col flex-1 w-full h-full">
							{/* Primal */}
							<SummonPanel
								summons={summons}
								summon1={summon1}
								summon2={summon2}
								setSummon1={setSummon1}
								setSummon2={setSummon2}
								openSummon1={openSummon1}
								openSummon2={openSummon2}
								setOpenSummon1={setOpenSummon1}
								setOpenSummon2={setOpenSummon2}
							/>
							{/* TA Inputs */}
							<TAPanel />
						</div>
					</CardContent>
				</Card>
			</main>
		</>
	)
}
