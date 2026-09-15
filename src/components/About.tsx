import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Globe2,
  Clock,
  Sparkles,
  CheckCircle2,
  Download,
  Plane,
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, CERTIFICATIONS } from '../data/portfolioData';

interface AboutProps {
  onOpenCv: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCv }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'readiness'>('overview');

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#070a12]">
      {/* Subtle section divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            About <span className="gradient-text">Santi Artika</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Bridging technical precision with creative user empathy to engineer high-performance web products.
          </p>
        </div>

        {/* Top Grid: Portrait Photo & Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Portrait Photo Frame with Cinematic Glow */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Cinematic Gradient Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition duration-500" />

              <div className="relative rounded-2xl bg-[#0b101d] p-3 border border-slate-700/80 shadow-2xl">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src="/santi_portrait.jpg"
                    alt="Santi Artika - Junior Web Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Subtle gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/90 via-transparent to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="px-3 py-1.5 rounded-lg bg-[#06080F]/80 backdrop-blur-md border border-white/10 text-xs">
                      <div className="font-bold text-white">Santi Artika</div>
                      <div className="text-[11px] text-cyan-300 font-mono">Junior Web Developer</div>
                    </div>

                    <div className="px-2.5 py-1.5 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Ready to Work
                    </div>
                  </div>
                </div>

                {/* Relocation indicator under photo */}
                <div className="mt-3 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs flex items-center gap-2 text-slate-300">
                  <Plane className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="text-[11px] leading-tight">
                    <strong className="text-white">Relocation Ready:</strong> Open to work in Malaysia (KL, Selangor, Penang) & Global Remote.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Statistics */}
          <div className="lg:col-span-7 space-y-6 text-slate-300">
            <div className="space-y-4 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Hello! I'm <strong className="text-white font-semibold">Santi Artika</strong>, a motivated Junior Web Developer from Indonesia with an intense curiosity for building seamless digital experiences. I specialize in turning design mockups into living, breathing, high-fidelity web applications using <strong className="text-cyan-300 font-medium">HTML5</strong>, <strong className="text-purple-300 font-medium">CSS3</strong>, <strong className="text-yellow-300 font-medium">JavaScript (ES6+)</strong>, and <strong className="text-pink-300 font-medium">Figma</strong>.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                My primary goal is joining an ambitious international engineering team—especially within Malaysia's rapidly growing tech ecosystem. I treat every component with rigorous craftsmanship: writing semantic, accessible markup, ensuring zero layout shift, and making sure web interfaces look breathtaking on screens of all sizes.
              </p>
            </div>

            {/* Metric Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl glass-card border border-slate-800 text-center"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 font-display">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenCv}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:opacity-90 shadow-md shadow-purple-500/20 flex items-center gap-2 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>View Full Resume</span>
              </button>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 glass-panel hover:text-white hover:border-slate-600 transition-colors"
              >
                Schedule an Interview
              </a>
            </div>
          </div>
        </div>

        {/* Tab Navigation for Detailed Credentials */}
        <div className="mt-8">
          <div className="flex justify-center border-b border-slate-800/90 mb-8">
            <div className="flex space-x-2 sm:space-x-4">
              <button
                id="about-tab-overview"
                onClick={() => setActiveTab('overview')}
                className={`pb-3 px-3 sm:px-5 text-sm font-medium transition-all relative flex items-center gap-2 ${
                  activeTab === 'overview'
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Certifications & Education</span>
                {activeTab === 'overview' && (
                  <motion.div
                    layoutId="aboutActiveTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                )}
              </button>

              <button
                id="about-tab-experience"
                onClick={() => setActiveTab('experience')}
                className={`pb-3 px-3 sm:px-5 text-sm font-medium transition-all relative flex items-center gap-2 ${
                  activeTab === 'experience'
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span>Work Experience</span>
                {activeTab === 'experience' && (
                  <motion.div
                    layoutId="aboutActiveTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                  />
                )}
              </button>

              <button
                id="about-tab-readiness"
                onClick={() => setActiveTab('readiness')}
                className={`pb-3 px-3 sm:px-5 text-sm font-medium transition-all relative flex items-center gap-2 ${
                  activeTab === 'readiness'
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Globe2 className="w-4 h-4 text-pink-400" />
                <span>Malaysia & International Readiness</span>
                {activeTab === 'readiness' && (
                  <motion.div
                    layoutId="aboutActiveTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[280px]">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Education */}
                  <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-4">
                    <div className="flex items-center gap-2.5 text-white font-semibold text-lg border-b border-slate-800/80 pb-3">
                      <GraduationCap className="w-5 h-5 text-cyan-400" />
                      <h3>Academic Background</h3>
                    </div>
                    {EDUCATIONS.map((edu, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded">
                            {edu.period}
                          </span>
                          <span className="text-xs text-slate-500">{edu.location}</span>
                        </div>
                        <h4 className="text-base font-bold text-white pt-1">{edu.degree}</h4>
                        <p className="text-sm text-purple-300 font-medium">{edu.institution}</p>
                        <p className="text-xs text-slate-400 leading-relaxed pt-1">{edu.notes}</p>
                      </div>
                    ))}
                  </div>

                  {/* Certifications */}
                  <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-4">
                    <div className="flex items-center gap-2.5 text-white font-semibold text-lg border-b border-slate-800/80 pb-3">
                      <Award className="w-5 h-5 text-pink-400" />
                      <h3>Verified Certifications</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CERTIFICATIONS.map((cert, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-pink-500/30 transition-colors"
                        >
                          <div className="text-xs font-bold text-white leading-snug">{cert.title}</div>
                          <div className="text-[11px] text-pink-300 mt-1">{cert.issuer}</div>
                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60 text-[10px] text-slate-500 font-mono">
                            <span>{cert.date}</span>
                            <span className="text-slate-400">{cert.credentialId}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'experience' && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {EXPERIENCES.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-purple-500/30 transition-colors space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          <p className="text-sm font-medium text-purple-300">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-slate-300 bg-slate-800 px-2.5 py-1 rounded-full">
                            {exp.period}
                          </span>
                          <span className="text-xs text-pink-300 bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-500/20">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2 pt-2">
                        {exp.description.map((bullet, i) => (
                          <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'readiness' && (
                <motion.div
                  key="readiness"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="p-5 rounded-2xl glass-card border border-slate-800 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Plane className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">Relocation & Legal Status</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Valid Indonesian passport ready for international travel. Fully prepared to relocate to Kuala Lumpur, Cyberjaya, Selangor, or Penang under standard Employment Pass (EP) sponsorship.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl glass-card border border-slate-800 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">Timezone & Communication</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Aligned with GMT+7 / GMT+8 (MYT). Zero communication latency for daily standups, sprint plannings, and synchronous pairing sessions. Professional English working proficiency.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl glass-card border border-slate-800 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">Speed of Contribution</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Immediate availability or short 2-week notice. Capable of onboarding fast, absorbing project design systems, and pushing clean, reviewed pull requests within the first sprint.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
