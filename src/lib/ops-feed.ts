/**
 * Turns a Dataset into the content the ops console renders.
 *
 * Everything the console animates is derived here from the same report data the
 * rest of the app uses: no invented figures, no industry-specific field names.
 * Swap the airlines dataset for banks and the console lights up with bank data.
 *
 * Runs on the server at build time; the result is a small serialisable object.
 */

import type { Dataset, MetricFormat } from "@/lib/types";

/** A [lat, lng] pair in the shape cobe expects. */
export type LatLng = [number, number];

export interface OpsMarker {
  companyId: string;
  name: string;
  location: LatLng;
  /** 0-1, scaled by the company's share of the sector. */
  size: number;
}

export interface OpsTelemetry {
  id: string;
  label: string;
  value: number;
  format: MetricFormat;
  unit?: string;
  /** Normalised 0-1 points for the tile sparkline. */
  spark: number[];
}

export interface OpsSignal {
  date: string;
  headline: string;
  source: string;
  category: string;
  companyName: string;
}

export interface OpsFeedSource {
  type: string;
  count: number;
}

export interface OpsFeed {
  markers: OpsMarker[];
  telemetry: OpsTelemetry[];
  signals: OpsSignal[];
  feeds: OpsFeedSource[];
  riskCounts: { high: number; medium: number; low: number };
  entityCount: number;
  /** Shell command shown at the top of the console terminal. */
  commandLine: string;
  /** Analysis stages, straight from the dataset. */
  steps: string[];
}

/** How many news items the ticker carries before it repeats. */
const MAX_SIGNALS = 24;

export function buildOpsFeed(dataset: Dataset): OpsFeed {
  const reports = dataset.companies
    .map((company) => ({ company, report: dataset.reports[company.id] }))
    .filter((entry) => entry.report !== undefined);

  const markers = buildMarkers(dataset);

  return {
    markers,
    telemetry: buildTelemetry(dataset),
    signals: buildSignals(reports),
    feeds: buildFeeds(reports),
    riskCounts: buildRiskCounts(reports),
    entityCount: dataset.companies.length,
    commandLine: `meridian scan --dataset ${dataset.id} --depth full`,
    steps: dataset.generationSteps,
  };
}

function buildMarkers(dataset: Dataset): OpsMarker[] {
  // Share of the sector, taken from whichever report supplies a market-share
  // breakdown. Used only to size the dots, so a missing entry is harmless.
  const shares = new Map<string, number>();
  for (const company of dataset.companies) {
    const slices = dataset.reports[company.id]?.marketPosition.marketShare ?? [];
    for (const slice of slices) {
      if (!shares.has(slice.companyId)) shares.set(slice.companyId, slice.share);
    }
  }
  const maxShare = Math.max(1, ...shares.values());

  return dataset.companies
    .filter((company) => company.coordinates !== undefined)
    .map((company) => {
      const coordinates = company.coordinates!;
      const share = shares.get(company.id) ?? 0;
      return {
        companyId: company.id,
        name: company.name,
        location: [coordinates.lat, coordinates.lng] as LatLng,
        // Kept small: HQs in one region overlap badly at larger sizes.
        size: 0.026 + (share / maxShare) * 0.03,
      };
    });
}

/**
 * Sector totals across every comparison dimension the dataset declares. Ratings
 * and percentages are averaged; everything else is summed.
 */
function buildTelemetry(dataset: Dataset): OpsTelemetry[] {
  return dataset.comparisonDimensions.map((dimension) => {
    const values = dataset.companies
      .map((company) => dataset.reports[company.id]?.comparisonValues[dimension.id])
      .filter((value): value is number => typeof value === "number");

    const isAverage = dimension.format === "rating" || dimension.format === "percent";
    const total = values.reduce((sum, value) => sum + value, 0);
    const value = isAverage && values.length > 0 ? total / values.length : total;

    return {
      id: dimension.id,
      label: dimension.label,
      // Summing figures carried to 2dp per company produces false precision
      // in the total, so large values round to whole units.
      value: value >= 100 ? Math.round(value) : Math.round(value * 10) / 10,
      format: dimension.format,
      unit: dimension.unit,
      spark: normalise(values),
    };
  });
}

/** Scales a series into 0-1 for sparkline plotting. Flat series sit mid-height. */
function normalise(values: number[]): number[] {
  if (values.length === 0) return [];
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (max === min) return values.map(() => 0.5);
  return values.map((value) => (value - min) / (max - min));
}

function buildSignals(
  entries: { company: Dataset["companies"][number]; report?: Dataset["reports"][string] }[],
): OpsSignal[] {
  return entries
    .flatMap(({ company, report }) =>
      (report?.news ?? []).map((item) => ({
        date: item.date,
        headline: item.headline,
        source: item.source,
        category: item.category,
        companyName: company.name,
      })),
    )
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, MAX_SIGNALS);
}

/** Distinct source types across the sector, with how many feeds back each one. */
function buildFeeds(
  entries: { report?: Dataset["reports"][string] }[],
): OpsFeedSource[] {
  const counts = new Map<string, number>();
  for (const { report } of entries) {
    for (const source of report?.sources ?? []) {
      counts.set(source.type, (counts.get(source.type) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count || a.type.localeCompare(b.type));
}

function buildRiskCounts(entries: { report?: Dataset["reports"][string] }[]) {
  const counts = { high: 0, medium: 0, low: 0 };
  for (const { report } of entries) {
    for (const risk of report?.risks ?? []) counts[risk.severity] += 1;
  }
  return counts;
}
