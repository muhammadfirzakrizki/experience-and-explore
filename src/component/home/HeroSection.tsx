export default function HeroSection() {
  return (
    <section
      className="relative h-[calc(100vh-80px)] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/villa-hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Villa Puncak
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md">
          Rasakan ketenangan alam dan kemewahan penginapan di jantung Puncak.
          Suasana sejuk, pemandangan indah, dan kenyamanan maksimal untuk Anda.
        </p>
      </div>
    </section>
  )
}
