"use client";

import { useEffect, useState } from "react";
import { Check, LoaderCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const STEP_DURATION_MS = 750;

/**
 * Simulated multi-stage analysis shown before the report reveals. Purely
 * theatrical in the mock: a real provider would report genuine pipeline
 * progress through the same interface.
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
    setLeaving(true);
    const t = setTimeout(onComplete, 500);
    return () => clearTimeout(t);
  }, [completed, steps.length, onComplete]);

  const progress = Math.round((completed / steps.length) * 100);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500",
        leaving && "pointer-events-none opacity-0",
      )}
      role="status"
      aria-live="polite"
    >
      <div className="w-full max-w-md px-6">
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Generating intelligence report
        </p>
        <h1 className="mb-6 text-2xl font-semibold tracking-tight">{companyName}</h1>
        <Progress value={progress} className="mb-6 h-1.5" />
        <ol className="space-y-3">
          {steps.map((step, i) => {
            const state = i < completed ? "done" : i === completed ? "active" : "pending";
            return (
              <li
                key={step}
                className={cn(
                  "flex items-center gap-3 text-sm transition-colors duration-300",
                  state === "done" && "text-muted-foreground",
                  state === "active" && "font-medium text-foreground",
                  state === "pending" && "text-muted-foreground/50",
                )}
              >
                <span className="flex size-5 shrink-0 items-center justify-center">
                  {state === "done" ? (
                    <Check className="size-4 text-success" aria-hidden />
                  ) : state === "active" ? (
                    <LoaderCircle className="size-4 animate-spin" aria-hidden />
                  ) : (
                    <span className="size-1.5 rounded-full bg-border" aria-hidden />
                  )}
                </span>
                {step}
              </li>
            );
          })}
        </ol>
        <p className="mt-6 font-mono text-[11px] text-muted-foreground">
          {progress}% &mdash; {completed}/{steps.length} stages complete
        </p>
      </div>
    </div>
  );
}
