import React from 'react'
import { Award, Heart, Users, Leaf, Trophy, Shield, LucideIcon } from 'lucide-react'
import NeumorphicCard from '@/components/NeumorphicCard'
import { resortImages } from '@/data/mockData'

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
  const values: Value[] = [
    {
      icon: Award,
      title: 'Mastery',
      description: 'Excellence in diving instruction, safety protocols, and guest service. Our team holds the highest certifications and never stops learning.',
      color: '#0D7070'
    },
    {
      icon: Heart,
      title: 'Stewardship',
      description: 'We protect the underwater world we love through sustainable practices, reef conservation, and educating every guest about marine preservation.',
      color: '#7C9885'
    },
    {
      icon: Users,
      title: 'Intimacy',
      description: 'Small groups, personalized service, and genuine connections. You are not a number here - you are family from the moment you arrive.',
      color: '#FF6B6B'
    }
  ]

  const teamMembers: TeamMember[] = [
    { id: 1, name: "John Dizon", role: "Resort Owner", specialty: "PADI Scuba Instructor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
    { id: 2, name: "Isabella Cruz", role: "Operations Manager", specialty: "Guest Relations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" },
    { id: 3, name: "Chef Marco Rossi", role: "Executive Chef", specialty: "Mediterranean Fusion", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80" },
    { id: 4, name: "Ana Reyes", role: "Spa Director", specialty: "Thai Massage", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&q=80" }
  ]

  const certifications: Certification[] = [
    { name: 'PADI 5-Star IDC Center', year: 'Since 2010' },
    { name: 'TripAdvisor Excellence', year: '2018-2024' },
    { name: 'Green Fins Member', year: 'Since 2015' },
    { name: 'Philippine Tourism Award', year: '2022' },
    { name: '100% Safety Record', year: '15+ Years' },
  ]

  const sustainabilityPractices: string[] = [
    'Zero single-use plastics throughout resort',
    'Reef-safe sunscreen policy',
    'Monthly beach and reef cleanup',
    'Solar panels power 60% of energy',
    'Organic waste composting',
    'Partnership with marine conservation',
    'Staff marine biology training',
    'Guest education programs'
  ]

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${resortImages.hero.about})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D7070]/60 to-[#0D7070]/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white mb-6">
            More Than a Resort<br />It is a Feeling
          </h1>
          <p className="font-lato text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Born from a love of the ocean and a dream to share Anilao underwater magic with the world.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={resortImages.resort.aerialView} alt="The Asri aerial view" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332] mb-6">Our Story</h2>
              <div className="space-y-4 font-lato text-[#4A5568]">
                <p>The Asri Dive & Leisure Resort began with a simple dream: to create an intimate seaside sanctuary where world-class diving and warm Filipino hospitality come together in one unforgettable experience. Nestled in Sitio Balagbag, Barangay Bagalangit in Mabini, Batangas, just a few hours from Manila, The Asri was designed for people who want more than a quick escape—they want a place that feels like a second home by the sea.</p>
                <p>From the start, the vision was clear: keep it small, keep it personal, and keep the standards high. With only around 14 waterfront rooms, The Asri was intentionally built to stay boutique. This intimacy allows the team to know guests by name, understand their goals—whether it is completing a first PADI course, chasing rare macro critters, or simply unwinding by the infinity pool—and tailor each stay around them.</p>
                <p>Earning PADI 5-Star Dive Resort accreditation became a natural extension of that commitment. It formalized what guests were already experiencing: safe, professional, and thoughtfully guided diving in one of the richest marine biodiversity areas in the world. Today, our instructors and dive professionals welcome everyone—from nervous beginners to seasoned photographers—to explore over 30 nearby dive sites with confidence and curiosity.</p>
                <p>Wrapped in a Thai-inspired aesthetic, surrounded by Balayan Bay sunsets, and supported by a team that genuinely cares, The Asri continues to grow not by becoming bigger, but by becoming better—one guest, one dive, and one shared story at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">Our Values</h2>
            <p className="font-lato text-lg text-[#4A5568] max-w-2xl mx-auto">
              These three principles guide everything we do, from dive briefings to spa treatments to your morning coffee.
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

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">Meet the Team</h2>
            <p className="font-lato text-lg text-[#4A5568] max-w-2xl mx-auto">
              The heart and soul of The Asri. Passionate experts dedicated to making your experience unforgettable.
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

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7C9885] w-12 h-12 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332]">Sustainability</h2>
              </div>
              <p className="font-lato text-[#4A5568] mb-6">
                We believe that protecting the underwater world we showcase is not optional - it is essential. Our commitment to sustainability extends from our dive practices to our daily resort operations.
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
              <img src={resortImages.diving.coralCanyon} alt="Coral reef" className="rounded-xl shadow-lg" />
              <img src={resortImages.diving.turtle} alt="Sea turtle" className="rounded-xl shadow-lg mt-8" />
              <img src={resortImages.people.yoga1} alt="Yoga" className="rounded-xl shadow-lg -mt-8" />
              <img src={resortImages.amenities.flowers} alt="Nature" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-[#D4A373]" />
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332]">Certifications and Awards</h2>
            </div>
            <p className="font-lato text-lg text-[#4A5568]">Recognized for excellence in diving, hospitality, and sustainability.</p>
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
