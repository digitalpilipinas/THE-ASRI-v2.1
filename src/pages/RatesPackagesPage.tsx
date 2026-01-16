import React from 'react'
import { Check, Star, Gift } from 'lucide-react'
import NeumorphicButton from '../components/NeumorphicButton'
import NeumorphicCard from '../components/NeumorphicCard'
import { Link } from 'react-router-dom'
import { resortImages, roomTypes } from '../data/mockData'

interface DivePackage {
  id: number
  name: string
  duration: string
  dives: string
  room: string
  price: string
  originalPrice: string
  savings: string
  idealFor: string
  includes: string[]
  perks?: string[]
  popular?: boolean
}

const RatesPackagesPage: React.FC = () => {
  const divePackages: DivePackage[] = [
    {
      id: 1,
      name: "Weekend Explorer",
      duration: "3 Days / 2 Nights",
      dives: "6 Fun Dives",
      room: "Deluxe Garden View",
      price: "12,500",
      originalPrice: "14,200",
      savings: "1,700",
      idealFor: "Weekend warriors",
      includes: ["2 nights accommodation", "6 boat dives", "All equipment", "Breakfast daily", "Airport transfer"],
      perks: ["Free nitrox upgrade", "Photo CD"]
    },
    {
      id: 2,
      name: "Full Dive Immersion",
      duration: "7 Days / 6 Nights",
      dives: "12 Fun Dives",
      room: "Deluxe Seaview",
      price: "28,900",
      originalPrice: "33,600",
      savings: "4,700",
      idealFor: "Serious divers",
      includes: ["6 nights accommodation", "12 boat dives", "Nitrox", "All meals", "Transfers", "Dive insurance"],
      perks: ["Free macro guide", "1 night dive", "10% spa discount"],
      popular: true
    },
    {
      id: 3,
      name: "Certification Retreat",
      duration: "5 Days / 4 Nights",
      dives: "Open Water Course",
      room: "Standard Garden View",
      price: "24,800",
      originalPrice: "27,200",
      savings: "2,400",
      idealFor: "New divers",
      includes: ["4 nights accommodation", "Full PADI course", "eLearning", "All equipment", "Breakfast", "Certification"],
      perks: ["Free manual", "Logbook", "T-shirt"]
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${resortImages.resort.aerialView})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D7070]/70 to-[#0D7070]/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white mb-6">
            Packages Designed for<br />Unforgettable Experiences
          </h1>
          <p className="font-lato text-lg text-white/90">Save up to 20% with our thoughtfully curated dive and stay packages.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">Dive and Stay Packages</h2>
            <p className="font-lato text-lg text-[#4A5568]">Combine accommodation and diving for maximum value.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {divePackages.map((pkg) => (
              <NeumorphicCard key={pkg.id} className="flex flex-col h-full">
                {pkg.popular && (
                  <div className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#ee5050] text-white px-4 py-1 rounded-full text-sm font-lato font-bold mb-4 self-start">
                    Most Popular
                  </div>
                )}
                <h3 className="font-playfair font-bold text-2xl text-[#1A2332] mb-2">{pkg.name}</h3>
                <p className="font-lato text-sm text-[#718096] mb-4">{pkg.idealFor}</p>

                <div className="bg-[#E6EBE8] rounded-xl p-4 mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="font-playfair font-bold text-4xl text-[#0D7070]">{pkg.price} PHP</span>
                  </div>
                  <p className="text-center font-lato text-sm text-[#718096] line-through">Was {pkg.originalPrice} PHP</p>
                  <p className="text-center font-lato text-sm font-bold text-[#FF6B6B]">Save {pkg.savings} PHP</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-[#D4A373]" />
                    <span className="font-lato font-semibold text-[#1A2332]">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-[#D4A373]" />
                    <span className="font-lato font-semibold text-[#1A2332]">{pkg.dives}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#D4A373]" />
                    <span className="font-lato font-semibold text-[#1A2332]">{pkg.room}</span>
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="font-lato font-bold text-[#1A2332] mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#7C9885] flex-shrink-0 mt-0.5" />
                        <span className="font-lato text-sm text-[#718096]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.perks && (
                  <div className="mb-6 bg-[#7C9885]/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="w-5 h-5 text-[#7C9885]" />
                      <h4 className="font-lato font-bold text-[#1A2332]">Bonus Perks:</h4>
                    </div>
                    <ul className="space-y-1">
                      {pkg.perks.map((perk, idx) => (
                        <li key={idx} className="font-lato text-sm text-[#4A5568]">• {perk}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link to="/contact">
                  <NeumorphicButton variant={pkg.popular ? 'coral' : 'primary'} size="md" className="w-full">
                    Book Package
                  </NeumorphicButton>
                </Link>
              </NeumorphicCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">Room Rates</h2>
            <p className="font-lato text-lg text-[#4A5568]">Book accommodation only - diving purchased separately.</p>
          </div>

          <NeumorphicCard>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#D4A373]/30">
                    <th className="text-left font-lato font-bold text-[#1A2332] py-4 px-4">Room Type</th>
                    <th className="text-center font-lato font-bold text-[#1A2332] py-4 px-4">Peak Season</th>
                    <th className="text-center font-lato font-bold text-[#1A2332] py-4 px-4">Regular Season</th>
                    <th className="text-center font-lato font-bold text-[#1A2332] py-4 px-4">Low Season</th>
                  </tr>
                </thead>
                <tbody>
                  {roomTypes.map((room) => (
                    <tr key={room.id} className="border-b border-[#D4A373]/10">
                      <td className="font-lato text-[#4A5568] py-4 px-4">{room.name}</td>
                      <td className="text-center font-lato font-bold text-[#0D7070] py-4 px-4">{room.price} PHP</td>
                      <td className="text-center font-lato font-bold text-[#0D7070] py-4 px-4">{Math.round(parseInt(room.price.replace(/,/g, '')) * 0.85)} PHP</td>
                      <td className="text-center font-lato font-bold text-[#0D7070] py-4 px-4">{Math.round(parseInt(room.price.replace(/,/g, '')) * 0.70)} PHP</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-lato text-sm text-[#718096] mt-6 text-center">
              Long-stay discounts: 7+ nights (10% off), 14+ nights (15% off), 30+ nights (20% off)
            </p>
          </NeumorphicCard>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332] mb-6">
            Ready to Book Your Adventure?
          </h2>
          <p className="font-lato text-lg text-[#4A5568] mb-8">
            Questions? We are here to help craft your perfect package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <NeumorphicButton variant="coral" size="lg">Check Availability</NeumorphicButton>
            </Link>
            <Link to="/contact">
              <NeumorphicButton variant="outline" size="lg">WhatsApp Us</NeumorphicButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RatesPackagesPage