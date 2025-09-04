import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDaysIcon } from "lucide-react";
import moment from "moment";
import { villas as villaData } from "@/data/villas";
import { bookings } from "@/data/bookings";

export default function VillaFilter() {
  const [date, setDate] = useState<Date>(new Date());
  const [duration, setDuration] = useState<number>(1);

  // Hitung start dan end date
  const startDate = moment(date);
  const endDate = moment(date).add(duration, "days"); // tambahkan durasi langsung

  // Filter villa sesuai booking
  const filteredVillas = villaData.filter((villa) => {
    const villaBookings = bookings.filter((b) => b.villaId === villa.id);

    return villaBookings.every((b) => {
      const bookedStart = moment(b.start);
      const bookedEnd = moment(b.end);
      return endDate.isBefore(bookedStart, "day") || startDate.isAfter(bookedEnd, "day");
    });
  });

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Section Title */}
      <div className="relative bg-gradient-to-b from-white to-green-50 py-12 mb-6 md:mb-8">
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-sm uppercase tracking-[0.25em] text-green-700 font-semibold">
            Our Villas
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 relative inline-block">
            Pilih Villa Sesuai Keinginan
            <span className="absolute -z-10 inset-0 mx-auto w-60 h-20 bg-green-200/40 blur-3xl rounded-full"></span>
          </h2>
          <div className="mt-6 flex justify-center space-y-1 flex-col items-center">
            <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500" />
            <span className="inline-block w-16 h-[2px] rounded-full bg-gradient-to-r from-green-500 to-green-600" />
          </div>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Pilih tanggal dan durasi untuk melihat villa yang tersedia.
          </p>
        </div>
      </div>

      {/* Filter sticky desktop */}
      <div className="sticky top-24 z-10 mb-4 md:mb-6">
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap gap-3">
          {/* Tanggal */}
          <div className="relative flex-1 md:max-w-[200px]">
            <label className="text-sm md:text-base font-medium mb-1 block">Tanggal</label>
            <div className="relative">
              <CalendarDaysIcon className="w-4 h-4 md:w-5 md:h-5 absolute top-2.5 left-2.5 text-gray-400 pointer-events-none" />
              <DatePicker
                selected={date}
                onChange={(date: Date | null) => setDate(date!)}
                placeholderText="Pilih tanggal"
                className="border rounded-lg px-8 py-2 w-full text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            </div>
          </div>

          {/* Durasi */}
          <div className="relative flex-1 md:max-w-[120px]">
            <label className="text-sm md:text-base font-medium mb-1 block">Durasi (hari)</label>
            <input
              type="number"
              min={1}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="border rounded-lg px-3 py-2 w-full text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Summary / Pemberitahuan */}
        <div className="mt-2 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg text-sm md:text-base">
          <p>
            <span className="font-medium">Tanggal:</span>{" "}
            {startDate.format("DD/MM/YYYY")} - {endDate.format("DD/MM/YYYY")}
          </p>
          <p>
            <span className="font-medium">Durasi:</span> {duration} hari
          </p>
          <p>
            <span className="font-medium">Villa Tersedia:</span> {filteredVillas.length} dari {villaData.length}
          </p>
        </div>
      </div>

      {/* Villa Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVillas.map((villa) => (
          <div
            key={villa.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative h-64">
              <img
                src={villa.image}
                alt={villa.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-md">
                {villa.name}
              </h3>
            </div>

            <div className="p-4 flex flex-col justify-between h-72">
              <p className="text-gray-600 text-sm mb-2 line-clamp-3">{villa.description}</p>
              <p className="text-gray-500 text-xs mb-2 font-medium">{villa.facilities}</p>
              <p className="text-blue-600 font-bold text-lg mb-4">{villa.price}</p>
              <div className="flex gap-2">
                <a
                  href={villa.bookingLink}
                  target="_blank"
                  className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Booking
                </a>
                <a
                  href={villa.detailLink}
                  className="flex-1 text-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Detail
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
