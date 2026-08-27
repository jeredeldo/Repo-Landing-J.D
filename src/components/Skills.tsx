'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Code2,
  Server,
  Database,
  Globe,
  Palette,
  Zap,
  Sparkles,
  GitBranch,
  Cloud,
  Box,
  Send,
  Repeat,
  ShieldCheck,
  Layout,
  Layers,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';
import { FigmaIcon } from './Icons';

// Mapeo dinámico de íconos
const iconMap: Record<string, React.ElementType> = {
  Zap: Zap,
  Code2: Code2,
  Palette: Palette,
  Sparkles: Sparkles,
  Layout: Layout,
  Layers: Layers,
  Server: Server,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Globe: Globe,
  Database: Database,
  GitBranch: GitBranch,
  Cloud: Cloud,
  Box: Box,
  Send: Send,
  Figma: FigmaIcon,
  Repeat: Repeat,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-black border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-white" />
            <span>Infraestructura ALBION</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Estándares Tecnológicos <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">& Herramientas</span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl text-base">
            Tecnologías de vanguardia con las que desarrollamos cada proyecto para garantizar máxima estabilidad y velocidad.
          </p>

          {/* Filtros de Categoría */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-black shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              Todas
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all ${
                  activeTab === cat.id
                    ? 'bg-white text-black shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de habilidades */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {activeTab === 'all' && (
                <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2 border-b border-zinc-800 pb-2">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  {category.name}
                </h3>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = iconMap[skill.iconName] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="glass-card p-4 rounded-xl border border-white/10 flex items-center justify-between gap-3 group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-xs tracking-wide group-hover:text-zinc-200 transition-colors uppercase">
                            {skill.name}
                          </h4>
                          {skill.level && (
                            <span className="text-[10px] text-zinc-400 block font-mono">
                              {skill.level}
                            </span>
                          )}
                        </div>
                      </div>

                      {skill.featured && (
                        <span className="w-2 h-2 rounded-full bg-white shadow-sm shadow-white/50" title="Estándar Principal" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
