"use client";

import { useEffect, useState } from "react";

/**
 * The console's instrument strip: what is being scanned, and how much of it.
 *
 * Deliberately carries none of the site header's identity - no wordmark, no
 * live dot, no dataset tag - because the two bars sit directly on top of each
 * other on the home page. The header says who we are; this says what is running.
 *
 * The clock renders a placeholder on the server and fills in after mount, so
 * the prerendered HTML never disagrees with the client on the current second.
 */
export function StatusBar({
  datasetName,
  entityLabel,
  entityCount,
  feedCount,
}: {
  datasetName: string;
  entityLabel: string;
  entityCount: number;
  feedCount: number;
}) {
  const [clock, setClock] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "UTC",
          hour12: false,
        }),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-[var(--ops-line)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:px-6 sm:text-[11px]">
      <span>
        Sector <span className="text-[var(--ops-accent)]">{datasetName}</span>
      </span>
      <span className="hidden sm:inline">
        {entityCount} {entityLabel} tracked
      </span>
      <span className="ml-auto flex items-center gap-4">
        <span>{feedCount} feeds online</span>
        <span className="tabular-nums" suppressHydrationWarning>
          {clock ?? "--:--:--"} UTC
        </span>
      </span>
    </div>
  );
}
