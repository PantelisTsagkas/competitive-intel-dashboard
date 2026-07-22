/**
 * Dataset-agnostic domain types.
 *
 * The application renders these types and nothing else. A dataset (airlines,
 * banks, retailers...) supplies the labels, fields and figures; no component
 * may reference a field name specific to one industry.
 */

export type MetricFormat = "currency" | "number" | "percent" | "rating" | "text";

export interface Metric {
  label: string;
  value: number | string;
  format: MetricFormat;
  /** Display unit, e.g. "£m", "aircraft", "routes". */
  unit?: string;
  /** Change vs the prior period, in percent. */
  delta?: number;
  /** What the delta is measured against, e.g. "vs FY2024". */
  deltaLabel?: string;
  /** Whether the delta is good or bad news; "up" is not always positive. */
  deltaSentiment?: "positive" | "negative" | "neutral";
}

export interface TimeSeriesPoint {
  period: string;
  value: number;
}

export interface TimeSeries {
  label: string;
  unit?: string;
  points: TimeSeriesPoint[];
}

/** Company logo: an image under /public when available, else a monogram badge. */
export interface CompanyLogo {
  initials: string;
  /** Badge background, one hex per company. */
  color: string;
  /** Path to a logo image (e.g. "/logos/jet2.png"); monogram fallback if unset. */
  src?: string;
}

/** Geographic point, used to place a company on a map or globe. */
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Company {
  id: string;
  name: string;
  shortDescription: string;
  hq: string;
  website: string;
  founded: number;
  logo: CompanyLogo;
  /** HQ coordinates. Companies without them are simply not plotted. */
  coordinates?: Coordinates;
}

/** One row of the Company Profile section. Labels are dataset-defined. */
export interface ProfileField {
  label: string;
  value: string;
  /** Semantic icon key resolved by the UI, e.g. "location", "leader", "people". */
  icon?: string;
}

export interface BusinessSegment {
  name: string;
  detail: string;
  /** Share of revenue in percent, when known. */
  revenueShare?: number;
}

export interface MarketShareSlice {
  companyId: string;
  name: string;
  share: number;
}

export interface RankedMetric {
  label: string;
  rank: number;
  of: number;
  note?: string;
}

export interface OfferingCategory {
  name: string;
  description: string;
  items: string[];
}

export interface RatingSource {
  source: string;
  score: number;
  outOf: number;
  volume: string;
}

export interface SentimentBreakdown {
  positive: number;
  neutral: number;
  negative: number;
}

export interface AppRating {
  platform: string;
  rating: number;
  outOf: number;
  downloads?: string;
}

export interface SocialChannel {
  platform: string;
  followers: string;
  engagement?: "high" | "medium" | "low";
}

export interface NewsItem {
  date: string;
  headline: string;
  source: string;
  category: string;
  summary?: string;
}

export interface SwotEntry {
  title: string;
  detail: string;
}

export interface OpportunityItem {
  title: string;
  detail: string;
  /** Where a competitor is stronger or weaker on this front. */
  competitiveAngle?: string;
}

export interface RiskItem {
  title: string;
  detail: string;
  severity: "low" | "medium" | "high";
  category: string;
}

export interface SourceItem {
  type: string;
  name: string;
  url: string;
  freshness: string;
}

export interface IntelligenceReport {
  companyId: string;
  executiveSummary: string[];
  profile: ProfileField[];
  businessOverview: {
    description: string;
    model: string;
    segments: BusinessSegment[];
  };
  financials: {
    kpis: Metric[];
    revenueTrend: TimeSeries;
    secondaryTrend: TimeSeries;
  };
  marketPosition: {
    narrative: string;
    shareMetricLabel: string;
    marketShare: MarketShareSlice[];
    rankings: RankedMetric[];
  };
  productsServices: OfferingCategory[];
  customerExperience: {
    headlineScore: Metric;
    reviewSources: RatingSource[];
    sentiment: SentimentBreakdown;
    positiveThemes: string[];
    negativeThemes: string[];
  };
  digitalPresence: {
    website: { url: string; note: string };
    apps: AppRating[];
    social: SocialChannel[];
  };
  hiringGrowth: {
    summary: string;
    openRoles: number;
    hiringTrend: TimeSeries;
    focusAreas: string[];
    expansionSignals: string[];
  };
  news: NewsItem[];
  swot: {
    strengths: SwotEntry[];
    weaknesses: SwotEntry[];
    opportunities: SwotEntry[];
    threats: SwotEntry[];
  };
  opportunities: OpportunityItem[];
  risks: RiskItem[];
  /** Values keyed by ComparisonDimension id; feeds the comparison table. */
  comparisonValues: Record<string, number>;
  sources: SourceItem[];
}

/** Declared per dataset so the comparison UI stays industry-neutral. */
export interface ComparisonDimension {
  id: string;
  label: string;
  format: MetricFormat;
  unit?: string;
  higherIsBetter: boolean;
  /** Scale ceiling used to normalise values for the radar chart. */
  radarMax: number;
}

export interface DatasetMeta {
  id: string;
  name: string;
  /** Plural noun for the entities, e.g. "Airlines", "Retail banks". */
  entityLabel: string;
  description: string;
}

export interface Dataset extends DatasetMeta {
  companies: Company[];
  /** Simulated analysis stages shown while a report "generates". */
  generationSteps: string[];
  comparisonDimensions: ComparisonDimension[];
  reports: Record<string, IntelligenceReport>;
}

export interface ComparisonRow {
  company: Company;
  values: Record<string, number>;
}

export interface ComparisonData {
  dimensions: ComparisonDimension[];
  rows: ComparisonRow[];
}
