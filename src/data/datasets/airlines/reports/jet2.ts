import type { IntelligenceReport } from "@/lib/types";

export const jet2: IntelligenceReport = {
  companyId: "jet2",
  executiveSummary: [
    "Jet2 plc is the UK's largest tour operator and third-largest airline by passengers, carrying a record 20.83 million passengers in FY2026 from 14 UK bases after opening London Gatwick in late March 2026. Its integrated model pairs the Jet2.com airline with Jet2holidays, the ATOL-protected package holiday business: package customers made up 63.3% of flown passengers.",
    "The group's differentiation is service quality in a segment competitors treat as commodity: it consistently tops UK customer satisfaction surveys, has been named Which? travel brand of the year multiple times, and converts that reputation into premium package pricing (average package price £900 in FY2026) and industry-leading repeat booking rates.",
    "FY2026 revenue grew 4% to £7.48bn, though profit before tax fell 7% to £551m on Gatwick start-up investment and roughly £50m of increased industry costs. The balance sheet remains strong (£2.0bn net cash, a new £250m buyback) and the fleet renewal programme of up to 146 Airbus A320/A321neo family aircraft continues. Key vulnerabilities are concentration in UK outbound leisure and exposure to consumer discretionary spend.",
  ],
  profile: [
    { label: "Headquarters", value: "Leeds, United Kingdom", icon: "location" },
    { label: "CEO", value: "Steve Heapy", icon: "leader" },
    { label: "Founded", value: "1983 (airline launched 2003)", icon: "calendar" },
    { label: "Fleet size", value: "139 aircraft", icon: "fleet" },
    { label: "Destinations", value: "~75 leisure destinations", icon: "network" },
    { label: "Employees", value: "~18,000 (peak season)", icon: "people" },
    { label: "Revenue", value: "£7.48bn (FY2026)", icon: "revenue" },
    { label: "Market position", value: "UK's largest tour operator; #3 UK airline", icon: "position" },
  ],
  businessOverview: {
    description:
      "Jet2 operates two tightly integrated businesses: Jet2.com, a leisure airline flying from 14 UK bases after expansion into London Gatwick, Bournemouth and London Luton, and Jet2holidays, the UK's largest ATOL-licensed package holiday operator. Package customers accounted for 63.3% of flown passengers in FY2026, letting the group capture margin across the whole holiday rather than the flight alone.",
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
        detail: "Scheduled leisure flights from 14 UK bases to Mediterranean, Canary Islands and European city destinations.",
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
      { label: "Revenue", value: 7_482_100_000, format: "currency", unit: "£", delta: 4, deltaLabel: "vs FY2025", deltaSentiment: "positive" },
      { label: "Profit before tax", value: 551_000_000, format: "currency", unit: "£", delta: -7, deltaLabel: "vs FY2025", deltaSentiment: "negative" },
      { label: "Operating profit", value: 439_600_000, format: "currency", unit: "£", delta: -2, deltaLabel: "vs FY2025", deltaSentiment: "negative" },
      { label: "Passengers flown", value: 20_830_000, format: "number", delta: 5, deltaLabel: "vs FY2025", deltaSentiment: "positive" },
      { label: "Package holiday customers", value: 6_620_000, format: "number", delta: 1, deltaLabel: "vs FY2025", deltaSentiment: "positive" },
      { label: "Net cash", value: 2_012_900_000, format: "currency", unit: "£", delta: -0.2, deltaLabel: "vs FY2025", deltaSentiment: "neutral" },
      { label: "Load factor", value: 86.8, format: "percent", delta: -1.9, deltaLabel: "ppts vs FY2025", deltaSentiment: "negative" },
      { label: "Average package price", value: 900, format: "currency", unit: "£", delta: 3, deltaLabel: "vs FY2025", deltaSentiment: "positive" },
    ],
    revenueTrend: {
      label: "Revenue",
      unit: "£bn",
      points: [
        { period: "FY22", value: 1.2 },
        { period: "FY23", value: 5.0 },
        { period: "FY24", value: 6.3 },
        { period: "FY25", value: 7.2 },
        { period: "FY26", value: 7.48 },
      ],
    },
    secondaryTrend: {
      label: "Profit before tax",
      unit: "£m",
      points: [
        { period: "FY22", value: -389 },
        { period: "FY23", value: 371 },
        { period: "FY24", value: 529 },
        { period: "FY25", value: 593 },
        { period: "FY26", value: 551 },
      ],
    },
  },
  marketPosition: {
    narrative:
      "Jet2 holds around 11% of UK outbound seat capacity but a far larger share of the package holiday market, where it overtook TUI as the UK's largest tour operator. Its strength is concentrated in northern England and Scotland, with newer bases (London Gatwick from March 2026, Bournemouth, Luton) pushing into competitors' catchments in southern England.",
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
      "Sustained hiring across cabin crew, engineering, technology and digital teams supporting national growth, with apprenticeship schemes feeding pilot and engineering pipelines. Base openings, most recently London Gatwick, drive step-changes in local recruitment.",
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
      "Up to 146 A320/A321neo family aircraft on order; fleet at 139",
      "London Gatwick base opened late March 2026; Bournemouth and Luton ramping up",
      "Summer 2026 on-sale seat capacity up 7.7% to 19.9m seats",
    ],
  },
  news: [
    { date: "2026-07-08", headline: "Preliminary FY2026 results: revenue up 4% to £7.48bn, record 20.83m passengers, PBT down 7% to £551m", source: "Company RNS", category: "Financials" },
    { date: "2026-07-08", headline: "New £250m share buyback announced, expected to complete by May 2027", source: "Company RNS", category: "Capital returns" },
    { date: "2026-07-08", headline: "Summer 2026 on-sale capacity up 7.7%; booked passengers up 7.1% year on year", source: "Company RNS", category: "Outlook" },
    { date: "2026-07-08", headline: "London Gatwick base, opened late March 2026, flagged as a once-in-a-generation growth opportunity", source: "Company RNS", category: "Expansion" },
    { date: "2026-07-08", headline: "Fleet reaches 139 aircraft as A320/A321neo deliveries continue against order of up to 146", source: "Company RNS", category: "Fleet" },
  ],
  swot: {
    strengths: [
      { title: "Brand trust & service reputation", detail: "Consistently the UK's best-rated leisure airline; drives repeat bookings and premium package pricing." },
      { title: "Integrated package model", detail: "Airline capacity feeds higher-margin ATOL-protected holidays, capturing the full holiday wallet." },
      { title: "Balance sheet strength", detail: "£2.0bn net cash provides resilience, funds the fleet renewal and supports a £250m share buyback." },
    ],
    weaknesses: [
      { title: "UK-only customer base", detail: "Entirely dependent on UK outbound leisure demand and sterling purchasing power." },
      { title: "Seasonal earnings concentration", detail: "Profitability concentrated in summer trading; winter remains loss-making." },
      { title: "Higher unit costs than ULCCs", detail: "Service model carries structurally higher costs than Ryanair or Wizz on comparable routes." },
    ],
    opportunities: [
      { title: "Southern England expansion", detail: "London Gatwick (opened March 2026), Bournemouth and Luton show the model transfers beyond its northern heartland." },
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
      detail: "The myJet2 account platform gives a route to deeper customer engagement and app-led ancillary personalisation, which still lags its physical service reputation.",
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
    { title: "Southern expansion execution", detail: "Gatwick start-up cost £11m in FY2026; growing exposure in southern England adds execution risk while new bases mature.", severity: "medium", category: "Expansion" },
    { title: "Industry cost inflation", detail: "Around £50m of increased industry-wide costs hit FY2026 profit; labour and airport capacity constraints persist across European aviation.", severity: "medium", category: "Cost" },
  ],
  comparisonValues: {
    fleet: 139,
    destinations: 75,
    passengers: 20.83,
    revenue: 7_482_100_000,
    rating: 4.6,
    otp: 76,
  },
  sources: [
    { type: "Results announcement", name: "Jet2 plc Preliminary Results FY2026 (8 July 2026)", url: "jet2plc.com/investors", freshness: "July 2026" },
    { type: "Company website", name: "Jet2.com & Jet2holidays", url: "jet2.com", freshness: "Live" },
    { type: "Regulatory filing", name: "London Stock Exchange RNS announcements", url: "londonstockexchange.com", freshness: "July 2026" },
    { type: "Customer reviews", name: "Trustpilot — Jet2.com", url: "uk.trustpilot.com/review/www.jet2.com", freshness: "Live" },
    { type: "Industry data", name: "UK CAA punctuality & ATOL statistics", url: "caa.co.uk", freshness: "Q1 2026" },
    { type: "News coverage", name: "Travel Weekly, TTG Media, Aviation Week", url: "travelweekly.co.uk", freshness: "Rolling 90 days" },
  ],
};
