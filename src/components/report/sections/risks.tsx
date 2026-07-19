import { AlertCircle, AlertTriangle, Info, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { RiskItem } from "@/lib/types";

const SEVERITY: Record<
  RiskItem["severity"],
  { label: string; icon: LucideIcon; className: string }
> = {
  high: { label: "High", icon: AlertTriangle, className: "text-danger border-danger/40" },
  medium: { label: "Medium", icon: AlertCircle, className: "text-chart-4 border-chart-4/40" },
  low: { label: "Low", icon: Info, className: "text-muted-foreground border-border" },
};

const ORDER: RiskItem["severity"][] = ["high", "medium", "low"];

export function Risks({ items }: { items: RiskItem[] }) {
  const sorted = [...items].sort(
    (a, b) => ORDER.indexOf(a.severity) - ORDER.indexOf(b.severity),
  );

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {sorted.map((risk) => {
        const severity = SEVERITY[risk.severity];
        const Icon = severity.icon;
        return (
          <Card key={risk.title} className="gap-0 py-4">
            <CardContent className="px-4">
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <p className="text-sm font-medium leading-snug">{risk.title}</p>
                <Badge
                  variant="outline"
                  className={cn("shrink-0 gap-1 text-[10px]", severity.className)}
                >
                  <Icon className="size-3" aria-hidden />
                  {severity.label}
                </Badge>
              </div>
              <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {risk.category}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">{risk.detail}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
