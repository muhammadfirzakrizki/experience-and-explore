import { useState } from "react"
import { Calendar, Moon, X, AlertCircle } from "lucide-react"
import { useBookingStore } from "@/store/useBookingStore"

export default function StickyDateDuration() {
  const { date, duration, setDate, setDuration, clear } = useBookingStore()
  const [error, setError] = useState("")

  const handleDurationChange = (value: string) => {
    if (!date) {
      setError("Mohon isi tanggal terlebih dahulu")
      return
    }
    setDuration(value)
    setError("")
  }

  const clearAll = () => {
    clear()
    setError("")
  }

  return (
    <>
      <div className="sticky top-0 z-40 bg-green-600 rounded-lg shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-end gap-2 md:gap-3 px-4 py-3 text-gray-700">

          {/* Input Tanggal */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 shadow-sm bg-white w-full md:w-auto">
            <Calendar className="text-green-600" size={18} />
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
                setError("")
              }}
              min={new Date().toLocaleDateString("en-CA")}
              className="text-sm bg-transparent focus:outline-none w-full"
            />
          </div>

          {/* Durasi */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 shadow-sm bg-white w-full md:w-auto">
            <Moon className="text-green-600" size={18} />
            <select
              value={duration}
              onChange={(e) => handleDurationChange(e.target.value)}
              className="text-sm bg-transparent focus:outline-none w-full"
            >
              <option value="">Durasi</option>
              {[1, 2, 3, 4].map((d) => (
                <option key={d} value={d}>
                  {d} Malam
                </option>
              ))}
            </select>
          </div>

          {/* Tombol Clear */}
          {(date || duration) && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 border border-red-300 bg-white rounded-lg px-3 py-2 w-full md:w-auto justify-center"
            >
              <X size={16} />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Notifikasi */}
      {error && (
        <div className="flex justify-center mt-2 px-4 md:px-0">
          <div className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-lg shadow-sm text-sm animate-fadeIn w-full md:w-auto justify-center">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        </div>
      )}
    </>
  )
}
