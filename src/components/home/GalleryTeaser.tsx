import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Camera } from 'lucide-react'
import NeumorphicButton from '@/components/NeumorphicButton'
import { galleryImages } from '@/data/mockData'
import { useTranslation } from 'react-i18next'
import { useNamespace } from '@/i18n/useNamespace'

const GalleryTeaser = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  useNamespace('home')
  const { t } = useTranslation(['home', 'common'])

  // Get featured images (first 9 for 3x3 grid)
  const featuredImages = galleryImages.slice(0, 9)

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setTimeout(() => setSelectedImage(null), 300)
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-[#F5F1E8] relative">
        {/* Decorative wave */}
        <div className="absolute top-0 left-0 w-full h-1">
          <svg viewBox="0 0 1200 6" className="w-full h-full">
            <path 
              d="M0,3 Q300,0 600,3 T1200,3" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0D7070" />
                <stop offset="50%" stopColor="#7C9885" />
                <stop offset="100%" stopColor="#0D7070" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-[#0D7070]" />
              <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332]">
                {t('home:galleryTeaser.title')}
              </h2>
            </div>
            <p className="font-lato text-lg text-[#4A5568] max-w-2xl mx-auto">
              {t('home:galleryTeaser.subtitle')}
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
            {featuredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => openLightbox(image)}
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer group
                  ${index === 0 ? 'md:row-span-2 md:col-span-1' : ''}
                  ${index === 4 ? 'md:col-span-2' : ''}
                `}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`
                    w-full object-cover transition-transform duration-500 group-hover:scale-110
                    ${index === 0 ? 'h-64 md:h-full' : 'h-48 md:h-64'}
                    ${index === 4 ? 'md:h-48' : ''}
                  `}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D7070]/80 via-[#0D7070]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-lato text-xs uppercase tracking-wider text-white/80 mb-1">
                      {image.category}
                    </p>
                    <p className="font-lato text-sm text-white font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>

                {/* Zoom indicator */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link to="/gallery">
              <NeumorphicButton variant="primary" size="lg">
                <span className="flex items-center gap-2">
                  {t('home:galleryTeaser.cta')}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </NeumorphicButton>
            </Link>
            <p className="font-lato text-sm text-[#718096] mt-4">
              {t('home:galleryTeaser.countLine', { count: galleryImages.length })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-[#1A2332]/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors z-10 [[dir=rtl]_&]:right-auto [[dir=rtl]_&]:left-6"
              aria-label={t('common:lightbox.close')}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A2332]/90 to-transparent p-6 rounded-b-2xl">
                <p className="font-lato text-xs uppercase tracking-wider text-white/70 mb-1">
                  {selectedImage.category}
                </p>
                <p className="font-playfair text-xl text-white font-bold">
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GalleryTeaser
