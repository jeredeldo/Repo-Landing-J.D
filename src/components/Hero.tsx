'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Terminal, Sparkles, FolderGit2, Mail, CheckCircle2, Code2, Layers, Cpu, Globe } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Luces de fondo (Radial gradients) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/20 to-violet-600/20 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna izquierda: Información principal */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge de disponibilidad */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 dark:bg-blue-950/60 light:bg-blue-50 border border-blue-800/50 dark:border-blue-800/50 light:border-blue-200 text-blue-400 dark:text-blue-400 light:text-blue-700 text-xs font-semibold tracking-wide shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Disponible para nuevos proyectos
              </span>
            </motion.div>

            {/* Nombre y Título */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                {personalData.name}
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="mt-3 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span>{personalData.role}</span>
            </motion.h2>

            {/* Tagline / Bio corta */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl"
            >
              {personalData.shortBio} Especializado en crear aplicaciones web rápidas, escalables y con estándares de diseño internacional estilo SaaS.
            </motion.p>

            {/* Botones de acción (CTAs) */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Ver Proyectos</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold text-sm hover:text-white hover:border-slate-600 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contactame</span>
              </a>
            </motion.div>

            {/* Tags rápidos de tecnología */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 w-full flex flex-wrap items-center gap-2 text-xs text-slate-400"
            >
              <span className="font-medium text-slate-400 dark:text-slate-400 light:text-slate-600 mr-2">Stack Principal:</span>
              {['Next.js 15', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 font-mono"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna derecha: Tarjeta visual de desarrollador */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow de tarjeta */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl blur-xl opacity-30 animate-pulse-glow" />

            <div className="relative w-full max-w-md glass-card rounded-2xl p-6 overflow-hidden shadow-2xl">
              {/* Header de ventana de código */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>jeremias.dev.ts</span>
                </div>
              </div>

              {/* Avatar e info de perfil */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 p-0.5 shadow-md">
                    <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-blue-400 overflow-hidden font-bold text-xl">
                      <Code2 className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-slate-950 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-white">{personalData.name}</h3>
                  <p className="text-xs text-blue-400 font-medium">{personalData.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-slate-400" />
                    <span>{personalData.location}</span>
                  </p>
                </div>
              </div>

              {/* Fragmento de código elegante */}
              <div className="rounded-xl bg-slate-950/90 p-4 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2 leading-relaxed">
                <div>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-400">&apos;Jeremías Del Do&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-400">&apos;Ready to Build&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">focus:</span> [
                  <span className="text-amber-300">&apos;Web Architecture&apos;</span>,{' '}
                  <span className="text-amber-300">&apos;UI/UX&apos;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">passion:</span>{' '}
                  <span className="text-cyan-400">() =&gt;</span>{' '}
                  <span className="text-emerald-400">&apos;Clean & Scalable Code&apos;</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Tarjetas flotantes decorativas */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Layers className="w-4 h-4 text-violet-400" />
                  Full Stack Tech
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <Cpu className="w-3.5 h-3.5" />
                  100% Performance
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs text-slate-400 hover:text-blue-400 transition-colors group"
          >
            <span>Descubrir más</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
