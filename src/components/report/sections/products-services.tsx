import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { OfferingCategory } from "@/lib/types";

export function ProductsServices({ categories }: { categories: OfferingCategory[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {categories.map((category) => (
        <Card key={category.name}>
          <CardHeader>
            <CardTitle className="text-sm">{category.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <p className="text-xs leading-relaxed text-muted-foreground">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((item) => (
                <Badge key={item} variant="secondary" className="font-normal">
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
