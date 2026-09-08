const COLORS: Record<string, string> = {
  mint: 'bg-mint-400',
  amber: 'bg-amber-400',
  coral: 'bg-coral-400',
  violet: 'bg-violet-400',
  slate: 'bg-ink-600',
};

export default function StatusDot({
  color = 'mint',
  pulse = false,
}: {
  color?: keyof typeof COLORS;
  pulse?: boolean;
}) {
  return (
    <span className="relative inline-flex h-2 w-2 flex-none">
      {pulse && (
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${COLORS[color]} opacity-60`}
        />
      )}
      <span className={`relative inline-flex h-2 w-2 rounded-full ${COLORS[color]}`} />
    </span>
  );
}
