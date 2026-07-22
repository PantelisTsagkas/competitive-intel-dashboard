"use client";

import { useEffect, useState } from "react";
import { Check, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const STEP_DURATION_MS = 750;

/**
 * Simulated multi-stage analysis shown before the report reveals. Purely
 * theatrical in the mock: a real provider would report genuine pipeline
 * progress through the same interface.
 *
 * Presented as the console compiling the report - same grid, same phosphor
 * stamps, same voice as the ops terminal on the home page.
 */
export function GenerationOverlay({
  companyName,
  steps,
  onComplete,
}: {
  companyName: string;
  steps: string[];
  onComplete: () => void;
}) {
  const [completed, setCompleted] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (completed < steps.length) {
      const t = setTimeout(() => setCompleted((c) => c + 1), STEP_DURATION_MS);
      return () => clearTimeout(t);
    }
    const fade = setTimeout(() => setLeaving(true), 100);
    const done = setTimeout(onComplete, 600);
    return () => {
      clearTimeout(fade);
      clearTimeout(done);
    };
  }, [completed, steps.length, onComplete]);

  const progress = Math.round((completed / steps.length) * 100);
  const cells = 32;
  const filled = Math.round((completed / steps.length) * cells);

  return (
    <div
      className={cn(
        "ops-grid ops-scanlines fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background transition-opacity duration-500",
        leaving && "pointer-events-none opacity-0",
      )}
      role="status"
      aria-live="polite"
    >
      <div className="ops-panel w-full max-w-lg p-6">
        <p className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>meridian compile</span>
          <span className="text-[var(--ops-accent)]">provider=mock</span>
        </p>
        <h1 className="mt-3 mb-5 font-mono text-2xl font-semibold uppercase tracking-[0.08em]">
          {companyName}
        </h1>

        {/* Segmented progress: a console gauge rather than a rounded bar. */}
        <div
          className="mb-6 flex gap-[3px]"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Report generation progress"
        >
          {Array.from({ length: cells }, (_, i) => (
            <span
              key={i}
              className={cn(
                "h-2 flex-1 transition-colors duration-300",
                i < filled
                  ? "bg-[var(--ops-phosphor)]"
                  : "bg-[color-mix(in_oklab,var(--ops-accent)_14%,transparent)]",
              )}
              aria-hidden
            />
          ))}
        </div>

        <ol className="space-y-2.5">
          {steps.map((step, i) => {
            const state = i < completed ? "done" : i === completed ? "active" : "pending";
            return (
              <li
                key={step}
                className={cn(
                  "flex items-center gap-2.5 font-mono text-[11px] transition-colors duration-300",
                  state === "done" && "text-muted-foreground",
                  state === "active" && "text-foreground",
                  state === "pending" && "text-muted-foreground/40",
                )}
              >
                <span className="flex size-4 shrink-0 items-center justify-center">
                  {state === "done" ? (
                    <Check className="size-3.5 text-[var(--ops-phosphor)]" aria-hidden />
                  ) : state === "active" ? (
                    <LoaderCircle
                      className="size-3.5 animate-spin text-[var(--ops-accent)]"
                      aria-hidden
                    />
                  ) : (
                    <span className="size-1 bg-[var(--ops-line-strong)]" aria-hidden />
                  )}
                </span>
                <span className="text-[var(--ops-accent)]">&gt;</span>
                {step}
                {state === "done" ? (
                  <span className="ml-auto text-[var(--ops-phosphor)]">OK</span>
                ) : null}
              </li>
            );
          })}
        </ol>

        <p className="mt-6 border-t border-[var(--ops-line)] pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {progress}% // {completed}/{steps.length} stages complete
        </p>
      </div>
    </div>
  );
}
