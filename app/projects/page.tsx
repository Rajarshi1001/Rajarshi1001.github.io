import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

// No `title` here — the tab title is fixed in app/layout.tsx.
export const metadata: Metadata = {
  description: 'Reinforcement learning, MLOps, and NLP projects by Rajarshi Dutta.',
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-paper-100/40">ls -la ~/projects</p>
      <h1 className="mt-3 text-3xl font-semibold text-paper-50 sm:text-4xl">Projects</h1>
      <p className="mt-3 max-w-xl text-paper-100/60">
        Coursework, research, and side projects that didn&apos;t fit neatly into a work-experience
        bullet point. Status reflects whether I still touch the code.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} expanded />
        ))}
      </div>
    </main>
  );
}
