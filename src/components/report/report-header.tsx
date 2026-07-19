import Link from "next/link";
import { ArrowLeft, CalendarDays, Globe, MapPin } from "lucide-react";
import { CompanyLogoBadge } from "@/components/company-logo";
import { Badge } from "@/components/ui/badge";
import type { Company } from "@/lib/types";

export function ReportHeader({
  company,
  entityLabel,
  generatedAt,
}: {
  company: Company;
  entityLabel: string;
  generatedAt: string;
}) {
  return (
    <div className="border-b border-border/70">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All companies
        </Link>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <CompanyLogoBadge company={company} size="lg" />
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {company.name}
                </h1>
                <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-wider">
                  {entityLabel}
                </Badge>
              </div>
              <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5" aria-hidden />
                  {company.hq}
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="size-3.5" aria-hidden />
                  {company.website}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" aria-hidden />
                  Founded {company.founded}
                </span>
              </div>
            </div>
          </div>
          <p className="font-mono text-[11px] text-muted-foreground">
            REPORT GENERATED {generatedAt}
          </p>
        </div>
      </div>
    </div>
  );
}
