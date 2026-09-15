import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Copy, Check, Sparkles, ExternalLink, Code, Eye, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LaptopMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jsx' | 'css' | 'js' | 'preview'>('jsx');
  const [copied, setCopied] = useState(false);
  const [likeCount, setLikeCount] = useState(24);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTheme, setActiveTheme] = useState<'emerald' | 'cyan' | 'pink'>('cyan');

  const codeSnippets = {
    jsx: `// Santi Artika - Junior Web Developer
// High-performance, Accessible Component
import { useState, useEffect } from 'react';

export function ProjectShowcase({ title, metrics }) {
  const [isInteractive, setIsInteractive] = useState(true);

  return (
    <article className="card-cinematic" data-status="ready">
      <header className="flex justify-between items-center">
        <span className="badge-gmt8">🇲🇾 Ready for Malaysia</span>
        <span className="text-cyan-400 font-mono">v2.4.0</span>
      </header>
      <h3 className="title-gradient">{title}</h3>
      <div className="metrics-grid">
        {metrics.map((m) => (
          <MetricPill key={m.label} value={m.value} />
        ))}
      </div>
    </article>
  );
}`,
    css: `/* Modern CSS3 with Custom Variables & Glow */
:root {
  --primary-glow: #38bdf8;
  --accent-purple: #a855f7;
  --accent-pink: #ec4899;
  --dark-surface: rgba(10, 15, 29, 0.85);
}

.card-cinematic {
  background: var(--dark-surface);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-cinematic:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -15px rgba(56, 189, 248, 0.25);
}`,
    js: `// Clean ES6+ Architecture & Async Logic
async function initRemittanceGateway(currencyPair = 'MYR_IDR') {
  try {
    const rates = await fetchLiveExchangeRate(currencyPair);
    const calculator = new CurrencyCalculator({
      source: 'MYR',
      target: 'IDR',
      baseRate: rates.rate
    });
    
    calculator.onUpdate((result) => {
      renderLiveExchangeUI(result);
    });
    console.log("⚡ Gateway initialized at 60fps");
  } catch (error) {
    handleGracefulFallback(error);
  }
}`,
  };

  const handleCopy = () => {
    const text = activeTab !== 'preview' ? codeSnippets[activeTab] : codeSnippets.jsx;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#38BDF8', '#A855F7', '#EC4899'],
    });
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Ambient background glow behind laptop */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl opacity-60 -z-10" />

      {/* Floating Status Badges around the laptop */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="hidden sm:flex absolute -left-6 top-12 z-20 items-center gap-2 px-3 py-2 rounded-xl glass-panel text-xs text-slate-200 border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-semibold text-white">⚡ 99.8%</span>
        <span className="text-slate-400">Lighthouse Score</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="hidden sm:flex absolute -right-6 bottom-16 z-20 items-center gap-2 px-3 py-2 rounded-xl glass-panel text-xs text-slate-200 border border-pink-500/30 shadow-lg shadow-pink-500/10"
      >
        <Sparkles className="w-3.5 h-3.5 text-pink-400" />
        <span className="font-semibold text-white">Pixel-Perfect</span>
        <span className="text-slate-400">Figma to Code</span>
      </motion.div>

      {/* Laptop Screen Bezel */}
      <div className="relative rounded-2xl bg-[#0d121f] p-3 border border-slate-700/80 shadow-2xl shadow-black/80">
        {/* Top Bezel Camera Dot */}
        <div className="flex justify-center mb-2">
          <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700/60" />
        </div>

        {/* Screen Display Container */}
        <div className="rounded-lg bg-[#07090e] border border-slate-800/80 overflow-hidden font-sans">
          {/* Code Editor Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-3 py-2 bg-[#0a0e18] border-b border-slate-800/80 gap-2">
            {/* Mac Traffic Lights */}
            <div className="flex items-center gap-1.5">
              <span className="mac-dot bg-rose-500/90" />
              <span className="mac-dot bg-amber-500/90" />
              <span className="mac-dot bg-emerald-500/90" />
              <span className="ml-2 text-[11px] font-mono text-slate-400 hidden sm:inline">
                santi-artika-workspace ~/dev
              </span>
            </div>

            {/* Editor File Tabs */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('jsx')}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                  activeTab === 'jsx'
                    ? 'bg-slate-800/90 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                App.jsx
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                  activeTab === 'css'
                    ? 'bg-slate-800/90 text-purple-400 border border-purple-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                styles.css
              </button>
              <button
                onClick={() => setActiveTab('js')}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                  activeTab === 'js'
                    ? 'bg-slate-800/90 text-amber-400 border border-amber-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                main.js
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1 transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-pink-300 border border-pink-500/40'
                    : 'text-pink-400/80 hover:text-pink-300 hover:bg-slate-900'
                }`}
              >
                <Eye className="w-3 h-3" />
                <span>Live Preview</span>
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopy}
                title="Copy code"
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Screen Content Area */}
          <div className="p-3 sm:p-4 min-h-[260px] sm:min-h-[290px] font-mono text-xs overflow-x-auto">
            <AnimatePresence mode="wait">
              {activeTab !== 'preview' ? (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1"
                >
                  {codeSnippets[activeTab].split('\n').map((line, index) => (
                    <div key={index} className="flex leading-relaxed">
                      <span className="w-7 select-none text-slate-600 text-right pr-3 shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-slate-300 whitespace-pre">
                        {line.startsWith('//') || line.startsWith('/*') || line.startsWith(' *') || line.endsWith('*/') ? (
                          <span className="text-slate-500 italic">{line}</span>
                        ) : line.includes('import') || line.includes('export') || line.includes('const') || line.includes('function') || line.includes('return') || line.includes('async') || line.includes('await') ? (
                          <span className="text-purple-400 font-semibold">{line}</span>
                        ) : line.includes('className') || line.includes('target') || line.includes(':root') ? (
                          <span className="text-cyan-300">{line}</span>
                        ) : line.includes('Santi') || line.includes('Malaysia') || line.includes('title') ? (
                          <span className="text-pink-300">{line}</span>
                        ) : (
                          line
                        )}
                      </span>
                    </div>
                  ))}
                  {/* Blinking cursor */}
                  <div className="flex items-center mt-2 pl-7">
                    <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
                  </div>
                </motion.div>
              ) : (
                /* Live Preview of Santi's Interactive UI */
                <motion.div
                  key="preview-box"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="h-full flex flex-col justify-center items-center py-2"
                >
                  <div className="w-full max-w-sm rounded-xl bg-gradient-to-b from-slate-900 to-[#0c1322] border border-cyan-500/30 p-4 shadow-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 text-[10px] font-sans font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        Interactive UI Preview
                      </span>
                      <span className="text-[10px] text-slate-400 font-sans">
                        🇲🇾 Open to Malaysia
                      </span>
                    </div>

                    <h4 className="text-sm font-sans font-bold text-white mb-1">
                      Santi Artika <span className="text-slate-400 font-normal">| Web Developer</span>
                    </h4>
                    <p className="text-xs font-sans text-slate-300 leading-relaxed mb-3">
                      Crafting fast, accessible, and responsive user experiences for modern businesses.
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => {
                            setIsLiked(!isLiked);
                            setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
                            if (!isLiked) triggerConfetti();
                          }}
                          className={`px-2 py-1 rounded text-xs font-sans flex items-center gap-1 transition-all ${
                            isLiked
                              ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          <span>{isLiked ? '❤️' : '🤍'}</span>
                          <span>{likeCount}</span>
                        </button>
                        <span className="px-2 py-1 text-[11px] font-sans rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          Active Ready
                        </span>
                      </div>

                      <a
                        href="#contact"
                        className="px-2.5 py-1 text-xs font-sans font-medium rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity"
                      >
                        Hire Santi
                      </a>
                    </div>
                  </div>
                  <p className="text-[10px] font-sans text-slate-500 mt-2 text-center">
                    ↑ Live React preview rendered inside editor mockup
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Terminal / Status Footer */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-[#05070c] border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Ready
              </span>
              <span>UTF-8</span>
              <span>React 19</span>
            </div>
            <div className="text-slate-400">
              Target: Malaysia & SEA Tech
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Keyboard Base / Stand */}
      <div className="relative mx-auto w-[94%] h-3 bg-gradient-to-b from-[#1b2234] to-[#0d121f] rounded-b-xl border-x border-b border-slate-700/60 shadow-lg">
        {/* Trackpad indentation */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-700/60 rounded-b" />
      </div>
      <div className="mx-auto w-[65%] h-1 bg-slate-800/50 rounded-b-lg shadow-md" />
    </div>
  );
};
