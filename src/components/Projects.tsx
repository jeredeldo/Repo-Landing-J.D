'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Code } from 'lucide-react';
import { projectsData, personalData } from '@/data/portfolioData';
import { ProjectCard } from './ProjectCard';

const categories = ['Todos', 'Full Stack', 'Frontend', 'Backend'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black border-t border-zinc-900">
      {/* Resplandor ambiental */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5 text-white" />
            <span>Portafolio ALBION WEB</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Trabajos <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">Destacados</span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl text-base">
            Una muestra de soluciones web construidas con rigor técnico, estética monocromática y rendimiento superior.
          </p>

          {/* Filtro de Categorías */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-black shadow-md'
                    : 'glass-card text-zinc-400 hover:text-white border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        {/* Callout GitHub */}
        <div className="mt-16 flex justify-center">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass-card text-zinc-300 hover:text-white border-white/10 text-xs font-extrabold uppercase tracking-wider transition-all group shadow-md"
          >
            <Code className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span>Ver más repositorios en GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
}
