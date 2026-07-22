import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { OfferingCategory } from "@/lib/types";

/**
 * Each category is assigned a colour from the chart palette and everything in
 * it - swatch, rule, item chips - carries that colour, so the offerings read as
 * three distinct lines of business rather than one grey list.
 */
const CATEGORY_COLORS = [
  "var(--chart-1)",
  "var(--chart-5)",
  "var(--chart-4)",
  "var(--chart-3)",
  "var(--chart-2)",
];

export function ProductsServices({ categories }: { categories: OfferingCategory[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {categories.map((category, i) => {
        const color = CATEGORY_COLORS[i % CATEGORY_COLORS.length];
        return (
          <Card
            key={category.name}
            style={{ borderTopColor: color }}
            className="border-t-2"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <span
                  className="size-2 shrink-0"
                  style={{ backgroundColor: color }}
                  aria-hidden
                />
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p className="text-xs leading-relaxed text-muted-foreground">
                {category.description}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="border px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase"
                    style={{
                      color,
                      borderColor: `color-mix(in oklab, ${color} 38%, transparent)`,
                      backgroundColor: `color-mix(in oklab, ${color} 10%, transparent)`,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
