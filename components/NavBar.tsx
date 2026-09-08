import Link from 'next/link';
import { site } from '@/data/site';
import { beyond } from '@/data/beyond';
import { withBasePath } from '@/lib/basePath';
import ThemeToggle from './ThemeToggle';

// '/#beyond' is dropped while data/beyond.ts is empty — the home page hides that
// section, and a nav link to a non-existent anchor is a dead link.
const links = [
  { href: '/#about', label: 'about' },
  { href: '/#work', label: 'work' },
  { href: '/#education', label: 'education' },
  { href: '/projects', label: 'projects' },
  ...(beyond.length > 0 ? [{ href: '/#beyond', label: 'beyond' }] : []),
  // { href: '/blog', label: 'blog' },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-700 bg-ink-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center gap-6 overflow-x-auto px-6 py-4 font-mono text-sm">
        <Link href="/" className="flex-none font-semibold text-paper-50">
          ~/{site.handle}
        </Link>
        <span className="hidden text-paper-100/30 sm:inline">$</span>
        <ul className="flex flex-none items-center gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-paper-100/55 transition-colors hover:text-mint-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex flex-none items-center gap-4">
          <a
            href={withBasePath(site.resume)}
            target="_blank"
            rel="noreferrer"
            className="text-paper-100/55 transition-colors hover:text-mint-400"
          >
            resume
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-sm border border-ink-700 px-3 py-1.5 text-paper-100/70 transition-colors hover:border-mint-400 hover:text-mint-400"
          >
            say hi ↗
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
