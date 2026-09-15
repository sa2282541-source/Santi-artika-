export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web-app' | 'ecommerce' | 'landing' | 'figma-code';
  description: string;
  longDescription: string;
  thumbnail: string;
  tags: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  featured: boolean;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    icon: string;
    description: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  notes: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeUrl?: string;
}
