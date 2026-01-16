import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Waves, Sparkles, Image, MoreVertical, X, LucideIcon } from 'lucide-react';
import MoreMenu from './MoreMenu';

interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
  activeColor: string;
  isPrimary?: boolean;
}

const MobileBottomNav = (): JSX.Element => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [showMoreMenu, setShowMoreMenu] = useState<boolean>(false);

  // Hide nav on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems: NavItem[] = [
    {
      name: 'Home',
      path: '/',
      icon: Home,
      activeColor: '#0D7070'
    },
    {
      name: 'Dive Courses',
      path: '/dive-services',
      icon: Waves,
      activeColor: '#7C9885'
    },
    {
      name: 'Book Now',
      path: '/rates',
      icon: Sparkles,
      activeColor: '#FF6B6B',
      isPrimary: true
    },
    {
      name: 'Gallery',
      path: '/gallery',
      icon: Image,
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

  return (
    <>
      <MoreMenu isOpen={showMoreMenu} onClose={() => setShowMoreMenu(false)} />

      <nav
        className={`
          lg:hidden fixed bottom-0 left-0 right-0 z-40
          transition-transform duration-300
          ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        `}
        aria-label="Mobile bottom navigation"
      >
        {/* Wave Divider */}
        <div className="absolute -top-4 left-0 right-0 h-4 overflow-hidden">
          <svg 
            viewBox="0 0 1200 24" 
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,12 Q150,0 300,12 T600,12 T900,12 T1200,12 L1200,24 L0,24 Z" 
              fill="#F5F1E8"
              className="drop-shadow-lg"
            />
            <path 
              d="M0,12 Q150,0 300,12 T600,12 T900,12 T1200,12" 
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0D7070" stopOpacity="0.6" />
                <stop offset="25%" stopColor="#7C9885" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#D4A373" stopOpacity="0.6" />
                <stop offset="75%" stopColor="#7C9885" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0D7070" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Navigation Container */}
        <div className="bg-[#F5F1E8] border-t border-[#E6EBE8] pb-safe" style={{
          boxShadow: '0 -4px 16px rgba(13, 112, 112, 0.1)'
        }}>
          <div className="flex items-end justify-around h-16 px-2 relative">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative flex flex-col items-center justify-center transition-all duration-300 flex-1 group"
                  aria-label={item.name}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.isPrimary ? (
                    <div className="relative -mt-6">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/30 to-transparent blur-xl rounded-full scale-150" />
                      
                      <div
                        className={`
                          relative w-14 h-14 rounded-full
                          bg-gradient-to-br from-[#FF6B6B] to-[#ee5050]
                          shadow-2xl
                          flex items-center justify-center
                          transition-all duration-300
                          ${active ? 'scale-110' : 'scale-100'}
                          group-hover:scale-110
                          group-active:scale-95
                        `}
                      >
                        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" style={{ animationDuration: '2s' }} />
                        <Icon className="w-7 h-7 text-white relative z-10" strokeWidth={2.5} />
                      </div>
                      
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-lato text-[10px] font-bold whitespace-nowrap text-[#FF6B6B]">
                        {item.name}
                      </span>

                      {active && (
                        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent rounded-full" />
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-0.5 py-2">
                      <div
                        className={`
                          relative w-11 h-11 rounded-2xl
                          flex items-center justify-center
                          transition-all duration-300
                          ${active 
                            ? 'bg-[#E6EBE8] scale-95' 
                            : 'bg-transparent group-hover:bg-[#E6EBE8]/50'
                          }
                        `}
                        style={active ? {
                          boxShadow: 'inset 4px 4px 8px rgba(209, 209, 209, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.9)'
                        } : {}}
                      >
                        <Icon 
                          className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
                          strokeWidth={active ? 2.5 : 2}
                          style={{ color: active ? item.activeColor : '#718096' }}
                        />
                        
                        {active && (
                          <span 
                            className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: item.activeColor }}
                          />
                        )}
                      </div>

                      <span
                        className={`
                          font-lato text-[10px] whitespace-nowrap transition-all duration-300
                          ${active ? 'font-bold scale-105' : 'font-normal'}
                        `}
                        style={{ color: active ? item.activeColor : '#718096' }}
                      >
                        {item.name}
                      </span>

                      {active && (
                        <div 
                          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                          style={{ 
                            background: `linear-gradient(90deg, transparent, ${item.activeColor}, transparent)` 
                          }}
                        />
                      )}
                    </div>
                  )}
                </Link>
              );
            })}

            {/* More Button */}
            <button
              onClick={handleMoreClick}
              className="relative flex flex-col items-center justify-center transition-all duration-300 flex-1 group"
              aria-label="More options"
              aria-expanded={showMoreMenu}
            >
              <div className="flex flex-col items-center gap-0.5 py-2">
                <div
                  className={`
                    relative w-11 h-11 rounded-2xl
                    flex items-center justify-center
                    transition-all duration-300
                    ${showMoreMenu 
                      ? 'bg-[#E6EBE8] scale-95' 
                      : 'bg-transparent group-hover:bg-[#E6EBE8]/50'
                    }
                  `}
                  style={showMoreMenu ? {
                    boxShadow: 'inset 4px 4px 8px rgba(209, 209, 209, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.9)'
                  } : {}}
                >
                  {showMoreMenu ? (
                    <X 
                      className="w-6 h-6 text-[#FF6B6B] transition-all duration-300"
                      strokeWidth={2.5}
                    />
                  ) : (
                    <MoreVertical 
                      className="w-6 h-6 text-[#718096] group-hover:scale-110 transition-all duration-300"
                      strokeWidth={2}
                    />
                  )}
                  
                  {showMoreMenu && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF6B6B] rounded-full animate-pulse" />
                  )}
                </div>

                <span
                  className={`
                    font-lato text-[10px] transition-all duration-300
                    ${showMoreMenu ? 'font-bold scale-105 text-[#FF6B6B]' : 'font-normal text-[#718096]'}
                  `}
                >
                  {showMoreMenu ? 'Close' : 'More'}
                </span>

                {showMoreMenu && (
                  <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent rounded-full" />
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