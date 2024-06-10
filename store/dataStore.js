import { create } from "zustand"
import { persist } from "zustand/middleware"

const useDataStore = create(
	persist(
		(set, get) => ({
			grid: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			opus_key: ["224", "none"],
			draco_key: ["226", "227"],
			ultima_key: ["none", "229", "230"],
			updateGrid: (newGrid) => set({ grid: newGrid }),
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
			updateOpus: (newKeys) => set({ opus_key: newKeys }),
			updateDraco: (newKeys) => set({ draco_key: newKeys }),
			updateUltima: (newKeys) => set({ ultima_key: newKeys }),
			resetGrid: () => set({ grid: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }),
			resetOpus: () => set({ magna_opus_key: ["224", "none"] }),
			resetDraco: () => set({ draco_key: ["226", "227"] }),
			resetUltima: () => set({ ultima_key: ["none", "229", "230"] }),
		}),
		{
			name: "weaponData",
		}
	)
)

export default useDataStore
