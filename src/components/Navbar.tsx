'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { AlbionLogo } from './AlbionLogo';

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Servicios', href: '#services' },
  { name: 'Trabajos', href: '#projects' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Contacto', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo ALBION WEB Más Grande */}
          <a href="#hero" className="focus:outline-none">
            <AlbionLogo className="w-12 h-12 sm:w-14 sm:h-14" showText={true} />
          </a>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-black/80 border border-white/10 px-5 py-2 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-400 hover:text-white uppercase transition-colors relative hover:bg-white/5 rounded-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botón CTA derecho */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Pedir Presupuesto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Menú Mobile Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-b border-white/10 px-4 pt-3 pb-6 mt-3 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-semibold tracking-widest text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-zinc-800 mt-2 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  Pedir Presupuesto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
