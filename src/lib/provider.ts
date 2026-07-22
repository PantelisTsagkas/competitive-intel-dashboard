import { datasets } from "@/data/registry";
import type {
  Company,
  ComparisonData,
  Dataset,
  DatasetMeta,
  IntelligenceReport,
  UpcomingCompany,
} from "@/lib/types";

/**
 * The seam between the UI and its data.
 *
 * The app only ever talks to an IntelligenceProvider. Swapping the mock for a
 * real implementation (company APIs, a scraping pipeline, an internal data
 * warehouse) means implementing this interface and changing one export below.
 */
export interface IntelligenceProvider {
  getDatasets(): Promise<DatasetMeta[]>;
  getDataset(datasetId: string): Promise<Dataset>;
  getCompanies(datasetId: string): Promise<Company[]>;
  /** Named but unprofiled targets. Empty when a dataset declares none. */
  getUpcomingCompanies(datasetId: string): Promise<UpcomingCompany[]>;
  getReport(datasetId: string, companyId: string): Promise<IntelligenceReport>;
  getComparison(datasetId: string): Promise<ComparisonData>;
}

class MockProvider implements IntelligenceProvider {
  private find(datasetId: string): Dataset {
    const dataset = datasets.find((d) => d.id === datasetId);
    if (!dataset) throw new Error(`Unknown dataset: ${datasetId}`);
    return dataset;
  }

  async getDatasets(): Promise<DatasetMeta[]> {
    return datasets.map(({ id, name, entityLabel, description }) => ({
      id,
      name,
      entityLabel,
      description,
    }));
  }

  async getDataset(datasetId: string): Promise<Dataset> {
    return this.find(datasetId);
  }

  async getCompanies(datasetId: string): Promise<Company[]> {
    return this.find(datasetId).companies;
  }

  async getUpcomingCompanies(datasetId: string): Promise<UpcomingCompany[]> {
    return this.find(datasetId).upcomingCompanies ?? [];
  }

  async getReport(datasetId: string, companyId: string): Promise<IntelligenceReport> {
    const report = this.find(datasetId).reports[companyId];
    if (!report) throw new Error(`No report for ${companyId} in ${datasetId}`);
    return report;
  }

  async getComparison(datasetId: string): Promise<ComparisonData> {
    const dataset = this.find(datasetId);
    return {
      dimensions: dataset.comparisonDimensions,
      rows: dataset.companies.map((company) => ({
        company,
        values: dataset.reports[company.id]?.comparisonValues ?? {},
      })),
    };
  }
}

export const provider: IntelligenceProvider = new MockProvider();
