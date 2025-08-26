export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-3 gap-2 md:gap-0">

                {/* Logo & Brand (Kiri) */}
                <div className="flex items-center space-x-3">
                    <img
                        src="/villapuncak.png"
                        alt="Villa Puncak Logo"
                        className="h-12 w-12 md:h-14 md:w-14 object-contain"
                    />
                    <div className="flex flex-col text-center md:text-left">
                        <span className="text-xl md:text-2xl font-bold text-green-700 tracking-wide">
                            Villa Puncak
                        </span>
                        <span className="text-xs md:text-sm text-gray-500 italic">
                            Experience the Nature, Feel the Luxury
                        </span>
                    </div>
                </div>

                {/* Info Cepat (Kanan) */}
                <div className="flex hidden md:flex-row md:block items-center md:space-x-6 space-y-1 md:space-y-0 text-xs md:text-sm font-medium text-gray-700 mt-2 md:mt-0">
                    <div className="flex items-center space-x-2">
                        <span className="text-green-600">📍</span>
                        <span>Puncak, Bogor</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-green-600">📞</span>
                        <a
                            href="tel:+628123456789"
                            className="hover:text-green-600 transition"
                        >
                            +62 812-3456-789
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
