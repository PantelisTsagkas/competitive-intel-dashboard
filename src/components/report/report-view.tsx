"use client";

import { useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { GenerationOverlay } from "@/components/report/generation-overlay";
import { ReportHeader } from "@/components/report/report-header";
import { ReportSection } from "@/components/report/section";
import { SectionNav, type NavItem } from "@/components/report/section-nav";
import { ExecutiveSummary } from "@/components/report/sections/executive-summary";
import { CompanyProfile } from "@/components/report/sections/company-profile";
import { BusinessOverview } from "@/components/report/sections/business-overview";
import { FinancialSnapshot } from "@/components/report/sections/financial-snapshot";
import { MarketPosition } from "@/components/report/sections/market-position";
import { ProductsServices } from "@/components/report/sections/products-services";
import { CustomerExperience } from "@/components/report/sections/customer-experience";
import { DigitalPresence } from "@/components/report/sections/digital-presence";
import { HiringGrowth } from "@/components/report/sections/hiring-growth";
import { NewsTimeline } from "@/components/report/sections/news-timeline";
import { SwotGrid } from "@/components/report/sections/swot";
import { Opportunities } from "@/components/report/sections/opportunities";
import { Risks } from "@/components/report/sections/risks";
import { CompetitorComparison } from "@/components/report/sections/competitor-comparison";
import { Sources } from "@/components/report/sections/sources";
import type { Company, ComparisonData, IntelligenceReport } from "@/lib/types";

interface SectionDef {
  id: string;
  label: string;
  description?: string;
  render: () => React.ReactNode;
}

export function ReportView({
  company,
  report,
  comparison,
  entityLabel,
  generationSteps,
  generatedAt,
}: {
  company: Company;
  report: IntelligenceReport;
  comparison: ComparisonData;
  entityLabel: string;
  generationSteps: string[];
  generatedAt: string;
}) {
  const [ready, setReady] = useState(false);

  const sections: SectionDef[] = [
    { id: "summary", label: "Executive Summary", render: () => <ExecutiveSummary paragraphs={report.executiveSummary} /> },
    { id: "profile", label: "Company Profile", render: () => <CompanyProfile fields={report.profile} /> },
    { id: "business", label: "Business Overview", render: () => <BusinessOverview overview={report.businessOverview} /> },
    { id: "financials", label: "Financial Snapshot", render: () => <FinancialSnapshot financials={report.financials} /> },
    { id: "market", label: "Market Position", render: () => <MarketPosition companyId={company.id} position={report.marketPosition} /> },
    { id: "products", label: "Products & Services", render: () => <ProductsServices categories={report.productsServices} /> },
    { id: "customers", label: "Customer Experience", render: () => <CustomerExperience experience={report.customerExperience} /> },
    { id: "digital", label: "Digital Presence", render: () => <DigitalPresence digital={report.digitalPresence} /> },
    { id: "hiring", label: "Hiring & Growth", render: () => <HiringGrowth hiring={report.hiringGrowth} /> },
    { id: "news", label: "Recent News", render: () => <NewsTimeline items={report.news} /> },
    { id: "swot", label: "SWOT Analysis", render: () => <SwotGrid swot={report.swot} /> },
    {
      id: "opportunities",
      label: "Opportunities",
      description: "Where the company could win next, and against whom.",
      render: () => <Opportunities items={report.opportunities} />,
    },
    {
      id: "risks",
      label: "Risks",
      description: "Strategic and operational risks, ordered by severity.",
      render: () => <Risks items={report.risks} />,
    },
    {
      id: "comparison",
      label: "Competitor Comparison",
      description: "Side-by-side against selected competitors in this dataset.",
      render: () => <CompetitorComparison subjectId={company.id} comparison={comparison} />,
    },
    {
      id: "sources",
      label: "Sources",
      description: "Public sources a production pipeline would draw from.",
      render: () => <Sources items={report.sources} />,
    },
  ];

  const navItems: NavItem[] = sections.map(({ id, label }) => ({ id, label }));

  if (!ready) {
    return (
      <GenerationOverlay
        companyName={company.name}
        steps={generationSteps}
        onComplete={() => setReady(true)}
      />
    );
  }

  return (
    <>
      <SiteHeader datasetLabel={entityLabel} />
      <ReportHeader company={company} entityLabel={entityLabel} generatedAt={generatedAt} />
      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[200px_1fr]">
        <SectionNav items={navItems} />
        <div className="min-w-0 space-y-12">
          {sections.map((section, i) => (
            <div
              key={section.id}
              className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both"
              style={{
                animationDelay: `${Math.min(i, 6) * 90}ms`,
                animationDuration: "500ms",
              }}
            >
              <ReportSection
                id={section.id}
                index={i + 1}
                title={section.label}
                description={section.description}
              >
                {section.render()}
              </ReportSection>
            </div>
          ))}
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
