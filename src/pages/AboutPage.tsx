import React from 'react'
import { Award, Heart, Users, Leaf, Trophy, Shield, LucideIcon, CheckCircle, Target } from 'lucide-react'
import NeumorphicCard from '@/components/NeumorphicCard'
import { resortImages } from '@/data/mockData'
import { useTranslation } from 'react-i18next'
import { useNamespace } from '@/i18n/useNamespace'

interface Value {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

interface TeamMember {
  id: number
  name: string
  role: string
  specialty: string
  image: string
}

interface Certification {
  name: string
  year: string
}

const AboutPage: React.FC = () => {
  useNamespace('about')
  const { t } = useTranslation('about')
  const values: Value[] = [
    {
      icon: Award,
      title: t('values.items.0.title'),
      description: t('values.items.0.description'),
      color: '#0D7070'
    },
    {
      icon: Heart,
      title: t('values.items.1.title'),
      description: t('values.items.1.description'),
      color: '#7C9885'
    },
    {
      icon: Users,
      title: t('values.items.2.title'),
      description: t('values.items.2.description'),
      color: '#FF6B6B'
    }
  ]

  const teamMembers: TeamMember[] = [
    { id: 1, name: "John Dizon", role: t('team.items.0.role'), specialty: t('team.items.0.specialty'), image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80" },
    { id: 2, name: "Danica Villezar", role: t('team.items.1.role'), specialty: t('team.items.1.specialty'), image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" },
    { id: 3, name: "Chef Marco Rossi", role: t('team.items.2.role'), specialty: t('team.items.2.specialty'), image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80" },
    { id: 4, name: "Ana Reyes", role: t('team.items.3.role'), specialty: t('team.items.3.specialty'), image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&q=80" }
  ]

  const certifications: Certification[] = [
    { name: t('certifications.items.0.name'), year: t('certifications.items.0.year') },
    { name: t('certifications.items.1.name'), year: t('certifications.items.1.year') },
    { name: t('certifications.items.2.name'), year: t('certifications.items.2.year') },
    { name: t('certifications.items.3.name'), year: t('certifications.items.3.year') },
    { name: t('certifications.items.4.name'), year: t('certifications.items.4.year') },
  ]

  const sustainabilityPractices = t('sustainability.practices', { returnObjects: true }) as string[]

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${resortImages.hero.about})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D7070]/60 to-[#0D7070]/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white mb-6">
            {t('hero.titleLine1')}<br />{t('hero.titleLine2')}
          </h1>
          <p className="font-lato text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={resortImages.resort.aerialView} alt={t('story.imageAlt')} className="rounded-2xl shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332] mb-6">{t('story.title')}</h2>
              <div className="space-y-4 font-lato text-[#4A5568]">
                <p>{t('story.paragraphs.0')}</p>
                <p>{t('story.paragraphs.1')}</p>
                <p>{t('story.paragraphs.2')}</p>
                <p>{t('story.paragraphs.3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW PADI 5-STAR SECTION */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #0D7070 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: PADI Badge */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative max-w-lg w-full">
                <img 
                  src="/images/THE%20ASRI_PADI-5-STAR-RESORT.jpeg" 
                  alt={t('padi.badgeAlt')}
                  className="w-full rounded-2xl shadow-2xl"
                />
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#0D7070]/20 via-transparent to-[#FF6B6B]/20 blur-3xl -z-10"></div>
              </div>
            </div>

            {/* RIGHT: Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-gradient-to-r from-[#0D7070] to-[#0a5555] text-white px-4 py-2 rounded-full text-sm font-lato font-bold mb-4">
                {t('padi.kicker')}
              </div>
              
              <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-6">
                {t('padi.title')}
              </h2>
              
              <p className="font-lato text-lg text-[#4A5568] mb-8">
                {t('padi.intro')}
              </p>
              
              <div className="space-y-6">
                {/* IDC Center Status */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#0D7070] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-xl text-[#1A2332] mb-2">
                      {t('padi.features.0.title')}
                    </h3>
                    <p className="font-lato text-[#718096]">
                      {t('padi.features.0.description')}
                    </p>
                  </div>
                </div>

                {/* Professional Team */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF6B6B] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-xl text-[#1A2332] mb-2">
                      {t('padi.features.1.title')}
                    </h3>
                    <p className="font-lato text-[#718096]">
                      {t('padi.features.1.description')}
                    </p>
                  </div>
                </div>

                {/* Safety First */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#7C9885] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-xl text-[#1A2332] mb-2">
                      {t('padi.features.2.title')}
                    </h3>
                    <p className="font-lato text-[#718096]">
                      {t('padi.features.2.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-[#D4A373]/20">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#0D7070]" />
                    <span className="font-lato text-sm font-semibold text-[#1A2332]">{t('padi.badges.0')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#0D7070]" />
                    <span className="font-lato text-sm font-semibold text-[#1A2332]">{t('padi.badges.1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#0D7070]" />
                    <span className="font-lato text-sm font-semibold text-[#1A2332]">{t('padi.badges.2')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">{t('values.title')}</h2>
            <p className="font-lato text-lg text-[#4A5568] max-w-2xl mx-auto">
              {t('values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <NeumorphicCard key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: value.color }}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair font-bold text-2xl text-[#1A2332] mb-4">{value.title}</h3>
                  <p className="font-lato text-[#4A5568]">{value.description}</p>
                </NeumorphicCard>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">{t('team.title')}</h2>
            <p className="font-lato text-lg text-[#4A5568] max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <NeumorphicCard key={member.id} padding="md" className="text-center">
                <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-1">{member.name}</h3>
                <p className="font-lato text-sm text-[#FF6B6B] font-semibold mb-2">{member.role}</p>
                <p className="font-lato text-sm text-[#718096]">{member.specialty}</p>
              </NeumorphicCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7C9885] w-12 h-12 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332]">{t('sustainability.title')}</h2>
              </div>
              <p className="font-lato text-[#4A5568] mb-6">
                {t('sustainability.subtitle')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sustainabilityPractices.map((practice, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-[#7C9885] flex-shrink-0 mt-0.5" />
                    <p className="font-lato text-sm text-[#4A5568]">{practice}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={resortImages.diving.coralCanyon} alt={t('sustainability.images.coralReef')} className="rounded-xl shadow-lg" />
              <img src={resortImages.diving.turtle} alt={t('sustainability.images.seaTurtle')} className="rounded-xl shadow-lg mt-8" />
              <img src={resortImages.people.yoga1} alt={t('sustainability.images.yoga')} className="rounded-xl shadow-lg -mt-8" />
              <img src={resortImages.amenities.flowers} alt={t('sustainability.images.nature')} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-[#D4A373]" />
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332]">{t('certifications.title')}</h2>
            </div>
            <p className="font-lato text-lg text-[#4A5568]">{t('certifications.subtitle')}</p>
          </div>

          <NeumorphicCard padding="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                  <div className="bg-[#0D7070] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-[#1A2332]">{cert.name}</h3>
                    <p className="font-lato text-sm text-[#718096]">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeumorphicCard>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
