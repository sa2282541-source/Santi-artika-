import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, Sparkles, MapPin, ExternalLink, ShieldCheck, Briefcase } from 'lucide-react';
import { HtmlIcon, CssIcon, JavascriptIcon, FigmaIcon } from './TechIcons';
import { LaptopMockup } from './LaptopMockup';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  const techStack = [
    {
      name: 'HTML5',
      icon: <HtmlIcon size={28} />,
      label: 'Semantic & A11y',
      color: 'hover:border-orange-500/40 hover:bg-orange-500/10',
    },
    {
      name: 'CSS3',
      icon: <CssIcon size={28} />,
      label: 'Flexbox & Grid',
      color: 'hover:border-blue-500/40 hover:bg-blue-500/10',
    },
    {
      name: 'JavaScript',
      icon: <JavascriptIcon size={28} />,
      label: 'ES6+ & Async APIs',
      color: 'hover:border-yellow-500/40 hover:bg-yellow-500/10',
    },
    {
      name: 'Figma',
      icon: <FigmaIcon size={28} />,
      label: 'Pixel-Perfect Handoff',
      color: 'hover:border-purple-500/40 hover:bg-purple-500/10',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-cinematic-glow"
    >
      {/* Cinematic ambient background glow rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-pink-600/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-pink-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Status Pill: Targeting Malaysia & International */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs text-slate-300 shadow-lg shadow-cyan-500/5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium text-white">Available for Hire</span>
            <span className="text-slate-500">•</span>
            <span className="text-cyan-300 font-mono flex items-center gap-1">
              <MapPin className="w-3 h-3 text-pink-400" />
              Indonesia ➔ Open to Malaysia & Global Remote
            </span>
          </div>
        </motion.div>

        {/* Two-Column Grid: Left (Typography & Badges), Right (Laptop Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Required Typography */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Role pill / eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium tracking-wide uppercase mb-3">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                Junior Web Developer
              </div>

              {/* Main Headline Name */}
              <h1
                id="hero-name"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-display"
              >
                Santi Artika
              </h1>

              {/* Required quote / mission statement */}
              <p
                id="hero-tagline"
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 tracking-tight gradient-text"
              >
                Turn Ideas Into Beautiful Websites
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Crafting high-impact, pixel-perfect web interfaces with modern{' '}
              <span className="text-white font-medium">HTML5</span>,{' '}
              <span className="text-white font-medium">CSS3</span>,{' '}
              <span className="text-white font-medium">JavaScript</span>, and{' '}
              <span className="text-white font-medium">Figma</span>. Ready to contribute to innovative tech teams in Malaysia and international enterprises.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>View Portfolio Projects</span>
                <ArrowDown className="w-4 h-4 text-pink-200" />
              </a>

              <button
                id="hero-download-cv-btn"
                onClick={onOpenCv}
                className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 glass-panel hover:text-white hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV (PDF)</span>
              </button>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Let's Talk
              </a>
            </motion.div>

            {/* Featured Requested Icons: HTML, CSS, JavaScript, and Figma */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-center lg:justify-start gap-2">
                <span>Core Expertise & Tooling</span>
                <span className="h-px w-12 bg-slate-800" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-lg mx-auto lg:mx-0">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    id={`hero-tech-${tech.name.toLowerCase()}`}
                    className={`p-2.5 rounded-xl glass-card border border-slate-800/90 transition-all duration-200 flex flex-col items-center lg:items-start ${tech.color}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {tech.icon}
                      <span className="font-semibold text-xs text-white">{tech.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 text-center lg:text-left">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Laptop / Coding Mockup */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full"
            >
              <LaptopMockup />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
