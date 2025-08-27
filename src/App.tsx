// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "@/pages/Home"
import VillaDetail from "@/pages/VillaDetail"
import Pembayaran from "@/pages/Pembayaran"
import Footer from "@/component/Footer"
import Header from "@/component/Header"
import BackToTopButton from "@/component/BackToTop"
import NotFound from "./pages/NotFound"


function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman dengan layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/villa/:id"
          element={
            <MainLayout>
              <VillaDetail />
            </MainLayout>
          }
        />
        <Route
          path="/pembayaran/:id"
          element={
            <MainLayout>
              <Pembayaran />
            </MainLayout>
          }
        />

        {/* Halaman 404 tanpa layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App
