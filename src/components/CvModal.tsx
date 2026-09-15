import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  FileText,
  Mail,
  Linkedin,
  Github,
  MapPin,
  ExternalLink,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const cvText = `=====================================================
SANTI ARTIKA - JUNIOR WEB DEVELOPER
Turn Ideas Into Beautiful Websites
=====================================================
Location: Indonesia (Open for Malaysia Relocation & Regional Remote)
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.summary}

CORE TECHNICAL SKILLS:
- Primary: HTML5, CSS3, JavaScript (ES6+), Figma
- Frameworks & Libraries: React.js, Tailwind CSS, Bootstrap
- Tools: Git, GitHub, Chrome DevTools, Vite, npm/bun, VS Code
- Standards: Semantic Markup, Responsive Web Design, WCAG AA Accessibility, Performance Optimization

WORK EXPERIENCE:
${EXPERIENCES.map(
  (exp) => `
* ${exp.role} - ${exp.company} (${exp.period}) | ${exp.location}
${exp.description.map((d) => `  - ${d}`).join('\n')}
  Technologies: ${exp.technologies.join(', ')}`
).join('\n')}

EDUCATION:
${EDUCATIONS.map(
  (edu) => `
* ${edu.degree}
  ${edu.institution} (${edu.period})
  ${edu.notes}`
).join('\n')}

VERIFIED CERTIFICATIONS:
${CERTIFICATIONS.map(
  (cert) => `* ${cert.title} - ${cert.issuer} (${cert.date}) [ID: ${cert.credentialId}]`
).join('\n')}

LANGUAGES:
- English: Professional Working Proficiency (Technical Documentation, Cross-Border Collaboration)
- Indonesian: Native / Bilingual Proficiency
=====================================================`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Santi_Artika_Junior_Web_Developer_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    const summaryText = `Santi Artika - Junior Web Developer\nEmail: ${PERSONAL_INFO.email}\nPortfolio: ${window.location.href}\nLinkedIn: ${PERSONAL_INFO.linkedin}\nGitHub: ${PERSONAL_INFO.github}\nCore: HTML5, CSS3, JavaScript, Figma, React, Tailwind CSS\nReady for Malaysia & Global Remote.`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:m-0 print:static">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0b0f19] border border-slate-700 rounded-2xl shadow-2xl z-10 text-slate-200 print:bg-white print:text-black print:border-none print:shadow-none print:max-h-none print:overflow-visible"
        >
          {/* Action Toolbar Header */}
          <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between px-6 py-4 bg-[#0a0e1a]/95 backdrop-blur-md border-b border-slate-800 print:hidden gap-3">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white">Curriculum Vitae</h3>
              <span className="text-xs font-mono text-slate-400">| Santi Artika</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Save as PDF</span>
              </button>

              <button
                onClick={handleDownloadTxt}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white flex items-center gap-1.5 transition-opacity"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV (.txt)</span>
              </button>

              <button
                onClick={handleCopyText}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Copy Quick Bio"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Sheet */}
          <div className="p-6 sm:p-10 space-y-8 bg-[#0b0f19] print:bg-white print:text-black print:p-8">
            {/* Header / Identity */}
            <div className="border-b border-slate-800 pb-6 print:border-black">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black font-display tracking-tight">
                    Santi Artika
                  </h1>
                  <p className="text-base font-semibold text-cyan-400 print:text-blue-700 mt-0.5">
                    Junior Web Developer
                  </p>
                  <p className="text-xs text-slate-400 print:text-gray-600 mt-1 italic">
                    "Turn Ideas Into Beautiful Websites"
                  </p>
                </div>

                <div className="text-xs space-y-1 text-slate-300 print:text-gray-800 font-mono">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-pink-400 print:text-black" />
                    <span>Indonesia • Open to Malaysia Relocation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 text-blue-400 print:text-black" />
                    <span>linkedin.com/in/santiartika</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-black font-bold">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-black font-bold">
                Technical Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                  <span className="font-bold text-white print:text-black">Core Front-End:</span>
                  <p className="text-slate-300 print:text-gray-800 mt-1">
                    HTML5 (Semantic, SEO, a11y), CSS3 (Flexbox, Grid, Animations), JavaScript (ES6+, DOM, Async/Await), Figma (Auto-layout, Tokens)
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                  <span className="font-bold text-white print:text-black">Ecosystem & Workflow:</span>
                  <p className="text-slate-300 print:text-gray-800 mt-1">
                    React.js, Tailwind CSS, Git/GitHub, Vite, Chrome DevTools, Cross-browser Testing, Lighthouse Performance
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-black font-bold">
                Work Experience
              </h2>
              <div className="space-y-5">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5 text-xs sm:text-sm">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="font-bold text-white print:text-black">{exp.role}</span>
                      <span className="text-xs font-mono text-cyan-400 print:text-gray-600">{exp.period}</span>
                    </div>
                    <div className="text-xs text-purple-300 print:text-gray-700 font-medium">
                      {exp.company} • {exp.location}
                    </div>
                    <ul className="space-y-1 list-disc list-inside text-xs text-slate-300 print:text-gray-800 pt-1">
                      {exp.description.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-black font-bold">
                Education
              </h2>
              {EDUCATIONS.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm space-y-0.5">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white print:text-black">{edu.degree}</span>
                    <span className="text-xs font-mono text-slate-400 print:text-gray-600">{edu.period}</span>
                  </div>
                  <div className="text-xs text-cyan-300 print:text-gray-700">{edu.institution}</div>
                  <div className="text-xs text-slate-400 print:text-gray-600">{edu.notes}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-black font-bold">
                Professional Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-slate-900/40 print:bg-transparent border border-slate-800/80 print:border-gray-300">
                    <div className="font-semibold text-white print:text-black">{cert.title}</div>
                    <div className="text-slate-400 print:text-gray-600 text-[11px]">{cert.issuer} • {cert.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2 border-t border-slate-800 pt-4 print:border-black">
              <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-black font-bold">
                Languages & International Readiness
              </h2>
              <div className="flex flex-wrap gap-4 text-xs text-slate-300 print:text-gray-800">
                <div>
                  <strong className="text-white print:text-black">English:</strong> Professional Working Proficiency
                </div>
                <div>
                  <strong className="text-white print:text-black">Indonesian:</strong> Native / Bilingual
                </div>
                <div>
                  <strong className="text-white print:text-black">Relocation:</strong> Passport Ready for Malaysia EP
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
