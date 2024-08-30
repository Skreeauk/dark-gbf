import { create } from "zustand"
import { persist } from "zustand/middleware"

const useDataStore = create(
	persist(
		(set, get) => ({
			grid: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			opus_key: ["224", "none"],
			draco_key: ["226", "227"],
			ultima_key: ["none", "229", "230"],
			summon: [0, 0],
			aura: [0, 0, 0, 0],
			updateGridSlot: (i, weaponID) =>
				set((state) => {
					const updatedGrid = [...state.grid]
					updatedGrid[i] = weaponID
					return { grid: updatedGrid }
				}),
			swapGridSlot: (i, j) =>
				set((state) => {
					const newGrid = [...state.grid]

					const copy = newGrid[i - 1]
					newGrid[i - 1] = newGrid[j - 1]
					newGrid[j - 1] = copy

					return { grid: newGrid }
				}),
			updateGrid: (newGrid) => set({ grid: newGrid }),
			updateOpus: (newKeys) => set({ opus_key: newKeys }),
			updateDraco: (newKeys) => set({ draco_key: newKeys }),
			updateUltima: (newKeys) => set({ ultima_key: newKeys }),
			updateKeys: (newOpusKeys, newDracoKeys, newUltimaKeys) => {
				get().updateOpus(newOpusKeys)
				get().updateDraco(newDracoKeys)
				get().updateUltima(newUltimaKeys)
			},
			updateSummon: (newSummon) => set({ summon: newSummon }),
			updateAura: (newAura) => set({ aura: newAura }),
			resetGrid: () => set({ grid: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }),
			resetOpus: () => set({ opus_key: ["224", "none"] }),
			resetDraco: () => set({ draco_key: ["226", "227"] }),
			resetUltima: () => set({ ultima_key: ["none", "229", "230"] }),
			resetAll: () => {
				get().resetGrid()
				get().resetOpus()
				get().resetDraco()
				get().resetUltima()
			},
			resetSummon: () => set({ summon: [0, 0] }),
			resetAura: () => set({ aura: [0, 0, 0, 0] }),
			resetSummonAura: () => {
				get().resetSummon()
				get().resetAura()
			},
		}),
		{
			name: "DarkGBFData",
		}
	)
)

export default useDataStore
