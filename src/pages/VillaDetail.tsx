// src/pages/VillaDetail.tsx
import { useParams } from "react-router-dom"
import { villas } from "@/data/villas"
import type { Villa } from "@/types/villa"
import { MapPin, Users, Star, Wifi, Home, Music, TreeDeciduous, WavesLadder } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper/modules"
import type { JSX } from "react"

export default function VillaDetail() {
  const { id } = useParams()
  const villa: Villa | undefined = villas.find(v => v.id === Number(id))

  if (!villa) {
    return (
      <div className="flex h-screen items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-gray-700">
          Villa tidak ditemukan 😢
        </h1>
      </div>
    )
  }

  const galleryImages = [villa.image, "/villa1.jpg", "/villa2.jpg", "/villa1.jpg", "/villa2.jpg"]

  // Map fasilitas ke ikon

  const facilityIcons: Record<string, JSX.Element> = {
    "Wifi": <Wifi size={20} />,
    "Kolam Renang": <WavesLadder size={20} />,
    "Private Pool": <WavesLadder size={20} />,
    "Rooftop": <Home size={20} />,
    "Kamar Tidur": <Home size={20} />,
    "Karaoke": <Music size={20} />,
    "Taman": <TreeDeciduous size={20} />,
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${villa.background})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">{villa.name}</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-md">{villa.description}</p>
        </div>
      </div>

      {/* Floating Info Card */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 grid md:grid-cols-2 gap-8">
          {/* Foto Villa */}
          <div className="flex flex-col justify-between">
            <img
              src={villa.image}
              alt={villa.name}
              className="w-full h-80 md:h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Info Villa */}
          <div className="flex flex-col justify-between text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700">{villa.name}</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{villa.description}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <p className="flex items-center gap-2"><Users size={20} /> Kapasitas: Max 8 orang</p>
              <p className="flex items-center gap-2"><Star size={20} /> Rating: 4.8</p>
              <p className="flex items-center gap-2"><MapPin size={20} /> Lokasi: Puncak, Bogor</p>
              {villa.facilities.split(",").map((f, idx) => (
                <p key={idx} className="flex items-center gap-2">
                  {facilityIcons[f.trim()] || <Home size={20} />} {f.trim()}
                </p>
              ))}
            </div>

            {/* Harga per hari */}
            <div className="mt-6 space-y-2">
              <p className="flex items-center gap-2">
                <Star size={18} /> <span className="font-semibold text-gray-800">Senin - Kamis:</span>
                <span className="text-green-700">{villa.price}</span>
              </p>
              <p className="flex items-center gap-2">
                <Star size={18} /> <span className="font-semibold text-gray-800">Jumat:</span>
                <span className="text-green-700">Rp 3.000.000 / malam</span>
              </p>
              <p className="flex items-center gap-2">
                <Star size={18} /> <span className="font-semibold text-gray-800">Sabtu - Minggu dan Hari Libur:</span>
                <span className="text-green-700">Rp 3.500.000 / malam</span>
              </p>
            </div>

            <a
              href={`/pembayaran/${villa.id}`}
              className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-xl transition text-center text-lg"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>

      {/* Galeri Foto */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-green-700 text-center mb-6">
          Galeri Villa
        </h3>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide
              key={idx}
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ width: "300px", height: "400px" }}
            >
              <img
                src={img}
                alt={`Villa ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  )
}
