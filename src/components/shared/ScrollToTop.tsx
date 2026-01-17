import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const toggleVisibility = () => {
      // Show button when user scrolls past 600px
      setIsVisible(window.pageYOffset > 600)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    // Haptic feedback
    if ('vibrate' in navigator) {
      navigator.vibrate(10)
    }
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
          className="fixed z-40 bg-gradient-to-br from-[#0D7070] to-[#0a5555] hover:from-[#0a5555] hover:to-[#084444] backdrop-blur-sm rounded-full p-3 md:p-4 transition-all border-2 border-white/30"
          style={{
            bottom: isMobile ? '168px' : '24px',
            right: '24px',
            boxShadow: '0 8px 24px rgba(13, 112, 112, 0.25), 0 4px 8px rgba(0, 0, 0, 0.1)'
          }}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <div className="relative">
            <ChevronUp className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={3} />
            {/* Pulsing ring animation for extra visibility */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/50 opacity-75"
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