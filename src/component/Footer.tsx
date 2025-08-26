import { Facebook, Instagram, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-green-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div className="flex flex-col items-start">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/villapuncak.png"
              alt="Villa Puncak Logo"
              className="h-16 w-16 object-contain mb-2"
            />

            {/* Brand Name & Tagline */}
            <h2 className="text-xl md:text-2xl font-bold text-green-700">
              Villa Puncak
            </h2>
          </div>

          <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-xs">
            Nikmati ketenangan alam dan kemewahan penginapan di Villa Puncak.
            Tempat sempurna untuk liburan bersama keluarga maupun teman.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-sm">
          <h3 className="text-base font-semibold text-green-700">Kontak Kami</h3>
          <p className="flex items-center gap-2 text-gray-600">
            <Phone size={16} className="text-green-600" /> +62 812-3456-789
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Mail size={16} className="text-green-600" /> info@villapuncak.com
          </p>
          <p className="text-gray-600">📍 Puncak, Bogor - Jawa Barat</p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-base font-semibold text-green-700">Ikuti Kami</h3>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-600 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-600 hover:text-white transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-green-600 font-semibold">Villa Puncak</span>. All rights reserved.
      </div>
    </footer>
  )
}
