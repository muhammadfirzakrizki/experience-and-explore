export default function SectionTitle() {
  return (
    <div className="relative bg-gradient-to-b from-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto text-center px-4">
        
        {/* Subheading */}
        <p className="text-sm uppercase tracking-[0.25em] text-green-700 font-semibold">
          Our Villas
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block">
          Pilihan Villa Eksklusif
          {/* Glow Ornament */}
          <span className="absolute -z-10 inset-0 mx-auto w-60 h-20 bg-green-200/40 blur-3xl rounded-full"></span>
        </h2>

        {/* Accent Line Double */}
        <div className="mt-6 flex justify-center space-y-1 flex-col items-center">
          <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500" />
          <span className="inline-block w-16 h-[2px] rounded-full bg-gradient-to-r from-green-500 to-green-600" />
        </div>

        {/* Description */}
        <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Nikmati ketenangan alam dan fasilitas mewah di setiap villa pilihan kami.  
          Dibangun dengan desain elegan untuk pengalaman liburan tak terlupakan bersama keluarga maupun sahabat.
        </p>
      </div>
    </div>
  )
}
