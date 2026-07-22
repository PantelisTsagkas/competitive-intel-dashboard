"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";
import { RiskReadout } from "@/components/ops/risk-readout";
import { SectorTerminal } from "@/components/ops/sector-terminal";
import { SignalFeed } from "@/components/ops/signal-feed";
import { StatusBar } from "@/components/ops/status-bar";
import { TelemetryTiles } from "@/components/ops/telemetry-tiles";
import { GlobePlaceholder } from "@/components/ops/ops-globe";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import type { OpsFeed } from "@/lib/ops-feed";

/** WebGL stays out of the initial bundle and off the server render path. */
const OpsGlobe = dynamic(
  () => import("@/components/ops/ops-globe").then((m) => m.OpsGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="relative mx-auto aspect-square w-full max-w-[420px]">
        <GlobePlaceholder />
      </div>
    ),
  },
);

/** How long each company stays the tracked target. */
const TRACK_INTERVAL_MS = 3200;

export function OpsConsole({
  feed,
  datasetName,
  entityLabel,
}: {
  feed: OpsFeed;
  datasetName: string;
  entityLabel: string;
}) {
  // Not motion's hook: this branch changes markup, so it has to survive
  // hydration. See use-reduced-motion.ts.
  const reducedMotion = usePrefersReducedMotion();
  const [trackIndex, setTrackIndex] = useState(0);

  // Cycles the "locked" company: highlights its globe marker and names it in
  // the readout, so the globe and the copy stay in step.
  useEffect(() => {
    if (reducedMotion || feed.markers.length < 2) return;
    const id = setInterval(
      () => setTrackIndex((i) => (i + 1) % feed.markers.length),
      TRACK_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [reducedMotion, feed.markers.length]);

  const tracked = feed.markers[trackIndex];

  return (
    // The console's palette is now the whole site's, so this is no longer a
    // themed island: it is just the one surface that carries the heavy CRT
    // treatment (drifting grid, scanlines).
    <>
      <section
        className="ops-grid ops-scanlines relative isolate overflow-hidden border-b border-[var(--ops-line)]"
        aria-label="Operations console"
      >
        <StatusBar
          datasetName={datasetName}
          entityLabel={entityLabel}
          entityCount={feed.entityCount}
          feedCount={feed.feeds.reduce((sum, f) => sum + f.count, 0)}
        />

        <div className="relative mx-auto grid w-full max-w-6xl gap-6 px-4 py-7 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 lg:py-8">
          {/* Left: headline + globe */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ops-accent)]">
                Competitive intelligence · {entityLabel}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Pick a company.
                <br />
                Get the full picture.
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {feed.entityCount} {entityLabel.toLowerCase()} under continuous
                watch across {feed.feeds.length} source classes. Select a target
                below to compile a full intelligence report.
              </p>
            </div>

            <div className="relative">
              <OpsGlobe
                markers={feed.markers}
                activeCompanyId={tracked?.companyId ?? null}
                reducedMotion={reducedMotion}
              />
              {tracked ? (
                <div className="pointer-events-none absolute bottom-1 left-1 font-mono text-[10px] uppercase tracking-[0.16em]">
                  <span className="text-muted-foreground">Tracking </span>
                  <span className="text-[var(--ops-accent)]">{tracked.name}</span>
                </div>
              ) : null}
            </div>
          </div>

          {/* Right: telemetry, terminal, threat register */}
          <div className="flex min-w-0 flex-col gap-4">
            <div className="ops-panel">
              <TelemetryTiles telemetry={feed.telemetry} reducedMotion={reducedMotion} />
            </div>

            <div className="min-h-[220px]">
              <SectorTerminal
                commandLine={feed.commandLine}
                steps={feed.steps}
                entityCount={feed.entityCount}
                reducedMotion={reducedMotion}
              />
            </div>

            <div className="ops-panel">
              <RiskReadout counts={feed.riskCounts} feeds={feed.feeds} />
            </div>
          </div>
        </div>

        <SignalFeed signals={feed.signals} reducedMotion={reducedMotion} />

        <div className="flex justify-center border-t border-[var(--ops-line)] py-3">
          <Button
            variant="ghost"
            size="sm"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
            nativeButton={false}
            render={<a href="#directory" />}
          >
            Enter directory
            <ChevronDown className="size-3.5" aria-hidden />
          </Button>
        </div>
      </section>
    </>
  );
}
