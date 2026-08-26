'use client';

import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-200 text-base">
                {personalData.name} <span className="text-blue-400">.dev</span>
              </p>
              <p className="text-xs text-slate-400">
                © {new Date().getFullYear()} Todos los derechos reservados.
              </p>
            </div>
          </div>

          {/* Tagline / Frase */}
          <p className="text-xs text-slate-400 flex items-center gap-1.5 text-center">
            Diseñado & desarrollado con <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> usando Next.js 15 & Tailwind CSS.
          </p>

          {/* Botón Volver arriba */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-card text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors flex items-center gap-2 text-xs font-semibold"
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-4 h-4 text-blue-400" />
          </button>

        </div>
      </div>
    </footer>
  );
}
