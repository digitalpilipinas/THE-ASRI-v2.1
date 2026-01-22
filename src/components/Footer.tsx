import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ChevronDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '@/data/mockData';

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
  const { t } = useTranslation('footer');
  const { t: tNav } = useTranslation('navigation');
  return (
    <footer className="bg-[#1A2332] text-[#E6EBE8]">
      {/* TOP: Brand + CTA Section - Mobile First */}
      <div className="lg:hidden bg-gradient-to-br from-[#0D7070] to-[#0a5555] py-10 px-4">
        <div className="max-w-md mx-auto text-center">
          {/* Logo - ONLY CHANGE: added rounded-xl */}
          <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
            <img 
              src="/images/logo/THE-ASRI-LOGO-BG.svg" 
              alt={tNav('logo.alt')}
              className="h-14 w-auto rounded-xl transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="text-2xl font-bold font-playfair tracking-tight text-white">
                {tNav('brand.name')}
              </span>
              <span className="text-[9px] font-semibold font-lato tracking-[0.2em] text-white/70 mt-1">
                {tNav('brand.tagline')}
              </span>
            </div>
          </Link>

          {/* CTA Headline */}
          <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-2">
            {t('mobileCta.title')}
          </h3>
          <p className="font-lato text-sm text-white/80 mb-6">
            {t('mobileCta.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+639189003644"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B6B] hover:bg-[#FF5050] text-white font-lato font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              {tNav('cta.call.label')}
            </a>
            <Link
              to="/rates"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/90 hover:bg-white text-[#0D7070] font-lato font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              {t('mobileCta.viewRates')}
            </Link>
          </div>
        </div>
      </div>

      {/* ACCORDION SECTION - Mobile Only */}
      <div className="lg:hidden px-4">
        <AccordionItem title={t('sections.quickLinks')}>
          <ul className="space-y-2">
            <li><Link to="/" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">{tNav('items.home.full')}</Link></li>
            <li><Link to="/about" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">{tNav('items.about.full')}</Link></li>
            <li><Link to="/accommodations" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">{tNav('items.rooms.full')}</Link></li>
            <li><Link to="/gallery" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">{tNav('items.gallery.full')}</Link></li>
          </ul>
        </AccordionItem>

        <AccordionItem title={t('sections.diveInfo')}>
          <ul className="space-y-2">
            <li><Link to="/dive-services" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">{tNav('items.services.full')}</Link></li>
            <li><Link to="/dive-services" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">{t('links.padiCourses')}</Link></li>
            <li><Link to="/rates" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors block py-1">{tNav('items.rates.full')}</Link></li>
          </ul>
        </AccordionItem>

        <AccordionItem title={tNav('items.contact.full')} defaultOpen>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
              <a href="tel:+639189003644" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">
                +63 918 900 3644
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
              <a href={`mailto:${contactInfo.email}`} className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors break-all">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
              <span className="font-lato text-sm text-[#718096]">
                {t('contact.address.mobile')}
              </span>
            </li>
          </ul>
        </AccordionItem>
      </div>

      {/* DESKTOP: Traditional 4-Column Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link to="/" className="flex items-center gap-4 group">
                  {/* Logo - ONLY CHANGE: added rounded-xl */}
                  <img 
                    src="/images/logo/THE-ASRI-LOGO-BG.svg" 
                    alt={tNav('logo.alt')}
                    className="h-16 w-auto rounded-xl transition-transform group-hover:scale-105"
                  />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold font-playfair tracking-tight text-white">
                      {tNav('brand.name')}
                    </span>
                    <span className="text-[9px] font-semibold font-lato tracking-[0.2em] text-[#718096] mt-1">
                      {tNav('brand.tagline')}
                    </span>
                  </div>
                </Link>
              </div>
              <p className="font-lato text-sm text-[#718096] mb-6">
                {t('desktop.aboutBlurb')}
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label={t('social.facebookAria')}>
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label={t('social.instagramAria')}>
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label={t('social.youtubeAria')}>
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-lato font-bold text-white text-lg mb-4">{t('sections.quickLinks')}</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">{tNav('items.home.full')}</Link></li>
                <li><Link to="/about" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">{tNav('items.about.full')}</Link></li>
                <li><Link to="/accommodations" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">{tNav('items.rooms.full')}</Link></li>
                <li><Link to="/gallery" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">{tNav('items.gallery.full')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-lato font-bold text-white text-lg mb-4">{t('sections.diveInfo')}</h4>
              <ul className="space-y-2">
                <li><Link to="/dive-services" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">{tNav('items.services.full')}</Link></li>
                <li><Link to="/dive-services" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">{t('links.padiCourses')}</Link></li>
                <li><Link to="/rates" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">{tNav('items.rates.full')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-lato font-bold text-white text-lg mb-4">{tNav('items.contact.full')}</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
                  <a href="tel:+639189003644" className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">
                    +63 918 900 3644
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${contactInfo.email}`} className="font-lato text-sm text-[#718096] hover:text-[#D4A373] transition-colors">
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
                  <span className="font-lato text-sm text-[#718096]">{t('contact.address.desktop')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: Social + Copyright */}
      <div className="bg-[#0f1419] py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Social Icons - Mobile Only (Desktop has them in grid) */}
          <div className="lg:hidden flex justify-center gap-6 mb-4">
            <a href="https://facebook.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label={t('social.facebookAria')}>
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label={t('social.instagramAria')}>
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/theasri" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:text-white transition-colors" aria-label={t('social.youtubeAria')}>
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-lato text-xs md:text-sm text-[#718096] text-center">
            {t('copyright', { year: new Date().getFullYear(), brand: tNav('brand.name') })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
