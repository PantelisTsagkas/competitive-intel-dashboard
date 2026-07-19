import type { Dataset } from "@/lib/types";
import { jet2 } from "./reports/jet2";
import { ryanair } from "./reports/ryanair";
import { tui } from "./reports/tui";
import { easyjet } from "./reports/easyjet";
import { britishAirways } from "./reports/british-airways";
import { wizzAir } from "./reports/wizz-air";

export const airlines: Dataset = {
  id: "airlines",
  name: "European Airlines",
  entityLabel: "Airlines",
  description:
    "Leisure and low-cost carriers competing in the UK and European travel market.",
  companies: [
    {
      id: "jet2",
      name: "Jet2",
      shortDescription:
        "UK leisure airline and the country's largest tour operator, known for package holidays and customer service.",
      hq: "Leeds, United Kingdom",
      website: "jet2.com",
      founded: 1983,
      logo: { initials: "J2", color: "#c8102e", src: "/logos/jet2.png" },
    },
    {
      id: "ryanair",
      name: "Ryanair",
      shortDescription:
        "Europe's largest airline by passengers, built on an ultra-low-cost model and relentless cost discipline.",
      hq: "Dublin, Ireland",
      website: "ryanair.com",
      founded: 1984,
      logo: { initials: "RA", color: "#073590", src: "/logos/ryanair.png" },
    },
    {
      id: "tui",
      name: "TUI",
      shortDescription:
        "The world's largest integrated tourism group, spanning airlines, hotels, cruises and package holidays.",
      hq: "Hannover, Germany",
      website: "tuigroup.com",
      founded: 1968,
      logo: { initials: "TU", color: "#092a5e", src: "/logos/tui.png" },
    },
    {
      id: "easyjet",
      name: "easyJet",
      shortDescription:
        "Pan-European low-cost carrier with a fast-growing holidays arm and leading positions at primary airports.",
      hq: "Luton, United Kingdom",
      website: "easyjet.com",
      founded: 1995,
      logo: { initials: "eJ", color: "#e05206", src: "/logos/easyjet.png" },
    },
    {
      id: "british-airways",
      name: "British Airways",
      shortDescription:
        "The UK flag carrier, a full-service global network airline and part of International Airlines Group.",
      hq: "London, United Kingdom",
      website: "britishairways.com",
      founded: 1974,
      logo: { initials: "BA", color: "#1e4996", src: "/logos/british-airways.png" },
    },
    {
      id: "wizz-air",
      name: "Wizz Air",
      shortDescription:
        "Ultra-low-cost carrier dominating Central and Eastern Europe, expanding aggressively into Western markets.",
      hq: "Budapest, Hungary",
      website: "wizzair.com",
      founded: 2003,
      logo: { initials: "W6", color: "#c6007e", src: "/logos/wizz-air.png" },
    },
  ],
  generationSteps: [
    "Collecting company filings & annual reports",
    "Scanning press releases & route announcements",
    "Aggregating customer reviews & satisfaction data",
    "Analysing digital presence & app ratings",
    "Benchmarking against sector competitors",
    "Compiling executive intelligence report",
  ],
  comparisonDimensions: [
    { id: "fleet", label: "Fleet size", format: "number", unit: "aircraft", higherIsBetter: true, radarMax: 700 },
    { id: "destinations", label: "Destinations", format: "number", higherIsBetter: true, radarMax: 250 },
    { id: "passengers", label: "Annual passengers", format: "number", unit: "m", higherIsBetter: true, radarMax: 210 },
    { id: "revenue", label: "Revenue", format: "currency", unit: "£", higherIsBetter: true, radarMax: 21_000_000_000 },
    { id: "rating", label: "Customer rating", format: "rating", unit: "5", higherIsBetter: true, radarMax: 5 },
    { id: "otp", label: "On-time performance", format: "percent", higherIsBetter: true, radarMax: 100 },
  ],
  reports: {
    jet2,
    ryanair,
    tui,
    easyjet,
    "british-airways": britishAirways,
    "wizz-air": wizzAir,
  },
};
