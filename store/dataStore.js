import { create } from "zustand"
import { persist } from "zustand/middleware"

const useDataStore = create(
	persist(
		(set, get) => ({
			grid: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			opus_key: ["224", "none"],
			draco_key: ["226", "227"],
			ultima_key: ["none", "229", "230"],
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
			resetGrid: () => set({ grid: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }),
			resetOpus: () => set({ magna_opus_key: ["224", "none"] }),
			resetDraco: () => set({ draco_key: ["226", "227"] }),
			resetUltima: () => set({ ultima_key: ["none", "229", "230"] }),
			resetAll: () => {
				get().resetGrid()
				get().resetOpus()
				get().resetDraco()
				get().resetUltima()
			},
		}),
		{
			name: "weaponData",
		}
	)
)

export default useDataStore
