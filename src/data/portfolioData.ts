import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Santi Artika',
  role: 'Junior Web Developer',
  tagline: 'Turn Ideas Into Beautiful Websites',
  location: 'Indonesia (Open for Malaysia Relocation & Regional Remote)',
  email: 'santiartika.dev@gmail.com',
  linkedin: 'https://linkedin.com/in/santiartika',
  github: 'https://github.com/santiartika',
  whatsapp: '+62 812-3456-7890',
  summary:
    'Dedicated and detail-oriented Junior Web Developer from Indonesia with a strong foundation in modern HTML5, CSS3, JavaScript (ES6+), and Figma-to-code workflow. Passionate about building pixel-perfect, accessible, and high-performance web applications. Actively seeking opportunities with forward-thinking international teams, with a particular focus on tech companies in Malaysia and Southeast Asia.',
  stats: [
    { label: 'Completed Projects', value: '15+' },
    { label: 'Lighthouse Performance', value: '98%' },
    { label: 'Clean Code Standards', value: '100%' },
    { label: 'Client & Team Satisfaction', value: '4.9/5' },
  ],
  relocationStatus: 'Passport Ready • Available for Employment Pass (Malaysia) & Remote Work',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'finremit-sea',
    title: 'FinRemit SEA - Cross-Border Payment Portal',
    subtitle: 'Fintech Dashboard for Malaysia-Indonesia Remittance',
    category: 'web-app',
    description:
      'A responsive fintech platform designed to facilitate real-time currency calculation, transaction ledgers, and secure remittance between Malaysia (MYR) and Indonesia (IDR).',
    longDescription:
      'Built with clean semantic HTML5, modern modular JavaScript, and CSS Grid/Flexbox. Features live exchange rate simulation, responsive bank recipient validation, interactive transaction history charts, and strict input sanitization. Designed first in Figma with high-contrast accessibility compliance (WCAG AA).',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    tags: ['JavaScript (ES6+)', 'HTML5', 'CSS Grid', 'Figma', 'Fintech UI'],
    features: [
      'Live MYR-to-IDR and IDR-to-MYR interactive currency calculator',
      'Transaction history filterable by status (Completed, Pending, Review)',
      'Responsive design adapting seamlessly from 360px mobile to 4K displays',
      'Form validation with dynamic feedback and clipboard receipt sharing',
      'Light/Dark mode toggle with zero layout shift (CLS 0.01)',
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'First Contentful Paint', value: '0.6s' },
      { label: 'Accessibility', value: '100%' },
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/santiartika/finremit-sea',
    figmaUrl: 'https://figma.com/@santiartika/finremit',
    featured: true,
    color: 'from-blue-500 via-cyan-400 to-indigo-600',
  },
  {
    id: 'lumina-marketplace',
    title: 'Lumina - Artisanal Marketplace',
    subtitle: 'Modern E-Commerce Storefront & Cart Engine',
    category: 'ecommerce',
    description:
      'A high-performance modern e-commerce storefront with dynamic product filtering, persistent shopping cart, and animated checkout drawer.',
    longDescription:
      'Engineered to deliver instantaneous user feedback without heavy framework overhead. Implemented using Vanilla JavaScript with State Management patterns, CSS custom properties for theming, and semantic HTML5 microdata. Features fuzzy product search, category filtering, responsive image picture elements, and mock Stripe checkout modal.',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    tags: ['JavaScript', 'HTML5', 'Tailwind CSS', 'Figma UI/UX', 'E-Commerce'],
    features: [
      'Real-time product filtering by category, price range, and rating',
      'Interactive sliding cart with local storage persistence and promo codes',
      'High-fidelity product modal with image carousel and size picker',
      'Pixel-perfect translation from Figma design system tokens',
      'SEO-friendly structured data and progressive image loading',
    ],
    metrics: [
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Figma Fidelity', value: '99.5%' },
      { label: 'Mobile Usability', value: '100/100' },
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/santiartika/lumina-marketplace',
    figmaUrl: 'https://figma.com/@santiartika/lumina-design-system',
    featured: true,
    color: 'from-purple-500 via-pink-500 to-rose-400',
  },
  {
    id: 'taskvibe-workspace',
    title: 'TaskVibe - Agile Team Board',
    subtitle: 'Interactive Kanban & Sprint Productivity Tool',
    category: 'web-app',
    description:
      'A lightweight and intuitive productivity web application featuring drag-and-drop task boards, priority tagging, and sprint metrics.',
    longDescription:
      'Developed to assist remote development teams in tracking user stories and bugs. Leverages the native HTML5 Drag and Drop API, JavaScript event delegation, and CSS keyframe transitions. Emphasizes keyboard accessibility (WAI-ARIA compliance) and smooth micro-interactions that elevate everyday workflow.',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    tags: ['JavaScript ES6+', 'HTML5 Drag & Drop', 'Modern CSS', 'Figma'],
    features: [
      'Interactive column drag-and-drop with optimistic UI updates',
      'Custom task tagger with priority badges (High, Medium, Low)',
      'Export tasks to JSON/CSV for team reports',
      'Keyboard navigable workflow (Tab, Arrow keys, Enter)',
      'Minimalist dark mode optimized for developer comfort',
    ],
    metrics: [
      { label: 'Bundle Size', value: '< 45KB' },
      { label: 'Zero Dependencies', value: '100% Native' },
      { label: 'Lighthouse Performance', value: '98/100' },
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/santiartika/taskvibe-agile',
    featured: true,
    color: 'from-pink-500 via-purple-600 to-blue-600',
  },
  {
    id: 'wanderkl-portal',
    title: 'WanderKL - Kuala Lumpur & Regional Explorer',
    subtitle: 'Cinematic Tourism & Cultural Discovery Portal',
    category: 'landing',
    description:
      'An immersive web experience showcasing cultural landmarks, culinary spots, and transit guides across Kuala Lumpur, Penang, and Jakarta.',
    longDescription:
      'Designed to demonstrate aesthetic storytelling and advanced CSS layout capabilities. Uses CSS Scroll-Driven Animations, backdrop filters, responsive video headers, and dynamic itinerary builders. Tailored specifically to celebrate Malaysian and Southeast Asian urban heritage with international standard polish.',
    thumbnail: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    tags: ['CSS Animations', 'HTML5', 'JavaScript', 'Responsive UI', 'Figma'],
    features: [
      'Cinematic full-bleed hero with ambient background gradient transitions',
      'Interactive neighborhood guide with transit time estimates (LRT/MRT)',
      'Culinary rating filter with interactive reviews modal',
      'Adaptive layouts tested on iOS Safari, Chrome Android, and Desktop browsers',
    ],
    metrics: [
      { label: 'Interactive Score', value: '97%' },
      { label: 'Cross-Browser', value: '100% Compatible' },
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/santiartika/wanderkl-explorer',
    featured: false,
    color: 'from-cyan-400 via-blue-500 to-violet-600',
  },
  {
    id: 'pixelforge-agency',
    title: 'PixelForge - Creative Tech Agency',
    subtitle: 'Figma-to-Code High-Fidelity Landing Page',
    category: 'figma-code',
    description:
      'A showcase of 1:1 pixel-perfect implementation from an extensive 20-page Figma design system into production-ready HTML5 and CSS3.',
    longDescription:
      'Translating complex autolayout structures, typography scales, variant buttons, and responsive breakpoints into lean, maintainable code. Demonstrates strict adherence to design tokens, reusable CSS utility structures, and modern semantic conventions.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Figma to Code', 'HTML5', 'Modern CSS', 'JavaScript', 'Design System'],
    features: [
      'Strict 8pt grid system consistency matching Figma specifications',
      'Interactive pricing calculator with annual/monthly billing toggle',
      'Accessible accordion FAQs with animated chevron state',
      'Modular CSS architecture for clean maintainability',
    ],
    metrics: [
      { label: 'Figma Accuracy', value: '100%' },
      { label: 'Responsive Tests', value: 'Passed All Breakpoints' },
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/santiartika/pixelforge-landing',
    figmaUrl: 'https://figma.com/@santiartika/pixelforge',
    featured: false,
    color: 'from-blue-600 via-indigo-600 to-purple-500',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Technologies (Requested & Specialized)',
    skills: [
      {
        name: 'HTML5',
        level: 95,
        icon: 'html',
        description: 'Semantic markup, accessibility (WAI-ARIA), SEO best practices, modern form controls, microdata.',
        highlight: true,
      },
      {
        name: 'CSS3',
        level: 92,
        icon: 'css',
        description: 'Flexbox, Grid, custom properties (CSS variables), keyframe animations, responsive media queries, modern CSS reset.',
        highlight: true,
      },
      {
        name: 'JavaScript (ES6+)',
        level: 88,
        icon: 'javascript',
        description: 'DOM manipulation, asynchronous programming (Promises/Async-Await), Fetch API, Event loop, modular architecture.',
        highlight: true,
      },
      {
        name: 'Figma',
        level: 90,
        icon: 'figma',
        description: 'Design systems, auto-layout, interactive prototyping, developer handoff, component variants, pixel-perfect translation.',
        highlight: true,
      },
    ],
  },
  {
    title: 'Frameworks & Modern Styling',
    skills: [
      {
        name: 'React.js',
        level: 82,
        icon: 'react',
        description: 'Functional components, hooks (useState, useEffect, useMemo, useCallback), component composition.',
      },
      {
        name: 'Tailwind CSS',
        level: 94,
        icon: 'tailwind',
        description: 'Utility-first development, arbitrary values, responsive prefixes, dark mode theming, modern layout configs.',
      },
      {
        name: 'Responsive Web Design',
        level: 96,
        icon: 'mobile',
        description: 'Mobile-first methodology, viewport scaling, fluid typography, touch targets, cross-device testing.',
      },
      {
        name: 'TypeScript (Fundamentals)',
        level: 75,
        icon: 'typescript',
        description: 'Type definitions, interfaces, strict props typing, type-safe frontend components.',
      },
    ],
  },
  {
    title: 'Development Tools & Quality Standards',
    skills: [
      {
        name: 'Git & GitHub',
        level: 86,
        icon: 'git',
        description: 'Branching strategies, commit conventions, pull requests, code reviews, GitHub Actions basics.',
      },
      {
        name: 'Chrome DevTools',
        level: 90,
        icon: 'devtools',
        description: 'Performance profiling, network throttling, memory leak inspection, CSS layout debugging.',
      },
      {
        name: 'Vite & Modern Build Tools',
        level: 84,
        icon: 'vite',
        description: 'Project scaffolding, asset optimization, package management with npm/bun, environment configurations.',
      },
      {
        name: 'Web Performance & SEO',
        level: 88,
        icon: 'performance',
        description: 'Lighthouse audits, Core Web Vitals optimization, lazy loading, image formats (WebP/AVIF).',
      },
    ],
  },
  {
    title: 'Workplace & International Readiness',
    skills: [
      {
        name: 'Professional English',
        level: 88,
        icon: 'globe',
        description: 'Clear written documentation, technical discussions, and effective verbal communication with international teams.',
      },
      {
        name: 'Cross-Border Collaboration',
        level: 92,
        icon: 'users',
        description: 'Experience working in asynchronous environments (Slack, Jira, Trello), aligned with Malaysian/GMT+8 timezones.',
      },
      {
        name: 'Fast Learner & Adaptability',
        level: 95,
        icon: 'sparkles',
        description: 'Rapidly absorbing new tech stacks, internal component libraries, and company coding guidelines.',
      },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2023 - Present',
    role: 'Junior Web Developer & Frontend Specialist',
    company: 'Independent Engineering & Client Solutions',
    location: 'Indonesia (Remote)',
    type: 'Full-time / Contract',
    description: [
      'Developed 12+ responsive web applications and high-conversion landing pages for regional clients in Indonesia and Southeast Asia.',
      'Translated complex Figma UI wireframes into clean, semantic HTML5, modern CSS3, and ES6+ JavaScript with 99%+ visual fidelity.',
      'Optimized web performance across all deliverables, consistently achieving 95+ Google Lighthouse scores and sub-second load times.',
      'Collaborated remotely with cross-functional stakeholders, adhering to agile sprint cycles and git-based version control.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'React', 'Tailwind CSS', 'Git'],
  },
  {
    period: '2022 - 2023',
    role: 'Frontend Web Development Intern',
    company: 'Nusantara Digital Studio',
    location: 'Jakarta, Indonesia',
    type: 'Internship',
    description: [
      'Assisted senior developers in building reusable modular UI components using HTML, CSS, and JavaScript.',
      'Conducted cross-browser compatibility tests on Chrome, Safari, Firefox, and mobile viewports, resolving layout regressions.',
      'Participated in daily stand-ups and sprint retrospectives, improving sprint velocity and code quality adherence.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Bootstrap', 'Git'],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    period: '2019 - 2023',
    degree: 'Bachelor of Computer Science (S.Kom / B.CS)',
    institution: 'Universitas Informatika Indonesia',
    location: 'Indonesia',
    notes: 'Graduated with Honors (GPA: 3.78/4.00). Focus on Web Technologies, Software Engineering, and Human-Computer Interaction.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Front-End Web Developer Certification',
    issuer: 'Dicoding Indonesia (Google Authorized Training Partner)',
    date: '2023',
    credentialId: 'DCD-FE-89241',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta (Coursera)',
    date: '2023',
    credentialId: 'META-FE-71049',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2022',
    credentialId: 'FCC-JS-33918',
  },
  {
    title: 'Figma UI/UX Design Fundamentals',
    issuer: 'Interaction Design Foundation (IxDF)',
    date: '2022',
    credentialId: 'IXDF-FIG-55201',
  },
];
