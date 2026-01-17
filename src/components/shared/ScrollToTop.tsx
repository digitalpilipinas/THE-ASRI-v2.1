import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls past 600px
      setIsVisible(window.pageYOffset > 600)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#0D7070]/90 hover:bg-[#0D7070] backdrop-blur-sm rounded-full p-3 md:p-4 shadow-2xl transition-colors border-2 border-white/20"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop