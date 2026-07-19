import { Card, CardContent } from "@/components/ui/card";

export function ExecutiveSummary({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Card>
      <CardContent className="space-y-4">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed text-foreground/90 first:text-base first:font-medium"
          >
            {p}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}
