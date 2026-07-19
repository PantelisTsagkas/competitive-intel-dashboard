"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartTooltip } from "@/components/charts/chart-tooltip";
import { formatCompactNumber } from "@/lib/format";
import type { TimeSeries } from "@/lib/types";

const AXIS_TICK = { fill: "var(--muted-foreground)", fontSize: 11 } as const;

function format(value: number, unit?: string): string {
  const v = formatCompactNumber(value);
  return unit ? `${v} ${unit}` : v;
}

/**
 * Single-series trend. Bars for magnitude by period; a line for continuous
 * change. Negative bars flip to the diverging red so losses read at a glance.
 */
export function TrendChart({
  series,
  variant = "bar",
  height = 220,
}: {
  series: TimeSeries;
  variant?: "bar" | "line";
  height?: number;
}) {
  const data = series.points;
  const hasNegative = data.some((p) => p.value < 0);

  const tooltip = (
    <Tooltip
      cursor={{ fill: "var(--muted)", opacity: 0.5 }}
      content={({ active, payload, label }) =>
        active && payload?.length ? (
          <ChartTooltip
            label={String(label)}
            rows={[
              {
                name: series.label,
                value: format(payload[0].value as number, series.unit),
                color:
                  (payload[0].value as number) < 0
                    ? "var(--danger)"
                    : "var(--chart-1)",
              },
            ]}
          />
        ) : null
      }
    />
  );

  return (
    <ResponsiveContainer width="100%" height={height}>
      {variant === "line" ? (
        <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -8 }}>
          <CartesianGrid stroke="var(--grid)" strokeDasharray="0" vertical={false} />
          <XAxis dataKey="period" tick={AXIS_TICK} tickLine={false} axisLine={{ stroke: "var(--grid)" }} />
          <YAxis tick={AXIS_TICK} tickLine={false} axisLine={false} tickFormatter={(v: number) => formatCompactNumber(v)} width={48} />
          {tooltip}
          <Line
            dataKey="value"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={{ r: 3, fill: "var(--chart-1)", strokeWidth: 0 }}
            activeDot={{ r: 5, stroke: "var(--card)", strokeWidth: 2 }}
          />
        </LineChart>
      ) : (
        <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -8 }}>
          <CartesianGrid stroke="var(--grid)" strokeDasharray="0" vertical={false} />
          <XAxis dataKey="period" tick={AXIS_TICK} tickLine={false} axisLine={{ stroke: "var(--grid)" }} />
          <YAxis tick={AXIS_TICK} tickLine={false} axisLine={false} tickFormatter={(v: number) => formatCompactNumber(v)} width={48} />
          {tooltip}
          <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={44}>
            {data.map((point) => (
              <Cell
                key={point.period}
                fill={
                  hasNegative && point.value < 0 ? "var(--danger)" : "var(--chart-1)"
                }
              />
            ))}
          </Bar>
        </BarChart>
      )}
    </ResponsiveContainer>
  );
}
