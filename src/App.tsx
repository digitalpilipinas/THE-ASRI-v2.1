import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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

/**
 * ScrollToTop Component
 * 
 * Automatically scrolls to the top of the page when navigating between routes.
 * Also supports hash-based navigation (e.g., /contact#location) with smooth
 * scrolling to specific elements with proper header offset.
 * 
 * Behavior:
 * - No hash: Scrolls to top of page
 * - With hash: Scrolls to element with ID matching hash (with 100px offset for fixed header)
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // No hash in URL → scroll to top immediately
      window.scrollTo(0, 0);
    } else {
      // Hash present → scroll to the target element with header offset
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const yOffset = -100; // Offset for fixed header (80px height + 20px padding)
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
          // Element not found, scroll to top anyway
          window.scrollTo(0, 0);
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    loadFonts()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        {/* Scroll restoration component - must be inside BrowserRouter */}
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
        
        <Toaster />
      </BrowserRouter>
    </div>
  )
}

export default App
