import { CompanyLogoBadge } from "@/components/company-logo";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { UpcomingCompany } from "@/lib/types";

/**
 * A queued target: same panel language as `CompanyCard`, deliberately quieter
 * and inert. No link, no action, and no figures - there is no report behind it,
 * and the card must not imply otherwise. It also skips `ops-panel`, so the
 * corner brackets stay a mark of a company the console actually tracks.
 */
export function UpcomingCard({ company }: { company: UpcomingCompany }) {
  return (
    <Card
      size="sm"
      className="flex h-full flex-col gap-3 border-dashed bg-transparent"
    >
      <CardHeader className="flex flex-row items-center gap-3">
        <CompanyLogoBadge company={company} />
        {/* Wrapping rather than truncating: at two tiles across on a phone,
            half a carrier's name is worse than two lines of it. */}
        <div className="min-w-0">
          <h3 className="font-mono text-sm font-semibold tracking-[0.06em] uppercase text-muted-foreground">
            {company.name}
          </h3>
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground/70">
            {company.hq}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        <p className="flex items-center gap-2 border-t border-dashed border-[var(--ops-line)] pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
          <span className="size-1 shrink-0 bg-muted-foreground/60" aria-hidden />
          Coming soon
        </p>
      </CardContent>
    </Card>
  );
}
