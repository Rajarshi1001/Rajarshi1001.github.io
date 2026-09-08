# rd-portfolio

A personal portfolio site — About, Work, Education, Projects, Beyond Work, and a small MDX-powered
blog — built with Next.js (App Router), TypeScript, and Tailwind CSS, exported as static HTML so it
can be hosted directly on GitHub Pages.

## Editing your content

All of the real content lives in plain data files and Markdown, not scattered across components:

| What | Where |
| --- | --- |
| Name, role, bio, links, email | `data/site.ts` |
| Work experience | `data/experience.ts` |
| Education | `data/education.ts` |
| Projects | `data/projects.ts` |
| Beyond-work / interests | `data/beyond.ts` |
| Skills | `data/skills.ts` |
| Blog posts | `content/blog/*.mdx` (one file per post, edit the frontmatter + body) |
| Resume PDF | `public/Rajarshi_Dutta_Resume.pdf` (linked from the nav, hero, and footer) |

Everything except `data/beyond.ts` is populated from the resume. **`data/beyond.ts` ships as an
empty array on purpose** — until you add real entries, the "Beyond work" section and its nav link
are hidden rather than showing placeholder text.

## Requirements

- **Node.js 18.17 or newer** (20 LTS recommended). Next.js 14 refuses to build on anything older
  and fails with `You are using Node.js <version>. For Next.js, Node.js version >= v18.17.0 is
  required.` Check with `node -v`.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. The dev server hot-reloads edits to `data/`, `components/`, and
`content/blog/`.

## Building for production

```bash
npm run build      # static export -> out/
npx serve out      # preview the built site exactly as it will be served
```

`npm run build` produces a static site in `out/`, ready to be served from anywhere (GitHub Pages,
Netlify, S3, a plain nginx box). Note that `npm start` does **not** work with `output: 'export'` —
use a static file server against `out/` instead.

Two other checks worth running before you push:

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**, and choose **GitHub
   Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every
   push to `main`.

**Base path:** GitHub Pages serves a *project* repo (anything not named `<you>.github.io`) from
`https://<you>.github.io/<repo-name>/`, not from the domain root. `next.config.mjs` reads a
`REPO_NAME` environment variable to set the correct base path automatically — the workflow already
passes this in from `github.event.repository.name`, so you don't need to edit anything unless
you're building locally for that target:

```bash
# macOS / Linux
REPO_NAME=rd-portfolio npm run build

# Windows PowerShell
$env:REPO_NAME="rd-portfolio"; npm run build
```

If you're deploying to a *user/org* site (a repo literally named `<you>.github.io`), leave
`REPO_NAME` unset — it's served from the root already.

Anything under `public/` (including the resume PDF) also needs that prefix, which is why those
links go through `withBasePath()` in `lib/basePath.ts` rather than using a bare `/path` href.

## Stack

- [Next.js](https://nextjs.org/) 14, App Router, static export (`output: 'export'`)
- [Tailwind CSS](https://tailwindcss.com/) + `@tailwindcss/typography` for the blog post body
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) for rendering blog posts from MDX
- No database, no CMS, no server — every page is generated at build time
