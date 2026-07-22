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
      {/* Query line, styled as a console prompt rather than a search box. */}
      <div className="relative flex max-w-md items-center border border-[var(--ops-line)] bg-[color-mix(in_oklab,var(--ops-accent)_5%,transparent)] focus-within:border-[var(--ops-line-strong)]">
        <Search
          className="pointer-events-none ml-3 size-3.5 shrink-0 text-[var(--ops-accent)]"
          aria-hidden
        />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`filter ${entityLabel.toLowerCase()}...`}
          className="h-9 border-0 bg-transparent pl-2.5 font-mono text-xs tracking-[0.1em] uppercase focus-visible:ring-0"
          aria-label={`Search ${entityLabel}`}
        />
        <span className="mr-3 hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:inline">
          {filtered.length}/{companies.length}
        </span>
      </div>
      {filtered.length === 0 ? (
        <p className="py-16 text-center font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          No {entityLabel.toLowerCase()} match &ldquo;{query}&rdquo;
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
