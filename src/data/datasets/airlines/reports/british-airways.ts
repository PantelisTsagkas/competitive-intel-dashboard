import type { IntelligenceReport } from "@/lib/types";

export const britishAirways: IntelligenceReport = {
  companyId: "british-airways",
  executiveSummary: [
    "British Airways is the UK flag carrier and the largest airline at Heathrow, operating a global full-service network of around 200 destinations with a fleet of some 280 aircraft. As the anchor of International Airlines Group (IAG), it contributes the largest share of group profit, driven by premium transatlantic traffic.",
    "BA's economics rest on assets no competitor can copy: roughly half of Heathrow's slots, the joint business with American Airlines over the Atlantic, a globally recognised brand, and the Avios loyalty currency. Premium cabins on North American routes generate an outsized share of earnings.",
    "The airline is mid-way through a £7bn transformation programme covering fleet, cabins, IT and operational reliability - the areas where its reputation has suffered most. Short-haul competitiveness against low-cost carriers, ageing IT, and industrial relations remain the persistent challenges; premium long-haul demand strength is the persistent advantage.",
  ],
  profile: [
    { label: "Headquarters", value: "London (Harmondsworth), United Kingdom", icon: "location" },
    { label: "CEO", value: "Sean Doyle", icon: "leader" },
    { label: "Founded", value: "1974 (merger of BOAC and BEA)", icon: "calendar" },
    { label: "Fleet size", value: "~280 aircraft", icon: "fleet" },
    { label: "Destinations", value: "~200 destinations, 65+ countries", icon: "network" },
    { label: "Employees", value: "~35,000", icon: "people" },
    { label: "Revenue", value: "£15.7bn (2024)", icon: "revenue" },
    { label: "Market position", value: "UK flag carrier; #1 at Heathrow", icon: "position" },
  ],
  businessOverview: {
    description:
      "BA operates a hub-and-spoke network from Heathrow and Gatwick with long-haul flying to the Americas, Asia, Africa and the Middle East, feeding from European short-haul. Within IAG it sits alongside Iberia, Aer Lingus, Vueling and LEVEL, sharing the Avios loyalty platform and IAG Loyalty economics.",
    model:
      "Full-service network carrier: premium cabin yields on long-haul (First, Club Suite business class, World Traveller Plus) subsidise network breadth; the Atlantic joint business with American Airlines coordinates schedules and pricing; Avios monetises the customer base beyond flying.",
    segments: [
      { name: "Long-haul network", detail: "Premium-weighted flying to ~120 long-haul destinations; North Atlantic is the profit core.", revenueShare: 62 },
      { name: "Short-haul & feed", detail: "European network from Heathrow, Gatwick and City serving point-to-point and connecting traffic.", revenueShare: 24 },
      { name: "Cargo, loyalty & other", detail: "IAG Cargo belly capacity, Avios/IAG Loyalty contribution and BA Holidays.", revenueShare: 14 },
    ],
  },
  financials: {
    kpis: [
      { label: "Revenue", value: 15_700_000_000, format: "currency", unit: "£", delta: 4, deltaLabel: "vs 2023", deltaSentiment: "positive" },
      { label: "Operating profit", value: 2_050_000_000, format: "currency", unit: "£", delta: 15, deltaLabel: "vs 2023", deltaSentiment: "positive" },
      { label: "Passengers flown", value: 48_000_000, format: "number", delta: 5, deltaLabel: "vs 2023", deltaSentiment: "positive" },
      { label: "Operating margin", value: 13.1, format: "percent", delta: 1.3, deltaLabel: "vs 2023", deltaSentiment: "positive" },
      { label: "Transformation investment", value: 7_000_000_000, format: "currency", unit: "£", deltaLabel: "2024-2027 programme", deltaSentiment: "neutral" },
      { label: "Load factor", value: 84.5, format: "percent", delta: 1.0, deltaLabel: "vs 2023", deltaSentiment: "positive" },
    ],
    revenueTrend: {
      label: "Revenue",
      unit: "£bn",
      points: [
        { period: "2021", value: 4.0 },
        { period: "2022", value: 10.7 },
        { period: "2023", value: 15.1 },
        { period: "2024", value: 15.7 },
        { period: "2025e", value: 16.4 },
      ],
    },
    secondaryTrend: {
      label: "Operating profit",
      unit: "£m",
      points: [
        { period: "2021", value: -2000 },
        { period: "2022", value: 461 },
        { period: "2023", value: 1780 },
        { period: "2024", value: 2050 },
        { period: "2025e", value: 2200 },
      ],
    },
  },
  marketPosition: {
    narrative:
      "BA holds around 50% of Heathrow slots and 13% of UK outbound seat capacity, but measured by revenue it dominates UK aviation: premium transatlantic routes make London-New York the most valuable air corridor in the world, where the BA/American joint business leads. Short-haul, it has ceded leisure share to easyJet, Ryanair and Jet2 for two decades.",
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
      { label: "Heathrow slot holdings", rank: 1, of: 10, note: "~50% including BA CityFlyer" },
      { label: "Transatlantic capacity (UK-US)", rank: 1, of: 6, note: "Joint business with American Airlines leads the corridor" },
      { label: "UK customer satisfaction (airlines)", rank: 4, of: 6, note: "Reliability issues weigh on a premium brand" },
    ],
  },
  productsServices: [
    {
      name: "Cabins & network",
      description: "Four-cabin long-haul product with an ongoing fleet-wide upgrade.",
      items: ["First", "Club Suite (business)", "World Traveller Plus (premium economy)", "Euro Traveller short-haul"],
    },
    {
      name: "Loyalty & holidays",
      description: "Avios ecosystem and packaged travel.",
      items: ["British Airways Executive Club", "Avios currency & co-brand cards", "BA Holidays packages"],
    },
    {
      name: "B2B & subsidiaries",
      description: "Non-passenger revenue streams.",
      items: ["IAG Cargo", "BA CityFlyer (London City)", "Engineering & maintenance services"],
    },
  ],
  customerExperience: {
    headlineScore: { label: "Trustpilot score", value: 2.1, format: "rating", unit: "5", deltaSentiment: "negative" },
    reviewSources: [
      { source: "Trustpilot", score: 2.1, outOf: 5, volume: "38k+ reviews" },
      { source: "Which? airline survey", score: 3.0, outOf: 5, volume: "Mid-table long-haul, weak short-haul" },
      { source: "Skytrax", score: 3.8, outOf: 5, volume: "4-star airline rating" },
      { source: "Google Play app", score: 4.3, outOf: 5, volume: "190k ratings" },
    ],
    sentiment: { positive: 44, neutral: 24, negative: 32 },
    positiveThemes: [
      "Club Suite and refreshed long-haul cabins",
      "Avios earning and redemption value",
      "Crew professionalism on long-haul",
    ],
    negativeThemes: [
      "IT outages and disruption recovery",
      "Short-haul catering and seat density",
      "Call centre and refund handling",
    ],
  },
  digitalPresence: {
    website: {
      url: "ba.com",
      note: "High-traffic global storefront; a multi-year IT modernisation is replacing legacy systems behind booking and operations.",
    },
    apps: [
      { platform: "iOS", rating: 4.8, outOf: 5, downloads: "5m+" },
      { platform: "Android", rating: 4.3, outOf: 5, downloads: "5m+" },
    ],
    social: [
      { platform: "Instagram", followers: "1.4m", engagement: "medium" },
      { platform: "Facebook", followers: "2.9m", engagement: "medium" },
      { platform: "X / Twitter", followers: "1.3m", engagement: "medium" },
      { platform: "LinkedIn", followers: "980k", engagement: "high" },
    ],
  },
  hiringGrowth: {
    summary:
      "Hiring weighted to operational resilience (engineering, ground operations) and digital transformation roles, alongside continuous cabin crew intake. A revived pilot cadet scheme addresses the long-term pilot pipeline.",
    openRoles: 780,
    hiringTrend: {
      label: "Open roles (quarterly snapshot)",
      points: [
        { period: "Q3 25", value: 690 },
        { period: "Q4 25", value: 650 },
        { period: "Q1 26", value: 740 },
        { period: "Q2 26", value: 780 },
      ],
    },
    focusAreas: ["Engineering & technical", "Digital & IT modernisation", "Cabin crew", "Airport operations"],
    expansionSignals: [
      "Fleet orders: A350s, 787-10s and A320neos arriving through 2028",
      "Club Suite retrofit nearing fleet-wide completion",
      "New routes to secondary US cities announced for 2027",
    ],
  },
  news: [
    { date: "2026-07-07", headline: "BA completes Club Suite rollout on 777 fleet", source: "Business Traveller", category: "Product" },
    { date: "2026-06-30", headline: "IAG reports record Q2; BA operating margin hits 14%", source: "Reuters", category: "Financials" },
    { date: "2026-06-14", headline: "BA opens new First Wing at Heathrow Terminal 5", source: "The Times", category: "Product" },
    { date: "2026-05-29", headline: "BA doubles down on transatlantic with three new US routes", source: "Financial Times", category: "Routes" },
    { date: "2026-05-10", headline: "BA's legacy IT replacement passes halfway milestone", source: "Computer Weekly", category: "Digital" },
    { date: "2026-04-21", headline: "Heathrow expansion decision expected; BA signals slot ambitions", source: "BBC News", category: "Strategy" },
  ],
  swot: {
    strengths: [
      { title: "Heathrow slot dominance", detail: "~50% of slots at Europe's premier hub is a structural moat no entrant can assail." },
      { title: "Premium transatlantic franchise", detail: "The BA/American joint business on the world's most profitable corridor drives group earnings." },
      { title: "Avios loyalty ecosystem", detail: "A loyalty currency with bank co-brands monetises customers even when they fly rivals." },
    ],
    weaknesses: [
      { title: "Operational reliability reputation", detail: "IT outages and disruption handling have eroded the premium brand promise." },
      { title: "Short-haul cost disadvantage", detail: "Legacy cost base cannot match LCCs; short-haul exists largely to feed long-haul." },
      { title: "Industrial relations complexity", detail: "Multiple unions and legacy contracts slow change and periodically threaten disruption." },
    ],
    opportunities: [
      { title: "Premium leisure structural growth", detail: "Post-pandemic premium leisure demand lets BA fill premium cabins without corporate recovery." },
      { title: "Transformation programme delivery", detail: "£7bn in fleet, cabins and IT can close the gap between brand promise and experience." },
      { title: "Loyalty monetisation", detail: "IAG Loyalty's growth as a standalone earnings stream is still early versus US peers." },
    ],
    threats: [
      { title: "Gulf carrier & US competition", detail: "Emirates, Qatar and US majors compete hard for premium connecting traffic." },
      { title: "Heathrow capacity & charges", detail: "Constrained capacity plus rising airport charges cap growth and margins." },
      { title: "Corporate travel structural decline", detail: "Video-first work habits keep business volumes below pre-2020 levels." },
    ],
  },
  opportunities: [
    {
      title: "Fix short-haul economics with up-gauging",
      detail: "A320neo densification and Euro Traveller product tweaks can narrow LCC gap on feed routes.",
      competitiveAngle: "easyJet and Ryanair win on price but cannot feed a long-haul network.",
    },
    {
      title: "Premium economy expansion",
      detail: "World Traveller Plus is capacity-constrained on best routes; demand outstrips supply.",
      competitiveAngle: "No LCC and few US carriers match a mature premium economy product.",
    },
    {
      title: "BA Holidays scale-up",
      detail: "Packages attach high-margin hotel revenue to existing premium traffic.",
      competitiveAngle: "Jet2 and easyJet dominate mainstream packages, but the premium package niche is open.",
    },
  ],
  risks: [
    { title: "IT modernisation failure", detail: "Another high-profile outage during the migration would be a severe brand and regulatory event.", severity: "high", category: "Technology" },
    { title: "Transatlantic demand shock", detail: "Earnings concentration on US routes exposes BA to US-UK macro or geopolitical shifts.", severity: "high", category: "Demand" },
    { title: "Industrial action", detail: "Pay disputes across crew, engineering or ground staff can ground the operation.", severity: "medium", category: "Labour" },
    { title: "Fuel and carbon costs", detail: "Long-haul exposure to jet fuel plus tightening UK/EU ETS raises structural costs.", severity: "medium", category: "Cost" },
  ],
  comparisonValues: {
    fleet: 280,
    destinations: 200,
    passengers: 48,
    revenue: 15_700_000_000,
    rating: 3.4,
    otp: 68,
  },
  sources: [
    { type: "Annual report", name: "IAG Annual Report 2024 (BA segment)", url: "iairgroup.com/investors", freshness: "March 2026" },
    { type: "Company website", name: "BA newsroom & mediacentre", url: "mediacentre.britishairways.com", freshness: "Live" },
    { type: "Regulatory filing", name: "Companies House — British Airways plc accounts", url: "find-and-update.company-information.service.gov.uk", freshness: "2024 accounts" },
    { type: "Customer reviews", name: "Trustpilot & Skytrax — British Airways", url: "uk.trustpilot.com/review/www.britishairways.com", freshness: "Live" },
    { type: "Industry data", name: "UK CAA punctuality & Heathrow traffic statistics", url: "caa.co.uk", freshness: "Q1 2026" },
    { type: "News coverage", name: "FT, Reuters, Business Traveller", url: "ft.com", freshness: "Rolling 90 days" },
  ],
};
