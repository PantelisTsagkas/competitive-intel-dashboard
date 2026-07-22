"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Hydration-safe `prefers-reduced-motion`.
 *
 * motion's own hook reads the media query during the client's first render,
 * while the server always renders as though motion were fine. The console swaps
 * markup on that answer (SectorTerminal renders static spans instead of
 * animated ones), so for a user with the OS setting on, the first client render
 * disagreed with the server HTML and React threw a hydration mismatch.
 *
 * Routing the query through useSyncExternalStore fixes it by construction: the
 * hydration pass uses the server snapshot, and React re-renders with the real
 * preference on the commit straight after.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(onChange: () => void): () => void {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot(): boolean {
  return false;
}
