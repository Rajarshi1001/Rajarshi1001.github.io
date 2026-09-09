import type { Metadata } from 'next';
import { Sora, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { site } from '@/data/site';

// next/font downloads these at build time and emits them as self-hosted files in
// the static export. That keeps the site working without a request to Google on
// every page view, and removes the render-blocking <link> to fonts.googleapis.com.
const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  // Fixed on purpose — the browser tab should always read "Rajarshi | Portfolio",
  // not a per-page title. Child routes must not set their own `title`.
  title: 'Rajarshi | Portfolio',
  // The role alone is too thin for a search snippet; the summary reads better.
  description: site.summary,
  openGraph: {
    type: 'profile',
    title: `${site.name} — ${site.role}`,
    description: site.summary,
    siteName: site.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: next-themes sets data-theme on <html> via an
    // inline script that runs before React hydrates, which would otherwise
    // trip React's server/client mismatch warning on this exact node.
    <html lang="en" className={`${sora.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
