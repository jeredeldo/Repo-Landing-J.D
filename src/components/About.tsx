'use client';

import { motion } from 'framer-motion';
import { UserCheck, Award, Sparkles, ShieldCheck, Zap, Laptop, Clock, ThumbsUp } from 'lucide-react';
import { personalData, statsData } from '@/data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de sección */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Sobre Mí</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Compromiso, diseño moderno y <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">resultados reales</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Desarrollo soluciones digitales a medida pensadas para fortalecer la presencia online de tu negocio.
          </p>
        </div>

        {/* Contenido Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio orientada a negocios */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {personalData.fullBio.map((paragraph, index) => (
              <p key={index} className="glass-card p-6 rounded-2xl border border-slate-800/80 shadow-md">
                {paragraph}
              </p>
            ))}

            {/* Principios clave */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm">Entregas en Fecha</h4>
                  <p className="text-xs text-slate-400 mt-1">Cumplimiento estricto de plazos acordados sin sorpresas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm">Código & Diseño Limpio</h4>
                  <p className="text-xs text-slate-400 mt-1">Páginas seguras, fáciles de administrar y mantener.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: Tarjetas de Estadísticas */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between hover:-translate-y-1 transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {idx === 0 && <ThumbsUp className="w-5 h-5" />}
                    {idx === 1 && <Clock className="w-5 h-5" />}
                    {idx === 2 && <Zap className="w-5 h-5" />}
                    {idx === 3 && <Sparkles className="w-5 h-5" />}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="font-semibold text-slate-200 text-sm mt-1">{stat.label}</p>
                </div>
                <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/80">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
