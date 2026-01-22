import { Award, Home, Waves, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNamespace } from '@/i18n/useNamespace'

const StatsBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  useNamespace('home')
  const { t } = useTranslation(['home', 'common'])

  const stats = [
    {
      icon: Award,
      value: t('home:stats.0.value'),
      label: t('home:stats.0.label'),
      color: 'text-[#0D7070]',
      bgColor: 'bg-[#0D7070]'
    },
    {
      icon: Home,
      value: t('home:stats.1.value'),
      label: t('home:stats.1.label'),
      color: 'text-[#FF6B6B]',
      bgColor: 'bg-[#FF6B6B]'
    },
    {
      icon: Waves,
      value: t('home:stats.2.value'),
      label: t('home:stats.2.label'),
      color: 'text-[#7C9885]',
      bgColor: 'bg-[#7C9885]'
    },
    {
      icon: Sparkles,
      value: t('home:stats.3.value'),
      label: t('home:stats.3.label'),
      color: 'text-[#D4A373]',
      bgColor: 'bg-[#D4A373]'
    }
  ]

  // Auto-rotate every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % stats.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const currentStat = stats[currentIndex]
  const Icon = currentStat.icon

  return (
    <section className="bg-[#E6EBE8]/95 backdrop-blur-md py-6 shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MOBILE: Carousel View (Single Stat) */}
        <div className="lg:hidden flex flex-col items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col items-center"
            >
              {/* Icon with gradient background */}
              <motion.div
                initial={{ scale: 0.8, rotateY: 90 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`${
                  currentStat.bgColor
                } bg-opacity-10 rounded-full p-4 mb-3 shadow-lg backdrop-blur-sm`}
                style={{ boxShadow: `0 8px 24px ${currentStat.color.replace('text-', 'rgba')}40` }}
              >
                <Icon className={`w-10 h-10 ${currentStat.color}`} strokeWidth={2.5} />
              </motion.div>

              {/* Value and Label */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className={`font-playfair font-bold text-2xl ${currentStat.color} mb-1`}
              >
                {currentStat.value}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="font-lato text-sm text-[#4A5568]"
              >
                {currentStat.label}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-4">
            {stats.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? `w-8 h-2 ${stats[currentIndex].bgColor}`
                    : 'w-2 h-2 bg-[#4A5568]/30 hover:bg-[#4A5568]/50'
                }`}
                aria-label={t('common:actions.goTo', { label: stats[index].label })}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP: All Stats (Original Layout) */}
        <div className="hidden lg:flex flex-wrap justify-around items-center gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center group cursor-default"
              >
                <div className="relative">
                  <div className={`${
                    stat.color
                  } bg-white rounded-full p-3 mb-2 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <p className={`font-playfair font-bold text-lg md:text-xl ${
                  stat.color
                } transition-colors`}>
                  {stat.value}
                </p>
                <p className="font-lato text-xs md:text-sm text-[#4A5568]">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
