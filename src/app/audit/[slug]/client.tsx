"use client";

import type { AuditData } from "@/lib/types/audit";
import Hero from "@/components/audit/Hero";
import BrandSnapshotSection from "@/components/audit/BrandSnapshot";
import CompetitiveLandscapeSection from "@/components/audit/CompetitiveLandscape";
import AudienceProfileSection from "@/components/audit/AudienceProfile";
import StrategicOpportunitiesSection from "@/components/audit/StrategicOpportunities";
import RecommendationsSection from "@/components/audit/Recommendations";
import KPITargetsSection from "@/components/audit/KPITargets";
import ServiceRoadmapSection from "@/components/audit/ServiceRoadmap";
import ImageBreak from "@/components/audit/ImageBreak";
import Footer from "@/components/audit/Footer";

export default function AuditPageClient({ audit }: { audit: AuditData }) {
  return (
    <div
      className="min-h-screen bg-surface-0 text-white"
      style={{
        // @ts-expect-error CSS custom properties
        "--color-accent": audit.accentColor,
        "--color-accent-dim": `${audit.accentColor}40`,
      }}
    >
      <Hero audit={audit} />

      {audit.brandSnapshot && (
        <BrandSnapshotSection snapshot={audit.brandSnapshot} />
      )}

      {audit.images?.hero2 && (
        <ImageBreak src={audit.images.hero2} alt="Brand lifestyle" />
      )}

      {audit.competitiveLandscape && (
        <CompetitiveLandscapeSection landscape={audit.competitiveLandscape} />
      )}

      {audit.audienceProfile && (
        <AudienceProfileSection profile={audit.audienceProfile} />
      )}

      {audit.images?.editorial && (
        <ImageBreak src={audit.images.editorial} alt="Editorial" />
      )}

      {audit.strategicOpportunities && audit.strategicOpportunities.length > 0 && (
        <StrategicOpportunitiesSection opportunities={audit.strategicOpportunities} />
      )}

      {audit.recommendations && audit.recommendations.length > 0 && (
        <RecommendationsSection recommendations={audit.recommendations} />
      )}

      {audit.kpiTargets && audit.kpiTargets.length > 0 && (
        <KPITargetsSection targets={audit.kpiTargets} />
      )}

      {audit.serviceRoadmap && audit.serviceRoadmap.length > 0 && (
        <ServiceRoadmapSection roadmap={audit.serviceRoadmap} />
      )}

      {audit.images?.brutalist && (
        <ImageBreak src={audit.images.brutalist} alt="Visual" />
      )}

      <Footer brandName={audit.intake.brandName} />
    </div>
  );
}
