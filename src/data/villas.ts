export interface Villa {
  id: number
  name: string
  type: "Villa" | "Kabin"
  promo: boolean
  location: string
  stars: number
  rooms: number
  beds: number
  maxGuests: number
  priceStandard: number
  pricePromo?: number
  image: string
}

export const villas: Villa[] = Array.from({ length: 20 }, (_, i) => {
  const type = i % 2 === 0 ? "Villa" : "Kabin"
  const promo = i % 3 === 0
  const priceStandard = 300000 + i * 10000
  const pricePromo = promo ? priceStandard - 30000 : undefined
  return {
    id: i + 1,
    name: `${type} ${i + 1}`,
    type,
    promo,
    location: "Dekat Candi Arjuna",
    stars: (i % 5) + 1,
    rooms: (i % 5) + 1,
    beds: (i % 3) + 1,
    maxGuests: (i % 4) + 2,
    priceStandard,
    pricePromo,
    image: `https://picsum.photos/400/250?random=${i + 1}`,
  }
})
