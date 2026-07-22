import { CompanyDirectory } from "@/components/home/company-directory";
import { OpsConsole } from "@/components/ops/ops-console";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildOpsFeed } from "@/lib/ops-feed";
import { provider } from "@/lib/provider";

export default async function HomePage() {
  const [meta] = await provider.getDatasets();
  const dataset = await provider.getDataset(meta.id);
  // Derived on the server: the client receives a small serialisable object,
  // not the full report set.
  const opsFeed = buildOpsFeed(dataset);

  return (
    <>
      <SiteHeader datasetLabel={dataset.entityLabel} />
      <OpsConsole
        feed={opsFeed}
        datasetName={dataset.name}
        entityLabel={dataset.entityLabel}
      />
      <main
        id="directory"
        className="mx-auto w-full max-w-6xl flex-1 scroll-mt-14 px-4 py-10 sm:px-6"
      >
        <section className="mb-10 max-w-2xl border-l-2 border-[var(--ops-accent)] pl-4">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ops-accent)]">
            {dataset.name}
          </p>
          <h2 className="font-mono text-xl font-semibold uppercase tracking-[0.14em] sm:text-2xl">
            Target directory
          </h2>
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
      <SiteFooter />
    </>
  );
}
