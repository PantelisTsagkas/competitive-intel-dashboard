import type { IntelligenceReport } from "@/lib/types";

export const easyjet: IntelligenceReport = {
  companyId: "easyjet",
  executiveSummary: [
    "easyJet is Europe's second-largest low-cost carrier, flying around 90 million passengers a year with a 340-strong Airbus fleet concentrated at primary airports - London Gatwick, Amsterdam, Geneva, Milan - where slot portfolios form a durable moat against both legacy carriers and ULCCs.",
    "The strategic story is easyJet holidays: launched in 2019, it has grown into one of the UK's fastest-scaling tour operators, converting existing seat traffic into package customers at more than double the revenue per booking, and now contributes a material share of group profit.",
    "Against Ryanair, easyJet concedes the cost battle but competes on network quality, brand and schedule convenience for both leisure and business travellers. Margin recovery, fleet up-gauging to A321neos, and holidays growth are the levers; fuel costs, ATC disruption and Gatwick dependence are the recurring drags.",
  ],
  profile: [
    { label: "Headquarters", value: "Luton, United Kingdom", icon: "location" },
    { label: "CEO", value: "Kenton Jarvis", icon: "leader" },
    { label: "Founded", value: "1995", icon: "calendar" },
    { label: "Fleet size", value: "~347 aircraft (Airbus A320 family)", icon: "fleet" },
    { label: "Destinations", value: "155+ airports, ~1,000 routes", icon: "network" },
    { label: "Employees", value: "~18,000", icon: "people" },
    { label: "Revenue", value: "£9.3bn (FY2024)", icon: "revenue" },
    { label: "Market position", value: "#2 European LCC; #1 at Gatwick", icon: "position" },
  ],
  businessOverview: {
    description:
      "easyJet operates dense short-haul networks from primary airports in the UK and Western Europe, layered with easyJet holidays in the UK and a growing continental holidays rollout. Slot positions at capacity-constrained airports (Gatwick, Amsterdam, Geneva, Nice, Milan Linate) underpin fare premiums over ULCC rivals.",
    model:
      "Low-cost carrier with primary-airport positioning: revenue from fares plus ancillaries, increasingly augmented by the high-margin holidays business which packages easyJet seats with directly contracted hotels.",
    segments: [
      { name: "Airline - fares", detail: "Short-haul scheduled flying across ~1,000 routes.", revenueShare: 60 },
      { name: "Airline - ancillaries", detail: "Bags, seats, speedy boarding, inflight sales.", revenueShare: 24 },
      { name: "easyJet holidays", detail: "Fast-growing packaged holidays arm, UK-led with EU rollout.", revenueShare: 16 },
    ],
  },
  financials: {
    kpis: [
      { label: "Revenue", value: 9_310_000_000, format: "currency", unit: "£", delta: 14, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
      { label: "Headline profit before tax", value: 610_000_000, format: "currency", unit: "£", delta: 34, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
      { label: "Passengers flown", value: 89_700_000, format: "number", delta: 8, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
      { label: "Holidays customers", value: 2_600_000, format: "number", delta: 36, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
      { label: "Holidays profit before tax", value: 190_000_000, format: "currency", unit: "£", delta: 56, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
      { label: "Load factor", value: 89.3, format: "percent", delta: 0.6, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
    ],
    revenueTrend: {
      label: "Revenue",
      unit: "£bn",
      points: [
        { period: "FY21", value: 1.5 },
        { period: "FY22", value: 5.8 },
        { period: "FY23", value: 8.2 },
        { period: "FY24", value: 9.3 },
        { period: "FY25e", value: 10.0 },
      ],
    },
    secondaryTrend: {
      label: "Headline profit before tax",
      unit: "£m",
      points: [
        { period: "FY21", value: -1136 },
        { period: "FY22", value: -178 },
        { period: "FY23", value: 455 },
        { period: "FY24", value: 610 },
        { period: "FY25e", value: 700 },
      ],
    },
  },
  marketPosition: {
    narrative:
      "easyJet is the largest single carrier for UK outbound traffic at around 20% of seat capacity, #1 at Gatwick with over 40% of slots, and a top-two carrier in Switzerland, the Netherlands and parts of Italy and France. It deliberately cedes ultra-price-sensitive traffic to Ryanair while defending primary-airport convenience.",
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
      { label: "European LCCs by passengers", rank: 2, of: 6, note: "Behind Ryanair, ahead of Wizz Air" },
      { label: "London Gatwick slot holdings", rank: 1, of: 10, note: "~41% of slots, largest base operator" },
      { label: "UK customer satisfaction (airlines)", rank: 3, of: 6, note: "Mid-table; ahead of ULCCs, behind Jet2" },
    ],
  },
  productsServices: [
    {
      name: "Flights",
      description: "High-frequency short-haul from primary airports with fare bundles.",
      items: ["Standard & FLEXI fares", "Up Front / Extra Legroom seating", "easyJet Plus membership", "Worldwide by easyJet connections"],
    },
    {
      name: "easyJet holidays",
      description: "ATOL-protected packages built on easyJet seats plus directly contracted hotels.",
      items: ["Beach & city packages", "Luxury collection", "Ultimate flexibility policies"],
    },
    {
      name: "Ancillaries & partners",
      description: "Attach revenue on the core booking.",
      items: ["Cabin & hold bags", "Car hire (partner)", "Travel insurance", "Airport lounges & fast track"],
    },
  ],
  customerExperience: {
    headlineScore: { label: "Trustpilot score", value: 3.6, format: "rating", unit: "5", deltaSentiment: "neutral" },
    reviewSources: [
      { source: "Trustpilot", score: 3.6, outOf: 5, volume: "150k+ reviews" },
      { source: "Which? airline survey", score: 3.2, outOf: 5, volume: "Mid-table short-haul" },
      { source: "Skytrax", score: 3.4, outOf: 5, volume: "4.2k reviews" },
      { source: "Google Play app", score: 4.6, outOf: 5, volume: "420k ratings" },
    ],
    sentiment: { positive: 55, neutral: 22, negative: 23 },
    positiveThemes: [
      "Primary airport convenience and schedule times",
      "App experience: booking, boarding passes, disruption info",
      "easyJet holidays value and flexibility policies",
    ],
    negativeThemes: [
      "Cancellations during ATC disruption summers",
      "Cabin bag sizing and gate charges",
      "Customer service escalation difficulty",
    ],
  },
  digitalPresence: {
    website: {
      url: "easyjet.com",
      note: "Single pan-European storefront; the app is among the highest-rated airline apps and central to disruption management.",
    },
    apps: [
      { platform: "iOS", rating: 4.8, outOf: 5, downloads: "10m+" },
      { platform: "Android", rating: 4.6, outOf: 5, downloads: "10m+" },
    ],
    social: [
      { platform: "Instagram", followers: "890k", engagement: "high" },
      { platform: "Facebook", followers: "2.8m", engagement: "medium" },
      { platform: "TikTok", followers: "420k", engagement: "medium" },
      { platform: "LinkedIn", followers: "520k", engagement: "medium" },
    ],
  },
  hiringGrowth: {
    summary:
      "Recruitment driven by A321neo up-gauging (larger crews), holidays headcount roughly doubling year on year, and a data/digital hub in Luton. Seasonal cabin crew intake remains the volume driver.",
    openRoles: 640,
    hiringTrend: {
      label: "Open roles (quarterly snapshot)",
      points: [
        { period: "Q3 25", value: 520 },
        { period: "Q4 25", value: 480 },
        { period: "Q1 26", value: 590 },
        { period: "Q2 26", value: 640 },
      ],
    },
    focusAreas: ["Cabin crew & pilots", "easyJet holidays commercial", "Data science & digital", "Engineering (new Malta hangar)"],
    expansionSignals: [
      "156 A320neo-family aircraft on order into the 2030s",
      "easyJet holidays launching in France and Germany",
      "New winter routes to North Africa and Canaries announced",
    ],
  },
  news: [
    { date: "2026-07-10", headline: "easyJet holidays passes 3m annual customers ahead of plan", source: "Travel Weekly", category: "Financials" },
    { date: "2026-06-28", headline: "easyJet opens seasonal base at Newcastle with three aircraft", source: "BBC News", category: "Expansion" },
    { date: "2026-06-12", headline: "easyJet takes delivery of 50th A321neo, retires final A319s", source: "Aviation Week", category: "Fleet" },
    { date: "2026-05-25", headline: "Kenton Jarvis sets out margin roadmap at capital markets day", source: "Financial Times", category: "Strategy" },
    { date: "2026-05-08", headline: "easyJet holidays launches German market pilot from Berlin", source: "fvw", category: "Expansion" },
    { date: "2026-04-18", headline: "easyJet warns on summer ATC delays, urges EU reform", source: "Reuters", category: "Operations" },
  ],
  swot: {
    strengths: [
      { title: "Primary airport slot portfolio", detail: "Gatwick, Geneva, Amsterdam and Linate positions are effectively irreplicable." },
      { title: "easyJet holidays growth engine", detail: "Converts existing traffic into 2x+ revenue bookings with strong margins and low customer acquisition cost." },
      { title: "Brand & digital experience", detail: "Best-in-class app and a trusted consumer brand across Western Europe." },
    ],
    weaknesses: [
      { title: "Cost gap to ULCCs", detail: "Unit costs sit well above Ryanair and Wizz, limiting response in fare wars." },
      { title: "Congested-airport exposure", detail: "Primary airports mean ATC delays, curfews and higher disruption costs." },
      { title: "Southern Europe seasonality", detail: "Earnings still swing heavily to Q4 (summer); winter utilisation lags." },
    ],
    opportunities: [
      { title: "Holidays internationalisation", detail: "France, Germany and Benelux package markets are large and under-served by digital-first operators." },
      { title: "A321neo up-gauging", detail: "More seats per slot directly monetises constrained airports." },
      { title: "Legacy short-haul retreat", detail: "BA, Air France and Lufthansa ceding intra-European point-to-point routes." },
    ],
    threats: [
      { title: "Ryanair capacity pressure", detail: "Sustained ULCC growth in Italy, Spain and Eastern Europe compresses yields." },
      { title: "ATC and airspace fragility", detail: "European ATC strikes and staffing shortages repeatedly cost tens of millions per summer." },
      { title: "Gatwick dependence", detail: "Any prolonged disruption at its largest base has outsized earnings impact." },
    ],
  },
  opportunities: [
    {
      title: "Continental holidays land-grab",
      detail: "Package attach rates outside the UK are a fraction of UK levels; first-mover digital packaging wins share cheaply.",
      competitiveAngle: "TUI defends with brand but is slower and asset-heavy; Jet2 has no continental presence.",
    },
    {
      title: "Business traveller recovery",
      detail: "Primary airports and frequency suit SME business travel that legacy carriers are pricing out.",
      competitiveAngle: "Ryanair's secondary airports cannot serve this segment.",
    },
    {
      title: "Winter utilisation",
      detail: "North Africa, Canaries and ski routes can lift winter aircraft utilisation from current lows.",
      competitiveAngle: "Jet2's profitable winter ski programme shows the model works.",
    },
  ],
  risks: [
    { title: "Fare yield softness", detail: "Capacity growth across Europe outpacing demand would hit RASK before costs adjust.", severity: "high", category: "Demand" },
    { title: "ATC disruption repeat", detail: "A third consecutive disrupted summer would damage brand and cost base.", severity: "high", category: "Operational" },
    { title: "Holidays execution abroad", detail: "Continental rollout could dilute margins if hotel contracting scales poorly.", severity: "medium", category: "Execution" },
    { title: "Fuel hedging position", detail: "Hedge book softens but does not remove exposure to sustained fuel spikes.", severity: "medium", category: "Cost" },
  ],
  comparisonValues: {
    fleet: 347,
    destinations: 155,
    passengers: 89.7,
    revenue: 9_310_000_000,
    rating: 3.6,
    otp: 72,
  },
  sources: [
    { type: "Annual report", name: "easyJet plc Annual Report FY2024", url: "corporate.easyjet.com/investors", freshness: "December 2025" },
    { type: "Company website", name: "easyJet corporate & media centre", url: "corporate.easyjet.com", freshness: "Live" },
    { type: "Regulatory filing", name: "London Stock Exchange RNS announcements", url: "londonstockexchange.com", freshness: "July 2026" },
    { type: "Customer reviews", name: "Trustpilot — easyJet", url: "uk.trustpilot.com/review/www.easyjet.com", freshness: "Live" },
    { type: "Industry data", name: "UK CAA punctuality & ACI airport data", url: "caa.co.uk", freshness: "Q1 2026" },
    { type: "News coverage", name: "FT, Reuters, Travel Weekly", url: "ft.com", freshness: "Rolling 90 days" },
  ],
};
