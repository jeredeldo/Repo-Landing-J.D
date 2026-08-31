'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gold-gradient text-black font-black border border-amber-300/40 shadow-2xl shadow-amber-500/25 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ArrowUp className="w-5 h-5 stroke-[3] text-black" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
