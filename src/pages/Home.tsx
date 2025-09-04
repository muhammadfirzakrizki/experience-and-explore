import HeroSection from "@/component/home/HeroSection";
import { Suspense, lazy } from "react";

// Lazy load komponen
const VillaFilter = lazy(() => import("@/component/home/VillaFilter"));
const SectionTitle = lazy(() => import("@/component/home/SectionTitle"));
const VillaListing = lazy(() => import("@/component/home/VillaListing"));

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSection />

      <Suspense fallback={<div className="text-center py-10">Loading filter...</div>}>
        <VillaFilter />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Loading section title...</div>}>
        <SectionTitle />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Loading villa listing...</div>}>
        <VillaListing />
      </Suspense>
    </div>
  );
}
