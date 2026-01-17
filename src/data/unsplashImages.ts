/**
 * Curated Unsplash Images for The Asri Dive & Leisure Resort
 * 
 * High-quality placeholder images from Unsplash for:
 * - Hero sections
 * - Room types
 * - Diving activities
 * - Gallery showcases
 * 
 * All images are optimized for web with:
 * - Appropriate dimensions (w parameter)
 * - Quality setting (q=80 for balanced quality/performance)
 * - Resort-relevant tropical/diving themes
 */

export const UNSPLASH_IMAGES = {
  hero: {
    main: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80', // Tropical beach resort panorama
    diving: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80', // Scuba diver underwater
    resort: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80', // Luxury resort pool
  },
  
  rooms: {
    deluxe: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80', // Beach resort room with ocean view
    suite: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', // Luxury suite interior
    family: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80', // Spacious family room
    beachfront: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', // Beachfront bungalow
    interior: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', // Hotel room interior
  },
  
  diving: {
    underwater: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80', // Tropical underwater scene
    equipment: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', // Dive equipment setup
    boat: 'https://images.unsplash.com/photo-1534777410147-084a460870fc?w=800&q=80', // Dive boat on tropical waters
    coral: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80', // Colorful coral reef
    diver: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80', // Scuba diver silhouette
    marine: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', // Marine life
  },
  
  amenities: {
    pool: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', // Resort infinity pool
    restaurant: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80', // Beachfront restaurant
    spa: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', // Spa relaxation area
    lounge: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80', // Hotel lounge
  },
  
  gallery: [
    'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80', // Beach panorama
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', // Diving action
    'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=600&q=80', // Tropical sunset
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80', // Pool area
    'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&q=80', // Underwater beauty
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80', // Room interior
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80', // Luxury suite
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80', // Dining experience
    'https://images.unsplash.com/photo-1534777410147-084a460870fc?w=600&q=80', // Boat excursion
    'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&q=80', // Coral reef
    'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600&q=80', // Diving adventure
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', // Beachfront view
  ],
  
  about: {
    team: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80', // Friendly resort staff
    facility: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', // Resort facilities
    location: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', // Anilao-style coastal beauty
  },
  
  contact: {
    map: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80', // Tropical location map concept
    frontdesk: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&q=80', // Hotel reception
  },
} as const;

/**
 * Helper function to get optimized image URL with custom parameters
 * @param url - Base Unsplash image URL
 * @param width - Desired width (default: 800)
 * @param quality - Image quality 1-100 (default: 80)
 * @returns Optimized image URL
 */
export const optimizeImage = (
  url: string, 
  width: number = 800, 
  quality: number = 80
): string => {
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?w=${width}&q=${quality}`;
};

/**
 * Image loading priorities for performance optimization
 */
export const IMAGE_LOADING = {
  EAGER: 'eager' as const,  // Hero/above-fold images
  LAZY: 'lazy' as const,    // Below-fold images
} as const;
