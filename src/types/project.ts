export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string[];
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}