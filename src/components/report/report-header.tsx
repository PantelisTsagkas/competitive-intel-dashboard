import Link from "next/link";
import { ArrowLeft, CalendarDays, Globe, MapPin } from "lucide-react";
import { CompanyLogoBadge } from "@/components/company-logo";
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
    <div className="ops-grid relative isolate overflow-hidden border-b border-[var(--ops-line)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-[var(--ops-accent)]"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          All targets
        </Link>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <CompanyLogoBadge company={company} size="lg" />
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="font-mono text-2xl font-semibold tracking-[0.04em] uppercase sm:text-3xl">
                  {company.name}
                </h1>
                <span className="border border-[var(--ops-line)] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ops-accent)]">
                  {entityLabel}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-[var(--ops-accent)]" aria-hidden />
                  {company.hq}
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="size-3.5 text-[var(--ops-accent)]" aria-hidden />
                  {company.website}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3.5 text-[var(--ops-accent)]" aria-hidden />
                  Est {company.founded}
                </span>
              </div>
            </div>
          </div>
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <span
              className="ops-pulse size-1.5 rounded-full bg-[var(--ops-phosphor)]"
              aria-hidden
            />
            Compiled {generatedAt}
          </p>
        </div>
      </div>
    </div>
  );
}
