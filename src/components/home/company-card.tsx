import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CompanyLogoBadge } from "@/components/company-logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Company } from "@/lib/types";

/** Console target card: bracketed panel, mono metadata, one action. */
export function CompanyCard({
  datasetId,
  company,
}: {
  datasetId: string;
  company: Company;
}) {
  return (
    <Card className="ops-panel ops-panel-interactive group flex h-full flex-col gap-4 transition-colors">
      <CardHeader className="flex flex-row items-center gap-3">
        <CompanyLogoBadge company={company} />
        <div className="min-w-0">
          <h2 className="truncate font-mono text-base font-semibold tracking-[0.06em] uppercase">
            {company.name}
          </h2>
          <p className="truncate font-mono text-[11px] tracking-[0.1em] text-[var(--ops-accent)]">
            {company.website}
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {company.shortDescription}
        </p>
        <dl className="mt-auto flex flex-wrap gap-x-4 gap-y-1.5 border-t border-[var(--ops-line)] pt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Tick />
            <dt className="sr-only">Headquarters</dt>
            <dd>{company.hq}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <Tick />
            <dt className="sr-only">Founded</dt>
            <dd>Est {company.founded}</dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter>
        {/* Outlined until hover: six solid blue blocks would outshout the data
            they sit under. */}
        <Button
          variant="outline"
          className="w-full border-[var(--ops-line-strong)] bg-transparent text-[var(--ops-accent)] hover:bg-[var(--ops-accent)] hover:text-[var(--primary-foreground)]"
          nativeButton={false}
          render={<Link href={`/report/${datasetId}/${company.id}`} />}
        >
          Generate report
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function Tick() {
  return (
    <span
      className="size-1 shrink-0 bg-[var(--ops-accent)]"
      aria-hidden
    />
  );
}
