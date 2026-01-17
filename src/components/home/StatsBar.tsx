import { Award, Home, Waves, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const StatsBar = () => {
  const stats = [
    {
      icon: Award,
      value: 'PADI 5★',
      label: 'IDC Center',
      color: 'text-[#0D7070]'
    },
    {
      icon: Home,
      value: '14 Rooms',
      label: 'Boutique',
      color: 'text-[#FF6B6B]'
    },
    {
      icon: Waves,
      value: '30+ Sites',
      label: 'Dive Sites',
      color: 'text-[#7C9885]'
    },
    {
      icon: Sparkles,
      value: 'Thai Spa',
      label: 'Wellness',
      color: 'text-[#D4A373]'
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="sticky top-20 z-30 bg-[#E6EBE8]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-around items-center gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
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
    </motion.section>
  )
}

export default StatsBar