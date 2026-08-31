'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, FolderGit2, Globe, ShieldCheck, Zap, Smartphone, ArrowRight, Star } from 'lucide-react';
import { brandData } from '@/data/portfolioData';
import { AlbionLogo } from './AlbionLogo';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="hero" className="relative pt-36 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-black">
      {/* Resplandor Champán / Dorado de lujo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-amber-500/15 via-yellow-500/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna izquierda: Identidad ALBION WEB */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge de disponibilidad con borde dorado */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/90 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest shadow-lg shadow-amber-500/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                ALBION WEB — Estudio Digital de Elite
              </span>
            </motion.div>

            {/* Título Principal ALBION WEB con resplandor dorado */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]"
            >
              ALBION{' '}
              <span className="text-gold-gradient">
                WEB
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="mt-3 text-lg sm:text-2xl font-semibold text-zinc-300 tracking-wide flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{brandData.tagline}</span>
            </motion.h2>

            {/* Descripción Comercial */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl"
            >
              {brandData.description} Diseñamos e implementamos plataformas web minimalistas, ultra rápidas y personalizadas para marcas, empresas y profesionales exigentes.
            </motion.p>

            {/* Botones de acción (CTAs Dorados) */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-black font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95"
              >
                <span>Solicitar Presupuesto</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-card text-zinc-200 font-bold text-xs uppercase tracking-wider hover:text-amber-300 hover:border-amber-500/40 transition-all hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4 text-amber-400" />
                <span>Explorar Trabajos</span>
              </a>
            </motion.div>

            {/* Garantías y Beneficios Clave */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-6 border-t border-zinc-900 w-full grid grid-cols-3 gap-2 text-xs text-zinc-400 font-mono uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>PageSpeed 99</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Diseño Gold Standard</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha: Tarjeta visual ALBION WEB con destellos dorados */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow de tarjeta en dorado */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-yellow-500/20 to-amber-700/20 rounded-3xl blur-xl opacity-45 animate-pulse-glow" />

            <div className="relative w-full max-w-md glass-card rounded-2xl p-6 overflow-hidden shadow-2xl border border-amber-500/20">
              {/* Header de ventana */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-zinc-800 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-zinc-800 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black border border-amber-500/30 text-[10px] text-amber-300 font-mono tracking-widest uppercase">
                  <Globe className="w-3 h-3 text-amber-400" />
                  <span>albionweb.com</span>
                </div>
              </div>

              {/* Vista previa de interfaz comercial ALBION WEB */}
              <div className="rounded-xl bg-black p-5 border border-zinc-800 space-y-5 shadow-inner relative overflow-hidden">
                {/* Monograma de agua de fondo */}
                <div className="absolute right-2 bottom-2 opacity-5 pointer-events-none">
                  <AlbionLogo className="w-32 h-32" showText={false} />
                </div>

                {/* Header Mockup */}
                <div className="flex items-center justify-between">
                  <AlbionLogo className="w-6 h-6" showText={false} />
                  <div className="px-3 py-1 rounded bg-gold-gradient text-black text-[9px] font-black uppercase tracking-widest">
                    ALBION STUDIO
                  </div>
                </div>

                {/* Hero Banner Mockup */}
                <div className="p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 space-y-2.5">
                  <div className="w-3/4 h-3.5 rounded bg-white" />
                  <div className="w-1/2 h-2 rounded bg-amber-400/80" />
                  <div className="w-28 h-6 rounded bg-gold-gradient text-black text-[9px] font-black flex items-center justify-center tracking-wider uppercase mt-2">
                    Ver Soluciones
                  </div>
                </div>

                {/* Grid de servicios preview */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/80 space-y-1.5">
                    <div className="text-[10px] font-bold text-white uppercase tracking-wider">E-Commerce</div>
                    <div className="w-full h-1.5 rounded bg-amber-400/60" />
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/80 space-y-1.5">
                    <div className="text-[10px] font-bold text-white uppercase tracking-wider">Corporativo</div>
                    <div className="w-full h-1.5 rounded bg-amber-400/60" />
                  </div>
                </div>
              </div>

              {/* Métricas de rendimiento */}
              <div className="mt-4 pt-4 border-t border-zinc-800 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black border border-amber-500/20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-gradient text-black flex items-center justify-center font-black text-xs">
                    99
                  </div>
                  <div>
                    <span className="font-bold text-white block text-[11px] uppercase tracking-wider">Speed Score</span>
                    <span className="text-[10px] text-zinc-400">Google Optimized</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black border border-amber-500/20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-[11px] uppercase tracking-wider">ALBION Gold</span>
                    <span className="text-[10px] text-amber-300/80">Diseño Elite</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#services"
            className="flex flex-col items-center gap-2 text-xs text-zinc-400 hover:text-amber-400 transition-colors group tracking-widest uppercase font-mono"
          >
            <span>Conocer Servicios</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
