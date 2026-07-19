"use client";

interface TooltipRow {
  name: string;
  value: string;
  color?: string;
}

export function ChartTooltip({
  label,
  rows,
}: {
  label?: string;
  rows: TooltipRow[];
}) {
  return (
    <div className="rounded-md border border-border bg-popover px-3 py-2 text-xs shadow-md">
      {label ? (
        <p className="mb-1 font-mono font-medium text-muted-foreground">{label}</p>
      ) : null}
      {rows.map((row) => (
        <p key={row.name} className="flex items-center gap-2 text-popover-foreground">
          {row.color ? (
            <span
              className="inline-block size-2 rounded-[2px]"
              style={{ backgroundColor: row.color }}
              aria-hidden
            />
          ) : null}
          <span className="text-muted-foreground">{row.name}</span>
          <span className="ml-auto pl-3 font-mono font-semibold">{row.value}</span>
        </p>
      ))}
    </div>
  );
}
