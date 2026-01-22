import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Maximize, Eye, Sparkles } from 'lucide-react'
import NeumorphicButton from '@/components/NeumorphicButton'
import { roomTypes } from '@/data/mockData'
import { useTranslation } from 'react-i18next'
import { useNamespace } from '@/i18n/useNamespace'

const AccommodationsPreview = () => {
  useNamespace('home')
  const { t } = useTranslation('home')
  // Get the popular room (Deluxe Garden View)
  const featuredRoom = roomTypes.find(room => room.popular) || roomTypes[1]

  const roomFeatures = [
    { icon: Maximize, text: featuredRoom.size },
    { icon: Users, text: t('accommodationsPreview.features.upToGuests', { count: featuredRoom.maxGuests }) },
    { icon: Eye, text: featuredRoom.view },
    { icon: Sparkles, text: t('accommodationsPreview.features.thaiInspired') }
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E6EBE8]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">
            {t('accommodationsPreview.title')}
          </h2>
          <p className="font-lato text-lg text-[#4A5568] max-w-2xl mx-auto">
            {t('accommodationsPreview.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side with Glassmorphism Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={featuredRoom.image}
                alt={featuredRoom.name}
                className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Glassmorphism price tag */}
              <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/30 [[dir=rtl]_&]:left-auto [[dir=rtl]_&]:right-6">
                <p className="font-lato text-sm text-white/90 mb-1">{t('accommodationsPreview.price.startingFrom')}</p>
                <p className="font-playfair font-bold text-3xl text-white">
                  ₱{featuredRoom.price}
                  <span className="text-lg font-lato font-normal">{t('accommodationsPreview.price.perNight')}</span>
                </p>
              </div>

              {/* Popular badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-br from-[#FF6B6B] to-[#ee5050] rounded-full px-4 py-2 [[dir=rtl]_&]:right-auto [[dir=rtl]_&]:left-6">
                <p className="font-lato text-xs font-bold text-white uppercase tracking-wider">
                  {t('accommodationsPreview.badges.mostPopular')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332] mb-3">
                {featuredRoom.name}
              </h3>
              <p className="font-lato text-lg text-[#4A5568] leading-relaxed">
                {featuredRoom.description}
              </p>
            </div>

            {/* Room Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {roomFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-[#F5F1E8] rounded-xl"
                  >
                    <div className="bg-white rounded-lg p-2">
                      <Icon className="w-5 h-5 text-[#0D7070]" />
                    </div>
                    <span className="font-lato text-sm text-[#1A2332] font-medium">
                      {feature.text}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Amenities List */}
            <div>
              <h4 className="font-lato font-bold text-[#1A2332] mb-3">{t('accommodationsPreview.amenitiesTitle')}</h4>
              <div className="flex flex-wrap gap-2">
                {featuredRoom.features.slice(0, 6).map((amenity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white border border-[#E6EBE8] rounded-full text-xs font-lato text-[#718096]"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/accommodations" className="flex-1">
                <NeumorphicButton variant="primary" size="lg" className="w-full">
                  <span className="flex items-center justify-center gap-2">
                    {t('accommodationsPreview.cta.viewAll')}
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </NeumorphicButton>
              </Link>
              <Link to="/rates" className="flex-1">
                <NeumorphicButton variant="coral" size="lg" className="w-full">
                  {t('accommodationsPreview.cta.bookNow')}
                </NeumorphicButton>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4 border-t border-[#E6EBE8]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#7C9885] rounded-full" />
                <span className="font-lato text-xs text-[#718096]">{t('accommodationsPreview.trustIndicators.0')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#7C9885] rounded-full" />
                <span className="font-lato text-xs text-[#718096]">{t('accommodationsPreview.trustIndicators.1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#7C9885] rounded-full" />
                <span className="font-lato text-xs text-[#718096]">{t('accommodationsPreview.trustIndicators.2')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AccommodationsPreview
