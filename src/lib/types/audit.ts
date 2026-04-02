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

export interface AudienceProfile {
  coreDemographic: string;
  psychographicDrivers: string[];
  onlineBehavior: { platform: string; behavior: string }[];
  painPoints: string[];
  purchaseTriggers: string[];
  voiceOfCustomer: { quote: string; source: string }[];
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
  accentColor: string;
  auditTitle: string;
  tagline: string;
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
