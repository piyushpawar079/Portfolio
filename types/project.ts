export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  content: string[];
  additionalImages?: string[];
  featured?: boolean;
  demoVideo?: string;
}