"use client";

import { useEffect, useState } from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";

/**
 * The analysis transcript. Lines are the dataset's own `generationSteps` - the
 * same stages the report generation overlay shows - so the console is running
 * the pipeline the product actually describes.
 *
 * Magic UI's Terminal sequences once and stops, so the loop is a remount driven
 * by a keyed counter.
 */

const TYPE_MS = 22;
const LOOP_PAUSE_MS = 4500;

export function SectorTerminal({
  commandLine,
  steps,
  entityCount,
  reducedMotion,
}: {
  commandLine: string;
  steps: string[];
  entityCount: number;
  reducedMotion: boolean;
}) {
  const [run, setRun] = useState(0);

  const estimatedRunMs =
    (commandLine.length + steps.join("").length) * TYPE_MS + steps.length * 300;

  useEffect(() => {
    if (reducedMotion) return;
    const id = setTimeout(() => setRun((r) => r + 1), estimatedRunMs + LOOP_PAUSE_MS);
    return () => clearTimeout(id);
  }, [run, estimatedRunMs, reducedMotion]);

  const header = (
    <div className="flex items-center justify-between border-b border-[var(--ops-line)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
      <span>analysis/stdout</span>
      <span className="text-[var(--ops-phosphor)]">run #{1042 + run}</span>
    </div>
  );

  if (reducedMotion) {
    return (
      <Terminal
        header={header}
        sequence={false}
        className="ops-panel h-full max-h-none w-full max-w-none rounded-none"
        bodyClassName="p-4 text-[11px] leading-relaxed"
      >
        <StaticLine className="text-muted-foreground/70">
          meridian-cli 0.4.1 · provider=mock · tty/ops0
        </StaticLine>
        <StaticLine className="text-[var(--ops-accent)]">$ {commandLine}</StaticLine>
        {steps.map((step) => (
          <StaticLine key={step} className="text-muted-foreground">
            &gt; {step}
            <Ok />
          </StaticLine>
        ))}
        <StaticLine className="text-[var(--ops-phosphor)]">
          ✓ {entityCount} entities profiled — report set ready
        </StaticLine>
      </Terminal>
    );
  }

  return (
    <Terminal
      key={run}
      header={header}
      startOnView
      className="ops-panel h-full max-h-none w-full max-w-none rounded-none"
      bodyClassName="p-4 text-[11px] leading-relaxed"
    >
      <AnimatedSpan className="font-mono text-[11px] text-muted-foreground/70">
        <span>meridian-cli 0.4.1 · provider=mock · tty/ops0</span>
      </AnimatedSpan>
      <TypingAnimation
        duration={TYPE_MS}
        className="font-mono text-[11px] text-[var(--ops-accent)]"
      >
        {`$ ${commandLine}`}
      </TypingAnimation>
      {steps.flatMap((step, i) => [
        <TypingAnimation
          key={`step-${i}`}
          duration={TYPE_MS}
          className="font-mono text-[11px] text-muted-foreground"
        >
          {`> ${step}`}
        </TypingAnimation>,
        <AnimatedSpan
          key={`ok-${i}`}
          className="font-mono text-[11px] text-[var(--ops-phosphor)]"
        >
          <span>
            {"  "}
            OK · {120 + i * 37}ms
          </span>
        </AnimatedSpan>,
      ])}
      <AnimatedSpan className="font-mono text-[11px] text-[var(--ops-phosphor)]">
        <span>✓ {entityCount} entities profiled — report set ready</span>
      </AnimatedSpan>
    </Terminal>
  );
}

function StaticLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`block font-mono text-[11px] ${className ?? ""}`}>{children}</span>;
}

function Ok() {
  return <span className="text-[var(--ops-phosphor)]"> OK</span>;
}
