import Link from "next/link";
import { Radar } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";

export function SiteHeader({ datasetLabel }: { datasetLabel?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <Radar className="size-4" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight">
            MERIDIAN
          </span>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            Competitive Intelligence
          </span>
        </Link>
        <div className="flex items-center gap-3">
          {datasetLabel ? (
            <Badge variant="outline" className="font-mono text-[11px] uppercase tracking-wider">
              {datasetLabel}
            </Badge>
          ) : null}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
