import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: 'fixed' | 'inline';
}

const WhatsAppButton = ({ 
  phoneNumber = '+639189003644', 
  message = "Hi! I'd like to learn more about The Asri.",
  position = 'fixed'
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
      const tooltipShown = localStorage.getItem('asri_whatsapp_tooltip_shown');
      if (!tooltipShown && window.innerWidth < 1024) {
        setTimeout(() => {
          setShowTooltip(true);
          setTimeout(() => {
            setShowTooltip(false);
            localStorage.setItem('asri_whatsapp_tooltip_shown', 'true');
          }, 3000);
        }, 1000);
      }
    }, 2000);
    
    const handleScroll = (): void => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleClick = (): void => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <div
      className={position === 'fixed' 
        ? `fixed z-50 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`
        : 'relative inline-block'
      }
      style={position === 'fixed' ? {
        bottom: isMobile ? '96px' : '24px',
        right: '24px'
      } : {}}
    >
      <div className="absolute inset-0 -z-10">
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" style={{ animationDuration: '2s' }} />
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
      </div>

      <button
        onClick={handleClick}
        className="relative w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#20BA5A] text-white rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110 active:scale-95"
        style={{ boxShadow: '0 12px 32px rgba(37, 211, 102, 0.3), 0 4px 8px rgba(0, 0, 0, 0.1)' }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 flex-shrink-0" strokeWidth={2.5} />

        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF6B6B] text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
          1
        </span>

        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>

      {showTooltip && (
        <div className="lg:hidden absolute bottom-full right-0 mb-2 bg-[#1A2332] text-white px-3 py-2 rounded-lg font-lato text-xs whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-300">
          Need help? Chat now! 💬
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-[#1A2332] transform rotate-45" />
        </div>
      )}

      <span className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 bg-[#1A2332] text-white px-3 py-2 rounded-lg text-sm font-lato whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
      </span>
    </div>
  );
};

export default WhatsAppButton;