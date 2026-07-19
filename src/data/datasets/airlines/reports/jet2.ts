import type { IntelligenceReport } from "@/lib/types";

export const jet2: IntelligenceReport = {
  companyId: "jet2",
  executiveSummary: [
    "Jet2 plc is the UK's largest tour operator and third-largest airline, flying around 20 million passengers a year from 13 UK bases to roughly 75 leisure destinations. Its integrated model pairs the Jet2.com airline with Jet2holidays, the ATOL-protected package holiday business that now drives the majority of group revenue.",
    "The group's differentiation is service quality in a segment competitors treat as commodity: it consistently tops UK customer satisfaction surveys, has been named Which? travel brand of the year multiple times, and converts that reputation into premium package pricing and industry-leading repeat booking rates.",
    "Financially, Jet2 combines double-digit revenue growth with a robust balance sheet and a large fleet renewal programme (up to 146 Airbus A320/A321neo family aircraft on order), giving it lower unit costs and capacity for further base expansion. Key vulnerabilities are its concentration in UK outbound leisure and exposure to consumer discretionary spend.",
  ],
  profile: [
    { label: "Headquarters", value: "Leeds, United Kingdom", icon: "location" },
    { label: "CEO", value: "Steve Heapy", icon: "leader" },
    { label: "Founded", value: "1983 (airline launched 2003)", icon: "calendar" },
    { label: "Fleet size", value: "135 aircraft", icon: "fleet" },
    { label: "Destinations", value: "~75 leisure destinations", icon: "network" },
    { label: "Employees", value: "~18,000 (peak season)", icon: "people" },
    { label: "Revenue", value: "£7.2bn (FY2025)", icon: "revenue" },
    { label: "Market position", value: "UK's largest tour operator; #3 UK airline", icon: "position" },
  ],
  businessOverview: {
    description:
      "Jet2 operates two tightly integrated businesses: Jet2.com, a leisure airline flying from 13 UK bases, and Jet2holidays, the UK's largest ATOL-licensed package holiday operator. Package customers now account for the majority of flown passengers, letting the group capture margin across the whole holiday rather than the flight alone.",
    model:
      "Vertically integrated leisure travel: the airline feeds the higher-margin package holiday business, with in-resort service handled by its own destination teams. Revenue is skewed to summer trading, with forward bookings and customer deposits funding working capital.",
    segments: [
      {
        name: "Jet2holidays",
        detail: "ATOL-protected package holidays including flights, hotels and transfers; the group's growth engine.",
        revenueShare: 72,
      },
      {
        name: "Flight-only (Jet2.com)",
        detail: "Scheduled leisure flights from 13 UK bases to Mediterranean, Canary Islands and European city destinations.",
        revenueShare: 24,
      },
      {
        name: "Ancillary & other",
        detail: "Seat assignment, baggage, in-flight retail and non-flight services.",
        revenueShare: 4,
      },
    ],
  },
  financials: {
    kpis: [
      { label: "Revenue", value: 7_200_000_000, format: "currency", unit: "£", delta: 15, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Profit before tax", value: 593_000_000, format: "currency", unit: "£", delta: 12, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Passengers flown", value: 19_800_000, format: "number", delta: 12, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Package holiday customers", value: 6_600_000, format: "number", delta: 9, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Own cash balance", value: 2_300_000_000, format: "currency", unit: "£", delta: 8, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Load factor", value: 89.2, format: "percent", delta: -1.1, deltaLabel: "vs FY2024", deltaSentiment: "negative" },
    ],
    revenueTrend: {
      label: "Revenue",
      unit: "£bn",
      points: [
        { period: "FY21", value: 0.4 },
        { period: "FY22", value: 1.2 },
        { period: "FY23", value: 5.0 },
        { period: "FY24", value: 6.3 },
        { period: "FY25", value: 7.2 },
      ],
    },
    secondaryTrend: {
      label: "Profit before tax",
      unit: "£m",
      points: [
        { period: "FY21", value: -373 },
        { period: "FY22", value: -389 },
        { period: "FY23", value: 371 },
        { period: "FY24", value: 529 },
        { period: "FY25", value: 593 },
      ],
    },
  },
  marketPosition: {
    narrative:
      "Jet2 holds around 11% of UK outbound seat capacity but a far larger share of the package holiday market, where it overtook TUI as the UK's largest tour operator. Its strength is concentrated in northern England and Scotland, with newer bases (Bournemouth, Luton, Liverpool expansion) pushing into competitors' catchments.",
    shareMetricLabel: "UK outbound seat capacity share",
    marketShare: [
      { companyId: "easyjet", name: "easyJet", share: 20 },
      { companyId: "ryanair", name: "Ryanair", share: 19 },
      { companyId: "british-airways", name: "British Airways", share: 13 },
      { companyId: "jet2", name: "Jet2", share: 11 },
      { companyId: "tui", name: "TUI", share: 7 },
      { companyId: "wizz-air", name: "Wizz Air", share: 4 },
      { companyId: "others", name: "Others", share: 26 },
    ],
    rankings: [
      { label: "UK tour operators by ATOL licences", rank: 1, of: 5, note: "Largest ATOL holder, ahead of TUI UK" },
      { label: "UK airlines by passengers", rank: 3, of: 8, note: "Behind easyJet and Ryanair on UK routes" },
      { label: "UK customer satisfaction (airlines)", rank: 1, of: 6, note: "Which? recommended provider, multiple years" },
    ],
  },
  productsServices: [
    {
      name: "Package holidays",
      description: "ATOL-protected beach, city and villa holidays with flights, transfers and in-resort support.",
      items: ["Beach holidays", "Jet2CityBreaks", "Jet2Villas", "Indulgent Escapes (premium)", "VIBE (young adult)"],
    },
    {
      name: "Flights",
      description: "Leisure-focused scheduled flying with allocated seating and a 22kg baggage option.",
      items: ["Scheduled leisure routes", "Ski and winter sun programmes", "Charter flying"],
    },
    {
      name: "Ancillaries",
      description: "Add-ons monetising the core booking.",
      items: ["Extra legroom & seat selection", "In-flight retail", "Travel insurance partnerships", "Car hire & transfers"],
    },
  ],
  customerExperience: {
    headlineScore: { label: "Trustpilot score", value: 4.6, format: "rating", unit: "5", deltaSentiment: "positive" },
    reviewSources: [
      { source: "Trustpilot", score: 4.6, outOf: 5, volume: "190k+ reviews" },
      { source: "Which? airline survey", score: 4.1, outOf: 5, volume: "Best UK short-haul airline" },
      { source: "Skytrax", score: 4.0, outOf: 5, volume: "3.9k reviews" },
      { source: "Google Play app", score: 4.7, outOf: 5, volume: "120k ratings" },
    ],
    sentiment: { positive: 78, neutral: 12, negative: 10 },
    positiveThemes: [
      "Friendly cabin crew and in-resort reps repeatedly praised",
      "Package holiday value and ATOL protection",
      "Proactive communication during disruption",
    ],
    negativeThemes: [
      "Early morning departure times on some routes",
      "Refund processing speed in peak disruption periods",
    ],
  },
  digitalPresence: {
    website: {
      url: "jet2.com / jet2holidays.com",
      note: "Two conversion-focused booking sites; holidays site carries the majority of traffic and bookings.",
    },
    apps: [
      { platform: "iOS", rating: 4.8, outOf: 5, downloads: "1m+" },
      { platform: "Android", rating: 4.7, outOf: 5, downloads: "1m+" },
    ],
    social: [
      { platform: "Facebook", followers: "1.3m", engagement: "high" },
      { platform: "Instagram", followers: "410k", engagement: "high" },
      { platform: "X / Twitter", followers: "290k", engagement: "medium" },
      { platform: "LinkedIn", followers: "160k", engagement: "medium" },
    ],
  },
  hiringGrowth: {
    summary:
      "Sustained hiring across cabin crew, engineering and digital, with a new Leeds technology hub and apprenticeship schemes feeding pilot and engineering pipelines. Base openings drive step-changes in local recruitment.",
    openRoles: 420,
    hiringTrend: {
      label: "Open roles (quarterly snapshot)",
      points: [
        { period: "Q3 25", value: 310 },
        { period: "Q4 25", value: 280 },
        { period: "Q1 26", value: 390 },
        { period: "Q2 26", value: 420 },
      ],
    },
    focusAreas: ["Cabin crew & flight deck", "Engineering & maintenance", "Digital & data", "In-resort customer helpers"],
    expansionSignals: [
      "Up to 146 A320/A321neo family aircraft on order through 2035",
      "Bournemouth and London Luton bases ramping up",
      "New Mediterranean routes announced for summer 2027",
    ],
  },
  news: [
    { date: "2026-07-09", headline: "Jet2 adds fourth aircraft at Bournemouth as base exceeds targets", source: "Travel Weekly", category: "Expansion" },
    { date: "2026-07-02", headline: "Jet2holidays named Which? Travel Brand of the Year for third time", source: "Which?", category: "Awards" },
    { date: "2026-06-18", headline: "Jet2 plc reports record FY2025 results, PBT up 12% to £593m", source: "Company RNS", category: "Financials" },
    { date: "2026-05-30", headline: "First A321neo with new cabin enters service from Manchester", source: "Aviation Week", category: "Fleet" },
    { date: "2026-05-12", headline: "Jet2 launches winter ski programme expansion from Leeds Bradford", source: "TTG Media", category: "Routes" },
    { date: "2026-04-22", headline: "Jet2 opens Leeds technology hub, creating 150 digital roles", source: "Yorkshire Post", category: "Hiring" },
  ],
  swot: {
    strengths: [
      { title: "Brand trust & service reputation", detail: "Consistently the UK's best-rated leisure airline; drives repeat bookings and premium package pricing." },
      { title: "Integrated package model", detail: "Airline capacity feeds higher-margin ATOL-protected holidays, capturing the full holiday wallet." },
      { title: "Balance sheet strength", detail: "£2.3bn own cash provides resilience and funds the fleet renewal without distress." },
    ],
    weaknesses: [
      { title: "UK-only customer base", detail: "Entirely dependent on UK outbound leisure demand and sterling purchasing power." },
      { title: "Seasonal earnings concentration", detail: "Profitability concentrated in summer trading; winter remains loss-making." },
      { title: "Higher unit costs than ULCCs", detail: "Service model carries structurally higher costs than Ryanair or Wizz on comparable routes." },
    ],
    opportunities: [
      { title: "Southern England expansion", detail: "Recent Bournemouth and Luton bases show the model transfers beyond its northern heartland." },
      { title: "Fleet-driven cost reduction", detail: "A321neo deliveries cut fuel burn per seat ~20% and enable higher-capacity routes." },
      { title: "Premium leisure segments", detail: "Indulgent Escapes and long-haul leisure trials could lift average booking values." },
    ],
    threats: [
      { title: "Consumer spending squeeze", detail: "UK cost-of-living pressure hits discretionary holiday spend first." },
      { title: "Capacity aggression from ULCCs", detail: "Ryanair and Wizz adding UK leisure capacity compresses flight-only yields." },
      { title: "Regulatory & environmental costs", detail: "UK ETS scope expansion and SAF mandates raise costs disproportionately for leisure carriers." },
    ],
  },
  opportunities: [
    {
      title: "Win share in the South East",
      detail: "Luton and Stansted catchments remain under-served for quality package holidays.",
      competitiveAngle: "easyJet holidays is growing fast here but lacks Jet2's in-resort service model.",
    },
    {
      title: "Monetise service premium digitally",
      detail: "App-led ancillary personalisation lags its physical service reputation.",
      competitiveAngle: "Ryanair's digital ancillary conversion is materially ahead.",
    },
    {
      title: "Long-haul leisure pilot",
      detail: "A321LR/XLR economics open one-stop-free winter sun routes (e.g. Egypt, Cape Verde already served; Caribbean possible).",
      competitiveAngle: "TUI currently owns UK long-haul package holidays with its 787 fleet.",
    },
  ],
  risks: [
    { title: "UK consumer downturn", detail: "Package bookings correlate tightly with UK disposable income; a recession would hit forward bookings and deposits.", severity: "high", category: "Demand" },
    { title: "Airbus delivery delays", detail: "Neo delivery slippage would extend the life of older 737-800s and delay unit-cost gains.", severity: "medium", category: "Fleet" },
    { title: "Fuel & carbon price volatility", detail: "Hedging softens but does not remove exposure to jet fuel and UK ETS price rises.", severity: "medium", category: "Cost" },
    { title: "Key-person dependency", detail: "Leadership continuity after long-serving executives is a recurring investor question.", severity: "low", category: "Governance" },
  ],
  comparisonValues: {
    fleet: 135,
    destinations: 75,
    passengers: 19.8,
    revenue: 7_200_000_000,
    rating: 4.6,
    otp: 76,
  },
  sources: [
    { type: "Annual report", name: "Jet2 plc Annual Report FY2025", url: "jet2plc.com/investors", freshness: "June 2026" },
    { type: "Company website", name: "Jet2.com & Jet2holidays", url: "jet2.com", freshness: "Live" },
    { type: "Regulatory filing", name: "London Stock Exchange RNS announcements", url: "londonstockexchange.com", freshness: "July 2026" },
    { type: "Customer reviews", name: "Trustpilot — Jet2.com", url: "uk.trustpilot.com/review/www.jet2.com", freshness: "Live" },
    { type: "Industry data", name: "UK CAA punctuality & ATOL statistics", url: "caa.co.uk", freshness: "Q1 2026" },
    { type: "News coverage", name: "Travel Weekly, TTG Media, Aviation Week", url: "travelweekly.co.uk", freshness: "Rolling 90 days" },
  ],
};
