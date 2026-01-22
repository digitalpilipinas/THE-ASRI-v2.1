import React from 'react'
import { Award, Camera, Compass, Shield, LucideIcon } from 'lucide-react'
import NeumorphicButton from '@/components/NeumorphicButton'
import NeumorphicCard from '@/components/NeumorphicCard'
import { resortImages } from '@/data/mockData'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useNamespace } from '@/i18n/useNamespace'

interface Course {
  id: number
  nameKey: string
  price: string
  durationKey: string
  icon: LucideIcon
  featureKeys: string[]
}

const DiveServicesPage: React.FC = () => {
  useNamespace('services')
  const { t } = useTranslation(['services', 'navigation'])
  const courses: Course[] = [
    { id: 1, nameKey: "courses.0.name", price: "3,500", durationKey: "courses.0.duration", icon: Award, featureKeys: ["courses.0.features.0", "courses.0.features.1", "courses.0.features.2", "courses.0.features.3"] },
    { id: 2, nameKey: "courses.1.name", price: "22,000", durationKey: "courses.1.duration", icon: Award, featureKeys: ["courses.1.features.0", "courses.1.features.1", "courses.1.features.2", "courses.1.features.3"] },
    { id: 3, nameKey: "courses.2.name", price: "18,000", durationKey: "courses.2.duration", icon: Compass, featureKeys: ["courses.2.features.0", "courses.2.features.1", "courses.2.features.2", "courses.2.features.3"] },
    { id: 4, nameKey: "courses.3.name", price: "20,000", durationKey: "courses.3.duration", icon: Shield, featureKeys: ["courses.3.features.0", "courses.3.features.1", "courses.3.features.2", "courses.3.features.3"] },
    { id: 5, nameKey: "courses.4.name", price: "45,000", durationKey: "courses.4.duration", icon: Award, featureKeys: ["courses.4.features.0", "courses.4.features.1", "courses.4.features.2", "courses.4.features.3"] },
    { id: 6, nameKey: "courses.5.name", price: "12,000", durationKey: "courses.5.duration", icon: Camera, featureKeys: ["courses.5.features.0", "courses.5.features.1", "courses.5.features.2", "courses.5.features.3"] }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${resortImages.hero.diveServices})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D7070]/70 to-[#0D7070]/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white mb-6">
            {t('services:hero.title')}
          </h1>
          <p className="font-lato text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('services:hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3">
              <p className="font-lato text-white font-bold">{t('services:hero.badges.0')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3">
              <p className="font-lato text-white font-bold">{t('services:hero.badges.1')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3">
              <p className="font-lato text-white font-bold">{t('services:hero.badges.2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">
              {t('services:coursesSection.title')}
            </h2>
            <p className="font-lato text-lg text-[#4A5568]">
              {t('services:coursesSection.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              const IconComponent = course.icon
              return (
                <NeumorphicCard key={course.id} className="flex flex-col h-full">
                  <div className="bg-gradient-to-br from-[#0D7070] to-[#0a5555] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">{t(`services:${course.nameKey}`)}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-lato font-bold text-2xl text-[#FF6B6B]">{course.price} PHP</span>
                    <span className="font-lato text-sm text-[#718096]">{t(`services:${course.durationKey}`)}</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {course.featureKeys.map((featureKey) => (
                      <li key={featureKey} className="font-lato text-sm text-[#718096]">• {t(`services:${featureKey}`)}</li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <NeumorphicButton variant="primary" size="md" className="w-full">{t('services:coursesSection.enrollCta')}</NeumorphicButton>
                  </Link>
                </NeumorphicCard>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">
              {t('services:funDives.title')}
            </h2>
            <p className="font-lato text-lg text-[#4A5568]">
              {t('services:funDives.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NeumorphicCard padding="md">
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">{t('services:funDives.pricing.0.title')}</h3>
              <p className="font-lato font-bold text-3xl text-[#0D7070] mb-2">{t('services:funDives.pricing.0.price')}</p>
              <p className="font-lato text-sm text-[#718096]">{t('services:funDives.pricing.0.description')}</p>
            </NeumorphicCard>

            <NeumorphicCard padding="md">
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">{t('services:funDives.pricing.1.title')}</h3>
              <p className="font-lato font-bold text-3xl text-[#FF6B6B] mb-2">{t('services:funDives.pricing.1.price')}</p>
              <p className="font-lato text-sm text-[#718096]">{t('services:funDives.pricing.1.description')}</p>
            </NeumorphicCard>

            <NeumorphicCard padding="md">
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">{t('services:funDives.pricing.2.title')}</h3>
              <p className="font-lato font-bold text-3xl text-[#FF6B6B] mb-2">{t('services:funDives.pricing.2.price')}</p>
              <p className="font-lato text-sm text-[#718096]">{t('services:funDives.pricing.2.description')}</p>
            </NeumorphicCard>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332] mb-6">
            {t('services:finalCta.title')}
          </h2>
          <p className="font-lato text-lg text-[#4A5568] mb-8">
            {t('services:finalCta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rates">
              <NeumorphicButton variant="coral" size="lg">{t('services:finalCta.primary')}</NeumorphicButton>
            </Link>
            <Link to="/contact">
              <NeumorphicButton variant="outline" size="lg">{t('navigation:items.contact.full')}</NeumorphicButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DiveServicesPage
