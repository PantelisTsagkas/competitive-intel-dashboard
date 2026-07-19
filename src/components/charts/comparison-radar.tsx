"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChartTooltip } from "@/components/charts/chart-tooltip";
import { formatValue } from "@/lib/format";
import type { ComparisonDimension, ComparisonRow } from "@/lib/types";

const SERIES_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
];

/**
 * Normalised profile shapes for up to four companies (the all-pairs-safe
 * series cap). Values are scaled to each dimension's radarMax; the table
 * alongside carries the exact figures.
 */
export function ComparisonRadar({
  dimensions,
  rows,
}: {
  dimensions: ComparisonDimension[];
  rows: ComparisonRow[];
}) {
  const capped = rows.slice(0, 4);
  const data = dimensions.map((dim) => {
    const entry: Record<string, number | string> = { dimension: dim.label };
    for (const row of capped) {
      entry[row.company.id] = Math.round(
        Math.min(100, ((row.values[dim.id] ?? 0) / dim.radarMax) * 100),
      );
    }
    return entry;
  });

  return (
    <div className="flex flex-col gap-2">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart
          data={data}
          outerRadius="72%"
          margin={{ top: 12, right: 48, bottom: 12, left: 48 }}
        >
          <PolarGrid stroke="var(--grid)" />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              const dim = dimensions.find((d) => d.label === label);
              return (
                <ChartTooltip
                  label={String(label)}
                  rows={payload.map((p) => {
                    const row = capped.find((r) => r.company.id === p.dataKey);
                    const raw = dim && row ? row.values[dim.id] : undefined;
                    return {
                      name: row?.company.name ?? String(p.dataKey),
                      value:
                        dim && raw !== undefined
                          ? formatValue(raw, dim.format, dim.unit)
                          : `${p.value}`,
                      color: String(p.stroke),
                    };
                  })}
                />
              );
            }}
          />
          {capped.map((row, i) => (
            <Radar
              key={row.company.id}
              name={row.company.name}
              dataKey={row.company.id}
              stroke={SERIES_COLORS[i]}
              fill={SERIES_COLORS[i]}
              fillOpacity={0.08}
              strokeWidth={2}
            />
          ))}
        </RadarChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
        {capped.map((row, i) => (
          <span key={row.company.id} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-2 rounded-[2px]" style={{ backgroundColor: SERIES_COLORS[i] }} aria-hidden />
            {row.company.name}
          </span>
        ))}
      </div>
    </div>
  );
}
