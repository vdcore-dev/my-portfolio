export interface ProjectSpecs {
  architecture: string;
  database: string;
  performance?: string;
  security?: string;
}

export interface Project {
  id: string;
  title: string;
  category?: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  specs?: ProjectSpecs;
  highlights?: string[];
}

export interface SkillItem {
  name: string;
  role: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id?: string;
  category: string;
  tagline?: string;
  skills: SkillItem[];
}

export interface FocusArea {
  id: "backend" | "devops" | "data" | "ai";
  label: string;
  stack: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  availability: string;
  location: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  x?: string;
  focusAreas: FocusArea[];
}