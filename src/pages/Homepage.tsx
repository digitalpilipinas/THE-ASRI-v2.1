import React from 'react'
import { Link } from 'react-router-dom'
import { Camera, Award, Sparkles, Waves, Coffee } from 'lucide-react'
import NeumorphicButton from '@/components/NeumorphicButton'
import NeumorphicCard from '@/components/NeumorphicCard'
import { resortImages, testimonials } from '@/data/mockData'
import HeroSlider from '@/components/home/HeroSlider'
import StatsBar from '@/components/home/StatsBar'
import AccommodationsPreview from '@/components/home/AccommodationsPreview'
import GalleryTeaser from '@/components/home/GalleryTeaser'
import TestimonialCarousel from '@/components/home/TestimonialCarousel'
import { useTranslation } from 'react-i18next'
import { useNamespace } from '@/i18n/useNamespace'

const Homepage: React.FC = () => {
  useNamespace('home')
  const { t } = useTranslation('home')
  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Stats Bar - Sticky */}
      <StatsBar />

      {/* Experience Section - Scroll Target */}
      <section id="experience-section" className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">
              {t('experience.title')}
            </h2>
            <p className="font-lato text-lg text-[#4A5568] max-w-2xl mx-auto">
              {t('experience.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Obsessed Diver */}
            <NeumorphicCard className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={resortImages.diving.nudibranch1}
                  alt={t('experience.cards.diver.imageAlt')}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-gradient-to-br from-[#0D7070] to-[#0a5555] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-2xl text-[#1A2332] mb-3">
                {t('experience.cards.diver.title')}
              </h3>
              <p className="font-lato text-[#4A5568] mb-4">
                {t('experience.cards.diver.description')}
              </p>
              <ul className="font-lato text-sm text-[#718096] space-y-2 mb-6">
                <li>{t('experience.cards.diver.bullets.0')}</li>
                <li>{t('experience.cards.diver.bullets.1')}</li>
                <li>{t('experience.cards.diver.bullets.2')}</li>
              </ul>
              <Link to="/dive-services">
                <NeumorphicButton variant="primary" size="md" className="w-full">
                  {t('experience.cards.diver.cta')}
                </NeumorphicButton>
              </Link>
            </NeumorphicCard>

            {/* Aspiring Explorer */}
            <NeumorphicCard className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={resortImages.people.instructor1}
                  alt={t('experience.cards.explorer.imageAlt')}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-gradient-to-br from-[#FF6B6B] to-[#ee5050] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-2xl text-[#1A2332] mb-3">
                {t('experience.cards.explorer.title')}
              </h3>
              <p className="font-lato text-[#4A5568] mb-4">
                {t('experience.cards.explorer.description')}
              </p>
              <ul className="font-lato text-sm text-[#718096] space-y-2 mb-6">
                <li>{t('experience.cards.explorer.bullets.0')}</li>
                <li>{t('experience.cards.explorer.bullets.1')}</li>
                <li>{t('experience.cards.explorer.bullets.2')}</li>
              </ul>
              <Link to="/dive-services">
                <NeumorphicButton variant="coral" size="md" className="w-full">
                  {t('experience.cards.explorer.cta')}
                </NeumorphicButton>
              </Link>
            </NeumorphicCard>

            {/* Serenity Seeker */}
            <NeumorphicCard className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={resortImages.amenities.spa}
                  alt={t('experience.cards.serenity.imageAlt')}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-gradient-to-br from-[#7C9885] to-[#6a8172] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-2xl text-[#1A2332] mb-3">
                {t('experience.cards.serenity.title')}
              </h3>
              <p className="font-lato text-[#4A5568] mb-4">
                {t('experience.cards.serenity.description')}
              </p>
              <ul className="font-lato text-sm text-[#718096] space-y-2 mb-6">
                <li>{t('experience.cards.serenity.bullets.0')}</li>
                <li>{t('experience.cards.serenity.bullets.1')}</li>
                <li>{t('experience.cards.serenity.bullets.2')}</li>
              </ul>
              <Link to="/accommodations">
                <NeumorphicButton variant="primary" size="md" className="w-full">
                  {t('experience.cards.serenity.cta')}
                </NeumorphicButton>
              </Link>
            </NeumorphicCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us - RESTORED ORIGINAL BLUEPRINT DESIGN */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">
              {t('why.title')}
            </h2>
            <p className="font-lato text-lg text-[#4A5568] max-w-2xl mx-auto">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#0D7070] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                {t('why.cards.0.title')}
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                {t('why.cards.0.description')}
              </p>
            </NeumorphicCard>

            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#FF6B6B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                {t('why.cards.1.title')}
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                {t('why.cards.1.description')}
              </p>
            </NeumorphicCard>

            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#D4A373] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                {t('why.cards.2.title')}
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                {t('why.cards.2.description')}
              </p>
            </NeumorphicCard>

            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#7C9885] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                {t('why.cards.3.title')}
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                {t('why.cards.3.description')}
              </p>
            </NeumorphicCard>

            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#0D7070] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                {t('why.cards.4.title')}
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                {t('why.cards.4.description')}
              </p>
            </NeumorphicCard>

            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#FF6B6B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                {t('why.cards.5.title')}
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                {t('why.cards.5.description')}
              </p>
            </NeumorphicCard>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel - NEW */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* Accommodations Preview */}
      <AccommodationsPreview />

      {/* Gallery Teaser */}
      <GalleryTeaser />

      {/* Final CTA */}
      <section
        className="relative py-24 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${resortImages.resort.sunset})` }}
      >
        <div className="absolute inset-0 bg-[#0D7070]/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-white mb-6">
              {t('finalCta.title')}
            </h2>
            <p className="font-lato text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {t('finalCta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/rates">
                <NeumorphicButton variant="coral" size="lg">
                  {t('finalCta.primary')}
                </NeumorphicButton>
              </Link>
              <Link to="/contact">
                <NeumorphicButton variant="outline" size="lg" className="bg-white/90 hover:bg-white">
                  {t('finalCta.secondary')}
                </NeumorphicButton>
              </Link>
            </div>
            <div className="space-y-2 text-white/90">
              <p className="font-lato text-sm">
                +63 918 900 3644 | asrianilao@gmail.com
              </p>
              <p className="font-lato text-xs">
                {t('finalCta.officeHours')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
