import { TrendChart } from "@/components/charts/trend-chart";
import { StatTile } from "@/components/report/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IntelligenceReport } from "@/lib/types";

export function FinancialSnapshot({
  financials,
}: {
  financials: IntelligenceReport["financials"];
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {financials.kpis.map((kpi) => (
          <StatTile key={kpi.label} metric={kpi} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">
              {financials.revenueTrend.label}
              {financials.revenueTrend.unit ? (
                <span className="ml-1.5 font-mono text-xs font-normal text-muted-foreground">
                  {financials.revenueTrend.unit}
                </span>
              ) : null}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TrendChart series={financials.revenueTrend} variant="bar" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">
              {financials.secondaryTrend.label}
              {financials.secondaryTrend.unit ? (
                <span className="ml-1.5 font-mono text-xs font-normal text-muted-foreground">
                  {financials.secondaryTrend.unit}
                </span>
              ) : null}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TrendChart series={financials.secondaryTrend} variant="bar" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
