'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Code } from 'lucide-react';
import { projectsData, personalData } from '@/data/portfolioData';
import { ProjectCard } from './ProjectCard';

const categories = ['Todos', 'Full Stack', 'Frontend', 'Backend', 'AI / Innovation'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Luz ambiental */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portafolio</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyectos <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Destacados</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-base">
            Una selección de aplicaciones web que representan mi enfoque en código limpio, experiencia de usuario e innovación tecnológica.
          </p>

          {/* Filtro de Categorías */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md'
                    : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
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
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-card text-slate-300 hover:text-white hover:border-blue-500/40 text-sm font-semibold transition-all group shadow-md"
          >
            <Code className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <span>Ver más repositorios en GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
}
