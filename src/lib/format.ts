import type { Metric, MetricFormat } from "@/lib/types";

export function formatValue(
  value: number | string,
  format: MetricFormat,
  unit?: string,
): string {
  if (typeof value === "string") return value;
  switch (format) {
    case "currency":
      return `${unit ?? "£"}${formatCompactNumber(value)}`;
    case "percent":
      return `${value}%`;
    case "rating":
      return `${value}${unit ? ` / ${unit}` : ""}`;
    case "number":
      return `${formatCompactNumber(value)}${unit ? ` ${unit}` : ""}`;
    default:
      return String(value);
  }
}

export function formatCompactNumber(value: number): string {
  if (Math.abs(value) >= 1_000_000_000) {
    return `${trimZero((value / 1_000_000_000).toFixed(1))}bn`;
  }
  if (Math.abs(value) >= 1_000_000) {
    return `${trimZero((value / 1_000_000).toFixed(1))}m`;
  }
  if (Math.abs(value) >= 10_000) {
    return `${trimZero((value / 1_000).toFixed(1))}k`;
  }
  return value.toLocaleString("en-GB");
}

function trimZero(s: string): string {
  return s.endsWith(".0") ? s.slice(0, -2) : s;
}

export function formatMetric(metric: Metric): string {
  return formatValue(metric.value, metric.format, metric.unit);
}

export function formatDelta(delta: number): string {
  const sign = delta > 0 ? "+" : "";
  return `${sign}${delta}%`;
}
