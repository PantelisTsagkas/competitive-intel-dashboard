import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { NewsItem } from "@/lib/types";

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function NewsTimeline({ items }: { items: NewsItem[] }) {
  return (
    <Card>
      <CardContent>
        <ol className="relative space-y-6 border-l border-border pl-6">
          {items.map((item) => (
            <li key={item.headline} className="relative">
              <span
                className="absolute -left-[27px] top-1.5 size-2 rounded-full border-2 border-background bg-chart-1"
                aria-hidden
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <time className="font-mono text-xs text-muted-foreground" dateTime={item.date}>
                  {formatDate(item.date)}
                </time>
                <Badge variant="outline" className="text-[10px]">
                  {item.category}
                </Badge>
              </div>
              <p className="mt-1 text-sm font-medium leading-snug">{item.headline}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{item.source}</p>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
