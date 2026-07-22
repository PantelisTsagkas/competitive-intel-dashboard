"use client";

import type { OpsSignal } from "@/lib/ops-feed";

/**
 * Scrolling ticker of real news items pulled from every report in the dataset.
 * The track is rendered twice so the -50% marquee keyframe loops seamlessly;
 * the duplicate is hidden from assistive tech.
 */
export function SignalFeed({
  signals,
  reducedMotion,
}: {
  signals: OpsSignal[];
  reducedMotion: boolean;
}) {
  if (signals.length === 0) return null;

  return (
    <div className="ops-marquee-host relative overflow-hidden border-t border-[var(--ops-line)] py-2">
      <div
        className={reducedMotion ? "flex w-max" : "ops-marquee"}
        // Duplicated content is decorative; screen readers get the first copy.
        aria-label="Latest signals across the sector"
      >
        <Track signals={signals} />
        {reducedMotion ? null : <Track signals={signals} aria-hidden />}
      </div>
      {/* Fade the ticker into the panel edges. */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent"
        aria-hidden
      />
    </div>
  );
}

function Track({
  signals,
  ...props
}: {
  signals: OpsSignal[];
} & React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className="flex shrink-0 items-center font-mono text-[11px]" {...props}>
      {signals.map((signal, i) => (
        <li key={`${signal.date}-${i}`} className="flex items-center gap-2 px-4">
          <span className="text-[var(--ops-phosphor)]">{signal.date}</span>
          <span className="uppercase tracking-wider text-muted-foreground">
            {signal.source}
          </span>
          <span className="text-[var(--ops-line)]" aria-hidden>
            ::
          </span>
          <span className="whitespace-nowrap text-foreground/85">
            {truncate(signal.headline)}
          </span>
          <span className="whitespace-nowrap border border-[var(--ops-line)] px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--ops-accent)]">
            {signal.category}
          </span>
        </li>
      ))}
    </ul>
  );
}

function truncate(text: string, max = 88): string {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}
