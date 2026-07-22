import { Globe, Smartphone, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IntelligenceReport, SocialChannel } from "@/lib/types";

/** Each channel class gets its own signal colour, carried by icon and rule. */
const WEBSITE = "var(--chart-1)";
const APPS = "var(--chart-5)";
const SOCIAL = "var(--chart-3)";

/** Engagement is a rating, so it is colour-coded like one: green down to grey. */
const ENGAGEMENT: Record<
  NonNullable<SocialChannel["engagement"]>,
  { color: string; label: string }
> = {
  high: { color: "var(--success)", label: "High" },
  medium: { color: "var(--chart-4)", label: "Medium" },
  low: { color: "var(--muted-foreground)", label: "Low" },
};

export function DigitalPresence({
  digital,
}: {
  digital: IntelligenceReport["digitalPresence"];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card style={{ borderTopColor: WEBSITE }} className="border-t-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Globe className="size-4" style={{ color: WEBSITE }} aria-hidden />
            Website
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="font-mono text-sm font-medium" style={{ color: WEBSITE }}>
            {digital.website.url}
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {digital.website.note}
          </p>
        </CardContent>
      </Card>
      <Card style={{ borderTopColor: APPS }} className="border-t-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Smartphone className="size-4" style={{ color: APPS }} aria-hidden />
            Mobile apps
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {digital.apps.map((app) => (
            <div key={app.platform} className="flex items-center justify-between gap-2">
              <p className="text-sm">{app.platform}</p>
              <p className="flex items-center gap-1.5 font-mono text-sm font-semibold">
                <Star className="size-3.5 fill-current text-chart-4" aria-hidden />
                {app.rating}
                <span className="font-normal text-muted-foreground">/{app.outOf}</span>
                {app.downloads ? (
                  <span className="ml-1 text-xs font-normal text-muted-foreground">
                    {app.downloads}
                  </span>
                ) : null}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card style={{ borderTopColor: SOCIAL }} className="border-t-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Users className="size-4" style={{ color: SOCIAL }} aria-hidden />
            Social media
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2.5">
          {digital.social.map((channel) => {
            const engagement = channel.engagement
              ? ENGAGEMENT[channel.engagement]
              : undefined;
            return (
              <div
                key={channel.platform}
                className="flex items-center justify-between gap-2"
              >
                <p className="text-sm">{channel.platform}</p>
                <p className="flex items-center gap-2">
                  <span className="font-mono text-sm font-semibold tabular-nums">
                    {channel.followers}
                  </span>
                  {engagement ? (
                    <span
                      className="flex items-center gap-1.5 border px-1.5 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase"
                      style={{
                        color: engagement.color,
                        borderColor: `color-mix(in oklab, ${engagement.color} 40%, transparent)`,
                        backgroundColor: `color-mix(in oklab, ${engagement.color} 10%, transparent)`,
                      }}
                    >
                      <span
                        className="size-1.5 rounded-full"
                        style={{ backgroundColor: engagement.color }}
                        aria-hidden
                      />
                      {engagement.label}
                    </span>
                  ) : null}
                </p>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
