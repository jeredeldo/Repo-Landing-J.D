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
    <section id="services" className="py-24 relative bg-black border-t border-zinc-900">
      {/* Resplandor ambiental dorado */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Soluciones ALBION WEB</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Servicios Digitales <span className="text-gold-gradient">de Alto Rendimiento</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-base sm:text-lg">
            Diseñamos y desarrollamos plataformas web modernas, ultra veloces e inmunes a la obsolescencia técnica.
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
                className={`glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative group hover:border-amber-500/40 transition-all duration-300 ${
                  service.popular ? 'ring-1 ring-amber-500/30' : ''
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-3 right-6 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gold-gradient text-black shadow-lg shadow-amber-500/20">
                    Más Solicitado
                  </span>
                )}

                <div>
                  {/* Ícono de servicio con dorado */}
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-black transition-all">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors uppercase tracking-wide">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Lista de características */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón Solicitar Presupuesto */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-gold-gradient border border-zinc-800 hover:border-amber-400 text-zinc-200 hover:text-black text-xs font-black uppercase tracking-wider transition-all group/btn shadow-md"
                >
                  <span>Pedir Presupuesto</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
