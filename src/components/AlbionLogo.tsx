'use client';

import React from 'react';

interface AlbionLogoProps {
  className?: string;
  showText?: boolean;
  iconOnly?: boolean;
}

export function AlbionLogo({ className = "w-12 h-12", showText = true, iconOnly = false }: AlbionLogoProps) {
  return (
    <div className="flex items-center gap-3.5 group cursor-pointer select-none">
      {/* Isotipo Monograma AW Limpio Oficial */}
      <div className={`relative overflow-hidden bg-black flex items-center justify-center shrink-0 ${className}`}>
        <img
          src="/albion-logo.png"
          alt="ALBION WEB Monogram"
          className="w-full h-full object-contain filter brightness-110 contrast-125 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Texto Tipográfico ALBION WEB */}
      {showText && !iconOnly && (
        <div className="flex flex-col justify-center">
          <span className="font-black text-lg sm:text-xl tracking-[0.25em] text-white leading-none uppercase font-sans">
            ALBION
          </span>
          <span className="font-bold text-[10px] sm:text-[11px] tracking-[0.35em] text-zinc-400 leading-tight uppercase font-sans mt-1">
            WEB
          </span>
        </div>
      )}
    </div>
  );
}
