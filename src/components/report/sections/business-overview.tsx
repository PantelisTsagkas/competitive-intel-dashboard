import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IntelligenceReport } from "@/lib/types";

export function BusinessOverview({
  overview,
}: {
  overview: IntelligenceReport["businessOverview"];
}) {
  const shares = overview.segments.filter((s) => s.revenueShare !== undefined);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="text-sm">What the business is</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed text-foreground/90">
          <p>{overview.description}</p>
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Business model
            </p>
            <p>{overview.model}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-sm">Segments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {overview.segments.map((segment) => (
            <div key={segment.name}>
              <div className="mb-1 flex items-baseline justify-between gap-2">
                <p className="text-sm font-medium">{segment.name}</p>
                {segment.revenueShare !== undefined ? (
                  <p className="font-mono text-xs font-semibold text-muted-foreground">
                    {segment.revenueShare}% of revenue
                  </p>
                ) : null}
              </div>
              {segment.revenueShare !== undefined && shares.length > 0 ? (
                <div className="mb-1.5 h-1.5 w-full bg-[color-mix(in_oklab,var(--ops-accent)_14%,transparent)]">
                  <div
                    className="h-full bg-chart-1"
                    style={{ width: `${segment.revenueShare}%` }}
                  />
                </div>
              ) : null}
              <p className="text-xs leading-relaxed text-muted-foreground">
                {segment.detail}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
