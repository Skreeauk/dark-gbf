"use client"

import React from "react"
import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"

import CharacterPanel from "./CharacterPanel"
import SummonPanel from "./SummonPanel"
import TAPanel from "./TAPanel"

export default function MACalculator({ frameworks = [], primals = [] }) {
	const [value, setValue] = useState("")

	const [openPrimal1, setOpenPrimal1] = useState(false)
	const [primal1, setPrimal1] = useState("")

	const [openPrimal2, setOpenPrimal2] = useState(false)
	const [primal2, setPrimal2] = useState("")

	function handleReset() {
		setValue("")
		setPrimal1("")
		setPrimal2("")
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
							frameworks={frameworks}
							value={value}
							setValue={setValue}
							handleReset={handleReset}
						/>
						{/* Right */}
						<div className="flex flex-col flex-1 w-full h-full">
							{/* Primal */}
							<SummonPanel
								primals={primals}
								primal1={primal1}
								primal2={primal2}
								setPrimal1={setPrimal1}
								setPrimal2={setPrimal2}
								openPrimal1={openPrimal1}
								openPrimal2={openPrimal2}
								setOpenPrimal1={setOpenPrimal1}
								setOpenPrimal2={setOpenPrimal2}
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
