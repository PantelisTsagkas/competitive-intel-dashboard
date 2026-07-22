import type { UpcomingCompany } from "@/lib/types";

/**
 * Carriers named in the coverage roadmap but not yet profiled.
 *
 * These are directory entries only: no report, no figures, no globe marker, and
 * nothing here feeds the console telemetry. Monogram badges rather than logo
 * files, since an unqueued target does not warrant a brand asset in /public -
 * the colours are darkened where a brand's own is too light for white text.
 */
export const upcomingAirlines: UpcomingCompany[] = [
  { id: "lufthansa", name: "Lufthansa", hq: "Cologne, Germany", logo: { initials: "LH", color: "#05164d" } },
  { id: "air-france", name: "Air France", hq: "Paris, France", logo: { initials: "AF", color: "#002157" } },
  { id: "klm", name: "KLM", hq: "Amstelveen, Netherlands", logo: { initials: "KL", color: "#0a4f9c" } },
  { id: "iberia", name: "Iberia", hq: "Madrid, Spain", logo: { initials: "IB", color: "#b0142c" } },
  { id: "vueling", name: "Vueling", hq: "Barcelona, Spain", logo: { initials: "VY", color: "#8a6d00" } },
  { id: "aer-lingus", name: "Aer Lingus", hq: "Dublin, Ireland", logo: { initials: "EI", color: "#00705a" } },
  { id: "norwegian", name: "Norwegian", hq: "Fornebu, Norway", logo: { initials: "DY", color: "#b81237" } },
  { id: "sas", name: "SAS", hq: "Stockholm, Sweden", logo: { initials: "SK", color: "#003d7d" } },
  { id: "finnair", name: "Finnair", hq: "Helsinki, Finland", logo: { initials: "AY", color: "#0b1560" } },
  { id: "tap-air-portugal", name: "TAP Air Portugal", hq: "Lisbon, Portugal", logo: { initials: "TP", color: "#00663a" } },
  { id: "ita-airways", name: "ITA Airways", hq: "Rome, Italy", logo: { initials: "AZ", color: "#00295b" } },
  { id: "swiss", name: "SWISS", hq: "Basel, Switzerland", logo: { initials: "LX", color: "#a5000f" } },
  { id: "austrian-airlines", name: "Austrian Airlines", hq: "Vienna, Austria", logo: { initials: "OS", color: "#9c0000" } },
  { id: "brussels-airlines", name: "Brussels Airlines", hq: "Brussels, Belgium", logo: { initials: "SN", color: "#0a2472" } },
  { id: "eurowings", name: "Eurowings", hq: "Düsseldorf, Germany", logo: { initials: "EW", color: "#7a1a6b" } },
  { id: "transavia", name: "Transavia", hq: "Amsterdam, Netherlands", logo: { initials: "HV", color: "#00706a" } },
  { id: "volotea", name: "Volotea", hq: "Barcelona, Spain", logo: { initials: "V7", color: "#6d2077" } },
  { id: "pegasus-airlines", name: "Pegasus Airlines", hq: "Istanbul, Türkiye", logo: { initials: "PC", color: "#9c3b00" } },
  { id: "turkish-airlines", name: "Turkish Airlines", hq: "Istanbul, Türkiye", logo: { initials: "TK", color: "#9c0e12" } },
  { id: "lot-polish-airlines", name: "LOT Polish Airlines", hq: "Warsaw, Poland", logo: { initials: "LO", color: "#11397d" } },
  { id: "aegean-airlines", name: "Aegean Airlines", hq: "Athens, Greece", logo: { initials: "A3", color: "#00437a" } },
  { id: "air-europa", name: "Air Europa", hq: "Palma de Mallorca, Spain", logo: { initials: "UX", color: "#002f6c" } },
  { id: "icelandair", name: "Icelandair", hq: "Reykjavík, Iceland", logo: { initials: "FI", color: "#003876" } },
  { id: "play", name: "PLAY", hq: "Reykjavík, Iceland", logo: { initials: "OG", color: "#8f0026" } },
  { id: "airbaltic", name: "airBaltic", hq: "Riga, Latvia", logo: { initials: "BT", color: "#4a6b00" } },
  { id: "loganair", name: "Loganair", hq: "Glasgow, United Kingdom", logo: { initials: "LM", color: "#12284c" } },
  { id: "condor", name: "Condor", hq: "Neu-Isenburg, Germany", logo: { initials: "DE", color: "#8a0057" } },
  { id: "croatia-airlines", name: "Croatia Airlines", hq: "Zagreb, Croatia", logo: { initials: "OU", color: "#8f1a1a" } },
  { id: "sunexpress", name: "SunExpress", hq: "Antalya, Türkiye", logo: { initials: "XQ", color: "#8a4a00" } },
  { id: "smartwings", name: "Smartwings", hq: "Prague, Czechia", logo: { initials: "QS", color: "#0b4f8a" } },
];
