"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe, { type Globe } from "cobe";
import type { OpsMarker } from "@/lib/ops-feed";

/**
 * WebGL globe plotting company HQs and the links between them.
 *
 * cobe v2 has no internal animation loop (and dropped the v0 `onRender` hook),
 * so we own the requestAnimationFrame loop. That is what makes the two
 * important behaviours cheap: the loop simply stops when the console scrolls
 * out of view, and never starts under reduced motion.
 *
 * Framing matters more than it sounds: a dataset's companies usually sit in one
 * region (six European carriers span about 1,500km), so a freely spinning whole
 * earth shows them as a smudge for a few seconds and nothing at all for the
 * rest. Instead the view is centred on the markers' centroid, zoomed in, and
 * only swept gently either side of that heading.
 */

/** cobe takes colours as [r, g, b] floats in 0-1, not hex. */
const BASE: [number, number, number] = [0.16, 0.18, 0.22];
const GLOW: [number, number, number] = [0.06, 0.09, 0.14];
const PHOSPHOR: [number, number, number] = [0.12, 0.82, 0.54];
const ACCENT: [number, number, number] = [0.22, 0.53, 0.9];

const DEG = Math.PI / 180;
/** Globe heading that puts the prime meridian in front of the camera. */
const PHI_AT_GREENWICH = 4.71;
/** How far either side of centre the sweep drifts, in radians (~14 degrees). */
const SWEEP = 0.25;
/** One full there-and-back sweep, in frames. */
const SWEEP_PERIOD = 1400;
/** Zoom. Past ~1.6 the sphere overflows the square canvas and gets clipped. */
const SCALE = 1.45;

/** Centres the camera on the markers, so any dataset frames its own region. */
function focusOf(markers: OpsMarker[]): { phi: number; theta: number } {
  if (markers.length === 0) return { phi: PHI_AT_GREENWICH, theta: 0.36 };
  const mean = (values: number[]) =>
    values.reduce((sum, v) => sum + v, 0) / values.length;
  const lat = mean(markers.map((m) => m.location[0]));
  const lng = mean(markers.map((m) => m.location[1]));
  return {
    phi: PHI_AT_GREENWICH - lng * DEG,
    // Theta is the camera's latitude, so the centroid's own latitude centres
    // it. Clamped short of the pole, where the projection gets unreadable.
    theta: Math.max(-0.9, Math.min(0.9, lat * DEG)),
  };
}

/**
 * Spokes from the tracked company to every rival, rebuilt as tracking cycles.
 *
 * A static mesh between six neighbouring cities reads as scribble. Anchoring
 * every line to the one company the readout is naming makes the lines say
 * something: this is who we are looking at, and these are its competitors.
 */
function spokesFrom(markers: OpsMarker[], activeCompanyId: string | null) {
  const hub =
    markers.find((m) => m.companyId === activeCompanyId) ?? markers[0];
  if (!hub) return [];
  return markers
    .filter((m) => m.companyId !== hub.companyId)
    .map((m) => ({ from: hub.location, to: m.location }));
}

export function OpsGlobe({
  markers,
  activeCompanyId,
  reducedMotion,
}: {
  markers: OpsMarker[];
  activeCompanyId: string | null;
  reducedMotion: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState(0);
  const [ready, setReady] = useState(false);

  // Read in the render loop rather than resubscribing the effect on each change:
  // the globe must not be torn down every time the tracked company cycles.
  const activeRef = useRef(activeCompanyId);
  useEffect(() => {
    activeRef.current = activeCompanyId;
  }, [activeCompanyId]);

  // Square canvas, sized to the container.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setSize(Math.round(entry.contentRect.width));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || size === 0) return;

    const focus = focusOf(markers);
    let phi = focus.phi;
    /** Drag offset from the focus heading; the sweep rides on top of it. */
    let heading = 0;
    let tick = 0;
    let frame = 0;
    let visible = true;
    let dragging = false;
    let dragStartX = 0;
    let dragStartHeading = 0;
    let drawnFor: string | null = null;

    const buildMarkers = () =>
      markers.map((marker) => ({
        location: marker.location,
        size: marker.size,
        color: marker.companyId === activeRef.current ? ACCENT : PHOSPHOR,
      }));

    const globe: Globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio ?? 1, 2),
      width: size * 2,
      height: size * 2,
      phi,
      theta: focus.theta,
      dark: 1,
      diffuse: 1.25,
      mapSamples: 15_000,
      mapBrightness: 5.2,
      scale: SCALE,
      baseColor: BASE,
      markerColor: PHOSPHOR,
      glowColor: GLOW,
      markers: buildMarkers(),
      arcs: spokesFrom(markers, activeRef.current),
      arcColor: ACCENT,
      arcWidth: 0.45,
      // Lifted enough that neighbouring spokes separate instead of stacking.
      arcHeight: 0.22,
      opacity: 0.95,
    });

    setReady(true);

    const draw = () => {
      const active = activeRef.current;
      // Arcs are only re-uploaded when the tracked company actually changes.
      if (active !== drawnFor) {
        drawnFor = active;
        globe.update({
          phi,
          markers: buildMarkers(),
          arcs: spokesFrom(markers, active),
        });
        return;
      }
      globe.update({ phi, markers: buildMarkers() });
    };

    const render = () => {
      if (!dragging) tick += 1;
      // Sweep, not spin: the region stays in frame the whole time.
      phi = focus.phi + heading + Math.sin((tick / SWEEP_PERIOD) * Math.PI * 2) * SWEEP;
      draw();
      frame = requestAnimationFrame(render);
    };

    // Reduced motion still needs one paint to place the markers, just no loop.
    if (reducedMotion) {
      draw();
    } else {
      frame = requestAnimationFrame(render);
    }

    // Stop burning frames once the console is scrolled past.
    const observer = new IntersectionObserver(
      ([entry]) => {
        const nowVisible = entry.isIntersecting;
        if (nowVisible === visible) return;
        visible = nowVisible;
        if (reducedMotion) return;
        if (visible) {
          frame = requestAnimationFrame(render);
        } else {
          cancelAnimationFrame(frame);
        }
      },
      { threshold: 0 },
    );
    observer.observe(container);

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      dragStartX = e.clientX;
      dragStartHeading = heading;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      // Dragging moves the heading the sweep oscillates around, so releasing
      // never snaps the globe back.
      heading = dragStartHeading + (e.clientX - dragStartX) / 180;
      if (reducedMotion) {
        phi = focus.phi + heading;
        draw();
      }
    };
    const onPointerUp = (e: PointerEvent) => {
      dragging = false;
      if (canvas.hasPointerCapture(e.pointerId)) {
        canvas.releasePointerCapture(e.pointerId);
      }
      canvas.style.cursor = "grab";
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      globe.destroy();
    };
  }, [size, markers, reducedMotion]);

  return (
    <div ref={containerRef} className="relative mx-auto aspect-square w-full max-w-[420px]">
      <canvas
        ref={canvasRef}
        width={size * 2}
        height={size * 2}
        aria-hidden
        className="size-full cursor-grab touch-pan-y transition-opacity duration-700"
        style={{ opacity: ready ? 1 : 0, contain: "layout paint size" }}
      />
      {!ready ? <GlobePlaceholder /> : null}
    </div>
  );
}

/** Shown until WebGL has painted, and as the SSR fallback for the dynamic import. */
export function GlobePlaceholder() {
  return (
    <div
      className="absolute inset-0 grid place-items-center"
      aria-hidden
    >
      <div
        className="size-[78%] rounded-full border border-[var(--ops-line)]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 35% 30%, color-mix(in oklab, var(--ops-accent) 14%, transparent), transparent 60%)",
        }}
      />
    </div>
  );
}
