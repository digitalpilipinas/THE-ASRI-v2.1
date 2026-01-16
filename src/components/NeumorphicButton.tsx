import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'coral' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface NeumorphicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const NeumorphicButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props 
}: NeumorphicButtonProps) => {
  const baseStyles = 'font-lato font-bold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-gradient-to-br from-[#0D7070] to-[#0a5555] text-white shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px]',
    coral: 'bg-gradient-to-br from-[#FF6B6B] to-[#ee5050] text-white shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px]',
    outline: 'bg-[#F5F1E8] text-[#0D7070] border-2 border-[#0D7070] hover:bg-[#E6EBE8]',
    ghost: 'bg-transparent text-[#0D7070] hover:bg-[#E6EBE8] hover:text-[#0a5555]',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed hover:translate-y-0';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? disabledStyles : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeumorphicButton;