import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-200 selection:bg-pink-500/30 selection:text-pink-200">
      {/* Top Navbar */}
      <Navbar onOpenCv={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenCv={() => setIsCvModalOpen(true)} />
        <About onOpenCv={() => setIsCvModalOpen(true)} />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Curriculum Vitae Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}

export default App;
