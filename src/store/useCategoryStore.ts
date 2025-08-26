import { create } from "zustand"

interface CategoryStore {
  selectedCategory: string
  setCategory: (category: string) => void
  resetCategory: () => void
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  selectedCategory: "Semua",
  setCategory: (category) => set({ selectedCategory: category }),
  resetCategory: () => set({ selectedCategory: "Semua" }),
}))
