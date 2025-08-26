import HeroSection from "@/component/home/HeroSection"
import SectionTitle from "@/component/home/SectionTitle"
import VillaListing from "@/component/home/VillaListing"

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <SectionTitle />
      <VillaListing />

    </div>
  )
}
