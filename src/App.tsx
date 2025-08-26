import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "@/pages/Home"
import VillaDetail from "@/pages/VillaDetail"
import Pembayaran from "@/pages/Pembayaran"
import Footer from "@/component/Footer"
import Header from "@/component/Header"
import BackToTopButton from "@/component/BackToTop"

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-50 text-gray-900 flex flex-col">
        {/* Header */}
        <Header />

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/villa/:id" element={<VillaDetail />} />
            <Route path="/pembayaran/:id" element={<Pembayaran />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  )
}

export default App
