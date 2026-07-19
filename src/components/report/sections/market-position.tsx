import { ShareChart } from "@/components/charts/share-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IntelligenceReport } from "@/lib/types";

export function MarketPosition({
  companyId,
  position,
}: {
  companyId: string;
  position: IntelligenceReport["marketPosition"];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="text-sm">{position.shareMetricLabel}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm leading-relaxed text-foreground/90">
            {position.narrative}
          </p>
          <ShareChart slices={position.marketShare} highlightId={companyId} />
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-sm">Rankings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {position.rankings.map((ranking) => (
            <div key={ranking.label} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 min-w-8 shrink-0 items-center justify-center rounded-md bg-muted px-1.5 font-mono text-sm font-bold">
                #{ranking.rank}
              </span>
              <div>
                <p className="text-sm font-medium leading-snug">{ranking.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  of {ranking.of}
                  {ranking.note ? ` — ${ranking.note}` : ""}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
