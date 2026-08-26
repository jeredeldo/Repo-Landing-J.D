export interface PersonalInfo {
  name: string;
  role: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  linkedin: string;
  github: string;
  availableForWork: boolean;
  avatarUrl: string;
  resumeUrl?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  iconName: string;
  level?: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'AI / Innovation';
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}
