"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Sparkline } from "@/components/ops/sparkline";
import { formatValue } from "@/lib/format";
import type { OpsTelemetry } from "@/lib/ops-feed";

/**
 * Sector aggregates that count up on first view. The figures are real totals
 * over the dataset's comparison dimensions, formatted with the same
 * `formatValue` the report pages use.
 */
export function TelemetryTiles({
  telemetry,
  reducedMotion,
}: {
  telemetry: OpsTelemetry[];
  reducedMotion: boolean;
}) {
  return (
    <dl className="grid grid-cols-2 gap-px bg-[var(--ops-line)] sm:grid-cols-3">
      {telemetry.map((tile) => (
        <Tile key={tile.id} tile={tile} reducedMotion={reducedMotion} />
      ))}
    </dl>
  );
}

function Tile({
  tile,
  reducedMotion,
}: {
  tile: OpsTelemetry;
  reducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const value = useCountUp(tile.value, inView && !reducedMotion);

  return (
    <div ref={ref} className="bg-background px-3 py-3 sm:px-4">
      <dt className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        {tile.label}
      </dt>
      {/* The figure owns the tile's width; the sparkline sits under it rather
          than beside it, so long values ("1,700 aircraft") never truncate. */}
      <dd className="mt-1.5">
        <span className="flex items-baseline gap-1">
          <span className="font-mono text-base font-semibold tabular-nums text-foreground sm:text-lg">
            {/* Word units ("aircraft") are rendered as a suffix so they never
                squeeze the figure; symbol units ("£", "5") belong inline. */}
            {formatValue(value, tile.format, inlineUnit(tile))}
          </span>
          {suffixUnit(tile) ? (
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {suffixUnit(tile)}
            </span>
          ) : null}
        </span>
        <Sparkline
          points={tile.spark}
          width={64}
          className="mt-1 text-[var(--ops-phosphor)]"
        />
      </dd>
    </div>
  );
}

/**
 * A unit is only kept inline when the format needs it to read correctly:
 * currency prefixes the figure, ratings render as "4.6 / 5". Anything else is a
 * trailing word ("aircraft", "m") that reads better as a smaller suffix.
 */
function inlineUnit(tile: OpsTelemetry): string | undefined {
  return tile.format === "currency" || tile.format === "rating" ? tile.unit : undefined;
}

function suffixUnit(tile: OpsTelemetry): string | undefined {
  return inlineUnit(tile) ? undefined : tile.unit;
}

const DURATION_MS = 1400;

/**
 * Eases a number up to its target once armed; returns the target unchanged
 * otherwise, so a reduced-motion or server render shows the real figure.
 *
 * State holds 0-1 progress rather than the value itself, which keeps every
 * setState inside the rAF callback instead of the effect body.
 *
 * Every frame is quantised to the target's own precision. `formatValue` prints
 * whatever it is given, so an unrounded 70.8 * 0.6137 renders as "43.4501%" and
 * the figure is briefly several characters wider than the tile it sits in.
 */
function useCountUp(target: number, armed: boolean): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!armed) return;
    let frame = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      setProgress(1 - Math.pow(1 - t, 3)); // easeOutCubic
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, armed]);

  return armed ? quantise(target * progress, target) : target;
}

/** Rounds `value` to the number of decimal places `target` itself carries. */
function quantise(value: number, target: number): number {
  const decimals = (String(target).split(".")[1] ?? "").length;
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
