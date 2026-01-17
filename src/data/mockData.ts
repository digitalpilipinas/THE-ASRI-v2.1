// Mock data for The Asri Dive & Leisure Resort

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
    coralReef: string
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
    homepage: "https://images.unsplash.com/photo-1570981895699-790aeb2e6a0c?w=1920&q=80",
    about: "https://images.unsplash.com/photo-1703108783854-a3f23dbaab95?w=1920&q=80",
    diveServices: "https://images.unsplash.com/photo-1729746402321-cc79f99964f6?w=1920&q=80",
    accommodations: "https://images.unsplash.com/photo-1706908271751-93cf105f34c4?w=1920&q=80",
    contact: "https://images.unsplash.com/photo-1577158364939-ac7357a2884e?w=1920&q=80",
    gallery: "https://images.unsplash.com/photo-1699221696360-b41d820ba136?w=1920&q=80",
  },
  resort: {
    infinityPool: "https://images.unsplash.com/photo-1703108783854-a3f23dbaab95?w=1200&q=80",
    beachLoungers: "https://images.unsplash.com/photo-1583602851714-571edbce0989?w=1200&q=80",
    aerialView: "https://images.unsplash.com/photo-1729707690998-1d4c5d755c0f?w=1200&q=80",
    sunset: "https://images.unsplash.com/photo-1699221696360-b41d820ba136?w=1200&q=80",
  },
  diving: {
    nudibranch1: "https://images.unsplash.com/photo-1759319580664-daef28e6a754?w=800&q=80",
    nudibranch2: "https://images.unsplash.com/photo-1759322859265-5eeac4a2cd30?w=800&q=80",
    seahorse: "https://images.unsplash.com/photo-1761756640708-ce2cb6798661?w=800&q=80",
    coralCanyon: "https://images.unsplash.com/photo-1628371217613-714161455f6b?w=800&q=80",
    fishSchool: "https://images.unsplash.com/photo-1644027616320-b378fc57f78e?w=800&q=80",
    turtle: "https://images.unsplash.com/photo-1600342709088-bb70d3371bcd?w=800&q=80",
    coralReef: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1920&q=80",
    diverShipwreck: "https://images.unsplash.com/photo-1729746402321-cc79f99964f6?w=800&q=80",
    diverUnderwater: "https://images.unsplash.com/photo-1716406756834-76996f3b8dee?w=800&q=80",
  },
  rooms: {
    oceanView: "https://images.unsplash.com/photo-1706908271751-93cf105f34c4?w=1200&q=80",
    gardenView: "https://images.unsplash.com/photo-1582473788025-c058a699e488?w=1200&q=80",
    modernBed: "https://images.unsplash.com/photo-1600671012016-e5890d87f804?w=1200&q=80",
  },
  amenities: {
    spa: "https://images.unsplash.com/photo-1715242563833-946f4b811399?w=1200&q=80",
    flowers: "https://images.unsplash.com/photo-1760507971904-9b0fbef6abb3?w=800&q=80",
    massage: "https://images.unsplash.com/photo-1740748776786-74365e440be4?w=1200&q=80",
    pool: "https://images.unsplash.com/photo-1690000437616-371abd30e3a0?w=1200&q=80",
    restaurant: "https://images.unsplash.com/photo-1764687274813-82d3f6e422d1?w=1200&q=80",
    beachDining: "https://images.unsplash.com/photo-1761910990269-3963ec34827a?w=1200&q=80",
  },
  people: {
    instructor1: "https://images.unsplash.com/photo-1563968016-9786a660a64d?w=800&q=80",
    instructor2: "https://images.unsplash.com/photo-1645059986162-d077871822b6?w=800&q=80",
    couple1: "https://images.unsplash.com/photo-1766735325790-5ba68348b232?w=800&q=80",
    couple2: "https://images.unsplash.com/photo-1726252799602-b443b78a3a0b?w=800&q=80",
    yoga1: "https://images.unsplash.com/photo-1758797315487-b3b225dff7d8?w=800&q=80",
    yoga2: "https://images.unsplash.com/photo-1767452985135-b2b1be80113f?w=800&q=80",
    poolActivity: "https://images.unsplash.com/photo-1707575561373-d868bc04d593?w=800&q=80",
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
  { id: 1, src: resortImages.diving.nudibranch1, category: "diving", alt: "Purple nudibranch macro" },
  { id: 2, src: resortImages.diving.nudibranch2, category: "diving", alt: "Blue nudibranch" },
  { id: 3, src: resortImages.diving.seahorse, category: "diving", alt: "Seahorse camouflaged" },
  { id: 4, src: resortImages.diving.coralCanyon, category: "diving", alt: "Coral canyon" },
  { id: 5, src: resortImages.diving.turtle, category: "diving", alt: "Sea turtle" },
  { id: 6, src: resortImages.diving.diverShipwreck, category: "diving", alt: "Diver on shipwreck" },
  { id: 7, src: resortImages.rooms.oceanView, category: "rooms", alt: "Ocean view room" },
  { id: 8, src: resortImages.rooms.gardenView, category: "rooms", alt: "Garden view room" },
  { id: 9, src: resortImages.amenities.restaurant, category: "dining", alt: "Beachfront dining" },
  { id: 10, src: resortImages.amenities.beachDining, category: "dining", alt: "Romantic beach dinner" },
  { id: 11, src: resortImages.amenities.spa, category: "spa", alt: "Spa infinity pool" },
  { id: 12, src: resortImages.amenities.massage, category: "spa", alt: "Massage treatment" },
  { id: 13, src: resortImages.people.yoga1, category: "moments", alt: "Group yoga class" },
  { id: 14, src: resortImages.people.couple1, category: "moments", alt: "Couple on beach" },
  { id: 15, src: resortImages.resort.infinityPool, category: "moments", alt: "Resort infinity pool" },
  { id: 16, src: resortImages.resort.sunset, category: "moments", alt: "Sunset palm trees" },
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