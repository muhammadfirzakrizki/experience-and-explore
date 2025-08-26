import CategoryButtons from "@/component/home/CategoryButton"
import FilterPanel from "@/component/home/FilterPanel"
import StickyDateDuration from "@/component/home/StickyDateDuration"
import VillaCards from "@/component/home/VillaCard"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Date & Duration */}
      <StickyDateDuration />

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        {/* Filter Panel */}
        <FilterPanel />

        {/* Pilihan Kategori */}
        <CategoryButtons />

        {/* Cards */}
        <VillaCards />
      </div>
    </div>
  )
}
