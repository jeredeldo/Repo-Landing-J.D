'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { personalData } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Sitio Web Corporativo',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    // Simulación de envío exitoso
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', projectType: 'Sitio Web Corporativo', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-black border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            <span>Presupuestos & Proyectos</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Iniciá tu proyecto con <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">ALBION WEB</span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl text-base sm:text-lg">
            Solicitá tu presupuesto o asesoramiento técnico. Te responderemos en menos de 24 horas laborables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Tarjeta de Información de Contacto Directo */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Contacto Directo</h3>
              
              <div className="space-y-4">
                {/* Email Directo */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-white/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] text-zinc-400 block font-mono uppercase tracking-wider">Email Oficial</span>
                    <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">
                      {personalData.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-white/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] text-zinc-400 block font-mono uppercase tracking-wider">LinkedIn</span>
                    <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">
                      Jeremías Del Do
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* GitHub */}
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-white/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] text-zinc-400 block font-mono uppercase tracking-wider">GitHub</span>
                    <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">
                      @jeredeldo
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Ubicación */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 block font-mono uppercase tracking-wider">Modalidad</span>
                    <span className="text-sm font-bold text-zinc-200">
                      {personalData.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span>Garantía de confidencialidad y presupuesto personalizado.</span>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Solicitud de Presupuesto ALBION WEB */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Pedir Presupuesto</h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-700 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-white mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider">¡Solicitud Enviada!</h4>
                  <p className="text-sm text-zinc-300">
                    Gracias por comunicarte con ALBION WEB. Nos pondremos en contacto a la brevedad a <span className="font-bold text-white">{formData.email || 'tu email'}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Nombre / Empresa
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej: Empresa / Marca"
                        className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Email Corporativo
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contacto@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Servicio Requerido
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:outline-none focus:border-white text-sm transition-all"
                    >
                      <option value="Sitio Web Corporativo">Sitio Web Corporativo / Institucional</option>
                      <option value="Landing Page">Landing Page de Alta Conversión</option>
                      <option value="Tienda Online">Tienda Online / E-Commerce</option>
                      <option value="Rediseño / Optimización">Rediseño & Optimización PageSpeed</option>
                      <option value="Otro">Proyecto Personalizado</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Detalles del Proyecto
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describí brevemente los objetivos de tu sitio web..."
                      className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Enviando solicitud...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Solicitar Presupuesto ALBION WEB</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
