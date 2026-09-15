import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Layers,
  Sparkles,
  Cpu,
  CheckCircle2,
  Sliders,
  Terminal,
  FileCode,
  Layout,
  ExternalLink,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { HtmlIcon, CssIcon, JavascriptIcon, FigmaIcon, ReactIcon, TailwindIcon } from './TechIcons';

export const Skills: React.FC = () => {
  const [selectedDemoTab, setSelectedDemoTab] = useState<'figma' | 'html' | 'css' | 'js'>('figma');

  const playgroundCode = {
    figma: `// Figma Design System Tokens (8pt Grid & Typography)
{
  "component": "InteractiveButton",
  "variants": {
    "primary": {
      "fill": "linear-gradient(135deg, #38BDF8, #A855F7, #EC4899)",
      "padding": "12px 24px",
      "borderRadius": "12px",
      "font": "Plus Jakarta Sans / 600",
      "boxShadow": "0 8px 24px -4px rgba(168, 85, 247, 0.4)"
    }
  },
  "constraints": "AutoLayout / Horizontal Hug / Center"
}`,
    html: `<!-- Semantic, Accessible HTML5 Structure -->
<button 
  type="button" 
  class="btn-cinematic" 
  aria-label="Send job application to Santi Artika"
  data-role="primary-action"
>
  <span class="btn-icon" aria-hidden="true">⚡</span>
  <span class="btn-text">Connect for Malaysia Role</span>
  <span class="badge-online">Active</span>
</button>`,
    css: `/* Modern CSS3 with Flexbox & Smooth Pseudo Transitions */
.btn-cinematic {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #38bdf8, #a855f7, #ec4899);
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-cinematic:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(168, 85, 247, 0.5);
}`,
    js: `// ES6+ Event Delegation & Micro-Interaction Feedback
document.querySelector('.btn-cinematic')?.addEventListener('click', async (e) => {
  e.preventDefault();
  const btn = e.currentTarget;
  btn.classList.add('loading');
  
  // Simulated asynchronous hiring notification
  await new Promise((resolve) => setTimeout(resolve, 600));
  btn.classList.remove('loading');
  btn.classList.add('success');
  console.log("Candidate Santi Artika notified. Response dispatched!");
});`,
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#070a13]">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-pink-600/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Skills & <span className="gradient-text">Engineering Toolset</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Proficient across the core front-end triangle (HTML5, CSS3, JavaScript) and Figma design systems, backed by modern development standards.
          </p>
        </div>

        {/* Featured Core 4 Showcase: HTML, CSS, JavaScript, and Figma */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 text-center sm:text-left flex items-center gap-2">
            <span>Primary Competencies</span>
            <div className="h-px bg-slate-800 flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* HTML5 */}
            <div className="p-6 rounded-2xl glass-card border border-orange-500/20 hover:border-orange-500/50 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
                  <HtmlIcon size={32} />
                </div>
                <span className="text-xs font-mono text-orange-400 font-semibold bg-orange-500/10 px-2.5 py-1 rounded-md">
                  95% Mastery
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                HTML5
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Semantic markup, WAI-ARIA accessibility guidelines, SEO schema metadata, clean DOM structure, and native form validation.
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                Clean semantics • Zero broken tags
              </div>
            </div>

            {/* CSS3 */}
            <div className="p-6 rounded-2xl glass-card border border-blue-500/20 hover:border-blue-500/50 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <CssIcon size={32} />
                </div>
                <span className="text-xs font-mono text-blue-400 font-semibold bg-blue-500/10 px-2.5 py-1 rounded-md">
                  92% Mastery
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                CSS3 & Styling
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                CSS Grid, Flexbox, custom properties/variables, smooth keyframe transitions, responsive media queries, and Tailwind CSS.
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                Mobile-first • Fluid typography
              </div>
            </div>

            {/* JavaScript */}
            <div className="p-6 rounded-2xl glass-card border border-yellow-500/20 hover:border-yellow-500/50 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                  <JavascriptIcon size={32} />
                </div>
                <span className="text-xs font-mono text-yellow-400 font-semibold bg-yellow-500/10 px-2.5 py-1 rounded-md">
                  88% Mastery
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                JavaScript (ES6+)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                DOM manipulation, Event delegation, Async/Await, Fetch API, LocalStorage persistence, and clean modular code patterns.
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                No external bloated libraries
              </div>
            </div>

            {/* Figma */}
            <div className="p-6 rounded-2xl glass-card border border-purple-500/20 hover:border-purple-500/50 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
                  <FigmaIcon size={32} />
                </div>
                <span className="text-xs font-mono text-purple-400 font-semibold bg-purple-500/10 px-2.5 py-1 rounded-md">
                  90% Mastery
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                Figma Design
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Auto-layout mechanics, design systems, typography hierarchy, component variants, and 1:1 pixel-perfect developer handoff.
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                Tokens to CSS variables translation
              </div>
            </div>
          </div>
        </div>

        {/* Interactive "Figma to Code Playground" */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-[#0a0f1d] border border-slate-800 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Recruiter Proof of Work
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Figma-to-Code Implementation Demonstration
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                See how Santi inspects design tokens in Figma and cleanly implements them in HTML5, CSS3, and JavaScript.
              </p>
            </div>

            {/* Tab selector */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setSelectedDemoTab('figma')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  selectedDemoTab === 'figma'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                <span>1. Figma Tokens</span>
              </button>

              <button
                onClick={() => setSelectedDemoTab('html')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  selectedDemoTab === 'html'
                    ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>2. HTML5</span>
              </button>

              <button
                onClick={() => setSelectedDemoTab('css')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  selectedDemoTab === 'css'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>3. CSS3</span>
              </button>

              <button
                onClick={() => setSelectedDemoTab('js')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  selectedDemoTab === 'js'
                    ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>4. JavaScript</span>
              </button>
            </div>
          </div>

          {/* Code Viewer Panel */}
          <div className="rounded-xl bg-[#06080F] border border-slate-850 p-4 sm:p-5 font-mono text-xs overflow-x-auto text-slate-300 leading-relaxed">
            <pre>{playgroundCode[selectedDemoTab]}</pre>
          </div>
        </div>

        {/* All Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.slice(1).map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4"
            >
              <h4 className="text-base font-bold text-white border-b border-slate-800/80 pb-3">
                {category.title}
              </h4>
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="font-mono text-cyan-400">{skill.level}%</span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
