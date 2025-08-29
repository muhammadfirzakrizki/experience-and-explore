import type { Villa } from "@/types/villa"

export const villas: Villa[] = [
    {
        id: 1,
        name: "ElHAFZ HILLS SAFARI",
        image: "/villa/villa1.png",
        background: "/bgvilla/bgvilla1.png",
        description:
            "Villa eksklusif dengan pemandangan alam safari yang menenangkan, cocok untuk liburan bersama keluarga.",
        facilities: "3 Kamar Tidur, Private Pool, Rooftop, Wifi",
        price: "Rp 2.500.000 / malam",
        bookingLink:
            "https://wa.me/6281234567890?text=Saya%20ingin%20pesan%20ElHAFZ%20HILLS%20SAFARI",
        detailLink: "/villa/1",
        gallery: Array.from({ length: 8 }, (_, i) => `/villas/villa1-${i + 1}.png`),
    },
    {
        id: 2,
        name: "ELHAFZ2",
        image: "/villa/villa2.png",
        background: "/bgvilla/bgvilla2.png",
        description:
            "Villa modern dengan desain minimalis dan fasilitas lengkap untuk kenyamanan liburan Anda.",
        facilities: "4 Kamar Tidur, Kolam Renang, Karaoke, Taman",
        price: "Rp 3.000.000 / malam",
        bookingLink:
            "https://wa.me/6281234567890?text=Saya%20ingin%20pesan%20ELHAFZ2",
        detailLink: "/villa/2",
        gallery: Array.from({ length: 9 }, (_, i) => `/villas/villa2-${i + 1}.png`),
    },
    {
        id: 3,
        name: "Villa Maleo",
        image: "/villa/villa3.png",
        background: "/bgvilla/bgvilla3.png",
        description:
            "Villa nyaman dengan nuansa alami, cocok untuk keluarga atau rombongan kecil yang ingin bersantai.",
        facilities: "3 Kamar Tidur, Kolam Renang, Karaoke, Wifi",
        price: "Rp 2.800.000 / malam",
        bookingLink:
            "https://wa.me/6281234567890?text=Saya%20ingin%20pesan%20Villa%20Maleo",
        detailLink: "/villa/3",
        gallery: Array.from({ length: 10 }, (_, i) => `/villas/villa3-${i + 1}.png`),
    },
    {
        id: 4,
        name: "Bukit Maleo",
        image: "/villa/villa4.png",
        background: "/bgvilla/bgvilla4.png",
        description:
            "Villa dengan view bukit indah, cocok untuk gathering, acara keluarga, atau liburan romantis.",
        facilities: "4 Kamar Tidur, Rooftop, Kolam Renang, BBQ Area",
        price: "Rp 3.200.000 / malam",
        bookingLink:
            "https://wa.me/6281234567890?text=Saya%20ingin%20pesan%20Bukit%20Maleo",
        detailLink: "/villa/4",
        gallery: Array.from({ length: 9 }, (_, i) => `/villas/villa4-${i + 1}.png`),
    },
    {
        id: 5,
        name: "ELHAFZ2 SAFARI",
        image: "/villa/villa5.png",
        background: "/bgvilla/bgvilla5.png",
        description:
            "Villa safari eksklusif dengan suasana tenang, pas untuk liburan bernuansa alam.",
        facilities: "5 Kamar Tidur, Private Pool, Karaoke, Wifi",
        price: "Rp 3.500.000 / malam",
        bookingLink:
            "https://wa.me/6281234567890?text=Saya%20ingin%20pesan%20ELHAFZ2%20SAFARI",
        detailLink: "/villa/5",
        gallery: Array.from({ length: 9 }, (_, i) => `/villas/villa5-${i + 1}.png`),
    },
    {
        id: 6,
        name: "ElHAFZ1 7 Kamar",
        image: "/villa/villa6.png",
        background: "/bgvilla/bgvilla6.png",
        description:
            "Villa besar dengan 7 kamar tidur, ideal untuk rombongan besar atau acara keluarga.",
        facilities: "7 Kamar Tidur, Kolam Renang, Karaoke, Taman, Wifi",
        price: "Rp 4.500.000 / malam",
        bookingLink:
            "https://wa.me/6281234567890?text=Saya%20ingin%20pesan%20ElHAFZ1%207%20Kamar",
        detailLink: "/villa/6",
        gallery: Array.from({ length: 8 }, (_, i) => `/villas/villa6-${i + 1}.png`),
    },
]
