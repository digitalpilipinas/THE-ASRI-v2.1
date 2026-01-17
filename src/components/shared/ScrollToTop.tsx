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
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-28 right-6 z-50 bg-gradient-to-br from-[#FF6B6B] to-[#FF8C8C] hover:from-[#FF5050] hover:to-[#FF6B6B] backdrop-blur-sm rounded-full p-4 md:p-5 shadow-2xl transition-all border-4 border-white"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <div className="relative">
            <ChevronUp className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={3} />
            {/* Pulsing ring animation for extra visibility */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white opacity-75"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.75, 0, 0.75]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop