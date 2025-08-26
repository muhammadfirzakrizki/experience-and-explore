type Villa = {
    id: number
    name: string
    image: string
    background: string
    description: string
    facilities: string
    price: string
    bookingLink: string
    detailLink: string
}

const villas: Villa[] = [
    {
        id: 1,
        name: "Villa Kenanga",
        image: "/villa1.jpg",
        background: "/bg1.jpg",
        description:
            "Villa modern dengan rooftop view Puncak. Tempat terbaik untuk menikmati sunrise dan sunset.",
        facilities: "3 Kamar Tidur, Private Pool, Rooftop, Wifi",
        price: "Rp 2.500.000 / malam",
        bookingLink:
            "https://wa.me/6281234567890?text=Saya%20ingin%20pesan%20Villa%20Kenanga",
        detailLink: "/villa/kenanga",
    },
    {
        id: 2,
        name: "Villa Mawar",
        image: "/villa2.jpg",
        background: "/bg2.jpg",
        description:
            "Villa klasik dengan nuansa alami, cocok untuk keluarga besar yang ingin liburan santai.",
        facilities: "4 Kamar Tidur, Kolam Renang, Karaoke, Taman",
        price: "Rp 3.000.000 / malam",
        bookingLink:
            "https://wa.me/6281234567890?text=Saya%20ingin%20pesan%20Villa%20Mawar",
        detailLink: "/villa/mawar",
    },
]

export default function VillaListing() {
    return (
        <div className="w-full">
            {villas.map((villa, index) => (
                <div key={villa.id}>
                    <section
                        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: `url(${villa.background})` }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50" />

                        {/* Floating Card */}
                        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div
                                className={`bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 ${index % 2 !== 0
                                    ? "md:[&>*:first-child]:order-2"
                                    : ""
                                    }`}
                            >
                                {/* Foto Villa */}
                                <div className="h-64 sm:h-80 md:h-[400px]">
                                    <img
                                        src={villa.image}
                                        alt={villa.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Detail Villa */}
                                <div className="p-6 sm:p-8 flex flex-col justify-center text-white">
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                                        {villa.name}
                                    </h3>
                                    <p className="text-base sm:text-lg leading-relaxed text-gray-100">
                                        {villa.description}
                                    </p>

                                    <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2 text-gray-200 text-sm sm:text-base">
                                        <p>
                                            <span className="font-semibold">
                                                Fasilitas:
                                            </span>{" "}
                                            {villa.facilities}
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Harga:
                                            </span>{" "}
                                            {villa.price}
                                        </p>
                                    </div>

                                    {/* Tombol */}
                                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-3">
                                        <a
                                            href={villa.bookingLink}
                                            target="_blank"
                                            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg transition text-sm sm:text-base"
                                        >
                                            Pesan Sekarang
                                        </a>
                                        <a
                                            href={villa.detailLink}
                                            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/20 hover:bg-white/40 text-white font-semibold shadow-lg transition text-sm sm:text-base"
                                        >
                                            Lihat Detail
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Divider Elegan */}
                    {index < villas.length - 1 && (
                        <div className="h-10 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent backdrop-blur-sm" />
                    )}
                </div>
            ))}
        </div>
    )
}

