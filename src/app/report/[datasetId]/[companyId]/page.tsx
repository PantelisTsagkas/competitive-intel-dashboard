import { notFound } from "next/navigation";
import { ReportView } from "@/components/report/report-view";
import { provider } from "@/lib/provider";
import { datasets } from "@/data/registry";

export function generateStaticParams() {
  return datasets.flatMap((dataset) =>
    dataset.companies.map((company) => ({
      datasetId: dataset.id,
      companyId: company.id,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ datasetId: string; companyId: string }>;
}) {
  const { datasetId, companyId } = await params;
  const dataset = datasets.find((d) => d.id === datasetId);
  const company = dataset?.companies.find((c) => c.id === companyId);
  return {
    title: company
      ? `${company.name} — Intelligence Report | Meridian`
      : "Intelligence Report | Meridian",
  };
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ datasetId: string; companyId: string }>;
}) {
  const { datasetId, companyId } = await params;

  let dataset, report;
  try {
    dataset = await provider.getDataset(datasetId);
    report = await provider.getReport(datasetId, companyId);
  } catch {
    notFound();
  }

  const company = dataset.companies.find((c) => c.id === companyId);
  if (!company) notFound();

  const comparison = await provider.getComparison(datasetId);
  const generatedAt = new Date()
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();

  return (
    <ReportView
      company={company}
      report={report}
      comparison={comparison}
      entityLabel={dataset.entityLabel}
      generationSteps={dataset.generationSteps}
      generatedAt={generatedAt}
    />
  );
}
