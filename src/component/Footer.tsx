import { Facebook, Instagram, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-green-600">Experience & Explore</h2>
          <p className="text-sm text-gray-500"> Temukan pengalaman baru, jelajahi dunia, dan abadikan setiap momen terbaik Anda.</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" className="text-gray-500 hover:text-green-600 transition">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" className="text-gray-500 hover:text-green-600 transition">
            <Instagram size={20} />
          </a>
          <a href="tel:+628123456789" className="text-gray-500 hover:text-green-600 transition">
            <Phone size={20} />
          </a>
          <a href="mailto:info@experience-explore.com" className="text-gray-500 hover:text-green-600 transition">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-green-600 font-medium">Experience & Explore</span>. All rights reserved.
      </div>
    </footer>
  )
}
