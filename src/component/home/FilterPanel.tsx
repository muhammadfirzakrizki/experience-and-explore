import { useState } from "react"
import { ChevronUp, ChevronDown, X } from "lucide-react"

export default function FilterPanel() {
  const [hargaAsc, setHargaAsc] = useState(true)
  const [showKapasitas, setShowKapasitas] = useState(false)
  const [showKamar, setShowKamar] = useState(false)
  const [showWisata, setShowWisata] = useState(false)

  const [selectedFilters, setSelectedFilters] = useState({
    harga: "",
    kapasitas: "",
    kamar: "",
    wisata: "Semua",
  })

  const toggleHarga = () => {
    setHargaAsc(!hargaAsc)
    setSelectedFilters((prev) => ({
      ...prev,
      harga: hargaAsc ? "Rendah → Tinggi" : "Tinggi → Rendah",
    }))
    setShowKapasitas(false)
    setShowKamar(false)
    setShowWisata(false)
  }

  const selectFilter = (type: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [type]: value }))
  }

  const resetFilter = () => {
    setSelectedFilters({ harga: "", kapasitas: "", kamar: "", wisata: "Semua" })
    setShowKapasitas(false)
    setShowKamar(false)
    setShowWisata(false)
    setHargaAsc(true)
  }

  const resetPanel = (type: "kapasitas" | "kamar" | "wisata") => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: type === "wisata" ? "Semua" : "",
    }))
  }

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      {/* Judul */}
      <h2 className="text-lg font-semibold text-gray-700 mb-3 text-center md:text-left">
        Filter Pencarian
      </h2>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start mb-3">
        <button
          onClick={toggleHarga}
          className="flex items-center gap-1 px-3 py-1 border rounded-lg bg-white border-gray-300 hover:bg-green-50 text-sm"
        >
          Harga {hargaAsc ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        <button
          onClick={() => {
            setShowKapasitas((prev) => !prev)
            setShowKamar(false)
            setShowWisata(false)
          }}
          className="px-3 py-1 border rounded-lg bg-white border-gray-300 hover:bg-green-50 text-sm"
        >
          Kapasitas
        </button>
        <button
          onClick={() => {
            setShowKamar((prev) => !prev)
            setShowKapasitas(false)
            setShowWisata(false)
          }}
          className="px-3 py-1 border rounded-lg bg-white border-gray-300 hover:bg-green-50 text-sm"
        >
          Kamar
        </button>
        <button
          onClick={() => {
            setShowWisata((prev) => !prev)
            setShowKapasitas(false)
            setShowKamar(false)
          }}
          className="px-3 py-1 border rounded-lg bg-white border-gray-300 hover:bg-green-50 text-sm"
        >
          Dekat Wisata
        </button>
        <button
          onClick={resetFilter}
          className="px-3 py-1 border rounded-lg bg-red-500 text-white hover:bg-red-600 text-sm"
        >
          Reset Filter
        </button>
      </div>

      {/* Panels */}
      {showKapasitas && (
        <div className="flex flex-wrap gap-2 mb-3 justify-center md:justify-start items-center">
          <button
            onClick={() => resetPanel("kapasitas")}
            className="flex items-center gap-1 px-2 py-1 border rounded-full text-sm text-red-500 border-red-400 hover:bg-red-50"
          >
            <X size={12} /> Reset Kapasitas
          </button>
          {[...Array(32)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => selectFilter("kapasitas", `${i + 1} orang`)}
              className={`px-3 py-1 border rounded-lg text-sm ${selectedFilters.kapasitas === `${i + 1} orang`
                  ? "bg-green-100 text-green-700"
                  : "bg-white border-gray-300"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {showKamar && (
        <div className="flex flex-wrap gap-2 mb-3 justify-center md:justify-start items-center">
          <button
            onClick={() => resetPanel("kamar")}
            className="flex items-center gap-1 px-2 py-1 border rounded-full text-sm text-red-500 border-red-400 hover:bg-red-50"
          >
            <X size={12} /> Reset Kamar
          </button>
          {[...Array(10)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => selectFilter("kamar", `${i + 1} kamar`)}
              className={`px-3 py-1 border rounded-lg text-sm ${selectedFilters.kamar === `${i + 1} kamar`
                  ? "bg-green-100 text-green-700"
                  : "bg-white border-gray-300"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {showWisata && (
        <div className="flex flex-wrap gap-2 mb-3 justify-center md:justify-start items-center">
          <button
            onClick={() => resetPanel("wisata")}
            className="flex items-center gap-1 px-2 py-1 border rounded-full text-sm text-red-500 border-red-400 hover:bg-red-50"
          >
            <X size={12} /> Reset Wisata
          </button>
          {["Wisata Bogor", "Wisata Bandung", "Wisata Dieng"].map((w) => (
            <button
              key={w}
              onClick={() => selectFilter("wisata", w)}
              className={`px-3 py-1 border rounded-lg text-sm ${selectedFilters.wisata === w
                  ? "bg-green-100 text-green-700"
                  : "bg-white border-gray-300"
                }`}
            >
              {w}
            </button>
          ))}
        </div>
      )}

      {/* Filter Status */}
      <div className="text-center md:text-left text-sm text-gray-600">
        {Object.entries(selectedFilters)
          .filter(([key, value]) => value && !(key === "wisata" && value === "Semua"))
          .map(([key, value]) => (
            <span key={key} className="inline-block mr-3">
              {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
              <span className="font-medium text-green-700">{value}</span>
            </span>
          ))}
      </div>
    </div>
  )
}
