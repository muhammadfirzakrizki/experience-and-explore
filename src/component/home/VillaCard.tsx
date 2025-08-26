import { villas } from "@/data/villas"
import { useCategoryStore } from "@/store/useCategoryStore"
import { useFilterStore } from "@/store/useFilterStore"
import { Star } from "lucide-react"

export default function VillaCards() {
    const category = useCategoryStore((state) => state.selectedCategory)
    const { price, kapasitas, kamar, wisata } = useFilterStore()

    const filteredVillas = villas
        .filter((v) => {
            // filter berdasarkan kategori
            if (category !== "Semua") {
                if (category === "Promo!") return v.promo
                return v.type === category
            }
            return true
        })
        .filter((v) => (kapasitas ? v.maxGuests <= kapasitas : true))
        .filter((v) => (kamar ? v.rooms <= kamar : true))
        .filter((v) => (wisata && wisata !== "Semua" ? v.location.includes(wisata) : true))
        .sort((a, b) => {
            if (!price) return 0 // price = null atau undefined artinya tidak di-sort
            const priceA = a.promo ? a.pricePromo! : a.priceStandard
            const priceB = b.promo ? b.pricePromo! : b.priceStandard

            return price === "desc" ? priceA - priceB : priceB - priceA
        })

    if (filteredVillas.length === 0) {
        return (
            <div className="text-center text-gray-500 py-10">
                Tidak ada villa sesuai filter.
            </div>
        )
    }

    console.log({ filteredVillas })


    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {filteredVillas.map((v) => (
                <div
                    key={v.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition relative"
                >
                    {/* Promo Badge */}
                    {v.promo && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            Promo Terbatas!
                        </div>
                    )}

                    <img
                        src={v.image}
                        alt={v.name}
                        className="w-full h-48 object-cover"
                    />

                    <div className="p-4 space-y-2">
                        <h3 className="text-lg font-semibold">{v.name}</h3>

                        <p className="text-sm text-gray-500">{v.location}</p>

                        <div className="flex items-center gap-1">
                            {Array.from({ length: v.stars }).map((_, i) => (
                                <Star key={i} size={16} className="text-yellow-400" />
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <span>{v.rooms} Kamar</span>
                            <span>{v.beds} Bed</span>
                            <span>Max {v.maxGuests} Orang</span>
                        </div>

                        <div className="flex items-center gap-2">
                            {v.promo && (
                                <span className="text-gray-400 line-through text-sm">
                                    Rp {v.priceStandard.toLocaleString()}
                                </span>
                            )}
                            <span className="text-green-600 font-bold">
                                Rp {(v.promo ? v.pricePromo : v.priceStandard)?.toLocaleString()}
                            </span>
                        </div>

                        {/* React Router / Klik biasa */}
                        <button
                            onClick={() => alert(`Lihat detail ${v.name}`)}
                            className="block w-full mt-2 bg-green-600 text-white rounded-lg py-2 hover:bg-green-700 transition"
                        >
                            Lihat Detail
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
