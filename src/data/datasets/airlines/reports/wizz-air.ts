import type { IntelligenceReport } from "@/lib/types";

export const wizzAir: IntelligenceReport = {
  companyId: "wizz-air",
  executiveSummary: [
    "Wizz Air is Europe's third-largest low-cost carrier and the dominant airline of Central and Eastern Europe, flying around 63 million passengers a year with one of the world's youngest fleets - over 230 Airbus A320/A321neo family aircraft at an average age under five years.",
    "Its model is the most aggressive ultra-low-cost play in the market: the highest seat density, the youngest and most fuel-efficient fleet, and expansion into markets rivals ignore - the Balkans, Caucasus, Gulf and Central Asia - through Wizz Air Abu Dhabi and Wizz Air Malta.",
    "The investment case has been dented by Pratt & Whitney GTF engine inspections grounding a material share of the fleet, UK and Western European competitive pressure, and volatile profitability. If engine availability normalises, its order book of over 300 aircraft underwrites a return to double-digit growth; the risk is that groundings and softer CEE yields persist together.",
  ],
  profile: [
    { label: "Headquarters", value: "Budapest, Hungary", icon: "location" },
    { label: "CEO", value: "József Váradi", icon: "leader" },
    { label: "Founded", value: "2003", icon: "calendar" },
    { label: "Fleet size", value: "~231 aircraft (A320/A321neo family)", icon: "fleet" },
    { label: "Destinations", value: "195+ airports, ~50 countries", icon: "network" },
    { label: "Employees", value: "~8,500", icon: "people" },
    { label: "Revenue", value: "€5.3bn (FY2025)", icon: "revenue" },
    { label: "Market position", value: "#1 in Central & Eastern Europe; #3 European LCC", icon: "position" },
  ],
  businessOverview: {
    description:
      "Wizz Air operates dense point-to-point networks from bases across Central and Eastern Europe, plus growth ventures in the UK, Italy, Albania, and the Gulf via Wizz Air Abu Dhabi. Its network strategy targets underserved city pairs with large diaspora and labour-flow traffic rather than head-to-head tourist routes.",
    model:
      "Ultra-low-cost with maximum asset efficiency: 239-seat A321neos in single-class layout, high aircraft utilisation, and ancillary revenue exceeding 45% of total - the highest ratio in Europe. Subscription products (Wizz Discount Club, MultiPass) add recurring revenue.",
    segments: [
      { name: "Scheduled fares", detail: "Point-to-point flying focused on CEE, Italy, UK and the Gulf.", revenueShare: 54 },
      { name: "Ancillary revenue", detail: "Bags, seats, priority, Wizz Flex and subscription products; Europe's highest ancillary share.", revenueShare: 45 },
      { name: "Other", detail: "Charter and wet-lease activity.", revenueShare: 1 },
    ],
  },
  financials: {
    kpis: [
      { label: "Revenue", value: 5_270_000_000, format: "currency", unit: "€", delta: 4, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Net profit", value: 214_000_000, format: "currency", unit: "€", delta: -41, deltaLabel: "vs FY2024", deltaSentiment: "negative" },
      { label: "Passengers flown", value: 63_400_000, format: "number", delta: 2, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Ancillary revenue / pax", value: 38.1, format: "currency", unit: "€", delta: 6, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Aircraft grounded (GTF)", value: 37, format: "number", delta: -19, deltaLabel: "vs FY2024 peak", deltaSentiment: "positive" },
      { label: "Load factor", value: 91.2, format: "percent", delta: 0.9, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
    ],
    revenueTrend: {
      label: "Revenue",
      unit: "€bn",
      points: [
        { period: "FY21", value: 0.7 },
        { period: "FY22", value: 1.7 },
        { period: "FY23", value: 3.9 },
        { period: "FY24", value: 5.1 },
        { period: "FY25", value: 5.3 },
      ],
    },
    secondaryTrend: {
      label: "Net profit",
      unit: "€m",
      points: [
        { period: "FY21", value: -576 },
        { period: "FY22", value: -642 },
        { period: "FY23", value: -535 },
        { period: "FY24", value: 366 },
        { period: "FY25", value: 214 },
      ],
    },
  },
  marketPosition: {
    narrative:
      "Wizz Air is the #1 carrier in Hungary, Romania, Bulgaria, Albania and much of the Western Balkans, with strong positions in Poland against Ryanair. In the UK it holds around 4% of outbound capacity from Luton and Gatwick. Its Gulf and Central Asia ventures have no direct LCC competitor, though load ramp has been slower than core CEE.",
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
      { label: "Central & Eastern Europe LCC capacity", rank: 1, of: 5, note: "Clear leader across CEE markets" },
      { label: "European LCCs by passengers", rank: 3, of: 6, note: "Behind Ryanair and easyJet" },
      { label: "Fleet age (youngest, Europe)", rank: 1, of: 10, note: "Average age under 5 years" },
    ],
  },
  productsServices: [
    {
      name: "Flights",
      description: "Single-class, high-density short and mid-haul flying.",
      items: ["Basic / Wizz Go / Wizz Plus bundles", "Wizz Priority", "A321XLR mid-haul routes (from 2027)"],
    },
    {
      name: "Subscriptions & memberships",
      description: "Recurring-revenue products unique among European LCCs at this scale.",
      items: ["Wizz Discount Club", "MultiPass monthly subscription", "Privilege Pass"],
    },
    {
      name: "Ancillaries",
      description: "Europe's highest ancillary revenue per passenger.",
      items: ["Bags & seating", "Wizz Flex", "Airport transfers & partner services", "Café & boutique onboard"],
    },
  ],
  customerExperience: {
    headlineScore: { label: "Trustpilot score", value: 1.7, format: "rating", unit: "5", deltaSentiment: "negative" },
    reviewSources: [
      { source: "Trustpilot", score: 1.7, outOf: 5, volume: "32k+ reviews" },
      { source: "Which? airline survey", score: 2.2, outOf: 5, volume: "Second-lowest UK short-haul" },
      { source: "Skytrax", score: 2.9, outOf: 5, volume: "2.8k reviews" },
      { source: "Google Play app", score: 4.3, outOf: 5, volume: "260k ratings" },
    ],
    sentiment: { positive: 30, neutral: 22, negative: 48 },
    positiveThemes: [
      "Fares on routes with no competition",
      "New aircraft and cabin cleanliness",
      "App-driven booking and check-in",
    ],
    negativeThemes: [
      "Cancellations and schedule changes from engine groundings",
      "Customer service and compensation claims",
      "Strict baggage enforcement at gates",
    ],
  },
  digitalPresence: {
    website: {
      url: "wizzair.com",
      note: "Digital-only distribution; the app carries a majority of check-ins and drives subscription and ancillary attach.",
    },
    apps: [
      { platform: "iOS", rating: 4.6, outOf: 5, downloads: "5m+" },
      { platform: "Android", rating: 4.3, outOf: 5, downloads: "10m+" },
    ],
    social: [
      { platform: "Instagram", followers: "720k", engagement: "high" },
      { platform: "TikTok", followers: "510k", engagement: "high" },
      { platform: "Facebook", followers: "1.6m", engagement: "medium" },
      { platform: "LinkedIn", followers: "340k", engagement: "medium" },
    ],
  },
  hiringGrowth: {
    summary:
      "Recruitment follows the delivery schedule: continuous cadet pilot and cabin crew intake across CEE bases, plus Abu Dhabi operations growth. Budapest and London offices hire for digital, revenue management and network planning.",
    openRoles: 520,
    hiringTrend: {
      label: "Open roles (quarterly snapshot)",
      points: [
        { period: "Q3 25", value: 380 },
        { period: "Q4 25", value: 410 },
        { period: "Q1 26", value: 470 },
        { period: "Q2 26", value: 520 },
      ],
    },
    focusAreas: ["Pilot cadet programmes", "Cabin crew (CEE & Gulf)", "Digital & data", "Engineering partnerships"],
    expansionSignals: [
      "300+ Airbus neo-family aircraft on order, A321XLR-led",
      "Wizz Air Abu Dhabi adding Central Asia routes",
      "Target of 500 aircraft by 2030 reaffirmed",
    ],
  },
  news: [
    { date: "2026-07-06", headline: "Wizz Air receives first A321XLR, plans London-Gulf mid-haul", source: "Aviation Week", category: "Fleet" },
    { date: "2026-06-26", headline: "Wizz Air FY2025 profit halves on engine groundings", source: "Reuters", category: "Financials" },
    { date: "2026-06-11", headline: "Wizz launches six new Central Asia routes from Abu Dhabi", source: "Gulf News", category: "Routes" },
    { date: "2026-05-22", headline: "Pratt & Whitney compensation deal extended to 2027", source: "Financial Times", category: "Fleet" },
    { date: "2026-05-02", headline: "Wizz Air MultiPass subscription expands to UK market", source: "Travel Weekly", category: "Product" },
    { date: "2026-04-16", headline: "Wizz Air commits to 10% SAF blend by 2030 with MOL partnership", source: "Bloomberg", category: "Sustainability" },
  ],
  swot: {
    strengths: [
      { title: "Lowest-cost young fleet", detail: "Neo-family fleet under 5 years old delivers best-in-class fuel burn and maintenance costs per seat." },
      { title: "CEE network dominance", detail: "Leading positions in markets with structurally growing propensity to fly and limited competition." },
      { title: "Ancillary & subscription machine", detail: "45% ancillary share and unique subscription products create revenue resilience." },
    ],
    weaknesses: [
      { title: "GTF engine exposure", detail: "Dozens of aircraft grounded for inspections; capacity plans hostage to Pratt & Whitney turnaround times." },
      { title: "Customer service reputation", detail: "Among the lowest satisfaction scores in European aviation; repeated regulator attention on refunds." },
      { title: "Yield volatility", detail: "Diaspora and price-sensitive traffic produces weaker, more volatile yields than Western European leisure." },
    ],
    opportunities: [
      { title: "A321XLR mid-haul", detail: "Opens 6-7 hour routes (Gulf, Central Asia, India ambitions) at short-haul unit costs." },
      { title: "Western Europe base growth", detail: "Italy and UK bases can absorb aircraft as CEE matures." },
      { title: "Untapped emerging corridors", detail: "Caucasus, Central Asia and Saudi routes have no ULCC incumbent." },
    ],
    threats: [
      { title: "Ryanair pressure in CEE", detail: "Ryanair is adding capacity in Poland and the Balkans specifically to blunt Wizz's home advantage." },
      { title: "Engine availability slippage", detail: "Further GTF inspection waves would cut capacity below plan again." },
      { title: "Geopolitical exposure", detail: "Networks near Ukraine, the Caucasus and Middle East are exposed to airspace closures." },
    ],
  },
  opportunities: [
    {
      title: "UK growth from Luton and Gatwick",
      detail: "UK base expansion targets easyJet's price-sensitive segment with lower costs.",
      competitiveAngle: "easyJet's primary-airport fares leave a price umbrella; Jet2's package focus leaves seat-only demand open.",
    },
    {
      title: "Mid-haul first-mover with XLR",
      detail: "No European LCC has scaled 6+ hour single-aisle flying; Wizz's order book leads.",
      competitiveAngle: "Ryanair has no XLR aircraft on order; legacy carriers' mid-haul costs are double.",
    },
    {
      title: "Subscription-led loyalty",
      detail: "MultiPass expansion converts price-sensitive flyers into recurring revenue.",
      competitiveAngle: "No direct equivalent at Ryanair or easyJet today.",
    },
  ],
  risks: [
    { title: "Engine groundings persist", detail: "GTF inspection timelines slipping again would suppress capacity and compensation may not cover margin loss.", severity: "high", category: "Fleet" },
    { title: "Eastern European geopolitics", detail: "Escalation near core markets could close airspace and depress demand simultaneously.", severity: "high", category: "Geopolitical" },
    { title: "Consumer protection enforcement", detail: "UK CAA and EU actions on refunds and drip pricing target the ancillary-heavy model.", severity: "medium", category: "Regulatory" },
    { title: "Overexpansion risk", detail: "Gulf and mid-haul ventures could absorb capital and management focus while core yields soften.", severity: "medium", category: "Strategy" },
  ],
  comparisonValues: {
    fleet: 231,
    destinations: 195,
    passengers: 63.4,
    revenue: 4_500_000_000,
    rating: 2.9,
    otp: 65,
  },
  sources: [
    { type: "Annual report", name: "Wizz Air Holdings Annual Report FY2025", url: "wizzair.com/en-gb/information-and-services/investor-relations", freshness: "June 2026" },
    { type: "Company website", name: "Wizz Air newsroom", url: "wizzair.com", freshness: "Live" },
    { type: "Regulatory filing", name: "London Stock Exchange RNS announcements", url: "londonstockexchange.com", freshness: "July 2026" },
    { type: "Customer reviews", name: "Trustpilot — Wizz Air", url: "uk.trustpilot.com/review/wizzair.com", freshness: "Live" },
    { type: "Industry data", name: "Eurocontrol & CEE airport statistics", url: "eurocontrol.int", freshness: "Q2 2026" },
    { type: "News coverage", name: "Reuters, Aviation Week, Gulf News", url: "reuters.com", freshness: "Rolling 90 days" },
  ],
};
