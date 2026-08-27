'use client';

import { brandData } from '@/data/portfolioData';
import { AlbionLogo } from './AlbionLogo';

export function Footer() {
  return (
    <footer className="py-14 border-t border-zinc-900 bg-black text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo ALBION WEB Más Grande */}
          <div className="flex items-center gap-3">
            <AlbionLogo className="w-12 h-12" showText={true} />
            <div className="ml-2 pl-4 border-l border-zinc-800">
              <p className="text-xs text-zinc-400 font-mono">
                © {new Date().getFullYear()} {brandData.name}. Todos los derechos reservados.
              </p>
            </div>
          </div>

          {/* Tagline / Frase */}
          <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono text-center">
            {brandData.tagline}
          </p>

        </div>
      </div>
    </footer>
  );
}
