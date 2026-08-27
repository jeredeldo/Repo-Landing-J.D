'use client';

import { ArrowUp } from 'lucide-react';
import { brandData } from '@/data/portfolioData';
import { AlbionLogo } from './AlbionLogo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-zinc-900 bg-black text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Copyright */}
          <div className="flex items-center gap-3">
            <AlbionLogo className="w-8 h-8" showText={true} />
            <div className="ml-2 pl-4 border-l border-zinc-800">
              <p className="text-xs text-zinc-400 font-mono">
                © {new Date().getFullYear()} {brandData.name}. Todos los derechos reservados.
              </p>
              <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                Fundador: <span className="text-zinc-200">{brandData.founder}</span>
              </p>
            </div>
          </div>

          {/* Tagline / Frase */}
          <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono text-center">
            {brandData.tagline}
          </p>

          {/* Botón Volver arriba */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-xl glass-card text-zinc-300 hover:text-white border-zinc-800 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider shadow-md"
            aria-label="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp className="w-4 h-4 text-white" />
          </button>

        </div>
      </div>
    </footer>
  );
}
