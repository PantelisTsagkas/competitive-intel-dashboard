"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { ComparisonRadar } from "@/components/charts/comparison-radar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatValue } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { ComparisonData, ComparisonRow } from "@/lib/types";

/** Subject + 3 competitors keeps the radar within the 4-series palette cap. */
const MAX_COMPETITORS = 3;

export function CompetitorComparison({
  subjectId,
  comparison,
}: {
  subjectId: string;
  comparison: ComparisonData;
}) {
  const subject = comparison.rows.find((r) => r.company.id === subjectId);
  const competitors = comparison.rows.filter((r) => r.company.id !== subjectId);
  const [selectedIds, setSelectedIds] = useState<string[]>(
    competitors.slice(0, 2).map((r) => r.company.id),
  );

  const selectedRows = useMemo<ComparisonRow[]>(() => {
    const picked = competitors.filter((r) => selectedIds.includes(r.company.id));
    return subject ? [subject, ...picked] : picked;
  }, [subject, competitors, selectedIds]);

  if (!subject) return null;

  const toggle = (id: string) => {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((x) => x !== id)
        : current.length >= MAX_COMPETITORS
          ? current
          : [...current, id],
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs text-muted-foreground">
          Compare against (up to {MAX_COMPETITORS}):
        </span>
        {competitors.map((row) => {
          const selected = selectedIds.includes(row.company.id);
          const disabled = !selected && selectedIds.length >= MAX_COMPETITORS;
          return (
            <button
              key={row.company.id}
              type="button"
              onClick={() => toggle(row.company.id)}
              disabled={disabled}
              aria-pressed={selected}
              className={cn(
                "flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition-colors",
                selected
                  ? "border-foreground bg-foreground font-medium text-background"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
                disabled && "cursor-not-allowed opacity-40",
              )}
            >
              {selected ? <Check className="size-3" aria-hidden /> : null}
              {row.company.name}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-4">
        <Card className="py-0">
          <CardContent className="overflow-x-auto px-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="pl-6">Dimension</TableHead>
                  {selectedRows.map((row) => (
                    <TableHead
                      key={row.company.id}
                      className={cn(
                        "text-right",
                        row.company.id === subjectId && "font-semibold text-foreground",
                      )}
                    >
                      {row.company.name}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparison.dimensions.map((dim) => {
                  const values = selectedRows.map((r) => r.values[dim.id] ?? 0);
                  const best = dim.higherIsBetter
                    ? Math.max(...values)
                    : Math.min(...values);
                  return (
                    <TableRow key={dim.id}>
                      <TableCell className="pl-6 text-sm">
                        {dim.label}
                        {dim.id === "passengers" ? (
                          <span className="ml-1 text-xs text-muted-foreground">(m/yr)</span>
                        ) : null}
                      </TableCell>
                      {selectedRows.map((row) => {
                        const value = row.values[dim.id] ?? 0;
                        return (
                          <TableCell
                            key={row.company.id}
                            className={cn(
                              "text-right font-mono text-sm tabular-nums",
                              value === best
                                ? "font-semibold text-foreground"
                                : "text-muted-foreground",
                            )}
                          >
                            {formatValue(value, dim.format, dim.unit)}
                            {value === best ? (
                              <span className="ml-1.5 inline-block size-1.5 rounded-full bg-chart-1 align-middle" title="Best in comparison" />
                            ) : null}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">
              Profile shape
              <span className="ml-1.5 font-mono text-xs font-normal text-muted-foreground">
                normalised per dimension
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ComparisonRadar dimensions={comparison.dimensions} rows={selectedRows} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
