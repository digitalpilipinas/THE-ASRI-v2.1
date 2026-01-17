import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import NeumorphicButton from '@/components/NeumorphicButton'
import { resortImages } from '@/data/mockData'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: resortImages.hero.homepage,
      title: 'Where the Sea\nMeets Serenity',
      subtitle: 'Discover world-class diving and Thai-inspired elegance in the heart of Mabini (Anilao), Batangas.'
    },
    {
      image: resortImages.diving.coralCanyon,
      title: 'Dive Into\nUnderwater Paradise',
      subtitle: '30+ pristine dive sites, PADI 5-Star training, and expert macro guides await your adventure.'
    },
    {
      image: resortImages.resort.sunset,
      title: 'Your Private\nOcean Sanctuary',
      subtitle: 'Thai-inspired luxury rooms, infinity pool, and spa treatments with breathtaking sunset views.'
    },
    {
      image: resortImages.amenities.spa,
      title: 'Wellness &\nRejuvenation',
      subtitle: 'Thai massage, beachfront yoga, and serene moments designed to restore your spirit.'
    }
  ]

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const scrollToContent = () => {
    const experienceSection = document.getElementById('experience-section')
    if (experienceSection) {
      experienceSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0D7070]">
      {/* Slider Images - Crossfade with no white flash */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D7070]/60 via-[#0D7070]/40 to-[#0D7070]/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight whitespace-pre-line">
              {slides[currentSlide].title}
            </h1>
            <p className="font-lato text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/rates">
                <NeumorphicButton variant="coral" size="lg">
                  Plan Your Escape
                </NeumorphicButton>
              </Link>
              <Link to="/dive-services">
                <NeumorphicButton variant="outline" size="lg" className="bg-white/90 hover:bg-white">
                  Explore Diving
                </NeumorphicButton>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Now Functional */}
      <motion.button
        onClick={scrollToContent}
        whileHover={{ scale: 1.1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 cursor-pointer transition-opacity hover:opacity-100"
        aria-label="Scroll to explore experiences"
      >
        <ChevronDown className="w-8 h-8 text-white/80" />
      </motion.button>
    </section>
  )
}

export default HeroSlider