import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, ConciergeBell, ImagePlus, Menu, X, LucideIcon, Compass, Flower2, Waves } from 'lucide-react';
import MoreMenu from '@/components/MoreMenu';

interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
  activeColor: string;
}

interface BookState {
  icon: LucideIcon;
  label: string;
  route: string;
  persona: string;
  color: string;
}

/**
 * Three rotating states for the Book FAB button
 * Each represents a different user persona from THE-ASRI-BLUEPRINT
 */
const BOOK_STATES: BookState[] = [
  {
    icon: Waves,
    label: 'DIVE',
    route: '/dive-services',
    persona: 'Obsessed Diver',
    color: '#0D7070' // Deep Teal
  },
  {
    icon: Compass,
    label: 'EXPLORE',
    route: '/rates',
    persona: 'Aspiring Explorer',
    color: '#7C9885' // Bamboo Green
  },
  {
    icon: Flower2,
    label: 'UNWIND',
    route: '/accommodations',
    persona: 'Serenity Seeker',
    color: '#D4A373' // Warm Sand
  }
];

const MobileBottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMoreMenu, setShowMoreMenu] = useState<boolean>(false);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  const currentBookState = BOOK_STATES[currentBookIndex];

  // Check for reduced motion preference (accessibility)
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // Auto-rotation logic - 4 seconds per state
  useEffect(() => {
    if (!isAutoRotate || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentBookIndex((prev) => (prev + 1) % BOOK_STATES.length);
    }, 4000); // 4 seconds per state

    return () => clearInterval(interval);
  }, [isAutoRotate, prefersReducedMotion]);

  // Pause rotation when tab is hidden (battery saving)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsAutoRotate(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // LEFT GROUP: Home, Services
  const leftNavItems: NavItem[] = [
    {
      name: 'HOME',
      path: '/',
      icon: Home,
      activeColor: '#0D7070' // Deep Teal
    },
    {
      name: 'SERVICES', // Changed from DIVE
      path: '/dive-services',
      icon: ConciergeBell, // Changed from Waves
      activeColor: '#7C9885' // Bamboo Green
    }
  ];

  // RIGHT GROUP: Gallery
  const rightNavItems: NavItem[] = [
    {
      name: 'GALLERY',
      path: '/gallery',
      icon: ImagePlus,
      activeColor: '#D4A373' // Soft Sand
    }
  ];

  const isActive = (path: string): boolean => location.pathname === path;

  const handleMoreClick = (): void => {
    setShowMoreMenu(!showMoreMenu);
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  const handleBookClick = (): void => {
    // Stop auto-rotation when user clicks (user took control)
    setIsAutoRotate(false);
    navigate(currentBookState.route);
    
    // Haptic feedback (mobile only)
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  const renderNavItem = (item: NavItem) => {
    const Icon = item.icon;
    const active = isActive(item.path);

    return (
      <Link
        key={item.path}
        to={item.path}
        className="relative flex flex-col items-center justify-center transition-all duration-300 flex-1 group py-2"
        aria-label={item.name}
        aria-current={active ? 'page' : undefined}
      >
        <div className="flex flex-col items-center">
          {/* FIX #1: Reduced container size w-14 h-14 → w-11 h-11 */}
          <div
            className={`
              relative w-11 h-11 rounded-xl
              flex items-center justify-center
              transition-all duration-300
              ${active 
                ? 'bg-gradient-to-br from-white/60 to-white/40' 
                : 'bg-transparent group-hover:bg-white/20'
              }
            `}
            style={active ? {
              boxShadow: `
                inset 2px 2px 8px rgba(13, 112, 112, 0.15),
                inset -2px -2px 8px rgba(255, 255, 255, 0.7),
                0 2px 8px ${item.activeColor}40
              `
            } : {}}
          >
            {/* FIX #1: Reduced icon size w-7 h-7 → w-5 h-5 */}
            <Icon 
              className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
              strokeWidth={active ? 2.5 : 2}
              style={{ color: active ? item.activeColor : '#718096' }}
            />
            
            {/* FIX #2: REMOVED pulse dot - was causing overflow */}
          </div>

          {/* FIX #1: Reduced text spacing mt-3 mb-2 → mt-2 mb-1 */}
          {/* FIX #2: Removed scale-105 - was causing overflow */}
          <span
            className={`
              font-lato text-[10px] whitespace-nowrap transition-all duration-300 
              mt-2 mb-1 uppercase font-semibold
              ${active ? 'font-bold' : ''}
            `}
            style={{ color: active ? item.activeColor : '#718096' }}
          >
            {item.name}
          </span>

          {/* Active gradient line - kept w-8 and -bottom-6 */}
          {active && (
            <div 
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
              style={{ 
                background: `linear-gradient(90deg, transparent, ${item.activeColor}, transparent)` 
              }}
            />
          )}
        </div>
      </Link>
    );
  };

  return (
    <>
      <MoreMenu isOpen={showMoreMenu} onClose={() => setShowMoreMenu(false)} />

      {/* FIXED BOTTOM NAV - Universal across all pages */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40"
        aria-label="Mobile bottom navigation"
      >
        {/* OPTIMIZED GLASSMORPHISM CONTAINER */}
        {/* FIX #1: Reduced height h-20 → h-16, pb-4 → pb-2 */}
        <div 
          className="
            bg-white/75 backdrop-blur-2xl
            border-t border-white/30
            pb-safe pb-2
          "
          style={{
            boxShadow: '0 -12px 40px rgba(13, 112, 112, 0.12)'
          }}
        >
          <div className="flex items-center justify-around h-16 px-4">
            {/* LEFT GROUP: Home, Services */}
            {leftNavItems.map(renderNavItem)}

            {/* CENTER: AUTO-ROTATING BOOK FAB BUTTON */}
            <button
              onClick={handleBookClick}
              className="relative flex flex-col items-center justify-center transition-all duration-300 flex-1 group py-2"
              aria-label={`Book now - ${currentBookState.label} for ${currentBookState.persona}`}
            >
              <div className="relative -mt-6">
                {/* FIX #4: REMOVED glow effect - was bleeding under text */}
                
                {/* Main button with white border */}
                <div className="relative">
                  {/* White border ring */}
                  <div className="absolute inset-0 bg-white rounded-full scale-110" style={{
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)'
                  }} />
                  
                  {/* FIX #1: Reduced FAB size w-16 h-16 → w-14 h-14 (56px) */}
                  <div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${currentBookState.color}, ${currentBookState.color}dd)`,
                      boxShadow: `0 6px 24px ${currentBookState.color}40, inset 0 2px 4px rgba(255, 255, 255, 0.4)`
                    }}
                  >
                    {/* FIX #1: Reduced FAB icon w-7 h-7 → w-6 h-6 */}
                    <currentBookState.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                
                {/* Dynamic label - uppercase */}
                <span 
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-lato text-[10px] font-bold whitespace-nowrap transition-colors duration-500 uppercase"
                  style={{ color: currentBookState.color }}
                >
                  {currentBookState.label}
                </span>

                {/* Active indicator for FAB */}
                {isActive(currentBookState.route) && (
                  <div 
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full transition-colors duration-500"
                    style={{ 
                      background: `linear-gradient(90deg, transparent, ${currentBookState.color}, transparent)` 
                    }}
                  />
                )}
              </div>
            </button>

            {/* RIGHT GROUP: Gallery */}
            {rightNavItems.map(renderNavItem)}

            {/* MENU BUTTON */}
            <button
              onClick={handleMoreClick}
              className="relative flex flex-col items-center justify-center transition-all duration-300 flex-1 group py-2"
              aria-label="Menu"
              aria-expanded={showMoreMenu}
            >
              <div className="flex flex-col items-center">
                {/* FIX #1: Reduced size w-14 h-14 → w-11 h-11 */}
                <div
                  className={`
                    relative w-11 h-11 rounded-xl
                    flex items-center justify-center
                    transition-all duration-300
                    ${showMoreMenu 
                      ? 'bg-gradient-to-br from-white/60 to-white/40' 
                      : 'bg-transparent group-hover:bg-white/20'
                    }
                  `}
                  style={showMoreMenu ? {
                    boxShadow: `
                      inset 2px 2px 8px rgba(13, 112, 112, 0.15),
                      inset -2px -2px 8px rgba(255, 255, 255, 0.7),
                      0 2px 8px rgba(255, 107, 107, 0.25)
                    `
                  } : {}}
                >
                  {showMoreMenu ? (
                    <X 
                      className="w-5 h-5 text-[#FF6B6B] transition-all duration-300"
                      strokeWidth={2.5}
                    />
                  ) : (
                    <Menu 
                      className="w-5 h-5 text-[#718096] group-hover:scale-110 transition-all duration-300"
                      strokeWidth={2}
                    />
                  )}
                  
                  {/* FIX #2: REMOVED pulse dot */}
                </div>

                {/* FIX #1: Reduced spacing, FIX #2: Removed scale */}
                <span
                  className={`
                    font-lato text-[10px] transition-all duration-300 
                    mt-2 mb-1 uppercase font-semibold
                    ${showMoreMenu ? 'font-bold text-[#FF6B6B]' : 'text-[#718096]'}
                  `}
                >
                  MENU
                </span>

                {/* Active gradient line */}
                {showMoreMenu && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent rounded-full" />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;
