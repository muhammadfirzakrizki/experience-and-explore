import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useCategoryStore } from "@/store/useCategoryStore"
import { useFilterStore } from "@/store/useFilterStore"

const categories = [
  { label: "Semua", color: "bg-green-50 text-green-700 border-green-200", ring: "ring-green-500" },
  { label: "Villa", color: "bg-blue-50 text-blue-700 border-blue-200", ring: "ring-blue-500" },
  { label: "Kabin", color: "bg-purple-50 text-purple-700 border-purple-200", ring: "ring-purple-500" },
  { label: "Promo!", color: "bg-yellow-50 text-yellow-700 border-yellow-200", ring: "ring-yellow-500" },
  { label: "Jeep Trip", color: "bg-red-50 text-red-700 border-red-200", ring: "ring-red-500", link: "/jeep" },
]

export default function CategoryButtons() {
  const { selectedCategory, setCategory } = useCategoryStore()
  const { reset } = useFilterStore()
  const location = useLocation()

  // Reset category & filter otomatis saat pindah halaman
  useEffect(() => {
    setCategory("Semua")
    reset()
  }, [location.pathname, setCategory, reset])

  return (
    <div className="flex flex-wrap gap-3 mb-6 justify-start">
      {categories.map(({ label, color, ring, link }) =>
        link ? (
          <Link
            key={label}
            to={link}
            className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:scale-105 ${
              selectedCategory === label ? `ring-2 ${ring}` : "opacity-90"
            } ${color}`}
            onClick={() => setCategory(label)}
          >
            {label}
          </Link>
        ) : (
          <button
            key={label}
            className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:scale-105 ${
              selectedCategory === label ? `ring-2 ${ring}` : "opacity-90"
            } ${color}`}
            onClick={() => setCategory(label)}
          >
            {label}
          </button>
        )
      )}
    </div>
  )
}
