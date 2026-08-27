'use client';

import { motion } from 'framer-motion';
import { UserCheck, Award, Sparkles, ShieldCheck, Zap, Laptop, Clock, ThumbsUp } from 'lucide-react';
import { personalData, statsData, brandData } from '@/data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de sección */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5 text-white" />
            <span>Sobre ALBION WEB</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Filosofía de trabajo & <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">Resultados de Excelencia</span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base sm:text-lg">
            Creamos plataformas web a medida para fortalecer la autoridad online de tu marca o empresa.
          </p>
        </div>

        {/* Contenido Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio de la marca */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {personalData.fullBio.map((paragraph, index) => (
              <p key={index} className="glass-card p-6 rounded-2xl border border-white/10 shadow-xl">
                {paragraph}
              </p>
            ))}

            {/* Principios clave */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <Clock className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider">Entregas en Fecha</h4>
                  <p className="text-xs text-zinc-400 mt-1">Cumplimiento estricto de plazos acordados sin retrasos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <ShieldCheck className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider">Ingeniería Moderna</h4>
                  <p className="text-xs text-zinc-400 mt-1">Páginas seguras, limpias y de carga instantánea.</p>
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
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:-translate-y-1 transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                    {idx === 0 && <ThumbsUp className="w-5 h-5" />}
                    {idx === 1 && <Clock className="w-5 h-5" />}
                    {idx === 2 && <Zap className="w-5 h-5" />}
                    {idx === 3 && <Sparkles className="w-5 h-5" />}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                    {stat.value}
                  </h3>
                  <p className="font-bold text-zinc-200 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
                <p className="text-[11px] text-zinc-400 mt-3 pt-3 border-t border-zinc-800">
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
