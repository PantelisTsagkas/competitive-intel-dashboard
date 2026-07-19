"use client";

import type { SentimentBreakdown } from "@/lib/types";

const SEGMENTS = [
  { key: "positive", label: "Positive", color: "var(--chart-1)" },
  { key: "neutral", label: "Neutral", color: "var(--border)" },
  { key: "negative", label: "Negative", color: "var(--danger)" },
] as const;

/**
 * Single stacked polarity bar (diverging blue / neutral / red) with direct
 * percentage labels and a legend, so color never carries the value alone.
 */
export function SentimentBar({ sentiment }: { sentiment: SentimentBreakdown }) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex h-4 w-full overflow-hidden rounded-[4px]" role="img"
        aria-label={`Sentiment: ${sentiment.positive}% positive, ${sentiment.neutral}% neutral, ${sentiment.negative}% negative`}
      >
        {SEGMENTS.map(({ key, color }) => (
          <div
            key={key}
            className="h-full border-r-2 border-card last:border-r-0"
            style={{ width: `${sentiment[key]}%`, backgroundColor: color }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        {SEGMENTS.map(({ key, label, color }) => (
          <span key={key} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-2 rounded-[2px]" style={{ backgroundColor: color }} aria-hidden />
            {label}
            <span className="font-mono font-semibold text-foreground">{sentiment[key]}%</span>
          </span>
        ))}
      </div>
    </div>
  );
}
