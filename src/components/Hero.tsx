'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, FolderGit2, Mail, CheckCircle2, Globe, ShieldCheck, Zap, Smartphone, ArrowRight, Star } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

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
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Luces de fondo (Radial gradients) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/15 to-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna izquierda: Información comercial principal */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge de disponibilidad comercial */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-semibold tracking-wide shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Disponible para nuevos proyectos web
              </span>
            </motion.div>

            {/* Nombre y Título Comercial */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Hola, soy{' '}
              <span className="inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                {personalData.name}
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="mt-3 text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>{personalData.role}</span>
            </motion.h2>

            {/* Tagline orientada a resultados para negocios */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl"
            >
              Diseño y desarrollo sitios web de alto impacto para profesionales, empresas y marcas que buscan transmitir autoridad, destacar frente a la competencia y convertir más clientes.
            </motion.p>

            {/* Botones de acción (CTAs comerciales) */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
              >
                <span>Pedir Presupuesto</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:text-white hover:border-slate-600 transition-all hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4 text-blue-400" />
                <span>Ver Trabajos</span>
              </a>
            </motion.div>

            {/* Garantías y Beneficios Clave */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-slate-800/60 w-full grid grid-cols-3 gap-2 text-xs text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Carga &lt; 1 seg</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>100% Celular</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SEO Integrado</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha: Tarjeta visual de Muestra de Sitio Web (Sin hacker/código) */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow de tarjeta */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl blur-xl opacity-30 animate-pulse-glow" />

            <div className="relative w-full max-w-md glass-card rounded-2xl p-6 overflow-hidden shadow-2xl">
              {/* Header de ventana de navegador web */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono">
                  <Globe className="w-3 h-3 text-blue-400" />
                  <span>https://tucuenta.com</span>
                </div>
              </div>

              {/* Vista previa limpia de interfaz de sitio web comercial */}
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800/80 space-y-4 shadow-inner">
                {/* Header Mockup */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                      W
                    </div>
                    <span className="text-xs font-bold text-white">Tu Marca / Negocio</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-semibold">
                    Contacto
                  </div>
                </div>

                {/* Hero Banner Mockup */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-950/60 to-violet-950/60 border border-blue-800/30 space-y-2">
                  <div className="w-3/4 h-3 rounded bg-white/90" />
                  <div className="w-1/2 h-2 rounded bg-slate-400" />
                  <div className="w-24 h-6 rounded bg-gradient-to-r from-blue-600 to-indigo-600 mt-2" />
                </div>

                {/* Grid de servicios preview */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="w-4 h-4 rounded bg-emerald-400/20 text-emerald-400 flex items-center justify-center text-[10px]">
                      ✓
                    </div>
                    <div className="w-full h-2 rounded bg-slate-400" />
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="w-4 h-4 rounded bg-blue-400/20 text-blue-400 flex items-center justify-center text-[10px]">
                      ⚡
                    </div>
                    <div className="w-full h-2 rounded bg-slate-400" />
                  </div>
                </div>
              </div>

              {/* Muestras de rendimiento e impacto */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    99
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200 block text-[11px]">PageSpeed</span>
                    <span className="text-[10px] text-slate-400">Google Score</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200 block text-[11px]">100% Diseño</span>
                    <span className="text-[10px] text-slate-400">Premium & Móvil</span>
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
            className="flex flex-col items-center gap-2 text-xs text-slate-400 hover:text-blue-400 transition-colors group"
          >
            <span>Conocer servicios</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
