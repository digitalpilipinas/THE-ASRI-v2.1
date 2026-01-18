import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ChevronDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#4A5568]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left hover:text-[#D4A373] transition-colors"
        aria-expanded={isOpen}
      >
        <h4 className="font-lato font-bold text-white text-lg">{title}</h4>
        <ChevronDown
          className={`w-5 h-5 text-[#D4A373] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1A2332] text-[#E6EBE8]">
      {/* TOP: Brand + CTA Section - Mobile First - WITH GLASSMORPHISM */}
      <div className="lg:hidden py-10 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm text-center">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <img 
                src="/images/logo/THE-ASRI-LOGO-BG.svg" 
                alt="The Asri Logo" 
                className="h-14 w-auto rounded-xl transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col text-left">
                <span className="text-2xl font-bold font-playfair tracking-tight text-[#0D7070]">
                  The Asri
                </span>
                <span className="text-[9px] font-semibold font-lato tracking-[0.2em] text-[#4A5568] mt-1">
                  DIVE & LEISURE RESORT
                </span>
              </div>
            </Link>

            {/* CTA Headline */}
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#0D7070] mb-2">
              Ready to Dive?
            </h3>
            <p className="font-lato text-sm text-[#4A5568] mb-6">
              Book your underwater adventure today
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+639189003644"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B6B] hover:bg-[#FF5050] text-white font-lato font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                to="/rates"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D7070] hover:bg-[#0a5555] text-white font-lato font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                View Rates
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ACCORDION SECTION - Mobile Only */}
      <div className="lg:hidden px-4">
        <AccordionItem title="Quick Links">
          <ul className="space-y-2">
            <li><Link to="/" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">Home</Link></li>
            <li><Link to="/about" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">About Us</Link></li>
            <li><Link to="/accommodations" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">Accommodations</Link></li>
            <li><Link to="/gallery" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">Gallery</Link></li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Dive Info">
          <ul className="space-y-2">
            <li><Link to="/dive-services" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">Dive Services</Link></li>
            <li><Link to="/dive-services" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">PADI Courses</Link></li>
            <li><Link to="/rates" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">Rates & Packages</Link></li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Contact Us" defaultOpen>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
              <a href="tel:+639189003644" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">
                +63 918 900 3644
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
              <a href="mailto:asrianilao@gmail.com" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors break-all">
                asrianilao@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
              <span className="font-lato text-sm text-[#718096]">
                Sitio Balagbag, Brgy. Bagalangit, Mabini, Batangas, Philippines
              </span>
            </li>
          </ul>
        </AccordionItem>
      </div>

      {/* DESKTOP: Traditional 4-Column Layout - WITH GLASSMORPHISM */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <Link to="/" className="flex items-center gap-4 group">
                    <img 
                      src="/images/logo/THE-ASRI-LOGO-BG.svg" 
                      alt="The Asri Logo" 
                      className="h-16 w-auto rounded-xl transition-transform group-hover:scale-105"
                    />
                    <div className="flex flex-col">
                      <span className="text-xl font-bold font-playfair tracking-tight text-[#0D7070]">
                        The Asri
                      </span>
                      <span className="text-[9px] font-semibold font-lato tracking-[0.2em] text-[#4A5568] mt-1">
                        DIVE & LEISURE RESORT
                      </span>
                    </div>
                  </Link>
                </div>
                <p className="font-lato text-sm text-[#4A5568] mb-6">
                  PADI 5-Star dive resort in Anilao, Batangas. Boutique luxury with 14 waterfront rooms, Thai-inspired design, and access to 30+ world-class dive sites.
                </p>
                <div className="flex gap-4">
                  <a href="https://facebook.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-[#0D7070] transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-[#0D7070] transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-[#0D7070] transition-colors" aria-label="YouTube">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-lato font-bold text-[#0D7070] text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="font-lato text-sm text-[#4A5568] hover:text-[#0D7070] transition-colors">Home</Link></li>
                  <li><Link to="/about" className="font-lato text-sm text-[#4A5568] hover:text-[#0D7070] transition-colors">About Us</Link></li>
                  <li><Link to="/accommodations" className="font-lato text-sm text-[#4A5568] hover:text-[#0D7070] transition-colors">Accommodations</Link></li>
                  <li><Link to="/gallery" className="font-lato text-sm text-[#4A5568] hover:text-[#0D7070] transition-colors">Gallery</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-lato font-bold text-[#0D7070] text-lg mb-4">Dive Info</h4>
                <ul className="space-y-2">
                  <li><Link to="/dive-services" className="font-lato text-sm text-[#4A5568] hover:text-[#0D7070] transition-colors">Dive Services</Link></li>
                  <li><Link to="/dive-services" className="font-lato text-sm text-[#4A5568] hover:text-[#0D7070] transition-colors">PADI Courses</Link></li>
                  <li><Link to="/rates" className="font-lato text-sm text-[#4A5568] hover:text-[#0D7070] transition-colors">Rates & Packages</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-lato font-bold text-[#0D7070] text-lg mb-4">Contact Us</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
                    <a href="tel:+639189003644" className="font-lato text-sm text-[#4A5568] hover:text-[#0D7070] transition-colors">
                      +63 918 900 3644
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
                    <a href="mailto:asrianilao@gmail.com" className="font-lato text-sm text-[#4A5568] hover:text-[#0D7070] transition-colors">
                      asrianilao@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
                    <span className="font-lato text-sm text-[#4A5568]">Sitio Balagbag Barangay Bagalangit, Batangas, Mabini, Philippines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: Social + Copyright */}
      <div className="bg-[#0f1419] py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Social Icons - Mobile Only (Desktop has them in grid) */}
          <div className="lg:hidden flex justify-center gap-6 mb-4">
            <a href="https://facebook.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-lato text-xs md:text-sm text-[#718096] text-center">
            © {new Date().getFullYear()} The Asri Dive & Leisure Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;