import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hotel, DollarSign, Info, MapPin, ChevronRight, LucideIcon } from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';
import { useTranslation } from 'react-i18next';

interface MoreMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  path: string;
  color: string;
}

const MoreMenu = ({ isOpen, onClose }: MoreMenuProps) => {
  const { t } = useTranslation('navigation');
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const menuItems: MenuItem[] = [
    {
      icon: Hotel,
      title: t('moreMenu.items.accommodations.title'),
      subtitle: t('moreMenu.items.accommodations.subtitle'),
      path: '/accommodations',
      color: '#0D7070'
    },
    {
      icon: DollarSign,
      title: t('moreMenu.items.rates.title'),
      subtitle: t('moreMenu.items.rates.subtitle'),
      path: '/rates',
      color: '#7C9885'
    },
    {
      icon: Info,
      title: t('moreMenu.items.about.title'),
      subtitle: t('moreMenu.items.about.subtitle'),
      path: '/about',
      color: '#D4A373'
    },
    {
      icon: MapPin,
      title: t('moreMenu.items.contact.title'),
      subtitle: t('moreMenu.items.contact.subtitle'),
      path: '/contact',
      color: '#FF6B6B'
    }
  ];

  return (
    <div
      className={`
        lg:hidden fixed inset-0 z-50
        transition-all duration-300
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      onClick={handleBackdropClick}
    >
      <div 
        className={`
          absolute inset-0 bg-[#1A2332]/60
          backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}
      />

      <div
        className={`
          absolute bottom-0 left-0 right-0
          bg-[#F5F1E8] rounded-t-3xl
          max-h-[70vh] overflow-y-auto
          transition-transform duration-300
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        {/* Swipe Handle */}
        <div className="sticky top-0 bg-[#F5F1E8] pt-4 pb-3 flex justify-center z-10">
          <div className="w-12 h-1.5 bg-[#4A5568]/30 rounded-full" />
        </div>

        {/* Menu Header */}
        <div className="px-6 pb-4">
          <h3 className="font-playfair font-bold text-2xl text-[#1A2332]">
            {t('moreMenu.title')}
          </h3>
          <p className="font-lato text-sm text-[#718096] mt-1">
            {t('moreMenu.subtitle')}
          </p>
          <div className="mt-4">
            <LanguageSelector triggerClassName="h-11 rounded-xl border border-[#E6EBE8] bg-white text-[#1A2332]" />
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-4 pb-6 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="
                  flex items-center gap-4 p-4 rounded-2xl
                  bg-[#F5F1E8] hover:bg-[#E6EBE8]
                  transition-all duration-300
                  group active:scale-98
                "
                style={{
                  boxShadow: '8px 8px 16px rgba(209, 209, 209, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.8)',
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInUp 300ms ease-out forwards' : 'none'
                }}
              >
                <div 
                  className="
                    w-12 h-12 rounded-xl
                    flex items-center justify-center
                    bg-gradient-to-br from-white to-[#E6EBE8]
                    group-hover:scale-110
                    transition-transform duration-300
                  "
                  style={{ 
                    color: item.color,
                    boxShadow: '8px 8px 16px rgba(209, 209, 209, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>

                <div className="flex-1">
                  <h4 className="font-lato font-bold text-base text-[#1A2332]">
                    {item.title}
                  </h4>
                  <p className="font-lato text-xs text-[#718096] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <ChevronRight 
                  className="
                    w-5 h-5 text-[#4A5568]
                    group-hover:translate-x-1
                    transition-transform duration-300
                    [[dir=rtl]_&]:rotate-180
                    [[dir=rtl]_&]:group-hover:-translate-x-1
                  " 
                />
              </Link>
            );
          })}
        </div>

        {/* Close Button */}
        <div className="sticky bottom-0 bg-[#F5F1E8] p-4 border-t border-[#E6EBE8]">
          <button
            onClick={onClose}
            className="
              w-full py-3 rounded-xl
              font-lato font-bold text-sm
              bg-gradient-to-br from-[#4A5568] to-[#1A2332]
              text-white
              hover:shadow-lg
              active:scale-95
              transition-all duration-300
            "
          >
            {t('moreMenu.close')}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MoreMenu;
