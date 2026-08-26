'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { personalData } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-100/40 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contacto</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ¿Tenés una idea o proyecto en mente? <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">Hablemos</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-base">
            Estoy disponible para oportunidades freelance, contratación a tiempo completo o colaboraciones innovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Tarjeta de Información de Contacto y Redes */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Canales Directos</h3>
              
              <div className="space-y-4">
                {/* LinkedIn */}
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">LinkedIn Perfil</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Jeremías Del Do
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Email Directo</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {personalData.email}
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">GitHub Repositorios</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                      @jeredeldo
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Ubicación */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Ubicación</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      {personalData.location} (Remoto / Presencial)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Enviame un mensaje</h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">¡Mensaje enviado con éxito!</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Gracias por ponerte en contacto. Te responderé a la brevedad a <span className="font-semibold">{personalData.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej: Sofía Martínez"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Tu Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Asunto
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Propuesta de proyecto / Consulta"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hola Jeremías, me gustaría hablar sobre..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Enviando mensaje...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensaje</span>
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
