import Link from 'next/link';

// Next's static export writes this out as `out/404.html`, which is exactly the
// file GitHub Pages serves for an unmatched path.
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col justify-center px-6 py-20">
      <p className="font-mono text-sm text-paper-100/50">
        <span className="text-mint-400">rajarshi@portfolio</span>
        <span className="text-paper-100/30">:~$</span> cat {'<path>'}
      </p>
      <h1 className="mt-4 font-mono text-3xl font-semibold text-paper-50 sm:text-4xl">
        404 — no such file or directory
      </h1>
      <p className="mt-4 max-w-xl text-paper-100/60">
        That page doesn&apos;t exist. It may have been renamed, or the link that sent you here is
        out of date.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
        <Link
          href="/"
          className="rounded-sm border border-mint-400 bg-mint-400/10 px-4 py-2 text-mint-400 transition-colors hover:bg-mint-400/20"
        >
          cd ~
        </Link>
        <Link
          href="/projects"
          className="rounded-sm border border-ink-700 px-4 py-2 text-paper-100/70 transition-colors hover:border-paper-100/40 hover:text-paper-50"
        >
          ls projects/
        </Link>
      </div>
    </main>
  );
}
