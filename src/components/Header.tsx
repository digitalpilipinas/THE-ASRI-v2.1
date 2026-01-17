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
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${isScrolled 
          ? 'bg-[#F5F1E8]/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-b from-[#1A2332]/30 to-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`
              transition-all duration-500 transform
              ${isScrolled ? 'text-[#0D7070] scale-90' : 'text-white scale-100'}
            `}>
              <img 
                src="/images/logo/asri-logo.svg" 
                alt="The Asri Logo" 
                className="h-10 w-auto md:h-14 transition-all duration-300 group-hover:scale-105"
                style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className={`
                font-playfair font-bold text-2xl md:text-3xl transition-colors
                ${isScrolled 
                  ? 'text-[#0D7070] group-hover:text-[#0a5555]'  // Scrolled: Teal
                  : 'text-white group-hover:text-white/80'  // Not scrolled: White
                }
              `}>
                The Asri
              </span>
              <span className={`
                font-lato text-xs md:text-sm tracking-widest uppercase
                ${isScrolled 
                  ? 'text-[#4A5568]'  // Scrolled: Gray
                  : 'text-white/80'  // Not scrolled: White with transparency
                }
              `}>
                Dive & Leisure Resort
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
                    ? isScrolled
                      ? 'text-[#0D7070] bg-[#E6EBE8]'  // Scrolled + Active: Teal on light sage
                      : 'text-white bg-[#0D7070]/90'   // Not scrolled + Active: White on teal
                    : isScrolled
                      ? 'text-[#4A5568] hover:text-[#0D7070] hover:bg-[#E6EBE8]/70' // Scrolled + Inactive: Gray
                      : 'text-white/90 hover:text-white hover:bg-white/20'  // Not scrolled + Inactive: White
                  }
                `}
              >
                {item.name}
                
                {/* Wave accent for active item */}
                {isActive(item.path) && (
                  <span className={`
                    absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full
                    ${isScrolled 
                      ? 'bg-gradient-to-r from-[#0D7070] via-[#7C9885] to-[#0D7070]'  // Scrolled: Gradient
                      : 'bg-white'  // Not scrolled: White accent
                    }
                  `} />
                )}
                
                {/* Hover wave animation */}
                <span className={`
                  absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full
                  ${isScrolled ? 'bg-[#7C9885]' : 'bg-white/60'}
                `} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:+639189003644" 
              className={`
                flex items-center gap-2 transition-colors p-2 rounded-lg
                ${isScrolled
                  ? 'text-[#0D7070] hover:text-[#0a5555] hover:bg-[#E6EBE8]/50'
                  : 'text-white hover:text-white/80 hover:bg-white/10'
                }
              `}
              aria-label="Call us"
              title="Call +63 918 900 3644"
            >
              <Phone className="w-5 h-5" />
              <span className="font-lato text-sm font-medium hidden xl:inline">
                Call Now
              </span>
            </a>
            
            <Link 
              to="/rates" 
              className="
                relative overflow-hidden
                bg-gradient-to-br from-[#FF6B6B] to-[#ee5050] 
                text-white px-6 py-2.5 rounded-xl
                font-lato font-bold text-sm
                shadow-lg hover:shadow-xl
                transition-all duration-300
                hover:scale-105
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
      
      {/* Wave divider when scrolled */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-1">
          <svg viewBox="0 0 1200 6" className="w-full h-full">
            <path 
              d="M0,3 Q300,0 600,3 T1200,3" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0D7070" />
                <stop offset="50%" stopColor="#7C9885" />
                <stop offset="100%" stopColor="#0D7070" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </header>
  );
};

export default Header;