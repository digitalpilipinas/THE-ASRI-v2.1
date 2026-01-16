import React from 'react'
import { Link } from 'react-router-dom'
import { Camera, Award, Sparkles, Waves, Coffee, ChevronDown } from 'lucide-react'
import NeumorphicButton from '../components/NeumorphicButton'
import NeumorphicCard from '../components/NeumorphicCard'
import { resortImages, testimonials } from '../data/mockData'

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${resortImages.hero.homepage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D7070]/60 via-[#0D7070]/40 to-[#0D7070]/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Where Macro Magic<br />Meets Serenity
            </h1>
            <p className="font-lato text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover world-class macro diving, luxurious accommodations, and Thai-inspired wellness in Anilao, Batangas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/rates">
                <NeumorphicButton variant="coral" size="lg">View Packages</NeumorphicButton>
              </Link>
              <Link to="/dive-services">
                <NeumorphicButton variant="outline" size="lg" className="bg-white/90 hover:bg-white">
                  Explore Diving
                </NeumorphicButton>
              </Link>
            </div>
            <p className="font-lato text-sm text-white/80 mt-6">
              Mabini, Batangas (Anilao), Philippines
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">
              Your Perfect Escape Awaits
            </h2>
            <p className="font-lato text-lg text-[#4A5568] max-w-2xl mx-auto">
              Whether you are a macro diving enthusiast, aspiring explorer, or seeking serenity, we have crafted experiences just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Obsessed Diver */}
            <NeumorphicCard className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={resortImages.diving.nudibranch1}
                  alt="Macro diving"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-gradient-to-br from-[#0D7070] to-[#0a5555] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-2xl text-[#1A2332] mb-3">
                For the Obsessed Diver
              </h3>
              <p className="font-lato text-[#4A5568] mb-4">
                Over 40 nudibranch species, frogfish, seahorses, and ghost pipefish await your lens.
              </p>
              <ul className="font-lato text-sm text-[#718096] space-y-2 mb-6">
                <li>World-class macro sites</li>
                <li>Expert photo guides</li>
                <li>Small group dives</li>
              </ul>
              <Link to="/dive-services">
                <NeumorphicButton variant="primary" size="md" className="w-full">
                  Explore Dive Sites
                </NeumorphicButton>
              </Link>
            </NeumorphicCard>

            {/* Aspiring Explorer */}
            <NeumorphicCard className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={resortImages.people.instructor1}
                  alt="PADI training"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-gradient-to-br from-[#FF6B6B] to-[#ee5050] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-2xl text-[#1A2332] mb-3">
                For the Aspiring Explorer
              </h3>
              <p className="font-lato text-[#4A5568] mb-4">
                Start your diving journey with PADI 5-Star training in calm, warm waters.
              </p>
              <ul className="font-lato text-sm text-[#718096] space-y-2 mb-6">
                <li>1:3 instructor ratio</li>
                <li>Beginner-friendly sites</li>
                <li>100% safety record</li>
              </ul>
              <Link to="/dive-services">
                <NeumorphicButton variant="coral" size="md" className="w-full">
                  Start Your Journey
                </NeumorphicButton>
              </Link>
            </NeumorphicCard>

            {/* Serenity Seeker */}
            <NeumorphicCard className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={resortImages.amenities.spa}
                  alt="Spa and wellness"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-gradient-to-br from-[#7C9885] to-[#6a8172] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-2xl text-[#1A2332] mb-3">
                For the Serenity Seeker
              </h3>
              <p className="font-lato text-[#4A5568] mb-4">
                Unwind with Thai massage, beachfront yoga, and infinity pool bliss.
              </p>
              <ul className="font-lato text-sm text-[#718096] space-y-2 mb-6">
                <li>Thai spa treatments</li>
                <li>Yoga and meditation</li>
                <li>Ocean view rooms</li>
              </ul>
              <Link to="/accommodations">
                <NeumorphicButton variant="primary" size="md" className="w-full">
                  Find Your Sanctuary
                </NeumorphicButton>
              </Link>
            </NeumorphicCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">
              Why Dive with The Asri?
            </h2>
            <p className="font-lato text-lg text-[#4A5568] max-w-2xl mx-auto">
              We are not just another dive resort. Here is what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#0D7070] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                PADI 5-Star IDC Center
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                Internationally certified dive center with the highest safety and training standards.
              </p>
            </NeumorphicCard>

            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#FF6B6B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                15+ Pristine Dive Sites
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                From coral gardens to macro paradises, all within a 10-minute boat ride.
              </p>
            </NeumorphicCard>

            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#D4A373] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                Macro Diving Specialists
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                Our guides have eagle eyes for the tiniest critters that most divers miss.
              </p>
            </NeumorphicCard>

            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#7C9885] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                Luxury Rooms and Spa
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                Thai-inspired accommodations with ocean views and world-class spa treatments.
              </p>
            </NeumorphicCard>

            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#0D7070] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                Farm-to-Table Dining
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                Fresh seafood and international cuisine served beachfront with stunning sunset views.
              </p>
            </NeumorphicCard>

            <NeumorphicCard padding="md" className="flex flex-col items-center text-center">
              <div className="bg-[#FF6B6B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                Small Group Promise
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                Maximum 1:4 ratio for certified divers, 1:3 for courses. Personalized attention guaranteed.
              </p>
            </NeumorphicCard>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">
              Guest Stories
            </h2>
            <p className="font-lato text-lg text-[#4A5568]">
              Do not just take our word for it - hear from our happy guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <NeumorphicCard key={testimonial.id} padding="md">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-lato font-bold text-[#1A2332]">
                      {testimonial.name}
                    </h4>
                    <p className="font-lato text-sm text-[#718096]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FF6B6B]">★</span>
                  ))}
                </div>
                <p className="font-lato text-[#4A5568] text-sm mb-3">
                  {testimonial.text}
                </p>
                <p className="font-lato text-xs text-[#718096]">
                  via {testimonial.source}
                </p>
              </NeumorphicCard>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-[#D4A373]/20">
            <div className="text-center">
              <p className="font-playfair font-bold text-3xl text-[#0D7070]">5.0</p>
              <p className="font-lato text-sm text-[#718096]">TripAdvisor</p>
            </div>
            <div className="text-center">
              <p className="font-playfair font-bold text-3xl text-[#0D7070]">100%</p>
              <p className="font-lato text-sm text-[#718096]">Safety Record</p>
            </div>
            <div className="text-center">
              <p className="font-playfair font-bold text-3xl text-[#0D7070]">15+</p>
              <p className="font-lato text-sm text-[#718096]">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-playfair font-bold text-3xl text-[#0D7070]">PADI</p>
              <p className="font-lato text-sm text-[#718096]">5-Star IDC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative py-24 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${resortImages.resort.sunset})` }}
      >
        <div className="absolute inset-0 bg-[#0D7070]/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-white mb-6">
              Ready to Experience The Asri?
            </h2>
            <p className="font-lato text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Book your dive adventure or wellness retreat today. Our team is standing by to craft your perfect escape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/rates">
                <NeumorphicButton variant="coral" size="lg">
                  View Packages and Rates
                </NeumorphicButton>
              </Link>
              <Link to="/contact">
                <NeumorphicButton variant="outline" size="lg" className="bg-white/90 hover:bg-white">
                  Contact Us
                </NeumorphicButton>
              </Link>
            </div>
            <div className="space-y-2 text-white/90">
              <p className="font-lato text-sm">
                +63 918 900 3644 | asrianilao@gmail.com
              </p>
              <p className="font-lato text-xs">
                Office Hours: 8:00 AM - 8:00 PM PHT (Daily)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage