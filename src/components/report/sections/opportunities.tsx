import { Crosshair } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { OpportunityItem } from "@/lib/types";

export function Opportunities({ items }: { items: OpportunityItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title}>
          <CardHeader>
            <CardTitle className="text-sm leading-snug">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-3">
            <p className="text-xs leading-relaxed text-foreground/90">{item.detail}</p>
            {item.competitiveAngle ? (
              <div className="mt-auto rounded-md border border-border bg-muted/50 p-2.5">
                <p className="mb-1 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  <Crosshair className="size-3" aria-hidden />
                  Competitive angle
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.competitiveAngle}
                </p>
              </div>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
