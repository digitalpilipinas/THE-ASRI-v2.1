import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface NavigationItem {
  name: string;
  path: string;
  fullName: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation: NavigationItem[] = [
    { name: 'Home', path: '/', fullName: 'Home' },
    { name: 'About', path: '/about', fullName: 'About Us' },
    { name: 'Services', path: '/dive-services', fullName: 'Dive Services' },
    { name: 'Rooms', path: '/accommodations', fullName: 'Accommodations' },
    { name: 'Rates', path: '/rates', fullName: 'Rates & Packages' },
    { name: 'Gallery', path: '/gallery', fullName: 'Gallery' },
    { name: 'Contact', path: '/contact', fullName: 'Contact Us' },
  ];

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <header 
      className={`
        fixed z-40 transition-all duration-300
        ${isScrolled 
          ? 'top-4 left-4 right-4' 
          : 'top-0 left-0 right-0'
        }
      `}
    >
      <div 
        className={`
          transition-all duration-300
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg rounded-2xl' 
            : 'bg-gradient-to-b from-[#1A2332]/40 to-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO SECTION - Dynamic Logo Based on Scroll State */}
            <Link to="/" className="flex items-center group gap-3">
              {/* Logo with Dynamic Source */}
              <img 
                src={isScrolled 
                  ? '/images/logo/THE-ASRI-LOGO.svg'
                  : '/images/logo/THE-ASRI-LOGO-BG.svg'
                }
                alt="The Asri Logo" 
                className="h-10 w-auto md:h-12 rounded-xl transition-all duration-300 group-hover:scale-105 group-active:scale-95"
              />
              
              {/* Brand Text Stack - Enhanced Legibility */}
              <div className="flex flex-col">
                <span className={`
                  text-lg md:text-xl font-bold font-playfair tracking-tight leading-none
                  transition-colors duration-300
                  ${isScrolled ? 'text-[#0D7070]' : 'text-white'}
                `}>
                  The Asri
                </span>
                <span className={`
                  text-[9px] md:text-[10px] font-semibold font-lato tracking-[0.25em] leading-none mt-1.5
                  transition-colors duration-300
                  ${isScrolled ? 'text-[#4A5568]' : 'text-white/80'}
                `}>
                  DIVE & LEISURE RESORT
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION - Hidden on Mobile (FAB handles nav) */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  title={item.fullName}
                  className={`
                    relative px-4 py-2 rounded-xl font-lato text-sm font-semibold
                    transition-all duration-300 group
                    ${isActive(item.path) 
                      ? 'text-[#0D7070] bg-[#E6EBE8] shadow-sm' 
                      : isScrolled
                        ? 'text-[#4A5568] hover:text-[#0D7070] hover:bg-[#E6EBE8]/70'
                        : 'text-white hover:text-white hover:bg-white/15 backdrop-blur-sm border border-white/10'
                    }
                  `}
                >
                  {item.name}
                  
                  {/* Wave accent for active item */}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-[#0D7070] via-[#7C9885] to-[#0D7070] rounded-full" />
                  )}
                  
                  {/* Hover wave animation */}
                  <span className={`
                    absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full 
                    transition-all duration-300 group-hover:w-full
                    ${isScrolled ? 'bg-[#7C9885]' : 'bg-white/70'}
                  `} />
                </Link>
              ))}
            </nav>

            {/* DESKTOP CTA BUTTONS - Hidden on Mobile */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Call Now - Enhanced Glassmorphism */}
              <a 
                href="tel:+639189003644" 
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-xl
                  font-lato text-sm font-semibold
                  transition-all duration-300 group
                  ${isScrolled
                    ? 'text-[#0D7070] hover:text-[#0a5555] hover:bg-[#E6EBE8]/70'
                    : 'text-white bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/25'
                  }
                `}
                aria-label="Call us"
                title="Call +63 918 900 3644"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden xl:inline">Call Now</span>
              </a>
              
              {/* Book Now Button - Premium Gradient */}
              <Link 
                to="/rates" 
                className="
                  relative overflow-hidden
                  bg-gradient-to-br from-[#FF6B6B] to-[#ee5050] 
                  text-white px-6 py-2.5 rounded-xl
                  font-lato font-bold text-sm
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                  hover:scale-105 active:scale-95
                  group
                "
              >
                <span className="relative z-10">Book Now</span>
                
                {/* Ripple effect */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/30 rounded-full group-hover:w-full group-hover:h-full group-hover:scale-150 transition-all duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;