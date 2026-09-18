import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  onClick
}) => {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl md:text-4xl'
  };

  const crestSizes = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 sm:w-12 sm:h-12 text-base'
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none group transition-opacity hover:opacity-95`}
      id="brand-logo"
    >
      {/* Subtle Heritage Monogram Crest */}
      <div
        className={`flex items-center justify-center rounded-sm border border-[#C5A059]/50 transition-colors group-hover:border-[#C5A059] ${crestSizes[size]} ${
          isDark
            ? 'bg-[#09111e] text-[#C5A059] shadow-sm'
            : 'bg-white/10 text-[#C5A059]'
        }`}
      >
        <span className="font-serif font-bold tracking-tighter">GJ</span>
      </div>

      {/* Refined Text Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.18em] uppercase font-semibold leading-tight ${sizeClasses[size]} ${
            isDark ? 'text-[#09111e]' : 'text-[#FAFAF8]'
          }`}
        >
          Gopilal Jewellers
        </span>
        <span
          className={`text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-sans font-medium mt-0.5 ${
            isDark ? 'text-[#C5A059]' : 'text-[#DFCA9A]'
          }`}
        >
          Greater Noida
        </span>
      </div>
    </div>
  );
};
