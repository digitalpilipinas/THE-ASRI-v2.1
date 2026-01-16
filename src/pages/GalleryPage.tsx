import React, { useState } from 'react'
import { X } from 'lucide-react'
import NeumorphicButton from '../components/NeumorphicButton'
import { resortImages, galleryImages, GalleryImage } from '../data/mockData'

type FilterType = 'all' | 'diving' | 'rooms' | 'dining' | 'spa' | 'moments'

interface Filter {
  id: FilterType
  label: string
}

const GalleryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all')
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)

  const filters: Filter[] = [
    { id: 'all', label: 'All' },
    { id: 'diving', label: 'Diving' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'dining', label: 'Dining' },
    { id: 'spa', label: 'Spa' },
    { id: 'moments', label: 'Moments' },
  ]

  const filteredImages = selectedFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedFilter)

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${resortImages.hero.gallery})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D7070]/70 to-[#0D7070]/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white mb-4">
            Experience The Asri<br />Through Our Lens
          </h1>
          <p className="font-lato text-lg text-white/90">
            Dive into our visual story - from underwater magic to beachfront bliss.
          </p>
        </div>
      </section>

      <section className="py-8 bg-[#F5F1E8] sticky top-20 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-xl font-lato font-medium transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-[#0D7070] text-white shadow-lg'
                    : 'bg-white text-[#4A5568] hover:bg-[#E6EBE8]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => setLightboxImage(image)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="font-lato text-white text-sm p-4">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="font-lato text-[#718096] text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#FF6B6B] transition-colors z-10"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl w-full">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="font-lato text-white text-center mt-4">{lightboxImage.alt}</p>
          </div>
        </div>
      )}

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332] mb-4">
            Share Your Experience
          </h2>
          <p className="font-lato text-lg text-[#4A5568] mb-8">
            Share your unforgettable moments at The Asri with the world! Tag us on Instagram and your photos could be featured in our gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://instagram.com/theasrianilao" target="_blank" rel="noopener noreferrer">
              <NeumorphicButton variant="primary" size="lg">Follow @theasrianilao</NeumorphicButton>
            </a>
            <a href="https://instagram.com/theasrianilao" target="_blank" rel="noopener noreferrer">
              <NeumorphicButton variant="outline" size="lg">Share on Instagram</NeumorphicButton>
            </a>
          </div>
          <p className="font-lato text-sm text-[#718096] mt-6">
            Tag us <strong className="text-[#FF6B6B]">@theasrianilao</strong> to be featured in our gallery
          </p>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage