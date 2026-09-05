import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { HiddenCalculator } from '@/components/HiddenCalculator';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden bg-grid-pattern">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
      <HiddenCalculator />
    </main>
  );
}
