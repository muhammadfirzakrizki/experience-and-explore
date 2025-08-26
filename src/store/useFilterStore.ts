// store/useFilterStore.ts
import { create } from "zustand";

interface FilterState {
  price: "asc" | "desc" | "";
  kapasitas: number | "";
  kamar: number | "";
  wisata: string;
  setPrice: (value: "asc" | "desc" | "") => void;
  setKapasitas: (value: number | "") => void;
  setKamar: (value: number | "") => void;
  setWisata: (value: string) => void;
  reset: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  price: "",
  kapasitas: "",
  kamar: "",
  wisata: "Semua",
  setPrice: (value) => set({ price: value }),
  setKapasitas: (value) => set({ kapasitas: value }),
  setKamar: (value) => set({ kamar: value }),
  setWisata: (value) => set({ wisata: value }),
  reset: () =>
    set({ price: "", kapasitas: "", kamar: "", wisata: "Semua" }),
}));
