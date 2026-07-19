import {
  AlertTriangle,
  Shield,
  Sparkles,
  TrendingDown,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IntelligenceReport, SwotEntry } from "@/lib/types";

const QUADRANTS: {
  key: keyof IntelligenceReport["swot"];
  title: string;
  icon: LucideIcon;
  accent: string;
}[] = [
  { key: "strengths", title: "Strengths", icon: Shield, accent: "text-success" },
  { key: "weaknesses", title: "Weaknesses", icon: TrendingDown, accent: "text-danger" },
  { key: "opportunities", title: "Opportunities", icon: Sparkles, accent: "text-chart-1" },
  { key: "threats", title: "Threats", icon: AlertTriangle, accent: "text-chart-4" },
];

function Quadrant({
  title,
  icon: Icon,
  accent,
  entries,
}: {
  title: string;
  icon: LucideIcon;
  accent: string;
  entries: SwotEntry[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <Icon className={`size-4 ${accent}`} aria-hidden />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {entries.map((entry) => (
            <li key={entry.title}>
              <p className="text-sm font-medium leading-snug">{entry.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {entry.detail}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function SwotGrid({ swot }: { swot: IntelligenceReport["swot"] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {QUADRANTS.map((q) => (
        <Quadrant
          key={q.key}
          title={q.title}
          icon={q.icon}
          accent={q.accent}
          entries={swot[q.key]}
        />
      ))}
    </div>
  );
}
