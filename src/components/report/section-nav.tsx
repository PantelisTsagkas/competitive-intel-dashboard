"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface NavItem {
  id: string;
  label: string;
}

/**
 * Anchor navigation with scroll-spy: a sticky sidebar on desktop, a
 * horizontally scrolling chip row on mobile.
 */
export function SectionNav({ items }: { items: NavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  const link = (item: NavItem, layout: "side" | "chip") => (
    <a
      key={item.id}
      href={`#${item.id}`}
      aria-current={activeId === item.id ? "true" : undefined}
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
        layout === "side" &&
          "block border-l-2 py-1.5 pl-3 text-muted-foreground hover:text-foreground",
        layout === "side" &&
          (activeId === item.id
            ? "border-[var(--ops-accent)] font-medium text-[var(--ops-accent)]"
            : "border-[var(--ops-line)]"),
        layout === "chip" &&
          "shrink-0 border px-2.5 py-1 text-[10px] whitespace-nowrap",
        layout === "chip" &&
          (activeId === item.id
            ? "border-[var(--ops-accent)] bg-[var(--ops-accent)]/15 font-medium text-[var(--ops-accent)]"
            : "border-[var(--ops-line)] text-muted-foreground"),
      )}
    >
      {item.label}
    </a>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <nav
        aria-label="Report sections"
        className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto lg:block"
      >
        {items.map((item) => link(item, "side"))}
      </nav>
      {/* Mobile chip row */}
      <nav
        aria-label="Report sections"
        className="sticky top-14 z-30 -mx-4 flex gap-2 overflow-x-auto border-b border-[var(--ops-line)] bg-background/95 px-4 py-2.5 backdrop-blur lg:hidden"
      >
        {items.map((item) => link(item, "chip"))}
      </nav>
    </>
  );
}
