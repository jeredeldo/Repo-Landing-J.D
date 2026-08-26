import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jeremías Del Do | Full Stack Developer Portfolio',
  description: 'Portfolio personal y profesional de Jeremías Del Do. Desarrollador Full Stack especializado en React, Next.js 15, TypeScript y Node.js.',
  keywords: ['Jeremías Del Do', 'Full Stack Developer', 'Desarrollador Web', 'Next.js 15', 'TypeScript', 'React', 'Portfolio'],
  authors: [{ name: 'Jeremías Del Do' }],
  openGraph: {
    title: 'Jeremías Del Do | Full Stack Developer',
    description: 'Portfolio personal y profesional de Jeremías Del Do. Desarrollador Full Stack.',
    type: 'website',
    locale: 'es_AR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth suppressHydrationWarning">
      <body
        className={`${inter.className} min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-blue-500/30 selection:text-white transition-colors duration-300`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
