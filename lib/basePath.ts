// GitHub Pages serves a project site from https://<user>.github.io/<repo>/, so
// `next.config.mjs` sets a basePath. `next/link` prefixes route hrefs with it
// automatically, but files served straight out of `public/` do not get that
// treatment — a raw <a href="/resume.pdf"> would 404 in production.
//
// NEXT_PUBLIC_BASE_PATH is inlined at build time by next.config.mjs.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
