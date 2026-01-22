import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import NeumorphicCard from '@/components/NeumorphicCard'
import { useTranslation } from 'react-i18next'
import { useNamespace } from '@/i18n/useNamespace'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface Testimonial {
  id: number
  rating: number
  text: string
  name: string
  location?: string
  source: string
  date?: string
  avatar: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  useNamespace('home')
  const { t } = useTranslation(['home', 'common'])
  return (
    <section className="relative bg-[#F5F1E8] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A2332] mb-4">
            {t('home:testimonials.title')}
          </h2>
          <div className="w-16 h-1 bg-[#FF6B6B] mx-auto mb-6 rounded-full"></div>
          <p className="font-lato text-lg text-[#4A5568] max-w-2xl mx-auto">
            {t('home:testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <NeumorphicCard className="p-8 md:p-12 text-center">
                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-[#FF6B6B] text-[#FF6B6B]"
                      />
                    ))}
                  </div>

                  {/* Decorative Quote Marks */}
                  <div className="relative">
                    <span className="absolute -top-8 -left-4 text-8xl font-playfair text-[#0D7070] opacity-10 leading-none">
                      "
                    </span>
                    <span className="absolute -bottom-16 -right-4 text-8xl font-playfair text-[#0D7070] opacity-10 leading-none">
                      "
                    </span>

                    {/* Quote Text */}
                    <blockquote className="font-playfair italic text-xl md:text-2xl leading-relaxed text-[#0D7070] mb-8 max-w-3xl mx-auto relative z-10">
                      {testimonial.text}
                    </blockquote>
                  </div>

                  {/* Author Section */}
                  <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-[#D4A373]/20">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-[#0D7070]/10 shadow-md"
                    />
                    <div className="text-left">
                      <p className="font-lato font-bold text-[#0D7070] text-lg">
                        {testimonial.name}
                      </p>
                      {testimonial.location && (
                        <p className="font-lato text-sm text-[#718096]">
                          {testimonial.location}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mt-1">
                        <p className="font-lato text-sm text-[#718096]">
                          {testimonial.source}
                        </p>
                        {testimonial.date && (
                          <>
                            <span className="text-[#718096]">•</span>
                            <p className="font-lato text-xs text-[#A0AEC0]">
                              {testimonial.date}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </NeumorphicCard>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            className="testimonial-prev absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm md:bg-white shadow-lg flex items-center justify-center text-[#0D7070] hover:scale-110 hover:shadow-xl transition-all duration-200 group [[dir=rtl]_&]:left-auto [[dir=rtl]_&]:right-0 [[dir=rtl]_&]:md:right-[-80px]"
            aria-label={t('common:carousel.previous')}
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform [[dir=rtl]_&]:rotate-180" />
          </button>
          <button
            className="testimonial-next absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm md:bg-white shadow-lg flex items-center justify-center text-[#0D7070] hover:scale-110 hover:shadow-xl transition-all duration-200 group [[dir=rtl]_&]:right-auto [[dir=rtl]_&]:left-0 [[dir=rtl]_&]:md:left-[-80px]"
            aria-label={t('common:carousel.next')}
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform [[dir=rtl]_&]:rotate-180" />
          </button>

          {/* Custom Pagination Dots */}
          <div className="testimonial-pagination flex justify-center gap-3 mt-8"></div>
        </motion.div>

        {/* Trust Logos Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-lato text-xs uppercase tracking-wider text-[#718096] mb-6">
            {t('home:testimonials.featuredOn')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {['PADI', 'TripAdvisor', 'Google', 'Facebook'].map((brand) => (
              <div
                key={brand}
                className="h-10 px-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              >
                <span className="font-lato font-semibold text-[#718096] hover:text-[#0D7070] transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .testimonial-swiper {
          padding-bottom: 60px;
        }

        .testimonial-pagination {
          position: relative;
          bottom: 0 !important;
        }

        .testimonial-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: transparent;
          border: 2px solid #D4A373;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .testimonial-pagination .swiper-pagination-bullet:hover {
          transform: scale(1.3);
        }

        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #0D7070;
          border-color: #0D7070;
          transform: scale(1.2);
        }

        /* Mobile: Semi-transparent arrow backgrounds */
        @media (max-width: 767px) {
          .testimonial-prev,
          .testimonial-next {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(8px);
          }
        }

        /* Smooth fade transitions */
        .swiper-slide {
          opacity: 0 !important;
          transition: opacity 500ms ease-out;
        }

        .swiper-slide-active {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  )
}

export default TestimonialCarousel
