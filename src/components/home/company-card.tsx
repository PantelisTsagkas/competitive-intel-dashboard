import Link from "next/link";
import { ArrowRight, CalendarDays, Globe, MapPin } from "lucide-react";
import { CompanyLogoBadge } from "@/components/company-logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Company } from "@/lib/types";

export function CompanyCard({
  datasetId,
  company,
}: {
  datasetId: string;
  company: Company;
}) {
  return (
    <Card className="group flex h-full flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-3">
        <CompanyLogoBadge company={company} />
        <div className="min-w-0">
          <h2 className="truncate text-base font-semibold tracking-tight">
            {company.name}
          </h2>
          <p className="truncate font-mono text-xs text-muted-foreground">
            {company.website}
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {company.shortDescription}
        </p>
        <dl className="mt-auto space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            <dt className="sr-only">Headquarters</dt>
            <dd>{company.hq}</dd>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="size-3.5 shrink-0" aria-hidden />
            <dt className="sr-only">Founded</dt>
            <dd>Founded {company.founded}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="size-3.5 shrink-0" aria-hidden />
            <dt className="sr-only">Website</dt>
            <dd>{company.website}</dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          nativeButton={false}
          render={<Link href={`/report/${datasetId}/${company.id}`} />}
        >
          Generate Intelligence Report
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
