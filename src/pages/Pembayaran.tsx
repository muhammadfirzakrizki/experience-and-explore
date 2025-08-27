// src/pages/Pembayaran.tsx
import { useParams } from "react-router-dom"
import { useState } from "react"
import { User, Mail, Phone, Calendar } from "lucide-react"

const villas = [
  {
    id: 1,
    name: "Villa Kenanga",
    image: "/villa1.jpg",
    priceWeekday: 2500000,
    priceFri: 3000000,
    priceWeekend: 3500000,
    priceHoliday: 4000000,
  },
  {
    id: 2,
    name: "Villa Mawar",
    image: "/villa2.jpg",
    priceWeekday: 3000000,
    priceFri: 3500000,
    priceWeekend: 4000000,
    priceHoliday: 4500000,
  },
]

const vaOptions = [
  { id: "bca", name: "BCA Virtual Account", logo: "/va-bca.png" },
  { id: "bni", name: "BNI Virtual Account", logo: "/va-bni.png" },
  { id: "mandiri", name: "Mandiri Virtual Account", logo: "/va-mandiri.png" },
]

export default function Pembayaran() {
  const { id } = useParams()
  const villa = villas.find(v => v.id === Number(id))
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    nights: 1,
    va: "bca",
  })
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle")

  if (!villa) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-700">
          Villa tidak ditemukan 😢
        </h1>
      </div>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlePayment = () => {
    if (!form.name || !form.email || !form.phone || !form.checkIn) {
      alert("Silakan lengkapi semua data")
      return
    }

    setStatus("pending")
    setTimeout(() => {
      const outcomes = ["success", "error"] as const
      const result = outcomes[Math.floor(Math.random() * outcomes.length)]
      setStatus(result)
    }, 1500)
  }

  const totalPrice = villa.priceWeekday * Number(form.nights) // dummy total

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-12 px-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
        {/* Card Villa */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <img
            src={villa.image}
            alt={villa.name}
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-green-700">{villa.name}</h2>
            <div className="mt-4 space-y-2 text-gray-700">
              <p>Senin - Kamis: Rp {villa.priceWeekday.toLocaleString()}</p>
              <p>Jumat: Rp {villa.priceFri.toLocaleString()}</p>
              <p>Sabtu - Minggu: Rp {villa.priceWeekend.toLocaleString()}</p>
              <p>Hari Libur: Rp {villa.priceHoliday.toLocaleString()}</p>
            </div>
            <p className="mt-4 font-semibold text-gray-800">
              Total estimasi: <span className="text-green-700">{totalPrice.toLocaleString()}</span>
            </p>
          </div>
        </div>

        {/* Form Pembayaran */}
        <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
          <h2 className="text-2xl font-bold text-green-700 text-center">Form Pembayaran</h2>

          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-green-600" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Lengkap"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-green-600" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 text-green-600" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="No Telepon"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-green-600" />
              <input
                type="date"
                name="checkIn"
                value={form.checkIn}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <input
              type="number"
              name="nights"
              value={form.nights}
              min={1}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Lama menginap (malam)"
            />
          </div>

          {/* Pilihan VA */}
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Pilih Virtual Account</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {vaOptions.map(va => (
                <label
                  key={va.id}
                  className={`cursor-pointer flex items-center gap-2 border rounded-lg p-3 transition
          ${form.va === va.id ? "border-green-600 bg-green-50" : "border-gray-300 bg-white"}`}
                >
                  <input
                    type="radio"
                    name="va"
                    value={va.id}
                    checked={form.va === va.id}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <img src={va.logo} alt={va.name} className="w-16 h-10 object-contain" />
                  <span className="text-gray-700 font-medium">{va.name}</span>
                </label>
              ))}
            </div>
          </div>


          <button
            onClick={handlePayment}
            disabled={status === "pending"}
            className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg shadow-lg transition disabled:opacity-50"
          >
            {status === "pending" ? "Memproses..." : "Bayar Sekarang"}
          </button>

          {status === "success" && <p className="text-green-600 font-semibold text-center mt-2">✅ Pembayaran berhasil</p>}
          {status === "error" && <p className="text-red-600 font-semibold text-center mt-2">❌ Pembayaran gagal</p>}
        </div>
      </div>
    </div>
  )
}
