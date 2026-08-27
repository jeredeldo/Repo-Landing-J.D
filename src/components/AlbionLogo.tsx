import React from 'react';

interface AlbionLogoProps {
  className?: string;
  showText?: boolean;
  iconOnly?: boolean;
}

export function AlbionLogo({ className = "w-8 h-8", showText = true, iconOnly = false }: AlbionLogoProps) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Monograma AW Vectorial SVG */}
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 200 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white transition-transform duration-300 group-hover:scale-105"
        >
          {/* Letra A (Chevron triangular afilado) */}
          <path
            d="M 35 115 L 80 25 L 125 115 L 102 115 L 80 65 L 58 115 Z"
            fill="currentColor"
          />
          {/* Letra W (Estructura afilada conectada) */}
          <path
            d="M 82 45 L 115 115 L 138 60 L 160 115 L 192 45 L 172 45 L 150 98 L 128 45 L 110 45 L 94 82 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Texto ALBION WEB */}
      {showText && !iconOnly && (
        <div className="flex flex-col">
          <span className="font-extrabold text-lg tracking-[0.25em] text-white leading-none uppercase font-sans">
            ALBION
          </span>
          <span className="font-semibold text-[10px] tracking-[0.35em] text-zinc-400 leading-tight uppercase font-sans mt-0.5">
            WEB
          </span>
        </div>
      )}
    </div>
  );
}
