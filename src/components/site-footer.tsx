/** Console sign-off. Shared by the directory and every report page. */
export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--ops-line)] py-6">
      <p className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 px-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:px-6">
        <span className="text-[var(--ops-accent)]">Meridian</span>
        <span>{"// Proof of concept"}</span>
        <span className="text-muted-foreground/70">
          All report data is illustrative, assembled from public-source formats
        </span>
      </p>
    </footer>
  );
}
