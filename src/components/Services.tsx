'use client';

import { motion } from 'framer-motion';
import { Rocket, Building2, ShoppingBag, Zap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Rocket: Rocket,
  Building2: Building2,
  ShoppingBag: ShoppingBag,
  Zap: Zap,
};

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-slate-950/60 border-t border-slate-800/40">
      {/* Luz de fondo sutil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Servicios Profesionales</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Soluciones digitales para <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">hacer crecer tu negocio</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Diseño y desarrollo páginas web modernas, rápidas y optimizadas para transmitir profesionalismo y convertir más visitantes en clientes.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Rocket;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between relative group hover:border-blue-500/40 transition-all duration-300 ${
                  service.popular ? 'ring-1 ring-blue-500/30' : ''
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
                    Más Solicitado
                  </span>
                )}

                <div>
                  {/* Ícono de servicio */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Lista de características */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón Solicitar Presupuesto */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 border border-slate-800 hover:border-transparent text-slate-200 hover:text-white text-xs font-semibold transition-all group/btn"
                >
                  <span>Pedir Presupuesto</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
