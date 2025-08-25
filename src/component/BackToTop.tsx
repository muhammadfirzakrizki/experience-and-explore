import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  // Cek scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300) // tampil kalau scroll > 300px
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  )
}