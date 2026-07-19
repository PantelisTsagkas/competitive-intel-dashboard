import { TrendingUp } from "lucide-react";
import { TrendChart } from "@/components/charts/trend-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { IntelligenceReport } from "@/lib/types";

export function HiringGrowth({
  hiring,
}: {
  hiring: IntelligenceReport["hiringGrowth"];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">{hiring.hiringTrend.label}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-baseline gap-2">
            <p className="font-mono text-3xl font-semibold tracking-tight">
              {hiring.openRoles.toLocaleString("en-GB")}
            </p>
            <p className="text-xs text-muted-foreground">open roles today</p>
          </div>
          <TrendChart series={hiring.hiringTrend} variant="line" height={180} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Growth signals</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-foreground/90">{hiring.summary}</p>
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Hiring focus
            </p>
            <div className="flex flex-wrap gap-1.5">
              {hiring.focusAreas.map((area) => (
                <Badge key={area} variant="secondary" className="font-normal">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Expansion indicators
            </p>
            <ul className="space-y-2">
              {hiring.expansionSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-2 text-xs leading-relaxed">
                  <TrendingUp className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden />
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
