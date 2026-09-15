import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070c] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400 text-xs sm:text-sm">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-850">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 p-[1px]">
                <div className="w-full h-full bg-[#05070c] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                  SA
                </div>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Santi Artika
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Junior Web Developer from Indonesia dedicated to building high-performance, accessible, and pixel-perfect web applications. Open to full-time roles in Malaysia and regional remote opportunities.
            </p>
            <div className="flex items-center gap-2 text-xs text-pink-300 font-mono">
              <MapPin className="w-3.5 h-3.5" />
              <span>Indonesia ➔ Ready for Malaysia Relocation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact & Interview
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Connect Directly
            </div>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                title="Email"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed font-mono">
              santiartika.dev@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Santi Artika. All rights reserved. Built with HTML5, CSS3, JavaScript, React & Tailwind.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
