// src/pages/NotFound.tsx
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="flex h-screen items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-green-700">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">
          Halaman Tidak Ditemukan
        </p>
        <p className="mt-2 text-gray-600">
          Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-xl bg-green-700 px-6 py-3 text-white font-medium shadow hover:bg-green-800 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  )
}
