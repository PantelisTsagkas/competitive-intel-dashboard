import Link from "next/link";
import { Radar } from "lucide-react";

/**
 * Console chrome, not a website nav: mono, uppercase, hairline-ruled, matching
 * the status bar the ops console carries at the top of the home page.
 */
export function SiteHeader({ datasetLabel }: { datasetLabel?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--ops-line)] bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center border border-[var(--ops-line-strong)] bg-[var(--ops-accent)]/10 text-[var(--ops-accent)] transition-colors group-hover:bg-[var(--ops-accent)]/20">
            <Radar className="size-4" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-[0.12em]">
            MERIDIAN
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            {"// Competitive Intelligence"}
          </span>
        </Link>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {datasetLabel ? (
            <span className="border border-[var(--ops-line)] px-1.5 py-0.5">
              {datasetLabel}
            </span>
          ) : null}
          <span className="flex items-center gap-1.5">
            <span
              className="ops-pulse size-1.5 rounded-full bg-[var(--ops-phosphor)]"
              aria-hidden
            />
            Live
          </span>
        </div>
      </div>
    </header>
  );
}
