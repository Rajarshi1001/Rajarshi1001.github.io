export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-ink-700 bg-ink-900 px-2 py-1 font-mono text-[0.7rem] tracking-tight text-paper-100/70">
      {children}
    </span>
  );
}
