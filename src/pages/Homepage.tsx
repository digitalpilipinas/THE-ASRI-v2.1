import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Camera, Award, Sparkles, Waves, Coffee } from 'lucide-react'
import NeumorphicButton from '@/components/NeumorphicButton'
import NeumorphicCard from '@/components/NeumorphicCard'
import { resortImages, testimonials } from '@/data/mockData'
import HeroSlider from '@/components/home/HeroSlider'
import StatsBar from '@/components/home/StatsBar'
import AccommodationsPreview from '@/components/home/AccommodationsPreview'
import GalleryTeaser from '@/components/home/GalleryTeaser'
import TestimonialCarousel from '@/components/home/TestimonialCarousel'

const Homepage: React.FC = () => {
  // Parallax for "Why Choose Us" section - SUBTLE movement (matching Final CTA)
  const whyChooseRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: whyChooseRef,
    offset: ["start end", "end start"]
  })
  // Reduced parallax movement: 20px (same as Final CTA) instead of 30px
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 20])

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

      {/* Why Choose Us - OCEAN PARALLAX IMAGE (Final CTA Style) */}
      <section
        ref={whyChooseRef}
        className="relative py-16 md:py-24 overflow-hidden bg-midnight-blue"
      >
        {/* PARALLAX BACKGROUND IMAGE - Blue Ocean (David Boca) */}
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.pexels.com/photos/5466506/pexels-photo-5466506.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Underwater blue ocean view"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* GRADIENT OVERLAY - 60% opacity (matches Final CTA darkness) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D7070]/60 via-[#0a5555]/55 to-[#1A2332]/60 z-0" />

        {/* CONTENT LAYER (above all backgrounds) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            {/* WHITE TEXT with drop-shadow (Final CTA style) */}
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-white drop-shadow-lg mb-4">
              Why Dive with The Asri?
            </h2>
            <p className="font-lato text-lg text-white/95 drop-shadow max-w-2xl mx-auto">
              We are not just another dive resort. Here is what sets us apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* GLASS EFFECT CARDS - bg-white/95 backdrop-blur-sm (Final CTA style) */}
            <NeumorphicCard padding="md" className="bg-white/95 backdrop-blur-sm flex flex-col items-center text-center">
              <div className="bg-[#0D7070] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">
                PADI 5-Star Dive Resort
              </h3>
              <p className="font-lato text-sm text-[#718096]">
                Internationally certified dive center with the highest safety and training standards.
              </p>
            </NeumorphicCard>

            <NeumorphicCard padding="md" className="bg-white/95 backdrop-blur-sm flex flex-col items-center text-center">
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

            <NeumorphicCard padding="md" className="bg-white/95 backdrop-blur-sm flex flex-col items-center text-center">
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

            <NeumorphicCard padding="md" className="bg-white/95 backdrop-blur-sm flex flex-col items-center text-center">
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

            <NeumorphicCard padding="md" className="bg-white/95 backdrop-blur-sm flex flex-col items-center text-center">
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

            <NeumorphicCard padding="md" className="bg-white/95 backdrop-blur-sm flex flex-col items-center text-center">
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