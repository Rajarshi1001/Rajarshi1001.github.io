import StatusDot from './StatusDot';

export default function SectionHeading({
  index,
  command,
  title,
  color = 'mint',
}: {
  index: string;
  command: string;
  title: string;
  color?: 'mint' | 'amber' | 'coral' | 'violet';
}) {
  return (
    <div className="mb-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-ink-700 pb-5">
      <span className="font-mono text-xs text-paper-100/40">{index}</span>
      <div className="flex items-center gap-2">
        <StatusDot color={color} />
        <h2 className="font-sans text-2xl font-semibold tracking-tight text-paper-50 sm:text-3xl">
          {title}
        </h2>
      </div>
      <span className="ml-auto font-mono text-xs text-paper-100/35">{command}</span>
    </div>
  );
}
