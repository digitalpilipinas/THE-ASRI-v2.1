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
  const [showMoreMenu, setShowMoreMenu] = useState<boolean>(false);

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

      {/* FIXED BOTTOM NAV - Always visible for high-intent resort users */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40"
        aria-label="Mobile bottom navigation"
      >
        {/* ENHANCED GLASSMORPHISM CONTAINER - Premium Resort Feel */}
        <div 
          className="
            bg-white/75 backdrop-blur-2xl
            border-t border-white/30
            pb-safe
          "
          style={{
            boxShadow: '0 -12px 40px rgba(13, 112, 112, 0.12)'
          }}
        >
          <div className="flex items-center justify-around h-20 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative flex flex-col items-center justify-center transition-all duration-300 flex-1 group py-3"
                  aria-label={item.name}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.isPrimary ? (
                    // PRIMARY CTA - ELEVATED BOOK BUTTON
                    <div className="relative -mt-8">
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
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-lato text-[11px] font-bold text-[#FF6B6B] whitespace-nowrap">
                        {item.name}
                      </span>

                      {/* Active indicator */}
                      {active && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent rounded-full" />
                      )}
                    </div>
                  ) : (
                    // STANDARD ITEMS - Enhanced Glass Style
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`
                          relative w-14 h-14 rounded-2xl
                          flex items-center justify-center
                          transition-all duration-300
                          ${active 
                            ? 'bg-gradient-to-br from-white/60 to-white/40 scale-100' 
                            : 'bg-transparent group-hover:bg-white/20'
                          }
                        `}
                        style={active ? {
                          boxShadow: `
                            inset 3px 3px 10px rgba(13, 112, 112, 0.15),
                            inset -3px -3px 10px rgba(255, 255, 255, 0.7),
                            0 4px 12px ${item.activeColor}40
                          `
                        } : {}}
                      >
                        <Icon 
                          className="w-7 h-7 transition-all duration-300 group-hover:scale-110"
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

                      {/* Label - More spacing */}
                      <span
                        className={`
                          font-lato text-[11px] whitespace-nowrap transition-all duration-300 mt-1
                          ${active ? 'font-bold scale-105' : 'font-semibold'}
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
              className="relative flex flex-col items-center justify-center transition-all duration-300 flex-1 group py-3"
              aria-label="Menu"
              aria-expanded={showMoreMenu}
            >
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`
                    relative w-14 h-14 rounded-2xl
                    flex items-center justify-center
                    transition-all duration-300
                    ${showMoreMenu 
                      ? 'bg-gradient-to-br from-white/60 to-white/40 scale-100' 
                      : 'bg-transparent group-hover:bg-white/20'
                    }
                  `}
                  style={showMoreMenu ? {
                    boxShadow: `
                      inset 3px 3px 10px rgba(13, 112, 112, 0.15),
                      inset -3px -3px 10px rgba(255, 255, 255, 0.7),
                      0 4px 12px rgba(255, 107, 107, 0.25)
                    `
                  } : {}}
                >
                  {showMoreMenu ? (
                    <X 
                      className="w-7 h-7 text-[#FF6B6B] transition-all duration-300"
                      strokeWidth={2.5}
                    />
                  ) : (
                    <Menu 
                      className="w-7 h-7 text-[#718096] group-hover:scale-110 transition-all duration-300"
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
                    font-lato text-[11px] transition-all duration-300 mt-1
                    ${showMoreMenu ? 'font-bold scale-105 text-[#FF6B6B]' : 'font-semibold text-[#718096]'}
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