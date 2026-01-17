import { FC } from 'react';

interface LotusIconProps {
  className?: string;
  strokeWidth?: number;
}

/**
 * Custom Lotus Icon for "Serenity Seeker" persona
 * Represents wellness, meditation, and Thai spa luxury
 */
export const LotusIcon: FC<LotusIconProps> = ({ 
  className = "w-7 h-7", 
  strokeWidth = 2 
}) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Center petal (top) */}
      <path d="M12 2C12 2 10 6 10 9C10 10.66 10.9 12 12 12C13.1 12 14 10.66 14 9C14 6 12 2 12 2Z" />
      
      {/* Left petal */}
      <path d="M7 5C7 5 5 8 5 10.5C5 12.43 6.34 14 8 14C9.66 14 11 12.43 11 10.5C11 8 9 5 7 5Z" />
      
      {/* Right petal */}
      <path d="M17 5C17 5 19 8 19 10.5C19 12.43 17.66 14 16 14C14.34 14 13 12.43 13 10.5C13 8 15 5 17 5Z" />
      
      {/* Bottom left petal */}
      <path d="M8 12C8 12 6 14 6 16C6 17.66 7.34 19 9 19C10.66 19 12 17.66 12 16C12 14 10 12 8 12Z" />
      
      {/* Bottom right petal */}
      <path d="M16 12C16 12 18 14 18 16C18 17.66 16.66 19 15 19C13.34 19 12 17.66 12 16C12 14 14 12 16 12Z" />
      
      {/* Center seed pod */}
      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
      
      {/* Stem */}
      <path d="M12 19V22" />
    </svg>
  );
};
