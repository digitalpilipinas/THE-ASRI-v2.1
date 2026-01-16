import { ReactNode, HTMLAttributes } from 'react';

type CardPadding = 'sm' | 'md' | 'lg' | 'xl';

interface NeumorphicCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: CardPadding;
}

const NeumorphicCard = ({ 
  children, 
  className = '',
  hover = true,
  padding = 'lg',
  ...props 
}: NeumorphicCardProps): JSX.Element => {
  const paddingStyles: Record<CardPadding, string> = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  return (
    <div
      className={`bg-[#F5F1E8] rounded-2xl ${paddingStyles[padding]} shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] ${hover ? 'hover:shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] transition-shadow duration-300' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default NeumorphicCard;