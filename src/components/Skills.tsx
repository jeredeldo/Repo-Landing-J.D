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
  HardDrive,
  Workflow,
  Atom,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';
import { FigmaIcon } from './Icons';

// Mapeo dinámico de íconos
const iconMap: Record<string, React.ElementType> = {
  Atom: Atom,
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
  HardDrive: HardDrive,
  Workflow: Workflow,
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
    <section id="skills" className="py-24 relative bg-slate-950/40 border-y border-slate-800/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/50 text-violet-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tecnologías y <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-base">
            Herramientas y lenguajes que utilizo diariamente para dar vida a proyectos modernos y robustos.
          </p>

          {/* Filtros de Categoría */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Todas
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
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
                <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 border-b border-slate-800/80 pb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
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
                      className="glass-card p-4 rounded-xl border border-slate-800/80 flex items-center justify-between gap-3 group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-200 text-sm group-hover:text-white transition-colors">
                            {skill.name}
                          </h4>
                          {skill.level && (
                            <span className="text-[11px] text-slate-400 block font-medium">
                              {skill.level}
                            </span>
                          )}
                        </div>
                      </div>

                      {skill.featured && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" title="Destacado" />
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
