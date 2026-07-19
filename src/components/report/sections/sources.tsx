import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { SourceItem } from "@/lib/types";

export function Sources({ items }: { items: SourceItem[] }) {
  return (
    <Card className="py-0">
      <CardContent className="overflow-x-auto px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-6">Type</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Reference</TableHead>
              <TableHead className="pr-6 text-right">Freshness</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((source) => (
              <TableRow key={source.name}>
                <TableCell className="pl-6">
                  <Badge variant="outline" className="text-[10px]">
                    {source.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm">{source.name}</TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {source.url}
                </TableCell>
                <TableCell className="pr-6 text-right font-mono text-xs text-muted-foreground">
                  {source.freshness}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
