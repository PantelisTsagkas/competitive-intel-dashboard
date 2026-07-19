import { CompanyDirectory } from "@/components/home/company-directory";
import { SiteHeader } from "@/components/site-header";
import { provider } from "@/lib/provider";

export default async function HomePage() {
  const [meta] = await provider.getDatasets();
  const dataset = await provider.getDataset(meta.id);

  return (
    <>
      <SiteHeader datasetLabel={dataset.entityLabel} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        <section className="mb-10 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {dataset.name}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Pick a company. Get the full picture.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {dataset.description} Select any company to generate a structured,
            executive-grade intelligence report from public sources.
          </p>
        </section>
        <CompanyDirectory
          datasetId={dataset.id}
          companies={dataset.companies}
          entityLabel={dataset.entityLabel}
        />
      </main>
      <footer className="border-t border-border/70 py-6">
        <p className="mx-auto max-w-6xl px-4 font-mono text-xs text-muted-foreground sm:px-6">
          MERIDIAN &mdash; proof of concept. All report data is illustrative mock
          data assembled from public-source formats.
        </p>
      </footer>
    </>
  );
}
