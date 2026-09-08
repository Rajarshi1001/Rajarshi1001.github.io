import Tag from './Tag';
import type { Project } from '@/data/projects';

const STATUS_STYLE: Record<Project['status'], string> = {
  stable: 'text-mint-400 border-mint-400/30 bg-mint-400/10',
  active: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
  archived: 'text-paper-100/40 border-ink-700 bg-ink-800/60',
};

export default function ProjectCard({ project, expanded = false }: { project: Project; expanded?: boolean }) {
  return (
    <article className="flex flex-col gap-3 border border-ink-700 bg-ink-900/50 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="font-mono text-base text-paper-50">{project.name}</h3>
          <span className={`rounded-sm border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide ${STATUS_STYLE[project.status]}`}>
            {project.status}
          </span>
        </div>
        <span className="font-mono text-xs text-paper-100/40">{project.tag}</span>
      </div>

      <p className="text-sm text-paper-100/70">{expanded ? project.detail : project.summary}</p>

      <div className="mt-1 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-ink-800 pt-3">
        <span className="font-mono text-xs text-mint-400">{project.metric}</span>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-paper-100/60 hover:text-paper-50"
          >
            view source ↗
          </a>
        )}
      </div>
    </article>
  );
}
