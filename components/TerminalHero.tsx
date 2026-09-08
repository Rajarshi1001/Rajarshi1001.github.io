import Link from 'next/link';
import { site } from '@/data/site';
import { withBasePath } from '@/lib/basePath';

export default function TerminalHero() {
  return (
    <section id="home" className="border-b border-ink-700 bg-grid bg-ink-950">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="overflow-hidden rounded-md border border-ink-700 bg-ink-900/70 shadow-[0_0_0_1px_var(--panel-ring)]">
          <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-800/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-coral-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint-400/70" />
            <span className="ml-3 font-mono text-xs text-paper-100/40">whoami — {site.handle}</span>
          </div>
          <div className="px-5 py-7 font-mono text-sm sm:px-8 sm:py-9">
            <p className="text-paper-100/50">
              <span className="text-mint-400">{site.handle}@portfolio</span>
              <span className="text-paper-100/30">:~$</span> whoami
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-paper-50 sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-2 text-base text-mint-400 sm:text-lg">{site.role}</p>

            <p className="mt-8 max-w-xl text-[0.95rem] leading-relaxed text-paper-100/70 sm:text-base">
              {site.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-xs text-paper-100/40">Gurugram, India</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-sm border border-mint-400 bg-mint-400/10 px-4 py-2 text-xs font-medium text-mint-400 transition-colors hover:bg-mint-400/20"
              >
                cat experience.log
              </a>
              {/* next/link, not a raw <a> — it is the only thing that prefixes
                  the GitHub Pages basePath onto an internal route. */}
              <Link
                href="/projects"
                className="rounded-sm border border-ink-700 px-4 py-2 text-xs text-paper-100/70 transition-colors hover:border-paper-100/40 hover:text-paper-50"
              >
                ls projects/
              </Link>
              <a
                href={withBasePath(site.resume)}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-ink-700 px-4 py-2 text-xs text-paper-100/70 transition-colors hover:border-paper-100/40 hover:text-paper-50"
              >
                open resume.pdf ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
