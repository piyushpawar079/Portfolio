import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectPageClient from '@/components/project-page';

// Server component - handles static generation
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  // Pass the project data to the client component
  return <ProjectPageClient project={project} />;
}