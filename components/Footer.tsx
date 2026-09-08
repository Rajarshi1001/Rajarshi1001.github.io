import { site } from '@/data/site';
import { withBasePath } from '@/lib/basePath';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-ink-700 bg-ink-900/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-paper-100/40">
              07 · contact
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-semibold text-paper-50 sm:text-3xl">
              Have something worth building well? Let&apos;s talk.
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block border-b border-mint-400 font-mono text-base text-paper-50 transition-colors hover:text-mint-400"
            >
              {site.email}
            </a>
          </div>
          <ul className="flex flex-wrap gap-5 font-mono text-sm text-paper-100/60">
            {site.social.github && (
              <li>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-mint-400"
                >
                  github ↗
                </a>
              </li>
            )}
            {site.social.linkedin && (
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-mint-400"
                >
                  linkedin ↗
                </a>
              </li>
            )}
            {site.social.twitter && (
              <li>
                <a
                  href={site.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-mint-400"
                >
                  twitter ↗
                </a>
              </li>
            )}
            {site.social.letterboxd && (
              <li>
                <a
                  href={site.social.letterboxd}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-mint-400"
                >
                  letterboxd ↗
                </a>
              </li>
            )}
            <li>
              <a
                href={withBasePath(site.resume)}
                target="_blank"
                rel="noreferrer"
                className="hover:text-mint-400"
              >
                resume ↗
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-2 border-t border-ink-800 pt-6 font-mono text-xs text-paper-100/35">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>v1.0.0 · built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
