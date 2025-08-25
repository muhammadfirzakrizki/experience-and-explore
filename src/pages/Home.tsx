import { useState } from "react"
import { Calendar, Moon, X, AlertCircle } from "lucide-react"

export default function Home() {
  const [date, setDate] = useState("")
  const [duration, setDuration] = useState("")
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
    setDate("")
    setDuration("")
    setError("")
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Date & Duration */}
      <div className="sticky top-0 z-40 bg-green-600 rounded-lg shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-end px-4 py-3 text-gray-700 gap-3">

          {/* Input Tanggal */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 shadow-sm bg-white">
            <Calendar className="text-green-600" size={18} />
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
                setError("")
              }}
              className="text-sm bg-transparent focus:outline-none"
            />
          </div>

          {/* Durasi */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 shadow-sm bg-white">
            <Moon className="text-green-600" size={18} />
            <select
              value={duration}
              onChange={(e) => handleDurationChange(e.target.value)}
              className="text-sm bg-transparent focus:outline-none"
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
              className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 border border-red-300 bg-white rounded-lg px-3 py-2"
            >
              <X size={16} />
              Clear
            </button>
          )}
        </div>


      </div>

      {/* Notifikasi */}
      {error && (
        <div className="flex justify-center mt-2">
          <div className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-lg shadow-sm text-sm animate-fadeIn">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        {/* Filter Panel */}
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row items-center gap-4">
          {/* Harga */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Harga:</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Semua</option>
              <option value="1">Rp 0 - Rp 1.000.000</option>
              <option value="2">Rp 1.000.001 - Rp 2.000.000</option>
              <option value="3">Rp 2.000.001 - Rp 3.000.000</option>
            </select>
          </div>

          {/* Tipe Villa */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Tipe:</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Semua</option>
              <option value="villa">Villa</option>
              <option value="kabin">Kabin</option>
              <option value="promo">Promo!</option>
            </select>
          </div>

          {/* Durasi / Malam */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Durasi:</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">1 Malam</option>
              <option value="2">2 Malam</option>
              <option value="3">3 Malam</option>
              <option value="4">4 Malam</option>
            </select>
          </div>

          {/* Tombol Reset */}
          <button className="ml-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm">
            Reset Filter
          </button>
        </div>

        {/* Pilihan Kategori */}
        <div className="flex flex-wrap justify-center gap-3">
          {["Semua", "Villa", "Kabin", "Promo!", "Jeep", "Trip"].map((item) => (
            <button
              key={item}
              className="px-4 py-2 bg-green-50 text-green-700 font-medium rounded-full border border-green-200 hover:bg-green-100 transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={`https://picsum.photos/400/250?random=${id}`}
                alt="Villa"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Villa Indah {id}</h3>
                <p className="text-sm text-gray-500">
                  Lokasi strategis dengan pemandangan pegunungan.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through text-sm">
                    Rp 2.500.000
                  </span>
                  <span className="text-green-600 font-bold">
                    Rp 1.750.000
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
