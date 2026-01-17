import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Ship, Sparkles, Camera, Menu, X, LucideIcon } from 'lucide-react';
import MoreMenu from './MoreMenu';

interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
  activeColor: string;
  isPrimary?: boolean;
}

const MobileBottomNav = () => {
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
      activeColor: '#0D7070' // Deep Teal
    },
    {
      name: 'Dive',
      path: '/dive-services',
      icon: Ship,
      activeColor: '#7C9885' // Bamboo Green
    },
    {
      name: 'Book',
      path: '/rates',
      icon: Sparkles,
      activeColor: '#FF6B6B', // Living Coral
      isPrimary: true
    },
    {
      name: 'Photos',
      path: '/gallery',
      icon: Camera,
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

  return (
    <>
      <MoreMenu isOpen={showMoreMenu} onClose={() => setShowMoreMenu(false)} />

      <nav
        className={`
          lg:hidden fixed bottom-0 left-0 right-0 z-40
          transition-transform duration-300 ease-out
          ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        `}
        aria-label="Mobile bottom navigation"
      >
        {/* GLASSMORPHISM CONTAINER - Premium Feel */}
        <div 
          className="
            bg-white/80 backdrop-blur-xl
            border-t border-white/20
            pb-safe
          "
          style={{
            boxShadow: '0 -8px 32px rgba(13, 112, 112, 0.08)'
          }}
        >
          <div className="flex items-center justify-around h-16 px-2">
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
                    // PRIMARY CTA - ELEVATED BOOK BUTTON
                    <div className="relative -mt-6">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/20 to-transparent blur-xl rounded-full" />
                      
                      {/* Main button */}
                      <div
                        className={`
                          relative w-16 h-16 rounded-full
                          bg-gradient-to-br from-[#FF6B6B] to-[#ee5050]
                          flex items-center justify-center
                          transition-all duration-300
                          ${active ? 'scale-110' : 'scale-100'}
                          group-hover:scale-115
                          group-active:scale-95
                        `}
                        style={{
                          boxShadow: '0 8px 32px rgba(255, 107, 107, 0.4)'
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                      </div>
                      
                      {/* Label */}
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-lato text-[10px] font-bold text-[#FF6B6B] whitespace-nowrap">
                        {item.name}
                      </span>

                      {/* Active indicator */}
                      {active && (
                        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent rounded-full" />
                      )}
                    </div>
                  ) : (
                    // STANDARD ITEMS - Glass Style
                    <div className="flex flex-col items-center gap-1 py-2">
                      <div
                        className={`
                          relative w-12 h-12 rounded-2xl
                          flex items-center justify-center
                          transition-all duration-300
                          ${active 
                            ? 'bg-white/40 backdrop-blur-md scale-95' 
                            : 'bg-transparent group-hover:bg-white/20'
                          }
                        `}
                        style={active ? {
                          boxShadow: 'inset 2px 2px 8px rgba(13, 112, 112, 0.1), inset -2px -2px 8px rgba(255, 255, 255, 0.5)'
                        } : {}}
                      >
                        <Icon 
                          className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
                          strokeWidth={active ? 2.5 : 2}
                          style={{ color: active ? item.activeColor : '#718096' }}
                        />
                        
                        {/* Active pulse dot */}
                        {active && (
                          <span 
                            className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: item.activeColor }}
                          />
                        )}
                      </div>

                      {/* Label */}
                      <span
                        className={`
                          font-lato text-[10px] whitespace-nowrap transition-all duration-300
                          ${active ? 'font-bold scale-105' : 'font-normal'}
                        `}
                        style={{ color: active ? item.activeColor : '#718096' }}
                      >
                        {item.name}
                      </span>

                      {/* Active gradient line */}
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

            {/* MENU BUTTON - Hamburger Icon */}
            <button
              onClick={handleMoreClick}
              className="relative flex flex-col items-center justify-center transition-all duration-300 flex-1 group"
              aria-label="Menu"
              aria-expanded={showMoreMenu}
            >
              <div className="flex flex-col items-center gap-1 py-2">
                <div
                  className={`
                    relative w-12 h-12 rounded-2xl
                    flex items-center justify-center
                    transition-all duration-300
                    ${showMoreMenu 
                      ? 'bg-white/40 backdrop-blur-md scale-95' 
                      : 'bg-transparent group-hover:bg-white/20'
                    }
                  `}
                  style={showMoreMenu ? {
                    boxShadow: 'inset 2px 2px 8px rgba(13, 112, 112, 0.1), inset -2px -2px 8px rgba(255, 255, 255, 0.5)'
                  } : {}}
                >
                  {showMoreMenu ? (
                    <X 
                      className="w-6 h-6 text-[#FF6B6B] transition-all duration-300"
                      strokeWidth={2.5}
                    />
                  ) : (
                    <Menu 
                      className="w-6 h-6 text-[#718096] group-hover:scale-110 transition-all duration-300"
                      strokeWidth={2}
                    />
                  )}
                  
                  {/* Active pulse dot */}
                  {showMoreMenu && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF6B6B] rounded-full animate-pulse" />
                  )}
                </div>

                {/* Label */}
                <span
                  className={`
                    font-lato text-[10px] transition-all duration-300
                    ${showMoreMenu ? 'font-bold scale-105 text-[#FF6B6B]' : 'font-normal text-[#718096]'}
                  `}
                >
                  Menu
                </span>

                {/* Active gradient line */}
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