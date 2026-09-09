'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  // Hash of whichever <section id="..."> is currently in view — only tracked
  // on the home page, since that's the only route with in-page sections.
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    if (pathname !== '/') return;

    const sections = Array.from(document.querySelectorAll('main section[id]'));
    if (sections.length === 0) return;

    // Treats a section as "active" once it crosses a band near the top of the
    // viewport, rather than requiring it to be fully in view.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/projects') return pathname.startsWith('/projects');
    if (href.startsWith('/#')) return pathname === '/' && activeHash === href.slice(1);
    return false;
  };

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
                className={`transition-colors hover:text-mint-400 ${
                  isActive(link.href) ? 'text-mint-400' : 'text-paper-100/55'
                }`}
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
