// Mock data for The Asri Dive & Leisure Resort
import { UNSPLASH_IMAGES } from './unsplashImages'

export interface ResortImages {
  hero: {
    homepage: string
    about: string
    diveServices: string
    accommodations: string
    contact: string
    gallery: string
  }
  resort: {
    infinityPool: string
    beachLoungers: string
    aerialView: string
    sunset: string
  }
  diving: {
    nudibranch1: string
    nudibranch2: string
    seahorse: string
    coralCanyon: string
    fishSchool: string
    turtle: string
    diverShipwreck: string
    diverUnderwater: string
  }
  rooms: {
    oceanView: string
    gardenView: string
    modernBed: string
  }
  amenities: {
    spa: string
    flowers: string
    massage: string
    pool: string
    restaurant: string
    beachDining: string
  }
  people: {
    instructor1: string
    instructor2: string
    couple1: string
    couple2: string
    yoga1: string
    yoga2: string
    poolActivity: string
  }
}

export const resortImages: ResortImages = {
  hero: {
    homepage: UNSPLASH_IMAGES.hero.main,
    about: UNSPLASH_IMAGES.about.facility,
    diveServices: UNSPLASH_IMAGES.hero.diving,
    accommodations: UNSPLASH_IMAGES.rooms.beachfront,
    contact: UNSPLASH_IMAGES.contact.map,
    gallery: UNSPLASH_IMAGES.hero.resort,
  },
  resort: {
    infinityPool: UNSPLASH_IMAGES.amenities.pool,
    beachLoungers: 'https://images.unsplash.com/photo-1583602851714-571edbce0989?w=1200&q=80',
    aerialView: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80',
    sunset: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200&q=80',
  },
  diving: {
    nudibranch1: UNSPLASH_IMAGES.diving.coral,
    nudibranch2: UNSPLASH_IMAGES.diving.underwater,
    seahorse: UNSPLASH_IMAGES.diving.marine,
    coralCanyon: UNSPLASH_IMAGES.diving.coral,
    fishSchool: UNSPLASH_IMAGES.diving.underwater,
    turtle: UNSPLASH_IMAGES.diving.marine,
    diverShipwreck: UNSPLASH_IMAGES.diving.boat,
    diverUnderwater: UNSPLASH_IMAGES.diving.diver,
  },
  rooms: {
    oceanView: UNSPLASH_IMAGES.rooms.deluxe,
    gardenView: UNSPLASH_IMAGES.rooms.family,
    modernBed: UNSPLASH_IMAGES.rooms.interior,
  },
  amenities: {
    spa: UNSPLASH_IMAGES.amenities.spa,
    flowers: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
    massage: UNSPLASH_IMAGES.amenities.spa,
    pool: UNSPLASH_IMAGES.amenities.pool,
    restaurant: UNSPLASH_IMAGES.amenities.restaurant,
    beachDining: UNSPLASH_IMAGES.amenities.restaurant,
  },
  people: {
    instructor1: 'https://images.unsplash.com/photo-1563968016-9786a660a64d?w=800&q=80',
    instructor2: 'https://images.unsplash.com/photo-1645059986162-d077871822b6?w=800&q=80',
    couple1: 'https://images.unsplash.com/photo-1766735325790-5ba68348b232?w=800&q=80',
    couple2: 'https://images.unsplash.com/photo-1726252799602-b443b78a3a0b?w=800&q=80',
    yoga1: 'https://images.unsplash.com/photo-1758797315487-b3b225dff7d8?w=800&q=80',
    yoga2: 'https://images.unsplash.com/photo-1767452985135-b2b1be80113f?w=800&q=80',
    poolActivity: 'https://images.unsplash.com/photo-1707575561373-d868bc04d593?w=800&q=80',
  }
}

export interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  avatar: string
  source: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "United Kingdom",
    rating: 5,
    text: "The Asri exceeded every expectation. The macro diving is world-class - I saw three different species of nudibranchs in one dive! The 1:3 instructor ratio made me feel safe as a beginner.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    source: "TripAdvisor"
  },
  {
    id: 2,
    name: "Marco Rodriguez",
    location: "Spain",
    rating: 5,
    text: "As an underwater photographer, The Asri is paradise. The staff knew exactly where to find the best macro subjects. The rooms are luxurious and the food is incredible.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    source: "Google Reviews"
  },
  {
    id: 3,
    name: "Elena Chen",
    location: "Singapore",
    rating: 5,
    text: "Perfect couple getaway! The spa was divine, diving was spectacular, and the sunset views from our room were breathtaking. We will definitely return.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    source: "Booking.com"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Australia",
    rating: 5,
    text: "Completed my Advanced Open Water here. The instructors are patient, knowledgeable, and genuinely passionate. Best diving experience of my life!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    source: "PADI"
  },
  {
    id: 5,
    name: "Mia Johansson",
    location: "Sweden",
    rating: 5,
    text: "Solo female traveler here - felt completely safe and welcomed. The staff treated me like family. The yoga sessions and spa made this a truly holistic retreat.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    source: "TripAdvisor"
  }
]

export interface RoomType {
  id: number
  name: string
  size: string
  bed: string
  view: string
  maxGuests: number
  price: string
  image: string
  features: string[]
  description: string
  popular?: boolean
}

export const roomTypes: RoomType[] = [
  {
    id: 1,
    name: "Standard Garden View",
    size: "28 sqm",
    bed: "Queen or Twin",
    view: "Tropical Garden",
    maxGuests: 2,
    price: "3,200",
    image: resortImages.rooms.gardenView,
    features: ["Air conditioning", "Private bathroom", "Hot shower", "WiFi", "Mini fridge", "Safe"],
    description: "Cozy and comfortable rooms surrounded by lush tropical gardens, perfect for budget-conscious travelers.",
  },
  {
    id: 2,
    name: "Deluxe Garden View",
    size: "32 sqm",
    bed: "King or Twin",
    view: "Garden & Partial Sea",
    maxGuests: 2,
    price: "4,000",
    image: resortImages.rooms.modernBed,
    features: ["Air conditioning", "Bathtub", "Hot shower", "WiFi", "Mini bar", "Safe", "Smart TV"],
    description: "Spacious rooms with modern amenities and glimpses of the ocean through tropical foliage.",
    popular: true
  },
  {
    id: 3,
    name: "Deluxe Seaview",
    size: "35 sqm",
    bed: "King",
    view: "Ocean View",
    maxGuests: 2,
    price: "5,200",
    image: resortImages.rooms.oceanView,
    features: ["Air conditioning", "Bathtub", "Rain shower", "WiFi", "Mini bar", "Safe", "Smart TV", "Coffee machine"],
    description: "Wake up to stunning ocean views from your private balcony in these beautifully appointed rooms.",
  },
  {
    id: 4,
    name: "Premium Suite",
    size: "45 sqm",
    bed: "King",
    view: "Panoramic Ocean",
    maxGuests: 3,
    price: "7,500",
    image: resortImages.rooms.oceanView,
    features: ["Air conditioning", "Jacuzzi tub", "Rain shower", "WiFi", "Full mini bar", "Safe", "Smart TV", "Espresso machine"],
    description: "Our most luxurious accommodation with separate living area and breathtaking panoramic ocean views.",
  }
]

export interface GalleryImage {
  id: number
  src: string
  category: "diving" | "rooms" | "dining" | "spa" | "moments"
  alt: string
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: resortImages.diving.nudibranch1, category: "diving", alt: "Colorful coral reef" },
  { id: 2, src: resortImages.diving.nudibranch2, category: "diving", alt: "Underwater tropical scene" },
  { id: 3, src: resortImages.diving.seahorse, category: "diving", alt: "Marine life" },
  { id: 4, src: resortImages.diving.coralCanyon, category: "diving", alt: "Coral canyon" },
  { id: 5, src: resortImages.diving.turtle, category: "diving", alt: "Sea turtle" },
  { id: 6, src: resortImages.diving.diverShipwreck, category: "diving", alt: "Dive boat" },
  { id: 7, src: resortImages.rooms.oceanView, category: "rooms", alt: "Beach resort room" },
  { id: 8, src: resortImages.rooms.gardenView, category: "rooms", alt: "Spacious family room" },
  { id: 9, src: resortImages.amenities.restaurant, category: "dining", alt: "Beachfront dining" },
  { id: 10, src: resortImages.amenities.beachDining, category: "dining", alt: "Resort restaurant" },
  { id: 11, src: resortImages.amenities.spa, category: "spa", alt: "Spa relaxation area" },
  { id: 12, src: resortImages.amenities.massage, category: "spa", alt: "Spa treatments" },
  { id: 13, src: resortImages.people.yoga1, category: "moments", alt: "Yoga and wellness" },
  { id: 14, src: resortImages.people.couple1, category: "moments", alt: "Couple enjoying resort" },
  { id: 15, src: resortImages.resort.infinityPool, category: "moments", alt: "Resort infinity pool" },
  { id: 16, src: resortImages.resort.sunset, category: "moments", alt: "Tropical sunset" },
]

export const whatsappNumber = "+639189003644"

export interface ContactInfo {
  phone: string
  email: string
  emailSecondary: string
  address: string
  locationShort: string
  coordinates: {
    lat: number
    lng: number
  }
}

export const contactInfo: ContactInfo = {
  phone: "+63 918 900 3644",
  email: "asrianilao@gmail.com",
  emailSecondary: "info@theasri.com",
  address: "Sitio Balagbag Barangay Bagalangit, Batangas, Mabini, Philippines",
  locationShort: "Mabini, Batangas (Anilao)",
  coordinates: { lat: 13.708954, lng: 120.875386 }
}