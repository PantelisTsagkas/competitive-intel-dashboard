"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CompanyCard } from "@/components/home/company-card";
import { Input } from "@/components/ui/input";
import type { Company } from "@/lib/types";

export function CompanyDirectory({
  datasetId,
  companies,
  entityLabel,
}: {
  datasetId: string;
  companies: Company[];
  entityLabel: string;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return companies;
    return companies.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q) ||
        c.hq.toLowerCase().includes(q),
    );
  }, [companies, query]);

  return (
    <div className="flex flex-col gap-6">
      <div className="relative max-w-md">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${entityLabel.toLowerCase()}...`}
          className="pl-9"
          aria-label={`Search ${entityLabel}`}
        />
      </div>
      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No {entityLabel.toLowerCase()} match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((company, i) => (
            <li
              key={company.id}
              className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both"
              style={{ animationDelay: `${i * 60}ms`, animationDuration: "400ms" }}
            >
              <CompanyCard datasetId={datasetId} company={company} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
