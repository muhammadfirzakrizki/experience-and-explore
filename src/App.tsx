import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

Footer

import Home from "@/pages/Home"
import Jeep from "@/pages/Jeep"
import Rental from "@/pages/Rental"
import Dokumentasi from "@/pages/Dokumentasi"
import Footer from "@/component/Footer"
import Header from "@/component/Header"
import BackToTopButton from "@/component/BackToTop"


function App() {

  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-50 text-gray-900 flex flex-col">
        <Header />
        {/* Routes */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jeep" element={<Jeep />} />
              <Route path="/rental" element={<Rental />} />
              <Route path="/dokumentasi" element={<Dokumentasi />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  )
}

export default App
