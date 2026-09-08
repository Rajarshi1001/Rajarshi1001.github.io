import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  // Theming is done by swapping the CSS custom properties these colors read
  // from (see app/globals.css `:root` / `[data-theme='light']`), not via
  // Tailwind's `dark:` variant — every existing `bg-ink-950`, `text-paper-100/70`
  // etc. class repaints itself for both themes with zero markup changes.
  // `<alpha-value>` is what makes opacity modifiers like `/70` keep working.
  theme: {
    extend: {
      colors: {
        ink: {
          950: 'rgb(var(--color-ink-950) / <alpha-value>)',
          900: 'rgb(var(--color-ink-900) / <alpha-value>)',
          800: 'rgb(var(--color-ink-800) / <alpha-value>)',
          700: 'rgb(var(--color-ink-700) / <alpha-value>)',
          600: 'rgb(var(--color-ink-600) / <alpha-value>)',
        },
        paper: {
          50: 'rgb(var(--color-paper-50) / <alpha-value>)',
          100: 'rgb(var(--color-paper-100) / <alpha-value>)',
        },
        mint: {
          400: 'rgb(var(--color-mint-400) / <alpha-value>)',
          500: 'rgb(var(--color-mint-500) / <alpha-value>)',
        },
        amber: {
          400: 'rgb(var(--color-amber-400) / <alpha-value>)',
        },
        coral: {
          400: 'rgb(var(--color-coral-400) / <alpha-value>)',
        },
        violet: {
          400: 'rgb(var(--color-violet-400) / <alpha-value>)',
        },
      },
      // The CSS variables are set by next/font in app/layout.tsx.
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // A single DEFAULT (not `invert`) so blog posts theme along with
      // everything else — see the plain `prose` class in app/blog/[slug]/page.tsx.
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--color-paper-100) / 0.85)',
            '--tw-prose-headings': 'rgb(var(--color-paper-50))',
            '--tw-prose-links': 'rgb(var(--color-mint-400))',
            '--tw-prose-bold': 'rgb(var(--color-paper-50))',
            '--tw-prose-code': 'rgb(var(--color-amber-400))',
            '--tw-prose-quotes': 'rgb(var(--color-paper-100) / 0.6)',
            '--tw-prose-hr': 'rgb(var(--color-ink-700))',
          },
        },
      }),
      backgroundImage: {
        grid: 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
