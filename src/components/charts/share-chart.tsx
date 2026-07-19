"use client";

import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartTooltip } from "@/components/charts/chart-tooltip";
import type { MarketShareSlice } from "@/lib/types";

/**
 * Horizontal share bars with the subject company highlighted and every bar
 * direct-labeled — identity is carried by position and label, not hue.
 */
export function ShareChart({
  slices,
  highlightId,
}: {
  slices: MarketShareSlice[];
  highlightId: string;
}) {
  const data = [...slices].sort((a, b) => b.share - a.share);

  return (
    <ResponsiveContainer width="100%" height={data.length * 36 + 8}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 0, right: 44, bottom: 0, left: 8 }}
      >
        <XAxis type="number" hide domain={[0, "dataMax"]} />
        <YAxis
          type="category"
          dataKey="name"
          width={104}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: "var(--grid)" }}
        />
        <Tooltip
          cursor={{ fill: "var(--muted)", opacity: 0.5 }}
          content={({ active, payload }) =>
            active && payload?.length ? (
              <ChartTooltip
                rows={[
                  {
                    name: (payload[0].payload as MarketShareSlice).name,
                    value: `${payload[0].value}%`,
                    color:
                      (payload[0].payload as MarketShareSlice).companyId ===
                      highlightId
                        ? "var(--chart-1)"
                        : "var(--muted-foreground)",
                  },
                ]}
              />
            ) : null
          }
        />
        <Bar dataKey="share" radius={[0, 4, 4, 0]} maxBarSize={20}>
          {data.map((slice) => (
            <Cell
              key={slice.companyId}
              fill={
                slice.companyId === highlightId
                  ? "var(--chart-1)"
                  : "var(--border)"
              }
            />
          ))}
          <LabelList
            dataKey="share"
            position="right"
            formatter={(v) => `${v}%`}
            className="font-mono"
            style={{ fill: "var(--foreground)", fontSize: 11, fontWeight: 600 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
