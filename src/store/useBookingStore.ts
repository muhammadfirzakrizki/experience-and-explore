// src/store/useBookingStore.ts
import { create } from "zustand"

interface BookingState {
  date: string
  duration: string
  setDate: (value: string) => void
  setDuration: (value: string) => void
  clear: () => void
}

export const useBookingStore = create<BookingState>((set) => ({
  date: "",
  duration: "",
  setDate: (value) => set({ date: value }),
  setDuration: (value) => set({ duration: value }),
  clear: () => set({ date: "", duration: "" })
}))
