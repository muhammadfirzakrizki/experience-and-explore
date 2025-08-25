import { useState } from "react"
import { Search, X } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false)

    const links = [
        { path: "/", label: "Villa" },
        { path: "/jeep", label: "Jeep" },
        { path: "/rental", label: "Rental" },
        { path: "/dokumentasi", label: "Dokumentasi" },
    ]

    return (
        <header className="w-full bg-white">
            {/* Top Header */}
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <h1 className="text-xl font-bold text-green-600">Experience & Explore</h1>

                {/* Tagline */}
                <p className="hidden md:block text-gray-500 italic">
                    Temukan pengalaman baru dan jelajahi lebih jauh 🌿
                </p>

                {/* Search Button */}
                <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 rounded-full hover:bg-green-100 text-green-600 transition"
                >
                    <Search size={22} />
                </button>
            </div>

            {/* Navigation */}
            <nav className="bg-white text-white">
                <div className="max-w-6xl mx-auto flex justify-center space-x-4 px-4 py-2">
                    {links.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-sm md:text-base font-medium transition ${isActive ? "bg-green-600 shadow-md" : "bg-green-700 hover:bg-green-600"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            </nav>

            {/* Fullscreen Search Popup */}
            {searchOpen && (
                <div className="fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center z-50 animate-fadeIn">
                    {/* Close button */}
                    <button
                        onClick={() => setSearchOpen(false)}
                        className="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition"
                    >
                        <X size={34} strokeWidth={2.5} />
                    </button>

                    {/* Search box */}
                    <div className="w-full max-w-xl flex items-center bg-white border border-gray-200 rounded-2xl shadow-2xl px-6 py-4">
                        <Search size={26} className="text-gray-400" strokeWidth={2} />
                        <input
                            type="text"
                            placeholder="Cari pengalaman, villa, jeep, rental..."
                            className="w-full ml-4 bg-transparent text-lg focus:outline-none placeholder-gray-400"
                            autoFocus
                        />
                    </div>

                    {/* Optional helper text */}
                    <p className="mt-6 text-gray-500 text-sm text-center">
                        Ketik kata kunci lalu tekan <span className="font-semibold">Enter</span>
                    </p>
                </div>
            )}

        </header>
    )
}
