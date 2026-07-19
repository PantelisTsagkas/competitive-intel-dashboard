import type { IntelligenceReport } from "@/lib/types";

export const ryanair: IntelligenceReport = {
  companyId: "ryanair",
  executiveSummary: [
    "Ryanair Holdings is Europe's largest airline group, carrying around 200 million passengers a year across more than 235 airports with a fleet of over 600 Boeing 737s. Its ultra-low-cost model - single aircraft type, secondary airports, rapid turnarounds and aggressive ancillary monetisation - delivers the lowest unit costs in European aviation by a wide margin.",
    "The group converts cost leadership into pricing power: it can profitably underprice every competitor on overlapping routes, using capacity as a competitive weapon. Boeing 737 MAX 'Gamechanger' and forthcoming MAX-10 deliveries extend the cost gap while adding seats per flight.",
    "Customer experience remains its structural trade-off: satisfaction scores sit well below leisure-focused rivals, and its brand invites regulatory and media scrutiny. Its scale, balance sheet and fuel hedging discipline nonetheless make it the sector's most resilient operator in downturns, which it historically uses to grab share.",
  ],
  profile: [
    { label: "Headquarters", value: "Dublin, Ireland", icon: "location" },
    { label: "Group CEO", value: "Michael O'Leary", icon: "leader" },
    { label: "Founded", value: "1984", icon: "calendar" },
    { label: "Fleet size", value: "610+ aircraft (Boeing 737 family)", icon: "fleet" },
    { label: "Destinations", value: "235+ airports, 37 countries", icon: "network" },
    { label: "Employees", value: "~27,000", icon: "people" },
    { label: "Revenue", value: "€13.9bn (FY2025)", icon: "revenue" },
    { label: "Market position", value: "#1 European airline by passengers", icon: "position" },
  ],
  businessOverview: {
    description:
      "Ryanair Group operates five airline brands (Ryanair, Ryanair UK, Buzz, Lauda Europe, Malta Air) under one cost structure and network plan. It flies short-haul point-to-point across Europe and North Africa, prioritising airports where deals lower charges and turnarounds stay under 25 minutes.",
    model:
      "Ultra-low-cost: fares near marginal cost fill aircraft, while ancillaries (bags, seats, priority boarding) drive around 35% of revenue at high margin. A single 737 fleet minimises training, maintenance and scheduling cost.",
    segments: [
      { name: "Scheduled fares", detail: "Point-to-point short-haul flying across 37 countries.", revenueShare: 64 },
      { name: "Ancillary revenue", detail: "Bags, seat selection, priority boarding, onboard sales and partner commissions.", revenueShare: 35 },
      { name: "Other", detail: "Cargo, charters and connecting partnerships.", revenueShare: 1 },
    ],
  },
  financials: {
    kpis: [
      { label: "Revenue", value: 13_900_000_000, format: "currency", unit: "€", delta: 4, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Profit after tax", value: 1_610_000_000, format: "currency", unit: "€", delta: -16, deltaLabel: "vs FY2024", deltaSentiment: "negative" },
      { label: "Passengers flown", value: 200_000_000, format: "number", delta: 9, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Ancillary revenue / pax", value: 24.4, format: "currency", unit: "€", delta: 3, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Net cash", value: 1_300_000_000, format: "currency", unit: "€", delta: 18, deltaLabel: "vs FY2024", deltaSentiment: "positive" },
      { label: "Load factor", value: 94, format: "percent", delta: 0, deltaLabel: "vs FY2024", deltaSentiment: "neutral" },
    ],
    revenueTrend: {
      label: "Revenue",
      unit: "€bn",
      points: [
        { period: "FY21", value: 1.6 },
        { period: "FY22", value: 4.8 },
        { period: "FY23", value: 10.8 },
        { period: "FY24", value: 13.4 },
        { period: "FY25", value: 13.9 },
      ],
    },
    secondaryTrend: {
      label: "Profit after tax",
      unit: "€m",
      points: [
        { period: "FY21", value: -1015 },
        { period: "FY22", value: -355 },
        { period: "FY23", value: 1430 },
        { period: "FY24", value: 1920 },
        { period: "FY25", value: 1610 },
      ],
    },
  },
  marketPosition: {
    narrative:
      "Ryanair is the #1 or #2 carrier in most European countries it serves and holds roughly 19% of UK outbound capacity. Its network breadth and cost floor mean competitors generally avoid direct fare wars; growth markets are Italy, Poland, Morocco and regional UK airports vacated by rivals.",
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
      { label: "European airlines by passengers", rank: 1, of: 10, note: "Ahead of Lufthansa Group and IAG" },
      { label: "Unit cost (ex-fuel) per seat", rank: 1, of: 10, note: "Lowest in Europe, ~40% below legacy carriers" },
      { label: "UK customer satisfaction (airlines)", rank: 6, of: 6, note: "Bottom of most UK satisfaction surveys" },
    ],
  },
  productsServices: [
    {
      name: "Flights",
      description: "High-frequency point-to-point short-haul at the lowest fares in each market.",
      items: ["Basic fare", "Regular / Plus / Flexi bundles", "Priority & 2 cabin bags", "Reserved seating"],
    },
    {
      name: "Ancillaries & partners",
      description: "The margin engine: attach-rate-optimised extras and commissions.",
      items: ["Checked bags", "Fast track", "Ryanair Rooms & car hire", "Travel insurance", "Onboard retail"],
    },
    {
      name: "B2B & other",
      description: "Capacity and platform plays.",
      items: ["Charter flying", "Ryanair Labs API partnerships (approved OTAs)", "Cargo belly space"],
    },
  ],
  customerExperience: {
    headlineScore: { label: "Trustpilot score", value: 1.6, format: "rating", unit: "5", deltaSentiment: "negative" },
    reviewSources: [
      { source: "Trustpilot", score: 1.6, outOf: 5, volume: "45k+ reviews" },
      { source: "Which? airline survey", score: 2.4, outOf: 5, volume: "Lowest-ranked short-haul carrier" },
      { source: "Skytrax", score: 3.1, outOf: 5, volume: "5.6k reviews" },
      { source: "Google Play app", score: 4.2, outOf: 5, volume: "580k ratings" },
    ],
    sentiment: { positive: 34, neutral: 21, negative: 45 },
    positiveThemes: [
      "Unbeatable fares and route choice",
      "Punctuality on uncongested routes",
      "App check-in and boarding flow",
    ],
    negativeThemes: [
      "Extra charges perceived as punitive (bags, check-in)",
      "Customer service responsiveness on refunds",
      "Seat comfort and boarding experience",
    ],
  },
  digitalPresence: {
    website: {
      url: "ryanair.com",
      note: "Europe's most-visited airline website; the app is mandatory for parts of the journey, driving industry-leading digital adoption.",
    },
    apps: [
      { platform: "iOS", rating: 4.7, outOf: 5, downloads: "10m+" },
      { platform: "Android", rating: 4.2, outOf: 5, downloads: "50m+" },
    ],
    social: [
      { platform: "TikTok", followers: "2.4m", engagement: "high" },
      { platform: "Instagram", followers: "1.1m", engagement: "high" },
      { platform: "X / Twitter", followers: "780k", engagement: "high" },
      { platform: "LinkedIn", followers: "450k", engagement: "medium" },
    ],
  },
  hiringGrowth: {
    summary:
      "Continuous large-scale recruitment of cabin crew and pilots ahead of MAX-10 deliveries, plus engineering bases in Dublin, Kaunas and Seville. Ryanair Labs (Dublin, Madrid, Wrocław) hires several hundred engineers for its digital platform.",
    openRoles: 1250,
    hiringTrend: {
      label: "Open roles (quarterly snapshot)",
      points: [
        { period: "Q3 25", value: 980 },
        { period: "Q4 25", value: 1050 },
        { period: "Q1 26", value: 1180 },
        { period: "Q2 26", value: 1250 },
      ],
    },
    focusAreas: ["Pilots & cabin crew", "Ryanair Labs software engineering", "Maintenance & engineering", "Ground operations"],
    expansionSignals: [
      "300 Boeing 737 MAX-10 on order (150 firm) from 2027",
      "New bases announced in Italy and Morocco",
      "Target of 300m passengers a year by 2034",
    ],
  },
  news: [
    { date: "2026-07-11", headline: "Ryanair raises FY27 traffic target on early MAX-10 delivery schedule", source: "Reuters", category: "Fleet" },
    { date: "2026-07-01", headline: "Ryanair opens two new Moroccan routes from Stansted", source: "Travel Weekly", category: "Routes" },
    { date: "2026-06-20", headline: "Ryanair FY2025 profit falls 16% on fare softness, guides recovery", source: "Financial Times", category: "Financials" },
    { date: "2026-06-05", headline: "OTA truce extends: Ryanair signs approved-retailer deal with loveholidays", source: "TTG Media", category: "Partnerships" },
    { date: "2026-05-19", headline: "Ryanair Labs opens 200-role engineering hub in Wrocław", source: "TechCrunch", category: "Hiring" },
    { date: "2026-04-28", headline: "Ryanair threatens capacity cuts at airports raising charges", source: "Bloomberg", category: "Strategy" },
  ],
  swot: {
    strengths: [
      { title: "Unmatched cost leadership", detail: "Ex-fuel unit costs ~40% below legacy rivals; can price below competitors' break-even." },
      { title: "Scale & network density", detail: "600+ aircraft and 235+ airports create schedule depth no rival matches." },
      { title: "Fortress balance sheet", detail: "Net cash position and BBB+ rating; buys aircraft cheaply in downturns." },
    ],
    weaknesses: [
      { title: "Brand & service perception", detail: "Persistently bottom of satisfaction rankings; caps premium and corporate demand." },
      { title: "Boeing single-supplier exposure", detail: "MAX delivery delays directly constrain growth plans." },
      { title: "Secondary airport dependence", detail: "Model needs cheap airports; charge increases erode the cost gap." },
    ],
    opportunities: [
      { title: "Legacy carrier retreat", detail: "Consolidation and capacity cuts at flag carriers open primary-airport slots." },
      { title: "Eastern Mediterranean & North Africa", detail: "Morocco, Albania and Jordan expansion at low airport cost." },
      { title: "MAX-10 up-gauging", detail: "228 seats per aircraft cuts unit costs a further ~7% and eases slot constraints." },
    ],
    threats: [
      { title: "EU consumer regulation", detail: "Hand-baggage and pricing-transparency rulings threaten the ancillary model." },
      { title: "Environmental taxation", detail: "ETS expansion and national air taxes fall hardest on low-fare traffic." },
      { title: "ATC disruption", detail: "European ATC strikes and shortages disproportionately hit high-frequency short-haul." },
    ],
  },
  opportunities: [
    {
      title: "Package holiday adjacency",
      detail: "Ryanair's traffic dwarfs UK tour operators but it has no holidays product.",
      competitiveAngle: "Jet2 and TUI monetise the same passengers at 2-3x revenue per trip.",
    },
    {
      title: "Corporate short-haul",
      detail: "Business travel recovery on primary routes remains under-monetised.",
      competitiveAngle: "easyJet and BA capture most SME business traffic despite higher fares.",
    },
    {
      title: "Loyalty & subscription",
      detail: "No meaningful loyalty programme; a paid subscription could lock in its most frequent flyers.",
      competitiveAngle: "Wizz Air's Discount Club shows willingness to pay in the ULCC segment.",
    },
  ],
  risks: [
    { title: "Boeing delivery slippage", detail: "MAX-10 certification or production delays would force growth targets down.", severity: "high", category: "Fleet" },
    { title: "Regulatory intervention on ancillaries", detail: "EU rulings on hand baggage or drip pricing could remove billions in ancillary revenue.", severity: "high", category: "Regulatory" },
    { title: "Fare environment softness", detail: "FY25 showed fares can fall faster than costs; a capacity glut would compress margins.", severity: "medium", category: "Demand" },
    { title: "Succession risk", detail: "Michael O'Leary's eventual exit removes the sector's most effective cost enforcer.", severity: "medium", category: "Governance" },
  ],
  comparisonValues: {
    fleet: 610,
    destinations: 235,
    passengers: 200,
    revenue: 11_900_000_000,
    rating: 3.0,
    otp: 74,
  },
  sources: [
    { type: "Annual report", name: "Ryanair Holdings Annual Report FY2025", url: "investor.ryanair.com", freshness: "June 2026" },
    { type: "Company website", name: "Ryanair.com corporate & media centre", url: "corporate.ryanair.com", freshness: "Live" },
    { type: "Regulatory filing", name: "SEC 20-F & Euronext filings", url: "sec.gov", freshness: "June 2026" },
    { type: "Customer reviews", name: "Trustpilot & Skytrax — Ryanair", url: "uk.trustpilot.com/review/www.ryanair.com", freshness: "Live" },
    { type: "Industry data", name: "Eurocontrol traffic & OAG capacity data", url: "eurocontrol.int", freshness: "Q2 2026" },
    { type: "News coverage", name: "Reuters, FT, Bloomberg aviation desks", url: "reuters.com", freshness: "Rolling 90 days" },
  ],
};
