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
      className="glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300 shadow-2xl"
    >
      <div>
        {/* Visual Mockup Placeholder ALBION WEB con toque Dorado */}
        <div className="relative w-full h-52 bg-black p-4 border-b border-zinc-800 overflow-hidden group-hover:bg-zinc-950 transition-colors">
          {/* Fondo gradiente decorativo */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-500/20 to-yellow-600/10 blur-2xl rounded-full pointer-events-none" />
          
          {/* UI Header Mockup de sitio comercial */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
              {project.clientBadge || "ALBION WEB"}
            </span>
          </div>

          {/* Abstract Website Graphic Preview */}
          <div className="rounded-xl bg-zinc-900/90 border border-zinc-800 p-3.5 h-32 flex flex-col justify-between shadow-inner transform group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gold-gradient text-black flex items-center justify-center font-black text-xs">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">{project.title}</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] bg-gold-gradient text-black font-black uppercase tracking-wider">
                Online
              </span>
            </div>

            {/* Layout mockup lines */}
            <div className="space-y-2 my-1">
              <div className="w-3/4 h-2 rounded bg-white/80" />
              <div className="w-1/2 h-2 rounded bg-amber-400/60" />
              <div className="flex gap-2 pt-1">
                <div className="w-20 h-5 rounded bg-gold-gradient text-black font-black text-[8px] flex items-center justify-center uppercase tracking-wider">
                  Ver Proyecto
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info del Proyecto */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors uppercase tracking-wide">
              {project.title}
            </h3>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-gold-gradient text-black flex items-center gap-1 shadow-md shadow-amber-500/20">
                <Sparkles className="w-3 h-3 fill-black text-black" />
                Destacado
              </span>
            )}
          </div>

          <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tags de tecnologías */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-zinc-900 text-zinc-300 border border-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer con Enlace a la Demo en vivo */}
      <div className="px-6 pb-6 pt-2 border-t border-zinc-800/80 mt-2">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gold-gradient hover:bg-gradient-to-r hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 hover:scale-102"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Ver Sitio Web en Vivo</span>
        </a>
      </div>
    </motion.div>
  );
}
