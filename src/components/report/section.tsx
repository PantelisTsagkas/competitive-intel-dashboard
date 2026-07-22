import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatDelta, formatMetric } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Metric } from "@/lib/types";

export function ReportSection({
  id,
  index,
  title,
  description,
  children,
}: {
  id: string;
  index: number;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
      <div className="mb-4 flex items-baseline gap-3 border-b border-[var(--ops-line)] pb-2.5">
        <span className="font-mono text-xs font-semibold text-[var(--ops-accent)]">
          {String(index).padStart(2, "0")}
        </span>
        <div>
          <h2
            id={`${id}-title`}
            className="font-mono text-sm font-semibold uppercase tracking-[0.16em]"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  );
}

export function StatTile({ metric }: { metric: Metric }) {
  const direction =
    metric.delta === undefined ? undefined : metric.delta > 0 ? "up" : metric.delta < 0 ? "down" : "flat";
  const DeltaIcon =
    direction === "up" ? ArrowUpRight : direction === "down" ? ArrowDownRight : Minus;

  return (
    // Same instrument look as the console's telemetry tiles: mono caption, mono
    // tabular figure, coloured delta.
    <Card className="gap-0 py-4">
      <CardContent className="flex flex-col gap-1.5 px-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {metric.label}
        </p>
        <p className="font-mono text-xl font-semibold tabular-nums tracking-tight sm:text-2xl">
          {formatMetric(metric)}
        </p>
        {metric.delta !== undefined || metric.deltaLabel ? (
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            {metric.delta !== undefined ? (
              <span
                className={cn(
                  "flex items-center gap-0.5 font-mono font-semibold",
                  metric.deltaSentiment === "positive" && "text-success",
                  metric.deltaSentiment === "negative" && "text-danger",
                )}
              >
                <DeltaIcon className="size-3.5" aria-hidden />
                {formatDelta(metric.delta)}
              </span>
            ) : null}
            {metric.deltaLabel ? <span>{metric.deltaLabel}</span> : null}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
