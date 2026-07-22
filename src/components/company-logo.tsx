import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Company } from "@/lib/types";

/**
 * Logo image on a white tile when the dataset provides one, monogram badge
 * otherwise. The tile stays white on the dark console: brand assets are a mix
 * of transparent and solid, and a white chip is the only backing that keeps
 * every one of them legible.
 */
export function CompanyLogoBadge({
  company,
  size = "md",
}: {
  // Narrowed to what the badge actually reads, so an unprofiled
  // `UpcomingCompany` can wear one too.
  company: Pick<Company, "name" | "logo">;
  size?: "md" | "lg";
}) {
  const box = size === "lg" ? "size-14" : "size-11";

  if (company.logo.src) {
    // Wordmark logos want a wide tile.
    return (
      <span
        className={cn(
          size === "lg" ? "h-14 w-24 p-2.5" : "h-11 w-[4.5rem] p-2",
          "flex shrink-0 items-center justify-center overflow-hidden border border-[var(--ops-line-strong)] bg-white",
        )}
      >
        <Image
          src={company.logo.src}
          alt={`${company.name} logo`}
          width={size === "lg" ? 76 : 56}
          height={size === "lg" ? 36 : 28}
          className="h-full w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        box,
        "flex shrink-0 items-center justify-center font-mono font-bold text-white",
        size === "lg" ? "text-lg" : "text-sm",
      )}
      style={{ backgroundColor: company.logo.color }}
      aria-hidden
    >
      {company.logo.initials}
    </span>
  );
}
