import type { IntelligenceReport } from "@/lib/types";

export const tui: IntelligenceReport = {
  companyId: "tui",
  executiveSummary: [
    "TUI Group is the world's largest integrated tourism company: five European airlines with around 130 aircraft, over 400 hotels (Riu, TUI Blue, Robinson), 16 cruise ships and tour operations serving roughly 20 million customers a year. No competitor owns as much of the holiday value chain.",
    "The group is mid-way through a pivot from asset-heavy tour operating toward a hybrid model: growing hotels and cruises (its highest-return segments), rebuilding the TUI Musement activities marketplace, and repositioning the app as a holiday super-app to win direct, dynamic-packaging customers.",
    "After repaying pandemic-era German state aid and refinancing, leverage is falling and earnings are recovering, but TUI's UK tour operation has ceded the #1 position to Jet2holidays. Its breadth is both moat and burden: complexity keeps margins below focused rivals, while owned hotels and cruises give earnings quality airlines lack.",
  ],
  profile: [
    { label: "Headquarters", value: "Hannover, Germany", icon: "location" },
    { label: "CEO", value: "Sebastian Ebel", icon: "leader" },
    { label: "Founded", value: "1968 (as Preussag; TUI since 2002)", icon: "calendar" },
    { label: "Fleet size", value: "~130 aircraft across 5 airlines", icon: "fleet" },
    { label: "Destinations", value: "115+ flight destinations; 180+ countries via tours", icon: "network" },
    { label: "Employees", value: "~65,000", icon: "people" },
    { label: "Revenue", value: "€23.2bn (FY2024)", icon: "revenue" },
    { label: "Market position", value: "#1 tourism group globally; #2 UK tour operator", icon: "position" },
  ],
  businessOverview: {
    description:
      "TUI spans the entire holiday: airlines in five source markets (UK, Germany, Benelux, Nordics), 400+ owned or managed hotels, 16 cruise ships across three brands, destination services in 50+ countries, and the Musement tours & activities platform. Markets & Airlines sells the holidays; Holiday Experiences (hotels, cruises, activities) delivers them.",
    model:
      "Vertically integrated tour operating with a shift toward asset-right growth: franchise and management contracts for hotels, chartered rather than owned cruise tonnage, and dynamic packaging through the TUI app to reach customers outside traditional brochure holidays.",
    segments: [
      { name: "Markets & Airlines", detail: "Tour operators and airlines in five European source markets.", revenueShare: 71 },
      { name: "Hotels & Resorts", detail: "Riu, TUI Blue, Robinson and partner brands; the group's profit engine.", revenueShare: 13 },
      { name: "Cruises", detail: "TUI Cruises, Mein Schiff and Marella fleets.", revenueShare: 9 },
      { name: "TUI Musement", detail: "Tours, activities and destination services platform.", revenueShare: 7 },
    ],
  },
  financials: {
    kpis: [
      { label: "Revenue", value: 23_200_000_000, format: "currency", unit: "€", delta: 12, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
      { label: "Underlying EBIT", value: 1_300_000_000, format: "currency", unit: "€", delta: 33, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
      { label: "Customers", value: 20_300_000, format: "number", delta: 7, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
      { label: "Hotel occupancy", value: 82, format: "percent", delta: 2, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
      { label: "Net debt", value: 1_600_000_000, format: "currency", unit: "€", delta: -24, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
      { label: "Cruise occupancy", value: 101, format: "percent", delta: 3, deltaLabel: "vs FY2023", deltaSentiment: "positive" },
    ],
    revenueTrend: {
      label: "Revenue",
      unit: "€bn",
      points: [
        { period: "FY21", value: 4.7 },
        { period: "FY22", value: 16.5 },
        { period: "FY23", value: 20.7 },
        { period: "FY24", value: 23.2 },
        { period: "FY25e", value: 24.6 },
      ],
    },
    secondaryTrend: {
      label: "Underlying EBIT",
      unit: "€m",
      points: [
        { period: "FY21", value: -2075 },
        { period: "FY22", value: 409 },
        { period: "FY23", value: 977 },
        { period: "FY24", value: 1300 },
        { period: "FY25e", value: 1450 },
      ],
    },
  },
  marketPosition: {
    narrative:
      "TUI leads the German, Benelux and Nordic package markets and is #2 in the UK behind Jet2holidays. Its airlines hold around 7% of UK outbound capacity, but its true position is in packaged and owned-experience holidays, where hotel and cruise brands give it pricing power airlines cannot replicate.",
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
      { label: "Global tourism groups by revenue", rank: 1, of: 8, note: "Largest integrated operator worldwide" },
      { label: "German package holiday market", rank: 1, of: 6, note: "Clear leader in home market" },
      { label: "UK tour operators", rank: 2, of: 5, note: "Overtaken by Jet2holidays on ATOL licences" },
    ],
  },
  productsServices: [
    {
      name: "Package holidays",
      description: "Classic and dynamic packages across five source markets, with differentiated hotel concepts.",
      items: ["TUI Blue & Riu resort holidays", "Robinson club holidays", "First Choice (UK)", "Dynamic packaging via app"],
    },
    {
      name: "Cruises",
      description: "Three cruise brands covering premium German and UK value segments.",
      items: ["Mein Schiff (TUI Cruises)", "Hapag-Lloyd expedition cruises", "Marella Cruises (UK)"],
    },
    {
      name: "Experiences & services",
      description: "In-destination revenue beyond the package.",
      items: ["TUI Musement excursions & activities", "Airport transfers", "TUI Care Foundation programmes"],
    },
  ],
  customerExperience: {
    headlineScore: { label: "Trustpilot score (TUI UK)", value: 3.9, format: "rating", unit: "5", deltaSentiment: "neutral" },
    reviewSources: [
      { source: "Trustpilot (UK)", score: 3.9, outOf: 5, volume: "95k+ reviews" },
      { source: "Which? tour operators", score: 3.6, outOf: 5, volume: "Mid-table among UK operators" },
      { source: "Skytrax (TUI Airways)", score: 3.5, outOf: 5, volume: "2.1k reviews" },
      { source: "Google Play app", score: 4.4, outOf: 5, volume: "310k ratings" },
    ],
    sentiment: { positive: 62, neutral: 18, negative: 20 },
    positiveThemes: [
      "Hotel quality in owned brands (Riu, TUI Blue)",
      "Smooth package logistics and transfers",
      "Cruise product consistently well reviewed",
    ],
    negativeThemes: [
      "Flight delays and overnight schedule changes",
      "Compensation and refund handling",
      "Call centre wait times in peak season",
    ],
  },
  digitalPresence: {
    website: {
      url: "tui.com / tui.co.uk",
      note: "Country-specific storefronts plus a group super-app strategy; app bookings and in-resort upsells are the strategic push.",
    },
    apps: [
      { platform: "iOS", rating: 4.6, outOf: 5, downloads: "5m+" },
      { platform: "Android", rating: 4.4, outOf: 5, downloads: "10m+" },
    ],
    social: [
      { platform: "Facebook", followers: "6.8m", engagement: "medium" },
      { platform: "Instagram", followers: "1.9m", engagement: "high" },
      { platform: "TikTok", followers: "640k", engagement: "medium" },
      { platform: "LinkedIn", followers: "890k", engagement: "medium" },
    ],
  },
  hiringGrowth: {
    summary:
      "Hiring concentrated in digital (Porto and Lisbon tech hubs), hotel operations for new openings, and seasonal destination roles. Airline recruitment is steady-state; the growth headcount is in Holiday Experiences and TUI Musement.",
    openRoles: 850,
    hiringTrend: {
      label: "Open roles (quarterly snapshot)",
      points: [
        { period: "Q3 25", value: 720 },
        { period: "Q4 25", value: 690 },
        { period: "Q1 26", value: 800 },
        { period: "Q2 26", value: 850 },
      ],
    },
    focusAreas: ["Digital & app engineering", "Hotel operations & openings", "Destination experiences", "Revenue management"],
    expansionSignals: [
      "30+ hotel openings planned through 2027, Asia and Caribbean weighted",
      "Two Mein Schiff newbuilds on order",
      "TUI Musement targeting third-party airline distribution deals",
    ],
  },
  news: [
    { date: "2026-07-08", headline: "TUI raises FY2026 guidance as summer bookings run 5% ahead", source: "Reuters", category: "Financials" },
    { date: "2026-06-25", headline: "TUI Blue signs 12 new management contracts across Southeast Asia", source: "Hotel Management", category: "Expansion" },
    { date: "2026-06-10", headline: "Mein Schiff Relax enters service with methanol-ready propulsion", source: "Cruise Industry News", category: "Fleet" },
    { date: "2026-05-27", headline: "TUI app passes 50% of UK dynamic package bookings", source: "Travel Weekly", category: "Digital" },
    { date: "2026-05-06", headline: "TUI completes refinancing, S&P upgrades to BB", source: "Bloomberg", category: "Financials" },
    { date: "2026-04-15", headline: "TUI Musement partners with two Gulf carriers for excursion distribution", source: "Skift", category: "Partnerships" },
  ],
  swot: {
    strengths: [
      { title: "Full value-chain ownership", detail: "Hotels, cruises, airlines and destination services capture margin at every step of the holiday." },
      { title: "Brand breadth & loyalty", detail: "TUI, Riu, Robinson and Mein Schiff are category leaders with decades of customer trust in core markets." },
      { title: "Differentiated product", detail: "Owned hotel concepts and cruises cannot be price-compared or replicated by seat-only rivals." },
    ],
    weaknesses: [
      { title: "Structural complexity", detail: "Five airlines, dozens of brands and country organisations keep overheads and margins worse than focused competitors." },
      { title: "Balance sheet history", detail: "Pandemic state aid and dilution still weigh on equity story despite deleveraging." },
      { title: "UK competitive slippage", detail: "Lost UK tour operator leadership to Jet2holidays; UK airline satisfaction scores lag." },
    ],
    opportunities: [
      { title: "Asset-light hotel growth", detail: "Management and franchise contracts grow the hotel footprint without capital intensity." },
      { title: "Dynamic packaging & app", detail: "Super-app strategy opens the seat-only and accommodation-only markets TUI historically ignored." },
      { title: "Experiences marketplace", detail: "Musement can sell to non-TUI travellers, turning a cost centre into a platform business." },
    ],
    threats: [
      { title: "Jet2holidays momentum", detail: "A better-rated, focused rival is winning UK share year after year." },
      { title: "Geopolitical demand shocks", detail: "Eastern Mediterranean and North African destination exposure is sensitive to instability." },
      { title: "Climate transition costs", detail: "Cruise emissions rules and SAF mandates hit an asset-heavy operator hardest." },
    ],
  },
  opportunities: [
    {
      title: "Reclaim UK package momentum",
      detail: "UK remains the largest outbound package market; TUI's hotel exclusives are under-marketed.",
      competitiveAngle: "Jet2 wins on service scores, but cannot match owned differentiated hotel product.",
    },
    {
      title: "Sell experiences beyond TUI customers",
      detail: "Musement distribution deals with third-party airlines put TUI content in rivals' booking flows.",
      competitiveAngle: "No airline competitor owns a comparable activities inventory.",
    },
    {
      title: "Premium cruise capacity",
      detail: "German premium cruise demand exceeds supply; newbuilds are pre-selling above yields.",
      competitiveAngle: "Airlines have no answer to cruise economics (100%+ occupancy, repeat rates).",
    },
  ],
  risks: [
    { title: "Demand shock in source markets", detail: "German consumer weakness would hit the highest-margin bookings; UK slippage compounds it.", severity: "high", category: "Demand" },
    { title: "Complexity cost stickiness", detail: "Transformation programmes have repeatedly under-delivered promised overhead savings.", severity: "medium", category: "Execution" },
    { title: "Destination concentration", detail: "Spain, Greece and Turkey account for the bulk of summer capacity; local disruption cascades group-wide.", severity: "medium", category: "Operational" },
    { title: "Interest rate exposure", detail: "Remaining debt and lease liabilities keep financing costs sensitive to rates.", severity: "low", category: "Financial" },
  ],
  comparisonValues: {
    fleet: 130,
    destinations: 115,
    passengers: 20.3,
    revenue: 19_700_000_000,
    rating: 3.9,
    otp: 70,
  },
  sources: [
    { type: "Annual report", name: "TUI Group Annual Report FY2024", url: "tuigroup.com/en-en/investors", freshness: "December 2025" },
    { type: "Company website", name: "TUI Group newsroom", url: "tuigroup.com", freshness: "Live" },
    { type: "Regulatory filing", name: "Frankfurt Stock Exchange disclosures", url: "boerse-frankfurt.de", freshness: "July 2026" },
    { type: "Customer reviews", name: "Trustpilot — TUI UK", url: "uk.trustpilot.com/review/www.tui.co.uk", freshness: "Live" },
    { type: "Industry data", name: "UK CAA ATOL statistics & DRV German market data", url: "caa.co.uk", freshness: "Q1 2026" },
    { type: "News coverage", name: "Skift, Travel Weekly, Reuters", url: "skift.com", freshness: "Rolling 90 days" },
  ],
};
