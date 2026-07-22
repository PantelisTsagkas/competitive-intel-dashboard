/**
 * Sector threat posture: every risk in every report, bucketed by severity.
 */
export function RiskReadout({
  counts,
  feeds,
}: {
  counts: { high: number; medium: number; low: number };
  feeds: { type: string; count: number }[];
}) {
  const total = counts.high + counts.medium + counts.low || 1;
  const bars = [
    { key: "high", label: "High", value: counts.high, color: "var(--danger)" },
    { key: "medium", label: "Medium", value: counts.medium, color: "var(--chart-4)" },
    { key: "low", label: "Low", value: counts.low, color: "var(--muted-foreground)" },
  ];

  return (
    <div className="flex flex-col gap-3 px-4 py-3.5">
      <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        <span>Threat register</span>
        <span className="text-foreground">{total} flagged</span>
      </div>

      <div className="flex h-1.5 overflow-hidden" role="img" aria-label={`Risks by severity: ${bars.map((b) => `${b.value} ${b.label.toLowerCase()}`).join(", ")}`}>
        {bars.map((bar) => (
          <div
            key={bar.key}
            style={{ width: `${(bar.value / total) * 100}%`, backgroundColor: bar.color }}
          />
        ))}
      </div>

      <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] text-muted-foreground">
        {bars.map((bar) => (
          <li key={bar.key} className="flex items-center gap-1.5">
            <span
              className="size-1.5 shrink-0"
              style={{ backgroundColor: bar.color }}
              aria-hidden
            />
            {bar.label} {bar.value}
          </li>
        ))}
      </ul>

      <div className="mt-1 border-t border-[var(--ops-line)] pt-3">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Source feeds
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {feeds.slice(0, 6).map((feed) => (
            <li
              key={feed.type}
              className="border border-[var(--ops-line)] px-1.5 py-0.5 font-mono text-[10px] text-foreground/70"
            >
              {feed.type}
              <span className="ml-1.5 text-[var(--ops-phosphor)]">{feed.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
