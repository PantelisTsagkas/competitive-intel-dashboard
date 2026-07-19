import { Globe, Smartphone, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { IntelligenceReport } from "@/lib/types";

export function DigitalPresence({
  digital,
}: {
  digital: IntelligenceReport["digitalPresence"];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Globe className="size-4 text-muted-foreground" aria-hidden />
            Website
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="font-mono text-sm font-medium">{digital.website.url}</p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {digital.website.note}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Smartphone className="size-4 text-muted-foreground" aria-hidden />
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Users className="size-4 text-muted-foreground" aria-hidden />
            Social media
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2.5">
          {digital.social.map((channel) => (
            <div key={channel.platform} className="flex items-center justify-between gap-2">
              <p className="text-sm">{channel.platform}</p>
              <p className="flex items-center gap-2">
                <span className="font-mono text-sm font-semibold">{channel.followers}</span>
                {channel.engagement ? (
                  <Badge variant="outline" className="text-[10px] capitalize">
                    {channel.engagement}
                  </Badge>
                ) : null}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
