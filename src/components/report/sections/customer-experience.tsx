import { ThumbsDown, ThumbsUp } from "lucide-react";
import { SentimentBar } from "@/components/charts/sentiment-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatMetric } from "@/lib/format";
import type { IntelligenceReport } from "@/lib/types";

export function CustomerExperience({
  experience,
}: {
  experience: IntelligenceReport["customerExperience"];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Satisfaction & review scores</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div>
            <p className="text-xs font-medium text-muted-foreground">
              {experience.headlineScore.label}
            </p>
            <p className="font-mono text-3xl font-semibold tracking-tight">
              {formatMetric(experience.headlineScore)}
            </p>
          </div>
          <ul className="space-y-3">
            {experience.reviewSources.map((source) => (
              <li key={source.source} className="flex items-center gap-3">
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-baseline justify-between gap-2">
                    <p className="truncate text-sm">{source.source}</p>
                    <p className="font-mono text-xs font-semibold">
                      {source.score}
                      <span className="font-normal text-muted-foreground">
                        /{source.outOf}
                      </span>
                    </p>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-chart-1"
                      style={{ width: `${(source.score / source.outOf) * 100}%` }}
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground">{source.volume}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Review sentiment</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <SentimentBar sentiment={experience.sentiment} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <ThumbsUp className="size-3.5 text-success" aria-hidden />
                What customers praise
              </p>
              <ul className="space-y-2 text-xs leading-relaxed text-foreground/90">
                {experience.positiveThemes.map((theme) => (
                  <li key={theme} className="border-l-2 border-success/40 pl-2.5">
                    {theme}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <ThumbsDown className="size-3.5 text-danger" aria-hidden />
                What customers criticise
              </p>
              <ul className="space-y-2 text-xs leading-relaxed text-foreground/90">
                {experience.negativeThemes.map((theme) => (
                  <li key={theme} className="border-l-2 border-danger/40 pl-2.5">
                    {theme}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
