import { useEffect } from 'react'
import '@/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileBottomNav from '@/components/MobileBottomNav'
import WhatsAppButton from '@/components/WhatsAppButton'
import Homepage from '@/pages/Homepage'
import AboutPage from '@/pages/AboutPage'
import DiveServicesPage from '@/pages/DiveServicesPage'
import AccommodationsPage from '@/pages/AccommodationsPage'
import RatesPackagesPage from '@/pages/RatesPackagesPage'
import GalleryPage from '@/pages/GalleryPage'
import ContactPage from '@/pages/ContactPage'
import { loadFonts } from '@/lib/fonts'

const App: React.FC = () => {
  useEffect(() => {
    loadFonts()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dive-services" element={<DiveServicesPage />} />
            <Route path="/accommodations" element={<AccommodationsPage />} />
            <Route path="/rates" element={<RatesPackagesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
        
        {/* Mobile Bottom Navigation */}
        <MobileBottomNav />
        
        {/* WhatsApp FAB */}
        <WhatsAppButton />
        
        <Toaster />
      </BrowserRouter>
    </div>
  )
}

export default App
