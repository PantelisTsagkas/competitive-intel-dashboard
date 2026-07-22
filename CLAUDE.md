# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # statically prerenders every report page (see generateStaticParams)
pnpm lint     # bare `eslint`, no args; config is eslint.config.mjs
```

pnpm only: there is a `pnpm-lock.yaml` and a `pnpm-workspace.yaml`.

No test framework is configured. There are no tests to run and no test runner installed; don't invent a command for one.

## The rule that constrains every edit

The UI renders the generic vocabulary in `src/lib/types.ts` and nothing else. No component may reference a field name specific to one industry. "Fleet size" is not schema, it is a `ProfileField` the airlines dataset happens to supply with that label. If you find yourself adding an airline-shaped field to `types.ts` or reading one in a component, the change belongs in the dataset instead.

## Architecture

**Two seams.**

1. *Datasets are plug-ins.* A dataset (`src/data/datasets/airlines/`) supplies companies, one `IntelligenceReport` per company, the simulated `generationSteps`, and the `comparisonDimensions` that the comparison table and radar normalise against. Adding an industry means adding a folder and one line in `src/data/registry.ts`. Zero application-code change. A dataset may also declare `upcomingCompanies`: named targets with no report, rendered as the directory's "coverage queue" and deliberately absent from `generateStaticParams`, `ops-feed` and the comparison. Keep them that way - an `UpcomingCompany` carries no figures because there are none.
2. *All data flows through `IntelligenceProvider`* (`src/lib/provider.ts`): `getDatasets`, `getDataset`, `getCompanies`, `getReport`, `getComparison`. Pages import `provider`, not datasets. The one deliberate exception is the report page, which imports `registry` directly for `generateStaticParams` because that runs at build time and must be synchronous.

**Report flow.** `src/components/report/report-view.tsx` owns a single `sections` array of `{ id, label, description?, render }`. It drives both the scroll-spy `SectionNav` and the rendered content, so adding or reordering a section is one edit there. The whole view is gated behind a `ready` state: `GenerationOverlay` plays the dataset's fake analysis stages first, then hands over. Those stages map 1:1 to where a real pipeline would surface progress.

**Ops console** (`src/components/ops/`, currently WIP on `feat/ops-room-hero`, not yet on `main`). The terminal hero above the directory on `/`, and the source of the whole site's visual language.
- `src/lib/ops-feed.ts` runs on the server and derives everything the console shows from the same dataset the reports use. It invents no figures and names no industry-specific field. The client receives one small serialisable `OpsFeed`.
- The cobe globe is loaded with `dynamic(..., { ssr: false })` to keep WebGL out of the initial bundle and off the server render path. It does not free-spin: `focusOf()` centres the camera on the markers' centroid (any dataset frames its own region) and the render loop sweeps gently either side of that heading. Arcs are spokes from the *tracked* company, re-uploaded through `globe.update({ arcs })` only when tracking changes.
- Console CSS (`.ops-grid`, `.ops-scanlines`, `.ops-panel`, keyframes) lives in one commented block in `globals.css`, and every animation there is switched off by the `prefers-reduced-motion` block at the bottom of that file. Motion-driven pieces also check `useReducedMotion()`.
- The site header and the console's `StatusBar` sit directly on top of each other on the home page, so they deliberately carry different information: the header is identity (wordmark, dataset, live), the status bar is state (sector, entities tracked, feeds, clock). Don't let them drift back into saying the same thing.

**Theming: one theme, the console's.** There is no light mode and no theme provider. `<html>` carries a hard-coded `dark` class (so shadcn's `dark:` variants still resolve) and `globals.css` defines a single token set in `:root`. The signature tokens are `--ops-accent` (console blue, also `--primary` and `--chart-1`), `--ops-phosphor` (green), `--ops-line` / `--ops-line-strong` (hairline borders, also `--border`) and `--ops-surface`. `--radius` is `0`, so every `rounded-*` utility collapses to square corners; use `rounded-full` when you genuinely want a dot.

Two shared classes carry the look: `.ops-panel` (hairline frame with accent corner brackets, plus `.ops-panel-interactive` for hover) and the heavier `.ops-grid` / `.ops-scanlines`, which stay on hero-level surfaces only - the home console, the report header, the generation overlay. Report prose never sits on a moving grid.

The type rule: mono uppercase with wide tracking for labels, captions, buttons, badges, table headers, section titles and any figure; DM Sans for body copy and card titles. Charts are thin Recharts wrappers in `src/components/charts/` that read the CSS variables directly (`var(--chart-1)`, `var(--muted-foreground)`, `var(--grid)`) rather than taking colours as props. Keep new series on `--chart-1..5`, `--success`, `--danger`.

**shadcn/ui.** `components.json` uses the `base-nova` style on `@base-ui/react`, not Radix. Generated primitives live in `src/components/ui/` and are edited in place.

## Data honesty

Every figure is hand-written mock data, realistic in shape and roughly accurate against mid-2026 public numbers. The generation stages fetch nothing. Keep the README's "Honest limitations" section true if you change what the app does.
