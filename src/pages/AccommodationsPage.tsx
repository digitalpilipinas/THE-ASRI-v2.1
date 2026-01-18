import React from 'react'
import { Users, Maximize, Eye, Coffee } from 'lucide-react'
import NeumorphicButton from '@/components/NeumorphicButton'
import NeumorphicCard from '@/components/NeumorphicCard'
import { resortImages, roomTypes } from '@/data/mockData'
import { Link } from 'react-router-dom'

interface Amenity {
  name: string
  description: string
  image: string
}

const AccommodationsPage: React.FC = () => {
  const amenities: Amenity[] = [
    { name: 'Infinity Pool', description: 'Swim with panoramic ocean views', image: resortImages.resort.infinityPool },
    { name: 'Beachfront Dining', description: 'Fresh seafood and cuisine', image: resortImages.amenities.restaurant },
    { name: 'Thai Spa', description: 'Traditional massage and wellness', image: resortImages.amenities.spa },
    { name: 'Dive Center', description: 'PADI 5-Star facility', image: resortImages.diving.diverShipwreck },
    { name: 'Gift Shop', description: 'Dive gear and souvenirs', image: resortImages.resort.beachLoungers },
    { name: 'Fitness Area', description: 'Beachfront yoga and fitness', image: resortImages.people.yoga2 }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${resortImages.hero.accommodations})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D7070]/60 to-[#0D7070]/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white mb-6">Your Sanctuary Awaits</h1>
          <p className="font-lato text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Thai-inspired rooms with modern comfort, stunning views, and the sound of waves as your lullaby.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">
              Choose Your Perfect Room
            </h2>
            <p className="font-lato text-lg text-[#4A5568]">
              From cozy garden retreats to oceanfront luxury - find your ideal sanctuary.
            </p>
          </div>

          <div className="space-y-16">
            {roomTypes.map((room, index) => (
              <div key={room.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img src={room.image} alt={room.name} className="rounded-2xl shadow-xl w-full h-80 object-cover" />
                </div>

                <NeumorphicCard className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  {room.popular && (
                    <div className="inline-block bg-[#FF6B6B] text-white px-4 py-1 rounded-full text-sm font-lato font-bold mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-playfair font-bold text-3xl text-[#1A2332] mb-3">{room.name}</h3>
                  <p className="font-lato text-[#4A5568] mb-6">{room.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Maximize className="w-5 h-5 text-[#0D7070]" />
                      <div>
                        <p className="font-lato text-xs text-[#718096]">Size</p>
                        <p className="font-lato font-bold text-sm text-[#1A2332]">{room.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#0D7070]" />
                      <div>
                        <p className="font-lato text-xs text-[#718096]">Guests</p>
                        <p className="font-lato font-bold text-sm text-[#1A2332]">{room.maxGuests}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-[#0D7070]" />
                      <div>
                        <p className="font-lato text-xs text-[#718096]">View</p>
                        <p className="font-lato font-bold text-sm text-[#1A2332]">{room.view}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="w-5 h-5 text-[#0D7070]" />
                      <div>
                        <p className="font-lato text-xs text-[#718096]">Bed</p>
                        <p className="font-lato font-bold text-sm text-[#1A2332]">{room.bed}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-[#D4A373]/20">
                    <div>
                      <p className="font-lato text-sm text-[#718096]">Starting from</p>
                      <p className="font-playfair font-bold text-3xl text-[#FF6B6B]">
                        {room.price} PHP<span className="text-lg text-[#718096]">/night</span>
                      </p>
                    </div>
                    <Link to="/contact">
                      <NeumorphicButton variant="primary" size="md">Book Room</NeumorphicButton>
                    </Link>
                  </div>
                </NeumorphicCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">Beyond Your Room</h2>
            <p className="font-lato text-lg text-[#4A5568]">
              World-class facilities designed for relaxation, adventure, and connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <NeumorphicCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">{amenity.name}</h3>
                <p className="font-lato text-sm text-[#4A5568]">{amenity.description}</p>
              </NeumorphicCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccommodationsPage