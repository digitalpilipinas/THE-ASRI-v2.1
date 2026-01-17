import { useEffect } from 'react'
import '@/App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileBottomNav from '@/components/MobileBottomNav'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTopButton from '@/components/shared/ScrollToTop'
import Homepage from '@/pages/Homepage'
import AboutPage from '@/pages/AboutPage'
import DiveServicesPage from '@/pages/DiveServicesPage'
import AccommodationsPage from '@/pages/AccommodationsPage'
import RatesPackagesPage from '@/pages/RatesPackagesPage'
import GalleryPage from '@/pages/GalleryPage'
import ContactPage from '@/pages/ContactPage'
import { loadFonts } from '@/lib/fonts'

// ScrollToTop component - scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' to avoid scroll animation conflicts
    });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    loadFonts()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        {/* Scroll to top on route change */}
        <ScrollToTop />
        
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
        
        {/* Scroll to Top Button - Global */}
        <ScrollToTopButton />
        
        <Toaster />
      </BrowserRouter>
    </div>
  )
}

export default App