'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // resolvedTheme is undefined on the server and on first client render, before
  // next-themes reads localStorage/system preference — rendering the real
  // button before then would flash the wrong icon or mismatch on hydration.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="h-[30px] w-[88px] flex-none" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="flex-none rounded-sm border border-ink-700 px-3 py-1.5 font-mono text-sm text-paper-100/55 transition-colors hover:border-mint-400 hover:text-mint-400"
    >
      {isDark ? '☾ dark' : '☀ light'}
    </button>
  );
}
