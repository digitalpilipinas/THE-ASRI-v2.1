import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A2332] text-[#E6EBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/" className="flex items-center gap-4 group">
                <img 
                  src="/images/logo/THE-ASRI-LOGO.svg" 
                  alt="The Asri Logo" 
                  className="h-16 w-auto transition-transform group-hover:scale-105 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-playfair tracking-tight text-white">
                    The Asri
                  </span>
                  <span className="text-[9px] font-semibold font-lato tracking-[0.2em] text-[#718096] mt-1">
                    DIVE & LEISURE RESORT
                  </span>
                </div>
              </Link>
            </div>
            <p className="font-lato text-sm text-[#718096] mb-6">
              PADI 5-Star dive resort in Anilao, Batangas. Boutique luxury with 14 waterfront rooms, Thai-inspired design, and access to 30+ world-class dive sites.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-lato font-bold text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">Home</Link></li>
              <li><Link to="/about" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">About Us</Link></li>
              <li><Link to="/accommodations" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">Accommodations</Link></li>
              <li><Link to="/gallery" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-lato font-bold text-white text-lg mb-4">Dive Info</h4>
            <ul className="space-y-2">
              <li><Link to="/dive-services" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">Dive Services</Link></li>
              <li><Link to="/dive-services" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">PADI Courses</Link></li>
              <li><Link to="/rates" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">Rates & Packages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-lato font-bold text-white text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
                <a href="tel:+639189003644" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">
                  +63 918 900 3644
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
                <a href="mailto:asrianilao@gmail.com" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">
                  asrianilao@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
                <span className="font-lato text-sm text-[#718096]">Sitio Balagbag Barangay Bagalangit, Batangas, Mabini, Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#4A5568] mt-12 pt-8 text-center">
          <p className="font-lato text-sm text-[#718096]">
            © {new Date().getFullYear()} The Asri Dive & Leisure Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;