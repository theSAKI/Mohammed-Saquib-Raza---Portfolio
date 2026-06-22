export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'Full Stack' | 'AI/ML' | 'Backend';
  stats?: { label: string; value: string }[];
  highlights?: string[];
}

export interface TimelineEvent {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  type: 'education' | 'experience' | 'other';
  description: string[];
  location?: string;
}

export interface Skill {
  name: string;
  level: number; // For interactive animated proficiency representation
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
}
