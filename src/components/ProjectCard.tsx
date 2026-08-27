'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Globe } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300 shadow-xl"
    >
      <div>
        {/* Visual Mockup Placeholder de sitio web comercial */}
        <div className="relative w-full h-52 bg-slate-950 p-4 border-b border-slate-800/80 overflow-hidden group-hover:bg-slate-900/90 transition-colors">
          {/* Fondo gradiente decorativo */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-violet-600/30 blur-2xl rounded-full pointer-events-none" />
          
          {/* UI Header Mockup de sitio comercial */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/60">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <span className="text-[10px] font-mono text-blue-400 font-semibold">{project.clientBadge || "Proyecto Web"}</span>
          </div>

          {/* Abstract Website Graphic Preview */}
          <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-3.5 h-32 flex flex-col justify-between shadow-inner transform group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-200">{project.title}</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800/50 font-semibold">
                Online
              </span>
            </div>

            {/* Layout mockup lines */}
            <div className="space-y-2 my-1">
              <div className="w-3/4 h-2 rounded bg-slate-700/80" />
              <div className="w-1/2 h-2 rounded bg-slate-800" />
              <div className="flex gap-2 pt-1">
                <div className="w-20 h-5 rounded bg-blue-600/30 border border-blue-500/40" />
              </div>
            </div>
          </div>
        </div>

        {/* Info del Proyecto */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-950/60 text-amber-400 border border-amber-800/50 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Destacado
              </span>
            )}
          </div>

          <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tags de tecnologías */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer con Enlace a la Demo en vivo */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-800/40 mt-2">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Ver Sitio Web en Vivo</span>
        </a>
      </div>
    </motion.div>
  );
}
