// ─── Intake ───

export interface AuditIntake {
  brandName: string;
  accentColor?: string;
  context?: string;
  contextFileUrl?: string;
}

// ─── Discovery ───

export interface BrandDiscovery {
  websiteUrl: string;
  industry: string;
  socialUrls: {
    instagram?: string;
    tiktok?: string;
    linkedin?: string;
    x?: string;
    facebook?: string;
  };
  description: string;
}

// ─── Research Output ───

export interface BrandSnapshot {
  positioning: string;
  voiceAndTone: { adjective: string; evidence: string }[];
  visualIdentity: string;
  keyOfferings: string[];
  digitalPresenceScore: "strong" | "moderate" | "weak";
  digitalPresenceReasoning: string;
  strengths: { title: string; detail: string }[];
  gaps: { title: string; detail: string }[];
}

export interface Competitor {
  name: string;
  website: string;
  instagram?: string;
  tiktok?: string;
  instagramFollowers?: string;
  tiktokFollowers?: string;
  threatLevel?: "high" | "medium" | "low";
  positioning: string;
  keyStrength: string;
  keyWeakness: string;
  exploitableGap: string;
}

export interface CompetitiveLandscape {
  competitors: Competitor[];
  landscapeSummary: string;
  marketCrowdedness: "low" | "moderate" | "high" | "saturated";
}

export interface DemographicCharts {
  ageDistribution: { label: string; percentage: number }[];
  genderSplit: { label: string; percentage: number; color: string }[];
  topMarkets: string[];
  incomeLevel: string;
  educationLevel: string;
}

export interface AudiencePersona {
  name: string;
  age: string;
  description: string;
  tags: string[];
}

export interface AudienceProfile {
  coreDemographic: string;
  demographicCharts?: DemographicCharts;
  psychographicDrivers: string[];
  onlineBehavior: { platform: string; behavior: string }[];
  painPoints: string[];
  purchaseTriggers: string[];
  voiceOfCustomer: { quote: string; source: string }[];
  personas?: AudiencePersona[];
}

export interface StrategicOpportunity {
  title: string;
  reasoning: string;
  impact: "high" | "medium" | "low";
  effort: "high" | "medium" | "low";
}

export interface Recommendation {
  title: string;
  description: string;
  actionItems: string[];
  timeline: string;
  category: "brand" | "content" | "paid" | "email" | "social" | "web" | "seo";
}

export interface KPITarget {
  metric: string;
  currentEstimate?: string;
  target: string;
  benchmark: string;
  timeframe: string;
}

export interface ServiceRoadmap {
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface AuditImages {
  hero1: string;
  hero2: string;
  product: string;
  editorial: string;
  texture: string;
  brutalist: string;
}

// ─── Full Audit Data ───

export interface AuditData {
  id: string;
  slug: string;
  status: AuditStatus;
  createdAt: string;
  completedAt?: string;
  pipelineProgress: PipelineProgress;
  intake: AuditIntake;
  discovery?: BrandDiscovery;
  brandSnapshot?: BrandSnapshot;
  competitiveLandscape?: CompetitiveLandscape;
  audienceProfile?: AudienceProfile;
  strategicOpportunities?: StrategicOpportunity[];
  recommendations?: Recommendation[];
  kpiTargets?: KPITarget[];
  serviceRoadmap?: ServiceRoadmap[];
  images?: AuditImages;
  releaseSnapshot?: ReleaseSnapshot;
  campaignBlueprint?: CampaignBlueprint;
  deepDive?: DeepDive;
  accentColor: string;
  auditTitle: string;
  tagline: string;
}

// ─── Deep Dive (layered intelligence section) ───

export interface DeepDiveFinding {
  label: string;
  value: string;
  context?: string;
}

export interface DeepDiveQuote {
  text: string;
  source: string;
  url?: string;
}

export interface DeepDiveStream {
  number: string;
  title: string;
  stance: string;
  findings: DeepDiveFinding[];
  quote?: DeepDiveQuote;
}

export interface DeepDive {
  headline: string;
  subhead: string;
  streams: DeepDiveStream[];
  dossierUrl?: string;
  dossierLabel?: string;
}

export type AuditStatus =
  | "pending"
  | "discovering"
  | "researching"
  | "generating-images"
  | "compiling"
  | "complete"
  | "failed";

export interface PipelineStep {
  name: string;
  status: "pending" | "running" | "complete" | "failed";
  startedAt?: string;
  completedAt?: string;
  error?: string;
}

export interface PipelineProgress {
  steps: PipelineStep[];
  currentStep: number;
  totalSteps: number;
}

export interface CreateAuditRequest {
  intake: AuditIntake;
}

export interface AuditStatusResponse {
  id: string;
  status: AuditStatus;
  progress: PipelineProgress;
  auditUrl?: string;
}

export interface PipelineEvent {
  type: "step-start" | "step-complete" | "step-error" | "pipeline-complete" | "log";
  step?: string;
  message: string;
  data?: Record<string, unknown>;
}

// ─── Release Snapshot (hybrid section) ───

export interface ReleaseEntry {
  artistName: string;
  releaseTitle: string;
  releaseDate: string;
  label?: string;
  marketingAnalysis: string;
  performanceTier: "breakout" | "solid" | "underperformed";
}

export interface ReleaseSnapshot {
  labelReleases: ReleaseEntry[];
  competitorReleases: ReleaseEntry[];
  synthesis: string;
}

// ─── Campaign Blueprint (hybrid section) ───

export interface CampaignWeek {
  week: number;
  theme: string;
  actions: string[];
}

export interface CampaignBlueprint {
  artist: string;
  artistDescription: string;
  campaignTitle: string;
  campaignSummary: string;
  contentPillars: string[];
  platformStrategy: { platform: string; strategy: string }[];
  creatorActivation: string;
  weeks: CampaignWeek[];
  keyMilestones: string[];
  teaser: string;
}
