import type { Villa } from "@/types/villa"

export const villas: Villa[] = [
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
        detailLink: "/villa/1",
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
        detailLink: "/villa/2",
    },
]