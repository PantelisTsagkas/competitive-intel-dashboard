import {
  Banknote,
  CalendarDays,
  Globe2,
  Info,
  Layers,
  MapPin,
  Trophy,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ProfileField } from "@/lib/types";

/** Semantic icon keys datasets may use; anything unknown falls back to Info. */
const ICONS: Record<string, LucideIcon> = {
  location: MapPin,
  leader: UserRound,
  calendar: CalendarDays,
  fleet: Layers,
  network: Globe2,
  people: Users,
  revenue: Banknote,
  position: Trophy,
};

export function CompanyProfile({ fields }: { fields: ProfileField[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {fields.map((field) => {
        const Icon = (field.icon && ICONS[field.icon]) || Info;
        return (
          <Card key={field.label} className="gap-0 py-4">
            <CardContent className="flex items-start gap-3 px-4">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                <Icon className="size-4" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium text-muted-foreground">{field.label}</p>
                <p className="mt-0.5 text-sm font-medium leading-snug">{field.value}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
