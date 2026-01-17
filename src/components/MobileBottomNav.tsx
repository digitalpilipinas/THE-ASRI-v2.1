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
  
  // Auto-hide navigation on scroll
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    }, 4000);

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

  // Smart auto-hide navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // LEFT GROUP: Home, Services
  const leftNavItems: NavItem[] = [
    {
      name: 'HOME',
      path: '/',
      icon: Home,
      activeColor: '#0D7070'
    },
    {
      name: 'SERVICES',
      path: '/dive-services',
      icon: ConciergeBell,
      activeColor: '#7C9885'
    }
  ];

  // RIGHT GROUP: Gallery
  const rightNavItems: NavItem[] = [
    {
      name: 'GALLERY',
      path: '/gallery',
      icon: ImagePlus,
      activeColor: '#D4A373'
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
    setIsAutoRotate(false);
    navigate(currentBookState.route);
    
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
        className="relative flex flex-col items-center justify-center transition-all duration-300 flex-1 group py-2 overflow-hidden"
        aria-label={item.name}
        aria-current={active ? 'page' : undefined}
      >
        <div className="flex flex-col items-center">
          {/* Compact container 34px */}
          <div
            className={`
              relative w-[34px] h-[34px] rounded-lg overflow-hidden
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
            {/* Icon stays 18px (8px padding each side = perfect) */}
            <Icon 
              className="w-[18px] h-[18px] transition-all duration-300 group-hover:scale-110"
              strokeWidth={active ? 2.5 : 2}
              style={{ color: active ? item.activeColor : '#718096' }}
            />
          </div>

          <span
            className={`
              font-lato text-[9px] whitespace-nowrap transition-all duration-300 
              mt-2 mb-1 uppercase font-semibold
              ${active ? 'font-bold' : ''}
            `}
            style={{ color: active ? item.activeColor : '#718096' }}
          >
            {item.name}
          </span>

          {/* Active gradient line */}
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

      {/* PREMIUM BOTTOM NAVIGATION - Auto-hide with liquid glass */}
      <nav
        className={`
          lg:hidden fixed bottom-0 left-0 right-0 z-40
          transition-transform duration-300 ease-out
          ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        `}
        aria-label="Mobile bottom navigation"
      >
        {/* Premium liquid glass bg-white/65 */}
        <div 
          className="
            bg-white/65 backdrop-blur-2xl
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

            {/* CENTER: PREMIUM FAB BUTTON - 60px with brand-colored label */}
            <button
              onClick={handleBookClick}
              className="relative flex flex-col items-center justify-center transition-all duration-300 flex-1 group py-2"
              aria-label={`Book now - ${currentBookState.label} for ${currentBookState.persona}`}
            >
              {/* Elevated -mt-8 (32px up, 60px button = 47% outside border) */}
              <div className="relative -mt-8">
                {/* Premium white border ring */}
                <div className="relative">
                  {/* FIX #2: White ring scale-118 (proportional to 60px) */}
                  <div 
                    className="absolute inset-0 bg-white rounded-full scale-118" 
                    style={{
                      boxShadow: '0 6px 24px rgba(255, 255, 255, 0.5)'
                    }} 
                  />
                  
                  {/* FIX #2: FAB enlarged to 60px (47% outside border) */}
                  <div
                    className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${currentBookState.color}, ${currentBookState.color}dd)`,
                      boxShadow: `
                        0 12px 40px ${currentBookState.color}50,
                        0 6px 16px ${currentBookState.color}30,
                        inset 0 2px 8px rgba(255, 255, 255, 0.5)
                      `
                    }}
                  >
                    <currentBookState.icon className="w-[22px] h-[22px] text-white" strokeWidth={2.5} />
                  </div>
                </div>
                
                {/* FIX #1: Brand-colored label with premium readability */}
                <span 
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-lato text-[9px] whitespace-nowrap transition-colors duration-500 uppercase"
                  style={{ 
                    color: currentBookState.color,
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textShadow: `
                      -1px -1px 0 white,
                      1px -1px 0 white,
                      -1px 1px 0 white,
                      1px 1px 0 white,
                      0 2px 4px rgba(0, 0, 0, 0.25),
                      0 0 12px ${currentBookState.color}40
                    `
                  }}
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
              className="relative flex flex-col items-center justify-center transition-all duration-300 flex-1 group py-2 overflow-hidden"
              aria-label="Menu"
              aria-expanded={showMoreMenu}
            >
              <div className="flex flex-col items-center">
                {/* Compact 34px container */}
                <div
                  className={`
                    relative w-[34px] h-[34px] rounded-lg overflow-hidden
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
                      className="w-[18px] h-[18px] text-[#FF6B6B] transition-all duration-300"
                      strokeWidth={2.5}
                    />
                  ) : (
                    <Menu 
                      className="w-[18px] h-[18px] text-[#718096] group-hover:scale-110 transition-all duration-300"
                      strokeWidth={2}
                    />
                  )}
                </div>

                <span
                  className={`
                    font-lato text-[9px] transition-all duration-300 
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
