import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import NeumorphicButton from '@/components/NeumorphicButton'
import { resortImages } from '@/data/mockData'
import { useTranslation } from 'react-i18next'
import { useNamespace } from '@/i18n/useNamespace'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  useNamespace('home')
  const { t } = useTranslation(['home', 'common'])

  const slides = [
    {
      image: resortImages.hero.homepage,
      title: t('home:hero.slides.0.title'),
      subtitle: t('home:hero.slides.0.subtitle')
    },
    {
      image: resortImages.diving.coralCanyon,
      title: t('home:hero.slides.1.title'),
      subtitle: t('home:hero.slides.1.subtitle')
    },
    {
      image: resortImages.resort.sunset,
      title: t('home:hero.slides.2.title'),
      subtitle: t('home:hero.slides.2.subtitle')
    },
    {
      image: resortImages.amenities.spa,
      title: t('home:hero.slides.3.title'),
      subtitle: t('home:hero.slides.3.subtitle')
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
                  {t('home:hero.primaryCta')}
                </NeumorphicButton>
              </Link>
              <Link to="/dive-services">
                <NeumorphicButton variant="outline" size="lg" className="bg-white/90 hover:bg-white">
                  {t('home:hero.secondaryCta')}
                </NeumorphicButton>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 [[dir=rtl]_&]:left-auto [[dir=rtl]_&]:right-4 [[dir=rtl]_&]:md:right-8"
        aria-label={t('common:carousel.previous')}
      >
        <ChevronLeft className="w-6 h-6 text-white [[dir=rtl]_&]:rotate-180" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 [[dir=rtl]_&]:right-auto [[dir=rtl]_&]:left-4 [[dir=rtl]_&]:md:left-8"
        aria-label={t('common:carousel.next')}
      >
        <ChevronRight className="w-6 h-6 text-white [[dir=rtl]_&]:rotate-180" />
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
            aria-label={t('common:carousel.goTo', { index: index + 1 })}
          />
        ))}
      </div>

      {/* Scroll Indicator - Now Functional */}
      <motion.button
        onClick={scrollToContent}
        whileHover={{ scale: 1.1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 cursor-pointer transition-opacity hover:opacity-100"
        aria-label={t('home:hero.scrollCtaAria')}
      >
        <ChevronDown className="w-8 h-8 text-white/80" />
      </motion.button>
    </section>
  )
}

export default HeroSlider
